import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: 'Digital Vision | Agence Web & Design',
  description: 'Transformez votre vision digitale en réalité. Création de sites web modernes, landing pages performantes et identités visuelles uniques.',
  keywords: ['agence web', 'design', 'développement', 'landing page', 'site vitrine', 'refonte'],
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
