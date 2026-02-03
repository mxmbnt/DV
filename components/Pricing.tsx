// Pricing - Les 3 formules tarifaires

export default function Pricing() {
  const plans = [
    {
      name: 'Essentiel',
      price: '75',
      unit: '€/h',
      desc: 'Des projets ponctuels',
      features: [
        { text: 'Design personnalisé', ok: true },
        { text: 'Responsive mobile', ok: true },
        { text: 'Livraison rapide', ok: true },
        { text: 'Support email', ok: true },
        { text: 'Révisions illimitées', ok: false },
        { text: 'Priorité planning', ok: false },
      ],
      popular: false,
    },
    {
      name: 'Optimisation',
      price: '49',
      unit: '€/h',
      desc: 'Engagement mensuel',
      features: [
        { text: 'Tout de Essentiel', ok: true },
        { text: 'Tarif préférentiel', ok: true },
        { text: 'Support prioritaire', ok: true },
        { text: 'Révisions illimitées', ok: true },
        { text: 'Priorité planning', ok: true },
        { text: 'Appels mensuels', ok: true },
      ],
      popular: true,
    },
    {
      name: 'Sur devis',
      price: 'Custom',
      unit: '',
      desc: 'Projets sur mesure',
      features: [
        { text: 'Prix fixe garanti', ok: true },
        { text: 'Planning dédié', ok: true },
        { text: 'Cahier des charges', ok: true },
        { text: 'Accompagnement complet', ok: true },
        { text: 'Formation incluse', ok: true },
        { text: 'Maintenance optionnelle', ok: true },
      ],
      popular: false,
    },
  ]

  return (
    <section id="tarifs" className="py-24 bg-transparent">
      <div className="container-main">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm">
            <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
            <span className="text-xs text-gray-700">Tarifs</span>
          </div>
        </div>

        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-4">
          Choisissez votre plan
        </h2>
        <p className="text-center text-gray-500 mb-14 max-w-lg mx-auto">
          Des offres adaptées à vos besoins et budgets. Transparence totale.
        </p>

        {/* 3 cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 md:p-8 relative ${
                plan.popular
                  ? 'border-primary-500 bg-white shadow-xl shadow-primary-100'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary-500 text-white text-xs font-medium px-4 py-1 rounded-full">
                    Recommandé
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-semibold text-black">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.desc}</p>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-black">{plan.price}</span>
                  <span className="text-gray-500">{plan.unit}</span>
                </div>
              </div>

              <div className="border-t border-gray-100 my-6"></div>

              <ul className="space-y-3">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    {f.ok ? (
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <span className={f.ok ? 'text-gray-700' : 'text-gray-400'}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block w-full text-center py-3 rounded-full text-sm font-medium transition-colors ${
                  plan.popular
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'border border-gray-200 text-black hover:bg-gray-50'
                }`}
              >
                Choisir ce plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
