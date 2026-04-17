export default function DevLivraisonIllustration() {
  return (
    <div className="w-full h-full min-h-[200px] flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes floatDark {
          0%, 100% { transform: rotate(-6deg) translateY(0px); }
          50% { transform: rotate(-6deg) translateY(-7px); }
        }
        @keyframes floatLight {
          0%, 100% { transform: rotate(4deg) translateY(0px); }
          50% { transform: rotate(4deg) translateY(-6px); }
        }
        @keyframes floatBlue {
          0%, 100% { transform: rotate(-10deg) translateY(0px); }
          50% { transform: rotate(-10deg) translateY(-8px); }
        }
      `}</style>

      <div className="relative flex items-center justify-center" style={{ width: 240, height: 130 }}>

        {/* Tag sombre - Dashboard */}
        <div
          className="absolute top-0 right-2 flex items-center gap-2.5 px-4 py-2.5"
          style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '0.5rem',
            animation: 'floatDark 3.8s ease-in-out infinite',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <rect x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
          <span className="text-white font-medium text-[15px] whitespace-nowrap">Dashboard</span>
        </div>

        {/* Tag blanc - Logo.png */}
        <div
          className="absolute bottom-6 left-2 flex items-center gap-2.5 px-4 py-2.5 border border-gray-200 shadow-sm"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '0.5rem',
            animation: 'floatLight 4.2s ease-in-out infinite 0.6s',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0033ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
          </svg>
          <span className="text-gray-800 font-medium text-[15px] whitespace-nowrap">Logo.png</span>
        </div>

        {/* Tag bleu - Publié */}
        <div
          className="absolute bottom-0 right-0 px-5 py-2.5"
          style={{
            backgroundColor: 'rgba(0,51,255,0.93)',
            boxShadow: '0 0 8px 2px rgba(0,51,255,0.25), 0 0 18px 4px rgba(0,51,255,0.12), 0 4px 10px rgba(0,0,0,0.2), inset 0 1px 4px rgba(80,120,255,0.45)',
            borderRadius: '0.5rem',
            animation: 'floatBlue 3.5s ease-in-out infinite 1.2s',
          }}
        >
          <span className="text-white font-semibold text-[15px] whitespace-nowrap">Publié</span>
        </div>

      </div>
    </div>
  )
}
