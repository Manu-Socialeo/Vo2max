import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MessageCircle, Phone, Star } from "lucide-react";
import { doctors, clinic } from "@/lib/clinic";

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
    ? "Dr. Pradeep Kumar M N brings over 18 years of clinical expertise to VO2 Max Physiotherapy Rehabilitation & Fitness Center in Mysuru. As Co-Founder and Head Physiotherapist, he has treated thousands of patients across Mysuru helping them recover from sports injuries, orthopedic conditions, and post-surgical challenges. His patient-first approach combines advanced manual therapy techniques with evidence-based exercise prescription. Dr. Pradeep is particularly known for his work in sports rehabilitation, having helped athletes from various disciplines return to peak performance after injury. He holds an MPT degree and is a life member of the Indian Association of Physiotherapists (MIAP). His commitment to continuing education ensures that his patients benefit from the latest physiotherapy techniques. At our Vijayanagar II Stage center, Dr. Pradeep leads a team dedicated to providing the highest standard of physiotherapy care in Mysuru."
    : "Dr. Pinakin Prakash Ayare is a Co-Founder of VO2 Max Physiotherapy Rehabilitation & Fitness Center with over 17 years of experience in the field. His expertise spans cardiac rehabilitation, neurology rehabilitation, geriatric physiotherapy, and fitness training. Dr. Pinakin is passionate about integrating modern rehabilitation science with holistic wellness approaches. He holds an MPT degree and is a life member of MIAP. His work in cardiac rehabilitation has helped numerous patients recover and thrive after cardiac events. Dr. Pinakin believes in treating the whole person — not just the condition — and takes time to understand each patient's lifestyle, goals, and challenges. He is dedicated to making high-quality physiotherapy accessible to the Mysuru community and works closely with Dr. Pradeep to ensure every patient receives comprehensive, coordinated care at our center in Vijayanagar II Stage.";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0052FF] via-[#2d3024] to-[#1a1a1a] py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2.5 text-[13px] font-medium uppercase tracking-[2px] text-white before:inline-block before:h-[2px] before:w-6 before:bg-white">
                Our Team
              </span>
              <h1 className="mt-6 text-white">{doctor.name}</h1>
              <p className="mt-2 text-lg font-medium text-white/80">{doctor.title}</p>
              <p className="mt-2 text-sm text-white/50">{doctor.qualifications} &middot; {doctor.experience}</p>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-[20px] bg-white/10">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <span className="section-subtitle">Biography</span>
              <h2 className="mt-4">About {doctor.name}</h2>
              <p className="mt-6 leading-relaxed text-foreground/70">{detailedBio}</p>
              {isFeaturedDoctor && (
                <>
                  <div className="mt-10">
                    <h3 className="text-xl font-medium">Awards &amp; Recognition</h3>
                    <p className="mt-3 leading-relaxed text-foreground/70">
                      {isPradeep
                        ? "Dr. Pradeep has been recognized for his outstanding contributions to physiotherapy in Mysuru, receiving the Best Physiotherapist Award from the Indian Association of Physiotherapists. His innovative approaches to sports rehabilitation have been featured in multiple medical conferences across Karnataka. He continues to mentor young physiotherapists and contribute to advancing the field through research and clinical practice."
                        : "Dr. Pinakin has received accolades for his pioneering work in cardiac rehabilitation, being honored with the Excellence in Rehabilitation Award by the Mysuru Medical Association. His holistic approach to patient recovery has helped numerous patients regain their quality of life after major cardiac events. He is a sought-after speaker at national conferences on integrative rehabilitation medicine."}
                    </p>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-medium">Certifications</h3>
                    <p className="mt-3 leading-relaxed text-foreground/70">
                      {isPradeep
                        ? "Dr. Pradeep holds advanced certifications in Manual Therapy and Sports Rehabilitation from the Indian Association of Physiotherapists. He is a certified practitioner in McKenzie Method for spinal rehabilitation and has completed specialized training in dry needling and kinesiology taping. His commitment to continuing education ensures that patients receive the most up-to-date, evidence-based treatments available in the field of physiotherapy."
                        : "Dr. Pinakin is certified in Cardiac Rehabilitation by the Indian Society of Cardiology and holds advanced credentials in Neurological Physiotherapy. He has completed specialized training in geriatric rehabilitation and fitness assessment from leading institutions. His certifications reflect his dedication to providing comprehensive, multidisciplinary care to patients across all age groups and conditions."}
                    </p>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-medium">Accomplishments</h3>
                    <p className="mt-3 leading-relaxed text-foreground/70">
                      {isPradeep
                        ? "With over 18 years of clinical practice, Dr. Pradeep has successfully treated more than 5,000 patients across a wide range of orthopedic and sports-related conditions. He co-founded VO2 Max Physiotherapy with a vision to make high-quality rehabilitation accessible to the Mysuru community. His work has been instrumental in establishing evidence-based physiotherapy protocols that have become a benchmark for care in the region."
                        : "Dr. Pinakin has dedicated over 17 years to advancing the field of physiotherapy, with a special focus on cardiac and neurological rehabilitation. He has helped hundreds of patients recover from life-altering conditions and return to their daily activities with confidence. His collaborative approach with cardiologists and neurologists ensures that every patient receives coordinated, comprehensive care tailored to their unique needs."}
                    </p>
                  </div>
                </>
              )}
            </div>
            <div>
              <div className="rounded-[20px] border border-border/50 bg-white p-8">
                <h3 className="mb-4 text-lg font-medium">Specialties</h3>
                <ul className="space-y-3">
                  {doctor.specialties.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Star className="h-2.5 w-2.5 text-primary" />
                      </span>
                      <span className="text-sm text-foreground/80">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-[20px] border border-border/50 bg-white p-8">
                <h3 className="mb-4 text-lg font-medium">Quick Actions</h3>
                <div className="flex flex-col gap-3">
                  <a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center gap-2" data-conversion="whatsapp_click" data-conversion-label={`Doctor Page ${doctor.name}`}>
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                  <a href={`tel:${clinic.phone}`} className="btn-outline inline-flex items-center justify-center gap-2" data-conversion="call_click" data-conversion-label={`Doctor Page ${doctor.name}`}>
                    <Phone className="h-4 w-4" /> Call {clinic.phone}
                  </a>
                  <Link href="/book-appointment" className="btn-primary inline-flex items-center justify-center gap-2" data-conversion="appointment_click" data-conversion-label={`Doctor Page ${doctor.name}`}>
                    Book Appointment <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF1E4] py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-subtitle justify-center">Experience</span>
            <h2 className="mt-4">Why Choose {doctor.name.split(" ")[0]}?</h2>
            <p className="mt-4 text-foreground/70">
              With {doctor.experience} of clinical experience and a commitment to excellence, {doctor.name.split(" ")[1]} brings unparalleled expertise to every patient interaction.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Patient-Centered Care", desc: "Every treatment plan is tailored to your unique needs, goals, and lifestyle for the best possible outcomes." },
              { title: "Evidence-Based Practice", desc: "Treatments are grounded in the latest scientific research and clinical guidelines for effective results." },
              { title: "Years of Experience", desc: `${doctor.experience} of hands-on clinical experience treating a wide range of conditions in Mysuru.` },
              { title: "Comprehensive Approach", desc: "We address not just symptoms but underlying causes, ensuring lasting relief and prevention." },
              { title: "Modern Facilities", desc: "Our Vijayanagar II Stage center is equipped with advanced therapy equipment and a welcoming environment." },
              { title: "Proven Track Record", desc: `${isPradeep ? "Thousands" : "Hundreds"} of satisfied patients who have regained their mobility and quality of life.` },
            ].map((item) => (
              <div key={item.title} className="rounded-[20px] bg-white p-7 transition-all hover:shadow-lg">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <h4 className="mb-2 text-base font-medium">{item.title}</h4>
                <p className="text-sm leading-relaxed text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0052FF] via-[#2d3024] to-[#1a1a1a] py-24">
        <div className="mx-auto max-w-[1240px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-white">Book a Session with {doctor.name.split(" ")[0]}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Take the first step toward recovery. Visit our center at {clinic.addressShort}, {clinic.landmark}, {clinic.city}.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 !bg-[#0052FF] !text-white hover:!bg-[#0046E0]" data-conversion="whatsapp_click" data-conversion-label={`Doctor Page Bottom ${doctor.name}`}>
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
            <a href={`tel:${clinic.phone}`} className="btn-primary inline-flex items-center gap-2 !bg-[#0052FF] !text-white hover:!bg-[#0046E0]" data-conversion="call_click" data-conversion-label={`Doctor Page Bottom ${doctor.name}`}>
              <Phone className="h-4 w-4" /> Call now
            </a>
            <Link href="/book-appointment" className="btn-outline !border-white/30 !text-white hover:!border-[#0052FF] hover:!bg-[#0052FF] hover:!text-white" data-conversion="appointment_click" data-conversion-label={`Doctor Page Bottom ${doctor.name}`}>
              Book appointment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/50">
            <Link href="/services" className="text-white/70 underline hover:text-white">View all services</Link> &middot; <Link href="/contact" className="text-white/70 underline hover:text-white">Get directions</Link>
          </p>
        </div>
      </section>
    </>
  );
}
