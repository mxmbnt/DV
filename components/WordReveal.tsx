'use client'

import { useRef, useState, useEffect } from 'react'

// ─── Mot animé individuel ─────────────────────────────────────────────────────
// Utile pour les textes avec des spans colorés (Values, FAQ...)
export function AnimatedWord({
  children,
  index = 0,
  delay = 0,
  stagger = 80,
  visible,
  className = '',
}: {
  children: React.ReactNode
  index?: number
  delay?: number
  stagger?: number
  visible: boolean
  className?: string
}) {
  return (
    <span className="inline-block overflow-hidden leading-[1.1]">
      <span
        className={`inline-block ${visible ? 'animate-word' : 'opacity-0'} ${className}`}
        style={visible ? { animationDelay: `${delay + index * stagger}ms` } : {}}
      >
        {children}
      </span>
    </span>
  )
}

// ─── Composant principal : révèle une string mot par mot au scroll ────────────
interface WordRevealProps {
  children: string
  startIndex?: number  // décalage de stagger (pour enchaîner plusieurs lignes)
  delay?: number       // délai de base en ms
  stagger?: number     // ms entre chaque mot
  className?: string
}

export default function WordReveal({
  children,
  startIndex = 0,
  delay = 0,
  stagger = 80,
  className = '',
}: WordRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const words = children.split(' ')

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden leading-[1.1]">
            <span
              className={`inline-block ${visible ? 'animate-word' : 'opacity-0'}`}
              style={visible ? { animationDelay: `${delay + (startIndex + i) * stagger}ms` } : {}}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </span>
  )
}
