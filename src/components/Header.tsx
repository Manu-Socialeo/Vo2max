"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown, Calendar, Activity } from "lucide-react";
import { clinic } from "@/lib/clinic";

interface DropdownItem {
  href: string;
  label: string;
}

interface NavLinkItem {
  href: string;
  label: string;
  dropdown?: DropdownItem[];
}

const navLinks: NavLinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Specialists" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02]">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-blue-50/80 p-1">
            <Image
              src="/images/logo.png"
              alt="VO2 Max Logo"
              width={48}
              height={48}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl leading-none">
              VO2 <span className="text-[#0052FF]">MAX</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Physiotherapy & Rehab
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative py-2"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-[15px] font-semibold text-black transition-colors hover:text-[#0052FF]"
                >
                  {link.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-[#0052FF]" : "text-slate-700"}`} />
                </Link>
                {dropdownOpen && (
                  <div className="absolute left-0 top-full min-w-[240px] rounded-2xl border border-slate-200 bg-white p-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-3.5 py-2.5 text-[14.5px] font-semibold text-black transition-colors hover:bg-blue-50/80 hover:text-[#0052FF]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-semibold text-black transition-colors hover:text-[#0052FF]"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${clinic.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-xs font-bold text-black transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-[#0052FF]"
            aria-label="Call clinic directly"
          >
            <Phone className="h-3.5 w-3.5 text-[#0052FF]" />
            <span className="hidden xl:inline font-bold">+91 94801 66770</span>
            <span className="xl:hidden font-bold">Call Us</span>
          </a>

          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#0052FF] to-[#0042D1] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md shadow-blue-500/25 transition-all hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5"
          >
            <Calendar className="h-3.5 w-3.5" />
            Book Visit
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${clinic.phone}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#0052FF]"
            aria-label="Call clinic"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white/98 px-4 py-6 shadow-2xl backdrop-blur-xl lg:hidden animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-[15px] font-medium text-slate-800 transition-colors hover:bg-blue-50 hover:text-[#0052FF]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/book-appointment"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0052FF] py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md shadow-blue-500/30"
              >
                <Calendar className="h-4 w-4" />
                Book an Appointment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
