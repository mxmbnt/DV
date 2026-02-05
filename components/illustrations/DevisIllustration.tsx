import { FileText, Calendar, Euro } from "lucide-react"
import * as React from "react"

import Glow from "@/components/ui/glow"

const lignes = [
  { libelle: "Maquettes & design", montant: "Sur devis" },
  { libelle: "Développement site", montant: "Sur devis" },
  { libelle: "Formation & mise en ligne", montant: "Inclus" },
]

function DevisIllustration() {
  return (
    <div className="relative flex w-full items-center justify-center p-4">
      <div className="w-full max-w-[280px] rounded-2xl border border-gray-200 bg-white p-5 shadow-lg">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500/15">
            <FileText className="h-5 w-5 text-primary-500" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Devis & proposition</h3>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              Planning et budget transparents
            </p>
          </div>
        </div>
        <ul className="space-y-3">
          {lignes.map((l, i) => (
            <li key={i} className="flex justify-between text-sm">
              <span className="text-gray-600">{l.libelle}</span>
              <span className="font-medium text-gray-900">{l.montant}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 flex items-center justify-between border-t border-gray-200">
          <span className="text-sm font-semibold text-gray-900">Total</span>
          <span className="flex items-center gap-1 text-sm font-semibold text-primary-500">
            <Euro className="h-4 w-4" />
            Sur devis
          </span>
        </div>
      </div>
      <Glow
        variant="center"
        className="pointer-events-none scale-x-[1.5] opacity-20 transition-all duration-300 group-hover:opacity-30"
      />
    </div>
  )
}

export default DevisIllustration
