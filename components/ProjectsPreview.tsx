"use client"

import CarouselLarge from "@/components/large"

const portfolioSlides = [
  {
    tagline: "Social Media · Stratégie",
    title: "Gestion des réseaux sociaux pour entreprise tech",
    description:
      "Tomate, entreprise de delivery, voulait refaire son service. Nous avons proposé une refonte complète du concept social et du contenu. Stratégie marketing, création de contenu et suivi des performances ont permis d’augmenter l’engagement de plus de 150% et de dépasser le million d’impressions.",
    image: (
      <div className="h-full min-h-[280px] w-full bg-[#1a1a2e] flex items-center justify-center relative">
        <div className="text-center text-white p-6">
          <div className="text-sm text-primary-300 mb-2">Gestion des réseaux</div>
          <div className="text-2xl font-semibold">Stratégie marketing</div>
          <div className="text-4xl font-bold text-primary-300 mt-4">+1M</div>
          <div className="text-sm text-gray-400">impressions</div>
        </div>
        <div className="absolute bottom-4 left-4 rounded-xl bg-white px-4 py-2.5 shadow-lg">
          <div className="text-lg font-bold text-primary-600">+150%</div>
          <div className="text-xs font-medium text-gray-600">engagement</div>
        </div>
      </div>
    ),
  },
  {
    tagline: "Corporate · Webdesign",
    title: "Redspher | Site corporate premium",
    description:
      "Pour Redspher, leader de la logistique, nous avons incarné un projet ambitieux : créer leur nouveau site corporate et moderniser leur présence digitale. Nouvelle identité web, plus de 40 pages, design premium et expérience utilisateur soignée.",
    image: (
      <div className="h-full min-h-[280px] w-full bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center relative">
        <div className="text-center text-white p-6">
          <div className="text-3xl font-bold">Redspher</div>
          <div className="text-sm text-primary-200 mt-2">Site corporate premium</div>
        </div>
        <div className="absolute bottom-4 right-4 rounded-xl bg-white px-4 py-2.5 shadow-lg">
          <div className="text-lg font-bold text-primary-600">40+</div>
          <div className="text-xs font-medium text-gray-600">pages créées</div>
        </div>
      </div>
    ),
  },
]

export default function ProjectsPreview() {
  return (
    <section id="projets" className="pt-24 pb-6 bg-transparent">
      <div className="container-main flex justify-center mb-3">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm">
          <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
          <span className="text-[16px] text-gray-700">Portfolio</span>
        </div>
      </div>
      <CarouselLarge
        className="pt-0 sm:pt-0 md:pt-0"
        title="Un aperçu de nos créations"
        description="Découvrez comment nous aidons nos clients à se démarquer avec des créations uniques."
        slides={portfolioSlides}
      />
    </section>
  )
}
