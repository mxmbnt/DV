export default function DesignIllustration() {
  return (
    <div className="w-full h-full min-h-[200px] flex items-center justify-center overflow-hidden">
      <svg width="100%" viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="clip-mid"><circle cx="340" cy="150" r="52"/></clipPath>
          <style>{`
            .ring { transform-origin: center; transform-box: fill-box; }
            .r1 { animation: pulse 2.8s ease-in-out infinite; }
            .r2 { animation: pulse 2.8s ease-in-out infinite 0.2s; }
            .r3 { animation: pulse 2.8s ease-in-out infinite 0.4s; }
            .r4 { animation: pulse 2.8s ease-in-out infinite 0.6s; }
            .c2 .r1 { animation-delay: 0.5s; }
            .c2 .r2 { animation-delay: 0.7s; }
            .c2 .r3 { animation-delay: 0.9s; }
            .c2 .r4 { animation-delay: 1.1s; }
            .c3 .r1 { animation-delay: 1s; }
            .c3 .r2 { animation-delay: 1.2s; }
            .c3 .r3 { animation-delay: 1.4s; }
            .c3 .r4 { animation-delay: 1.6s; }
            @keyframes pulse {
              0%,100% { transform: scale(1); opacity: var(--o); }
              50% { transform: scale(1.10); opacity: calc(var(--o) * 3); }
            }
            .line1 { stroke-dasharray: 80; stroke-dashoffset: 80; animation: draw 0.8s ease 0.3s forwards; }
            .line2 { stroke-dasharray: 80; stroke-dashoffset: 80; animation: draw 0.8s ease 0.7s forwards; }
            @keyframes draw { to { stroke-dashoffset: 0; } }
          `}</style>
        </defs>

        {/* GAUCHE : palette */}
        <g className="c1">
          <circle className="ring r1" style={{ '--o': '0.12' } as React.CSSProperties} cx="148" cy="150" r="108" fill="#0033ff" fillOpacity="0.12"/>
          <circle className="ring r2" style={{ '--o': '0.20' } as React.CSSProperties} cx="148" cy="150" r="86"  fill="#0033ff" fillOpacity="0.20"/>
          <circle className="ring r3" style={{ '--o': '0.30' } as React.CSSProperties} cx="148" cy="150" r="70"  fill="#0033ff" fillOpacity="0.30"/>
          <circle className="ring r4" style={{ '--o': '0.42' } as React.CSSProperties} cx="148" cy="150" r="62"  fill="#0033ff" fillOpacity="0.42"/>
          <circle cx="148" cy="150" r="56" fill="#0033ff"/>
          <g transform="translate(148,150)">
            <path d="M-22,4 C-24,-11 -12,-25 0,-25 C15,-25 27,-12 25,5 C23,17 11,25 0,25 C-10,25 -13,17 -8,12 C-4,7 -4,1 -8,1 Z" fill="white" fillOpacity="0.95"/>
            <circle cx="-11" cy="-8"  r="5.5" fill="#FF6B2B"/>
            <circle cx="3"   cy="-17" r="5.5" fill="#FF2D6E"/>
            <circle cx="15"  cy="-6"  r="5.5" fill="#9933FF"/>
          </g>
        </g>

        {/* TRAIT 1 */}
        <line className="line1" x1="204" y1="150" x2="284" y2="150"
              stroke="#2244ee" strokeWidth="1.4" strokeOpacity="0.7" strokeLinecap="round"/>

        {/* CENTRE : logo Figma */}
        <g className="c2">
          <circle className="ring r1" style={{ '--o': '0.12' } as React.CSSProperties} cx="340" cy="150" r="108" fill="#0033ff" fillOpacity="0.12"/>
          <circle className="ring r2" style={{ '--o': '0.20' } as React.CSSProperties} cx="340" cy="150" r="86"  fill="#0033ff" fillOpacity="0.20"/>
          <circle className="ring r3" style={{ '--o': '0.30' } as React.CSSProperties} cx="340" cy="150" r="70"  fill="#0033ff" fillOpacity="0.30"/>
          <circle className="ring r4" style={{ '--o': '0.42' } as React.CSSProperties} cx="340" cy="150" r="62"  fill="#0033ff" fillOpacity="0.42"/>
          <circle cx="340" cy="150" r="56" fill="#0033ff"/>
          <image
            href="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1920px-Figma-logo.svg.png"
            x="308" y="118" width="64" height="64"
            clipPath="url(#clip-mid)"/>
        </g>

        {/* TRAIT 2 */}
        <line className="line2" x1="396" y1="150" x2="476" y2="150"
              stroke="#2244ee" strokeWidth="1.4" strokeOpacity="0.7" strokeLinecap="round"/>

        {/* DROITE : écran */}
        <g className="c3">
          <circle className="ring r1" style={{ '--o': '0.12' } as React.CSSProperties} cx="532" cy="150" r="108" fill="#0033ff" fillOpacity="0.12"/>
          <circle className="ring r2" style={{ '--o': '0.20' } as React.CSSProperties} cx="532" cy="150" r="86"  fill="#0033ff" fillOpacity="0.20"/>
          <circle className="ring r3" style={{ '--o': '0.30' } as React.CSSProperties} cx="532" cy="150" r="70"  fill="#0033ff" fillOpacity="0.30"/>
          <circle className="ring r4" style={{ '--o': '0.42' } as React.CSSProperties} cx="532" cy="150" r="62"  fill="#0033ff" fillOpacity="0.42"/>
          <circle cx="532" cy="150" r="56" fill="#0033ff"/>
          <g transform="translate(532,150)">
            <rect x="-26" y="-21" width="52" height="36" rx="5" fill="none" stroke="white" strokeWidth="2.5"/>
            <rect x="-21" y="-16" width="42" height="25" rx="3" fill="white" fillOpacity="0.25"/>
            <rect x="-5"  y="15"  width="10" height="7"  rx="2" fill="white"/>
            <rect x="-14" y="22"  width="28" height="3.5" rx="2" fill="white"/>
          </g>
        </g>
      </svg>
    </div>
  )
}
