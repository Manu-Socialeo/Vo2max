import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Cookie Policy | VO2 Max Physiotherapy Mysuru",
  description: "Cookie policy for VO2 Max Physiotherapy Rehabilitation & Fitness Center in Mysuru. Learn about how we use cookies on our website.",
  alternates: { canonical: "https://vo2max.in/cookie-policy" },
  openGraph: {
    title: "Cookie Policy | VO2 Max Physiotherapy Mysuru",
    description: "Cookie policy for VO2 Max Physiotherapy Rehabilitation & Fitness Center in Mysuru. Learn about how we use cookies on our website.",
    url: "https://vo2max.in/cookie-policy",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vo2max.in" },
    { "@type": "ListItem", position: 2, name: "Cookie Policy", item: "https://vo2max.in/cookie-policy" },
  ],
};

const sections = [
  {
    id: "what-are-cookies",
    title: "What Are Cookies",
    content: (
      <p>
        Cookies are small text files stored on your device (computer, tablet, or mobile) when
        you visit a website. They are widely used to make websites work efficiently and provide
        useful information to website owners. Cookies enable the website to remember your actions
        and preferences over a period of time, so you do not have to re-enter them each time you
        return to the site or browse from one page to another.
      </p>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Cookies",
    content: (
      <p>
        We use cookies to enhance your browsing experience, analyze website traffic, and
        understand where our visitors come from. Specifically, cookies help us to remember your
        preferences, recognize you when you return to our site, and improve the overall
        performance and relevance of our website content. We also use cookies for security
        purposes and to prevent fraudulent activity.
      </p>
    ),
  },
  {
    id: "types-of-cookies",
    title: "Types of Cookies We Use",
    content: (
      <>
        <p className="mb-4">We use the following categories of cookies on our website:</p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Essential Cookies:</strong> These are necessary for the basic functioning of
            our website. They enable core features such as security, network management, and
            accessibility. The website cannot function properly without these cookies.
          </li>
          <li>
            <strong>Performance Cookies:</strong> These cookies help us understand how visitors
            interact with our website by collecting and reporting anonymous information. This
            data helps us improve the site&rsquo;s performance and user experience.
          </li>
          <li>
            <strong>Functional Cookies:</strong> These cookies remember choices you make on our
            site, such as language preferences, to provide a more personalized experience.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> These cookies collect information about how you
            use our website, including pages visited and links clicked. All data is aggregated
            and anonymized.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "managing-cookies",
    title: "Managing Cookies",
    content: (
      <p>
        Most web browsers allow you to control cookies through their settings. You can set your
        browser to block or delete cookies, but please note that some parts of our website may
        not function properly if you disable them. Below are links to instructions for managing
        cookies on popular browsers:
      </p>
    ),
  },
  {
    id: "google-analytics",
    title: "Google Analytics",
    content: (
      <p>
        We use Google Analytics to collect anonymous information about how visitors use our
        website. This helps us analyze traffic patterns and improve our content. Google
        Analytics uses its own cookies to track user interactions. The data collected is
        anonymized and cannot be used to identify individual users. You can opt out of Google
        Analytics by installing the Google Analytics Opt-out Browser Add-on. For more
        information, please visit{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Google&rsquo;s Privacy Policy
        </a>.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <div className="space-y-2">
        <p>
          If you have any questions about our use of cookies, please contact us:
        </p>
        <p className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-primary" />
          <a href={`tel:${clinic.phone}`} className="text-primary hover:underline">{clinic.phone}</a>
        </p>
        <p className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary" />
          <a href={`mailto:${clinic.email}`} className="text-primary hover:underline">{clinic.email}</a>
        </p>
      </div>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF1E4] via-white to-[#EEF1E4] py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="mb-6 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[2px] text-primary hover:underline">
            <ArrowLeft className="h-3 w-3" /> Back to Home
          </Link>
          <h1 className="mt-4 text-[56px] font-medium leading-[1.1] tracking-[-0.03em] max-sm:text-[34px]">
            Cookie Policy
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[17px] text-foreground/70">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-[100px]">
        <div className="mx-auto max-w-[860px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-[20px] bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm leading-relaxed text-foreground/70">
              This Cookie Policy explains what cookies are, how we use them, and your choices
              regarding their use on our website.
            </p>
            <div className="mt-8 space-y-10">
              {sections.map((s) => (
                <div key={s.id} id={s.id}>
                  <h2 className="mb-3 text-[20px] font-medium">{s.title}</h2>
                  <div className="space-y-3 text-sm leading-relaxed text-foreground/70">
                    {s.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
