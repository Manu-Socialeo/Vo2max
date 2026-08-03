import { clinic } from "@/lib/clinic";
import { MapPin, Clock, Navigation, ArrowRight, Landmark } from "lucide-react";
import Link from "next/link";

export default function LocationContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: clinic.name,
            url: "https://vo2max.in",
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
      <section className="relative overflow-hidden bg-[#EEF1E4] py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-subtitle">Our Location</span>
          <h1 className="mt-4 text-[56px] font-medium leading-[1.1] tracking-[-0.03em] max-sm:text-[34px]">
            Find us in Mysuru
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[17px] text-foreground/70">
            Conveniently located in Vijayanagar II Stage, Mysuru. Visit us for expert physiotherapy care.
          </p>
        </div>
      </section>

      {/* Address + Details */}
      <section className="py-20 sm:py-[100px]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[20px] bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF1E4]">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-[20px] font-medium">Address</h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                {clinic.address}
              </p>
            </div>
            <div className="rounded-[20px] bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF1E4]">
                <Landmark className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-[20px] font-medium">Landmark</h3>
              <p className="mt-2 text-sm text-foreground/70">
                {clinic.landmark}
              </p>
            </div>
            <div className="rounded-[20px] bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF1E4]">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-[20px] font-medium">Timings</h3>
              <p className="mt-2 text-sm text-foreground/70">{clinic.timings}</p>
              <p className="mt-1 text-xs text-foreground/50">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Map */}
      <section className="pb-20 sm:pb-[100px]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[20px]">
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
              className="btn-primary"
              data-conversion="map_click"
              data-conversion-label="Location Page Directions"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/contact" className="btn-outline">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
