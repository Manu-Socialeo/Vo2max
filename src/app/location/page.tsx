import type { Metadata } from "next";
import LocationContent from "./location-content";

export const metadata: Metadata = {
  title: "Location | VO2 Max Physiotherapy Mysuru",
  description: "Visit VO2 Max Physiotherapy in Vijayanagar II Stage, Mysuru. Find directions, landmarks, and clinic timings.",
  alternates: { canonical: "https://vo2max.in/location" },
  openGraph: {
    title: "Location | VO2 Max Physiotherapy Mysuru",
    description: "Visit VO2 Max Physiotherapy in Vijayanagar II Stage, Mysuru. Find directions, landmarks, and clinic timings.",
    url: "https://vo2max.in/location",
    type: "website",
  },
};

const medicalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "VO2 Max Physiotherapy Rehabilitation & Fitness Center",
  url: "https://vo2max.in",
  telephone: "+919480166770",
  email: "pinakinphysio@yahoo.com",
  founder: [
    { "@type": "Person", name: "Dr. Pradeep Kumar M N", jobTitle: "Co-Founder and Head Physiotherapist" },
    { "@type": "Person", name: "Dr. Pinakin Prakash Ayare", jobTitle: "Co-Founder" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "H1 Shrihari Medical Trust, opposite to Learner's PU College",
    addressLocality: "Vijayanagar II Stage, Mysuru",
    addressRegion: "Karnataka",
    postalCode: "570017",
    addressCountry: "IN",
  },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "21:00",
  }],
  sameAs: [
    "https://www.facebook.com/people/VO2-Max-Physiotherapy-Rehabilitation-Fitness/61574654481980/",
    "https://www.linkedin.com/company/vo2-max-physiotherapy-rehabilitation-fitness",
    "https://www.instagram.com/vo2max_prf/",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vo2max.in" },
    { "@type": "ListItem", position: 2, name: "Location", item: "https://vo2max.in/location" },
  ],
};

export default function LocationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LocationContent />
    </>
  );
}
