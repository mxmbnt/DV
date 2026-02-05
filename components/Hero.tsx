// Hero - Section principale

import ContactButton from "@/components/ContactButton"

export default function Hero() {
  const marqueeItems = [
    'Client Fiable',
    'Livraison Rapide & Efficace',
    '+10 Sites Web Réalisés',
    'Note Moyenne 5/5 Clients',
    'Accompagnement Dédié',
    'Sécurité & Hébergement',
  ]

  return (
    <section className="pt-20 pb-0 bg-transparent relative overflow-hidden">
      <div className="container-main relative">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 pt-8 max-w-5xl mx-auto">
          {/* Colonne gauche */}
          <div className="max-w-xl text-center lg:text-left">
            {/* Badge confiance */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 mb-6 shadow-sm">
              <div className="flex -space-x-1.5">
                <img src="https://i.pravatar.cc/24?img=1" alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/24?img=2" alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/24?img=3" alt="" className="w-6 h-6 rounded-full border-2 border-white" />
              </div>
              <span className="text-[16px] text-gray-700">Confiance de 5+ entreprises</span>
            </div>

            {/* Titre avec logo au même niveau que "attirent" (caché sur mobile) */}
            <h1 className="text-[74px] font-bold text-black leading-tight tracking-tight">
              Des sites web
              <br />
              <span className="inline-flex flex-wrap items-baseline gap-3 md:gap-6">
                qui <span style={{ color: '#2A00FF' }}>attirent</span>
                <span className="hidden md:inline-flex w-10 h-10 md:w-12 md:h-12 rounded-xl items-center justify-center p-2 shrink-0 align-baseline rotate-12 ml-1 md:ml-2" style={{ backgroundColor: '#2A00FF' }}>
                  <img src="/logos/WEgbRtdISL58zfOFWPbolgMtZU.png" alt="" className="w-full h-full object-contain" />
                </span>
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="mt-5 text-[18px] text-gray-500 leading-relaxed">
              Créez plus vite. Optimisez mieux. Développez votre activité avec des sites web percutants.
            </p>

            {/* CTA - même style que Tarifs */}
            <div className="mt-7">
              <ContactButton className="h-[60px] min-w-[210px] lg:min-w-[229px]" large>
                Demandez un devis
              </ContactButton>
            </div>

            {/* Note sous le bouton */}
            <p className="mt-3 text-[16px] text-gray-400">
              Pas de contrainte, que des solutions.
            </p>
          </div>

          {/* Colonne droite - Cartes témoignages flottantes */}
          <div className="relative w-64 h-64 hidden lg:block flex-shrink-0">
            {/* Carte témoignage 1 - Animation flottement 1 */}
            <div className="absolute top-0 right-0 bg-white rounded-2xl shadow-lg p-4 w-52 animate-float-1 hover:animation-pause">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://i.pravatar.cc/40?img=5" alt="" className="w-10 h-10 rounded-full" />
                <span className="font-medium text-gray-900 text-[16px]">@tomas</span>
              </div>
              <p className="text-gray-600 text-[16px]">
                Un site moderne, simple et efficace
              </p>
            </div>

            {/* Carte témoignage 2 - Animation flottement 2 */}
            <div className="absolute top-32 right-6 bg-white rounded-2xl shadow-lg p-4 w-56 animate-float-2 hover:animation-pause">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://i.pravatar.cc/40?img=12" alt="" className="w-10 h-10 rounded-full" />
                <span className="font-medium text-gray-900 text-[16px]">@mark_locus</span>
              </div>
              <p className="text-gray-600 text-[16px]">
                Plus de clients depuis la refonte.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee / Bandeau défilant */}
      <div className="mt-12 flex justify-center">
        <div className="relative max-w-4xl w-full mx-auto">
          {/* Fade gauche */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          
          {/* Fade droite */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Marquee content */}
          <div className="overflow-hidden py-2">
            <div className="flex animate-marquee gap-3">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 h-[39px] flex items-center bg-gray-900 text-white px-4 rounded-full text-[16px] font-medium whitespace-nowrap"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
