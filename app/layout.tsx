import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

// Impact font fallback
const impactFont = {
  variable: '--font-impact',
  style: {
    fontFamily: 'Impact, "Arial Black", Arial, sans-serif',
  }
}

export const metadata: Metadata = {
  title: 'Silverpacks - Premium Silver Coin Mystery Packs',
  description: 'Experience the thrill of opening premium silver coin mystery packs. Each pack contains 3 slabbed coins with 1/10 chance of monster hits worth up to $4,000!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${impactFont.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
