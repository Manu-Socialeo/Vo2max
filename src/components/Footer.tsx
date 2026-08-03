import Link from "next/link";
import { clinic, services } from "@/lib/clinic";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Stethoscope,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-[#0052FF]" />
              <span className="text-base font-bold text-[#0052FF]">VO2 Max</span>
            </div>
            <p className="text-sm text-[#343434]/70">
              {clinic.name}
            </p>
            <p className="mt-3 text-xs text-[#343434]/50">
              Expert physiotherapy, rehabilitation & fitness in Mysuru. Regain strength, restore movement.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-[#343434]">Quick Links</h3>
            <ul className="space-y-3 text-[15px] text-[#343434]/70">
              <li><Link href="/about" className="transition-colors hover:text-[#0052FF]">About Us</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-[#0052FF]">Services</Link></li>
              <li><Link href="/team" className="transition-colors hover:text-[#0052FF]">Our Team</Link></li>
              <li><Link href="/pricing" className="transition-colors hover:text-[#0052FF]">Pricing</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-[#0052FF]">Blogs</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-[#0052FF]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-[#343434]">Our Services</h3>
            <ul className="space-y-3 text-[15px] text-[#343434]/70">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`} className="transition-colors hover:text-[#0052FF]">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <details className="group mt-3">
              <summary className="flex cursor-pointer list-none items-center gap-1 text-[15px] font-medium text-[#343434]/70 transition-colors hover:text-[#0052FF]">
                More services
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <ul className="mt-3 space-y-3 pl-4 text-[15px] text-[#343434]/70">
                {services.slice(5).map((service) => (
                  <li key={service.id}>
                    <Link href={`/services/${service.id}`} className="transition-colors hover:text-[#0052FF]">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
            <div className="mt-3">
              <Link href="/services" className="text-xs font-medium text-[#0052FF] transition-colors hover:text-[#0046E0]">
                View All Services <ArrowRight className="ml-1 inline h-3 w-3" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-[#343434]">Contact</h3>
            <ul className="space-y-3 text-[15px] text-[#343434]/70">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=VO2+Max+Physiotherapy+Rehabilitation+%26+Fitness+Center+Vijayanagar+II+Stage+Mysuru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-[15px] font-medium transition-colors hover:text-[#0052FF]"
                  data-conversion="map_click"
                  data-conversion-label="Footer Map"
                >
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#0052FF]" />
                  <span>{clinic.addressShort}, {clinic.landmark}, {clinic.city}, {clinic.state} {clinic.pincode}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${clinic.phone}`} className="flex items-center gap-2 transition-colors hover:text-[#0052FF]" data-conversion="call_click" data-conversion-label="Footer Phone">
                  <Phone className="h-4 w-4 shrink-0 text-[#0052FF]" />
                  <span>{clinic.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${clinic.email}`} className="flex items-center gap-2 transition-colors hover:text-[#0052FF]">
                  <Mail className="h-4 w-4 shrink-0 text-[#0052FF]" />
                  <span>{clinic.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#0052FF]" />
                <span>{clinic.timings}</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a href={clinic.facebook} target="_blank" rel="noopener noreferrer" className="text-[#343434]/40 transition-colors hover:text-[#0052FF]" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={clinic.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#343434]/40 transition-colors hover:text-[#0052FF]" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.063zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={clinic.instagram} target="_blank" rel="noopener noreferrer" className="text-[#343434]/40 transition-colors hover:text-[#0052FF]" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-[#343434]/50 sm:flex-row sm:text-left">
            <p>&copy; {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="transition-colors hover:text-[#0052FF]">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="transition-colors hover:text-[#0052FF]">Terms</Link>
              <Link href="/medical-disclaimer" className="transition-colors hover:text-[#0052FF]">Disclaimer</Link>
              <Link href="/appointment-policy" className="transition-colors hover:text-[#0052FF]">Appointments</Link>
              <Link href="/cookie-policy" className="transition-colors hover:text-[#0052FF]">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
