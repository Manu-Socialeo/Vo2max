import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | VO2 Max Physiotherapy Mysuru",
  description: "Terms and conditions for using the website and services of VO2 Max Physiotherapy in Mysuru.",
  alternates: { canonical: "https://vo2maxclinic.vercel.app/terms-and-conditions" },
  openGraph: {
    title: "Terms & Conditions | VO2 Max Physiotherapy Mysuru",
    description: "Terms and conditions for using the website and services of VO2 Max Physiotherapy in Mysuru.",
    url: "https://vo2maxclinic.vercel.app/terms-and-conditions",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vo2maxclinic.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: "https://vo2maxclinic.vercel.app/terms-and-conditions" },
  ],
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: "By accessing and using the VO2 Max Physiotherapy website and services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services."
  },
  {
    title: "Services",
    content: "We provide physiotherapy, rehabilitation, and fitness services. All services are provided by qualified professionals registered with the Indian Association of Physiotherapists (IAP). Treatment plans are personalized and results may vary from person to person."
  },
  {
    title: "Appointments",
    content: "Appointments must be booked in advance. We request 24 hours' notice for cancellations or rescheduling. Late cancellations or missed appointments may be subject to a charge. We reserve the right to cancel or reschedule appointments due to unforeseen circumstances."
  },
  {
    title: "Payment Terms",
    content: "Payment for services is due at the time of consultation unless otherwise agreed. We accept cash, UPI, and bank transfers. Prices are subject to change with prior notice. Insurance claims assistance is available for applicable policies."
  },
  {
    title: "Medical Disclaimer",
    content: "The information provided on this website is for general informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare professional for medical concerns. Do not disregard professional medical advice based on information from this site."
  },
  {
    title: "User Conduct",
    content: "You agree to use our website and services only for lawful purposes. You must not misuse our services, engage in fraudulent activity, or disrupt the operation of our website. We reserve the right to refuse service to anyone."
  },
  {
    title: "Intellectual Property",
    content: "All content on this website, including text, graphics, logos, and images, is the property of VO2 Max Physiotherapy unless otherwise stated. You may not reproduce, distribute, or modify any content without our written consent."
  },
  {
    title: "Limitation of Liability",
    content: "VO2 Max Physiotherapy shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability is limited to the amount paid for the specific service in question."
  },
  {
    title: "Governing Law",
    content: "These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Mysuru, Karnataka."
  },
  {
    title: "Changes to Terms",
    content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after any changes constitutes acceptance of the new terms."
  },
  {
    title: "Contact",
    content: "For questions about these Terms and Conditions, please contact us at pinakinphysio@yahoo.com or call +919480166770."
  },
];

export default function TermsPage() {
  return (
    <div className="bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 hover:text-white transition-colors">
            <ArrowLeft className="h-3 w-3" /> Back to Home
          </Link>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Terms and Conditions
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-xs text-slate-300">
            Last updated: January 2025
          </p>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-slate-50/70">
        <div className="mx-auto max-w-[880px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs sm:p-12">
            <p className="text-sm text-slate-600 leading-relaxed">
              Please read these Terms and Conditions carefully before using our website and services.
            </p>
            <div className="mt-8 space-y-8">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="text-base font-bold text-slate-900 mb-2">{s.title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
