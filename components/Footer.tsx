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
        <div className="flex justify-center">
          <div className="flex gap-16">
            {/* Logo */}
            <div>
              <a href="/" className="flex items-center gap-3 mb-4">
                <img src="/logos/logo_blanc.png" alt="Digital Vision" className="w-8 h-8" />
                <span className="text-[16px] font-semibold" style={{ color: '#FCFCFC' }}>DIGITAL VISION</span>
              </a>
              <p className="text-[16px]" style={{ color: '#E6E6E6' }}>
                Créateur de sites web qui convertissent.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-[16px] mb-4" style={{ color: 'rgba(252, 252, 252, 0.6)' }}>Navigation</h4>
              <ul className="space-y-3 text-[16px]">
                <li><a href="/" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>Accueil</a></li>
                <li><a href="/realisations" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>Réalisations</a></li>
                <li><a href="/#tarifs" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>Tarifs</a></li>
                <li><a href="/contact" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>Contact</a></li>
              </ul>
            </div>

            {/* Légal */}
            <div>
              <h4 className="font-semibold text-[16px] mb-4" style={{ color: 'rgba(252, 252, 252, 0.6)' }}>Légal</h4>
              <ul className="space-y-3 text-[16px]">
                <li><a href="/mentions-legales" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>Mentions légales</a></li>
                <li><a href="/politique-confidentialite" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>Confidentialité</a></li>
                <li><a href="/cgu-cgv" className="font-bold transition-opacity hover:opacity-70" style={{ color: '#FFFFFF' }}>CGU / CGV</a></li>
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
