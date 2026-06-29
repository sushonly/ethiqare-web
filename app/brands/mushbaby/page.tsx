'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import MushBabyElephant from '@/components/mushbaby/MushBabyElephant'
import MushBabyHero from '@/components/mushbaby/MushBabyHero'
import { supabase } from '@/lib/supabase'
import type { Product } from '@/lib/types'

const WA_BASE = 'https://wa.me/919033322244?text='
const AMZ_URL = 'https://www.amazon.in/s?k=mushbaby+ethiqare'

const WHATS_INSIDE = [
  {
    emoji: '🥥',
    name: 'Coconut Oil',
    description: 'Gently cleanses and nourishes the skin, leaving it soft, smooth, and moisturized.',
    products: 'All Products',
  },
  {
    emoji: '🫒',
    name: 'Olive Oil',
    description: "Deeply moisturizes and helps maintain the skin's natural protective barrier.",
    products: 'Bar · Gel · Oil · Shampoo',
  },
  {
    emoji: '🧈',
    name: 'Shea Butter',
    description: 'Provides long-lasting hydration and helps protect delicate, sensitive baby skin.',
    products: 'Bar · Gel · Oil',
  },
] as const

const WHY_CHOOSE_US = [
  {
    icon: '🌿',
    iconBg: 'bg-mb-pink-pale border-mb-pink-light',
    title: 'Natural Ingredients Only',
    description:
      'Every formula uses trusted natural oils and butters — coconut oil, olive oil, shea butter — with zero harmful synthetics.',
    highlight: true,
  },
  {
    icon: '💧',
    iconBg: 'bg-mb-blue-pale border-mb-blue-light',
    title: 'pH 5.5 Balanced',
    description:
      "Perfectly matched to baby's delicate skin pH, maintaining the natural protective barrier every day.",
    highlight: false,
  },
  {
    icon: '🔬',
    iconBg: 'bg-mb-blue-pale border-mb-blue-light',
    title: 'Dermatologically Tested',
    description:
      'Clinically verified for mildness and safety. Recommended for babies above 2 months and kids of all ages.',
    highlight: false,
  },
  {
    icon: '🚫',
    iconBg: 'bg-mb-pink-pale border-mb-pink-light',
    title: 'Zero Harmful Chemicals',
    description:
      'No parabens. No sulphates. No toxins. No artificial fragrance. IFRA certified fragrance only.',
    highlight: false,
  },
] as const

const SAFETY_CHECKLIST = [
  'No Harmful Chemicals',
  'No Parabens',
  'No Sulphates',
  'IFRA Certified Fragrance',
  'No Toxins',
  'Safe from 2 months+',
] as const

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-800 uppercase tracking-[0.25em] text-mb-pink-deep mb-2">
      {children}
    </p>
  )
}

function NotifyForm({ productName }: { productName: string }) {
  const [email, setEmail]     = useState('')
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await supabase.from('subscribers').insert({
      email,
      type: 'notify_me',
      product_name: productName,
    })
    setSent(true)
    setLoading(false)
  }

  if (sent) {
    return (
      <div className="text-sm text-mb-navy bg-mb-blue-pale border border-mb-blue-light rounded-xl px-4 py-2.5 text-center font-600">
        ✓ We&apos;ll notify you when {productName} launches!
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 text-sm border border-mb-blue-light rounded-xl px-3 py-2 outline-none focus:border-mb-blue bg-white"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-mb-blue text-white text-sm font-800 px-4 py-2 rounded-xl hover:bg-mb-blue-deep transition-colors disabled:opacity-50 whitespace-nowrap"
      >
        {loading ? '…' : 'Notify Me'}
      </button>
    </form>
  )
}

function ProductImage({ product }: { product: Product }) {
  if (product.image_url) {
    return (
      <div className="relative aspect-[4/3] w-full bg-mb-blue-pale overflow-hidden">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    )
  }

  return (
    <div className="aspect-[4/3] w-full bg-gradient-to-br from-mb-blue-pale to-mb-pink-pale flex items-center justify-center">
      <MushBabyElephant width={72} height={80} showBeachBalls={false} className="opacity-80" />
    </div>
  )
}

