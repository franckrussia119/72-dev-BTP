import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AccentProvider from '@/components/AccentProvider'

export const metadata: Metadata = {
  title: {
    default: '72dev-BTP | Premium Construction & Engineering — Cameroon',
    template: '%s | 72dev-BTP',
  },
  description:
    'Premier construction, infrastructure and engineering services across Cameroon and West Africa. Turnkey delivery, eco-friendly builds, award-winning quality since 2021.',
  keywords: ['construction Cameroon', '72dev-BTP', 'road construction Africa', 'bridge construction', 'infrastructure West Africa'],
  metadataBase: new URL('https://72dev-btp.com'),
  openGraph: {
    title: '72dev-BTP | Premium Construction & Engineering',
    description: 'Building Africa infrastructure one project at a time. Turnkey construction across Cameroon and West Africa.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.19.0/tabler-icons.min.css"
        />
      </head>
      <body>
        <AccentProvider />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
