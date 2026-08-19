import Link from "next/link";
import Image from "next/image";
import { clinic, services } from "@/lib/clinic";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-800">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-blue-50 p-1">
                <Image
                  src="/images/logo.png"
                  alt="VO2 Max Logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-black leading-none">
                  VO2 <span className="text-[#0052FF]">MAX</span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Physiotherapy & Rehab
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm font-semibold text-slate-900 leading-relaxed">
              {clinic.name}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-700 font-medium">
              Premier physiotherapy, athletic injury rehabilitation, and post-surgical recovery clinic in Vijayanagar II Stage, Mysuru.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VO2 Max on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-all hover:bg-pink-50 hover:text-pink-600 hover:-translate-y-0.5"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={clinic.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VO2 Max on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-all hover:bg-blue-50 hover:text-[#0052FF] hover:-translate-y-0.5"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={clinic.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VO2 Max on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-all hover:bg-sky-50 hover:text-sky-600 hover:-translate-y-0.5"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${clinic.whatsapp}?text=Hi%20VO2%20Max,%20I'd%20like%20to%20consult%20regarding%20physiotherapy`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with VO2 Max on WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-all hover:bg-emerald-50 hover:text-emerald-600 hover:-translate-y-0.5"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.59-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-black">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-slate-800">
              <li>
                <Link href="/about" className="transition-colors hover:text-[#0052FF]">
                  About Our Center
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-[#0052FF]">
                  Clinical Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="transition-colors hover:text-[#0052FF]">
                  Chief Specialists
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition-colors hover:text-[#0052FF]">
                  Pricing &amp; Packages
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="transition-colors hover:text-[#0052FF]">
                  Facility Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-[#0052FF]">
                  Contact &amp; Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-black">
              Key Treatments
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-slate-800">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="transition-colors hover:text-[#0052FF]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0052FF] hover:underline"
              >
                View all 14 treatments <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-black">
              Clinic Contact
            </h3>
            <ul className="space-y-3 text-xs font-medium text-slate-800">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0052FF]" />
                <a
                  href="https://maps.google.com/?q=12.3084,76.6539"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0052FF]"
                >
                  {clinic.addressShort}, {clinic.landmark}, {clinic.city}, {clinic.state} {clinic.pincode}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#0052FF]" />
                <a href={`tel:${clinic.phone}`} className="font-bold text-black hover:text-[#0052FF]">
                  {clinic.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#0052FF]" />
                <a href={`mailto:${clinic.email}`} className="hover:text-[#0052FF]">
                  {clinic.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#0052FF]" />
                <span className="text-slate-800">{clinic.timings}</span>
              </li>
            </ul>

            <div className="mt-5">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2.5 text-xs font-bold text-[#0052FF] transition-colors hover:bg-[#0052FF] hover:text-white"
              >
                <Calendar className="h-3.5 w-3.5" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-xs font-medium text-slate-700 sm:flex-row sm:text-left">
            <p>&copy; {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
            <div className="flex flex-wrap gap-5">
              <Link href="/privacy-policy" className="transition-colors hover:text-[#0052FF]">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="transition-colors hover:text-[#0052FF]">
                Terms of Service
              </Link>
              <Link href="/medical-disclaimer" className="transition-colors hover:text-[#0052FF]">
                Medical Disclaimer
              </Link>
              <Link href="/appointment-policy" className="transition-colors hover:text-[#0052FF]">
                Appointment Policy
              </Link>
            </div>
          </div>

          <div className="mt-4 text-center text-xs font-medium text-slate-600">
            <a
              href="https://wa.me/918722163256?text=Hi%2C%20I%20would%20like%20to%20get%20my%20website%20built%20by%20Socialeo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-700 transition-colors hover:text-[#0052FF]"
            >
              Built with <span className="text-red-500">❤️</span> by <span className="font-bold underline text-black hover:text-[#0052FF]">Socialeo</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
