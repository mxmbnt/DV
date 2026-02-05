// FAQ - Questions fréquentes

'use client'

import { useState } from 'react'
import { Particles } from './Particles'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  const faqs = [
    {
      q: 'Combien de temps prend la réalisation d\'un site ?',
      a: 'Comptez 2 à 4 semaines pour une landing page et 4 à 8 semaines pour un site complet.',
    },
    {
      q: 'Quels sont vos délais de réponse ?',
      a: 'Nous répondons sous 24h en semaine. Pendant un projet, vous avez un canal direct.',
    },
    {
      q: 'Puis-je modifier mon site après livraison ?',
      a: 'Oui ! On vous forme à la gestion du contenu. On reste dispo pour les modifications techniques.',
    },
    {
      q: 'Proposez-vous des facilités de paiement ?',
      a: 'Oui, on propose un paiement en 2 ou 3 fois selon le montant du projet.',
    },
    {
      q: 'Est-ce que le site sera bien référencé ?',
      a: 'On optimise chaque site pour le SEO : structure, vitesse, balises. Pour un SEO avancé, on recommande des spécialistes.',
    },
  ]

  return (
    <section id="faq" className="py-24 bg-transparent">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gauche */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm mb-6">
              <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
              <span className="text-[16px] text-gray-700">FAQ</span>
            </div>
            <h2 className="text-[48px] font-semibold text-black mb-4 leading-tight">
              Vos questions,
              <br />
              nos réponses
            </h2>
            <p className="text-[18px] text-gray-500 mb-8">
              Tout ce que vous devez savoir avant de démarrer.
            </p>
          </div>

          {/* Droite - Accordéon */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-colors ${
                  open === i ? 'border-gray-200 bg-white' : 'border-gray-200 bg-white'
                }`}
                style={open === i ? { borderColor: '#171717', backgroundColor: '#171717' } : {}}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                    open === i ? '' : 'bg-white'
                  }`}
                  style={open === i ? { backgroundColor: '#171717' } : {}}
                >
                  <span className={`text-[16px] font-bold pr-4 ${open === i ? 'text-white' : 'text-black'}`}>
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      open === i ? 'rotate-180 text-white' : 'text-gray-500'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${open === i ? 'max-h-40' : 'max-h-0'}`}>
                  {open === i && (
                    <div className="relative px-5 pb-5" style={{ backgroundColor: '#171717' }}>
                      <Particles
                        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
                        quantity={100}
                        color="#ffffff"
                        staticity={50}
                      />
                      <p className="relative z-10 text-[16px] font-bold text-white">{faq.a}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
