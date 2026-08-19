import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Star, Calendar, Award } from "lucide-react";
import { doctors, clinic } from "@/lib/clinic";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.id === slug);
  if (!doctor) return {};
  const title = `${doctor.name} | VO2 Max Physiotherapy Mysuru`;
  return {
    title,
    description: doctor.bio.slice(0, 160),
    alternates: { canonical: `https://vo2max.in/team/${slug}` },
    openGraph: { title, description: doctor.bio, url: `https://vo2max.in/team/${slug}` },
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.id === slug);
  if (!doctor) notFound();

  const isPradeep = slug === "pradeep";
  const isPinakin = slug === "pinakin";
  const isFeaturedDoctor = isPradeep || isPinakin;

  const schemaType = isPradeep ? "Physician" : "Person";

  const schema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: doctor.name,
    jobTitle: doctor.title,
    description: doctor.bio,
    worksFor: {
      "@type": "MedicalClinic",
      name: "VO2 Max Physiotherapy Rehabilitation & Fitness Center",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mysuru",
        addressRegion: "Karnataka",
      },
    },
    medicalSpecialty: isPradeep ? "Physiotherapy" : undefined,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vo2max.in" },
      { "@type": "ListItem", position: 2, name: "Team", item: "https://vo2max.in/team" },
      { "@type": "ListItem", position: 3, name: doctor.name, item: `https://vo2max.in/team/${slug}` },
    ],
  };

  const detailedBio = isPradeep
    ? "Dr. Pradeep Kumar M N brings over 18 years of clinical expertise to VO2 Max Physiotherapy Rehabilitation & Fitness Center in Mysuru. As Co-Founder and Head Physiotherapist, he has treated thousands of patients across Mysuru helping them recover from sports injuries, orthopedic conditions, and post-surgical challenges. His patient-first approach combines advanced manual therapy techniques with evidence-based exercise prescription. Dr. Pradeep is particularly known for his work in sports rehabilitation, having helped athletes from various disciplines return to peak performance after injury. He holds an MPT degree and is a life member of the Indian Association of Physiotherapists (MIAP)."
    : "Dr. Pinakin Prakash Ayare is a Co-Founder of VO2 Max Physiotherapy Rehabilitation & Fitness Center with over 17 years of experience in the field. His expertise spans cardiac rehabilitation, neurology rehabilitation, geriatric physiotherapy, and fitness training. Dr. Pinakin is passionate about integrating modern rehabilitation science with holistic wellness approaches. He holds an MPT degree and is a life member of MIAP. His work in cardiac rehabilitation has helped numerous patients recover and thrive after cardiac events.";

  return (
    <div className="bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-1.5 text-xs font-semibold text-blue-200">
                <Award className="h-3.5 w-3.5 text-[#00D2FF]" />
                <span>Clinical Specialist Profile</span>
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">{doctor.name}</h1>
              <p className="mt-2 text-base font-semibold text-[#00D2FF]">{doctor.title}</p>
              <p className="mt-1 text-xs text-slate-300">{doctor.qualifications} &middot; {doctor.experience} Clinical Mastery</p>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-blue-900/30 border border-blue-400/20 shadow-2xl">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Bio & Details */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <span className="section-subtitle">Biography</span>
              <h2 className="mt-4 text-slate-900">About {doctor.name}</h2>
              <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">{detailedBio}</p>

              {isFeaturedDoctor && (
                <div className="mt-10 space-y-8">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8">
                    <h3 className="text-lg font-bold text-slate-900">Clinical Focus &amp; Certifications</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {isPradeep
                        ? "Dr. Pradeep holds postgraduate Master of Physiotherapy credentials and life membership with MIAP. His specialized training encompasses manual joint mobilization, dry needling, kinesiology taping, and high-performance athletic return-to-sport protocols."
                        : "Dr. Pinakin holds postgraduate Master of Physiotherapy credentials with advanced clinical experience in cardiac rehabilitation, neuro-physiotherapy, and functional exercise science."}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Specialties & Actions */}
            <div>
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-4">Core Clinical Specialties</h3>
                <ul className="space-y-3">
                  {doctor.specialties.map((s) => (
                    <li key={s} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0052FF]" />
                      <span className="text-xs font-semibold text-slate-700">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50/60 p-7">
                <h3 className="text-base font-bold text-slate-900 mb-4">Consultation Options</h3>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#0052FF] to-[#0042D1] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg"
                  >
                    <Calendar className="h-4 w-4" /> Book Appointment
                  </Link>
                  <a
                    href={`https://wa.me/${clinic.whatsapp}?text=Hi%20VO2%20Max,%20I%20would%20like%20to%20consult%20with%20${encodeURIComponent(doctor.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white py-3.5 text-xs font-bold text-slate-800 hover:border-[#0052FF] hover:text-[#0052FF]"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-500" /> WhatsApp Consult
                  </a>
                  {doctor.linkedin && (
                    <a
                      href={doctor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200 bg-sky-50/70 py-3.5 text-xs font-bold text-sky-700 hover:bg-sky-100"
                    >
                      <svg className="h-4 w-4 fill-sky-600" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      View LinkedIn Profile
                    </a>
                  )}
                  <a
                    href={`tel:${clinic.phone}`}
                    className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#0052FF] hover:underline pt-2"
                  >
                    <Phone className="h-3.5 w-3.5" /> Call Clinic: {clinic.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-slate-50/80 border-t border-slate-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-subtitle">Clinical Excellence</span>
            <h2 className="mt-4 text-slate-900">Why choose {doctor.name.split(" ")[0]}?</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Individualized Assessment", desc: "Every patient receives a personalized physical evaluation and recovery timeline." },
              { title: "Evidence-Based Protocols", desc: "Regimens based on modern clinical physical therapy science and proven methodologies." },
              { title: `${doctor.experience} Experience`, desc: "Extensive hands-on mastery treating athletic injuries and complex spine/joint cases in Mysuru." },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[#0052FF]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-xs leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
