"use client";

import { useState } from "react";
import { faqs, clinic } from "@/lib/clinic";
import { ChevronDown, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

const extraFaqs = [
  {
    question: "Do you accept health insurance plans?",
    answer: "We accept most major health insurance plans. Please contact us with your insurance details to verify coverage before your appointment."
  },
  {
    question: "Can I reschedule or cancel my appointment?",
    answer: "Yes, you can reschedule or cancel your appointment by calling us at least 24 hours in advance. Late cancellations may be subject to a fee."
  },
  {
    question: "What COVID-19 safety measures are in place?",
    answer: "We follow all government-mandated safety protocols including sanitization between sessions, temperature checks, and mask requirements in common areas."
  },
  {
    question: "Do you offer home visits or teleconsultation?",
    answer: "Yes, we offer teleconsultation for follow-ups and certain cases. Home visits are available on a case-by-case basis for patients with limited mobility."
  },
  {
    question: "Is there parking available at your clinic?",
    answer: "Yes, free parking is available for patients at our Vijayanagar II Stage location."
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#EEF1E4] py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-subtitle">FAQs</span>
          <h1 className="mt-4 text-[56px] font-medium leading-[1.1] tracking-[-0.03em] max-sm:text-[34px]">
            Frequently asked questions
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[17px] text-foreground/70">
            Find answers to common questions about our services, appointments, and treatments.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-20 sm:py-[100px]">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {allFaqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-[20px] border border-border bg-white transition-shadow hover:shadow-sm"
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left sm:px-8"
                >
                  <span className="pr-4 text-sm font-medium sm:text-[15px]">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-foreground/50 transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="border-t border-border px-6 pb-5 pt-4 sm:px-8">
                    <p className="text-sm text-foreground/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[20px] bg-[#EEF1E4] p-8 text-center sm:p-10">
            <h3 className="text-[20px] font-medium">Still have questions?</h3>
            <p className="mt-2 text-sm text-foreground/70">
              We&rsquo;re here to help. Reach out to us anytime.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href={`tel:${clinic.phone}`} className="btn-outline">
                <Phone className="h-4 w-4" />
                Call Us
              </a>
              <Link href="/contact" className="btn-primary">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
