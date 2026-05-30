import Image from 'next/image'
import Link from 'next/link'
import PortfolioSection from '@/components/home/PortfolioSection'
import { getProducts } from '@/lib/supabase'

const pillars = [
  { icon: '⚗️', title: 'Science-Backed', desc: 'Every formulation is grounded in rigorous research and advanced pharmaceutical science, meeting the highest global efficacy standards.' },
  { icon: '🤝', title: 'Ethical Integrity', desc: "Transparency in every decision — from ingredient sourcing to patient outcomes. Ethics isn't our policy; it's our identity." },
  { icon: '🌍', title: 'Accessible Care', desc: 'Delivering superior healthcare solutions at true value — ensuring that quality healthcare is accessible to every individual, everywhere.' },
  { icon: '🌱', title: 'Planet Conscious', desc: 'Responsible sourcing, eco-conscious packaging, and a commitment to sustainability — because we care for the planet as much as patients.' },
]

const tickerItems = [
  '⚕️ Ethiqare Healthcare Pvt. Ltd.',
  '🌿 Natural Baby Care — MushBaby Range',
  '💊 Nutraceuticals',
  '🩺 Medical Devices',
  '🏭 Ethical Pharmaceutical Manufacturing',
  '🇮🇳 Made in India · Trusted Globally',
  '🔬 Global Quality Standards',
  '💙 Integrity · Innovation · Care',
]

const values = [
  { num: '01', title: 'Integrity in Every Decision', desc: 'From ingredient sourcing to final product — every choice is made with honesty, transparency, and scientific accountability.' },
  { num: '02', title: 'Innovation That Matters', desc: 'Continuous R&D ensures our formulations stay at the frontier of efficacy, safety, and sustainability in modern healthcare.' },
  { num: '03', title: 'Long-Term Partnerships', desc: 'We build lasting relationships with healthcare professionals, distributors, and consumers by delivering products that inspire real trust.' },
  { num: '04', title: 'Global Reach, Local Heart', desc: 'Headquartered in Ahmedabad and distributed across India and international markets — with global standards and local care.' },
]

