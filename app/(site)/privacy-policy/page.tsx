import { PageHeader } from "@/components/ui/page-header"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import type { Metadata } from "next"
import { COMPANY_NAME, COMPANY_ADDRESS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Read the privacy policy for ${COMPANY_NAME}.`,
  robots: { index: false, follow: false }, // Usually noindexed
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <SectionWrapper>
        <div className="prose prose-lg max-w-none">
          <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString("en-AU")}</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to {COMPANY_NAME}'s Privacy Policy. We are committed to protecting your personal information and
            your right to privacy. If you have any questions or concerns about this privacy notice, or our practices
            with regards to your personal information, please contact us at [Your DPO Email or
            adikazrecyclingcompany@gmail.com].
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining
            information about us or our products and Services, when you participate in activities on the Website or
            otherwise when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the
            Website, the choices you make and the products and features you use. The personal information we collect may
            include the following: Name, Email Address, Phone Number, Mailing Address, Job Title, Company Name, and any
            other information you choose to provide.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use personal information collected via our Website for a variety of business purposes described below. We
            process your personal information for these purposes in reliance on our legitimate business interests, in
            order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal
            obligations.
          </p>
          <ul>
            <li>To provide and manage your requested services.</li>
            <li>To respond to user inquiries/offer support to users.</li>
            <li>To send administrative information to you.</li>
            <li>To send you marketing and promotional communications.</li>
            {/* Add more specific uses */}
          </ul>

          <h2>4. Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect
            your rights, or to fulfill business obligations.
          </p>

          <h2>5. How Long Do We Keep Your Information?</h2>
          <p>
            We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice
            unless otherwise required by law.
          </p>

          <h2>6. How Do We Keep Your Information Safe?</h2>
          <p>
            We aim to protect your personal information through a system of organizational and technical security
            measures.
          </p>

          <h2>7. What Are Your Privacy Rights?</h2>
          <p>
            In Australia, you have rights that allow you greater access to and control over your personal information
            under the Australian Privacy Principles (APPs). You may review, change, or terminate your account at any
            time.
          </p>

          <h2>8. Controls for Do-Not-Track Features</h2>
          <p>
            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”)
            feature or setting you can activate to signal your privacy preference not to have data about your online
            browsing activities monitored and collected. At this stage no uniform technology standard for recognizing
            and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals
            or any other mechanism that automatically communicates your choice not to be tracked online.
          </p>

          <h2>9. Updates to This Notice</h2>
          <p>
            We may update this privacy notice from time to time. The updated version will be indicated by an updated
            "Revised" date and the updated version will be effective as soon as it is accessible.
          </p>

          <h2>10. How Can You Contact Us About This Notice?</h2>
          <p>
            If you have questions or comments about this notice, you may email us at [adikazrecyclingcompany@gmail.com]
            or by post to:
          </p>
          <p>
            {COMPANY_NAME}
            <br />
            {COMPANY_ADDRESS}
            <br />
            Australia
          </p>
        </div>
      </SectionWrapper>
    </>
  )
}
