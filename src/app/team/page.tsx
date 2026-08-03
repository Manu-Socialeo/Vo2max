import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { doctors } from "@/lib/clinic";

export default function Team() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-[#0052FF] via-[#2d3024] to-[#1a1a1a] py-24">
        <div className="mx-auto w-full max-w-[1240px] px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2.5 text-[13px] font-medium uppercase tracking-[2px] text-white before:inline-block before:h-[2px] before:w-6 before:bg-white">
            Our team
          </span>
          <h1 className="mt-6 text-2xl text-white">Our Team</h1>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Meet our experienced physiotherapists dedicated to your recovery.
          </p>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="rounded-[20px] border border-border/50 bg-white p-5 transition-all hover:shadow-lg"
              >
                <div className="mb-4 aspect-square w-full max-w-[200px] rounded-[20px] bg-muted" />
                <h3 className="text-base">{doctor.name}</h3>
                <p className="mt-1 text-xs font-medium text-primary">
                  {doctor.title}
                </p>
                <p className="mt-1 text-xs text-foreground/60">
                  {doctor.qualifications} &middot; {doctor.experience}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-foreground/70">
                  {doctor.bio}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {doctor.specialties.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-[#EEF1E4] px-3 py-1 text-xs font-medium text-primary"
                    >
                      {s}
                    </span>
                  ))}
                  {doctor.specialties.length > 3 && (
                    <span className="rounded-full bg-[#EEF1E4] px-3 py-1 text-xs font-medium text-foreground/60">
                      +{doctor.specialties.length - 3}
                    </span>
                  )}
                </div>
                <Link
                  href={`/team/${doctor.id}`}
                  className="btn-primary mt-4 inline-flex text-xs"
                >
                  View profile
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
