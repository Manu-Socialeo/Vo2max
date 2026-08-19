"use client";

import { useState } from "react";
import { clinic } from "@/lib/clinic";
import { MapPin, Phone, Mail, Clock, ArrowRight, Send, CheckCircle2, User } from "lucide-react";
import Link from "next/link";

function EnquiryForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "General Enquiry", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "General Enquiry",
    "Manual Physiotherapy",
    "Sports Rehabilitation",
    "Post-Surgical Care",
    "Cardiac Rehabilitation",
    "Neurology Rehabilitation",
    "Exercise & Posture Therapy",
    "Weight Loss Program",
    "Other Services",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const messageParts = [
      `*New Enquiry - VO2 Max Website*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone}`,
      form.email ? `✉️ *Email:* ${form.email}` : null,
      `🩺 *Service Interested:* ${form.service}`,
      form.message ? `📝 *Message:* ${form.message}` : null,
      `━━━━━━━━━━━━━━━━━━━━`,
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(messageParts)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {submitted && (
        <div className="mb-4 flex items-center gap-2.5 rounded-2xl bg-emerald-50 p-4 text-xs font-semibold text-emerald-800 border border-emerald-200">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>Enquiry details prepared. Opening WhatsApp chat...</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
          Full Name <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g. Anand Kumar"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-[#0052FF] focus:ring-3 focus:ring-blue-500/10"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
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
            Email Address
          </label>
          <input
            type="email"
            placeholder="anand@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-[#0052FF] focus:ring-3 focus:ring-blue-500/10"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
          Service Required
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

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
          Your Message / Question
        </label>
        <textarea
          placeholder="How can our clinical team assist your recovery?"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full resize-none rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-800 outline-none transition-all focus:border-[#0052FF] focus:ring-3 focus:ring-blue-500/10"
        />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-[#0052FF] to-[#0042D1] py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/25 transition-all hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5"
      >
        <span>Send Message via WhatsApp</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

export default function ContactContent() {
  return (
    <div className="bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["MedicalClinic", "LocalBusiness"],
            name: clinic.name,
            url: "https://vo2max.in",
            telephone: clinic.phone,
            email: clinic.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: "H1 Srihari Medical Trust, opposite to Learner's PU College",
              addressLocality: "Vijayanagar II Stage, Mysuru",
              addressRegion: "Karnataka",
              postalCode: "570017",
              addressCountry: "IN",
            },
            openingHoursSpecification: [{
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "21:00",
            }],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-1.5 text-xs font-semibold text-blue-200">
            <MapPin className="h-3.5 w-3.5 text-[#00D2FF]" />
            <span>Vijayanagar II Stage, Mysuru</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Get in Touch With Our Clinic
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Have questions regarding physiotherapy, injury rehabilitation, or appointment bookings? We are here to assist you.
          </p>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="py-16 sm:py-24 bg-slate-50/70">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Left: Quick Details */}
            <div className="space-y-5 lg:col-span-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0052FF]">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Clinic Address</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {clinic.addressShort}, {clinic.landmark}, {clinic.city}, {clinic.state} {clinic.pincode}
                </p>
                <a
                  href="https://maps.google.com/?q=12.3084,76.6539"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0052FF] hover:underline"
                >
                  Get Directions in Google Maps
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0052FF]">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Phone &amp; WhatsApp</h3>
                <a
                  href={`tel:${clinic.phone}`}
                  className="mt-2 block text-xs font-semibold text-slate-700 hover:text-[#0052FF]"
                >
                  {clinic.phone}
                </a>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0052FF]">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Clinical Timings</h3>
                <p className="mt-2 text-xs text-slate-600">{clinic.timings}</p>
                <p className="mt-1 text-[11px] font-semibold text-slate-400">Sunday: Closed</p>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-10">
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Send a Direct Message
                </h2>
                <p className="mt-1 text-xs text-slate-500 mb-8">
                  Submit your message and our clinical staff will respond promptly.
                </p>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.012345!2d76.6539!3d12.3084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE4JzMwLjIiTiA3NsKwMzknMTQuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VO2 Max Clinic Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
