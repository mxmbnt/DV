// page.tsx - Page Contact

import Navbar from '@/components/Navbar'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact | Digital Vision',
  description: 'Contactez-nous pour donner vie à vos idées. Remplissez le formulaire et nous vous répondrons rapidement.',
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
