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
  DevisIllustration,
  DesignIllustration,
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
    <div className="relative w-full h-full min-h-[200px] md:min-h-[220px] bg-gray-50">
      <div className="absolute inset-0 flex items-center justify-center overflow-auto">
        <Illustration />
      </div>
      <div
        className={`absolute top-0 bottom-0 w-12 md:w-16 pointer-events-none z-10 ${
          fadeSide === "left" ? "left-0" : "right-0"
        }`}
        style={{
          background:
            fadeSide === "left"
              ? "radial-gradient(ellipse 80% 120% at 0% 50%, rgba(42, 0, 255, 0.35) 0%, transparent 70%)"
              : "radial-gradient(ellipse 80% 120% at 100% 50%, rgba(42, 0, 255, 0.35) 0%, transparent 70%)",
        }}
        aria-hidden
      />
    </div>
  )
}

const TILE_SIZES = [
  "col-span-12 md:flex md:flex-row",
  "col-span-12 md:col-span-6 lg:col-span-5",
  "col-span-12 md:col-span-6 lg:col-span-7",
  "col-span-12 md:flex md:flex-row",
] as const

const FADE_SIDES: ("left" | "right")[] = ["right", "left", "right", "left"]

export default function ProcessBento({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="grid grid-cols-12 gap-4 w-full">
      {steps.slice(0, 4).map((step, index) => {
        const size = TILE_SIZES[index]
        const fadeSide = FADE_SIDES[index]
        const Illustration = ILLUSTRATIONS[index]
        const visual = (
          <StepVisual
            title={step.title}
            fadeSide={fadeSide}
            illustration={Illustration}
          />
        )

        if (index === 0) {
          return (
            <Card key={index} className={size}>
              <CardContent className="grow basis-0 md:justify-end md:flex md:flex-col">
                <span className="text-sm font-semibold text-primary-500 tabular-nums">
                  {step.num}
                </span>
                <CardTitle className="mt-1 mb-2">{step.title}</CardTitle>
                <CardDescription>{step.subtitle}</CardDescription>
              </CardContent>
              <CardVisual className="min-h-[200px] md:min-h-[240px] md:flex-1">
                {visual}
              </CardVisual>
            </Card>
          )
        }

        if (index === 3) {
          return (
            <Card key={index} className={size}>
              <CardContent className="grow basis-0 md:justify-end md:flex md:flex-col">
                <span className="text-sm font-semibold text-primary-500 tabular-nums">
                  {step.num}
                </span>
                <CardTitle className="mt-1 mb-2">{step.title}</CardTitle>
                <CardDescription>{step.subtitle}</CardDescription>
              </CardContent>
              <CardVisual className="min-h-[200px] md:min-h-[240px] md:flex-1">
                {visual}
              </CardVisual>
            </Card>
          )
        }

        return (
          <Card key={index} className={size}>
            <CardVisual className="min-h-[200px] md:min-h-[220px]">
              {visual}
            </CardVisual>
            <CardContent>
              <span className="text-sm font-semibold text-primary-500 tabular-nums">
                {step.num}
              </span>
              <CardTitle className="mt-1 mb-2">{step.title}</CardTitle>
              <CardDescription>{step.subtitle}</CardDescription>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
