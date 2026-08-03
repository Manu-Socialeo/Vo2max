"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu, X, Stethoscope,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  {
    href: "/services",
    label: "Services",
    dropdown: [
      { href: "/services/physiotherapy", label: "Manual therapy" },
      { href: "/services/sports-rehabilitation", label: "Sports rehab" },
      { href: "/services/post-surgical-rehabilitation", label: "Post-surgery care" },
      { href: "/services/rehabilitation", label: "Rehabilitation" },
      { href: "/services/exercise-therapy", label: "Exercise therapy" },
    ],
  },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* ======================== MAIN NAV ======================== */}
      <header className="sticky top-0 z-40 w-full border-b border-[#E6E9EB] bg-white">
        <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Stethoscope className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">VO2 Max</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-[15px] font-medium text-[#343434] transition-colors hover:text-[#0052FF]"
                  >
                    {link.label}
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute left-0 top-full min-w-[200px] rounded-[20px] border border-[#E6E9EB] bg-white p-2 shadow-lg">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-[12px] px-4 py-2.5 text-[15px] font-medium text-[#343434] transition-colors hover:bg-[#EEF1E4] hover:text-[#0052FF]"
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
                  className="text-[15px] font-medium text-[#343434] transition-colors hover:text-[#0052FF]"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 rounded-[30px] bg-[#0052FF] px-5 py-[9px] text-[12px] font-medium uppercase tracking-[2px] text-white transition-all hover:bg-[#0046E0]"
              data-conversion="appointment_click"
              data-conversion-label="Header Book Appointment"
            >
              Book appointment
            </Link>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            className="flex items-center md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="border-t border-[#E6E9EB] bg-white md:hidden">
            <nav className="flex flex-col px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#EEF1E4] py-3 text-[15px] font-medium text-[#343434] transition-colors hover:text-[#0052FF] last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book-appointment"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-[30px] bg-[#0052FF] px-4 py-2.5 text-center text-[12px] font-medium uppercase tracking-[2px] text-white"
              >
                Book appointment
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
