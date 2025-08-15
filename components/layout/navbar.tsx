"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Logo } from "@/components/icons/logo"
import { Button } from "@/components/ui/button"
import { NAV_LINKS, COMPANY_PHONE, COMPANY_EMAIL } from "@/lib/constants"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <>
      {/* Top bar for contact info - hidden on small screens, visible md and up */}
      <div className="bg-slate-800 text-white py-2 px-4 md:px-6 hidden md:block">
        <div className="container mx-auto flex justify-end items-center text-xs">
          <a href={`tel:${COMPANY_PHONE}`} className="flex items-center mr-4 hover:text-amber-400 transition-colors">
            <Phone size={14} className="mr-1.5" /> {COMPANY_PHONE}
          </a>
          <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center hover:text-amber-400 transition-colors">
            <Mail size={14} className="mr-1.5" /> {COMPANY_EMAIL}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <Logo />
          </Link>
          <nav className="hidden items-center space-x-6 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-teal-600",
                  pathname === link.href ? "text-teal-600" : "text-slate-700",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center">
            <Button asChild size="sm" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/contact#quote">Request Pickup</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 z-40 bg-white border-t border-b border-slate-200 shadow-lg">
            <nav className="flex flex-col space-y-2 p-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMobileMenu}
                  className={cn(
                    "block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-slate-100 hover:text-teal-600",
                    pathname === link.href ? "bg-teal-50 text-teal-600" : "text-slate-700",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-4 bg-teal-600 hover:bg-teal-700" onClick={toggleMobileMenu}>
                <Link href="/contact#quote">Get a Quote</Link>
              </Button>
              <div className="border-t pt-4 mt-4">
                <a
                  href={`tel:${COMPANY_PHONE}`}
                  className="flex items-center text-sm text-slate-600 hover:text-teal-600 py-1"
                >
                  <Phone size={16} className="mr-2 text-teal-600" /> {COMPANY_PHONE}
                </a>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="flex items-center text-sm text-slate-600 hover:text-teal-600 py-1"
                >
                  <Mail size={16} className="mr-2 text-teal-600" /> {COMPANY_EMAIL}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
