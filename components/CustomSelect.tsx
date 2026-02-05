'use client'

import { useState, useRef, useEffect } from 'react'

interface Option {
  value: string
  label: string
}

interface CustomSelectProps {
  label: string
  placeholder: string
  options: Option[]
  value: string
  onChange: (value: string) => void
  required?: boolean
}

export default function CustomSelect({ 
  label, 
  placeholder, 
  options, 
  value, 
  onChange,
  required = false 
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find(opt => opt.value === value)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div>
      <label className="block text-[16px] font-semibold text-black mb-2">
        {label}
      </label>
      
      <div className="relative" ref={dropdownRef}>
        {/* Champ sélectionné */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 pr-10 text-[16px] text-left border border-gray-200 rounded-xl cursor-pointer transition-all focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent bg-white"
          style={{ 
            color: value ? '#000000' : '#9CA3AF'
          }}
        >
          {selectedOption ? selectedOption.label : placeholder}
          
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg 
              className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* Liste déroulante */}
        {isOpen && (
          <div 
            className="absolute z-50 w-full mt-2 rounded-lg shadow-xl overflow-hidden"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value)
                  setIsOpen(false)
                }}
                className="w-full px-4 py-3 text-left text-[16px] transition-all group"
                style={{ 
                  backgroundColor: value === option.value ? '#EEF2FF' : 'transparent',
                  color: value === option.value ? '#2A00FF' : '#000000'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#EEF2FF'
                  e.currentTarget.style.color = '#2A00FF'
                }}
                onMouseLeave={(e) => {
                  if (value !== option.value) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#000000'
                  }
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input caché pour la validation HTML */}
      <input
        type="text"
        value={value}
        onChange={() => {}}
        required={required}
        className="absolute w-0 h-0 opacity-0 pointer-events-none"
        tabIndex={-1}
      />
    </div>
  )
}
