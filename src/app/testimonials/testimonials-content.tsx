"use client";

import { testimonials, clinic } from "@/lib/clinic";
import { Star, ArrowRight, MessageCircle } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "fill-none text-border"}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#EEF1E4] py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-subtitle">Patient Stories</span>
          <h1 className="mt-4 text-[56px] font-medium leading-[1.1] tracking-[-0.03em] max-sm:text-[34px]">
            What our patients say
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[17px] text-foreground/70">
            Real feedback from real patients. Discover how we&rsquo;ve helped the Mysuru community regain strength and mobility.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 sm:py-[100px]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.id} className="rounded-[20px] bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <StarRating rating={t.rating} />
                <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF1E4] text-sm font-medium text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-[100px]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-[20px] bg-[#EEF1E4] p-10 text-center sm:p-16">
            <h2 className="text-[28px] font-medium leading-[1.15] tracking-[-0.03em] sm:text-[34px]">
              Share your experience
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[17px] text-foreground/70">
              We&rsquo;d love to hear about your journey with us. Your story could inspire someone else to take the first step.
            </p>
            <a
              href={`https://wa.me/${clinic.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              <MessageCircle className="h-4 w-4" />
              Share on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
