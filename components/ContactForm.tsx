'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

const inputClass =
  'w-full text-sm border border-eq-navy/12 rounded-lg px-4 py-3 bg-eq-off-white/50 text-eq-text outline-none focus:border-eq-navy focus:bg-white transition-colors placeholder:text-eq-text-soft/60'

export default function ContactForm() {
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [phone, setPhone]     = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !message) return

    setLoading(true)
    setError(null)

    const { error: insertError } = await supabase.from('subscribers').insert({
      name: name || null,
      email,
      phone: phone || null,
      type: 'contact',
      message,
    })

    setLoading(false)

    if (insertError) {
      setError('Something went wrong. Please try again or email us directly.')
      return
    }

    setSent(true)
  }

  if (sent) {
    return (
      <div className="text-center py-10 px-4 rounded-xl bg-eq-off-white border border-eq-navy/10">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-eq-navy/8 flex items-center justify-center text-eq-navy text-xl font-700">✓</div>
        <h3 className="font-corporate text-xl font-700 text-eq-navy mb-2">Message Sent</h3>
        <p className="text-sm text-eq-text-mid max-w-sm mx-auto">
          Thank you for reaching out. We&apos;ll get back to you within 1–2 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-[11px] font-700 uppercase tracking-wider text-eq-text-soft mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[11px] font-700 uppercase tracking-wider text-eq-text-soft mb-2">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="+91 XXXXX XXXXX"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-[11px] font-700 uppercase tracking-wider text-eq-text-soft mb-2">
          Email <span className="text-eq-navy">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-[11px] font-700 uppercase tracking-wider text-eq-text-soft mb-2">
          Message <span className="text-eq-navy">*</span>
        </label>
        <textarea
          id="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Tell us about your enquiry — products, bulk orders, partnerships…"
          required
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <div className="text-sm text-eq-navy bg-eq-off-white border border-eq-navy/15 rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-eq-navy hover:bg-eq-navy-mid text-white font-700 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(13,36,81,0.2)] disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {loading ? 'Sending…' : 'Send Message →'}
      </button>
    </form>
  )
}
