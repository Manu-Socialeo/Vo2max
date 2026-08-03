import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import ConversionTracker from "@/components/ConversionTracker";

const rethink = Rethink_Sans({
  variable: "--font-rethink",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VO2 Max Physiotherapy Rehabilitation & Fitness Center | Mysuru",
    template: "%s | VO2 Max Physiotherapy",
  },
  description:
    "Expert physiotherapy, rehabilitation & fitness in Mysuru. Regain strength, restore movement with Dr. Pradeep & team.",
  metadataBase: new URL("https://vo2max.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "VO2 Max Physiotherapy",
    title: "VO2 Max Physiotherapy Rehabilitation & Fitness Center | Mysuru",
    description:
      "Expert physiotherapy, rehabilitation & fitness in Mysuru. Regain strength, restore movement.",
    images: [{ url: "/images/hero-bg.jpg", width: 1920, height: 1080, alt: "VO2 Max Physiotherapy Mysuru" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VO2 Max Physiotherapy | Mysuru",
    description:
      "Expert physiotherapy, rehabilitation & fitness in Mysuru.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://vo2max.in", languages: { "en-IN": "https://vo2max.in" } },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${rethink.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CallButton />
        <ConversionTracker />
      </body>
    </html>
  );
}
