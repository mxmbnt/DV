import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WordReveal from '@/components/WordReveal'

export const metadata = {
  title: 'CGU & CGV | Digital Vision',
  description: "Conditions Générales d'Utilisation et de Vente de Digital Vision.",
  openGraph: {
    title: 'CGU & CGV | Digital Vision',
    description: "Conditions Générales d'Utilisation et de Vente de Digital Vision.",
    images: [{ url: '/og/page_cgu.png', width: 1200, height: 630, alt: 'CGU CGV Digital Vision' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og/page_cgu.png'] },
}

const cguSections = [
  {
    num: '1.',
    title: 'Utilisation de nos services',
    content: "Digital Vision propose des services de création de sites web, e-commerce, refonte, hébergement et maintenance. En utilisant nos services, vous vous engagez à les utiliser uniquement à des fins légales et conformément aux présentes conditions.",
  },
  {
    num: '2.',
    title: 'Propriété intellectuelle',
    content: "L'ensemble du contenu présent sur ce site — textes, visuels, graphismes, vidéos, designs, codes et logos — est la propriété exclusive de Digital Vision, sauf mention contraire. Toute reproduction, distribution ou réutilisation sans autorisation préalable est strictement interdite.",
  },
  {
    num: '3.',
    title: 'Paiements & livrables',
    content: "Les modalités de paiement, délais et livrables sont définis et communiqués au moment de la validation du projet. En cas de retard de paiement, Digital Vision se réserve le droit de suspendre ou de retarder la livraison du projet.",
  },
  {
    num: '4.',
    title: 'Responsabilités du client',
    content: "Le client s'engage à fournir des informations exactes, des retours rapides et les éléments nécessaires (textes, images, accès, etc.) afin de permettre la bonne exécution du projet. Tout retard de communication peut impacter les délais de livraison.",
  },
  {
    num: '5.',
    title: 'Annulations & remboursements',
    content: "Une fois le projet démarré, les remboursements ne sont pas garantis et sont étudiés au cas par cas. En cas d'annulation, merci de nous contacter rapidement afin d'évaluer les options possibles.",
  },
  {
    num: '6.',
    title: 'Limitation de responsabilité',
    content: "Digital Vision met tout en œuvre pour assurer la qualité et la sécurité de ses services. Cependant, nous ne pouvons être tenus responsables des dommages indirects, incidents ou pertes consécutives liés à l'utilisation de nos services ou de notre site.",
  },
  {
    num: '7.',
    title: 'Outils & services tiers',
    content: "Notre site et nos services peuvent inclure des intégrations ou des liens vers des services tiers. Digital Vision n'est pas responsable de leurs contenus, pratiques ou politiques.",
  },
  {
    num: '8.',
    title: 'Confidentialité',
    content: "L'utilisation de nos services implique l'acceptation de notre Politique de Confidentialité. Nous respectons la vie privée de nos clients et nous engageons à protéger leurs données personnelles.",
    link: { label: 'Politique de Confidentialité', href: '/politique-confidentialite' },
  },
  {
    num: '9.',
    title: 'Modifications',
    content: "Digital Vision se réserve le droit de modifier les présentes conditions à tout moment. Toute mise à jour sera publiée sur cette page, et l'utilisation continue de nos services vaut acceptation de ces changements.",
  },
  {
    num: '10.',
    title: 'Contact',
    content: "Pour toute question relative à ces conditions, vous pouvez nous contacter à l'adresse suivante :",
    email: 'contact@digital-vision.fr',
  },
]

const cgvSections = [
  {
    num: '1.',
    title: 'Objet',
    content: "Les présentes Conditions Générales de Vente (CGV) régissent les relations commerciales entre Digital Vision et ses clients dans le cadre de la fourniture de services de création de sites web, refonte, e-commerce, hébergement et maintenance.",
  },
  {
    num: '2.',
    title: 'Devis & commande',
    content: "Tout projet débute par l'établissement d'un devis détaillé, soumis à l'acceptation écrite du client. La validation du devis (par email ou signature) constitue l'acceptation des présentes CGV et marque le démarrage officiel du projet.",
  },
  {
    num: '3.',
    title: 'Tarifs',
    content: "Les prix sont indiqués en euros (€) hors taxes. Digital Vision se réserve le droit de modifier ses tarifs à tout moment, sans incidence sur les devis déjà acceptés. Toute prestation supplémentaire hors devis fera l'objet d'un avenant tarifaire.",
  },
  {
    num: '4.',
    title: 'Modalités de paiement',
    items: [
      'Un acompte de 50 % est exigé à la signature du devis pour démarrer le projet.',
      'Le solde de 50 % est dû à la livraison finale, avant mise en ligne.',
      "Les paiements s'effectuent par virement bancaire ou tout autre moyen convenu.",
      'Tout retard de paiement entraîne la suspension du projet sans engagement de délai de reprise.',
    ],
  },
  {
    num: '5.',
    title: 'Délais de livraison',
    content: "Les délais communiqués dans le devis sont donnés à titre indicatif et peuvent varier en fonction de la réactivité du client (retours, fourniture de contenus, validations). Digital Vision ne saurait être tenu responsable de retards causés par le client.",
  },
  {
    num: '6.',
    title: 'Livrables & transfert de propriété',
    content: "Les livrables (site web, visuels, codes sources, etc.) restent la propriété de Digital Vision jusqu'au règlement intégral des sommes dues. Après paiement complet, les droits d'utilisation sont transférés au client selon les modalités convenues dans le devis.",
  },
  {
    num: '7.',
    title: 'Obligations du client',
    items: [
      'Fournir dans les délais les contenus, accès et informations nécessaires.',
      'Valider les étapes du projet dans les délais convenus.',
      'Assurer le paiement aux échéances fixées.',
    ],
  },
  {
    num: '8.',
    title: 'Annulations',
    content: "En cas d'annulation du projet par le client après acceptation du devis, l'acompte versé reste acquis à Digital Vision à titre de dédommagement. Pour les projets en cours, une facturation au prorata des travaux réalisés pourra être appliquée.",
  },
  {
    num: '9.',
    title: 'Garantie & SAV',
    content: "Digital Vision assure une période de garantie de 30 jours après la livraison finale pour corriger tout bug ou dysfonctionnement lié à notre réalisation. Cette garantie ne couvre pas les modifications demandées par le client, ni les erreurs liées à des interventions tierces.",
  },
  {
    num: '10.',
    title: 'Droit applicable & litiges',
    content: "Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité. À défaut, les tribunaux compétents du ressort de Roche-la-Molière seront saisis.",
  },
  {
    num: '11.',
    title: 'Contact',
    content: "Pour toute question relative aux présentes CGV :",
    email: 'contact@digital-vision.fr',
  },
]

function Section({ section }: { section: typeof cguSections[0] & { items?: string[], link?: { label: string, href: string }, email?: string } }) {
  return (
    <div className="rounded-3xl bg-white border border-gray-200 px-8 py-7">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-[13px] font-semibold text-gray-400 tabular-nums">{section.num}</span>
        <h3 className="text-[20px] font-bold text-black">{section.title}</h3>
      </div>

      {section.content && (
        <p className="text-[16px] text-gray-600 leading-relaxed">
          {section.link
            ? section.content.replace(section.link.label, '')
            : section.content}
          {section.link && (
            <a href={section.link.href} className="text-black font-semibold hover:underline">
              {section.link.label}
            </a>
          )}
        </p>
      )}

      {section.items && section.items.length > 0 && (
        <ul className="flex flex-col gap-2 mt-3">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[16px] text-gray-600">
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {section.email && (
        <a
          href={`mailto:${section.email}`}
          className="inline-block mt-3 text-[16px] font-semibold text-black hover:underline"
        >
          {section.email}
        </a>
      )}
    </div>
  )
}

export default function CguCgvPage() {
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
              <WordReveal>{"CGU & CGV"}</WordReveal>
            </h1>
            <p className="text-[18px] text-gray-500 max-w-2xl leading-relaxed">
              Bienvenue chez Digital Vision ! En accédant à notre site internet et à nos services, vous acceptez d'être lié par les présentes conditions. Merci de les lire attentivement.
            </p>
          </div>
        </section>

        {/* CGU */}
        <section className="pb-12 bg-transparent">
          <div className="container-main">
            <h2 className="text-[32px] font-bold text-black mb-6">
              Conditions Générales d'Utilisation
            </h2>
            <div className="flex flex-col gap-4">
              {cguSections.map((section) => (
                <Section key={section.num + '-cgu'} section={section} />
              ))}
            </div>
          </div>
        </section>

        {/* CGV */}
        <section className="pb-24 bg-transparent">
          <div className="container-main">
            <h2 className="text-[32px] font-bold text-black mb-6 mt-8">
              Conditions Générales de Vente
            </h2>
            <div className="flex flex-col gap-4">
              {cgvSections.map((section) => (
                <Section key={section.num + '-cgv'} section={section} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
