"use client"
import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact/contact-form"
import { PageHeader } from "@/components/ui/page-header"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS } from "@/lib/constants"


export default function ContactPage() {
  return (
    <div className="min-h-screen">
  <PageHeader title="Contact Us" subtitle="Get in touch for free e-waste collection and recycling services" />

      <SectionWrapper className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>
                <p className="text-slate-600 mb-8">
                  Ready to responsibly dispose of your electronic waste? Contact us today for free collection and secure
                  recycling services across Sydney.
                </p>
              </div>

              <div className="grid gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Phone className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Phone</h3>
                        <p className="text-slate-600">Call us for immediate assistance</p>
                        <a href={`tel:${COMPANY_PHONE}`} className="text-teal-600 hover:text-teal-700 font-medium">
                          {COMPANY_PHONE}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Mail className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Email</h3>
                        <p className="text-slate-600">Send us your questions</p>
                        <a
                          href={`mailto:${COMPANY_EMAIL}`}
                          className="text-teal-600 hover:text-teal-700 font-medium break-all"
                        >
                          {COMPANY_EMAIL}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <MapPin className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Address</h3>
                        <p className="text-slate-600">Visit our facility</p>
                        <p className="text-slate-700 font-medium">{COMPANY_ADDRESS}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Clock className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Business Hours</h3>
                        <p className="text-slate-600">When we're available</p>
                        <div className="text-slate-700">
                          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                          <p>Saturday: 9:00 AM - 2:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Our Location</h2>
            <Card>
              <CardContent className="p-0">
                <div className="relative w-full h-96 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.8234567890123!2d150.9876543210987!3d-33.8567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a1234567890a%3A0x1234567890abcdef!2s565%20Woodville%20Rd%2C%20Guildford%20NSW%202161%2C%20Australia!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Adikaz electronic recycling company location"
                  />
                </div>
                <div className="p-6 bg-slate-50">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-teal-600" />
                    <div>
                      <p className="font-semibold text-slate-900">{COMPANY_NAME}</p>
                      <p className="text-slate-600">{COMPANY_ADDRESS}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 mt-3">
                    Conveniently located in Guildford, Sydney. Easy access for drop-offs and pickups throughout the
                    Greater Sydney area.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
