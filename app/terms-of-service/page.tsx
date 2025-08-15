import { PageHeader } from "@/components/ui/page-header"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import type { Metadata } from "next"
import { COMPANY_NAME, COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Read the terms of service for ${COMPANY_NAME}.`,
  robots: { index: false, follow: false }, // Usually noindexed
}

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader title="Terms of Service" />
      <SectionWrapper>
        <div className="prose prose-lg max-w-none">
          <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString("en-AU")}</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on
            behalf of an entity (“you”) and {COMPANY_NAME} (“Company“, “we”, “us”, or “our”), concerning your access to
            and use of the [YourWebsite.com] website as well as any other media form, media channel, mobile website or
            mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
          </p>
          <p>
            You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these
            Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited
            from using the Site and you must discontinue use immediately.
          </p>

          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases,
            functionality, software, website designs, audio, video, text, photographs, and graphics on the Site
            (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”)
            are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and
            various other intellectual property rights and unfair competition laws of Australia, foreign jurisdictions,
            and international conventions.
          </p>

          <h2>3. User Representations</h2>
          <p>
            By using the Site, you represent and warrant that: (1) all registration information you submit will be true,
            accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update
            such registration information as necessary; (3) you have the legal capacity and you agree to comply with
            these Terms of Service; ...
          </p>
          {/* Add more sections as needed: Prohibited Activities, User Generated Contributions, Site Management, Term and Termination, Modifications and Interruptions, Governing Law, Dispute Resolution, Disclaimer, Limitations of Liability, Indemnification, User Data, Miscellaneous */}

          <h2>4. Prohibited Activities</h2>
          <p>
            You may not access or use the Site for any purpose other than that for which we make the Site available. The
            Site may not be used in connection with any commercial endeavors except those that are specifically endorsed
            or approved by us.
          </p>

          <h2>5. Governing Law</h2>
          <p>
            These Terms shall be governed by and defined following the laws of Australia. {COMPANY_NAME} and yourself
            irrevocably consent that the courts of Australia shall have exclusive jurisdiction to resolve any dispute
            which may arise in connection with these terms.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the
            Site, please contact us at:
          </p>
          <p>
            {COMPANY_NAME}
            <br />
            {COMPANY_ADDRESS}
            <br />
            Australia
            <br />
            {COMPANY_EMAIL} / {COMPANY_PHONE}
          </p>
        </div>
      </SectionWrapper>
    </>
  )
}
