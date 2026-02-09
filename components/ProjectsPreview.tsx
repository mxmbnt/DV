"use client"

import { useState } from 'react'
import ContactButton from '@/components/ContactButton'

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
  {
    tagline: "E-commerce · Development",
    title: "TechStore | Boutique en ligne moderne",
    description:
      "Création d'une plateforme e-commerce complète pour TechStore, spécialiste en électronique. Interface intuitive, système de paiement sécurisé, gestion des stocks en temps réel et design responsive. Le site a généré plus de 500 commandes en un mois.",
    image: (
      <div className="h-full min-h-[280px] w-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center relative">
        <div className="text-center text-white p-6">
          <div className="text-3xl font-bold">TechStore</div>
          <div className="text-sm text-emerald-100 mt-2">E-commerce moderne</div>
        </div>
        <div className="absolute top-4 left-4 rounded-xl bg-white px-4 py-2.5 shadow-lg">
          <div className="text-lg font-bold text-emerald-600">500+</div>
          <div className="text-xs font-medium text-gray-600">commandes/mois</div>
        </div>
      </div>
    ),
  },
  {
    tagline: "Landing Page · Design",
    title: "FitnessPro | Page de conversion",
    description:
      "Landing page haute performance pour FitnessPro, salle de sport premium. Design épuré, sections optimisées pour la conversion, formulaire de contact intelligent et animations engageantes. Taux de conversion augmenté de 230% en 3 mois.",
    image: (
      <div className="h-full min-h-[280px] w-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center relative">
        <div className="text-center text-white p-6">
          <div className="text-3xl font-bold">FitnessPro</div>
          <div className="text-sm text-orange-100 mt-2">Landing page optimisée</div>
        </div>
        <div className="absolute bottom-4 left-4 rounded-xl bg-white px-4 py-2.5 shadow-lg">
          <div className="text-lg font-bold text-orange-600">+230%</div>
          <div className="text-xs font-medium text-gray-600">conversion</div>
        </div>
      </div>
    ),
  },
  {
    tagline: "Portfolio · Créatif",
    title: "Studio Artis | Portfolio photographe",
    description:
      "Portfolio immersif pour Studio Artis, photographe professionnel. Galerie photos interactive, expérience visuelle unique, système de catégories avancé et intégration réseaux sociaux. Le site a attiré plus de 50 nouveaux clients en 2 mois.",
    image: (
      <div className="h-full min-h-[280px] w-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center relative">
        <div className="text-center text-white p-6">
          <div className="text-3xl font-bold">Studio Artis</div>
          <div className="text-sm text-purple-100 mt-2">Portfolio créatif</div>
        </div>
        <div className="absolute top-4 right-4 rounded-xl bg-white px-4 py-2.5 shadow-lg">
          <div className="text-lg font-bold text-purple-600">50+</div>
          <div className="text-xs font-medium text-gray-600">nouveaux clients</div>
        </div>
      </div>
    ),
  },
]

export default function ProjectsPreview() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section id="projets" className="py-24 bg-transparent">
      <div className="container-main">
        {/* En-tête */}
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm mb-6">
            <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
            <span className="text-[16px] text-gray-700">Portfolio</span>
          </div>
          <h2 className="text-[48px] font-semibold text-black mb-4 text-center">
            Un aperçu de nos créations
          </h2>
          <p className="text-[18px] text-gray-500 max-w-2xl text-center">
            Découvrez comment nous aidons nos clients à se démarquer avec des créations uniques.
          </p>
        </div>

        {/* Grille 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {portfolioSlides.slice(0, 4).map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-lg cursor-pointer transition-all hover:shadow-xl"
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              {/* Image */}
              <div className="h-[280px] overflow-hidden">
                {project.image}
              </div>

              {/* Contenu */}
              <div className="p-6">
                <div className="text-sm font-medium text-gray-500 mb-2">
                  {project.tagline}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {project.title}
                </h3>

                {/* Description dépliable */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedCard === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="text-[16px] text-gray-600 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Bouton + */}
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-all"
                  style={{ backgroundColor: '#171717' }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setExpandedCard(expandedCard === index ? null : index)
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2A2A2A')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#171717')}
                >
                  <svg
                    className={`w-5 h-5 text-white transition-transform ${expandedCard === index ? 'rotate-45' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Voir plus */}
        <div className="flex justify-center">
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 text-white text-[16px] font-medium w-[160px] h-[55px] pl-3 pr-0 rounded-full transition-colors"
            style={{ backgroundColor: '#171717' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2A2A2A')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#171717')}
          >
            Voir plus
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
        </div>
      </div>
    </section>
  )
}
