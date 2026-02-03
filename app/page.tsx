// page.tsx - Landing page Digital Vision

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Values from '@/components/Values'
import Services from '@/components/Services'
import Process from '@/components/Process'
import ProjectsPreview from '@/components/ProjectsPreview'
import PainPoints from '@/components/PainPoints'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* Navigation fixe */}
      <Navbar />

      <main>
        {/* Hero - Section d'accroche principale */}
        <Hero />

        {/* Values - Citation et statistiques */}
        <Values />

        {/* Services - Grille des services */}
        <Services />

        {/* Process - Les 4 étapes */}
        <Process />

        {/* Projects - Aperçu des réalisations */}
        <ProjectsPreview />

        {/* PainPoints - Problèmes vs Solutions */}
        <PainPoints />

        {/* Pricing - Les formules tarifaires */}
        <Pricing />

        {/* Testimonials - Témoignages clients */}
        <Testimonials />

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
