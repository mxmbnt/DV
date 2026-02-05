// Process - Section avec bento 3-rows-bottom

"use client"

import ProcessBento from "@/components/ProcessBento"

const steps = [
  {
    num: "01",
    title: "Prise de contact",
    subtitle: "Échangeons autour de votre projet.",
    image: "/process/01-prise-de-contact.jpg",
  },
  {
    num: "02",
    title: "Devis & Proposition",
    subtitle: "Transparence sur le planning et le budget.",
    image: "/process/02-devis-proposition.jpg",
  },
  {
    num: "03",
    title: "Design & Maquettes",
    subtitle: "Conception d'interfaces sur-mesure.",
    image: "/process/03-design-maquettes.jpg",
  },
  {
    num: "04",
    title: "Développement & Livraison",
    subtitle: "Mise en ligne et formation incluses.",
    image: "/process/04-developpement-livraison.jpg",
  },
]

export default function Process() {
  return (
    <section id="processus" className="py-24 bg-transparent">
      <div className="container-main">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm">
            <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
            <span className="text-[16px] text-gray-700">Processus</span>
          </div>
        </div>

        <h2 className="text-[48px] font-semibold text-center text-black mb-4">
          Notre processus
        </h2>
        <p className="text-center text-[18px] text-gray-500 mb-14 max-w-lg mx-auto">
          Un accompagnement clair et structuré, de la première discussion jusqu&apos;à la mise en ligne.
        </p>

        <ProcessBento steps={steps} />
      </div>
    </section>
  )
}
