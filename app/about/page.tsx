import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Ethiqare Healthcare — a Gujarat-based company crafting trusted, natural healthcare and baby care products for families across India.',
}

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-navy relative overflow-hidden py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-crimson opacity-10 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-xs font-800 uppercase tracking-widest text-white/40 mb-4">Our Story</div>
          <h1 className="font-display font-800 text-4xl lg:text-5xl text-white mb-4">
            Caring for Every Life, Naturally.
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Ethiqare Healthcare Pvt. Ltd. develops trusted, natural healthcare and personal care
            products — built on clean ingredients, backed by science, and loved by families across India.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-800 uppercase tracking-widest text-crimson mb-3">Who We Are</div>
            <h2 className="font-display font-800 text-3xl text-navy mb-6">Ethiqare Healthcare</h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                Founded in 2025 and headquartered in Ahmedabad, Gujarat, Ethiqare Healthcare is on a
                mission to bring safe, effective, and naturally derived products to Indian households.
              </p>
              <p>
                We believe that the products families use every day — especially for the youngest and
                most delicate — should be free from harsh chemicals, transparent in their ingredients,
                and rigorously tested for safety.
              </p>
              <p>
                Every formula we develop is guided by three principles: natural purity, scientific
                validation, and unwavering trust.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '2025',    label: 'Founded'             },
              { value: 'Gujarat', label: 'Made in India 🇮🇳'   },
              { value: '100%',    label: 'Natural focus'       },
              { value: 'pH 5.5',  label: 'Derma-tested care'   },
            ].map(({ value, label }) => (
              <div key={label} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="font-display font-800 text-3xl text-navy mb-1">{value}</div>
                <div className="text-sm text-gray-500 font-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR BRAND ────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-mb-pink-pale">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-800 uppercase tracking-widest text-mb-pink mb-3">Our Brand</div>
            <h2 className="font-display font-800 text-3xl text-mb-navy mb-3">MushBaby 🐘</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our flagship baby care brand — gentle bathing bars and an expanding range of
              natural products safe from 2 months.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 max-w-3xl mx-auto text-center">
            <p className="text-gray-500 leading-relaxed mb-8 italic">
              &ldquo;Gentle by Nature. Trusted by Love.&rdquo;
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['No Parabens', 'No Sulphates', 'No Toxins', 'pH 5.5', 'Safe 2 months+'].map(c => (
                <span key={c} className="bg-mb-blue-light text-mb-navy text-xs font-700 px-3 py-1.5 rounded-full">
                  ✓ {c}
                </span>
              ))}
            </div>
            <Link
              href="/brands/mushbaby"
              className="inline-block bg-mb-blue hover:bg-mb-blue-deep text-white font-800 px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
            >
              Explore MushBaby →
            </Link>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-800 uppercase tracking-widest text-crimson mb-3">Our Values</div>
            <h2 className="font-display font-800 text-3xl text-navy">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌿', title: 'Natural Purity',      desc: 'Clean formulas with no parabens, sulphates, or toxins — ever.' },
              { icon: '🔬', title: 'Science-Backed',      desc: 'Dermatologically tested, pH balanced, and clinically safe.' },
              { icon: '❤️', title: 'Trusted by Families', desc: 'Safe from 2 months, built on trust earned through every bottle.' },
              { icon: '🇮🇳', title: 'Made in India',       desc: 'Proudly developed and manufactured in Gujarat, India.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-4">{icon}</div>
                <div className="font-display font-700 text-navy text-lg mb-2">{title}</div>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-800 text-3xl text-white mb-3">Partner With Us</h2>
          <p className="text-white/55 mb-8">
            Interested in bulk orders, retail partnerships, or distribution? We&apos;d love to connect.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-crimson hover:bg-crimson-dark text-white font-800 px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  )
}
