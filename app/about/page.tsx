import { PageHeader } from "@/components/ui/page-header"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Target, Leaf, Globe, Award, ShieldCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { COMPANY_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: "About Us - Our Mission and Values",
  description: `Learn about ${COMPANY_NAME}'s commitment to sustainable e-waste recycling, our Australian roots, and our dedication to environmental protection and data security.`,
}

const coreValues = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Prioritizing environmental protection in all our operations, aiming for a circular economy.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Guaranteeing the highest standards of data security and confidentiality for our clients.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "Operating with transparency, honesty, and accountability in every interaction.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Providing exceptional service and tailored solutions to meet diverse client needs.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "Continuously improving our processes and adopting new technologies for better recycling outcomes.",
  },
  {
    icon: Target,
    title: "Responsibility",
    description: "Taking full responsibility for the e-waste we handle, from collection to final processing.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Adikaz Recycling"
        subtitle="Pioneering sustainable e-waste solutions with a commitment to Sydney excellence and environmental stewardship."
      />

      <SectionWrapper id="mission-vision">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our Mission & Vision</h2>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                <strong className="text-teal-600">Our Mission:</strong> To provide secure, efficient, and
                environmentally responsible e-waste recycling services that protect our clients' data and contribute to
                a sustainable future for Sydney.
              </p>
              <p>
                <strong className="text-teal-600">Our Vision:</strong> To be the leading and most trusted e-waste
                management partner in Sydney, recognized for our innovation, integrity, and unwavering commitment to
                the environment and our Sydney heritage.
              </p>
            </div>
            <Button asChild className="mt-10 bg-teal-600 hover:bg-teal-700">
              <Link href="/services">Discover Our Services</Link>
            </Button>
          </div>
          <div>
            <Image
              src="/placeholder.svg?width=500&height=400&text=Our+Dedicated+Team"
              alt="Adikaz Recycling team working"
              width={500}
              height={400}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="core-values" className="bg-slate-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Core Values</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            These principles guide every aspect of our business and our interactions with clients, partners, and the
            community.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value) => (
            <div key={value.title} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <value.icon className="h-10 w-10 text-amber-500 mr-4" />
                <h3 className="text-xl font-semibold text-slate-800">{value.title}</h3>
              </div>
              <p className="text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="eco-initiatives">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?width=500&height=400&text=Green+Technology"
              alt="Illustration of green technology and recycling symbols"
              width={500}
              height={400}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
          <div>
            <Leaf className="h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Our Eco-Initiatives & Australian Roots
            </h2>
            <p className="text-lg text-slate-600 mb-4">
              As a proud Australian company, we are deeply invested in the environmental health of our nation. Our
              initiatives reflect this commitment:
            </p>
            <ul className="space-y-3 text-slate-700 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>
                  <strong>Zero Landfill Policy:</strong> We strive to recycle or recover 100% of the e-waste we process.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>
                  <strong>Community Engagement:</strong> Partnering with local councils and organizations for awareness
                  and collection drives across Australia.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>
                  <strong>Continuous Improvement:</strong> Investing in the latest recycling technologies to reduce our
                  carbon footprint.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>
                  <strong>Supporting Australian Economy:</strong> Prioritizing local suppliers and contributing to a
                  circular economy within Australia.
                </span>
              </li>
            </ul>
            <Button asChild variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
