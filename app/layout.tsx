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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  }
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
