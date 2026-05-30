import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Ethiqare Healthcare — Natural Baby Care, Made in India',
    template: '%s | Ethiqare Healthcare',
  },
  description:
    'Ethiqare Healthcare Pvt. Ltd. — crafting trusted, natural healthcare products. Home of MushBaby, India\'s gentle baby care brand.',
  keywords: ['baby care', 'natural', 'MushBaby', 'Ethiqare', 'India', 'gentle'],
  openGraph: {
    siteName: 'Ethiqare Healthcare',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-body">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
