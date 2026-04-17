// Navbar - Navigation avec menu hamburger mobile

'use client'

import { useState } from 'react'

const navItems = [
  { label: 'Services', href: '/#services' },
  { label: 'Processus', href: '/#processus' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Tarifs', href: '/#tarifs' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed top-2 left-0 right-0 z-50 mx-auto max-w-6xl px-4">
        <div className="bg-white rounded-full shadow-md border border-gray-100">
          <div className="flex items-center justify-between h-[75px] px-6">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <img src="/logos/yVxYykAqZEuMGAR0GBOcbEK3yQ.png" alt="Digital Vision" className="w-7 h-7" />
              <span className="font-semibold text-black tracking-tight text-[16px]">DIGITAL VISION</span>
            </a>

            {/* Navigation centrale — desktop */}
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-[16px] font-semibold text-gray-600 transition-colors hover:text-primary-500"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Contact — desktop uniquement */}
            <a
              href="/contact"
              className="group hidden md:inline-flex items-center justify-center gap-2 text-white text-[16px] font-medium w-[140px] h-[55px] pl-5 pr-2 rounded-full transition-colors"
              style={{ backgroundColor: '#171717' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2A2A2A')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#171717')}
            >
              Contact
              <span className="relative w-[40px] h-[40px] flex-shrink-0 rounded-full flex items-center justify-center overflow-hidden">
                <span className="absolute inset-0 bg-white rounded-full" />
                <span className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" style={{ backgroundColor: '#2A00FF' }} />
                <svg className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>

            {/* Bouton hamburger — mobile uniquement */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden w-[44px] h-[44px] rounded-2xl flex items-center justify-center transition-colors"
              style={{ backgroundColor: '#171717' }}
              aria-label="Ouvrir le menu"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Panneau menu mobile */}
      <div
        className={`fixed top-2 left-4 right-4 z-50 bg-white rounded-3xl shadow-sm overflow-hidden transition-all duration-300 ease-out md:hidden ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {/* En-tête du panneau */}
        <div className="flex items-center justify-between px-6 h-[75px] border-b border-gray-100">
          <a href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
            <img src="/logos/yVxYykAqZEuMGAR0GBOcbEK3yQ.png" alt="Digital Vision" className="w-7 h-7" />
            <span className="font-semibold text-black tracking-tight text-[16px]">DIGITAL VISION</span>
          </a>
          <button
            onClick={() => setOpen(false)}
            className="w-[44px] h-[44px] rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: '#171717' }}
            aria-label="Fermer le menu"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Liens de navigation */}
        <nav className="flex flex-col px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-[22px] font-semibold text-black px-3 py-3.5 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bouton Contact en bas */}
        <div className="px-6 pb-6 pt-2">
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="group inline-flex items-center justify-between gap-6 text-white text-[16px] font-medium h-[55px] pl-5 pr-2 rounded-full"
            style={{ backgroundColor: '#171717' }}
          >
            Contact
            <span className="relative w-[40px] h-[40px] flex-shrink-0 rounded-full flex items-center justify-center overflow-hidden">
              <span className="absolute inset-0 bg-white rounded-full" />
              <span className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" style={{ backgroundColor: '#2A00FF' }} />
              <svg className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </>
  )
}
