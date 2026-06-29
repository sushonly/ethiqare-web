'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const HERO_SLIDES = [
  {
    imageUrl: 'https://ibqvhzfagbhgfczekufv.supabase.co/storage/v1/object/public/product-images/mushbaby2.jpeg',
    imageAlt: 'MushBaby Bathing Bar in a cosy basket with flowers and baby accessories',
    imagePosition: 'center center',
    eyebrow: 'Introducing MushBaby',
    headline: 'One Bar.',
    headlineAccent: 'All the Gentleness.',
    accentColor: 'text-mb-pink' as const,
    body: "Crafted with Coconut Oil, Olive Oil & Shea Butter — pure ingredients your baby's skin will love, every single bath.",
    badges: ['No Parabens', 'No Sulphates', 'pH 5.5', 'Safe 2 months+'],
  },
  {
    imageUrl: 'https://ibqvhzfagbhgfczekufv.supabase.co/storage/v1/object/public/product-images/mushbaby7.jpeg',
    imageAlt: 'MushBaby Bathing Bar on a marble surface surrounded by roses and natural ingredients',
    imagePosition: 'center 20%',
    eyebrow: 'Safe from 2 Months+',
    headline: 'Pure Care,',
    headlineAccent: 'Every Bath.',
    accentColor: 'text-mb-blue' as const,
    body: 'No parabens. No sulphates. No toxins. Dermatologically tested and pH 5.5 balanced — because your baby deserves nothing less.',
    badges: ['Derma Tested', 'No Toxins', 'IFRA Fragrance', 'Made in India'],
  },
] as const

const CERT_STRIP = [
  { icon: '🌿', label: 'No Parabens' },
  { icon: '💧', label: 'No Sulphates' },
  { icon: '✓',  label: 'pH 5.5 Balanced' },
  { icon: '🔬', label: 'Derma Tested' },
  { icon: '🇮🇳', label: 'Made in India' },
] as const

const SLIDE_DURATION = 4500

export default function MushBabyHero() {
  const [current, setCurrent]   = useState(0)
  const [progress, setProgress] = useState(0)
  const timerRef                = useRef<ReturnType<typeof setTimeout> | null>(null)
  const progressRef             = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressStartRef        = useRef<number>(0)
  const total                   = HERO_SLIDES.length

  const clearTimers = () => {
    if (timerRef.current)    clearTimeout(timerRef.current)
    if (progressRef.current) clearInterval(progressRef.current)
  }

  const startProgress = () => {
    if (progressRef.current) clearInterval(progressRef.current)
    setProgress(0)
    progressStartRef.current = Date.now()
    progressRef.current = setInterval(() => {
      const pct = Math.min(100, ((Date.now() - progressStartRef.current) / SLIDE_DURATION) * 100)
      setProgress(pct)
      if (pct >= 100) clearInterval(progressRef.current!)
    }, 30)
  }

  const advance = (from: number) => {
    const next = (from + 1) % total
    setCurrent(next)
    startProgress()
    timerRef.current = setTimeout(() => advance(next), SLIDE_DURATION)
  }

  const goTo = (n: number) => {
    clearTimers()
    setCurrent(n)
    startProgress()
    timerRef.current = setTimeout(() => advance(n), SLIDE_DURATION)
  }

  const go = (dir: -1 | 1) => goTo((current + dir + total) % total)

  useEffect(() => {
    startProgress()
    timerRef.current = setTimeout(() => advance(0), SLIDE_DURATION)
    return clearTimers
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const slide = HERO_SLIDES[current]

  return (
    <section id="hero" className="relative">

      {/* ── CAROUSEL ── */}
      <div className="relative h-[75vh] min-h-[500px] max-h-[720px] overflow-hidden">

        {/* Background image */}
        <Image
          key={slide.imageUrl}
          src={slide.imageUrl}
          alt={slide.imageAlt}
          fill
          priority
          className="object-cover transition-opacity duration-700"
          style={{ objectPosition: slide.imagePosition }}
          sizes="100vw"
        />

        {/* Gradient overlay — left-heavy so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-mb-navy/80 via-mb-navy/45 to-mb-navy/10 pointer-events-none" />

        {/* Slide content */}
        <div className="relative z-10 h-full flex items-center px-6 sm:px-10 lg:px-16">
          <div className="max-w-lg">

            <p className="text-[10px] font-800 uppercase tracking-[0.22em] text-mb-pink mb-3">
              {slide.eyebrow}
            </p>

            <h1 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.08] mb-3">
              {slide.headline}{' '}
              <span className={slide.accentColor}>{slide.headlineAccent}</span>
            </h1>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-3 max-w-sm">
              {slide.body}
            </p>

            <p className="text-sm italic font-600 text-mb-blue mb-4">
              &ldquo;Gentle by Nature. Trusted by Love.&rdquo;
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {slide.badges.map(b => (
                <span
                  key={b}
                  className="text-[10px] font-700 px-2.5 py-1 rounded-full border border-mb-blue/50 bg-mb-blue/15 text-white"
                >
                  {b}
                </span>
              ))}
            </div>

            <Link
              href="#products"
              className="inline-flex items-center gap-1.5 bg-mb-blue hover:bg-mb-blue-deep text-white font-800 px-6 py-3 rounded-full text-sm transition-colors"
            >
              Shop MushBaby →
            </Link>
          </div>
        </div>

        {/* Prev arrow */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/15 border border-white/30 text-white text-lg flex items-center justify-center hover:bg-white/28 transition-colors"
        >
          ‹
        </button>

        {/* Next arrow */}
        <button
          onClick={() => go(1)}
          aria-label="Next slide"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/15 border border-white/30 text-white text-lg flex items-center justify-center hover:bg-white/28 transition-colors"
        >
          ›
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full border-none transition-all ${
                i === current ? 'bg-white scale-110' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/12 z-20">
          <div
            className="h-full bg-mb-blue transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* ── CERT STRIP ── */}
      <div className="bg-mb-navy py-2.5 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
          {CERT_STRIP.map(({ icon, label }, i) => (
            <div key={label} className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-1.5 text-white/80 text-[10px] sm:text-xs font-700">
                <span>{icon}</span>
                <span>{label}</span>
              </div>
              {i < CERT_STRIP.length - 1 && (
                <span className="text-white/20 text-sm hidden sm:inline">|</span>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
