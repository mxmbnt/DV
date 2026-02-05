import * as React from "react"

import Glow from "@/components/ui/glow"

function ChatIllustration() {
  return (
    <div
      data-slot="chat-illustration"
      className="relative flex w-full flex-col gap-5 p-5 text-sm min-h-[200px] justify-center"
    >
      <div className="flex flex-col items-start gap-4">
        <div className="glass-4 text-gray-600 max-w-[260px] rounded-xl px-4 py-3 shadow-md bg-white/80">
          Bonjour, parlons de votre projet et de vos objectifs.
        </div>
        <div className="border-primary-500/30 bg-primary-500/15 text-gray-800 relative z-10 flex rounded-lg border px-3 py-1.5 shadow-md font-medium">
          Marie L.
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="glass-4 text-gray-600 max-w-[260px] rounded-xl px-4 py-3 shadow-md bg-white/80">
          Parfait, on vous envoie une proposition détaillée sous 48 h.
        </div>
        <div className="glass-4 text-gray-600 max-w-[260px] rounded-xl px-4 py-3 shadow-md bg-white/80">
          C’est noté, à très vite.
        </div>
        <div className="relative z-10">
          <div className="border-gray-200 bg-white text-gray-800 flex rounded-lg border px-3 py-1.5 shadow-md font-medium">
            Digital Vision
          </div>
        </div>
      </div>
      <Glow
        variant="center"
        className="scale-x-[1.5] opacity-20 transition-all duration-300 group-hover:opacity-30"
      />
    </div>
  )
}

export default ChatIllustration
