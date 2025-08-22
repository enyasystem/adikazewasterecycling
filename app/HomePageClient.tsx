"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/componlllents/ui/button"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ShieldCheck, RecycleIcon, Truck, Leaf, Users } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

// Define the content for each hero slide
const heroSlides = [
  {
    title: `Free & Secure E-Waste Recycling in Sydney`,
    description: `Adikaz Company offers free, eco-friendly solutions for your unwanted electronics. Enjoy free pick up and free disposal, ensuring your data is secure and the environment is protected.`,
    image: "/images/banner3.png",
    alt: "People recycling electronics into a large green bin",
  },
  {
    title: `Convenient Free Pick Up & Disposal`,
    description: `Say goodbye to old electronics effortlessly. We provide free pick up services for businesses and individuals across Sydney, making responsible disposal simple and accessible.`,
    image: "/images/banner2.png",
    alt: "Woman disposing of e-waste into a bin",
  },
  {
    title: `Committed to a Greener Sydney`,
    description: `Join us in building a sustainable future. Our certified processes ensure maximum material recovery and secure data destruction, all at no cost to you.`,
    image: "/images/banner1.png",
    alt: "Woman holding recycling bins with plastic and cans",
  },
]

const coreServices = [
  {
    title: "Free E-Waste Collection",
    description: "Convenient and free pick-up services for businesses and individuals across Sydney.",
    icon: Truck,
  },
  {
    title: "Certified Data Destruction",
    description: "Secure and compliant data wiping and physical destruction for all devices.",
    icon: ShieldCheck,
  },
  {
    title: "Eco-Friendly Recycling",
    description: "Advanced processes to recover materials and minimize environmental impact.",
    icon: RecycleIcon,
  },
]

const whyChooseUsFeatures = [
  {
    title: "Free & Convenient",
    description: "Enjoy free electronic recycling, including free pick up and free disposal services.",
    icon: CheckCircle,
  },
  {
    title: "Data Security Guaranteed",
    description: "Certified data destruction methods ensure your sensitive information is protected.",
    icon: ShieldCheck,
  },
  {
    title: "Environmentally Responsible",
    description: "Committed to zero-landfill and maximizing resource recovery for a greener Sydney.",
    icon: Leaf,
  },
  {
    title: "Sydney Owned & Operated",
    description: "Proudly serving communities across Sydney with local expertise and dedication.",
    icon: Users,
  },
]

const faqItems = [
  {
    question: "What types of electronics do you accept for free recycling?",
    answer:
      "We accept a wide range of electronic waste, including computers, laptops, monitors, printers, mobile phones, tablets, servers, networking equipment, and small household appliances. If you're unsure about a specific item, please contact us.",
  },
  {
    question: "Is the pick-up service really free?",
    answer:
      "Yes, our standard electronic waste pick-up service for eligible items is completely free for both businesses and residential customers within our service areas. Contact us to confirm eligibility and schedule your free pick up.",
  },
  {
    question: "What happens to the electronics after they are collected?",
    answer:
      "Collected electronics undergo a meticulous process of sorting, manual dismantling, and material separation. Valuable materials like metals, plastics, and glass are recovered for reuse, minimizing waste and supporting a circular economy in Australia.",
  },
  {
    question: "Are you compliant with Sydney recycling regulations?",
    answer:
      "Absolutely. We adhere to all relevant Sydney environmental regulations, including the National Television and Computer Recycling Scheme (NTCRS), and follow the Australian Privacy Principles (APPs) for data handling.",
  },
  {
    question: "Can I drop off my e-waste?",
    answer:
      "We have conveniently located drop-off points for residential e-waste. Please check our Contact page or call us for the nearest location and opening hours.",
  },
]

export default function HomePageClient() {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }))
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) {
      return
    }
    // Explicitly play if not playing, useful for initial load or after manual interaction
    if (api.plugins().autoplay && !api.plugins().autoplay.isPlaying()) {
      api.plugins().autoplay.play()
    }
  }, [api])

  return (
    <>
      {/* Hero Section - Carousel */}
      <section className="relative bg-slate-50 text-slate-800 py-12 md:py-20 overflow-hidden">
        <Carousel opts={{ loop: true }} plugins={[plugin.current]} className="w-full" setApi={setApi}>
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-4 md:px-6">
                  {/* Text Content */}
                  <div className="md:order-1 order-2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-balance">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto md:mx-0 text-balance">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                        <Link href="/services">Explore Services</Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-white"
                      >
                        <Link href="/contact#quote">Get a Free Quote</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Image Content */}
                  <div className="md:order-2 order-1 relative flex justify-center items-center md:h-[450px] h-[300px]">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.alt}
                      width={600}
                      height={450}
                      priority={index === 0} // Only preload the first image
                      className="rounded-lg shadow-xl object-contain mx-auto max-h-full max-w-full"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex bg-white hover:bg-slate-100 text-teal-600 border-teal-600" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex bg-white hover:bg-slate-100 text-teal-600 border-teal-600" />
        </Carousel>
      </section>

      {/* Our Core Services Section */}
      <SectionWrapper id="services">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Core Services</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Adikaz Company provides comprehensive, free, and secure solutions for your electronic waste.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {coreServices.map((service) => (
            <Card key={service.title} className="text-center shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <motion.div
                  className="p-4 bg-teal-100 rounded-full mb-4 inline-block mx-auto"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <service.icon className="h-8 w-8 text-teal-600" />
                </motion.div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Adikaz Recycling? Section */}
      <SectionWrapper id="why-us" className="bg-slate-100">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Why Choose Adikaz Company?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We are Sydney's trusted partner for responsible and free e-waste management, committed to security,
              sustainability, and convenience.
            </p>
            <ul className="space-y-4">
              {whyChooseUsFeatures.map((feature) => (
                <li key={feature.title} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-10 bg-teal-600 hover:bg-teal-700 text-white">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="relative flex justify-center items-center">
            <Image
              src="/images/banner1.png"
              alt="Woman holding recycling bins"
              width={500}
              height={500}
              className="rounded-lg shadow-xl object-contain mx-auto"
            />
            {/* Animated Recycling Symbol with Particles */}
            <div className="absolute top-0 right-20 -mt-4 -mr-4 w-20 h-20 md:w-24 md:h-24 z-10">
              <div className="relative w-full h-full">
                <Image
                  src="/images/recycling-symbol-animated.png"
                  alt="Rotating recycling symbol"
                  layout="fill"
                  objectFit="contain"
                  className="animate-spin-slow"
                />
                <div className="particle-container">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className={`particle particle-${i + 1}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Call to Action Section */}
      <SectionWrapper id="cta">
        <div className="text-center bg-teal-600 text-white p-10 rounded-lg shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Recycle Your Electronics for Free?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your free pick up or find a drop-off location near you.
          </p>
          <Button asChild size="lg" className="bg-white hover:bg-slate-100 text-teal-600 font-bold border border-white">
            <Link href="/contact">Get Started Now</Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper id="faq">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Find quick answers to common questions about our free e-waste recycling services.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-700 hover:text-teal-600">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SectionWrapper>
    </>
  )
}
