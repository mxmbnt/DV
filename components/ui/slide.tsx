import { ArrowUpRight, Plus } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

function Slide({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="slide"
      className={cn(
        "glass-3 group text-card-foreground relative flex flex-col overflow-hidden rounded-xl shadow-xl transition-all",
        className,
      )}
      {...props}
    />
  )
}

function SlideTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="slide-title"
      className={cn("text-[16px] font-semibold tracking-tight text-gray-900", className)}
      {...props}
    />
  )
}

function SlideDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="slide-description"
      className={cn("text-gray-500 text-[16px] text-balance", className)}
      {...props}
    />
  )
}

function SlideContent({
  className,
  isExpanded,
  ...props
}: React.ComponentProps<"div"> & { isExpanded?: boolean }) {
  return (
    <div
      data-slot="slide-content"
      className={cn(
        "flex flex-col gap-2 p-6 transition-opacity duration-300",
        isExpanded ? "opacity-0" : "opacity-100",
        className,
      )}
      {...props}
    />
  )
}

function SlideVisual({
  className,
  isExpanded,
  ...props
}: React.ComponentProps<"div"> & { isExpanded?: boolean }) {
  return (
    <div
      data-slot="slide-visual"
      className={cn(
        "flex items-center transition-opacity duration-300",
        isExpanded ? "opacity-0" : "opacity-100",
        className,
      )}
      {...props}
    />
  )
}

function SlideExpandedContent({
  className,
  isExpanded,
  ...props
}: React.ComponentProps<"div"> & { isExpanded?: boolean }) {
  return (
    <div
      data-slot="slide-expanded-content"
      className={cn(
        "text-gray-600 absolute inset-6 text-[16px] text-balance transition-opacity duration-300",
        isExpanded ? "opacity-100" : "opacity-0",
        className,
      )}
      {...props}
    />
  )
}

function SlideButton({
  className,
  isExpanded,
  icon = "more",
  ...props
}: React.ComponentProps<"button"> & {
  isExpanded?: boolean
  icon?: "link" | "more"
}) {
  return (
    <button
      type="button"
      data-slot="slide-button"
      {...props}
      className={cn(
        "bg-white/90 backdrop-blur pointer-events-none absolute right-6 bottom-6 z-10 flex size-10 items-center justify-center rounded-full border border-gray-200 shadow-md",
        className,
      )}
    >
      {icon === "link" ? (
        <ArrowUpRight className="size-4 text-gray-700" />
      ) : (
        <Plus
          className={cn(
            "size-4 text-gray-700 transition-transform",
            isExpanded ? "rotate-45" : "group-hover:rotate-90",
          )}
        />
      )}
    </button>
  )
}

export {
  Slide,
  SlideButton,
  SlideContent,
  SlideDescription,
  SlideExpandedContent,
  SlideTitle,
  SlideVisual,
}
