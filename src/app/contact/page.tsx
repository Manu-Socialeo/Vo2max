import type { Metadata } from "next";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with VO2 Max Physiotherapy in Mysuru. Book appointments, request callbacks, or find our clinic location.",
  alternates: { canonical: "https://vo2maxclinic.vercel.app/contact" },
  openGraph: { url: "https://vo2maxclinic.vercel.app/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
