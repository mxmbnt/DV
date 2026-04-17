import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WordReveal from '@/components/WordReveal'

export const metadata = {
  title: 'Mentions Légales | Digital Vision',
  description: 'Mentions légales de Digital Vision, agence spécialisée dans la création de sites internet et solutions digitales.',
  openGraph: {
    title: 'Mentions Légales | Digital Vision',
    description: 'Mentions légales de Digital Vision.',
    images: [{ url: '/og/page_mentions.png', width: 1200, height: 630, alt: 'Mentions Légales Digital Vision' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og/page_mentions.png'] },
}

const sections = [
  {
    num: '1.',
    title: 'Éditeur du site',
    content: 'Le présent site est édité par Digital Vision, agence spécialisée dans la création de sites internet et solutions digitales.',
    items: [
      { label: 'Siège social', value: 'Roche-la-Molière, France' },
      { label: 'SIRET', value: '93351832600014' },
      { label: 'Email', value: 'contact@digital-vision.fr', href: 'mailto:contact@digital-vision.fr' },
      { label: 'Téléphone', value: '07 89 06 91 42', href: 'tel:+33789069142' },
    ],
    type: 'labeled',
  },
  {
    num: '2.',
    title: 'Hébergement',
    content: 'Le site est hébergé par : OVH SAS — 2 rue Kellermann, 59100 Roubaix, France — https://www.ovh.com',
    items: [],
    type: 'text',
  },
  {
    num: '3.',
    title: 'Propriété intellectuelle',
    content: "L'ensemble du contenu (textes, images, graphismes, logo, vidéos, icônes, etc.) est la propriété exclusive de Digital Vision, sauf mention contraire. Toute reproduction, représentation, modification ou exploitation, partielle ou totale, est strictement interdite sans autorisation écrite préalable.",
    items: [],
    type: 'text',
  },
  {
    num: '4.',
    title: 'Données personnelles',
    content: "Conformément au RGPD, les informations collectées via ce site sont utilisées uniquement dans le cadre de la relation commerciale avec Digital Vision. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données en nous contactant à : contact@digital-vision.fr.",
    items: [],
    type: 'text',
    email: 'contact@digital-vision.fr',
  },
  {
    num: '5.',
    title: 'Responsabilité',
    content: "Digital Vision met tout en œuvre pour fournir des informations fiables et à jour sur ce site. Toutefois, nous ne saurions être tenus responsables d'erreurs ou d'omissions, ni d'un mauvais usage du contenu publié.",
    items: [],
    type: 'text',
  },
]

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-40 pb-16 bg-transparent">
          <div className="container-main">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm mb-6">
              <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
              <span className="text-[16px] text-gray-700">Légal</span>
            </div>
            <h1 className="text-[74px] font-bold text-black leading-tight tracking-tight mb-4">
              <WordReveal>{"Mentions légales"}</WordReveal>
            </h1>
            <p className="text-[18px] text-gray-500 max-w-2xl leading-relaxed">
              Chez Digital Vision, nous mettons un point d'honneur à offrir des services de qualité et à assurer la satisfaction de nos clients. Nous apportons un soin particulier à la conception et à la réalisation de nos sites internet et solutions digitales, afin de garantir un résultat à la hauteur de vos attentes.
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

                  {section.type === 'labeled' ? (
                    <>
                      {section.content && (
                        <p className="text-[16px] text-gray-600 leading-relaxed mb-4">{section.content}</p>
                      )}
                      <ul className="flex flex-col gap-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-[16px] text-gray-600">
                            <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                            <span className="font-semibold text-black mr-1">{item.label} :</span>
                            {'href' in item && item.href ? (
                              <a href={item.href} className="hover:underline">{item.value}</a>
                            ) : (
                              item.value
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p className="text-[16px] text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
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
