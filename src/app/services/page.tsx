import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Stethoscope, HeartPulse, Zap, Heart, Dumbbell, Scale, Flame, Trophy, Activity, Accessibility, Brain, Bandage, Baby, Calendar } from "lucide-react";
import { services, clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Our Services | VO2 Max Physiotherapy Mysuru",
  description: "Expert physiotherapy, rehabilitation, sports rehab, cardiac rehab, weight loss, athletic training, and more in Mysuru.",
  alternates: { canonical: "https://vo2max.in/services" },
  openGraph: {
    title: "Our Services | VO2 Max Physiotherapy Mysuru",
    description: "Expert physiotherapy, rehabilitation, sports rehab, and more services at VO2 Max in Vijayanagar, Mysuru.",
    url: "https://vo2max.in/services",
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope, HeartPulse, Zap, Heart, Dumbbell, Scale, Flame, Trophy, Activity, Accessibility, Brain, Bandage, Baby,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vo2max.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://vo2max.in/services" },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `https://vo2max.in/services/${s.id}`,
  })),
};

export default function ServicesPage() {
  return (
    <div className="bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-1.5 text-xs font-semibold text-blue-200">
            <Stethoscope className="h-3.5 w-3.5 text-[#00D2FF]" />
            <span>Comprehensive Clinical Care</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Specialized Physiotherapy &amp; Rehab
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Evidence-based clinical treatments designed to eliminate pain, restore peak mobility, and accelerate injury recovery in Mysuru.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28 bg-slate-50/70">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Stethoscope;
              return (
                <Link key={service.id} href={`/services/${service.id}`} className="group block">
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-xs transition-all duration-300 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0052FF] transition-colors group-hover:bg-[#0052FF] group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-6 text-lg font-bold text-slate-900 group-hover:text-[#0052FF] transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#0052FF] pt-4 border-t border-slate-100">
                      <span>View clinical protocol</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-950 p-10 text-center text-white sm:p-14">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to schedule your clinical assessment?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-xs text-slate-300 sm:text-sm">
              Consult directly with Dr. Pradeep Kumar and Dr. Pinakin Prakash to formulate your individualized recovery plan.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#0052FF] to-[#0042D1] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Calendar className="h-4 w-4" />
                Book Clinical Appointment
              </Link>
              <a
                href={`https://wa.me/${clinic.whatsapp}?text=Hi%20VO2%20Max,%20I%20would%20like%20to%20consult%20regarding%20physiotherapy%20services`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md hover:bg-emerald-500/25"
              >
                WhatsApp Us <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
