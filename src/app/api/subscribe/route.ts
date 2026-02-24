import { NextRequest, NextResponse } from 'next/server'

const SYSTEME_API_KEY = process.env.SYSTEME_API_KEY!
const SYSTEME_API_URL = 'https://api.systeme.io/api/contacts'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }
    const res = await fetch(SYSTEME_API_URL, {
      method: 'POST',
      headers: {
        'X-API-Key': SYSTEME_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, locale: 'es' }),
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
