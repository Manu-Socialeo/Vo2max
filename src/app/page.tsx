import Link from "next/link";
import { ArrowRight, Check, Play, Star } from "lucide-react";
import { services, clinic, testimonials } from "@/lib/clinic";
import AnimatedCounter from "@/components/AnimatedCounter";
import HeroCarousel from "@/components/HeroCarousel";

const serviceIconMap: Record<string, string> = {
  Stethoscope: "/images/experienced-staff.svg",
  HeartPulse: "/images/experienced-staff.svg",
  Zap: "/images/personalized-plans.svg",
  Heart: "/images/personalized-plans.svg",
  Dumbbell: "/images/proven-results.svg",
  Scale: "/images/experienced-staff.svg",
};

const previewServices = services.slice(0, 6);

const previewPlans = [
  {
    name: "Consultation",
    subtitle: "Initial Assessment",
    features: [
      "Initial consultation & diagnosis",
      "Follow-up session",
      "Progress assessment",
    ],
  },
  {
    name: "Treatment Package",
    subtitle: "Recovery Program",
    features: [
      "4-session discounted package",
      "6-session extended rehab",
      "8-session recovery plan",
    ],
    popular: true,
  },
  {
    name: "Fitness Program",
    subtitle: "Wellness & Training",
    features: [
      "Monthly membership",
      "Personal training",
      "Diet & lifestyle guidance",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* ====================== HERO ====================== */}
      <section className="relative overflow-hidden" style={{ paddingTop: "130px", paddingBottom: "280px" }}>
        <HeroCarousel className="absolute inset-0" />
        <div className="absolute inset-0 bg-[#343434]/40" />
        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="max-w-[560px]">
              <span className="inline-flex items-center gap-2.5 text-[13px] font-medium uppercase tracking-[2px] text-white before:inline-block before:h-[2px] before:w-6 before:bg-white">
                Trusted experts
              </span>
              <h1 className="mt-5 text-white">
                Expert support for physical wellness
              </h1>
              <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/70">
                Expert treatments designed to relieve pain, restore movement, and improve your overall physical health.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-[30px] bg-[#0052FF] px-6 py-[18px] text-[12px] font-medium uppercase tracking-[2px] text-white transition-all hover:bg-[#0046E0]"
              >
                Let&apos;s get started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {/* Video play button */}
            <div className="hidden lg:flex">
              <a
                href="https://www.youtube.com/@vo2maxphysiotherapy"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-ripple flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/30 text-white transition-colors hover:border-white/60"
                aria-label="Watch our video"
              >
                <Play className="ml-1 h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== FEATURE CARDS ====================== */}
      <section className="bg-[#0052FF]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            {[
              {
                img: "/images/experienced-staff.svg",
                title: "Experienced staff",
                desc: "Highly qualified therapists with years of practical experience.",
              },
              {
                img: "/images/personalized-plans.svg",
                title: "Personalized plans",
                desc: "Treatments tailored to each patient's unique needs and goals.",
              },
              {
                img: "/images/proven-results.svg",
                title: "Proven results",
                desc: "Many patients successfully regain strength and mobility here.",
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className={`flex-1 bg-white px-[60px] pb-[45px] pt-[50px] ${i < 2 ? "border-r border-[#EEF1E4]" : ""}`}
              >
                <img
                  src={card.img}
                  alt=""
                  width={48}
                  height={48}
                  className="mb-6"
                />
                <h3 className="text-[24px] font-medium text-[#343434]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#343434]/70">
                  {card.desc}
                </p>
                <Link
                  href="/about"
                  className="mt-5 inline-flex items-center gap-1 text-[14px] font-medium text-[#343434] transition-colors hover:text-[#0052FF]"
                >
                  Read more
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== OUR STORY ====================== */}
      <section className="bg-[#EEF1E4] py-[100px]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-0 lg:flex-row">
            <div className="flex-1 lg:mr-3 lg:ml-3">
              <span className="section-subtitle">Our story</span>
              <h2 className="mt-4 max-w-xl">
                Dedicated to your{" "}
                <span className="text-primary">physical wellbeing</span>
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[#343434]/70">
                We focus on delivering compassionate, effective physiotherapy
                services to help you regain strength and improve daily living
                activities.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "35 years experience",
                  "Flexible appointment times",
                  "Ongoing progress monitoring",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0052FF]/10">
                      <Check className="h-3.5 w-3.5 text-[#0052FF]" />
                    </span>
                    <span className="text-[15px] font-medium text-[#343434]/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="btn-primary mt-8 inline-flex items-center gap-2 rounded-[30px] bg-[#0052FF] px-6 py-[18px] text-[12px] font-medium uppercase tracking-[2px] text-white transition-all hover:bg-[#0046E0]"
              >
                Our services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex-1 lg:mt-0 lg:ml-3 lg:mr-3">
              <img
                src="/images/about-img.jpg"
                alt="Physiotherapy"
                className="w-full max-w-[530px] rounded-[20px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================== STATS ====================== */}
      <section className="py-[100px]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { values: [20, 35, 500, 98], suffix: "+", label: "Years of experience" },
              { values: [35, 20, 98, 500], suffix: "+", label: "Therapy techniques" },
              { values: [500, 20, 35, 98], suffix: "+", label: "Patients treated" },
              { values: [98, 500, 20, 35], suffix: "%", label: "Satisfaction rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl font-medium text-[#0052FF] lg:text-6xl">
                  <AnimatedCounter values={stat.values} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-[15px] text-[#343434]/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== OUR SERVICES ====================== */}
      <section className="bg-[#EEF1E4] py-[100px]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="section-subtitle">What we offer</span>
            <h2 className="mt-4">Effective recovery treatments</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {previewServices.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group rounded-[20px] bg-white p-10 transition-all hover:shadow-lg"
              >
                <img
                  src={serviceIconMap[service.icon] || "/images/experienced-staff.svg"}
                  alt=""
                  width={48}
                  height={48}
                  className="mb-5"
                />
                <h3 className="mb-2 text-[21px] font-medium text-[#343434] lg:text-[21px]">
                  {service.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#343434]/70">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#343434] transition-colors group-hover:text-[#0052FF]">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-[30px] bg-[#0052FF] px-6 py-[18px] text-[12px] font-medium uppercase tracking-[2px] text-white transition-all hover:bg-[#0046E0]"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================== PRICING ====================== */}
      <section className="py-[100px]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="section-subtitle">Pricing & plans</span>
            <h2 className="mt-4">Affordable care, transparent pricing</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {previewPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[20px] bg-[#EEF1E4] p-8 ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[10px] font-medium uppercase tracking-[2px] text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-[20px] font-medium text-[#343434]">{plan.name}</h3>
                <p className="mt-1 text-sm text-[#343434]/60">{plan.subtitle}</p>
                <p className="mt-4 text-xs text-[#343434]/50">Available on request</p>
                <hr className="my-6 border-[#343434]/10" />
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm font-medium text-[#343434]/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-[30px] bg-[#0052FF] px-6 py-[14px] text-[12px] font-medium uppercase tracking-[2px] text-white transition-all hover:bg-[#0046E0]"
                >
                  Contact for pricing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== TESTIMONIALS ====================== */}
      <section className="bg-[#EEF1E4] py-[100px]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="section-subtitle">Patient stories</span>
            <h2 className="mt-4">What our patients say</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.id} className="rounded-[20px] bg-white p-8">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < t.rating ? "fill-primary text-primary" : "text-border"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-[#343434]/80">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-[#343434]/10 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF1E4] text-sm font-medium text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <p className="text-sm font-medium text-[#343434]">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 rounded-[30px] bg-[#0052FF] px-6 py-[14px] text-[12px] font-medium uppercase tracking-[2px] text-white transition-all hover:bg-[#0046E0]"
            >
              View all testimonials
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================== CTA ====================== */}
      <section
        className="relative overflow-hidden bg-[#0052FF] py-[100px]"
      >
        <div className="mx-auto max-w-[1240px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-white">Ready to start your journey?</h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] text-white/70">
            Get in touch with us today and take the first step toward recovery.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${clinic.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[30px] bg-white px-6 py-[18px] text-[12px] font-medium uppercase tracking-[2px] text-[#343434] transition-all hover:bg-white/90"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp us
            </a>
            <a
              href={`tel:${clinic.phone}`}
              className="inline-flex items-center gap-2 rounded-[30px] border border-white/30 px-6 py-[18px] text-[12px] font-medium uppercase tracking-[2px] text-white transition-all hover:bg-white/10"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Call now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
