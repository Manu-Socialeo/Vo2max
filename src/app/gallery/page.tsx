import type { Metadata } from "next";
import GalleryContent from "./gallery-content";

export const metadata: Metadata = {
  title: "Gallery | VO2 Max Physiotherapy Mysuru",
  description: "Browse photos of VO2 Max Physiotherapy clinic in Mysuru — our facility, equipment, team, and events.",
  alternates: { canonical: "https://vo2maxclinic.vercel.app/gallery" },
  openGraph: {
    title: "Gallery | VO2 Max Physiotherapy Mysuru",
    description: "Browse photos of VO2 Max Physiotherapy clinic in Mysuru — our facility, equipment, team, and events.",
    url: "https://vo2maxclinic.vercel.app/gallery",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vo2maxclinic.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Gallery", item: "https://vo2maxclinic.vercel.app/gallery" },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GalleryContent />
    </>
  );
}
