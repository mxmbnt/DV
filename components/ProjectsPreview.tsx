"use client"

import WordReveal from "@/components/WordReveal"

const projects = [
  {
    tagline: 'Landing Page · Tech / IA',
    title: 'Générez des missions techniques pour développeurs avec l\'IA',
    description:
      'Plateforme SaaS de mise en relation entre développeurs freelance et entreprises tech. Landing page haute conversion avec démonstration interactive du produit, témoignages clients et tunnel d\'inscription optimisé. Résultat : +340% de sign-ups en 6 semaines.',
    stats: [{ value: '+340%', label: 'sign-ups' }, { value: '6 sem.', label: 'livraison' }],
    image: (
      <div className="h-full w-full bg-[#0d0d1a] flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 p-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#2A00FF]/20 border border-[#2A00FF]/40 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[#7B5FFF] text-[13px] font-medium">Propulsé par l'IA</span>
          </div>
          <h3 className="text-white text-[26px] font-bold leading-tight mb-5 max-w-xs">
            Générez des <span className="text-[#7B5FFF]">missions techniques</span> pour développeurs avec l'IA
          </h3>
          <div className="inline-flex items-center justify-between gap-2 text-white text-[15px] font-medium h-[46px] pl-5 pr-2 rounded-full" style={{ backgroundColor: '#2A00FF' }}>
            Commencer gratuitement
            <span className="relative w-[32px] h-[32px] flex-shrink-0 rounded-full bg-white flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
        <div className="relative z-10 flex items-center justify-center gap-6 border-t border-white/10 px-8 py-3">
          {['GitHub', 'Jira', 'Slack', 'Notion'].map((tool) => (
            <span key={tool} className="text-white/40 text-[12px] font-medium">{tool}</span>
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
        <div className="relative z-10 flex flex-col items-start justify-center flex-1 p-8 gap-4">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1">
            <span className="text-white text-[12px] font-medium">Services Pro</span>
          </div>
          <h3 className="text-white text-[26px] font-bold leading-tight">
            Nettoyage &<br />Jardinage à domicile<br />pour votre <span className="underline decoration-white/50">tranquillité</span>
          </h3>
          <div className="inline-flex items-center justify-between gap-2 text-[#0eb69a] text-[14px] font-medium h-[42px] pl-4 pr-1.5 rounded-full bg-white">
            Demander un devis
            <span className="w-[30px] h-[30px] rounded-full bg-[#0eb69a] flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
        <div className="relative z-10 flex items-center gap-2 px-8 pb-5 flex-wrap">
          {['Nettoyage', 'Jardinage', 'Vitrerie'].map((b) => (
            <span key={b} className="bg-white/20 text-white text-[12px] font-medium px-3 py-1 rounded-full border border-white/30">{b}</span>
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
        <div className="absolute top-0 right-0 w-[250px] h-[250px] rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 flex flex-col items-start justify-center flex-1 p-8">
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 mb-3">
            <span className="text-white/80 text-[12px] font-medium">Corporate · Premium</span>
          </div>
          <h3 className="text-white text-[36px] font-bold mb-1">Redspher</h3>
          <p className="text-white/60 text-[14px] mb-5">Leader européen de la logistique express</p>
          <div className="flex gap-4">
            <div className="bg-white/10 rounded-2xl px-4 py-2.5 border border-white/20">
              <div className="text-white text-[20px] font-bold">40+</div>
              <div className="text-white/60 text-[12px]">pages créées</div>
            </div>
            <div className="bg-white/10 rounded-2xl px-4 py-2.5 border border-white/20">
              <div className="text-white text-[20px] font-bold">3</div>
              <div className="text-white/60 text-[12px]">mois de projet</div>
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
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 p-8 text-center">
          <h3 className="text-white text-[36px] font-bold mb-1">TechStore</h3>
          <p className="text-emerald-100 text-[14px] mb-6">Votre boutique tech en ligne</p>
          <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
            {['MacBook Pro', 'iPhone 15', 'AirPods Pro'].map((p) => (
              <div key={p} className="bg-white/20 backdrop-blur-sm rounded-xl p-2.5 border border-white/30">
                <div className="w-7 h-7 bg-white/30 rounded-lg mx-auto mb-1.5" />
                <p className="text-white text-[10px] font-medium text-center">{p}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 flex justify-between items-center px-8 pb-5">
          <div className="bg-white rounded-xl px-3 py-2 shadow-lg">
            <div className="text-base font-bold text-emerald-600">500+</div>
            <div className="text-[11px] font-medium text-gray-600">commandes/mois</div>
          </div>
          <div className="bg-white/20 rounded-xl px-3 py-2 border border-white/30">
            <div className="text-base font-bold text-white">4.9 ★</div>
            <div className="text-[11px] text-white/70">satisfaction</div>
          </div>
        </div>
      </div>
    ),
  },
]

export default function ProjectsPreview() {
  return (
    <section id="projets" className="py-24 bg-transparent">
      <div className="container-main">
        {/* En-tête */}
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm mb-6">
            <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
            <span className="text-[16px] text-gray-700">Réalisations</span>
          </div>
          <h2 className="text-[48px] font-semibold text-black mb-4 text-center">
            <WordReveal>{"Un aperçu de nos créations"}</WordReveal>
          </h2>
          <p className="text-[18px] text-gray-500 max-w-2xl text-center">
            Découvrez comment nous aidons nos clients à se démarquer avec des créations uniques.
          </p>
        </div>

        {/* Grille 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {projects.map((project, index) => (
            <article key={index} className="flex flex-col gap-2">
              {/* Image card */}
              <div className="rounded-3xl overflow-hidden h-[280px]">
                {project.image}
              </div>

              {/* Text card */}
              <div className="rounded-3xl bg-white shadow-sm px-6 py-5 flex flex-col gap-4">
                <div>
                  <span className="inline-block text-[13px] font-semibold text-gray-500 mb-2">
                    {project.tagline}
                  </span>
                  <h3 className="text-[20px] font-bold text-black mb-2 leading-tight">
                    {project.title}
                  </h3>
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

        {/* Bouton Voir plus */}
        <div className="flex justify-center">
          <a
            href="/realisations"
            className="group inline-flex items-center justify-between text-white text-[16px] font-medium w-[155px] h-[55px] pl-5 pr-2 rounded-full transition-colors"
            style={{ backgroundColor: '#171717' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2A2A2A')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#171717')}
          >
            Voir plus
            <span className="relative w-[40px] h-[40px] flex-shrink-0 rounded-full flex items-center justify-center overflow-hidden">
              <span className="absolute inset-0 bg-white rounded-full" />
              <span className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" style={{ backgroundColor: '#2A00FF' }} />
              <svg className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
