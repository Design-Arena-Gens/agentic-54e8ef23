"use client"

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(formData: FormData) {
    setStatus('loading')
    setError(null)

    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
    } catch (e: any) {
      setStatus('error')
      setError(e?.message || 'Something went wrong')
    }
  }

  return (
    <form action={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-slate-300">Name</label>
        <input name="name" required className="mt-1 w-full rounded bg-white/5 ring-1 ring-white/10 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm text-slate-300">Email</label>
        <input name="email" type="email" required className="mt-1 w-full rounded bg-white/5 ring-1 ring-white/10 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm text-slate-300">Company</label>
        <input name="company" className="mt-1 w-full rounded bg-white/5 ring-1 ring-white/10 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm text-slate-300">Budget</label>
        <select name="budget" className="mt-1 w-full rounded bg-white/5 ring-1 ring-white/10 px-3 py-2">
          <option value="<10k">Under $10k</option>
          <option value="10-25k">$10k – $25k</option>
          <option value=">25k">$25k+</option>
        </select>
      </div>
      <div>
        <label className="block text-sm text-slate-300">Goals</label>
        <textarea name="message" rows={5} required className="mt-1 w-full rounded bg-white/5 ring-1 ring-white/10 px-3 py-2" />
      </div>
      <button disabled={status==='loading'} className="px-5 py-2.5 rounded bg-brand-500 hover:bg-brand-400 text-white font-semibold">
        {status==='loading' ? 'Sending…' : 'Request proposal'}
      </button>
      {status==='success' && <p className="text-green-400">Thanks! We will be in touch shortly.</p>}
      {status==='error' && <p className="text-red-400">{error}</p>}
    </form>
  )
}
