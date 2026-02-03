// Process - Les 4 étapes du processus

export default function Process() {
  const steps = [
    { num: '01', icon: '💬', title: 'Prise de contact', desc: 'Appel découverte gratuit de 30 min pour échanger sur votre projet.' },
    { num: '02', icon: '📋', title: 'Devis & Proposition', desc: 'Proposition détaillée avec planning et tarif transparent.' },
    { num: '03', icon: '🎨', title: 'Design & Maquettes', desc: 'Conception des maquettes. Vous validez chaque étape.' },
    { num: '04', icon: '🚀', title: 'Développement & Livraison', desc: 'Développement, tests et mise en ligne. Formation incluse.' },
  ]

  return (
    <section id="processus" className="py-24 bg-transparent">
      <div className="container-main">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm">
            <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
            <span className="text-xs text-gray-700">Processus</span>
          </div>
        </div>

        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-4">
          Notre processus
        </h2>
        <p className="text-center text-gray-500 mb-14 max-w-lg mx-auto">
          Un accompagnement clair et structuré, de la première discussion jusqu&apos;à la mise en ligne.
        </p>

        {/* 4 cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-black">
                {step.num}
              </div>
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="font-semibold text-black mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
