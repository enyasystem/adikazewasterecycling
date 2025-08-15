import type React from "react"
interface PageHeaderProps {
  title: string
  subtitle?: string
  className?: string
  children?: React.ReactNode
}

export function PageHeader({ title, subtitle, className, children }: PageHeaderProps) {
  return (
    <section className={`py-16 md:py-24 bg-teal-600 text-white ${className}`}>
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
