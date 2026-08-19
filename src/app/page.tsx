import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Calendar,
  Award,
  Users,
  ShieldCheck,
  Star,
  Activity,
  Zap,
  HeartPulse,
  Dumbbell,
  Stethoscope,
  Sparkles,
  MapPin,
  ChevronRight,
  Clock,
} from "lucide-react";
import { clinic, doctors, testimonials } from "@/lib/clinic";
import AnimatedCounter from "@/components/AnimatedCounter";
import HeroCarousel from "@/components/HeroCarousel";

const featurePillars = [
  {
    icon: Award,
    title: "18+ Years Clinical Mastery",
    desc: "Led by certified MPT specialists with decades of proven musculoskeletal & sports recovery expertise.",
    badge: "Expertise",
  },
  {
    icon: HeartPulse,
    title: "Individualized Protocols",
    desc: "Targeted, science-backed rehabilitation tailored to your specific anatomy, injury stage, and recovery goals.",
    badge: "Personalized",
  },
  {
    icon: ShieldCheck,
    title: "Proven Long-Term Recovery",
    desc: "Over 5,000+ patients across Mysuru restored to pain-free mobility, active athletics, and peak vitality.",
    badge: "Results",
  },
];

const clinicalServices = [
  {
    id: "physiotherapy",
    title: "Manual Physiotherapy",
    category: "Pain Relief",
    desc: "Evidence-based manual therapy, joint mobilization, and electrotherapy modalities for acute & chronic pain.",
    icon: Stethoscope,
    popular: true,
  },
  {
    id: "sports-rehabilitation",
    title: "Sports Injury & Athletic Rehab",
    category: "Athletic Performance",
    desc: "Specialized return-to-sport programs for runners, athletes, ACL tears, shoulder impingements, and muscle strains.",
    icon: Zap,
    popular: true,
  },
  {
    id: "post-surgical-rehabilitation",
    title: "Post-Surgical Care",
    category: "Surgical Recovery",
    desc: "Structured clinical protocols following total knee/hip replacements, spine surgeries, and ligament repairs.",
    icon: Activity,
    popular: true,
  },
  {
    id: "cardiac-rehabilitation",
    title: "Cardiac & Pulmonary Rehab",
    category: "Cardio Health",
    desc: "Monitored cardiovascular conditioning and supervised endurance programs to restore heart health.",
    icon: HeartPulse,
    popular: false,
  },
  {
    id: "neurology-rehabilitation",
    title: "Neuro Rehabilitation",
    category: "Neurological Care",
    desc: "Targeted neuro-physiotherapy for stroke recovery, Parkinson's disease, balance disorders, and nerve injuries.",
    icon: Sparkles,
    popular: false,
  },
  {
    id: "exercise-therapy",
    title: "Functional Exercise & Posture",
    category: "Strength & Posture",
    desc: "Custom corrective exercise, ergonomic posture alignment, core stabilization, and healthy weight management.",
    icon: Dumbbell,
    popular: false,
  },
];

const transparentPlans = [
  {
    name: "Initial Assessment",
    subtitle: "Comprehensive Clinical Diagnosis",
    badge: "First Visit",
    features: [
      "In-depth physical & biomechanical examination",
      "Root-cause diagnosis & range-of-motion testing",
      "Personalized treatment roadmap & prognosis",
      "Initial pain-relief therapy session",
    ],
    popular: false,
  },
  {
    name: "Intensive Rehab Package",
    subtitle: "Active Recovery & Rehabilitation",
    badge: "Most Popular",
    features: [
      "Custom 6 to 8 session clinical recovery program",
      "Targeted manual therapy & electro-modalities",
      "Supervised functional exercise progression",
      "Weekly milestone & mobility re-evaluations",
      "Customized home exercise & ergonomics guide",
    ],
    popular: true,
  },
  {
    name: "Athletic & Posture Conditioning",
    subtitle: "Peak Performance & Prevention",
    badge: "Long-Term Health",
    features: [
      "Biomechanical gait & running analysis",
      "Postural realignment & core stability training",
      "Injury prevention & strength conditioning",
      "Direct guidance from Senior Sports Physiotherapist",
    ],
    popular: false,
  },
];

