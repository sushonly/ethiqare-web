import type { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ethiqare Healthcare — product enquiries, bulk orders, partnerships, and customer support.',
}

const WA_LINK = `https://wa.me/919033322244?text=${encodeURIComponent("Hi! I'd like to get in touch with Ethiqare Healthcare.")}`

const CONTACT_CHANNELS = [
  {
    label: 'Phone',
    value: '+91-9033322244',
    href: 'tel:+919033322244',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'General Enquiries',
    value: 'ethiqarehealthcare@gmail.com',
    href: 'mailto:ethiqarehealthcare@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Customer Care',
    value: 'cc.ethiqare@gmail.com',
    href: 'mailto:cc.ethiqare@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@ethiqare',
    href: 'https://www.instagram.com/ethiqare/',
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: 'Message us directly',
    href: WA_LINK,
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.121 1.528 5.854L.057 23.97l6.255-1.439A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 01-5.003-1.373l-.359-.214-3.72.856.875-3.63-.234-.373A9.818 9.818 0 012.182 12c0-5.419 4.399-9.818 9.818-9.818 5.42 0 9.818 4.399 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
      </svg>
    ),
  },
] as const

export default function ContactPage() {
  return (
    <div className="bg-eq-off-white min-h-screen">
      {/* Hero — bright, professional */}
      <section className="relative overflow-hidden border-b border-eq-navy/8 bg-gradient-to-br from-white via-[#F4F7FC] to-[#EEF3FB] px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-eq-navy/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-mb-blue/[0.06] blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-6 h-px bg-eq-navy/30" />
            <span className="text-[10px] font-700 uppercase tracking-[0.25em] text-eq-text-soft">Contact</span>
            <span className="w-6 h-px bg-eq-navy/30" />
          </div>
          <h1 className="font-corporate text-4xl lg:text-[52px] font-700 text-eq-navy leading-tight mb-4">
            Let&apos;s Start a <em className="italic text-eq-text-soft not-italic font-corporate">Conversation</em>
          </h1>
          <p className="text-base text-eq-text-mid leading-relaxed max-w-xl mx-auto">
            Product enquiries, distribution partnerships, bulk orders, or general support — our team responds within 1–2 business days.
          </p>
        </div>
      </section>

      {/* Form + details */}
      <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 lg:gap-12 lg:items-stretch">

          {/* Form card */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-eq-navy/10 shadow-[0_4px_32px_rgba(13,36,81,0.06)] p-8 lg:p-10">
            <h2 className="font-corporate text-2xl font-700 text-eq-navy mb-1">Send a Message</h2>
            <p className="text-sm text-eq-text-soft mb-8">
              Fill in the form below and we&apos;ll get back to you promptly.
            </p>
            <ContactForm />
          </div>

          {/* Sidebar — prominent dark panel with logo watermark */}
          <div className="lg:col-span-2 flex">
            <div className="relative flex-1 rounded-2xl overflow-hidden bg-gradient-to-br from-eq-navy via-[#0F2F6A] to-eq-navy-mid shadow-[0_12px_48px_rgba(13,36,81,0.28)]">
              {/* Ethiqare logo watermark */}
              <Image
                src="/images/ethiqare-logo.png"
                alt=""
                width={320}
                height={90}
                aria-hidden
                className="absolute -right-6 -bottom-4 w-[min(280px,70%)] h-auto opacity-[0.12] brightness-0 invert pointer-events-none select-none"
              />
              <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-eq-gold/[0.06] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/[0.03] translate-x-1/4 translate-y-1/4 pointer-events-none" />

              <div className="relative z-10 p-7 sm:p-8 lg:p-9 flex flex-col h-full">
                {/* Logo mark at top */}
                <div>
                  <Image
                    src="/images/ethiqare-logo.png"
                    alt="Ethiqare Healthcare"
                    width={180}
                    height={50}
                    className="h-10 w-auto brightness-0 invert opacity-95 mb-5"
                  />
                  <p className="text-[10px] font-700 uppercase tracking-[0.2em] text-eq-gold mb-3">Registered Office</p>
                  <address className="not-italic text-sm text-white/75 leading-relaxed">
                    <span className="block font-700 text-white mb-1.5">Ethiqare Healthcare Pvt. Ltd.</span>
                    Block A-701, Vraj Residency,<br />
                    Besides Vishwas City-6, Gota,<br />
                    Ahmedabad, Gujarat 382481 – India
                  </address>
                </div>

                <div className="border-t border-white/10 pt-8 flex-1">
                  <p className="text-[10px] font-700 uppercase tracking-[0.2em] text-eq-gold mb-4">Reach Us</p>
                  <ul className="space-y-0.5">
                    {CONTACT_CHANNELS.map(({ label, value, href, external, icon }) => (
                      <li key={label}>
                        <a
                          href={href}
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noopener noreferrer' : undefined}
                          className="flex items-start gap-3.5 py-3 px-2 -mx-2 rounded-xl hover:bg-white/[0.07] transition-colors group"
                        >
                          <span className="w-9 h-9 shrink-0 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-white/90 group-hover:bg-white group-hover:text-eq-navy transition-colors">
                            {icon}
                          </span>
                          <span className="min-w-0 pt-0.5">
                            <span className="block text-[10px] font-700 uppercase tracking-wider text-white/45 mb-0.5">{label}</span>
                            <span className="block text-sm font-600 text-white/85 group-hover:text-white transition-colors break-all">{value}</span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-[11px] text-white/35 text-center pt-2 border-t border-white/10">
                  CIN: U46497GJ2025PTC165581 · Made in India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
