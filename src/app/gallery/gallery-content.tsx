"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Eye } from "lucide-react";

const categories = ["All", "Clinic", "Equipment", "Team", "Events"];

const galleryItems = [
  { id: 1, src: "/images/gallery/gallery-1.jpg", category: "Clinic", label: "Physiotherapy Treatment Suites" },
  { id: 2, src: "/images/gallery/gallery-5.jpg", category: "Equipment", label: "Modern Therapeutic Modalities" },
  { id: 3, src: "/images/gallery/gallery-10.jpg", category: "Team", label: "Supervised Clinical Rehabilitation" },
  { id: 4, src: "/images/gallery/gallery-12.jpg", category: "Events", label: "Sports & Health Workshops" },
  { id: 5, src: "/images/gallery/gallery-2.jpg", category: "Clinic", label: "Advanced Electrotherapy & Pain Relief" },
  { id: 6, src: "/images/gallery/gallery-6.jpg", category: "Equipment", label: "Functional Training & Conditioning Bay" },
  { id: 7, src: "/images/gallery/gallery-11.jpg", category: "Team", label: "Post-Surgical Exercise Protocols" },
  { id: 8, src: "/images/gallery/gallery-15.jpg", category: "Events", label: "Athletic Mobility Seminars" },
  { id: 9, src: "/images/gallery/gallery-4.jpg", category: "Clinic", label: "Diagnostic Assessment Bay" },
  { id: 10, src: "/images/gallery/gallery-9.jpg", category: "Equipment", label: "Strength & Joint Mobilization Area" },
  { id: 11, src: "/images/gallery/gallery-14.jpg", category: "Team", label: "Senior Physiotherapist Guidance" },
  { id: 12, src: "/images/gallery/gallery-16.jpg", category: "Events", label: "Marathon & Runner Preparation" },
];

export default function GalleryContent() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? galleryItems
    : galleryItems.filter((g) => g.category === active);

  return (
    <div className="bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-1.5 text-xs font-semibold text-blue-200">
            <Camera className="h-3.5 w-3.5 text-[#00D2FF]" />
            <span>Clinical Environment &amp; Bays</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Our Facility in Photos
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Take a virtual tour of our modern physiotherapy suites, athletic training equipment, and clinical bays in Mysuru.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 sm:py-28 bg-slate-50/70">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* Filter Pills */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                  active === cat
                    ? "bg-[#0052FF] text-white shadow-md shadow-blue-500/25"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-[#0052FF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="rounded-md bg-blue-500/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                      {item.category}
                    </span>
                    <h3 className="mt-1 text-sm font-bold text-white leading-snug">
                      {item.label}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
