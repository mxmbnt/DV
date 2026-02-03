// Testimonials - Témoignages clients

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Digital Vision a parfaitement compris notre vision. Le résultat dépasse nos attentes !',
      name: 'Marie Dupont',
      role: 'Fondatrice, Studio Lumière',
      color: '#E9D5FF',
    },
    {
      quote: 'Professionnels, réactifs et à l\'écoute. Notre nouveau site reflète enfin notre qualité.',
      name: 'Thomas Bernard',
      role: 'CEO, GreenTech',
      color: '#DBEAFE',
    },
    {
      quote: 'Le meilleur investissement qu\'on ait fait cette année. L\'équipe est passionnée.',
      name: 'Sophie Martin',
      role: 'Marketing, Bloom',
      color: '#FCE7F3',
    },
    {
      quote: 'Un accompagnement de qualité du début à la fin. Je recommande à 100%.',
      name: 'Lucas Petit',
      role: 'Fondateur, StartupX',
      color: '#D1FAE5',
    },
  ]

  return (
    <section className="py-24 bg-transparent">
      <div className="container-main">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm">
            <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
            <span className="text-xs text-gray-700">Témoignages</span>
          </div>
        </div>

        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-4">
          Ils parlent de nous
        </h2>
        <p className="text-center text-gray-500 mb-14 max-w-lg mx-auto">
          Ce que disent ceux qui nous ont fait confiance.
        </p>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Témoignages */}
          <div className="lg:col-span-3 space-y-4">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex-shrink-0"
                    style={{ backgroundColor: t.color }}
                  />
                  <div className="flex-1">
                    <div className="flex gap-1 mb-2">
                      {[1,2,3,4,5].map((s) => (
                        <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700">&ldquo;{t.quote}&rdquo;</p>
                    <p className="mt-2 text-sm text-gray-500">
                      <span className="font-medium text-black">{t.name}</span> · {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 bg-black rounded-2xl p-8 text-white">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-3">
                Planifiez un appel de découverte
              </h3>
              <p className="text-gray-400 mb-6">
                30 minutes pour discuter de votre projet, vos objectifs et voir comment on peut vous aider.
              </p>
              <a
                href="#contact"
                className="block w-full bg-white text-black text-center font-medium py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                Réserver maintenant →
              </a>
              <p className="text-center text-xs text-gray-500 mt-4">
                Gratuit · Sans engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
