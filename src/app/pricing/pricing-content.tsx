"use client";

import { clinic } from "@/lib/clinic";
import { ArrowRight, Check, Phone } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Consultation",
    subtitle: "Initial Assessment",
    features: [
      { label: "Initial consultation", note: "Comprehensive evaluation & diagnosis" },
      { label: "Follow-up session", note: "45 min treatment session" },
      { label: "Progress assessment", note: "Track recovery milestones" },
    ],
    note: "Contact us for pricing",
    price: "Available on request",
  },
  {
    name: "Treatment Package",
    subtitle: "Recovery Program",
    features: [
      { label: "4-session package", note: "Discounted bundled sessions" },
      { label: "6-session package", note: "Extended rehab program" },
      { label: "8-session package", note: "Comprehensive recovery plan" },
    ],
    note: "Contact us for pricing",
    price: "Available on request",
    popular: true,
  },
  {
    name: "Fitness Program",
    subtitle: "Wellness & Training",
    features: [
      { label: "Monthly membership", note: "Unlimited supervised sessions" },
      { label: "Personal training", note: "One-on-one coaching" },
      { label: "Diet & lifestyle guidance", note: "Holistic wellness support" },
    ],
    note: "Contact us for pricing",
    price: "Available on request",
  },
];

export default function PricingContent() {
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
              { "@type": "ListItem", position: 2, name: "Pricing", item: "https://vo2max.in/pricing" },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#EEF1E4] py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-subtitle">Pricing & Plans</span>
          <h1 className="mt-4 text-[56px] font-medium leading-[1.1] tracking-[-0.03em] max-sm:text-[34px]">
            Care plans & pricing
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[17px] text-foreground/70">
            Clear, affordable care options tailored to meet your needs with transparent, upfront pricing you can trust.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 sm:py-[100px]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[20px] bg-white p-8 shadow-sm transition-all hover:shadow-md sm:p-10 ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[10px] font-medium uppercase tracking-[2px] text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-[20px] font-medium">{plan.name}</h3>
                <p className="mt-1 text-sm text-foreground/60">{plan.subtitle}</p>
                <p className="mt-4 text-xs text-foreground/50">{plan.note}</p>
                <hr className="my-6 border-border" />
                <ul className="space-y-4">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-medium">{f.label}</p>
                        <p className="text-xs text-foreground/60">{f.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <p className="text-xs text-foreground/50 mb-3">Contact us for current pricing</p>
                  <Link href="/contact" className="btn-primary w-full justify-center text-center">
                    Contact for Pricing <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-[100px]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-[20px] bg-[#EEF1E4] p-10 text-center sm:p-16">
            <h2 className="text-[28px] font-medium leading-[1.15] tracking-[-0.03em] sm:text-[34px]">
              Need a customized plan?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[17px] text-foreground/70">
              Every patient&rsquo;s needs are unique. Contact us for a personalized treatment plan tailored to your condition.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={`tel:${clinic.phone}`} className="btn-outline">
                <Phone className="h-4 w-4" />
                Call {clinic.phone}
              </a>
              <Link href="/contact" className="btn-primary">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
