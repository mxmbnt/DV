// ProjectsPreview - Aperçu des projets

export default function ProjectsPreview() {
  return (
    <section id="projets" className="py-24 bg-transparent">
      <div className="container-main">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm">
            <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
            <span className="text-xs text-gray-700">Portfolio</span>
          </div>
        </div>

        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-4">
          Un aperçu de nos créations
        </h2>
        <p className="text-center text-gray-500 mb-14 max-w-lg mx-auto">
          Découvrez comment on aide nos clients à se démarquer avec des créations uniques.
        </p>

        {/* Projet 1 */}
        <div className="mb-8 rounded-3xl border border-gray-200 overflow-hidden bg-white hover:shadow-xl transition-shadow">
          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="lg:w-1/2 aspect-[4/3] lg:aspect-auto bg-[#1a1a2e] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-sm text-primary-300 mb-2">Gestion des réseaux</div>
                  <div className="text-2xl font-semibold">stratégie marketing</div>
                  <div className="text-4xl font-bold text-primary-300 mt-4">+1M</div>
                  <div className="text-sm text-gray-400">impressions</div>
                </div>
              </div>
              {/* Stats badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-xl px-4 py-2">
                <div className="text-lg font-bold text-black">+150%</div>
                <div className="text-xs text-gray-500">engagement</div>
              </div>
            </div>
            {/* Contenu */}
            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Social Media</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Stratégie</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Gestion des réseaux sociaux pour entreprise tech
              </h3>
              <p className="text-sm font-medium text-gray-700 mb-3">
                Comment nous avons développé une stratégie marketing réussie
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Tomate, entreprise de delivery, voulait refaire son service, on a proposé une refonte complète du concept social et contenu.
              </p>
              <a href="#" className="text-sm font-medium text-black hover:text-primary-500 inline-flex items-center gap-1">
                Voir le projet →
              </a>
            </div>
          </div>
        </div>

        {/* Projet 2 */}
        <div className="rounded-3xl border border-gray-200 overflow-hidden bg-white hover:shadow-xl transition-shadow">
          <div className="flex flex-col lg:flex-row-reverse">
            {/* Image */}
            <div className="lg:w-1/2 aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-primary-600 to-primary-700 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-3xl font-bold">Redspher</div>
                  <div className="text-sm text-primary-200 mt-2">Site corporate premium</div>
                </div>
              </div>
              {/* Stats badge */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur rounded-xl px-4 py-2">
                <div className="text-lg font-bold text-black">40+</div>
                <div className="text-xs text-gray-500">pages créées</div>
              </div>
            </div>
            {/* Contenu */}
            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Corporate</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Webdesign</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Redspher | Site corporate premium
              </h3>
              <p className="text-sm font-medium text-gray-700 mb-3">
                Nouvelle identité web pour un leader de la logistique
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Pour Redspher, c&apos;est l&apos;incarnation d&apos;un projet passionnant : créer leur nouveau site corporate et moderniser leur présence digitale.
              </p>
              <a href="#" className="text-sm font-medium text-black hover:text-primary-500 inline-flex items-center gap-1">
                Voir le projet →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
