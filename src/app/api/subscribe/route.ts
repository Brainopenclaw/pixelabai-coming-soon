import { NextRequest, NextResponse } from 'next/server'

const SYSTEME_API_KEY = process.env.SYSTEME_API_KEY!
const SYSTEME_API_URL = 'https://api.systeme.io/api/contacts'

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
    const res = await fetch(SYSTEME_API_URL, {
      method: 'POST',
      headers: {
        'X-API-Key': SYSTEME_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        locale: 'es',
        ...(source ? { fields: [{ slug: 'website', value: `source:${source}` }] } : {}),
      }),
    })
    if (res.ok) {
      return NextResponse.json({ success: true })
    }
    // 422 means contact already exists — treat as success for UX
    if (res.status === 422) {
      return NextResponse.json({ success: true })
    }
    const err = await res.json()
    return NextResponse.json({ error: err.detail || 'Error al suscribir' }, { status: 500 })
  } catch {
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 })
  }
}
