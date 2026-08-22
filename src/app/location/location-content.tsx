import { clinic } from "@/lib/clinic";
import { MapPin, Clock, Navigation, ArrowRight, Landmark } from "lucide-react";
import Link from "next/link";

export default function LocationContent() {
  return (
    <div className="bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: clinic.name,
            url: "https://vo2maxclinic.vercel.app",
            telephone: clinic.phone,
            email: clinic.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: "H1 Srihari Medical Trust, opposite to Learner's PU College",
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
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-1.5 text-xs font-semibold text-blue-200">
            <MapPin className="h-3.5 w-3.5 text-[#00D2FF]" />
            <span>Clinic Location</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Visit Our Center in Mysuru
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Conveniently located in Vijayanagar II Stage, Mysuru with dedicated parking and modern clinical facilities.
          </p>
        </div>
      </section>

      {/* Address Cards */}
      <section className="py-20 sm:py-28 bg-slate-50/70">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0052FF]">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Clinic Address</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                {clinic.address}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0052FF]">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Landmark</h3>
              <p className="mt-2 text-xs text-slate-600">
                {clinic.landmark}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0052FF]">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Clinical Timings</h3>
              <p className="mt-2 text-xs text-slate-600">{clinic.timings}</p>
              <p className="mt-1 text-[11px] font-semibold text-slate-400">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 sm:pb-28 bg-slate-50/70">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.012345!2d76.6539!3d12.3084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE4JzMwLjIiTiA3NsKwMzknMTQuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VO2 Max Clinic Location"
            />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://maps.google.com/?q=12.3084,76.6539"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#0052FF] to-[#0042D1] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Navigation className="h-4 w-4" />
              Get Directions in Google Maps
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-xs font-bold text-slate-800 hover:border-[#0052FF] hover:text-[#0052FF]"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
