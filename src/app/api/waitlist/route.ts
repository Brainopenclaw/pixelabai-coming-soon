import { NextRequest, NextResponse } from 'next/server'

const SYSTEME_API_URL = 'https://api.systeme.io/api/contacts'

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

    // Call Systeme.io API
    const res = await fetch(SYSTEME_API_URL, {
      method: 'POST',
      headers: {
        'X-API-Key': SYSTEME_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        fields: [
          { slug: 'first_name', value: trimmedFirstName },
        ],
        tags: [
          { name: 'course-waitlist' },
        ],
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
    // Log error for debugging
    console.error('Waitlist API error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
