// Navbar - Navigation exacte de la maquette

export default function Navbar() {
  return (
    <header className="fixed top-2 left-0 right-0 z-50 mx-auto max-w-6xl px-4">
      <div className="bg-white rounded-full shadow-md border border-gray-100">
        <div className="flex items-center justify-between h-14 px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src="/logos/yVxYykAqZEuMGAR0GBOcbEK3yQ.png" alt="Digital Vision" className="w-7 h-7" />
            <span className="font-semibold text-black tracking-tight text-sm">DIGITALVISION</span>
          </a>

          {/* Navigation centrale */}
          <div className="hidden items-center gap-1 md:flex">
            {['Accueil', 'Services', 'Projets', 'Processus', 'Tarifs', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition-colors hover:text-primary-500"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Contact avec même style que Demandez un devis */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Contact
            <span className="relative w-5 h-5 rounded-full flex items-center justify-center overflow-hidden">
              {/* Fond blanc par défaut */}
              <span className="absolute inset-0 bg-white rounded-full" />
              
              {/* Fond bleu avec animation splash */}
              <span className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" style={{ backgroundColor: '#2A00FF' }} />
              
              {/* Flèche noire */}
              <svg className="w-3 h-3 text-black relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}
