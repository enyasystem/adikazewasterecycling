import { PageHeader } from "@/components/ui/page-header"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Truck,
  ShieldCheck,
  RecycleIcon,
  Cpu,
  HardDrive,
  Smartphone,
  Laptop,
  CheckCircle,
  FileText,
  DatabaseZap,
  ShovelIcon as Shredder,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { COMPANY_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Our Free E-Waste Recycling Services",
  description: `Discover ${COMPANY_NAME}'s comprehensive free e-waste services: free collection, certified data destruction, and environmentally friendly recycling processes in Australia.`,
}

const collectionMethods = [
  {
    title: "Free Business Collections",
    description:
      "Scheduled free pickups for offices, schools, and organizations of all sizes across Australia. We handle everything from a few items to full truckloads.",
    icon: Truck,
  },
  {
    title: "Free Residential Drop-off Points",
    description: "Conveniently located free drop-off centers for household e-waste. Check our locations map.",
    icon: RecycleIcon,
  },
  {
    title: "Special Event Collections",
    description: "Community recycling drives and bespoke collection events. Contact us to organize one.",
    icon: Cpu,
  },
]

const acceptedItems = [
  { name: "Computers & Laptops", icon: Laptop },
  { name: "Servers & Networking Gear", icon: Cpu },
  { name: "Mobile Phones & Tablets", icon: Smartphone },
  { name: "Printers & Scanners", icon: FileText },
  { name: "Monitors & Displays", icon: HardDrive }, // Using HardDrive as a placeholder for monitor
  { name: "Cables & Peripherals", icon: RecycleIcon },
  { name: "Small Household Appliances", icon: RecycleIcon },
  { name: "Telecoms Equipment", icon: RecycleIcon },
]

const dataDestructionFeatures = [
  {
    text: "Certified Data Wiping: Software-based erasure meeting Australian government standards (e.g., ADF ISM Guidelines).",
    icon: DatabaseZap,
  },
  {
    text: "Physical Destruction: Shredding of hard drives and other storage media for ultimate security.",
    icon: Shredder,
  },
  {
    text: "On-site Services: Data destruction can be performed at your premises for maximum peace of mind.",
    icon: ShieldCheck,
  },
  { text: "Certificates of Destruction: Full documentation provided for compliance and audit trails.", icon: FileText },
  {
    text: "Australian Privacy Principles (APPs) & NTCRS Compliant: Adherence to all relevant data protection and environmental regulations.",
    icon: CheckCircle,
  },
]

const recyclingSteps = [
  {
    id: 1,
    title: "Free Collection & Sorting",
    description:
      "E-waste is collected for free and meticulously sorted by type and material at our secure Australian facility.",
    icon: Truck,
  },
  {
    id: 2,
    title: "Manual Dismantling",
    description:
      "Items are carefully dismantled by trained technicians to separate components and hazardous materials.",
    icon: Cpu,
  },
  {
    id: 3,
    title: "Data Destruction (if applicable)",
    description: "All data-bearing devices undergo certified data erasure or physical destruction.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Material Separation",
    description:
      "Advanced mechanical and manual processes separate plastics, metals (ferrous & non-ferrous), glass, and circuit boards.",
    icon: RecycleIcon,
  },
  {
    id: 5,
    title: "Commodity Recovery",
    description: "Separated materials are processed into reusable commodities for manufacturing new products.",
    icon: RecycleIcon,
  },
  {
    id: 6,
    title: "Responsible Disposal (Free)",
    description:
      "Any non-recyclable materials are disposed of in an environmentally sound manner, adhering to our zero-landfill policy, all at no cost to you.",
    icon: CheckCircle,
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Comprehensive Free E-Waste Solutions"
        subtitle="From free secure collection and data destruction to eco-friendly recycling, we manage your electronic waste responsibly across Australia."
      />

      {/* E-Waste Collection Section */}
      <SectionWrapper id="collection">
        <div className="text-center mb-12">
          <Truck className="h-16 w-16 text-teal-600 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Free E-Waste Collection Services</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We make it easy for businesses and individuals to recycle their e-waste with flexible and convenient free
            collection options.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {collectionMethods.map((method) => (
            <Card key={method.title} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <method.icon className="h-8 w-8 text-teal-600 mr-3" />
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-slate-700 mb-6">What We Accept</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {acceptedItems.map((item) => (
              <div key={item.name} className="flex flex-col items-center p-4 bg-slate-50 rounded-lg shadow-sm">
                <item.icon className="h-10 w-10 text-teal-500 mb-2" />
                <span className="text-sm text-slate-700 text-center">{item.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-slate-600">
            Unsure about an item?{" "}
            <Link href="/contact" className="text-teal-600 hover:underline">
              Contact us
            </Link>{" "}
            for clarification.
          </p>
        </div>
      </SectionWrapper>

      {/* Secure Data Destruction Section */}
      <SectionWrapper id="data-destruction" className="bg-slate-100">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?width=500&height=450&text=Secure+Data+Shredding"
              alt="Secure data destruction process"
              width={500}
              height={450}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
          <div>
            <ShieldCheck className="h-16 w-16 text-teal-600 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Secure Data Destruction</h2>
            <p className="text-lg text-slate-600 mb-8">
              Protecting your sensitive information is our top priority. We offer certified and compliant data
              destruction services.
            </p>
            <ul className="space-y-4">
              {dataDestructionFeatures.map((feature) => (
                <li key={feature.text} className="flex">
                  <feature.icon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">{feature.text}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-10 bg-teal-600 hover:bg-teal-700">
              <Link href="/contact#quote">Request Data Destruction Service</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Recycling Process Section */}
      <SectionWrapper id="recycling-process">
        <div className="text-center mb-12">
          <RecycleIcon className="h-16 w-16 text-teal-600 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Eco-Friendly Recycling Process</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We follow a meticulous, environmentally conscious process to maximize resource recovery and minimize waste.
          </p>
        </div>
        <div className="relative">
          {/* Desktop: Vertical line for timeline effect */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-teal-200 transform -translate-x-1/2"></div>

          {recyclingSteps.map((step, index) => (
            <div
              key={step.id}
              className={`mb-8 flex md:items-center w-full ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              <div className="hidden md:flex w-1/2"></div> {/* Spacer for desktop */}
              <div className="hidden md:flex justify-center w-16">
                <div className="h-10 w-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold shadow-md z-10">
                  {step.id}
                </div>
              </div>
              <Card
                className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:mr-auto md:ml-8" : "md:ml-auto md:mr-8"} shadow-lg`}
              >
                <CardHeader>
                  <div className="flex items-center">
                    <step.icon className="h-8 w-8 text-teal-500 mr-3" />
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild className="bg-amber-500 hover:bg-amber-600 text-slate-900">
            <Link href="/contact">Schedule Your Free E-Waste Service</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  )
}
