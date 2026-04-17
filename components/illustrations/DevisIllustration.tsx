export default function DevisIllustration() {
  return (
    <div className="w-full h-full min-h-[200px] flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes floatBubble {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes floatTag {
          0%, 100% { transform: rotate(-12deg) translateY(0px); }
          50% { transform: rotate(-12deg) translateY(-6px); }
        }
        @keyframes cursorMove {
          0%   { transform: translate(0px, 0px); }
          25%  { transform: translate(18px, -12px); }
          50%  { transform: translate(30px, -6px); }
          75%  { transform: translate(14px, 8px); }
          100% { transform: translate(0px, 0px); }
        }
      `}</style>

      <div className="relative flex items-center justify-center" style={{ width: 260, height: 140 }}>

        {/* Bulle blanche */}
        <div
          className="absolute top-0 left-6 bg-white px-5 py-3 shadow-md border border-gray-100"
          style={{ borderRadius: '0.5rem', animation: 'floatBubble 3.5s ease-in-out infinite' }}
        >
          <p className="text-gray-900 font-semibold text-[15px] leading-snug whitespace-nowrap">
            Besoin d&apos;un devis ?
          </p>
        </div>

        {/* Curseur */}
        <div
          className="absolute left-0 top-[52px]"
          style={{ animation: 'cursorMove 4s ease-in-out infinite' }}
        >
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <path d="M4 2L20 10L12 13L9 21L4 2Z" fill="#0033ff" stroke="#0033ff" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Tag bleu style FinalCTA */}
        <div
          className="absolute bottom-0 right-4"
          style={{
            backgroundColor: 'rgba(0,51,255,0.93)',
            boxShadow: '0 0 8px 2px rgba(0,51,255,0.25), 0 0 18px 4px rgba(0,51,255,0.12), 0 4px 10px rgba(0,0,0,0.2), inset 0 1px 4px rgba(80,120,255,0.45)',
            borderRadius: '0.5rem',
            padding: '10px 20px',
            animation: 'floatTag 4.5s ease-in-out infinite 0.8s',
          }}
        >
          <span className="text-white font-medium text-[15px] whitespace-nowrap">
            Proposition envoyée
          </span>
        </div>

      </div>
    </div>
  )
}
