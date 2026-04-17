// ContactForm - Formulaire de contact

'use client'

import { useState } from 'react'
import CustomSelect from './CustomSelect'
import WordReveal from './WordReveal'

type FormData = {
  nom: string
  email: string
  telephone: string
  typeProjet: string
  budget: string
  description: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

function validateField(name: keyof FormData, value: string): string {
  switch (name) {
    case 'nom':
      if (!value.trim()) return 'Le nom est requis.'
      if (value.trim().length < 2) return 'Le nom doit contenir au moins 2 caractères.'
      return ''
    case 'email':
      if (!value.trim()) return "L'email est requis."
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "L'adresse email n'est pas valide."
      return ''
    case 'telephone':
      if (!value) return ''
      if (!/^(\+?\d[\s.\-]?){7,15}$/.test(value.replace(/\s/g, '')))
        return "Le numéro de téléphone n'est pas valide."
      return ''
    case 'typeProjet':
      if (!value) return 'Veuillez sélectionner un type de projet.'
      return ''
    case 'budget':
      if (!value) return 'Veuillez sélectionner un budget.'
      return ''
    case 'description':
      if (!value.trim()) return 'La description est requise.'
      if (value.trim().length < 20) return 'Décrivez votre projet en au moins 20 caractères.'
      return ''
    default:
      return ''
  }
}

function validateAll(formData: FormData): FormErrors {
  const errors: FormErrors = {}
  for (const key of Object.keys(formData) as (keyof FormData)[]) {
    const msg = validateField(key, formData[key])
    if (msg) errors[key] = msg
  }
  return errors
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
    telephone: '',
    typeProjet: '',
    budget: '',
    description: ''
  })
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleBlur = (name: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [name]: true }))
    const msg = validateField(name, formData[name])
    setFieldErrors((prev) => ({ ...prev, [name]: msg }))
  }

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      const msg = validateField(name, value)
      setFieldErrors((prev) => ({ ...prev, [name]: msg }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const allTouched = Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {} as Record<keyof FormData, boolean>
    )
    setTouched(allTouched)

    const errors = validateAll(formData)
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) return

    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Une erreur est survenue. Réessayez.')
        return
      }

      setIsSubmitted(true)
      setFormData({ nom: '', email: '', telephone: '', typeProjet: '', budget: '', description: '' })
      setFieldErrors({})
      setTouched({})

      setTimeout(() => setIsSubmitted(false), 6000)
    } catch {
      setError('Impossible de contacter le serveur. Vérifiez votre connexion.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-24 bg-transparent">
      <div className="container-main">
        <div className="max-w-2xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm mb-6">
            <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
            <span className="text-[16px] text-gray-700">Contact</span>
          </div>

          {/* Titre */}
          <h1 className="text-[56px] md:text-[64px] font-bold text-black mb-4 leading-tight">
            <span className="inline-block overflow-hidden leading-[1.1]">
              <span className="animate-word inline-block" style={{ animationDelay: '0ms' }}>Donnez</span>
            </span>{' '}
            <span className="inline-block overflow-hidden leading-[1.1]">
              <span className="animate-word inline-block" style={{ color: '#2A00FF', animationDelay: '80ms' }}>Vie</span>
            </span>{' '}
            <span className="inline-block overflow-hidden leading-[1.1]">
              <span className="animate-word inline-block" style={{ animationDelay: '160ms' }}>à</span>
            </span>{' '}
            <span className="inline-block overflow-hidden leading-[1.1]">
              <span className="animate-word inline-block" style={{ color: '#2A00FF', animationDelay: '240ms' }}>Vos</span>
            </span>
            <br />
            <span className="inline-block overflow-hidden leading-[1.1]">
              <span className="animate-word inline-block" style={{ animationDelay: '320ms' }}>idées</span>
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="text-[18px] text-gray-600 mb-10">
            Une idée en tête ou un projet à lancer ? Remplissez le formulaire et nous vous répondrons rapidement.
          </p>

          {/* Carte blanche extérieure */}
          <div className="rounded-3xl p-4 shadow-lg" style={{ backgroundColor: '#FFFFFF' }}>
            {/* Carte intérieure */}
            <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FCFCFC', borderColor: '#E6E6E6' }}>
              
              {/* Message de succès OU Formulaire */}
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 animate-in fade-in zoom-in duration-500">
                  <div className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#2A00FF' }}>
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[24px] font-bold mb-3" style={{ color: '#2A00FF' }}>
                    Message envoyé avec succès !
                  </h3>
                  <p className="text-[16px] text-gray-600 text-center max-w-md">
                    Nous avons bien reçu votre demande et vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Nom */}
            <div>
              <label htmlFor="nom" className="block text-[16px] font-semibold text-black mb-2">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                value={formData.nom}
                onChange={(e) => handleChange('nom', e.target.value)}
                onBlur={() => handleBlur('nom')}
                placeholder="Votre nom et prénom"
                className={`w-full px-4 py-3 text-[16px] border rounded-xl focus:outline-none focus:ring-1 focus:border-transparent ${fieldErrors.nom ? 'border-[#2A00FF] focus:ring-[#2A00FF]' : 'border-gray-200 focus:ring-primary-500'}`}
              />
              {fieldErrors.nom && <p className="mt-1.5 text-[13px] text-[#2A00FF]">{fieldErrors.nom}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[16px] font-semibold text-black mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                placeholder="Votre email"
                className={`w-full px-4 py-3 text-[16px] border rounded-xl focus:outline-none focus:ring-1 focus:border-transparent ${fieldErrors.email ? 'border-[#2A00FF] focus:ring-[#2A00FF]' : 'border-gray-200 focus:ring-primary-500'}`}
              />
              {fieldErrors.email && <p className="mt-1.5 text-[13px] text-[#2A00FF]">{fieldErrors.email}</p>}
            </div>

            {/* Téléphone */}
            <div>
              <label htmlFor="telephone" className="block text-[16px] font-semibold text-black mb-2">
                Téléphone <span className="text-gray-400 font-normal">(facultatif)</span>
              </label>
              <input
                type="tel"
                id="telephone"
                value={formData.telephone}
                onChange={(e) => handleChange('telephone', e.target.value)}
                onBlur={() => handleBlur('telephone')}
                placeholder="06 12 34 56 78"
                className={`w-full px-4 py-3 text-[16px] border rounded-xl focus:outline-none focus:ring-1 focus:border-transparent ${fieldErrors.telephone ? 'border-[#2A00FF] focus:ring-[#2A00FF]' : 'border-gray-200 focus:ring-primary-500'}`}
              />
              {fieldErrors.telephone && <p className="mt-1.5 text-[13px] text-[#2A00FF]">{fieldErrors.telephone}</p>}
            </div>

            {/* Type de projet */}
            <div>
              <CustomSelect
                label="Type de projet"
                placeholder="Sélectionnez le type de projet"
                options={[
                  { value: 'landing', label: 'Landing Page' },
                  { value: 'vitrine', label: 'Site Vitrine' },
                  { value: 'ecommerce', label: 'Site E-commerce' },
                  { value: 'refonte', label: 'Refonte de site' },
                  { value: 'autre', label: 'Autre projet' }
                ]}
                value={formData.typeProjet}
                onChange={(value) => { handleChange('typeProjet', value); handleBlur('typeProjet') }}
              />
              {fieldErrors.typeProjet && <p className="mt-1.5 text-[13px] text-[#2A00FF]">{fieldErrors.typeProjet}</p>}
            </div>

            {/* Budget */}
            <div>
              <CustomSelect
                label="Budget"
                placeholder="Sélectionnez votre budget"
                options={[
                  { value: '1000-2000', label: '1 000€ - 2 000€' },
                  { value: '2000-5000', label: '2 000€ - 5 000€' },
                  { value: '5000-10000', label: '5 000€ - 10 000€' },
                  { value: '10000+', label: 'Plus de 10 000€' }
                ]}
                value={formData.budget}
                onChange={(value) => { handleChange('budget', value); handleBlur('budget') }}
              />
              {fieldErrors.budget && <p className="mt-1.5 text-[13px] text-[#2A00FF]">{fieldErrors.budget}</p>}
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-[16px] font-semibold text-black mb-2">
                Décrivez votre projet
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                onBlur={() => handleBlur('description')}
                placeholder="Écrivez votre projet"
                rows={5}
                className={`w-full px-4 py-3 text-[16px] border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent resize-none ${fieldErrors.description ? 'border-[#2A00FF] focus:ring-[#2A00FF]' : 'border-gray-200 focus:ring-primary-500'}`}
              />
              {fieldErrors.description && <p className="mt-1.5 text-[13px] text-[#2A00FF]">{fieldErrors.description}</p>}
            </div>

            {/* Message d'erreur */}
            {error && (
              <div className="flex items-center gap-3 bg-blue-50 border border-[#2A00FF] rounded-xl px-4 py-3">
                <svg className="w-5 h-5 text-[#2A00FF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[14px] text-[#2A00FF]">{error}</p>
              </div>
            )}

            {/* Bouton Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-white text-[16px] font-semibold px-8 py-4 rounded-full transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{ backgroundColor: '#171717' }}
              onMouseEnter={(e) => { if (!isLoading) e.currentTarget.style.backgroundColor = '#2A2A2A' }}
              onMouseLeave={(e) => { if (!isLoading) e.currentTarget.style.backgroundColor = '#171717' }}
            >
              {isLoading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Envoi en cours…
                </>
              ) : 'Soumettre'}
            </button>
          </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
