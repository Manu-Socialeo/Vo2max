import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Stethoscope, HeartPulse, Zap, Heart, Dumbbell, Scale, Flame, Trophy, Activity, Accessibility, Brain, Bandage, Baby } from "lucide-react";
import { services } from "@/lib/clinic";
import { clinic } from "@/lib/clinic";

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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF1E4] via-white to-[#EEF1E4] pb-20 pt-28">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-subtitle justify-center">What We Offer</span>
            <h1 className="mt-4">Our Services</h1>
            <p className="mt-4 text-lg text-foreground/70">
              Comprehensive physiotherapy and wellness services in <strong>Mysuru</strong>. Each program is tailored to your unique needs by our expert team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Stethoscope;
              return (
                <Link key={service.id} href={`/services/${service.id}`} className="group block">
                  <div className="flex h-full flex-col rounded-[20px] bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF1E4]">
                      <Icon className="h-5 w-5 text-[#0052FF]" />
                    </div>
                    <h3 className="mt-6 text-xl font-medium">{service.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/70">{service.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[2px] text-[#0052FF] transition-colors group-hover:text-[#0046E0]">
                      Read More <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF1E4] py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-subtitle justify-center">Get Started</span>
            <h2 className="mt-4">Ready to Begin Your Journey?</h2>
            <p className="mt-4 text-foreground/70">
              Book a consultation with <strong>Dr. Pradeep Kumar M N</strong> or <strong>Dr. Pinakin Prakash Ayare</strong> and take the first step toward better health.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href={`https://wa.me/${clinic.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment`} target="_blank" rel="noopener noreferrer" className="btn-primary" data-conversion="whatsapp_click" data-conversion-label="Services Page CTA">
                WhatsApp Us <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/book-appointment" className="btn-outline" data-conversion="appointment_click" data-conversion-label="Services Page CTA">
                Book Appointment <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
