import { Rocket, CheckCircle2, Code2 } from "lucide-react"
import * as React from "react"

import Glow from "@/components/ui/glow"

const etapes = [
  "Code propre et optimisé",
  "Tests & validation",
  "Mise en ligne",
  "Formation incluse",
]

function DevLivraisonIllustration() {
  return (
    <div className="relative flex w-full items-center justify-center p-5">
      <div className="w-full max-w-[300px] rounded-2xl border border-gray-200 bg-white p-5 shadow-lg">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/15">
            <Code2 className="h-6 w-6 text-primary-500" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Développement</h3>
            <p className="text-xs text-gray-500">Jusqu’à la livraison</p>
          </div>
        </div>
        <ul className="space-y-2.5">
          {etapes.map((label, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary-500" />
              {label}
            </li>
          ))}
        </ul>
        <div className="mt-5 pt-4 border-t border-gray-100 flex justify-center">
          <div className="flex items-center gap-2 rounded-full bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-600">
            <Rocket className="h-4 w-4" />
            Mise en ligne
          </div>
        </div>
      </div>
      <Glow
        variant="center"
        className="opacity-20 transition-all duration-300 group-hover:opacity-30"
      />
    </div>
  )
}

export default DevLivraisonIllustration
