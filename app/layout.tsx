import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Toaster } from "sonner"
import { COMPANY_NAME, COMPANY_SLOGAN } from "@/lib/constants"
import { ScrollToTopButton } from "@/components/ui/scroll-to-top-button" // Import the new component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"), // Important for OG images
  title: {
    default: `${COMPANY_NAME} - ${COMPANY_SLOGAN}`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Leading free e-waste recycling services in Sydney. We offer free secure data destruction, eco-friendly electronics recycling, free pick up, and free disposal.",
  keywords: [
    "e-waste recycling Sydney",
    "electronics disposal Sydney",
    "secure data destruction Sydney",
    "free recycling Sydney",
    "free e-waste pickup",
    "NTCRS compliance",
    "IT asset disposition Sydney",
  ],
  openGraph: {
    title: `${COMPANY_NAME} - ${COMPANY_SLOGAN}`,
    description: "Free, eco-friendly e-waste recycling and secure data destruction services across Australia.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: COMPANY_NAME,
    // images will be automatically picked up from opengraph-image.tsx / twitter-image.tsx
    locale: "en_AU", // Changed to Australian locale
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} - ${COMPANY_SLOGAN}`,
    description: "Free, eco-friendly e-waste recycling and secure data destruction services across Sydney.",
    // images will be automatically picked up
    // site: '@YourTwitterHandle', // Add your Twitter handle
    // creator: '@YourTwitterHandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/banner-img-1.png",
    shortcut: "/images/banner-img-1.png",
    apple: "/images/banner-img-1.png",
  },
  manifest: "/manifest.webmanifest", // [^2]
}

export const viewport: Viewport = {
  themeColor: "#0D9488", // teal-600
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-800 antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster richColors />
        <ScrollToTopButton /> {/* Add the scroll-to-top button here */}
      </body>
    </html>
  )
}
