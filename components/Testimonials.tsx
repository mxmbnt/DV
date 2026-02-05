// Testimonials - Témoignages clients (marquee 2 lignes à gauche, carte CTA à droite)

import ContactButton from "@/components/ContactButton"
import { Particles } from "@/components/Particles"
import Marquee from "@/components/ui/marquee"
import SocialProofItem from "@/components/ui/social-proof-item"

const socialProofItems = [
  {
    name: "Marie Dupont",
    username: "Fondatrice, Studio Lumière",
    text: "Digital Vision a parfaitement compris notre vision. Le résultat dépasse nos attentes !",
  },
  {
    name: "Thomas Bernard",
    username: "CEO, GreenTech",
    text: "Professionnels, réactifs et à l'écoute. Notre nouveau site reflète enfin notre qualité.",
  },
  {
    name: "Sophie Martin",
    username: "Marketing, Bloom",
    text: "Le meilleur investissement qu'on ait fait cette année. L'équipe est passionnée.",
  },
  {
    name: "Lucas Petit",
    username: "Fondateur, StartupX",
    text: "Un accompagnement de qualité du début à la fin. Je recommande à 100%.",
  },
  {
    name: "Camille Leroy",
    username: "Directrice, Agence Nova",
    text: "Un site moderne livré dans les temps. Équipe au top et très pro.",
  },
  {
    name: "Nicolas Dubois",
    username: "CEO, TechLab",
    text: "Enfin une agence qui écoute et livre un résultat à la hauteur. Merci !",
  },
]

const ROWS_COUNT = 3

export default function Testimonials() {
  const rowSize = Math.ceil(socialProofItems.length / ROWS_COUNT)
  const rows = Array.from({ length: ROWS_COUNT }, (_, i) =>
    socialProofItems.slice(i * rowSize, (i + 1) * rowSize)
  ).filter((row) => row.length > 0)

  return (
    <section className="py-24 bg-transparent">
      <div className="container-main">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm">
            <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
            <span className="text-[16px] text-gray-700">Témoignages</span>
          </div>
        </div>

        {/* Titre */}
        <h2 className="text-[48px] font-semibold text-center text-black mb-4">
          Ils parlent de nous
        </h2>
        <p className="text-center text-[18px] text-gray-500 mb-14 max-w-lg mx-auto">
          Ce que disent ceux qui nous ont fait confiance.
        </p>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Marquee multi-lignes (témoignages qui défilent) - même hauteur que la card à droite */}
          <div className="lg:col-span-3 relative flex min-h-[451px] flex-col overflow-hidden">
            <div className="relative flex w-full flex-col justify-center gap-4 overflow-hidden py-2">
              {rows.map((rowItems, i) => (
                <Marquee
                  key={i}
                  reverse={i % 2 === 1}
                  pauseOnHover
                  className="[--duration:20s] [--gap:2.5rem]"
                >
                  {rowItems.map((item) => (
                    <div key={item.username} className="mr-6">
                      <SocialProofItem {...item} />
                    </div>
                  ))}
                </Marquee>
              ))}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent" aria-hidden />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white to-transparent" aria-hidden />
            </div>
          </div>

          {/* CTA Card - style carte découverte avec particules et bouton marquee */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="sticky top-24 rounded-2xl overflow-hidden bg-[#171717] relative w-[390px] h-[451px] flex flex-col">
              <Particles
                className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
                quantity={100}
                color="#ffffff"
                ease={80}
                staticity={30}
                maxOpacity={1}
              />
              <div className="relative z-10 py-5 px-[15px] flex flex-col items-center text-center flex-1">
                {/* Logo (même que navbar) */}
                <div className="w-[76px] h-[76px] rounded-full bg-white flex items-center justify-center mt-4 mb-5 flex-shrink-0 overflow-hidden">
                  <img src="/logos/yVxYykAqZEuMGAR0GBOcbEK3yQ.png" alt="Digital Vision" className="w-10 h-10 object-contain" />
                </div>
                {/* Titre */}
                <h3 className="text-white font-semibold text-[36px] leading-tight mb-6">
                  Planifiez un appel<br />de découverte
                </h3>
                {/* Bouton marquee (ContactButton light) */}
                <ContactButton
                  className="bg-white text-[#171717] hover:bg-gray-100 w-full max-w-[280px] h-[52px]"
                  large
                  tightRight
                  light
                >
                  Nos disponibilités
                </ContactButton>
                {/* Contact mail */}
                <p className="text-white text-[16px] mt-4">Vous préférez par mail ?</p>
                <a href="mailto:contact@digital-vision.fr" className="text-gray-400 font-medium text-[16px] hover:text-gray-300 hover:underline mt-2">
                  contact@digital-vision.fr
                </a>
                {/* Badges en marquee défilant avec fade gauche/droite */}
                <div className="mt-auto pt-6 pb-6 w-full overflow-hidden relative">
                  {/* Fade gauche */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#171717] to-transparent pointer-events-none z-10"
                    aria-hidden
                  />
                  {/* Fade droite */}
                  <div
                    className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#171717] to-transparent pointer-events-none z-10"
                    aria-hidden
                  />
                  <div className="flex animate-marquee gap-2 w-max">
                    {[
                      "Création de site vitrine",
                      "Création de site e-commerce",
                      "Refonte de site",
                      "Maintenance & hébergement",
                      "SEO & contenu",
                    ].map((label) => (
                      <span
                        key={label}
                        className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-[#212121] text-white text-[16px] font-medium h-[39px] px-4"
                      >
                        {label}
                      </span>
                    ))}
                    {/* Dupliqué pour boucle infinie */}
                    {[
                      "Création de site vitrine",
                      "Création de site e-commerce",
                      "Refonte de site",
                      "Maintenance & hébergement",
                      "SEO & contenu",
                    ].map((label) => (
                      <span
                        key={`${label}-2`}
                        className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-[#212121] text-white text-[16px] font-medium h-[39px] px-4"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
