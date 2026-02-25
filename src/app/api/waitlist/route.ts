import { NextRequest, NextResponse } from 'next/server'

const SYSTEME_API_KEY = process.env.SYSTEME_API_KEY!
const SYSTEME_API_URL = 'https://api.systeme.io/api/contacts'

export async function POST(request: NextRequest) {
  try {
    const { email, firstName } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Validate firstName
    if (!firstName || firstName.trim() === '') {
      return NextResponse.json({ error: 'First name is required' }, { status: 400 })
    }

    // Call Systeme.io API
    const res = await fetch(SYSTEME_API_URL, {
      method: 'POST',
      headers: {
        'X-API-Key': SYSTEME_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        fields: {
          first_name: firstName,
        },
        tags: ['course-waitlist'],
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
    return NextResponse.json(
      { error: err.detail || 'Failed to add to waitlist' },
      { status: 500 }
    )
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
