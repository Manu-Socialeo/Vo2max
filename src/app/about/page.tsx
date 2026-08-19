import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Target, Eye, Heart, Users, Award, ShieldCheck, CheckCircle2, Phone, Calendar } from "lucide-react";
import { doctors, clinic } from "@/lib/clinic";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata = {
  title: "About Us | VO2 Max Physiotherapy Mysuru",
  description: "Learn about VO2 Max Physiotherapy Rehabilitation & Fitness Center in Mysuru. Founded by Dr. Pradeep Kumar M N and Dr. Pinakin Prakash Ayare with 18+ years of clinical experience.",
  alternates: { canonical: "https://vo2max.in/about" },
  openGraph: {
    title: "About Us | VO2 Max Physiotherapy Mysuru",
    description: "Learn about VO2 Max Physiotherapy in Mysuru. Founded by Dr. Pradeep and Dr. Pinakin with 18+ years of clinical experience.",
    url: "https://vo2max.in/about",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vo2max.in" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://vo2max.in/about" },
  ],
};

const values = [
  {
    icon: Target,
    title: "Evidence-Based Precision",
    description:
      "Every treatment regimen is grounded in physical therapy science, objective biomechanical assessments, and targeted progress tracking.",
  },
  {
    icon: Eye,
    title: "Patient-Centric Dedication",
    description:
      "We design custom recovery roadmaps tailored to your unique lifestyle, whether resuming daily walks or training for international marathons.",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "A warm, supportive, and professional clinical environment where your recovery comfort, dignity, and long-term health come first.",
  },
];

export default function About() {
  return (
    <div className="bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-1.5 text-xs font-semibold text-blue-200">
            <Award className="h-3.5 w-3.5 text-[#00D2FF]" />
            <span>Dedicated to Clinical Excellence</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            About VO2 Max Physiotherapy &amp; Rehab
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Founded by Senior Physiotherapists Dr. Pradeep Kumar and Dr. Pinakin Prakash, bringing 18+ years of dedicated clinical care to Mysuru.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="section-subtitle">Our Clinical Heritage</span>
              <h2 className="mt-4 text-slate-900">
                Empowering movement, restoring function, accelerating recovery
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                At VO2 Max Physiotherapy Rehabilitation &amp; Fitness Center, we believe that effective rehabilitation requires a seamless fusion of hands-on manual expertise, modern therapeutic modalities, and progressive functional exercise.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                From competitive athletic injuries and post-surgical orthopedics to chronic spine pain and cardiac rehabilitation, our center provides compassionate, results-driven clinical care in Mysuru.
              </p>
              <ul className="mt-8 space-y-3.5">
                {[
                  "18+ years of clinical specialization in Mysuru",
                  "Advanced electrotherapy & biomechanical exercise equipment",
                  "Personalized recovery protocols with monitored milestones",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0052FF]" />
                    <span className="text-xs font-semibold text-slate-700 sm:text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-slate-900/5">
              <img
                src="/images/about-img.jpg"
                alt="VO2 Max Physiotherapy Rehabilitation & Fitness Center in Mysuru"
                className="aspect-4/3 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-50/80 border-y border-slate-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { values: [20, 35, 500, 98], suffix: "+", label: "Years Combined Clinical Mastery" },
              { values: [500, 20, 35, 98], suffix: "+", label: "Patients Successfully Rehabilitated" },
              { values: [35, 500, 20, 98], suffix: "+", label: "Advanced Therapeutic Techniques" },
              { values: [98, 35, 500, 20], suffix: "%", label: "Patient Satisfaction & Mobility Rate" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white p-6 border border-slate-200/80 shadow-xs">
                <div className="text-4xl font-bold text-[#0052FF] lg:text-5xl">
                  <AnimatedCounter values={stat.values} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-xs font-medium text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-subtitle">Our Leadership</span>
            <h2 className="mt-4 text-slate-900">Meet our chief specialists</h2>
            <p className="mx-auto mt-3 text-sm text-slate-600 sm:text-base">
              Direct, hands-on clinical care led by our founders with postgraduate master&apos;s degrees in physical therapy.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {doctors.map((doctor) => (
              <Link
                key={doctor.id}
                href={`/team/${doctor.id}`}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1"
              >
                <div className="mb-6 aspect-square w-full max-w-[180px] overflow-hidden rounded-2xl bg-blue-50/80 border border-blue-100 shadow-inner">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-[#0052FF]">
                  {doctor.qualifications}
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-[#0052FF] transition-colors">
                  {doctor.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {doctor.title} • {doctor.experience}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-3">
                  {doctor.bio}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#0052FF]">
                  View full credentials
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50/80 border-t border-slate-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-subtitle">Clinical Philosophy</span>
            <h2 className="mt-4 text-slate-900">Our core standards</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs transition-all hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0052FF]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/40 via-slate-900 to-slate-950" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-4xl">
            Begin Your Recovery Journey Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xs text-slate-300 sm:text-sm">
            Book an assessment with Dr. Pradeep, Dr. Pinakin &amp; the specialized physiotherapy team at VO2 Max.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#0052FF] to-[#0042D1] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Calendar className="h-4 w-4" />
              Book Assessment
            </Link>
            <a
              href={`tel:${clinic.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md hover:bg-white/20"
            >
              <Phone className="h-4 w-4 text-[#00D2FF]" />
              Call {clinic.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
