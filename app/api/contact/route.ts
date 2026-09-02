import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Basic validation
    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // In production, wire this to an email service (Resend, SMTP, etc.)
    // or a CRM. For now we log the inquiry server-side.
    console.log('New inquiry:', {
      name: body.name,
      company: body.company,
      email: body.email,
      phone: body.phone,
      projectType: body.projectType,
      message: body.message,
      at: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
  }
}