const galleryHighlights = [
  { src: "/images/gallery/gallery-1.jpg", title: "Modern Modality Suites", tag: "Electrotherapy" },
  { src: "/images/gallery/gallery-10.jpg", title: "Functional Rehab Area", tag: "Mobility Training" },
  { src: "/images/gallery/gallery-4.jpg", title: "Specialized Exercise Zone", tag: "Strength & Conditioning" },
  { src: "/images/gallery/gallery-6.jpg", title: "Clinical Assessment Bay", tag: "Patient Care" },
];

export default function Home() {
  return (
    <div className="flex flex-col bg-white text-slate-800">
      {/* ====================== 1. HERO SECTION ====================== */}
      <section className="relative min-h-[640px] overflow-hidden pt-28 pb-32 sm:pt-36 sm:pb-40 lg:min-h-[720px] lg:pt-40 lg:pb-48">
        <HeroCarousel className="absolute inset-0" />
        {/* Modern Athletic Lighting Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/75 to-blue-950/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,82,255,0.25),transparent_60%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#00D2FF] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                Mysuru&apos;s Premier Physiotherapy & Sports Rehab Center
              </span>
            </div>

            <h1 className="mt-6 font-bold tracking-tight text-white leading-tight">
              Precision care to restore movement &amp;{" "}
              <span className="bg-linear-to-r from-blue-300 via-sky-200 to-[#00D2FF] bg-clip-text text-transparent">
                peak performance
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">
              Evidence-based manual therapy, advanced sports injury rehab, and post-surgical recovery programs led by Senior Clinical Specialists in Mysuru.
            </p>

            {/* Dual CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-[#0052FF] to-[#0042D1] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                <Calendar className="h-4 w-4" />
                Book Clinical Assessment
              </Link>
              <a
                href={`tel:${clinic.phone}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/40"
              >
                <Phone className="h-4 w-4 text-[#00D2FF]" />
                Call +91 94801 66770
              </a>
            </div>

            {/* Quick Proof Badges */}
            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/15 pt-6 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#00D2FF]" />
                <span>18+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#00D2FF]" />
                <span>5,000+ Recovered Patients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {"★".repeat(5)}
                </div>
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== 2. FLOATING FEATURE PILLARS ====================== */}
      <section className="relative z-20 -mt-16 sm:-mt-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {featurePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group relative rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xl shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0052FF] transition-colors group-hover:bg-[#0052FF] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-800">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-black">{pillar.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-slate-800 font-medium">
                    {pillar.desc}
                  </p>
                  <div className="mt-5">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052FF] transition-colors group-hover:text-[#0042D1]"
                    >
                      Explore methodology
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================== 3. FOUNDERS & CLINICAL DIRECTORS ====================== */}
      <section className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-subtitle">Clinical Leadership</span>
            <h2 className="mt-4 text-black">
              Trusted medical leadership with decades of specialization
            </h2>
            <p className="mt-3 text-base text-slate-800 font-medium">
              At VO2 Max, your recovery is directly guided by certified MPT founders and experienced physiotherapists dedicated to world-class musculoskeletal care.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-300 lg:flex-row lg:items-center lg:gap-8"
              >
                <div className="relative mx-auto h-44 w-44 shrink-0 overflow-hidden rounded-2xl bg-blue-50/70 border border-blue-100 shadow-inner">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={180}
                    height={180}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute bottom-2 left-2 rounded-md bg-white px-2 py-0.5 text-[11px] font-bold text-[#0052FF] shadow-xs">
                    {doctor.experience}
                  </div>
                </div>

                <div className="mt-6 flex-1 text-center lg:mt-0 lg:text-left">
                  <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#0052FF]">
                      {doctor.qualifications}
                    </span>
                    <span className="text-xs text-slate-700 font-semibold">
                      {doctor.title}
                    </span>
                  </div>

                  <h3 className="mt-2 text-2xl font-bold text-black">
                    {doctor.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-800 font-medium line-clamp-3">
                    {doctor.bio}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5 justify-center lg:justify-start">
                    {doctor.specialties.slice(0, 3).map((spec) => (
                      <span
                        key={spec}
                        className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-800"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/book-appointment"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052FF] hover:underline"
                    >
                      Book Consultation with {doctor.name.split(" ")[0]} {doctor.name.split(" ")[1]}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== 4. CLINICAL SERVICES ====================== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="section-subtitle">Specialized Treatments</span>
              <h2 className="mt-4 text-black">
                Comprehensive recovery protocols
              </h2>
              <p className="mt-2 text-base text-slate-800 font-medium max-w-xl">
                Targeted physical therapies engineered to accelerate rehabilitation, eliminate pain, and restore active lifestyle.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:border-[#0052FF] hover:bg-blue-50/50 hover:text-[#0052FF]"
            >
              View All 14 Services
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clinicalServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0052FF] transition-colors group-hover:bg-[#0052FF] group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-800 group-hover:bg-blue-50 group-hover:text-[#0052FF]">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-black transition-colors group-hover:text-[#0052FF]">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-slate-800 font-medium">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#0052FF] pt-4 border-t border-slate-100">
                    <span>Clinical protocol details</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================== 5. FACILITY & TECHNOLOGY GALLERY ====================== */}
      <section className="py-20 sm:py-28 bg-slate-50/70 border-y border-slate-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-subtitle">Clinic Environment</span>
            <h2 className="mt-4 text-black">
              State-of-the-art rehabilitation facility
            </h2>
            <p className="mt-3 text-base text-slate-800 font-medium">
              Equipped with modern therapeutic modalities, private consultation suites, and dedicated athletic training spaces in Vijayanagar II Stage, Mysuru.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galleryHighlights.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block rounded-md bg-white/20 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                      {item.tag}
                    </span>
                    <h4 className="mt-1 text-[15px] font-bold text-white leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0052FF] hover:underline"
            >
              View complete photo gallery
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================== 6. CLINICAL PRICING & PACKAGES ====================== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-subtitle">Transparent Care</span>
            <h2 className="mt-4 text-black">
              Clear, structured care packages
            </h2>
            <p className="mt-3 text-base text-slate-800 font-medium">
              No hidden fees. Every session is designed for measurable recovery milestones under expert clinical supervision.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {transparentPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-[#0052FF] bg-white shadow-xl shadow-blue-500/10"
                    : "border border-slate-200 bg-slate-50/60 shadow-xs hover:border-slate-300 hover:bg-white hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-[#0052FF] to-[#0042D1] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0052FF]">
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="mt-2 text-2xl font-bold text-black">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-700 font-semibold">
                    {plan.subtitle}
                  </p>

                  <div className="my-6 border-t border-slate-200" />

                  <ul className="space-y-3.5">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0052FF]" />
                        <span className="text-sm font-semibold text-slate-900 leading-relaxed">
                          {feat}
                        </span>
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
                        : "border border-slate-300 bg-white text-black font-bold hover:bg-slate-50 hover:border-slate-400"
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

      {/* ====================== 7. PATIENT SUCCESS STORIES ====================== */}
      <section className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-subtitle">Real Patient Outcomes</span>
            <h2 className="mt-4 text-black">
              Recovered patients across Mysuru
            </h2>
            <p className="mt-3 text-base text-slate-800 font-medium">
              From elite marathoners to post-surgery rehabilitation, hear directly from patients who regained pain-free mobility.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-xs transition-all hover:shadow-lg hover:border-blue-200"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-black font-medium italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 font-bold text-[#0052FF]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-black">{t.name}</h4>
                    <span className="text-xs font-semibold text-slate-700">
                      Verified Patient • Mysuru
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0052FF] hover:underline"
            >
              Read more patient testimonials
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================== 8. HIGH-CONVERTING BOTTOM CTA ====================== */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/40 via-slate-900 to-slate-950" />
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-1.5 text-xs font-semibold text-blue-200">
            <Clock className="h-3.5 w-3.5 text-[#00D2FF]" />
            <span>Open Mon–Sat: 09:00 AM – 09:00 PM</span>
          </div>

          <h2 className="mt-6 text-white text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to live without pain and regain your mobility?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base text-slate-200 font-normal">
            Take the first step today. Book your clinical consultation with Dr. Pradeep &amp; the specialized physiotherapy team at VO2 Max.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-[#0052FF] to-[#0042D1] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-blue-500/30 transition-all hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment Now
            </Link>
            <a
              href={`https://wa.me/${clinic.whatsapp}?text=Hi%20VO2%20Max,%20I'd%20like%20to%20consult%20regarding%20physiotherapy`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-6 py-4 text-xs font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md transition-all hover:bg-emerald-500/25"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#0052FF]" />
              H1 Srihari Medical Trust, Vijayanagar II Stage, Mysuru
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-[#0052FF]" />
              +91 94801 66770
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
