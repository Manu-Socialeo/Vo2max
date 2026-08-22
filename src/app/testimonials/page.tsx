import type { Metadata } from "next";
import TestimonialsContent from "./testimonials-content";

export const metadata: Metadata = {
  title: "Testimonials | VO2 Max Physiotherapy Mysuru",
  description: "Hear from our patients at VO2 Max Physiotherapy in Mysuru. Real feedback about our physiotherapy, rehab, and fitness programs.",
  alternates: { canonical: "https://vo2maxclinic.vercel.app/testimonials" },
  openGraph: {
    title: "Testimonials | VO2 Max Physiotherapy Mysuru",
    description: "Hear from our patients at VO2 Max Physiotherapy in Mysuru. Real feedback about our physiotherapy, rehab, and fitness programs.",
    url: "https://vo2maxclinic.vercel.app/testimonials",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vo2maxclinic.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Testimonials", item: "https://vo2maxclinic.vercel.app/testimonials" },
  ],
};

export default function TestimonialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TestimonialsContent />
    </>
  );
}
