"use client";

import { useState } from "react";
import { clinic } from "@/lib/clinic";
import { ArrowRight, Phone, CheckCircle2, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function RequestCallbackContent() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", consent: true });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;

    const messageParts = [
      `*Callback Request - VO2 Max*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone}`,
      form.email ? `✉️ *Email:* ${form.email}` : null,
      form.message ? `📝 *Query:* ${form.message}` : null,
      `━━━━━━━━━━━━━━━━━━━━`,
    ].filter(Boolean).join("\n");

    const text = encodeURIComponent(messageParts);
    window.open(`https://wa.me/${clinic.whatsapp}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-1.5 text-xs font-semibold text-blue-200">
            <PhoneCall className="h-3.5 w-3.5 text-[#00D2FF]" />
            <span>Direct Clinical Helpline</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Request a Callback
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Fill in your contact details and our physiotherapists in Mysuru will get in touch with you promptly.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 sm:py-28 bg-slate-50/70">
        <div className="mx-auto max-w-[620px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-[#0052FF] focus:ring-3 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-[#0052FF] focus:ring-3 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="ramesh@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-[#0052FF] focus:ring-3 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Symptoms or Consultation Reason
                </label>
                <textarea
                  placeholder="Briefly describe what you'd like to discuss..."
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-800 outline-none transition-all focus:border-[#0052FF] focus:ring-3 focus:ring-blue-500/10"
                />
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#0052FF] to-[#0042D1] py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                {submitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" /> Request Prepared for WhatsApp
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Request Callback <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </button>
            </form>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500">Need immediate consultation?</p>
            <a
              href={`tel:${clinic.phone}`}
              className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#0052FF] hover:underline"
            >
              <Phone className="h-4 w-4" />
              Call Directly: {clinic.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
