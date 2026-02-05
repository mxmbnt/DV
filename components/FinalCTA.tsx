// FinalCTA - Bloc de conversion final

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="container-main">
        <div className="rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-600 p-10 md:p-16 text-center relative overflow-hidden">
          {/* Effets */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-[48px] font-semibold text-white mb-6">
              Votre futur site commence ici.
            </h2>
            <p className="text-[18px] text-white/80 max-w-xl mx-auto mb-10">
              Prêt à transformer votre présence en ligne ? Réservez un appel découverte gratuit.
            </p>
            <a
              href="mailto:contact@digitalvision.fr"
              className="inline-flex items-center gap-2 bg-white text-black text-[16px] font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              Réserver un appel →
            </a>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[16px] text-white/60">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                30 min gratuites
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Sans engagement
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Réponse sous 24h
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
