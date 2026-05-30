import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="font-display font-800 text-2xl mb-1">Ethiqare</div>
            <div className="text-xs text-white/40 uppercase tracking-widest mb-4">Healthcare Pvt. Ltd.</div>
            <p className="text-sm text-white/55 leading-relaxed">
              Developing trusted, natural healthcare and personal care products — built on clean ingredients, backed by science, trusted by families.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/ethiqare/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919033322244"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#25D366]/80 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.121 1.528 5.854L.057 23.97l6.255-1.439A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 01-5.003-1.373l-.359-.214-3.72.856.875-3.63-.234-.373A9.818 9.818 0 012.182 12c0-5.419 4.399-9.818 9.818-9.818 5.42 0 9.818 4.399 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-xs font-800 uppercase tracking-widest text-white/40 mb-4">Pages</div>
              {[
                ['Home',     '/'],
                ['About',    '/about'],
                ['MushBaby', '/brands/mushbaby'],
                ['Contact',  '/contact'],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-sm text-white/55 hover:text-white transition-colors mb-2"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div>
              <div className="text-xs font-800 uppercase tracking-widest text-white/40 mb-4">MushBaby</div>
              {[
                'Bathing Bar',
                'Toothpaste ↗',
                'Shampoo ↗',
                'Lotion ↗',
                'Tip-to-Toe Wash ↗',
              ].map(p => (
                <Link
                  key={p}
                  href="/brands/mushbaby"
                  className="block text-sm text-white/55 hover:text-white transition-colors mb-2"
                >
                  {p}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-800 uppercase tracking-widest text-white/40 mb-4">Contact</div>
            <address className="not-italic text-sm text-white/55 leading-relaxed space-y-3">
              <div>
                <div className="text-white/80 font-600 mb-0.5">Ethiqare Healthcare Pvt. Ltd.</div>
                <div>Block A/A-701, Vraj Residency,</div>
                <div>B/s Vishwas City-6, Gota,</div>
                <div>Ahmedabad – 382481, Gujarat</div>
              </div>
              <div>
                <a href="tel:+919033322244" className="hover:text-white transition-colors">
                  📞 +91-9033322244
                </a>
              </div>
              <div>
                <a href="mailto:ethiqarehealthcare@gmail.com" className="hover:text-white transition-colors break-all">
                  ✉️ ethiqarehealthcare@gmail.com
                </a>
              </div>
              <div>
                <a href="mailto:cc.ethiqare@gmail.com" className="hover:text-white transition-colors">
                  ✉️ cc.ethiqare@gmail.com
                </a>
              </div>
            </address>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/30">
          <div>© 2026 Ethiqare Healthcare Pvt. Ltd. All rights reserved.</div>
          <div>CIN: U46497GJ2025PTC165581 · Made in India 🇮🇳</div>
        </div>
      </div>
    </footer>
  )
}