function ProductRangeCard({ product }: { product: Product }) {
  const isLive = product.status === 'live'
  const waMsg  = product.whatsapp_msg ?? `Hi! I'd like to order ${product.name}. Please help me.`
  const pct    = product.price && product.mrp
    ? Math.round((product.mrp - product.price) / product.mrp * 100)
    : null

  return (
    <div className={`rounded-2xl border overflow-hidden flex flex-col transition-shadow hover:shadow-md ${
      isLive ? 'bg-white border-mb-blue-light' : 'bg-white border-mb-pink-light'
    }`}>
      <ProductImage product={product} />
      <div className="p-4 flex flex-col flex-1 gap-2.5">
        <div className="flex items-center justify-between gap-2">
          {isLive ? (
            <span className="text-[11px] font-800 bg-mb-blue-pale text-mb-blue-deep px-2.5 py-0.5 rounded-full border border-mb-blue-light">
              ✓ Available Now
            </span>
          ) : (
            <span className="text-[11px] font-800 bg-mb-pink-pale text-mb-pink-deep px-2.5 py-0.5 rounded-full border border-mb-pink-light">
              ⏳ Coming Soon
            </span>
          )}
          {isLive && pct && (
            <span className="text-[11px] font-800 text-mb-pink-deep">{pct}% OFF</span>
          )}
          {!isLive && product.category && (
            <span className="text-[11px] text-mb-gray font-600">{product.category}</span>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-display font-800 text-base text-mb-navy">{product.name}</h3>
          {product.tagline && (
            <p className="text-xs text-mb-gray italic mt-0.5">{product.tagline}</p>
          )}
          {product.description && (
            <p className="text-xs text-mb-gray leading-relaxed line-clamp-2 mt-1">{product.description}</p>
          )}
          {product.size && isLive && (
            <p className="text-[11px] text-mb-gray/70 font-600 mt-1">{product.size}</p>
          )}
        </div>
        {isLive ? (
          <>
            {product.price && (
              <div className="flex items-baseline gap-2 bg-mb-pink-pale rounded-xl px-3 py-2">
                <span className="font-display font-900 text-lg text-mb-pink-deep">₹{product.price}</span>
                {product.mrp && (
                  <span className="text-xs text-mb-gray line-through">₹{product.mrp}</span>
                )}
              </div>
            )}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`${WA_BASE}${encodeURIComponent(waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#25D366] hover:bg-[#1da851] text-white text-[11px] font-800 py-2 rounded-xl transition-colors"
              >
                💬 WhatsApp
              </a>
              <a
                href={product.amazon_url ?? AMZ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-mb-blue hover:bg-mb-blue-deep text-white text-[11px] font-800 py-2 rounded-xl transition-colors"
              >
                🛒 Amazon
              </a>
            </div>
          </>
        ) : (
          <>
            <p className="text-[11px] text-mb-gray">Be the first to know when this launches.</p>
            <NotifyForm productName={product.name} />
          </>
        )}
      </div>
    </div>
  )
}

function ProductGrid({ products }: { products: Product[] }) {
  const row1 = products.slice(0, 3)
  const row2 = products.slice(3)

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {row1.map(p => <ProductRangeCard key={p.id} product={p} />)}
      </div>
      {row2.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {row2.map(p => <ProductRangeCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  )
}

export default function MushBabyPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    supabase
      .from('products')
      .select('*')
      .order('sort_order')
      .then(({ data }) => {
        setProducts((data as Product[]) ?? [])
        setLoading(false)
      })
  }, [])

  return (
    <>
      {/* ── HERO + CERT STRIP ─────────────────────────────── */}
      <MushBabyHero />

      {/* ── OUR RANGE OF PRODUCTS ─────────────────────────── */}
      <section id="products" className="py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <SectionLabel>Shop MushBaby</SectionLabel>
            <h2 className="font-display font-800 text-2xl sm:text-3xl text-mb-navy mb-2">
              Our Range of Products
            </h2>
            <p className="text-sm text-mb-gray max-w-md mx-auto">
              Gentle, natural baby care — available now and expanding soon.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-10 text-mb-gray font-600 text-sm">Loading products…</div>
          ) : products.length === 0 ? (
            <div className="text-center py-10 text-mb-gray font-600 text-sm">
              Products coming soon. Check back shortly!
            </div>
          ) : (
            <ProductGrid products={products} />
          )}
        </div>
      </section>

      {/* ── WHAT'S INSIDE ─────────────────────────────────── */}
      <section className="py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <SectionLabel>What&apos;s Inside</SectionLabel>
            <h2 className="font-display font-800 text-2xl sm:text-3xl text-mb-navy mb-2">
              The <span className="text-mb-blue">Goodness</span> of Nature
            </h2>
            <p className="text-sm text-mb-gray max-w-lg mx-auto leading-relaxed">
              Every ingredient is chosen with care — because your baby&apos;s skin deserves
              nothing but the best from nature.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 lg:gap-5">
            {WHATS_INSIDE.map(({ emoji, name, description, products: productRange }) => (
              <div
                key={name}
                className="bg-white rounded-2xl border border-mb-blue-light/60 shadow-sm hover:shadow-md transition-shadow p-5 sm:p-6 text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-mb-blue-light border-2 border-mb-blue flex items-center justify-center text-2xl mb-3">
                  {emoji}
                </div>
                <h3 className="font-display font-800 text-lg text-mb-navy mb-2">{name}</h3>
                <p className="text-xs text-mb-gray leading-relaxed mb-4 flex-1">{description}</p>
                <span className="text-[10px] font-700 text-mb-blue bg-mb-blue-pale px-3 py-1 rounded-full border border-mb-blue-light">
                  {productRange}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────── */}
      <section className="py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-mb-off">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-6 bg-mb-pink" />
              <SectionLabel>Why Choose Us</SectionLabel>
            </div>
            <h2 className="font-display font-800 text-2xl sm:text-3xl text-mb-navy mb-2">
              Pure Care, <span className="text-mb-pink">Every Bath.</span>
            </h2>
            <p className="text-sm text-mb-gray mb-5 leading-relaxed">
              MushBaby is built on one belief: your baby deserves the purest care.
            </p>

            <div className="space-y-3">
              {WHY_CHOOSE_US.map(({ icon, iconBg, title, description, highlight }) => (
                <div
                  key={title}
                  className={`flex gap-3 p-4 rounded-xl border ${
                    highlight
                      ? 'bg-mb-pink-pale border-mb-pink-light'
                      : 'bg-white border-mb-blue-light/50'
                  }`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg border flex items-center justify-center text-lg ${iconBg}`}>
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-display font-700 text-sm text-mb-navy mb-0.5">{title}</h3>
                    <p className="text-xs text-mb-gray leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-mb-pink-pale rounded-2xl p-5 lg:p-6 border border-mb-pink-light">
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-2xl p-3 shadow-sm">
                <MushBabyElephant width={120} height={135} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { value: '0',    label: 'Harmful Chemicals' },
                { value: '5.5',  label: 'pH Balanced'       },
                { value: '5+',   label: 'Products in Range' },
                { value: '100%', label: 'Natural Base'      },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white rounded-xl p-3 text-center border border-mb-pink-light/50">
                  <div className="font-display font-900 text-2xl text-mb-pink mb-0.5">{value}</div>
                  <div className="text-[10px] text-mb-gray font-600 leading-snug">{label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-4 border border-mb-blue-light/50">
              <h3 className="font-display font-800 text-sm text-mb-navy mb-3">
                Safe for Your Baby ✓
              </h3>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                {SAFETY_CHECKLIST.map(item => (
                  <li key={item} className="flex items-start gap-1.5 text-[11px] text-mb-gray">
                    <span className="text-mb-blue font-800 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────────── */}
      <section className="bg-mb-navy py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {[
            { icon: '🌿', label: 'Natural Ingredients',     sub: 'Coconut · Olive · Shea' },
            { icon: '🔬', label: 'Dermatologically Tested', sub: 'pH 5.5 · Clinically safe' },
            { icon: '🇮🇳', label: 'Made in India',           sub: 'Ethiqare, Gujarat'        },
            { icon: '❤️', label: 'Safe from 2 Months',      sub: 'Gentle for delicate skin' },
          ].map(({ icon, label, sub }) => (
            <div key={label} className="text-white px-2">
              <div className="text-2xl mb-1">{icon}</div>
              <div className="font-700 text-xs sm:text-sm">{label}</div>
              <div className="text-[10px] sm:text-xs text-white/45 mt-0.5 leading-snug">{sub}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
