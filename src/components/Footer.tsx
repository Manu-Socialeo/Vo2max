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
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-blue-50 p-1">
                <Image
                  src="/images/logo.png"
                  alt="VO2 Max Logo"
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                  VO2 <span className="text-[#0052FF]">MAX</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Physiotherapy & Rehab
                </span>
              </div>
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-slate-600">
              {clinic.name}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">
              Premier physiotherapy, athletic injury rehabilitation, and post-surgical recovery clinic in Vijayanagar II Stage, Mysuru.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
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
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">
              Key Treatments
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
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
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#0052FF] hover:underline"
              >
                View all 14 treatments <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">
              Clinic Contact
            </h3>
            <ul className="space-y-3 text-xs text-slate-600">
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
                <a href={`tel:${clinic.phone}`} className="font-semibold text-slate-800 hover:text-[#0052FF]">
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
                <span>{clinic.timings}</span>
              </li>
            </ul>

            <div className="mt-5">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-[#0052FF] transition-colors hover:bg-[#0052FF] hover:text-white"
              >
                <Calendar className="h-3.5 w-3.5" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-100 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
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
        </div>
      </div>
    </footer>
  );
}
