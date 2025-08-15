import Link from "next/link"
import { Logo } from "@/components/icons/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react"
import { NAV_LINKS, COMPANY_NAME, COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE, SOCIAL_LINKS } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div className="space-y-4">
            <Link href="/">
              <Logo className="[&>span]:text-white" />
            </Link>
            <p className="text-sm">
              {COMPANY_NAME} is dedicated to providing secure, eco-friendly e-waste recycling solutions across
              Sydney.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-amber-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-amber-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <address className="not-italic space-y-2 text-sm">
              <p>{COMPANY_ADDRESS}</p>
              <p>
                <a href={`tel:${COMPANY_PHONE}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY_PHONE}
                </a>
              </p>
              <p>
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY_EMAIL}
                </a>
              </p>
            </address>
          </div>

          {/* Column 4: Newsletter (Optional) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-sm mb-3">
              Subscribe to our newsletter for the latest on e-waste recycling and special offers.
            </p>
            <form className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 rounded-r-none focus:border-amber-500"
              />
              <Button
                type="submit"
                variant="default"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-l-none px-3"
              >
                <ArrowRight size={18} />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} {COMPANY_NAME}. All rights reserved.
          </p>
          <p className="mt-1">&nbsp;</p>
        </div>
      </div>
    </footer>
  )
}
