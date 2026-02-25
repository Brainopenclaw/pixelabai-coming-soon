import { NextRequest, NextResponse } from 'next/server'

const SYSTEME_API_URL = 'https://api.systeme.io/api/contacts'
const COURSE_WAITLIST_TAG_ID = 1892958

// Proper email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    // Runtime validation for required environment variable
    const SYSTEME_API_KEY = process.env.SYSTEME_API_KEY
    if (!SYSTEME_API_KEY) {
      console.error('SYSTEME_API_KEY environment variable is not configured')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const { email, firstName } = await request.json()

    // Validate email with proper regex
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Validate firstName - check trimmed length
    const trimmedFirstName = firstName?.trim() || ''
    if (trimmedFirstName.length === 0) {
      return NextResponse.json({ error: 'First name is required' }, { status: 400 })
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
        ],
      }),
    })

    if (createRes.ok) {
      // New contact created — grab the ID
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
        // 409 = tag already assigned, which is fine
        console.error('Failed to assign tag:', tagRes.status, await tagRes.text().catch(() => ''))
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    // Log error for debugging
    console.error('Waitlist API error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
