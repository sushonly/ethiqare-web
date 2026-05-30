'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const WA_NUMBER = '919033322244'
const WA_LINK   = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi! I\'d like to know more about MushBaby products.')}`

const NAV_LINKS = [
  { href: '/',                 label: 'Home'      },
  { href: '/about',            label: 'About'     },
  { href: '/brands/mushbaby',  label: 'MushBaby'  },
  { href: '/contact',          label: 'Contact'   },
]

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  const isMushBaby = pathname.startsWith('/brands/mushbaby')

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Ethiqare logo mark — concentric arcs */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="16" stroke="#1A2D6B" strokeWidth="2.5" fill="none"/>
            <path d="M8 18 A10 10 0 0 1 28 18" stroke="#C41E20" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <path d="M12 18 A6 6 0 0 1 24 18"  stroke="#1A2D6B" strokeWidth="2"   fill="none" strokeLinecap="round"/>
            <circle cx="18" cy="18" r="2.5" fill="#1A2D6B"/>
          </svg>
          <div className="leading-tight">
            <div className="font-display font-800 text-lg text-navy tracking-tight group-hover:text-crimson transition-colors">
              Ethiqare
            </div>
            <div className="text-[9px] text-gray-400 font-semibold tracking-widest uppercase -mt-0.5">
              Healthcare
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-full text-sm font-700 transition-all ${
                  active
                    ? isMushBaby && href === '/brands/mushbaby'
                      ? 'bg-mb-blue-pale text-mb-blue'
                      : 'bg-gray-100 text-navy'
                    : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* WhatsApp CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white text-sm font-800 px-4 py-2 rounded-full transition-all hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.121 1.528 5.854L.057 23.97l6.255-1.439A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 01-5.003-1.373l-.359-.214-3.72.856.875-3.63-.234-.373A9.818 9.818 0 012.182 12c0-5.419 4.399-9.818 9.818-9.818 5.42 0 9.818 4.399 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
            </svg>
            WhatsApp
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="6"  x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            }
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block px-4 py-3 rounded-xl text-base font-700 text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors"
            >
              {label}
            </Link>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-800 px-4 py-3 rounded-xl"
          >
            💬 WhatsApp Us
          </a>
        </div>
      )}
    </header>
  )
}
