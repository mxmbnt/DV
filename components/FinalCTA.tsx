// FinalCTA - Bloc de conversion final

'use client'

import { Particles } from './Particles'

export default function FinalCTA() {
  const benefits = [
    'Visibilité accrue',
    'SEO optimisé',
    'Design moderne',
    'Support inclus',
    'Performance garantie'
  ]

  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="container-main">
        <div className="rounded-3xl px-8 py-10 text-center relative overflow-hidden w-full h-[362px] flex flex-col items-center justify-center" style={{ backgroundColor: '#171717' }}>
          {/* Particules */}
          <Particles
            className="absolute inset-0 pointer-events-none"
            quantity={200}
            color="#ffffff"
            staticity={50}
            maxOpacity={1}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Titre principal */}
            <h2 className="text-[40px] md:text-[48px] font-bold text-white mb-3 leading-tight">
              Votre futur site commence<br />ici.
            </h2>
            
            {/* Sous-titre */}
            <p className="text-[16px] md:text-[18px] text-white/90 max-w-2xl mx-auto mb-6">
              Besoin de visibilité, de crédibilité ou de ventes ? On s'occupe du reste.
            </p>

            {/* Bouton principal */}
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 text-white text-[16px] font-medium w-auto h-[55px] pl-5 pr-2 rounded-full transition-colors mb-6"
              style={{ backgroundColor: '#212121' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2A2A2A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#212121'}
            >
              Demandez un devis
              <span className="relative w-[40px] h-[40px] flex-shrink-0 rounded-full flex items-center justify-center overflow-hidden">
                {/* Fond blanc par défaut */}
                <span className="absolute inset-0 bg-white rounded-full" />
                
                {/* Fond bleu avec animation splash */}
                <span className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" style={{ backgroundColor: '#2A00FF' }} />
                
                {/* Flèche noire */}
                <svg className="w-5 h-5 text-black relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>

            {/* Badges de bénéfices */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {benefits.map((benefit, index) => (
                <span
                  key={index}
                  className="bg-primary-600 text-white text-[13px] font-medium px-4 py-2 rounded-full"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
