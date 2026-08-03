"use client";

import { useState } from "react";
import { clinic } from "@/lib/clinic";
import { MapPin, Phone, Mail, Clock, ArrowRight, Send, Check } from "lucide-react";
import Link from "next/link";

function EnquiryForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Physiotherapy",
    "Rehabilitation",
    "Sports Rehab",
    "Cardiac Rehabilitation",
    "Exercise Therapy",
    "Weight Loss",
    "Post-Surgery Rehab",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I would like to book an appointment`;
    window.open(`https://wa.me/${clinic.whatsapp}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <input
          type="text"
          placeholder="Full name *"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-[20px] border border-border bg-white px-5 py-3.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div>
        <input
          type="tel"
          placeholder="Phone number *"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full rounded-[20px] border border-border bg-white px-5 py-3.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email address"
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
      <div>
        <textarea
          placeholder="Anything else you would like us to know?"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full resize-none rounded-[20px] border border-border bg-white px-5 py-3.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <button type="submit" className="btn-primary w-full justify-center" data-conversion="enquiry_submit" data-conversion-label="Contact Page Form">
        {submitted ? (
          <span className="flex items-center gap-2"><Check className="h-4 w-4" /> Message Sent</span>
        ) : (
          <span className="flex items-center gap-2">Send Enquiry <ArrowRight className="h-4 w-4" /></span>
        )}
      </button>
    </form>
  );
}

export default function ContactContent() {
  return (
    <>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://vo2max.in" },
              { "@type": "ListItem", position: 2, name: "Contact", item: "https://vo2max.in/contact" },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#EEF1E4] py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-subtitle">Get In Touch</span>
          <h1 className="mt-4 text-[56px] font-medium leading-[1.1] tracking-[-0.03em] max-sm:text-[34px]">
            We&rsquo;re here for you
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[17px] text-foreground/70">
            Have a question or need assistance? Reach out and we&rsquo;ll get back to you promptly.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 sm:py-[100px]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Left: Contact Info */}
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-[20px] bg-white p-8 shadow-sm">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF1E4]">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-[20px] font-medium">Our Address</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  {clinic.addressShort}, {clinic.landmark}
                  <br />
                  {clinic.city}, {clinic.state} {clinic.pincode}
                </p>
                <a
                  href="https://maps.google.com/?q=12.3084,76.6539"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[2px] text-primary"
                  data-conversion="map_click"
                  data-conversion-label="Contact Get Directions"
                >
                  Get Directions <ArrowRight className="h-3 w-3" />
                </a>
              </div>

              <div className="rounded-[20px] bg-white p-8 shadow-sm">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF1E4]">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-[20px] font-medium">Phone</h3>
                <a href={`tel:${clinic.phone}`} className="mt-2 block text-sm text-foreground/70 hover:text-primary" data-conversion="call_click" data-conversion-label="Contact Page Phone">
                  {clinic.phone}
                </a>
              </div>

              <div className="rounded-[20px] bg-white p-8 shadow-sm">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF1E4]">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-[20px] font-medium">Email</h3>
                <a href={`mailto:${clinic.email}`} className="mt-2 block text-sm text-foreground/70 hover:text-primary" data-conversion="email_click" data-conversion-label="Contact Page Email">
                  {clinic.email}
                </a>
              </div>

              <div className="rounded-[20px] bg-white p-8 shadow-sm">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF1E4]">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-[20px] font-medium">Timings</h3>
                <p className="mt-2 text-sm text-foreground/70">{clinic.timings}</p>
                <p className="text-xs text-foreground/50 mt-1">Sunday: Closed</p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="rounded-[20px] bg-white p-8 shadow-sm sm:p-10">
                <h2 className="text-[28px] font-medium leading-[1.15] tracking-[-0.03em] sm:text-[34px]">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-foreground/70 mb-8">
                  Fill out the form below and one of our team members will contact you shortly.
                </p>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 sm:pb-[100px]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[20px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.012345!2d76.6539!3d12.3084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE4JzMwLjIiTiA3NsKwMzknMTQuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VO2 Max Clinic Location"
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://maps.google.com/?q=12.3084,76.6539"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-conversion="map_click"
              data-conversion-label="Contact Page Map Button"
            >
              <MapPin className="h-4 w-4" />
              Open in Google Maps
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
