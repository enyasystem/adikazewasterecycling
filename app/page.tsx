import type { Metadata } from "next"
import { COMPANY_NAME } from "@/lib/constants"
import HomePageClient from "./HomePageClient"

export const metadata: Metadata = {
  title: `Welcome to ${COMPANY_NAME}`,
  description: `Your trusted partner for secure and sustainable e-waste recycling in the UK. We offer collection, data destruction, and eco-friendly processing.`,
}

export default function HomePage() {
  return <HomePageClient />
}
