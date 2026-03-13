import { NextRequest, NextResponse } from 'next/server'

const SYSTEME_API_URL = 'https://api.systeme.io/api/contacts'
const COURSE_WAITLIST_TAG_ID = 1913458 // course-waitlist (recreated 2026-03-10)

// Proper email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Rate limiting: track IPs in memory (resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 3     // max submissions per window
const RATE_WINDOW = 60_000 // 1 minute

const ALLOWED_ORIGINS = ['https://pixelabai.com', 'https://www.pixelabai.com']

export async function POST(request: NextRequest) {
  try {
    // Runtime validation for required environment variable
    const SYSTEME_API_KEY = process.env.SYSTEME_API_KEY
    if (!SYSTEME_API_KEY) {
      console.error('SYSTEME_API_KEY environment variable is not configured')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    // Origin/Referer validation — block direct API calls from bots
    const isDev = process.env.NODE_ENV === 'development'
    if (!isDev) {
      const referer = request.headers.get('referer') ?? ''
      const origin = request.headers.get('origin') ?? ''
      if (!ALLOWED_ORIGINS.some(o => referer.startsWith(o) || origin.startsWith(o))) {
        return NextResponse.json({ success: true }) // silent reject
      }
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
    const now = Date.now()
    const rl = rateLimitMap.get(ip)
    if (rl && now < rl.resetAt) {
      if (rl.count >= RATE_LIMIT) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
      }
      rl.count++
    } else {
      rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
    }

    const body = await request.json()
    const { email, firstName, source } = body

    // Honeypot — bots fill this hidden field, humans never see it
    if (body.website_url !== undefined && body.website_url !== '') {
      return NextResponse.json({ success: true }) // silent reject
    }

    // Timing check — reject if submitted in under 2 seconds (likely bot)
    const formToken = body.form_token
    if (formToken) {
      const elapsed = Date.now() - parseInt(formToken, 10)
      if (elapsed < 2000) {
        return NextResponse.json({ success: true }) // silent reject
      }
    }

    // Validate email with proper regex
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Validate firstName - check trimmed length
    const trimmedFirstName = firstName?.trim() || ''
    if (trimmedFirstName.length === 0) {
      return NextResponse.json({ error: 'First name is required' }, { status: 400 })
    }

    // Enhanced bot name detection
    const looksLikeBot =
      // Too short
      trimmedFirstName.length < 2 ||
      // No vowels — catches random consonant strings like "SpojKDQ" or "XmKpQ"
      !/[aeiouáéíóúü]/i.test(trimmedFirstName) ||
      // Long mixed-case gibberish
      (trimmedFirstName.length > 15 &&
        !trimmedFirstName.includes(' ') &&
        /[A-Z]/.test(trimmedFirstName) &&
        /[a-z]/.test(trimmedFirstName) &&
        !/^[A-Z][a-z]+$/.test(trimmedFirstName))
    if (looksLikeBot) {
      return NextResponse.json({ success: true }) // silent reject
    }

    const headers = {
      'X-API-Key': SYSTEME_API_KEY,
      'Content-Type': 'application/json',
    }

    // Step 1: Create (or find existing) contact
    let contactId: number | null = null

    const createRes = await fetch(SYSTEME_API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email,
        fields: [
          { slug: 'first_name', value: trimmedFirstName },
          ...(source ? [{ slug: 'website', value: `source:${source}` }] : []),
        ],
      }),
    })

    if (createRes.ok) {
      const contact = await createRes.json()
      contactId = contact.id
    } else if (createRes.status === 422) {
      // Contact already exists — look up their ID
      const lookupRes = await fetch(
        `${SYSTEME_API_URL}?email=${encodeURIComponent(email)}`,
        { headers }
      )
      if (lookupRes.ok) {
        const data = await lookupRes.json()
        if (data.items?.length > 0) {
          contactId = data.items[0].id
        }
      }
    } else {
      const err = await createRes.json().catch(() => ({}))
      console.error('Systeme.io create contact error:', err)
      return NextResponse.json(
        { error: err.detail || 'Failed to add to waitlist' },
        { status: 500 }
      )
    }

    // Step 2: Assign the course-waitlist tag (triggers Systeme.io workflow)
    if (contactId) {
      const tagRes = await fetch(
        `${SYSTEME_API_URL}/${contactId}/tags`,
        {
          method: 'POST',
          headers,
          body: JSON.stringify({ tagId: COURSE_WAITLIST_TAG_ID }),
        }
      )
      if (!tagRes.ok && tagRes.status !== 409) {
        console.error('Failed to assign tag:', tagRes.status, await tagRes.text().catch(() => ''))
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Waitlist API error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
