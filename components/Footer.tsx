// Footer - Pied de page

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-[16px] font-bold">DV</span>
              </div>
              <span className="text-[16px] font-semibold text-black">DIGITALVISION</span>
            </a>
            <p className="text-[16px] text-gray-500">
              Créateur de sites web qui convertissent.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-black text-[16px] mb-4">Services</h4>
            <ul className="space-y-3 text-[16px] text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Landing Page</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Site Vitrine</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Refonte</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Webdesign</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-black text-[16px] mb-4">Navigation</h4>
            <ul className="space-y-3 text-[16px] text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Accueil</a></li>
              <li><a href="#projets" className="hover:text-black transition-colors">Projets</a></li>
              <li><a href="#tarifs" className="hover:text-black transition-colors">Tarifs</a></li>
              <li><a href="#contact" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-semibold text-black text-[16px] mb-4">Légal</h4>
            <ul className="space-y-3 text-[16px] text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-black transition-colors">CGV</a></li>
            </ul>
          </div>

          {/* Réseaux */}
          <div>
            <h4 className="font-semibold text-black text-sm mb-4">Réseaux</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[16px] text-gray-500">
            © 2024 Digital Vision. Tous droits réservés.
          </p>
          <p className="text-[16px] text-gray-500">
            Fait avec ♥ en France
          </p>
        </div>
      </div>
    </footer>
  )
}
