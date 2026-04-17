// page.tsx - Page Contact

import Navbar from '@/components/Navbar'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact | Digital Vision',
  description: 'Contactez-nous pour donner vie à vos idées. Remplissez le formulaire et nous vous répondrons rapidement.',
  openGraph: {
    title: 'Contact | Digital Vision',
    description: 'Contactez-nous pour donner vie à vos idées.',
    images: [{ url: '/og/page_contact.png', width: 1200, height: 630, alt: 'Contact Digital Vision' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og/page_contact.png'] },
}

export default function ContactPage() {
  return (
    <>
      {/* Navigation fixe */}
      <Navbar />

      <main>
        {/* Formulaire de contact */}
        <ContactForm />

        {/* FAQ - Questions fréquentes */}
        <FAQ />

        {/* FinalCTA - Appel à l'action final */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
