import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json().catch(() => ({})) as Record<string, unknown>
  const name = String(data.name || '').trim()
  const email = String(data.email || '').trim()
  const company = String(data.company || '').trim()
  const budget = String(data.budget || '').trim()
  const message = String(data.message || '').trim()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // In real use, forward to CRM/email provider here
  console.log('[CONTACT] New inquiry', { name, email, company, budget, message })

  return NextResponse.json({ ok: true })
}
