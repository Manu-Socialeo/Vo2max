"use client";

import Link from "next/link";
import { useState } from "react";
import { clinic } from "@/lib/clinic";
import {
  Menu, X, Stethoscope,
} from "lucide-react";

const navLinks = [
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
  { href: "/blog", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [quickForm, setQuickForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New appointment request from ${clinic.shortName} Website:%0A%0AName: ${quickForm.name}%0APhone: ${quickForm.phone}%0AEmail: ${quickForm.email}%0AMessage: ${quickForm.message}`;
    window.open(`https://wa.me/${clinic.whatsapp}?text=${text}`, "_blank");
    setModalOpen(false);
    setQuickForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <>
      {/* ======================== MAIN NAV ======================== */}
      <header className="sticky top-0 z-40 w-full border-b border-[#E6E9EB] bg-white">
        <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Stethoscope className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-primary">VO2 Max</span>
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
                    className="flex items-center gap-1 text-[14px] font-medium text-[#343434] transition-colors hover:text-[#0052FF]"
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
                          className="block rounded-[12px] px-4 py-2.5 text-[14px] font-medium text-[#343434] transition-colors hover:bg-[#EEF1E4] hover:text-[#0052FF]"
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
                  className="text-[14px] font-medium text-[#343434] transition-colors hover:text-[#0052FF]"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-4 md:flex">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="elementskit-btn inline-flex items-center gap-2 rounded-[30px] bg-[#0052FF] px-5 py-[9px] text-[12px] font-medium uppercase tracking-[2px] text-white transition-all hover:bg-[#0046E0]"
              data-conversion="enquiry_open"
              data-conversion-label="Quick Contact Button"
            >
              Quick contact
            </button>
            <Link
              href="/request-callback"
              className="inline-flex items-center gap-1 rounded-[30px] border border-[#0052FF] px-5 py-[9px] text-[12px] font-medium uppercase tracking-[2px] text-[#0052FF] transition-all hover:bg-[#0052FF] hover:text-white"
              data-conversion="callback_request"
              data-conversion-label="Request Callback Button"
            >
              Request callback
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
                  className="border-b border-[#EEF1E4] py-3 text-sm font-medium text-[#343434] transition-colors hover:text-[#0052FF] last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => { setModalOpen(true); setMenuOpen(false); }}
                  className="flex-1 rounded-[30px] bg-[#0052FF] px-4 py-2.5 text-[12px] font-medium uppercase tracking-[2px] text-white"
                >
                  Quick contact
                </button>
                <Link
                  href="/request-callback"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 rounded-[30px] border border-[#0052FF] px-4 py-2.5 text-center text-[12px] font-medium uppercase tracking-[2px] text-[#0052FF]"
                >
                  Request callback
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ======================== QUICK CONTACT MODAL ======================== */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/40" onClick={() => setModalOpen(false)} />
          <div className="relative w-full max-w-md animate-slide-in-right overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#E6E9EB] px-8 pb-5 pt-8">
              <div>
                <h3 className="text-[24px] font-medium text-[#343434]">Quick contact</h3>
                <p className="mt-1 text-[14px] text-[#343434]/60">
                  Give us a call or fill in the form below and we will contact you. We endeavor to answer all inquiries within 24 hours on business days.
                </p>
              </div>
              <button type="button" onClick={() => setModalOpen(false)} className="shrink-0 text-[#343434]/50 hover:text-[#343434]" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleQuickSubmit} className="space-y-5 px-8 pb-8 pt-6">
              <div>
                <label className="mb-1 block text-[13px] font-medium text-[#343434]">Full name *</label>
                <input
                  type="text"
                  required
                  value={quickForm.name}
                  onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                  className="w-full rounded-[20px] border border-[#E6E9EB] bg-[#EEF1E4] px-5 py-3.5 text-[14px] text-[#343434] outline-none transition-all focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20"
                />
              </div>
              <div>
                <label className="mb-1 block text-[13px] font-medium text-[#343434]">Phone number *</label>
                <input
                  type="tel"
                  required
                  value={quickForm.phone}
                  onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                  className="w-full rounded-[20px] border border-[#E6E9EB] bg-[#EEF1E4] px-5 py-3.5 text-[14px] text-[#343434] outline-none transition-all focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20"
                />
              </div>
              <div>
                <label className="mb-1 block text-[13px] font-medium text-[#343434]">Email address</label>
                <input
                  type="email"
                  value={quickForm.email}
                  onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })}
                  className="w-full rounded-[20px] border border-[#E6E9EB] bg-[#EEF1E4] px-5 py-3.5 text-[14px] text-[#343434] outline-none transition-all focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20"
                />
              </div>
              <div>
                <label className="mb-1 block text-[13px] font-medium text-[#343434]">Anything else you would like us to know?</label>
                <textarea
                  rows={4}
                  value={quickForm.message}
                  onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
                  className="w-full resize-none rounded-[20px] border border-[#E6E9EB] bg-[#EEF1E4] px-5 py-3.5 text-[14px] text-[#343434] outline-none transition-all focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20"
                />
              </div>
              <p className="text-[12px] text-[#343434]/50">
                I understand and agree to the <Link href="/privacy-policy" className="text-[#0052FF] underline">privacy policy</Link>.
              </p>
              <button
                type="submit"
                className="w-full rounded-[30px] bg-[#0052FF] px-6 py-3.5 text-[12px] font-medium uppercase tracking-[2px] text-white transition-all hover:bg-[#0046E0]"
                data-conversion="enquiry_submit"
                data-conversion-label="Quick Contact Form"
              >
                Submit request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
