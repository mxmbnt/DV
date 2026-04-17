import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.digital-vision.fr'),
  title: 'Digital Vision | Agence Web & Design',
  description: 'Transformez votre vision digitale en réalité. Création de sites web modernes, landing pages performantes et identités visuelles uniques.',
  keywords: ['agence web', 'design', 'développement', 'landing page', 'site vitrine', 'refonte'],
  icons: {
    icon: '/logos/logo_blanc.png',
    shortcut: '/logos/logo_blanc.png',
    apple: '/logos/logo_blanc.png',
  },
  openGraph: {
    title: 'Digital Vision | Agence Web & Design',
    description: 'Transformez votre vision digitale en réalité. Création de sites web modernes, landing pages performantes et identités visuelles uniques.',
    url: 'https://www.digital-vision.fr',
    siteName: 'Digital Vision',
    images: [{ url: '/og/page_accueil.png', width: 1200, height: 630, alt: 'Digital Vision — Agence Web & Design' }],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Vision | Agence Web & Design',
    description: 'Transformez votre vision digitale en réalité.',
    images: ['/og/page_accueil.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={plusJakartaSans.variable}>
      <body className="min-h-screen bg-[#FCFCFC] font-sans grid-background">
        {children}
      </body>
    </html>
  )
}
