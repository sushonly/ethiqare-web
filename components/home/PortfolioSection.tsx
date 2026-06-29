import Image from 'next/image'
import Link from 'next/link'
import MushBabyElephant from '@/components/mushbaby/MushBabyElephant'
import type { Product } from '@/lib/types'

const OTHER_BRANDS = [
  {
    icon: '💊',
    name: 'Ethiqare Nutra',
    category: 'Nutraceuticals',
    desc: 'Science-backed nutritional supplements and wellness products for preventive healthcare and optimal vitality.',
  },
  {
    icon: '🩺',
    name: 'Ethiqare Medtech',
    category: 'Medical Devices',
    desc: 'Precision medical devices designed to support clinical decision-making and patient care with global-standard engineering.',
  },
] as const

export default function PortfolioSection({ products }: { products: Product[] }) {
  return (
    <section id="portfolio" className="bg-eq-off-white relative z-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[6%] py-20 lg:py-24">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2.5 mb-3.5">
            <span className="w-7 h-[1.5px] bg-eq-red" />
            <span className="text-[10.5px] font-700 uppercase tracking-[0.2em] text-eq-red">Portfolio</span>
            <span className="w-7 h-[1.5px] bg-eq-red" />
          </div>
          <h2 className="font-corporate text-4xl lg:text-[54px] font-700 text-eq-navy leading-tight">
            Our <em className="italic text-eq-text-soft not-italic font-corporate">Brands</em>
          </h2>
          <p className="text-base text-eq-text-mid leading-relaxed max-w-xl mx-auto mt-4">
            A growing portfolio of trusted healthcare brands — each built on natural integrity and scientific precision.
          </p>
        </div>

        {/* MushBaby — active brand */}
        <div className="bg-gradient-to-br from-white via-mb-off to-mb-blue-pale rounded-3xl border border-mb-blue-light shadow-[0_8px_40px_rgba(17,174,219,0.08)] overflow-hidden mb-10">
          <div className="px-6 sm:px-10 lg:px-12 pt-8 sm:pt-10 pb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-mb-blue-pale text-mb-blue-deep border border-mb-blue-light px-3 py-1 rounded-full text-[10px] font-800 uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 bg-mb-blue rounded-full animate-pulse" />
                Active · Baby Care
              </span>
              <h3 className="font-display font-800 text-4xl sm:text-5xl text-mb-navy leading-none mb-2">
                MushBaby
              </h3>
              <p className="font-display text-lg text-mb-blue-deep italic">
                &ldquo;Gentle by Nature. Trusted by Love.&rdquo;
              </p>
              <p className="text-sm text-mb-gray leading-relaxed max-w-lg mt-4">
                A premium baby care range with coconut oil, olive oil, shea butter and Ayurvedic herbs.
                Free from parabens, sulphates, and toxins. pH 5.5 balanced.
              </p>
            </div>
            <Link
              href="/brands/mushbaby"
              className="shrink-0 inline-flex items-center gap-2 bg-mb-blue text-white px-6 py-3 rounded-xl text-sm font-800 hover:bg-mb-blue-deep hover:-translate-y-0.5 transition-all shadow-md shadow-mb-blue/20"
            >
              Explore MushBaby →
            </Link>
          </div>

          <div className="px-4 sm:px-8 lg:px-12 pb-8 sm:pb-10">
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-[11px] font-800 uppercase tracking-[0.25em] text-mb-pink-deep mb-1">
                Complete Baby Care Range
              </p>
              <h4 className="font-display font-800 text-2xl sm:text-3xl text-mb-navy">
                Everything Your Baby Needs — From Head to Toe
              </h4>
            </div>

            <div className="relative w-full max-w-6xl mx-auto mb-8 sm:mb-10 overflow-hidden rounded-3xl bg-white shadow-xl shadow-mb-blue/10 border border-mb-blue-light/30">
              <Image
                src="https://ibqvhzfagbhgfczekufv.supabase.co/storage/v1/object/public/product-images/mushbaby-range-banner.png"
                alt="MushBaby Complete Baby Care Range"
                width={1600}
                height={900}
                className="w-full h-auto object-contain rounded-2xl"
                priority={false}
              />
            </div>
          </div>
        </div>

        {/* Other brands — all coming soon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OTHER_BRANDS.map(({ icon, name, category, desc }) => (
            <div
              key={name}
              className="group bg-white rounded-2xl p-7 sm:p-8 border border-eq-navy/10 relative overflow-hidden"
            >
              <span className="inline-block text-[9px] font-700 uppercase tracking-widest px-2.5 py-1 rounded bg-[#FFF8E1] text-[#8B6914] mb-4">
                Coming Soon
              </span>
              <span className="text-4xl block mb-4">{icon}</span>
              <div className="text-lg font-700 text-eq-navy mb-1">{name}</div>
              <div className="text-[11px] font-600 text-eq-text-soft uppercase tracking-widest mb-3">
                {category}
              </div>
              <p className="text-[13px] text-eq-text-mid leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
