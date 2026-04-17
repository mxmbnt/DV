'use client'

// Values - Section À propos avec citation

import { useState, useEffect, useRef } from 'react'
import WordReveal, { AnimatedWord } from '@/components/WordReveal'

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
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [titleVisible, setTitleVisible] = useState(false)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTitleVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const S = 80 // stagger ms

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
          <h2 ref={titleRef} className="text-[48px] font-bold text-black leading-tight">
            {/* Ligne 1 : mots 0→6 */}
            <AnimatedWord index={0} stagger={S} visible={titleVisible}>Nous</AnimatedWord>{' '}
            <AnimatedWord index={1} stagger={S} visible={titleVisible}>croyons</AnimatedWord>{' '}
            <AnimatedWord index={2} stagger={S} visible={titleVisible}>{"qu'un"}</AnimatedWord>{' '}
            <AnimatedWord index={3} stagger={S} visible={titleVisible}>projet</AnimatedWord>{' '}
            <AnimatedWord index={4} stagger={S} visible={titleVisible}>web</AnimatedWord>{' '}
            <AnimatedWord index={5} stagger={S} visible={titleVisible}>réussi</AnimatedWord>
            <br />
            {/* Ligne 2 : mots 6→9 */}
            <AnimatedWord index={6} stagger={S} visible={titleVisible}>commence</AnimatedWord>{' '}
            <AnimatedWord index={7} stagger={S} visible={titleVisible}>par</AnimatedWord>{' '}
            <AnimatedWord index={8} stagger={S} visible={titleVisible} className="text-black">{"l'humain."}</AnimatedWord>
            <br />
            {/* Ligne 3 : mots 9→13 */}
            <AnimatedWord index={9} stagger={S} visible={titleVisible}>Toujours</AnimatedWord>{' '}
            <AnimatedWord index={10} stagger={S} visible={titleVisible} className="text-primary-500">{"À l'écoute,"}</AnimatedWord>{' '}
            <AnimatedWord index={11} stagger={S} visible={titleVisible} className="text-primary-500">Bienveillants</AnimatedWord>{' '}
            <AnimatedWord index={12} stagger={S} visible={titleVisible} className="text-primary-500">et</AnimatedWord>
            <br />
            {/* Ligne 4 : mot 13 */}
            <AnimatedWord index={13} stagger={S} visible={titleVisible} className="text-primary-500">{"Proches."}</AnimatedWord>
          </h2>
        </div>

        {/* Stats - Dans une card */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white rounded-3xl shadow-sm px-12 py-10 flex flex-wrap justify-center gap-16 md:gap-24">
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
