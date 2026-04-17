"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardVisual,
} from "@/components/ui/card"
import ContactIllustration from "@/components/illustrations/ContactIllustration"
import DevisIllustration from "@/components/illustrations/DevisIllustration"
import DesignIllustration from "@/components/illustrations/DesignIllustration"
import DevLivraisonIllustration from "@/components/illustrations/DevLivraisonIllustration"

export type ProcessStep = {
  num: string
  title: string
  subtitle: string
  image: string
}

const ILLUSTRATIONS = [
  ContactIllustration,
  DesignIllustration,
  DevisIllustration,
  DevLivraisonIllustration,
]

function StepVisual({
  title,
  fadeSide,
  illustration: Illustration,
}: {
  title: string
  fadeSide: "left" | "right"
  illustration: React.ComponentType
}) {
  return (
    <div className="relative w-full h-full min-h-[200px] md:min-h-[220px] bg-white">
      <div className="absolute inset-3 dot-background rounded-xl pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center overflow-auto">
        <Illustration />
      </div>
    </div>
  )
}

// Ordre d'affichage : 02, 01, 03, 04
// Ligne 1 : 02 (large) | 01 (réduit)
// Ligne 2 : 03 (réduit) | 04 (large)
const RENDER_ORDER = [0, 1, 2, 3]

const TILE_SIZES = [
  "col-span-12 md:col-span-6",  // 01
  "col-span-12 md:col-span-6",  // 02
  "col-span-12 md:col-span-6",  // 03
  "col-span-12 md:col-span-6",  // 04
] as const

const FADE_SIDES: ("left" | "right")[] = ["right", "left", "right", "left"]

export default function ProcessBento({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="grid grid-cols-12 gap-4 w-full max-w-[900px] mx-auto">
      {RENDER_ORDER.map((stepIndex) => {
        const step = steps[stepIndex]
        const size = TILE_SIZES[stepIndex]
        const fadeSide = FADE_SIDES[stepIndex]
        const Illustration = ILLUSTRATIONS[stepIndex]
        const visual = (
          <StepVisual
            title={step.title}
            fadeSide={fadeSide}
            illustration={Illustration}
          />
        )

        return (
          <Card key={stepIndex} className={size}>
            <CardVisual className="min-h-[200px] md:min-h-[220px]">
              {/* Badge numéro en haut à gauche */}
              <div className="absolute top-3 left-3 z-20 bg-white border border-gray-200 rounded-2xl px-3 py-1.5 shadow-sm">
                <span className="text-sm font-semibold text-primary-500 tabular-nums">{step.num}</span>
              </div>
              {visual}
            </CardVisual>
            <CardContent>
              <CardTitle className="mb-2">{step.title}</CardTitle>
              <CardDescription>{step.subtitle}</CardDescription>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
