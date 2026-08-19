"use client";

import { clinic } from "@/lib/clinic";
import { ArrowRight, CheckCircle2, Phone, Calendar, ShieldCheck } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Clinical Consultation",
    subtitle: "Initial Assessment & Diagnosis",
    badge: "Initial Step",
    features: [
      { label: "Comprehensive Diagnostic Evaluation", note: "Root-cause assessment & physical testing" },
      { label: "Range of Motion & Biomechanical Analysis", note: "Targeted joint and muscle testing" },
      { label: "Personalized Care Roadmap", note: "Clear recovery prognosis and milestone plan" },
      { label: "Introductory Therapy Session", note: "Immediate pain relief modalities applied" },
    ],
    popular: false,
  },
  {
    name: "Active Recovery Package",
    subtitle: "Intensive Rehabilitation Program",
    badge: "Most Popular",
    features: [
      { label: "6 to 8 Monitored Sessions", note: "Discounted multi-session clinical protocol" },
      { label: "Targeted Manual & Modality Therapy", note: "Electrotherapy, IFT, TENS & manual mobilization" },
      { label: "Progressive Exercise Rehabilitation", note: "Supervised strength & functional conditioning" },
      { label: "Milestone Re-evaluations", note: "Documented mobility and functional gains" },
      { label: "Home Ergonomics & Protocol Guide", note: "Preventive exercises for everyday wellness" },
    ],
    popular: true,
  },
  {
    name: "Athletic & Performance Plan",
    subtitle: "Endurance, Conditioning & Prevention",
    badge: "Athletic Conditioning",
    features: [
      { label: "Biomechanical Movement Analysis", note: "Running gait, stride & agility assessments" },
      { label: "Sports-Specific Rehabilitation", note: "Tailored to marathoners, athletes & fitness enthusiasts" },
      { label: "Core & Posture Realignment", note: "Preventive training to avert future injury" },
      { label: "Direct Supervision by Head Physio", note: "Expert guidance throughout the program" },
    ],
    popular: false,
  },
];

export default function PricingContent() {
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
              { "@type": "ListItem", position: 2, name: "Pricing", item: "https://vo2max.in/pricing" },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-1.5 text-xs font-semibold text-blue-200">
            <ShieldCheck className="h-3.5 w-3.5 text-[#00D2FF]" />
            <span>Transparent &amp; Structured Care</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Clinical Plans &amp; Care Packages
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Transparent, milestone-focused physiotherapy and sports rehabilitation packages tailored to your exact condition in Mysuru.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 sm:py-28 bg-slate-50/70">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-[#0052FF] bg-white shadow-xl shadow-blue-500/10"
                    : "border border-slate-200 bg-white shadow-xs hover:border-slate-300 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-[#0052FF] to-[#0042D1] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0052FF]">
                    {plan.badge}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{plan.subtitle}</p>

                  <div className="my-6 border-t border-slate-100" />

                  <ul className="space-y-4">
                    {plan.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0052FF]" />
                        <div>
                          <p className="text-xs font-bold text-slate-800">{f.label}</p>
                          <p className="text-[11px] text-slate-500">{f.note}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Link
                    href="/book-appointment"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-xs font-bold uppercase tracking-wider transition-all ${
                      plan.popular
                        ? "bg-linear-to-r from-[#0052FF] to-[#0042D1] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400"
                    }`}
                  >
                    Schedule Assessment
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-10 text-center text-white sm:p-14">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Require a Custom Rehabilitation Protocol?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-xs text-slate-300 sm:text-sm">
              From post-op joint rehabilitation to corporate ergonomics, our senior physiotherapists will formulate an individualized treatment roadmap.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${clinic.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md hover:bg-white/20"
              >
                <Phone className="h-4 w-4 text-[#00D2FF]" />
                Call {clinic.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#0052FF] to-[#0042D1] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg"
              >
                Contact Our Desk <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
