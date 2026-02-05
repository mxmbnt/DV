// Bouton même style que Contact dans la navbar (réutilisé Hero, Tarifs, etc.)

export default function ContactButton({
  children,
  className,
  large,
  tightRight,
  light,
}: {
  children: React.ReactNode
  className?: string
  large?: boolean
  tightRight?: boolean
  light?: boolean
}) {
  const isTight = large && tightRight
  return (
    <a
      href="/contact"
      className={`group inline-flex items-center justify-center gap-2 font-medium rounded-full transition-colors whitespace-nowrap ${light ? "bg-white text-[#171717] hover:bg-gray-100" : "text-white hover:bg-gray-800"} ${large ? "text-[19px] gap-[10px] pl-5 " + (isTight ? "pr-0" : "pr-2") : "text-sm"} ${className ?? ""}`}
      style={!light ? { backgroundColor: '#171717' } : {}}
    >
      {children}
      <span
        className={`relative flex-shrink-0 rounded-full flex items-center justify-center overflow-hidden ${large ? "min-w-[40px] min-h-[40px] w-[40px] h-[40px]" : "w-5 h-5"} ${isTight ? "-mr-3" : ""}`}
      >
        <span
          className={`absolute inset-0 rounded-full ${light ? "bg-[#2A00FF]" : "bg-white"}`}
        />
        <span
          className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center"
          style={{ backgroundColor: light ? "#171717" : "#2A00FF" }}
        />
        <svg
          className={`relative z-10 ${large ? "w-5 h-5" : "w-3 h-3"} ${light ? "text-white" : "text-black"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </a>
  )
}
