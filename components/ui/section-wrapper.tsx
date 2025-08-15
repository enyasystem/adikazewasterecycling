import type React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: keyof JSX.IntrinsicElements // Allows specifying semantic element like 'section', 'div', etc.
}

export function SectionWrapper({ children, className, id, as: Component = "section" }: SectionWrapperProps) {
  return (
    <Component id={id} className={cn("py-12 md:py-20", className)}>
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </Component>
  )
}
