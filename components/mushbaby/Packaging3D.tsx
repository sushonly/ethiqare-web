'use client'

import { useState } from 'react'
import './packaging-3d.css'

const PACKAGING_FRONT = '/images/mushbaby-packaging-front.png'

function FrontFace() {
  return (
    <div
      className="mb-3d-face mb-3d-face-front"
      style={{
        width: 255,
        height: 180,
        transform: 'translateZ(60px)',
        border: '1px solid #e8e8e8',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.5)',
      }}
    >
      {/* Actual packaging artwork — elephant, ingredients splash, MushBaby logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={PACKAGING_FRONT}
        alt="MushBaby Bathing Bar — front of packaging"
        draggable={false}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          display: 'block',
          userSelect: 'none',
        }}
      />
    </div>
  )
}

function BackFace() {
  return (
    <div
      className="mb-3d-face"
      style={{
        width: 255,
        height: 180,
        transform: 'rotateY(180deg) translateZ(60px)',
        background: '#fff',
        border: '1px solid #eee',
        padding: '9px 10px',
        borderRadius: 2,
      }}
    >
      <div
        style={{
          background: '#E8409A',
          color: 'white',
          fontSize: 7,
          fontWeight: 700,
          padding: '4px 7px',
          borderRadius: 3,
          marginBottom: 5,
          lineHeight: 1.5,
        }}
      >
        Benefits: Regular use of MushBaby Bathing Bar helps restore and retain skin&apos;s
        protective layer with nourishment.
      </div>
      <div style={{ fontSize: 6, fontWeight: 700, color: '#1A3A6B', marginBottom: 2 }}>
        Ingredients:
      </div>
      <div style={{ fontSize: 5.5, color: '#555', lineHeight: 1.6, marginBottom: 5 }}>
        Syndet Base (Sodium Coco-Sulfate, Cetearyl Alcohol), Disodium Lauryl Sulfosuccinate,
        Aqua, Glycerin, Sodium Chloride, Coconut Oil, Olive Oil, Shea Butter, IFRA Certified
        Fragrance, Titanium Dioxide, Disodium EDTA &amp; Tinogard TT.
      </div>
      <div style={{ fontSize: 6, fontWeight: 700, color: '#1A3A6B', marginBottom: 2 }}>
        How to Use:
      </div>
      <div style={{ fontSize: 5.5, color: '#555', lineHeight: 1.6, marginBottom: 5 }}>
        Step 1: Wet baby&apos;s skin with warm water. Step 2: Apply gently, massage in circular
        motions, avoid eyes. Step 3: Rinse thoroughly and pat dry.
      </div>
      <div
        style={{
          fontSize: 7.5,
          fontWeight: 800,
          color: '#1A3A6B',
          textAlign: 'center',
          border: '1px solid #1A3A6B',
          padding: 3,
          borderRadius: 3,
        }}
      >
        FOR EXTERNAL USE ONLY
      </div>
    </div>
  )
}

function SideFace({ rotateY }: { rotateY: 90 | -90 }) {
  const textRotate = rotateY === 90 ? 90 : -90
  return (
    <div
      className="mb-3d-face"
      style={{
        width: 120,
        height: 180,
        left: 67.5,
        transform: `rotateY(${rotateY}deg) translateZ(127.5px)`,
        background: '#ffffff',
        border: '1px solid #eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
      }}
    >
      <div style={{ transform: `rotate(${textRotate}deg)`, whiteSpace: 'nowrap', textAlign: 'center' }}>
        <div
          style={{
            fontSize: 18,
            fontWeight: 900,
            color: '#3AAED8',
            fontFamily: 'Georgia, serif',
            letterSpacing: -0.5,
          }}
        >
          MushBaby
        </div>
        <div
          style={{
            fontSize: 7,
            color: '#5BC4E0',
            letterSpacing: 1.5,
            textTransform: 'uppercase',
            marginTop: 3,
          }}
        >
          Bathing Bar
        </div>
      </div>
    </div>
  )
}

function TopFace() {
  return (
    <div
      className="mb-3d-face"
      style={{
        width: 255,
        height: 120,
        top: 30,
        transform: 'rotateX(-90deg) translateZ(90px)',
        background: '#FFF0F8',
        border: '1px solid #eee',
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: '#3AAED8', fontFamily: 'Georgia, serif' }}>
          MushBaby
        </div>
        <div style={{ fontSize: 7, color: '#E8409A', marginTop: 4 }}>Bathing Bar · 75g</div>
      </div>
    </div>
  )
}

function BottomFace() {
  const ingredients = [
    { emoji: '🥥', name: 'Coconut Oil', sub: 'Gentle Cleanser', color: '#3AAED8' },
    { emoji: '🫒', name: 'Olive Oil', sub: 'Rich Vitamin E', color: '#5BBBA8' },
    { emoji: '🌰', name: 'Shea Butter', sub: 'Deep Hydration', color: '#E8409A' },
  ]

  return (
    <div
      className="mb-3d-face"
      style={{
        width: 255,
        height: 120,
        top: 30,
        transform: 'rotateX(90deg) translateZ(90px)',
        background: '#fff',
        border: '1px solid #eee',
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
      }}
    >
      {ingredients.map(({ emoji, name, sub, color }) => (
        <div key={name} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: '50%',
              background: '#D6EFFA',
              border: '1.5px solid #3AAED8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              margin: '0 auto 3px',
            }}
          >
            {emoji}
          </div>
          <div style={{ fontSize: 7, fontWeight: 700, color }}>{name}</div>
          <div style={{ fontSize: 5.5, color: '#888', marginTop: 1 }}>{sub}</div>
        </div>
      ))}
    </div>
  )
}

export default function Packaging3D() {
  const [paused, setPaused] = useState(false)

  return (
    <div className="mb-3d-wrap relative">
      <div className="mb-3d-glow absolute inset-0 pointer-events-none" aria-hidden />
      <div className="mb-3d-scale">
        <div className="mb-3d-scene">
          <div
            className={`mb-3d-cube${paused ? ' paused' : ''}`}
            onClick={() => setPaused(p => !p)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setPaused(p => !p)
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={paused ? 'Resume product rotation' : 'Pause product rotation'}
          >
            <FrontFace />
            <BackFace />
            <SideFace rotateY={90} />
            <SideFace rotateY={-90} />
            <TopFace />
            <BottomFace />
          </div>
        </div>
      </div>
      <p className="text-[10px] text-mb-gray/50 text-center mt-0 relative z-10">
        {paused ? 'Tap to resume' : 'Tap to pause · 360° view'}
      </p>
    </div>
  )
}
