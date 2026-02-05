// Services - Grille de services avec thème sombre

import { Particles } from "@/components/Particles"

const IconMonitor = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const IconLightning = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const IconDocument = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const IconChart = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const IconPalette = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
)

const IconShield = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const IconStar = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
)

const IconChat = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)

export default function Services() {
  const mainService = {
    title: 'Création de sites vitrines',
    description: 'Des sites vitrines élégants et performants, conçus pour présenter vos services et attirer de nouveaux clients.',
    features: [
      { icon: IconMonitor, text: 'Design moderne' },
      { icon: IconLightning, text: 'Rapide' },
      { icon: IconDocument, text: 'SEO-friendly' },
    ],
  }

  const services = [
    {
      title: 'Refonte de sites web',
      description: 'Nous modernisons vos sites existants avec un design repensé, une navigation optimisée et de meilleures performances.',
      features: [
        { icon: IconChart, text: 'Performance' },
        { icon: IconPalette, text: 'Design moderne' },
      ],
    },
    {
      title: 'Maintenance & hébergement',
      description: 'Un service complet pour maintenir vos sites à jour, sécurisés et hébergés sur des serveurs fiables.',
      features: [
        { icon: IconShield, text: 'Sécurisé' },
        { icon: IconStar, text: 'Fiable' },
        { icon: IconChat, text: 'Support 24/7' },
      ],
    },
  ]

  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="container-main">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm">
            <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
            <span className="text-[16px] text-gray-700">Services</span>
          </div>
        </div>

        {/* Titre */}
        <h2 className="text-[48px] font-semibold text-center text-black mb-4">
          Nos services
        </h2>
        <p className="text-center text-[18px] text-gray-500 mb-12 max-w-lg mx-auto">
          Nous créons des solutions web modernes qui renforcent votre visibilité et valorisent votre entreprise en ligne.
        </p>

        {/* Grande carte principale */}
        <div className="mb-6 rounded-3xl overflow-hidden bg-gray-900 p-8 md:p-10 relative">
          <Particles 
            className="absolute bottom-0 left-0 right-0 h-48"
            quantity={100}
            color="#ffffff"
            ease={80}
            staticity={30}
            maxOpacity={1}
          />
          <div className="relative z-10">
            <h3 className="text-[16px] font-semibold text-white mb-4">
              {mainService.title}
            </h3>
            <p className="text-[16px] text-gray-300 mb-6">
              {mainService.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {mainService.features.map((feature, i) => {
                const IconComponent = feature.icon
                return (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white text-[16px] font-medium rounded-full border border-white/20">
                    <IconComponent />
                    <span>{feature.text}</span>
                  </span>
                )
              })}
            </div>
          </div>
        </div>

        {/* Grille 2 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="rounded-3xl overflow-hidden bg-gray-900 p-8 relative"
            >
              <Particles 
                className="absolute bottom-0 left-0 right-0 h-48"
                quantity={100}
                color="#ffffff"
                ease={80}
                staticity={30}
                maxOpacity={1}
              />
              <div className="relative z-10">
                <h3 className="text-[16px] font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-[16px] text-gray-300 mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, j) => {
                    const IconComponent = feature.icon
                    return (
                      <span key={j} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white text-[16px] font-medium rounded-full border border-white/20">
                        <IconComponent />
                        <span>{feature.text}</span>
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
