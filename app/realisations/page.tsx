// Page Réalisations - Portfolio complet Digital Vision

export const metadata = {
  title: 'Réalisations | Digital Vision',
  description: 'Découvrez nos projets : landing pages, sites vitrines, e-commerce et refontes réalisés par Digital Vision.',
  openGraph: {
    title: 'Réalisations | Digital Vision',
    description: 'Découvrez nos projets réalisés par Digital Vision.',
    images: [{ url: '/og/page_realisations.png', width: 1200, height: 630, alt: 'Réalisations Digital Vision' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og/page_realisations.png'] },
}

import Navbar from '@/components/Navbar'
import FAQ from '@/components/FAQ'
import WordReveal from '@/components/WordReveal'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

const projects = [
  {
    tagline: 'Landing Page · Tech / IA',
    title: 'Générez des missions techniques pour développeurs avec l\'IA',
    description:
      'Plateforme SaaS de mise en relation entre développeurs freelance et entreprises tech. Landing page haute conversion avec démonstration interactive du produit, témoignages clients et tunnel d\'inscription optimisé. Résultat : +340% de sign-ups en 6 semaines.',
    stats: [{ value: '+340%', label: 'sign-ups' }, { value: '6 sem.', label: 'livraison' }],
    image: (
      <div className="h-full w-full bg-[#0d0d1a] flex flex-col relative overflow-hidden">
        {/* Fond grille */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        {/* Contenu */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 p-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#2A00FF]/20 border border-[#2A00FF]/40 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#7B5FFF] text-[14px] font-medium">Propulsé par l'IA</span>
          </div>
          <h3 className="text-white text-[32px] md:text-[40px] font-bold leading-tight mb-6 max-w-lg">
            Générez des <span className="text-[#7B5FFF]">missions techniques</span><br />pour développeurs avec l'IA
          </h3>
          <div className="inline-flex items-center justify-between gap-2 text-white text-[16px] font-medium h-[50px] pl-5 pr-2 rounded-full" style={{ backgroundColor: '#2A00FF' }}>
            Commencer gratuitement
            <span className="relative w-[36px] h-[36px] flex-shrink-0 rounded-full bg-white flex items-center justify-center">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
        {/* Footer barre */}
        <div className="relative z-10 flex items-center justify-center gap-6 border-t border-white/10 px-8 py-4">
          {['GitHub', 'Jira', 'Slack', 'Notion'].map((tool) => (
            <span key={tool} className="text-white/40 text-[13px] font-medium">{tool}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    tagline: 'Site Vitrine · Services à domicile',
    title: 'Nettoyage & Jardinage à domicile pour votre tranquillité',
    description:
      'Site vitrine complet pour une entreprise de services à domicile. Présentation claire des prestations, système de devis en ligne, galerie photos avant/après et intégration Google Maps. Le site a multiplié par 3 les demandes de devis dès le premier mois.',
    stats: [{ value: 'x3', label: 'devis reçus' }, { value: '1 mois', label: 'pour les résultats' }],
    image: (
      <div className="h-full w-full bg-gradient-to-br from-[#0eb69a] to-[#0a9982] flex flex-col relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between flex-1 p-10 gap-6">
          <div className="text-white max-w-xs">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 mb-4">
              <span className="text-white text-[13px] font-medium">Services Pro</span>
            </div>
            <h3 className="text-[28px] md:text-[34px] font-bold leading-tight mb-4">
              Nettoyage &<br />Jardinage à domicile<br />pour votre <span className="underline decoration-white/50">tranquillité</span>
            </h3>
            <div className="inline-flex items-center justify-between gap-2 text-[#0eb69a] text-[15px] font-medium h-[46px] pl-5 pr-2 rounded-full bg-white">
              Demander un devis
              <span className="w-[32px] h-[32px] rounded-full bg-[#0eb69a] flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
          {/* Mockup image placeholder */}
          <div className="w-[200px] h-[160px] rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center overflow-hidden flex-shrink-0">
            <div className="text-white/60 text-[13px] text-center px-4">Photo<br />Équipe</div>
          </div>
        </div>
        {/* Badges */}
        <div className="relative z-10 flex items-center gap-3 px-10 pb-6">
          {['Nettoyage intérieur', 'Jardinage', 'Vitrerie', 'Déménagement'].map((b) => (
            <span key={b} className="bg-white/20 text-white text-[13px] font-medium px-3 py-1.5 rounded-full border border-white/30">{b}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    tagline: 'Corporate · Logistique',
    title: 'Redspher | Nouveau site corporate premium',
    description:
      'Refonte complète du site corporate de Redspher, leader européen de la logistique express. Nouvelle identité web, plus de 40 pages, design premium épuré et expérience utilisateur soignée. Accompagnement de 3 mois, de la stratégie à la mise en ligne.',
    stats: [{ value: '40+', label: 'pages' }, { value: '3 mois', label: 'de projet' }],
    image: (
      <div className="h-full w-full bg-gradient-to-br from-[#2A00FF] to-[#1a00cc] flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 flex flex-col items-start justify-center flex-1 p-10">
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 mb-4">
            <span className="text-white/80 text-[13px] font-medium">Corporate · Premium</span>
          </div>
          <h3 className="text-white text-[36px] md:text-[48px] font-bold mb-2">Redspher</h3>
          <p className="text-white/60 text-[16px] mb-6">Leader européen de la logistique express</p>
          <div className="flex gap-6">
            <div className="bg-white/10 rounded-2xl px-5 py-3 border border-white/20">
              <div className="text-white text-[24px] font-bold">40+</div>
              <div className="text-white/60 text-[13px]">pages créées</div>
            </div>
            <div className="bg-white/10 rounded-2xl px-5 py-3 border border-white/20">
              <div className="text-white text-[24px] font-bold">3</div>
              <div className="text-white/60 text-[13px]">mois de projet</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    tagline: 'E-commerce · Électronique',
    title: 'TechStore | Boutique en ligne haute performance',
    description:
      'Création d\'une plateforme e-commerce complète pour TechStore. Interface intuitive, paiement sécurisé multi-devises, gestion des stocks en temps réel et design 100% responsive. Plus de 500 commandes traitées dès le premier mois de lancement.',
    stats: [{ value: '500+', label: 'commandes/mois' }, { value: '99%', label: 'uptime' }],
    image: (
      <div className="h-full w-full bg-gradient-to-br from-emerald-500 to-teal-600 flex flex-col relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 p-10 text-center">
          <h3 className="text-white text-[40px] font-bold mb-2">TechStore</h3>
          <p className="text-emerald-100 text-[16px] mb-8">Votre boutique tech en ligne</p>
          <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
            {['MacBook Pro', 'iPhone 15', 'AirPods Pro'].map((p) => (
              <div key={p} className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
                <div className="w-8 h-8 bg-white/30 rounded-lg mx-auto mb-2" />
                <p className="text-white text-[11px] font-medium text-center">{p}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 flex justify-between items-center px-10 pb-6">
          <div className="bg-white rounded-xl px-4 py-2.5 shadow-lg">
            <div className="text-lg font-bold text-emerald-600">500+</div>
            <div className="text-xs font-medium text-gray-600">commandes/mois</div>
          </div>
          <div className="bg-white/20 rounded-xl px-4 py-2.5 border border-white/30">
            <div className="text-lg font-bold text-white">4.9 ★</div>
            <div className="text-xs text-white/70">satisfaction</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    tagline: 'Landing Page · Sport & Fitness',
    title: 'FitnessPro | Page de conversion haute performance',
    description:
      'Landing page premium pour FitnessPro, salle de sport haut de gamme. Design épuré, animations engageantes, formulaire intelligent et sections optimisées pour la conversion. Taux de conversion passé de 1,2% à 3,9% en seulement 3 mois.',
    stats: [{ value: '+230%', label: 'conversion' }, { value: '3 mois', label: 'résultats' }],
    image: (
      <div className="h-full w-full bg-gradient-to-br from-orange-500 to-red-500 flex flex-col relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 p-10 text-center">
          <div className="text-[64px] font-black text-white/10 absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">FITNESS</div>
          <h3 className="text-white text-[40px] font-bold mb-2 relative z-10">FitnessPro</h3>
          <p className="text-orange-100 text-[16px] mb-6 relative z-10">Transformez votre corps. Transformez votre vie.</p>
          <div className="relative z-10 inline-flex items-center justify-between gap-2 text-orange-500 text-[15px] font-medium h-[46px] pl-5 pr-2 rounded-full bg-white">
            Essai gratuit 7 jours
            <span className="w-[32px] h-[32px] rounded-full bg-orange-500 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
        <div className="relative z-10 flex justify-center px-10 pb-6">
          <div className="bg-white rounded-xl px-4 py-2.5 shadow-lg">
            <div className="text-lg font-bold text-orange-600">+230%</div>
            <div className="text-xs font-medium text-gray-600">taux de conversion</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    tagline: 'Portfolio · Photographie',
    title: 'Studio Artis | Portfolio photographe immersif',
    description:
      'Portfolio immersif pour Studio Artis, photographe professionnel reconnu. Galerie interactive, expérience visuelle unique, système de catégories avancé et intégration directe des réseaux sociaux. 50 nouveaux clients ont pris contact via le site en 2 mois.',
    stats: [{ value: '50+', label: 'nouveaux clients' }, { value: '2 mois', label: 'pour les résultats' }],
    image: (
      <div className="h-full w-full bg-gradient-to-br from-purple-600 to-pink-600 flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="text-[120px] font-black text-white">SA</div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 p-10 text-center">
          <h3 className="text-white text-[40px] font-bold mb-2">Studio Artis</h3>
          <p className="text-purple-100 text-[16px] mb-8">L'art de capturer l'instant</p>
          <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
            {['Nature', 'Portrait', 'Urbain', 'Event', 'Mode', 'Art'].map((cat) => (
              <div key={cat} className="bg-white/20 rounded-lg px-2 py-1.5 border border-white/30">
                <p className="text-white text-[12px] font-medium">{cat}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 flex justify-end px-10 pb-6">
          <div className="bg-white rounded-xl px-4 py-2.5 shadow-lg">
            <div className="text-lg font-bold text-purple-600">50+</div>
            <div className="text-xs font-medium text-gray-600">nouveaux clients</div>
          </div>
        </div>
      </div>
    ),
  },
]

export default function RealisationsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-40 pb-16 bg-transparent">
          <div className="container-main">
            {/* Titre */}
            <div className="text-center">
              <h1 className="text-[74px] font-bold text-black leading-tight tracking-tight mb-6">
                <WordReveal startIndex={0}>{"Nos dernières"}</WordReveal>
                <br />
                <span className="inline-block overflow-hidden leading-[1.1]">
                  <span className="animate-word inline-block" style={{ color: '#2A00FF', animationDelay: '160ms' }}>
                    Créations
                  </span>
                </span>
              </h1>
              <p className="text-[18px] text-gray-500 max-w-xl mx-auto leading-relaxed">
                Découvrez comment nous aidons nos clients à se démarquer avec des créations sur-mesure, pensées pour convertir et marquer les esprits.
              </p>
            </div>
          </div>
        </section>

        {/* Grille projets */}
        <section className="pb-24 bg-transparent">
          <div className="container-main">
            <div className="max-w-[680px] mx-auto flex flex-col gap-6">
              {projects.map((project, index) => (
                <article key={index} className="flex flex-col gap-3">
                  {/* Image */}
                  <div className="rounded-3xl overflow-hidden h-[360px]">
                    {project.image}
                  </div>

                  {/* Texte */}
                  <div className="rounded-3xl bg-white shadow-sm px-6 py-5 flex flex-col gap-4">
                    <div>
                      <span className="inline-block text-[13px] font-semibold text-gray-500 mb-2">
                        {project.tagline}
                      </span>
                      <h2 className="text-[20px] font-bold text-black mb-2 leading-tight">
                        {project.title}
                      </h2>
                      <p className="text-[14px] text-gray-500 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-5">
                      {project.stats.map((stat, i) => (
                        <div key={i}>
                          <div className="text-[20px] font-bold text-black">{stat.value}</div>
                          <div className="text-[12px] text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* CTA Final */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
