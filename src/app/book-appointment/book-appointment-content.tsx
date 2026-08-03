"use client";

import { useState } from "react";
import { clinic } from "@/lib/clinic";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import Link from "next/link";

export default function BookAppointmentContent() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", date: "", time: "", message: "",
  });

  const services = [
    "Physiotherapy", "Rehabilitation", "Sports Rehab", "Cardiac Rehabilitation",
    "Exercise Therapy", "Weight Loss", "Post-Surgery Rehab", "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I would like to book an appointment`;
    window.open(`https://wa.me/${clinic.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <>
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#EEF1E4] py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-subtitle">Book Appointment</span>
          <h1 className="mt-4 text-[56px] font-medium leading-[1.1] tracking-[-0.03em] max-sm:text-[34px]">
            Schedule your visit
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[17px] text-foreground/70">
            Choose your preferred service, date, and time. We&rsquo;ll confirm your appointment promptly.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 sm:py-[100px]">
        <div className="mx-auto max-w-[680px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-[20px] bg-white p-8 shadow-sm sm:p-10">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#EEF1E4]">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-[28px] font-medium leading-[1.15] tracking-[-0.03em] sm:text-[34px]">
              Appointment Details
            </h2>
            <p className="mt-2 text-sm text-foreground/70 mb-8">
              Fill in your details and we&rsquo;ll get back to you with a confirmed slot.
            </p>

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
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full rounded-[20px] border border-border bg-white px-5 py-3.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="date" required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full rounded-[20px] border border-border bg-white px-5 py-3.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <input
                    type="time" required
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full rounded-[20px] border border-border bg-white px-5 py-3.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Any additional notes?"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-[20px] border border-border bg-white px-5 py-3.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <span className="flex items-center gap-2">Book via WhatsApp <ArrowRight className="h-4 w-4" /></span>
              </button>
            </form>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-foreground/70">Prefer to call instead?</p>
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
