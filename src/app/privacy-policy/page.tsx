import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Privacy Policy | VO2 Max Physiotherapy Mysuru",
  description: "Privacy policy for VO2 Max Physiotherapy Rehabilitation & Fitness Center in Mysuru. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://vo2maxclinic.vercel.app/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | VO2 Max Physiotherapy Mysuru",
    description: "Privacy policy for VO2 Max Physiotherapy Rehabilitation & Fitness Center in Mysuru. Learn how we collect, use, and protect your personal information.",
    url: "https://vo2maxclinic.vercel.app/privacy-policy",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vo2maxclinic.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://vo2maxclinic.vercel.app/privacy-policy" },
  ],
};

const sections = [
  {
    id: "information",
    title: "Information",
    content: (
      <>
        <p>
          While using our Site, we may ask you to provide us with certain personally identifiable information
          that can be used to contact or identify you. Personally identifiable information may include, but is
          not limited to, your name, email address, phone number, and health-related information you choose to share.
        </p>
        <h4 className="mt-6 text-[16px] font-medium">Information we collect</h4>
        <p className="mt-2">We may collect various types of information from and about users of our Services:</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-foreground/70">
          <li><strong>Personal Information:</strong> We may collect personally identifiable information, such as your name, email address, postal address, phone number, and other similar information when you provide it voluntarily or when you interact with our Services.</li>
          <li><strong>Health Information:</strong> With your explicit consent, we may collect health-related information necessary for providing physiotherapy services.</li>
          <li><strong>Usage Data:</strong> We may collect information about how you use our Services, including your access times, browser types, and language preferences.</li>
          <li><strong>Device Information:</strong> We may collect information about the device you are using to access our Services, including the hardware model, operating system, and unique device identifiers.</li>
        </ol>
        <h4 className="mt-6 text-[16px] font-medium">How we use your information</h4>
        <p className="mt-2">We may use the information we collect for various purposes, including:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-foreground/70">
          <li>To provide, maintain, and improve our physiotherapy Services.</li>
          <li>To schedule and manage appointments.</li>
          <li>To respond to your comments, questions, and requests.</li>
          <li>To send you technical notices, updates, and support messages.</li>
          <li>To communicate with you about services, promotions, and news we think will be of interest.</li>
          <li>To monitor and analyze usage patterns and trends.</li>
        </ul>
      </>
    ),
  },
  {
    id: "log-data",
    title: "Log Data",
    content: (
      <p>
        We collect log data when you interact with our Services. This log data includes your computer&rsquo;s
        IP address, browser type, browser version, the pages you visit, the time and date of your visit,
        the time spent on those pages, and other statistics. This information is used for analyzing trends,
        administering the site, and gathering demographic information.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <p>
        Cookies are files with a small amount of data, which may include an anonymous unique identifier.
        Cookies are sent to your browser from a website and stored on your computer&rsquo;s hard drive.
        Our Services use cookies and similar technologies to enhance your experience. You can instruct your
        browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not
        accept cookies, you may not be able to use some portions of our Services.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <p>
        The security of your Personal Information is important to us. We employ industry-standard security
        measures to safeguard your data from unauthorized access, alteration, disclosure, or destruction.
        Despite these efforts, please be aware that no method of transmission over the internet or electronic
        storage is 100% secure, and we cannot guarantee absolute security. We comply with applicable Indian
        data protection laws and healthcare privacy regulations.
      </p>
    ),
  },
  {
    id: "external-links",
    title: "External Links",
    content: (
      <p>
        Our Site may contain links to external sites that are not operated by us. Please be aware that we
        have no control over the content and practices of these sites and cannot accept responsibility or
        liability for their respective privacy policies. We encourage you to review the privacy policies of
        these external sites before providing them with any personal information.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes",
    content: (
      <p>
        This Privacy Policy will remain in effect except with respect to any changes in its provisions in the
        future, which will be in effect immediately after being posted on this page. We reserve the right to
        update or change our Privacy Policy at any time. Your continued use of the Service after we post any
        modifications will constitute your acknowledgment of the modifications and your consent to abide by
        the modified Privacy Policy.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: (
      <p>
        If you have any questions about this Privacy Policy, please contact us at{" "}
        <a href={`mailto:${clinic.email}`} className="text-primary hover:underline">{clinic.email}</a>{" "}
        or call <a href={`tel:${clinic.phone}`} className="text-primary hover:underline">{clinic.phone}</a>.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <Link href="/" className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 hover:text-white transition-colors">
            <ArrowLeft className="h-3 w-3" /> Back to Home
          </Link>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-xs text-slate-300">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-slate-50/70">
        <div className="mx-auto max-w-[880px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs sm:p-12">
            <p className="text-sm text-slate-600 leading-relaxed">
              At VO2 Max Physiotherapy Rehabilitation &amp; Fitness Center, we take your privacy seriously.
              This Privacy Policy describes how we collect, use, and protect your personal information when
              you use our website and services.
            </p>
            <div className="mt-8 space-y-10">
              {sections.map((s) => (
                <div key={s.id} id={s.id}>
                  <h2 className="text-lg font-bold text-slate-900 mb-3">{s.title}</h2>
                  <div className="text-sm text-slate-600 leading-relaxed">{s.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
