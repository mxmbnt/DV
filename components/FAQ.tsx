// FAQ - Questions fréquentes

'use client'

import { useState } from 'react'

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
            <h2 className="text-[48px] font-semibold text-black mb-4">
              Vos questions,
              <br />
              nos réponses
            </h2>
            <p className="text-[18px] text-gray-500 mb-8">
              Tout ce que vous devez savoir avant de démarrer.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-black text-white text-[16px] font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Une autre question ? →
            </a>
          </div>

          {/* Droite - Accordéon */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-[16px] font-medium text-black pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${open === i ? 'max-h-40' : 'max-h-0'}`}>
                  <p className="px-5 pb-5 text-[16px] text-gray-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
