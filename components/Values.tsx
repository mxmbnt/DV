// Values - Section À propos avec citation

export default function Values() {
  return (
    <section className="-mt-40 pb-24 bg-transparent">
      <div className="container-main">
        {/* Badge */}
        <div className="flex justify-center mb-10 mt-0">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm">
            <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
            <span className="text-xs text-gray-700">À propos</span>
          </div>
        </div>

        {/* Citation - En bold */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-relaxed">
            Nous croyons qu&apos;un projet web réussi
            <br />
            commence par <span className="text-primary-500">l&apos;humain</span>.
            <br />
            Toujours <span className="text-primary-500">À l&apos;écoute</span>, <span className="text-primary-500">Bienveillants</span> et
            <br />
            <span className="text-primary-500">Proches</span>.
          </h2>
        </div>

        {/* Stats - Dans une card */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white rounded-3xl shadow-lg px-12 py-10 flex flex-wrap justify-center gap-16 md:gap-24">
            {[
              { value: '10+', label: 'Projets Réalisés' },
              { value: '5+', label: 'Clients Satisfaits' },
              { value: '100%', label: 'Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-black" style={{ color: '#2A00FF' }}>{stat.value}</div>
                <div className="mt-2 text-sm text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
