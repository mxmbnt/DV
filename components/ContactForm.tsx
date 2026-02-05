// ContactForm - Formulaire de contact

'use client'

import { useState } from 'react'
import CustomSelect from './CustomSelect'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    typeProjet: '',
    budget: '',
    description: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Traitement du formulaire ici
    console.log('Form submitted:', formData)
    
    // Afficher le message de succès
    setIsSubmitted(true)
    
    // Réinitialiser le formulaire
    setFormData({
      nom: '',
      email: '',
      typeProjet: '',
      budget: '',
      description: ''
    })
    
    // Cacher le message après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
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
            Donnez <span style={{ color: '#2A00FF' }}>Vie</span> à <span style={{ color: '#2A00FF' }}>Vos</span>
            <br />
            idées
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
                <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom */}
            <div>
              <label htmlFor="nom" className="block text-[16px] font-semibold text-black mb-2">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                placeholder="Votre nom et prénom"
                className="w-full px-4 py-3 text-[16px] border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent"
                required
              />
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
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Votre email"
                className="w-full px-4 py-3 text-[16px] border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            {/* Type de projet */}
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
              onChange={(value) => setFormData({ ...formData, typeProjet: value })}
              required
            />

            {/* Budget */}
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
              onChange={(value) => setFormData({ ...formData, budget: value })}
              required
            />

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-[16px] font-semibold text-black mb-2">
                Décrivez votre projet
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Écrivez votre projet"
                rows={5}
                className="w-full px-4 py-3 text-[16px] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                required
              />
            </div>

            {/* Bouton Submit */}
            <button
              type="submit"
              className="w-full text-white text-[16px] font-semibold px-8 py-4 rounded-full transition-colors"
              style={{ backgroundColor: '#171717' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2A2A2A')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#171717')}
            >
              Soumettre
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
