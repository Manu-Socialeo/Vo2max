"use client";

import { useState } from "react";
import { Camera } from "lucide-react";

const categories = ["All", "Clinic", "Equipment", "Team", "Events"];

const galleryItems = [
  { id: 1, src: "/images/gallery/gallery-1.jpg", category: "Clinic", label: "Physiotherapy treatment room" },
  { id: 2, src: "/images/gallery/gallery-5.jpg", category: "Equipment", label: "Modern exercise equipment" },
  { id: 3, src: "/images/gallery/gallery-10.jpg", category: "Team", label: "Our team of therapists" },
  { id: 4, src: "/images/gallery/gallery-12.jpg", category: "Events", label: "Health awareness workshop" },
  { id: 5, src: "/images/gallery/gallery-2.jpg", category: "Clinic", label: "Shockwave therapy session" },
  { id: 6, src: "/images/gallery/gallery-6.jpg", category: "Equipment", label: "Strength training zone" },
  { id: 7, src: "/images/gallery/gallery-11.jpg", category: "Team", label: "Rehabilitation specialists" },
  { id: 8, src: "/images/gallery/gallery-15.jpg", category: "Events", label: "Fitness seminar & talks" },
  { id: 9, src: "/images/gallery/gallery-4.jpg", category: "Clinic", label: "Patient assessment room" },
  { id: 10, src: "/images/gallery/gallery-9.jpg", category: "Equipment", label: "Free weights & plates" },
  { id: 11, src: "/images/gallery/gallery-14.jpg", category: "Team", label: "Physiotherapy staff" },
  { id: 12, src: "/images/gallery/gallery-16.jpg", category: "Events", label: "Community wellness events" },
];

export default function GalleryContent() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? galleryItems
    : galleryItems.filter((g) => g.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#EEF1E4] py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-subtitle">Gallery</span>
          <h1 className="mt-4 text-[56px] font-medium leading-[1.1] tracking-[-0.03em] max-sm:text-[34px]">
            Our clinic in photos
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[17px] text-foreground/70">
            Take a visual tour of our facilities, equipment, and team.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 sm:py-[100px]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[2px] transition-all ${
                  active === cat
                    ? "bg-primary text-white"
                    : "bg-[#EEF1E4] text-foreground/70 hover:bg-primary/20"
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
                className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[20px] bg-muted"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100">
                  <Camera className="h-8 w-8 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
