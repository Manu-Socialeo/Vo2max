"use client";

import { useState } from "react";
import { ImageIcon, Camera } from "lucide-react";

const categories = ["All", "Clinic", "Equipment", "Team", "Events"];

const galleryPlaceholders = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  category: categories[((i % 4) + 1)],
  label: `${categories[((i % 4) + 1)]} Photo ${Math.floor(i / 4) + 1}`,
}));

export default function GalleryContent() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? galleryPlaceholders
    : galleryPlaceholders.filter((g) => g.category === active);

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
            Take a visual tour of our facilities, equipment, and team. Photos pending verification.
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

          {/* Note */}
          <p className="mb-8 text-center text-xs text-foreground/50">
            Photos pending verification
          </p>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[20px] bg-muted"
              >
                <div className="text-center">
                  <ImageIcon className="mx-auto h-10 w-10 text-foreground/30" />
                  <p className="mt-2 text-xs text-foreground/40">{item.label}</p>
                </div>
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
