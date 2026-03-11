import { NextRequest, NextResponse } from 'next/server'

const SYSTEME_API_KEY = process.env.SYSTEME_API_KEY!
const SYSTEME_API_URL = 'https://api.systeme.io/api/contacts'
const FREE_GUIDE_TAG_ID = 1913453 // chatgpt-free-guide

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
    const now = Date.now()
    const rl = rateLimitMap.get(ip)
    if (rl && now < rl.resetAt) {
      if (rl.count >= 3) return NextResponse.json({ success: true }) // silent reject
      rl.count++
    } else {
      rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 })
    }

    const body = await request.json()
    const { email, source } = body

    // Honeypot
    if (body.website_url !== undefined && body.website_url !== '') {
      return NextResponse.json({ success: true })
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }
    const apiHeaders = {
      'X-API-Key': SYSTEME_API_KEY,
      'Content-Type': 'application/json',
    }

    // Step 1: Create contact (or find existing)
    let contactId: number | null = null
    const res = await fetch(SYSTEME_API_URL, {
      method: 'POST',
      headers: apiHeaders,
      body: JSON.stringify({
        email,
        locale: 'es',
        ...(source ? { fields: [{ slug: 'website', value: `source:${source}` }] } : {}),
      }),
    })

    if (res.ok) {
      const contact = await res.json()
      contactId = contact.id
    } else if (res.status === 422) {
      // Already exists — look up their ID
      const lookup = await fetch(`${SYSTEME_API_URL}?email=${encodeURIComponent(email)}`, { headers: apiHeaders })
      if (lookup.ok) {
        const data = await lookup.json()
        if (data.items?.length > 0) contactId = data.items[0].id
      }
    } else {
      const err = await res.json()
      return NextResponse.json({ error: err.detail || 'Error al suscribir' }, { status: 500 })
    }

    // Step 2: Assign chatgpt-free-guide tag → triggers email sequence
    if (contactId) {
      await fetch(`${SYSTEME_API_URL}/${contactId}/tags`, {
        method: 'POST',
        headers: apiHeaders,
        body: JSON.stringify({ tagId: FREE_GUIDE_TAG_ID }),
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 })
  }
}
