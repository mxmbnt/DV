"use client"

import { Particles } from "@/components/Particles"

export default function PainPoints() {
  const problems = [
    'Votre site actuel ne reflète pas votre professionnalisme',
    'Vous perdez des clients à cause d\'un design daté',
    'Votre site n\'est pas adapté aux mobiles',
    'Vous ne savez pas par où commencer',
    'Les agences sont trop chères ou impersonnelles',
  ]

  const solutions = [
    'Un design moderne qui valorise votre image',
    'Une expérience optimisée qui convertit',
    'Un site 100% responsive sur tous les écrans',
    'Un accompagnement de A à Z, clair et structuré',
    'Un service humain et personnalisé à prix juste',
  ]

  return (
    <section className="pt-6 pb-24 bg-transparent">
      <div className="container-main">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm">
            <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
            <span className="text-[16px] text-gray-700">Pourquoi nous</span>
          </div>
        </div>

        {/* Titre de section */}
        <h2 className="text-[48px] font-semibold text-center text-black mb-4">
          Ce qui vous freine et ce qu&apos;on résout.
        </h2>
        <p className="text-center text-[18px] text-gray-500 mb-12 max-w-lg mx-auto">
          On comprend vos défis. Voici comment on les transforme en opportunités.
        </p>

        {/* Grosse carte conteneur */}
        <div className="rounded-2xl bg-[#FFFFFF] p-6 md:p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Colonne 1 : titre au-dessus + mini card grise */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[16px] font-semibold text-gray-900 text-center">Vos problèmes</h3>
              <div className="rounded-xl bg-[#F5F5F5] p-6 md:p-8 flex-1 border" style={{ borderColor: '#E6E6E6' }}>
                <ul className="space-y-5">
                  {problems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-gray-800 text-[16px] leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Colonne 2 : titre au-dessus + mini card noire avec particules */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[16px] font-bold text-primary-500 text-center">Nos solutions</h3>
              <div className="rounded-xl bg-gray-900 overflow-hidden relative flex-1 min-h-[280px]">
                <Particles
                  className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
                  quantity={100}
                  color="#ffffff"
                  ease={80}
                  staticity={30}
                  maxOpacity={1}
                />
                <div className="relative z-10 p-6 md:p-8">
                  <ul className="space-y-5">
                    {solutions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white text-[16px] leading-snug">{item}</span>
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
