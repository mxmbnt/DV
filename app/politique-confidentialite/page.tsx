import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WordReveal from '@/components/WordReveal'

export const metadata = {
  title: 'Politique de Confidentialité & Cookies | Digital Vision',
  description: 'Politique de confidentialité et de gestion des cookies de Digital Vision, conformément au RGPD.',
  openGraph: {
    title: 'Politique de Confidentialité | Digital Vision',
    description: 'Politique de confidentialité et de gestion des cookies de Digital Vision.',
    images: [{ url: '/og/page_confidentialité.png', width: 1200, height: 630, alt: 'Confidentialité Digital Vision' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og/page_confidentialité.png'] },
}

const sections = [
  {
    num: '1.',
    title: 'Données collectées',
    content: 'Nous pouvons collecter les informations suivantes :',
    items: [
      'Données d\'identification (nom, prénom, entreprise, email, téléphone).',
      'Données de navigation (cookies, adresse IP, pages visitées).',
      'Données liées à nos services (demandes de devis, informations techniques pour un projet web).',
    ],
  },
  {
    num: '2.',
    title: 'Utilisation des données',
    content: 'Vos données sont utilisées uniquement dans le cadre de nos services :',
    items: [
      'Répondre à vos demandes de contact ou devis.',
      'Assurer la gestion et le suivi de vos projets.',
      'Améliorer nos services et notre site internet.',
      'Respecter nos obligations légales et de sécurité.',
    ],
  },
  {
    num: '3.',
    title: 'Partage des données',
    content: 'Nous ne vendons jamais vos données. Elles peuvent être partagées uniquement avec :',
    items: [
      'Nos prestataires techniques (hébergement, messagerie, outils de gestion).',
      'Les autorités légales en cas d\'obligation.',
    ],
  },
  {
    num: '4.',
    title: 'Durée de conservation',
    content: null,
    items: [
      'Données clients/prospects : 3 ans maximum après le dernier contact.',
      'Données de facturation : 10 ans (obligation légale).',
      'Cookies : maximum 13 mois.',
    ],
  },
  {
    num: '5.',
    title: 'Sécurité',
    content: 'Nous mettons en place toutes les mesures techniques et organisationnelles nécessaires pour protéger vos informations personnelles (hébergement sécurisé, sauvegardes, accès restreints).',
    items: [],
  },
  {
    num: '6.',
    title: 'Vos droits',
    content: 'Conformément au RGPD, vous disposez des droits suivants :',
    items: [
      'Accéder à vos données.',
      'Demander leur rectification ou suppression.',
      'Limiter ou vous opposer à leur traitement.',
      'Demander la portabilité de vos données.',
    ],
    footer: 'Pour exercer vos droits : contact@digital-vision.fr',
  },
  {
    num: '7.',
    title: 'Cookies',
    content: 'Notre site utilise des cookies pour améliorer l\'expérience utilisateur et analyser le trafic. Vous pouvez gérer vos préférences directement via les paramètres de votre navigateur.',
    items: [],
  },
  {
    num: '8.',
    title: 'Contact',
    content: null,
    items: [],
    contact: true,
  },
]

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-40 pb-16 bg-transparent">
          <div className="container-main">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm mb-6">
              <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
              <span className="text-[16px] text-gray-700">Confidentialité</span>
            </div>
            <h1 className="text-[74px] font-bold text-black leading-tight tracking-tight mb-4">
              <WordReveal startIndex={0}>{"Politique de Confidentialité"}</WordReveal>
              <br />
              <WordReveal startIndex={3}>{"& Cookies"}</WordReveal>
            </h1>
            <p className="text-[18px] text-gray-500 max-w-2xl leading-relaxed">
              Chez Digital Vision, la protection de vos données personnelles est une priorité. Découvrez notre politique de confidentialité et de gestion des cookies conformément au RGPD.
            </p>
          </div>
        </section>

        {/* Contenu */}
        <section className="pb-24 bg-transparent">
          <div className="container-main">
            <div className="flex flex-col gap-4">
              {sections.map((section) => (
                <div
                  key={section.num}
                  className="rounded-3xl bg-white border border-gray-200 px-8 py-7"
                >
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-[13px] font-semibold text-gray-400 tabular-nums">{section.num}</span>
                    <h2 className="text-[20px] font-bold text-black">{section.title}</h2>
                  </div>

                  {section.contact ? (
                    <ul className="flex flex-col gap-2">
                      <li className="flex items-start gap-2 text-[16px] text-gray-600">
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                        Responsable du traitement des données : <span className="font-semibold text-black ml-1">Digital Vision</span>
                      </li>
                      <li className="flex items-start gap-2 text-[16px] text-gray-600">
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                        Email :{' '}
                        <a href="mailto:contact@digital-vision.fr" className="text-black font-semibold hover:underline ml-1">
                          contact@digital-vision.fr
                        </a>
                      </li>
                      <li className="flex items-start gap-2 text-[16px] text-gray-600">
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                        Site : <span className="font-semibold text-black ml-1">www.digital-vision.fr</span>
                      </li>
                    </ul>
                  ) : (
                    <>
                      {section.content && (
                        <p className="text-[16px] text-gray-600 leading-relaxed mb-3">{section.content}</p>
                      )}
                      {section.items && section.items.length > 0 && (
                        <ul className="flex flex-col gap-2">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-[16px] text-gray-600">
                              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {'footer' in section && section.footer && (
                        <p className="mt-4 text-[15px] text-gray-500">
                          Pour exercer vos droits :{' '}
                          <a href="mailto:contact@digital-vision.fr" className="text-black font-semibold hover:underline">
                            contact@digital-vision.fr
                          </a>
                        </p>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
