// Services - Grille de services exacte

export default function Services() {
  const services = [
    {
      icon: '🔄',
      title: 'Refonte de site web',
      description: 'Modernisez votre présence en ligne avec un design actuel.',
      tags: ['Modernisation', 'UX/UI'],
    },
    {
      icon: '🎨',
      title: 'Webdesign & Maquettage',
      description: 'Des maquettes pixel-perfect sur Figma.',
      tags: ['Figma', 'UI Design'],
    },
    {
      icon: '⚡',
      title: 'Développement & Optimisation',
      description: 'Code propre et performant pour des sites rapides.',
      tags: ['Next.js', 'SEO'],
    },
    {
      icon: '✨',
      title: 'Branding & Identité',
      description: 'Une identité visuelle mémorable.',
      tags: ['Logo', 'Charte'],
    },
  ]

  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="container-main">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm">
            <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
            <span className="text-xs text-gray-700">Services</span>
          </div>
        </div>

        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-4">
          Nos services
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">
          Des solutions complètes pour créer et améliorer votre présence en ligne.
        </p>

        {/* Grande carte principale */}
        <div className="mb-6 rounded-3xl overflow-hidden border border-gray-200 bg-gradient-to-br from-primary-50 via-white to-primary-100 p-8 md:p-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">Refonte</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Design UI</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">UX/UI Identity</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Création de votre rêve
              </h3>
              <p className="text-gray-500 mb-6">
                On transforme votre vision en réalité digitale. De l&apos;idée au site final, 
                on vous accompagne à chaque étape avec passion.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-primary-500 transition-colors">
                En savoir plus →
              </a>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                <span className="text-6xl">🎨</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grille 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <span className="text-2xl">{service.icon}</span>
                <div>
                  <h3 className="font-semibold text-black mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
