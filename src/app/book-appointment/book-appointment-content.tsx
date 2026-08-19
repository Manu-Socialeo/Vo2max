"use client";

import { useState } from "react";
import { clinic } from "@/lib/clinic";
import { ArrowRight, Phone, Calendar, Clock, User, Mail, MessageSquare, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function BookAppointmentContent() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Physiotherapy Assessment",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Physiotherapy Assessment",
    "Sports Injury Rehabilitation",
    "Post-Surgical Care",
    "Cardiac Rehabilitation",
    "Neuro Rehabilitation",
    "Exercise & Posture Therapy",
    "Weight & Fat Loss Program",
    "Electrotherapy Modalities",
    "Other Consultation",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct detailed WhatsApp message from patient's input
    const messageParts = [
      `*New Appointment Request - VO2 Max*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone}`,
      form.email ? `✉️ *Email:* ${form.email}` : null,
      `🩺 *Service:* ${form.service}`,
      form.date ? `📅 *Preferred Date:* ${form.date}` : null,
      form.time ? `⏰ *Preferred Time:* ${form.time}` : null,
      form.message ? `📝 *Notes/Condition:* ${form.message}` : null,
      `━━━━━━━━━━━━━━━━━━━━`,
      `_Sent via VO2 Max Website_`,
    ].filter(Boolean).join("\n");

    const whatsappUrl = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(messageParts)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://vo2max.in" },
              { "@type": "ListItem", position: 2, name: "Book Appointment", item: "https://vo2max.in/book-appointment" },
            ],
          }),
        }}
      />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-1.5 text-xs font-semibold text-blue-200">
            <Calendar className="h-3.5 w-3.5 text-[#00D2FF]" />
            <span>Priority Clinical Scheduling</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Schedule Your Clinical Assessment
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Select your preferred consultation service, date, and time. Our team in Vijayanagar II Stage, Mysuru will confirm your slot promptly.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="py-16 sm:py-24 bg-slate-50/60">
        <div className="mx-auto max-w-[720px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-12">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0052FF]">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Appointment Details
                </h2>
                <p className="text-xs text-slate-500">
                  Fill in your details below to schedule directly with our clinical desk.
                </p>
              </div>
            </div>

            {submitted && (
              <div className="mb-6 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-800 border border-emerald-200">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Your appointment details have been prepared for WhatsApp submission.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-[#0052FF] focus:ring-3 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-[#0052FF] focus:ring-3 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-[#0052FF] focus:ring-3 focus:ring-blue-500/10"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Consultation / Service Type
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-[#0052FF] focus:ring-3 focus:ring-blue-500/10"
                >
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-[#0052FF] focus:ring-3 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Preferred Time Slot
                  </label>
                  <input
                    type="time"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-[#0052FF] focus:ring-3 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Condition / Symptoms / Notes
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    placeholder="Describe your symptoms, pain location, or recovery goals..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-800 outline-none transition-all focus:border-[#0052FF] focus:ring-3 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-[#0052FF] to-[#0042D1] py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5"
              >
                <span>Confirm &amp; Send via WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500">Need immediate consultation or directions?</p>
            <a
              href={`tel:${clinic.phone}`}
              className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#0052FF] hover:underline"
            >
              <Phone className="h-4 w-4" />
              Direct Clinical Helpline: {clinic.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
