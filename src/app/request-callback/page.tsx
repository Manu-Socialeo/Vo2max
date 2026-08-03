import type { Metadata } from "next";
import RequestCallbackContent from "./request-callback-content";

export const metadata: Metadata = {
  title: "Request Callback | VO2 Max Physiotherapy Mysuru",
  description: "Request a callback from VO2 Max Physiotherapy in Mysuru. We'll call you back within 24 business hours.",
  alternates: { canonical: "https://vo2max.in/request-callback" },
  openGraph: {
    title: "Request Callback | VO2 Max Physiotherapy Mysuru",
    description: "Request a callback from VO2 Max Physiotherapy in Mysuru. We'll call you back within 24 business hours.",
    url: "https://vo2max.in/request-callback",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vo2max.in" },
    { "@type": "ListItem", position: 2, name: "Request Callback", item: "https://vo2max.in/request-callback" },
  ],
};

export default function RequestCallbackPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <RequestCallbackContent />
    </>
  );
}
