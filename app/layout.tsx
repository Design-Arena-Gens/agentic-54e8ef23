import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://agentic-54e8ef23.vercel.app'),
  title: {
    default: 'DREAM FINDS COMPANY — Digital Marketing that Performs',
    template: '%s — DREAM FINDS COMPANY'
  },
  description: 'DREAM FINDS COMPANY is a performance-driven digital marketing agency turning clicks into customers.',
  openGraph: {
    title: 'DREAM FINDS COMPANY',
    description: 'Performance digital marketing that turns clicks into customers.',
    url: 'https://agentic-54e8ef23.vercel.app',
    siteName: 'DREAM FINDS COMPANY',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'DREAM FINDS COMPANY' }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DREAM FINDS COMPANY',
    description: 'Performance digital marketing that turns clicks into customers.',
    images: ['/og.png']
  },
  icons: {
    icon: [{ url: '/favicon.ico' }]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
