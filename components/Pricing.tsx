"use client"

import ContactButton from "@/components/ContactButton"
import { Particles } from "@/components/Particles"

const starIcon = (
  <span className="inline-flex flex-shrink-0 w-[18px] h-[18px] items-center justify-center text-primary-500 text-[18px] leading-none" aria-hidden>
    ✦
  </span>
)

export default function Pricing() {
  return (
    <section id="tarifs" className="py-24 bg-transparent">
      <div className="container-main">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm">
            <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
            <span className="text-[16px] text-gray-700">Tarifs</span>
          </div>
        </div>

        {/* Titre */}
        <h2 className="text-[48px] font-semibold text-center text-black mb-4">
          Choisissez votre plan
        </h2>
        <p className="text-center text-[18px] text-gray-500 mb-14 max-w-lg mx-auto">
          Des offres adaptées à vos besoins et budgets. Transparence totale.
        </p>

        {/* Offres : largeur max 900px */}
        <div className="max-w-[900px] mx-auto">
        {/* Ligne 1 : Starter + Maintenance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Carte Starter */}
          <div className="rounded-2xl bg-[#FFFFFF] p-6 md:p-8 flex flex-col shadow-lg">
            <div className="rounded-xl bg-[#FCFCFC] p-5 md:p-6 mb-6">
              <h3 className="text-[18px] font-semibold text-black mb-2">Starter</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-[48px] font-bold text-black">75€</span>
                <span className="text-black text-[18px] font-normal">/mois</span>
              </div>
              <p className="text-black text-[16px] mb-6">Pour lancer ton activité en ligne.</p>
              <ContactButton className="min-w-[280px] w-[280px] h-[60px] whitespace-nowrap" large tightRight>Demandez un devis</ContactButton>
            </div>
            <p className="text-black font-semibold text-[16px] mb-3">Dans cette offre:</p>
            <ul className="space-y-2.5">
              {[
                "Jusqu'à 8 pages vitrines",
                "SEO essentiel",
                "Design responsive & sécurisé",
                "Formulaire de contact intégré",
                "Support par e-mail",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-black text-[16px]">
                  {starIcon}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Carte Maintenance */}
          <div className="rounded-2xl bg-[#FFFFFF] p-6 md:p-8 flex flex-col relative shadow-lg">
            <div className="absolute top-4 right-4">
              <span className="bg-primary-500 text-white text-[16px] font-medium px-3 py-1.5 rounded-lg">
                Populaire
              </span>
            </div>
            <div className="rounded-xl bg-[#FCFCFC] p-5 md:p-6 mb-6">
              <h3 className="text-[18px] font-semibold text-black mb-2">Maintenance</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-[48px] font-bold text-black">49€</span>
                <span className="text-black text-[18px] font-normal">/mois</span>
              </div>
              <p className="text-black text-[16px] mb-6">Pour garder ton site à jour et performant.</p>
              <ContactButton className="min-w-[280px] w-[280px] h-[60px] whitespace-nowrap" large tightRight>Demandez un devis</ContactButton>
            </div>
            <p className="text-black font-semibold text-[16px] mb-3">Dans cette offre:</p>
            <ul className="space-y-2.5">
              {[
                "Mise à jour du contenu",
                "Ajustements de design légers",
                "Vérification des formulaires & liens cassés",
                "SEO avancé",
                "Support par e-mail ou message",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-black text-[16px]">
                  {starIcon}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ligne 2 : Custom (pleine largeur, fond sombre) */}
        <div className="rounded-2xl bg-[#171717] overflow-hidden relative h-[307px]">
          <Particles
            className="absolute bottom-0 left-0 right-0 h-48"
            quantity={100}
            color="#ffffff"
            ease={80}
            staticity={30}
            maxOpacity={1}
          />
          <div className="relative z-10 h-full flex items-center py-6 pl-2 pr-5 md:py-8 md:pl-3 md:pr-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center w-full">
              {/* Gauche : carte avec titre, prix, description et bouton à l’intérieur */}
              <div>
                <div className="rounded-2xl bg-[#1a1a1a] w-[440px] h-[277px] py-5 px-3 md:py-6 md:px-4 flex flex-col">
                  <h3 className="text-[16px] font-semibold text-gray-400 mb-2">Custom</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-[48px] font-bold text-white">Sur devis</span>
                    <span className="text-gray-400 text-[18px] font-normal">/mois</span>
                  </div>
                  <p className="text-gray-400 text-[16px] mb-6">Pour projets complexes.</p>
                  <ContactButton className="min-w-[280px] w-[280px] h-[60px] whitespace-nowrap" large tightRight light>
                    Demandez un devis
                  </ContactButton>
                </div>
              </div>

              {/* Droite : Dans cette offre */}
              <div>
                <p className="text-white font-bold text-[18px] mb-3">Dans cette offre :</p>
                <ul className="space-y-2.5">
                  {[
                    "Créations de sections ou pages supplémentaires",
                    "Intégration tierces",
                    "SEO avancé sur mesure",
                    "Accompagnement marketing & communication",
                    "Support prioritaire",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white text-[16px] font-normal">
                      <span className="inline-flex flex-shrink-0 w-[18px] h-[18px] items-center justify-center text-white text-[18px] leading-none" aria-hidden>✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
