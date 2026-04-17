export default function ContactIllustration() {
  return (
    <div className="w-full h-full min-h-[200px] flex items-center justify-center overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 680 500" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="clip-right-c"><circle cx="550" cy="250" r="54"/></clipPath>
          <style>{`
            .ring { transform-origin: center; transform-box: fill-box; }
            .r1 { animation: pulseC 2.8s ease-in-out infinite; }
            .r2 { animation: pulseC 2.8s ease-in-out infinite 0.2s; }
            .r3 { animation: pulseC 2.8s ease-in-out infinite 0.4s; }
            .r4 { animation: pulseC 2.8s ease-in-out infinite 0.6s; }
            .c2 .r1 { animation-delay: 0.5s; }
            .c2 .r2 { animation-delay: 0.7s; }
            .c2 .r3 { animation-delay: 0.9s; }
            .c2 .r4 { animation-delay: 1.1s; }
            .c3 .r1 { animation-delay: 1s; }
            .c3 .r2 { animation-delay: 1.2s; }
            .c3 .r3 { animation-delay: 1.4s; }
            .c3 .r4 { animation-delay: 1.6s; }
            @keyframes pulseC {
              0%,100% { transform: scale(1); opacity: var(--o); }
              50% { transform: scale(1.10); opacity: calc(var(--o) * 3); }
            }
            .lineC1, .lineC2, .lineC3 {
              stroke-dasharray: 300;
              stroke-dashoffset: 300;
            }
            .lineC1 { animation: drawC 0.9s ease 0.2s forwards; }
            .lineC2 { animation: drawC 0.9s ease 0.4s forwards; }
            .lineC3 { animation: drawC 0.9s ease 0.6s forwards; }
            @keyframes drawC { to { stroke-dashoffset: 0; } }
          `}</style>
        </defs>

        {/* ICÔNE 1 : haut gauche - enveloppe */}
        <g className="c1">
          <circle className="ring r1" style={{ '--o': '0.12' } as React.CSSProperties} cx="138" cy="100"  r="90" fill="#0033ff" fillOpacity="0.12"/>
          <circle className="ring r2" style={{ '--o': '0.20' } as React.CSSProperties} cx="138" cy="100"  r="72" fill="#0033ff" fillOpacity="0.20"/>
          <circle className="ring r3" style={{ '--o': '0.30' } as React.CSSProperties} cx="138" cy="100"  r="58" fill="#0033ff" fillOpacity="0.30"/>
          <circle className="ring r4" style={{ '--o': '0.42' } as React.CSSProperties} cx="138" cy="100"  r="50" fill="#0033ff" fillOpacity="0.42"/>
          <circle cx="138" cy="100" r="44" fill="#0033ff"/>
          <g transform="translate(138,100)">
            <rect x="-18" y="-12" width="36" height="24" rx="3" fill="none" stroke="white" strokeWidth="2.2"/>
            <polyline points="-18,-12 0,4 18,-12" fill="none" stroke="white" strokeWidth="2.2" strokeLinejoin="round"/>
          </g>
        </g>

        {/* ICÔNE 2 : milieu gauche - calendrier */}
        <g className="c2">
          <circle className="ring r1" style={{ '--o': '0.12' } as React.CSSProperties} cx="138" cy="250" r="90" fill="#0033ff" fillOpacity="0.12"/>
          <circle className="ring r2" style={{ '--o': '0.20' } as React.CSSProperties} cx="138" cy="250" r="72" fill="#0033ff" fillOpacity="0.20"/>
          <circle className="ring r3" style={{ '--o': '0.30' } as React.CSSProperties} cx="138" cy="250" r="58" fill="#0033ff" fillOpacity="0.30"/>
          <circle className="ring r4" style={{ '--o': '0.42' } as React.CSSProperties} cx="138" cy="250" r="50" fill="#0033ff" fillOpacity="0.42"/>
          <circle cx="138" cy="250" r="44" fill="#0033ff"/>
          <g transform="translate(138,250)">
            <rect x="-16" y="-14" width="32" height="28" rx="3" fill="none" stroke="white" strokeWidth="2.2"/>
            <line x1="-16" y1="-5" x2="16" y2="-5" stroke="white" strokeWidth="2"/>
            <line x1="-7" y1="-18" x2="-7" y2="-10" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
            <line x1="7"  y1="-18" x2="7"  y2="-10" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
          </g>
        </g>

        {/* ICÔNE 3 : bas gauche - cible */}
        <g className="c3">
          <circle className="ring r1" style={{ '--o': '0.12' } as React.CSSProperties} cx="138" cy="400" r="90" fill="#0033ff" fillOpacity="0.12"/>
          <circle className="ring r2" style={{ '--o': '0.20' } as React.CSSProperties} cx="138" cy="400" r="72" fill="#0033ff" fillOpacity="0.20"/>
          <circle className="ring r3" style={{ '--o': '0.30' } as React.CSSProperties} cx="138" cy="400" r="58" fill="#0033ff" fillOpacity="0.30"/>
          <circle className="ring r4" style={{ '--o': '0.42' } as React.CSSProperties} cx="138" cy="400" r="50" fill="#0033ff" fillOpacity="0.42"/>
          <circle cx="138" cy="400" r="44" fill="#0033ff"/>
          <g transform="translate(138,400)">
            <circle r="14" fill="none" stroke="white" strokeWidth="2.2"/>
            <circle r="4" fill="white"/>
            <line x1="-22" y1="0" x2="-16" y2="0" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
            <line x1="16"  y1="0" x2="22"  y2="0" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
            <line x1="0" y1="-22" x2="0" y2="-16" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
            <line x1="0" y1="16"  x2="0" y2="22"  stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
          </g>
        </g>

        {/* CONNECTEURS angulaires */}
        <path className="lineC1" d="M182,100 L370,100 L488,250"
              fill="none" stroke="#2244ee" strokeWidth="1.6" strokeOpacity="0.70"
              strokeLinecap="round" strokeLinejoin="round"/>
        <path className="lineC2" d="M182,250 L488,250"
              fill="none" stroke="#2244ee" strokeWidth="1.6" strokeOpacity="0.70"
              strokeLinecap="round"/>
        <path className="lineC3" d="M182,400 L370,400 L488,250"
              fill="none" stroke="#2244ee" strokeWidth="1.6" strokeOpacity="0.70"
              strokeLinecap="round" strokeLinejoin="round"/>

        {/* Points aux coudes */}
        <circle cx="370" cy="100" r="3.5" fill="#2255ee" fillOpacity="0.65"/>
        <circle cx="370" cy="400" r="3.5" fill="#2255ee" fillOpacity="0.65"/>

        {/* DROITE : logo blanc */}
        <g>
          <circle className="ring r1" style={{ '--o': '0.12' } as React.CSSProperties} cx="550" cy="250" r="110" fill="#0033ff" fillOpacity="0.12"/>
          <circle className="ring r2" style={{ '--o': '0.20' } as React.CSSProperties} cx="550" cy="250" r="88"  fill="#0033ff" fillOpacity="0.20"/>
          <circle className="ring r3" style={{ '--o': '0.30' } as React.CSSProperties} cx="550" cy="250" r="72"  fill="#0033ff" fillOpacity="0.30"/>
          <circle className="ring r4" style={{ '--o': '0.42' } as React.CSSProperties} cx="550" cy="250" r="63"  fill="#0033ff" fillOpacity="0.42"/>
          <circle cx="550" cy="250" r="58" fill="#0033ff"/>
          <image
            href="/logos/logo_blanc.png"
            x="496" y="196" width="108" height="108"
            clipPath="url(#clip-right-c)"/>
        </g>
      </svg>
    </div>
  )
}
