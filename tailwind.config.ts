import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ethiqare brand (from letterhead)
        navy:    '#1A2D6B',
        crimson: '#C41E20',
        'crimson-dark': '#9E1A1A',
        // MushBaby brand
        'mb-blue':       '#11AEDB',
        'mb-blue-deep':  '#1D94BC',
        'mb-blue-light': '#D4F3FC',
        'mb-blue-pale':  '#EBF8FE',
        'mb-pink':       '#EF96C2',
        'mb-pink-deep':  '#D6629A',
        'mb-pink-light': '#FBDAEE',
        'mb-pink-pale':  '#FDF0F7',
        'mb-navy':       '#1A3A6B',
        'mb-text':       '#1A2B3C',
        'mb-gray':       '#6B7280',
        'mb-off':        '#F8FCFE',
        'mb-elephant':   '#B0BEC8',
        // Ethiqare corporate
        'eq-navy':       '#0D2451',
        'eq-navy-mid':   '#1A3A6B',
        'eq-navy-light': '#2C5AA0',
        'eq-red':        '#C8202E',
        'eq-red-soft':   '#E63040',
        'eq-red-pale':   '#FFF0F1',
        'eq-gold':       '#C9A84C',
        'eq-gold-light': '#F5E6BC',
        'eq-off-white':  '#F8F9FC',
        'eq-silver':     '#E8ECF4',
        'eq-text':       '#0D1B3E',
        'eq-text-mid':   '#3D4F6E',
        'eq-text-soft':  '#7B8FB5',
      },
      fontFamily: {
        display: ['"Baloo 2"', 'cursive'],
        body:    ['Nunito', 'sans-serif'],
        corporate: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontWeight: {
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
    },
  },
  plugins: [],
}

export default config
