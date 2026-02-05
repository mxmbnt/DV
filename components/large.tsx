"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import Glow from "@/components/ui/glow"
import { Section } from "@/components/ui/section"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Slide,
  SlideButton,
  SlideContent,
  SlideDescription,
  SlideExpandedContent,
  SlideTitle,
  SlideVisual,
} from "@/components/ui/slide"

export interface SlideProps {
  tagline: string
  title: string
  description: string
  image: React.ReactNode
}

export interface CarouselLargeProps {
  title?: string
  description?: string
  slides?: SlideProps[]
  className?: string
}

export default function CarouselLarge({
  title = "Titre",
  description = "Description.",
  slides = [],
  className,
}: CarouselLargeProps) {
  const [expandedSlides, setExpandedSlides] = React.useState<boolean[]>(
    new Array(slides.length).fill(false),
  )

  const toggleSlide = (index: number) => {
    setExpandedSlides((prev) => {
      const next = [...prev]
      next[index] = !next[index]
      return next
    })
  }

  if (slides.length === 0) return null

  return (
    <Section className={cn("w-full overflow-hidden", className)}>
      <div className="container-main flex flex-col items-center gap-6 sm:gap-12">
        <div className="flex flex-col items-center gap-4 w-full text-center">
          <h2 className="text-[48px] font-semibold text-black">
            {title}
          </h2>
          <p className="text-[18px] text-gray-500 max-w-[640px]">
            {description}
          </p>
        </div>
        <Carousel
          opts={{ align: "start", startIndex: 0 }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="flex basis-full sm:basis-2/3 pl-4">
                <Slide
                  className="grow cursor-pointer"
                  onClick={() => toggleSlide(index)}
                >
                  <SlideVisual
                    className="min-h-[280px] items-end overflow-hidden rounded-t-xl"
                    isExpanded={expandedSlides[index]}
                  >
                    <div className="h-full max-h-[300px] w-full overflow-hidden transition-transform duration-300 group-hover:scale-[1.03]">
                      {slide.image}
                    </div>
                    <Glow
                      variant="center"
                      className="scale-[2.5] opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                    />
                  </SlideVisual>
                  <SlideButton
                    isExpanded={expandedSlides[index]}
                    onClick={(e) => { e.stopPropagation(); toggleSlide(index); }}
                  />
                  <SlideContent isExpanded={expandedSlides[index]}>
                    <SlideDescription>{slide.tagline}</SlideDescription>
                    <SlideTitle className="text-balance">
                      {slide.title}
                    </SlideTitle>
                  </SlideContent>
                  <SlideExpandedContent isExpanded={expandedSlides[index]}>
                    {slide.description}
                  </SlideExpandedContent>
                </Slide>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-start gap-3">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </Section>
  )
}
