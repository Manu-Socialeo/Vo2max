import Link from "next/link";
import { ArrowRight, Check, Target, Eye, Heart, Users } from "lucide-react";
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

const medicalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "VO2 Max Physiotherapy Rehabilitation & Fitness Center",
  url: "https://vo2max.in",
  telephone: "+919480166770",
  email: "pinakinphysio@yahoo.com",
  founder: [
    { "@type": "Person", name: "Dr. Pradeep Kumar M N", jobTitle: "Co-Founder and Head Physiotherapist" },
    { "@type": "Person", name: "Dr. Pinakin Prakash Ayare", jobTitle: "Co-Founder" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "H1 Shrihari Medical Trust, opposite to Learner's PU College",
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
  sameAs: [
    "https://www.facebook.com/people/VO2-Max-Physiotherapy-Rehabilitation-Fitness/61574654481980/",
    "https://www.linkedin.com/company/vo2-max-physiotherapy-rehabilitation-fitness",
    "https://www.instagram.com/vo2max_prf/",
  ],
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide accessible, high-quality physiotherapy and rehabilitation services that empower individuals to regain their strength, mobility, and confidence.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be Mysuru's most trusted physiotherapy center, setting the standard for compassionate care and innovative rehabilitation techniques.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Compassion, integrity, and excellence guide every treatment plan we create and every interaction we have with our patients.",
  },
];

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }} />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-[#0052FF] via-[#2d3024] to-[#1a1a1a] py-24">
        <div className="mx-auto w-full max-w-[1240px] px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2.5 text-[13px] font-medium uppercase tracking-[2px] text-white before:inline-block before:h-[2px] before:w-6 before:bg-white">
            About us
          </span>
          <h1 className="mt-6 text-white">About Us</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="section-subtitle">Our story</span>
              <h2 className="mt-4 max-w-xl">
                Comprehensive care for your{" "}
                <span className="text-primary">recovery journey</span>
              </h2>
              <p className="mt-6 leading-relaxed text-foreground/70">
                At VO2 Max Physiotherapy Rehabilitation & Fitness Center, we
                believe everyone deserves access to expert physiotherapy care.
                Founded by Dr. Pradeep Kumar M N and Dr. Pinakin Prakash Ayare,
                our center combines decades of clinical experience with a
                genuine passion for helping patients recover.
              </p>
              <p className="mt-4 leading-relaxed text-foreground/70">
                From sports injuries to post-surgical rehabilitation, chronic
                pain management to fitness coaching — our team delivers
                personalized care in a supportive, professional environment.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "18+ years of clinical expertise",
                  "State-of-the-art rehabilitation equipment",
                  "Patient-first treatment philosophy",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </span>
                    <span className="text-sm font-medium text-foreground/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-[20px] bg-muted" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#EEF1E4] py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { values: [20, 35, 500, 98], suffix: "+", label: "Years of experience" },
              { values: [500, 20, 35, 98], suffix: "+", label: "Patients treated" },
              { values: [35, 500, 20, 98], suffix: "+", label: "Therapy techniques" },
              { values: [98, 35, 500, 20], suffix: "%", label: "Success rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl font-medium text-primary lg:text-6xl">
                  <AnimatedCounter values={stat.values} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-sm text-foreground/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="section-subtitle">Our team</span>
            <h2 className="mt-4">Meet our specialists</h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground/70">
              Our experienced physiotherapists are dedicated to providing you
              with the highest standard of care.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {doctors.map((doctor) => (
              <Link
                key={doctor.id}
                href={`/team/${doctor.id}`}
                className="group rounded-[20px] border border-border/50 bg-white p-8 transition-all hover:shadow-lg"
              >
                <div className="mb-5 aspect-square w-full max-w-[200px] rounded-[20px] bg-muted" />
                <h3 className="group-hover:text-primary">{doctor.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {doctor.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70 line-clamp-3">
                  {doctor.bio}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  View profile
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/team" className="btn-primary inline-flex">
              Meet the full team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#EEF1E4] py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="section-subtitle">Why choose us</span>
            <h2 className="mt-4">Our core principles</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[20px] bg-white p-8 transition-all hover:shadow-lg"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF1E4]">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0052FF] via-[#2d3024] to-[#1a1a1a] py-24">
        <div className="mx-auto max-w-[1240px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-white">
            Ready to begin your recovery?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Book a consultation with our expert team and take the first step
            toward better health.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/book-appointment" className="btn-primary inline-flex">
              Book a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${clinic.phone}`}
              className="btn-primary inline-flex !bg-[#0052FF] !text-white hover:!bg-[#0046E0]"
            >
              Call us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
