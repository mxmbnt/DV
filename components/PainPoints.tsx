// PainPoints - Problèmes vs Solutions

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
    <section className="py-24 bg-transparent">
      <div className="container-main">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm">
            <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
            <span className="text-xs text-gray-700">Pourquoi nous</span>
          </div>
        </div>

        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-4">
          Ce qui vous freine et ce qu&apos;on résout.
        </h2>
        <p className="text-center text-gray-500 mb-14 max-w-lg mx-auto">
          On comprend vos défis. Voici comment on les transforme en opportunités.
        </p>

        {/* 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Problèmes */}
          <div className="rounded-2xl bg-red-50 border border-red-100 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-red-800">Vos problèmes</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="rounded-2xl bg-primary-50 border border-primary-100 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-800">Nos solutions</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
