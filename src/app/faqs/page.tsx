import type { Metadata } from "next";
import FaqsContent from "./faqs-content";

export const metadata: Metadata = {
  title: "FAQs | VO2 Max Physiotherapy Mysuru",
  description: "Frequently asked questions about physiotherapy at VO2 Max in Mysuru. Learn about treatments, appointments, and more.",
  alternates: { canonical: "https://vo2max.in/faqs" },
  openGraph: {
    title: "FAQs | VO2 Max Physiotherapy Mysuru",
    description: "Frequently asked questions about physiotherapy at VO2 Max in Mysuru. Learn about treatments, appointments, and more.",
    url: "https://vo2max.in/faqs",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vo2max.in" },
    { "@type": "ListItem", position: 2, name: "FAQs", item: "https://vo2max.in/faqs" },
  ],
};

export default function FaqsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FaqsContent />
    </>
  );
}
