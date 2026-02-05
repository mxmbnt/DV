// Footer - Pied de page

import { Particles } from './Particles'

export default function Footer() {
  return (
    <footer className="border-t pt-20 pb-16 relative overflow-hidden rounded-t-3xl" style={{ backgroundColor: '#171717', borderColor: '#2A2A2A' }}>
      {/* Particules en bas */}
      <Particles
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        quantity={50}
        color="#ffffff"
        staticity={50}
        maxOpacity={0.6}
      />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <img src="/logos/WEgbRtdISL58zfOFWPbolgMtZU.png" alt="Digital Vision" className="w-8 h-8" />
              <span className="text-[16px] font-semibold" style={{ color: '#FCFCFC' }}>DIGITAL VISION</span>
            </a>
            <p className="text-[16px]" style={{ color: '#E6E6E6' }}>
              Créateur de sites web qui convertissent.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[16px] mb-4" style={{ color: 'rgba(252, 252, 252, 0.6)' }}>Services</h4>
            <ul className="space-y-3 text-[16px]">
              <li><a href="#" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>Landing Page</a></li>
              <li><a href="#" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>Site Vitrine</a></li>
              <li><a href="#" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>Refonte</a></li>
              <li><a href="#" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>Webdesign</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-[16px] mb-4" style={{ color: 'rgba(252, 252, 252, 0.6)' }}>Navigation</h4>
            <ul className="space-y-3 text-[16px]">
              <li><a href="#" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>Accueil</a></li>
              <li><a href="#projets" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>Projets</a></li>
              <li><a href="#tarifs" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>Tarifs</a></li>
              <li><a href="/contact" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>Contact</a></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-semibold text-[16px] mb-4" style={{ color: 'rgba(252, 252, 252, 0.6)' }}>Légal</h4>
            <ul className="space-y-3 text-[16px]">
              <li><a href="#" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>Mentions légales</a></li>
              <li><a href="#" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>Confidentialité</a></li>
              <li><a href="#" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>CGV</a></li>
            </ul>
          </div>

          {/* Réseaux */}
          <div>
            <h4 className="font-semibold text-[16px] mb-4" style={{ color: 'rgba(252, 252, 252, 0.6)' }}>Réseaux</h4>
            <ul className="space-y-3 text-[16px]">
              <li><a href="#" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>LinkedIn</a></li>
              <li><a href="#" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>Twitter</a></li>
              <li><a href="#" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-12 text-center">
          <p className="text-[16px]" style={{ color: '#E6E6E6' }}>
            © 2026 Digital Vision. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
