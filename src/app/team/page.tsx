import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Stethoscope, Calendar, Phone } from "lucide-react";
import { doctors, clinic } from "@/lib/clinic";

export const metadata = {
  title: "Clinical Specialists & Team | VO2 Max Physiotherapy Mysuru",
  description: "Meet our head physiotherapists Dr. Pradeep Kumar M N and Dr. Pinakin Prakash Ayare with over 18+ years of clinical rehabilitation mastery in Mysuru.",
};

export default function Team() {
  return (
    <div className="bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-1.5 text-xs font-semibold text-blue-200">
            <Award className="h-3.5 w-3.5 text-[#00D2FF]" />
            <span>Senior Clinical Specialists</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Our Founders &amp; Clinical Heads
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Decades of expertise in sports rehabilitation, musculoskeletal physiotherapy, orthopedic post-op recovery, and cardiac care in Mysuru.
          </p>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-20 sm:py-28 bg-slate-50/70">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-xs transition-all duration-300 hover:shadow-xl hover:border-blue-200"
              >
                <div>
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl bg-blue-50 border border-blue-100 shadow-inner">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        width={150}
                        height={150}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-[#0052FF]">
                        {doctor.qualifications}
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-slate-900">
                        {doctor.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#0052FF]">
                        {doctor.title}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Experience: {doctor.experience}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-xs leading-relaxed text-slate-600">
                    {doctor.bio}
                  </p>

                  <div className="mt-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Core Specialties
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {doctor.specialties.map((s) => (
                        <span
                          key={s}
                          className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/team/${doctor.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052FF] hover:underline"
                  >
                    View detailed profile <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#0052FF] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#0042D1]"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    Book Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
