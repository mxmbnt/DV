// Hero - Section principale

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
    <section className="pt-20 pb-0 bg-transparent min-h-[90vh] relative overflow-hidden">
      <div className="container-main relative">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 pt-8 max-w-3xl mx-auto">
          {/* Colonne gauche */}
          <div className="max-w-sm text-center lg:text-left">
            {/* Badge confiance */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 mb-6 shadow-sm">
              <div className="flex -space-x-1.5">
                <img src="https://i.pravatar.cc/24?img=1" alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/24?img=2" alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/24?img=3" alt="" className="w-6 h-6 rounded-full border-2 border-white" />
              </div>
              <span className="text-xs text-gray-700">Confiance de 5+ entreprises</span>
            </div>

            {/* Titre avec logo positionné */}
            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight">
                Des sites web
                <br />
                qui <span style={{ color: '#2A00FF' }}>attirent</span>
              </h1>
              
              {/* Logo bleu positionné à droite du texte - Visible uniquement sur desktop */}
              <span className="hidden lg:flex absolute top-0 -right-14 lg:-right-16 w-10 h-10 md:w-12 md:h-12 rounded-xl items-center justify-center p-2 rotate-12" style={{ backgroundColor: '#2A00FF' }}>
                <img src="/logos/WEgbRtdISL58zfOFWPbolgMtZU.png" alt="" className="w-full h-full object-contain" />
              </span>
            </div>

            {/* Sous-titre */}
            <p className="mt-5 text-sm md:text-base text-gray-500 leading-relaxed">
              Créez plus vite. Optimisez mieux. Développez votre activité avec des sites web percutants.
            </p>

            {/* CTA */}
            <div className="mt-7">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
              >
                Demandez un devis
                <span className="relative w-6 h-6 rounded-full flex items-center justify-center overflow-hidden">
                  {/* Fond blanc par défaut */}
                  <span className="absolute inset-0 bg-white rounded-full" />
                  
                  {/* Fond bleu avec animation splash */}
                  <span className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" style={{ backgroundColor: '#2A00FF' }} />
                  
                  {/* Flèche noire */}
                  <svg className="w-3.5 h-3.5 text-black relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Note sous le bouton */}
            <p className="mt-3 text-xs text-gray-400">
              Pas de contrainte, que des solutions.
            </p>
          </div>

          {/* Colonne droite - Cartes témoignages flottantes */}
          <div className="relative w-64 h-64 hidden lg:block flex-shrink-0">
            {/* Carte témoignage 1 - Animation flottement 1 */}
            <div className="absolute top-0 right-0 bg-white rounded-2xl shadow-lg p-4 w-52 animate-float-1 hover:animation-pause">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://i.pravatar.cc/40?img=5" alt="" className="w-10 h-10 rounded-full" />
                <span className="font-medium text-gray-900 text-sm">@tomas</span>
              </div>
              <p className="text-gray-600 text-sm">
                Un site moderne, simple et efficace
              </p>
            </div>

            {/* Carte témoignage 2 - Animation flottement 2 */}
            <div className="absolute top-32 right-6 bg-white rounded-2xl shadow-lg p-4 w-56 animate-float-2 hover:animation-pause">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://i.pravatar.cc/40?img=12" alt="" className="w-10 h-10 rounded-full" />
                <span className="font-medium text-gray-900 text-sm">@mark_locus</span>
              </div>
              <p className="text-gray-600 text-sm">
                Plus de clients depuis la refonte.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee / Bandeau défilant */}
      <div className="mt-0 flex justify-center">
        <div className="relative max-w-4xl w-full mx-auto">
          {/* Fade gauche */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          
          {/* Fade droite */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Marquee content */}
          <div className="overflow-hidden py-4">
            <div className="flex animate-marquee gap-3">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-gray-900 text-white px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap"
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
