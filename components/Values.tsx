'use client'

// Values - Section À propos avec citation

import { useState, useEffect, useRef } from 'react'

function Counter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            const startTime = Date.now()
            const startValue = 0

            const animate = () => {
              const now = Date.now()
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              
              // Easing function pour une animation fluide
              const easeOutQuart = 1 - Math.pow(1 - progress, 4)
              const current = Math.floor(startValue + (end - startValue) * easeOutQuart)
              
              setCount(current)

              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setCount(end)
              }
            }

            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [end, duration, hasAnimated])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-black" style={{ color: '#2A00FF' }}>
      {count}{suffix}
    </div>
  )
}

export default function Values() {
  return (
    <section className="pt-24 pb-24 bg-transparent">
      <div className="container-main">
        {/* Badge */}
        <div className="flex justify-center mb-10 mt-0">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm">
            <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
            <span className="text-[16px] text-gray-700">À propos</span>
          </div>
        </div>

        {/* Citation - En bold */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[48px] font-bold text-black leading-tight">
            Nous croyons qu&apos;un projet web réussi
            <br />
            commence par <span className="text-black">l&apos;humain</span>.
            <br />
            Toujours <span className="text-primary-500 font-bold">À l&apos;écoute</span><span className="text-primary-500 font-bold">, </span><span className="text-primary-500 font-bold">Bienveillants</span><span className="text-primary-500 font-bold"> et </span>
            <br />
            <span className="text-primary-500 font-bold">Proches</span><span className="text-primary-500 font-bold">.</span>
          </h2>
        </div>

        {/* Stats - Dans une card */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white rounded-3xl shadow-lg px-12 py-10 flex flex-wrap justify-center gap-16 md:gap-24">
            <div className="text-center">
              <Counter end={10} suffix="+" />
              <div className="mt-2 text-[16px] text-gray-700 font-medium">Projets Réalisés</div>
            </div>
            <div className="text-center">
              <Counter end={5} suffix="+" />
              <div className="mt-2 text-[16px] text-gray-700 font-medium">Clients Satisfaits</div>
            </div>
            <div className="text-center">
              <Counter end={100} suffix="%" />
              <div className="mt-2 text-[16px] text-gray-700 font-medium">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
