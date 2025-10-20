import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'PatternForge - Master Chart Patterns',
  description: 'Master chart patterns with AI-powered training and real-time alerts',
  openGraph: {
    title: 'PatternForge',
    description: 'Master chart patterns with AI-powered training and real-time alerts',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
