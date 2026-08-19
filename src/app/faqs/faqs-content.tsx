"use client";

import { useState } from "react";
import { faqs, clinic } from "@/lib/clinic";
import { ChevronDown, ArrowRight, Phone, HelpCircle } from "lucide-react";
import Link from "next/link";

const extraFaqs = [
  {
    question: "Do you accept health insurance plans?",
    answer: "We assist patients with standard reimbursement documentation for major health insurance providers. Please contact us with your policy details before your visit."
  },
  {
    question: "Can I reschedule or cancel my appointment?",
    answer: "Yes, you can easily reschedule or cancel by messaging or calling us at least 24 hours in advance so we can adjust our therapist schedule."
  },
  {
    question: "What hygiene and safety measures are in place?",
    answer: "We adhere strictly to clinical disinfection protocols, sanitize treatment bays between each patient, and maintain pristine therapeutic equipment."
  },
  {
    question: "Do you offer teleconsultation or home guidance?",
    answer: "Yes, teleconsultation is available for follow-up progress reviews and remote posture/exercise guidance for patients outside Mysuru."
  },
  {
    question: "Is there parking available at the clinic?",
    answer: "Yes, dedicated patient parking is readily available right outside our clinic at H1 Srihari Medical Trust, Vijayanagar II Stage."
  },
];

const allFaqs = [...faqs, ...extraFaqs];

export default function FaqsContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-1.5 text-xs font-semibold text-blue-200">
            <HelpCircle className="h-3.5 w-3.5 text-[#00D2FF]" />
            <span>Answers &amp; Patient Guidance</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Find answers to common clinical queries regarding treatments, sessions, referrals, and appointments in Mysuru.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-20 sm:py-28 bg-slate-50/70">
        <div className="mx-auto max-w-[840px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {allFaqs.map((faq, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left sm:px-8"
                >
                  <span className="pr-4 text-sm font-bold text-slate-900 sm:text-[15px]">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#0052FF] transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="border-t border-slate-100 px-6 pb-6 pt-4 sm:px-8 bg-slate-50/40">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xs sm:p-12">
            <h3 className="text-xl font-bold text-slate-900">Have specific questions about your injury?</h3>
            <p className="mt-2 text-xs text-slate-600 sm:text-sm">
              Our clinical desk is available to assist you Monday through Saturday, 9:00 AM to 9:00 PM.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${clinic.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-slate-800 hover:border-[#0052FF] hover:text-[#0052FF]"
              >
                <Phone className="h-4 w-4 text-[#0052FF]" />
                Call {clinic.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#0052FF] to-[#0042D1] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg"
              >
                Send Us a Message <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
