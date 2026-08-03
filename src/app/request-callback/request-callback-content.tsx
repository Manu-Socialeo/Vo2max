"use client";

import { useState } from "react";
import { clinic } from "@/lib/clinic";
import { ArrowRight, Phone, Check } from "lucide-react";
import Link from "next/link";

export default function RequestCallbackContent() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", consent: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    const text = `Hi, I would like to book an appointment`;
    window.open(`https://wa.me/${clinic.whatsapp}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#EEF1E4] py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-subtitle">Quick Contact</span>
          <h1 className="mt-4 text-[56px] font-medium leading-[1.1] tracking-[-0.03em] max-sm:text-[34px]">
            Request a callback
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[17px] text-foreground/70">
            Give us a call or fill in the form below and we will contact you. We endeavor to answer all inquiries within 24 hours on business days.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 sm:py-[100px]">
        <div className="mx-auto max-w-[600px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-[20px] bg-white p-8 shadow-sm sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text" placeholder="Full name *" required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-[20px] border border-border bg-white px-5 py-3.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <input
                  type="tel" placeholder="Phone number *" required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-[20px] border border-border bg-white px-5 py-3.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <input
                  type="email" placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-[20px] border border-border bg-white px-5 py-3.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <textarea
                  placeholder="Anything else you would like us to know?"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-[20px] border border-border bg-white px-5 py-3.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-xs text-foreground/70">
                  I understand and agree to the{" "}
                  <Link href="/privacy-policy" className="text-primary hover:underline">
                    privacy policy
                  </Link>.
                </span>
              </label>
              <button
                type="submit"
                disabled={!form.consent}
                className="btn-primary w-full justify-center disabled:opacity-50"
              >
                {submitted ? (
                  <span className="flex items-center gap-2"><Check className="h-4 w-4" /> Request Sent</span>
                ) : (
                  <span className="flex items-center gap-2">Request callback <ArrowRight className="h-4 w-4" /></span>
                )}
              </button>
            </form>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-foreground/70">Prefer to call us directly?</p>
            <a href={`tel:${clinic.phone}`} className="btn-outline mt-4">
              <Phone className="h-4 w-4" />
              {clinic.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
