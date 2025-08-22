import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import type { ReactNode } from "react"

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