export default async function HomePage() {
  const products = await getProducts()

  return (
    <>
      {/* Grid texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13,36,81,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13,36,81,0.018) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        aria-hidden
      />

      {/* Hero */}
      <section id="home" className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-4rem)] bg-eq-off-white">
        <div className="bg-eq-navy px-6 sm:px-10 lg:pl-[8%] lg:pr-[6%] py-16 lg:py-24 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -top-52 -left-52 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(200,32,46,0.15)_0%,transparent_65%)]" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[radial-gradient(circle,rgba(201,168,76,0.1)_0%,transparent_70%)]" />

          <div className="relative z-10">
            <Image
              src="/images/ethiqare-logo.png"
              alt="Ethiqare Healthcare"
              width={200}
              height={56}
              className="mb-8 h-12 w-auto brightness-0 invert opacity-95"
              priority
            />
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-8 h-px bg-eq-red" />
              <span className="text-[11px] font-600 text-white/60 uppercase tracking-[0.25em]">Ethical Healthcare · True Value</span>
            </div>

            <h1 className="font-corporate text-[clamp(2.75rem,5.5vw,4.75rem)] font-700 text-white leading-[1.05] tracking-tight mb-2">
              Advancing<br />
              <em className="italic text-eq-gold not-italic font-corporate">Healthcare.</em><br />
              Ethically.
            </h1>

            <p className="font-corporate text-[clamp(1.25rem,2.5vw,1.875rem)] text-white/55 mb-7">
              For Every Life, Everywhere.
            </p>

            <p className="text-[15px] leading-relaxed text-white/65 max-w-md mb-10">
              Ethiqare Healthcare Pvt. Ltd. is a forward-thinking pharmaceutical company delivering science-backed solutions across nutraceuticals, cosmetics, and medical devices — guided by integrity, innovation, and care.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="#portfolio" className="inline-flex items-center gap-2 bg-eq-red text-white px-8 py-3.5 rounded-md text-sm font-600 hover:bg-[#a51826] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(200,32,46,0.4)] transition-all border border-eq-red">
                View Our Portfolio ↓
              </Link>
              <Link href="#about" className="inline-flex items-center gap-2 bg-transparent text-white/75 px-8 py-3.5 rounded-md text-sm font-600 border border-white/25 hover:border-white/60 hover:text-white transition-all">
                Our Mission →
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="font-corporate text-4xl font-700 text-eq-gold leading-none">3+</div>
                <div className="text-[11px] font-500 text-white/50 uppercase tracking-widest mt-1">Product Categories</div>
              </div>
              <div>
                <div className="font-corporate text-4xl font-700 text-eq-gold leading-none">IN</div>
                <div className="text-[11px] font-500 text-white/50 uppercase tracking-widest mt-1">&amp; Global Markets</div>
              </div>
              <div>
                <div className="font-corporate text-4xl font-700 text-eq-gold leading-none">100%</div>
                <div className="text-[11px] font-500 text-white/50 uppercase tracking-widest mt-1">Ethical Standards</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-eq-off-white grid grid-rows-[1fr_auto] min-h-[400px]">
          <Link
            href="/brands/mushbaby"
            className="group relative flex items-center justify-center p-8 sm:p-10 border-b border-mb-blue-light/40 bg-gradient-to-br from-white via-mb-off to-mb-blue-pale hover:to-mb-blue-light/30 transition-colors overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #11AEDB 0, #11AEDB 1px, transparent 0, transparent 50%)',
                backgroundSize: '12px 12px',
              }}
            />
            <div className="relative z-10 text-center">
              <span className="inline-block bg-mb-blue text-white text-[9px] font-800 uppercase tracking-widest px-2.5 py-1 rounded-full mb-4">
                🌟 Featured Brand
              </span>
              <div className="font-display text-5xl sm:text-[52px] font-800 leading-none text-mb-navy">
                MushBaby
              </div>
              <p className="font-display text-[13px] text-mb-blue-deep italic mt-1.5 mb-5">
                Gentle by Nature. Trusted by Love.
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-5">
                {['Bathing Bar', 'Shower Gel', 'Body Oil', 'Moisturizer', 'Shampoo'].map((pill) => (
                  <span key={pill} className="bg-white border border-mb-blue-light px-3 py-1 rounded-full text-[11px] font-700 text-mb-navy">{pill}</span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 bg-mb-blue text-white px-6 py-2.5 rounded-xl text-[13px] font-800 group-hover:bg-mb-blue-deep transition-colors">
                Explore MushBaby →
              </span>
            </div>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 bg-white/80">
            <div className="p-7 sm:p-8 border-r border-eq-navy/10 relative">
              <span className="inline-block text-[9px] font-700 uppercase tracking-widest px-2 py-0.5 rounded bg-[#FFF8E1] text-[#8B6914] mb-3">Coming Soon</span>
              <div className="text-[28px] mb-3">💊</div>
              <div className="text-sm font-700 text-eq-navy mb-1">Nutraceuticals</div>
              <div className="text-[10px] font-600 uppercase tracking-widest text-eq-text-soft">Science-Backed Wellness</div>
            </div>
            <div className="p-7 sm:p-8 relative">
              <span className="inline-block text-[9px] font-700 uppercase tracking-widest px-2 py-0.5 rounded bg-[#FFF8E1] text-[#8B6914] mb-3">Coming Soon</span>
              <div className="text-[28px] mb-3">🩺</div>
              <div className="text-sm font-700 text-eq-navy mb-1">Medical Devices</div>
              <div className="text-[10px] font-600 uppercase tracking-widest text-eq-text-soft">Precision Healthcare</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="relative z-10 bg-eq-red overflow-hidden py-3 border-t border-black/10">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-xs font-600 text-white/85 tracking-wide px-8">
              {item} <span className="text-white/40">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Pillars */}
      <section id="pillars" className="relative z-10 bg-white border-t border-eq-navy/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[6%] py-20 lg:py-24">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-3.5">
              <span className="w-7 h-[1.5px] bg-eq-red" />
              <span className="text-[10.5px] font-700 uppercase tracking-[0.2em] text-eq-red">What We Stand For</span>
              <span className="w-7 h-[1.5px] bg-eq-red" />
            </div>
            <h2 className="font-corporate text-4xl lg:text-[54px] font-700 text-eq-navy leading-tight">
              Our Core <em className="italic text-eq-text-soft not-italic font-corporate">Pillars</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-eq-navy/10 rounded-xl overflow-hidden shadow-[0_8px_48px_rgba(13,36,81,0.07)]">
            {pillars.map(({ icon, title, desc }) => (
              <div key={title} className="group p-8 sm:p-10 border-b sm:border-b-0 sm:border-r border-eq-navy/10 last:border-r-0 last:border-b-0 hover:bg-eq-off-white transition-colors relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-eq-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <div className="w-[52px] h-[52px] bg-eq-off-white rounded-[10px] flex items-center justify-center text-2xl mb-5 group-hover:bg-eq-red-pale transition-colors">{icon}</div>
                <h3 className="text-[17px] font-700 text-eq-navy mb-2">{title}</h3>
                <p className="text-[13.5px] text-eq-text-soft leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioSection products={products} />

      {/* About */}
      <section id="about" className="relative z-10 bg-white border-t border-eq-navy/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[6%] py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-7 h-[1.5px] bg-eq-red" />
                <span className="text-[10.5px] font-700 uppercase tracking-[0.2em] text-eq-red">Who We Are</span>
              </div>
              <h2 className="font-corporate text-4xl lg:text-[54px] font-700 text-eq-navy leading-tight mb-4">
                Delivering <em className="italic text-eq-text-soft not-italic font-corporate">Ethical</em><br />Healthcare at True Value
              </h2>
              <p className="text-base text-eq-text-mid leading-relaxed max-w-xl mb-8">
                Guided by our values of integrity and innovation, we bring together trusted expertise and advanced formulations to create healthcare solutions that meet global quality standards.
              </p>
              <div>
                {values.map(({ num, title, desc }) => (
                  <div key={num} className="group flex gap-4 py-5 border-b border-eq-navy/10 first:border-t">
                    <span className="font-corporate text-[32px] font-700 text-eq-silver leading-none w-9 shrink-0 group-hover:text-eq-red transition-colors">{num}</span>
                    <div>
                      <h4 className="text-[15px] font-700 text-eq-navy mb-1">{title}</h4>
                      <p className="text-[13.5px] text-eq-text-soft leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-block mt-8 text-sm font-600 text-eq-red hover:text-eq-navy transition-colors">
                Read more about us →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-eq-navy to-[#1A3A7A] rounded-[20px] p-10 sm:p-12 shadow-[0_32px_80px_rgba(13,36,81,0.22)] relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.15)_0%,transparent_70%)]" />
              <div className="relative z-10">
                <div className="text-[10px] font-700 uppercase tracking-[0.25em] text-eq-gold mb-6">Our Mission Statement</div>
                <p className="font-corporate text-[28px] font-700 text-white leading-snug mb-7">
                  Making reliable, science-backed healthcare <em className="italic text-white/55 not-italic font-corporate">accessible to everyone</em> while setting new standards for ethical business practice.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-5">
                  {[
                    { num: 'PAN', lbl: 'India Distribution Network' },
                    { num: 'ISO', lbl: 'Quality Framework' },
                    { num: '3+', lbl: 'Product Categories' },
                    { num: '0', lbl: 'Ethical Compromises' },
                  ].map(({ num, lbl }) => (
                    <div key={lbl} className="bg-white/6 rounded-[10px] p-4 border border-white/8">
                      <div className="font-corporate text-[30px] font-700 text-eq-gold leading-none">{num}</div>
                      <div className="text-[11px] text-white/50 mt-1 leading-snug">{lbl}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {['🇮🇳 India', '🌏 International', '📍 Ahmedabad, Gujarat'].map((chip) => (
                    <span key={chip} className="bg-white/8 text-white/70 px-3 py-1 rounded text-[11px] font-600 border border-white/10">{chip}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="relative z-10 bg-eq-navy">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[6%] py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-7 h-[1.5px] bg-eq-gold" />
                <span className="text-[10.5px] font-700 uppercase tracking-[0.2em] text-eq-gold">Reach Us</span>
              </div>
              <h2 className="font-corporate text-4xl lg:text-[50px] font-700 text-white leading-tight mb-4">
                Let&apos;s Build <em className="italic text-white/40 not-italic font-corporate">Together.</em>
              </h2>
              <p className="text-[15px] text-white/60 leading-relaxed mb-10 max-w-lg">
                Whether you&apos;re a distributor, healthcare partner, retailer, or investor — we&apos;re always open to meaningful conversations.
              </p>

              <div className="space-y-0">
                {[
                  { icon: '📍', label: 'Registered Office', value: 'Block A-701, Vraj Residency, Besides Vishwas City-6, Gota, Ahmedabad, Gujarat 382481 – India' },
                  { icon: '✉️', label: 'General Enquiries', value: 'ethiqarehealthcare@gmail.com', href: 'mailto:ethiqarehealthcare@gmail.com' },
                  { icon: '💬', label: 'Customer Care', value: 'cc.ethiqare@gmail.com', href: 'mailto:cc.ethiqare@gmail.com' },
                  { icon: '📸', label: 'Instagram', value: '@ethiqare', href: 'https://www.instagram.com/ethiqare/' },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex gap-4 py-5 border-b border-white/8 first:border-t">
                    <div className="w-10 h-10 rounded-lg bg-white/6 flex items-center justify-center shrink-0">{icon}</div>
                    <div>
                      <div className="text-[10px] font-700 uppercase tracking-widest text-white/40 mb-1">{label}</div>
                      {href ? (
                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-sm text-white/80 hover:text-eq-gold border-b border-white/20 hover:border-eq-gold transition-colors">
                          {value}
                        </a>
                      ) : (
                        <div className="text-sm text-white/80 leading-relaxed">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/4 border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur-sm">
              <h3 className="font-corporate text-[26px] font-700 text-white mb-1.5">Send a Message</h3>
              <p className="text-[13px] text-white/50 mb-7">Our team responds within 24 hours.</p>
              <Link
                href="/contact"
                className="block w-full text-center py-3.5 bg-eq-red text-white rounded-lg text-sm font-700 hover:bg-[#a51826] hover:shadow-[0_12px_40px_rgba(200,32,46,0.4)] transition-all"
              >
                Go to Contact Form →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
