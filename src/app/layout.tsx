import type { Metadata } from 'next'
import './globals.css'
import { Outfit, DM_Mono } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' })
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-dm-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Dr. Bikramaditya Mandal — Quantum Physicist',
  description:
    'Postdoctoral Scholar at UNLV researching quantum control of ultracold molecular collisions and applying machine learning to accelerate quantum scattering predictions.',
  keywords: [
    'quantum physics', 'molecular collisions', 'ultracold', 'MQCT',
    'neural networks', 'scattering', 'UNLV', 'Bikramaditya Mandal',
  ],
  icons: {
    icon: '/Vikramaditya-Portfolio/assets/BM.png',
    shortcut: '/Vikramaditya-Portfolio/assets/BM.png',
    apple: '/Vikramaditya-Portfolio/assets/BM.png',
  },
  authors: [{ name: 'Dr. Bikramaditya Mandal' }],
  openGraph: {
    title: 'Dr. Bikramaditya Mandal — Quantum Physicist',
    description: 'Postdoctoral Scholar at UNLV — quantum control, ML-accelerated scattering.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
