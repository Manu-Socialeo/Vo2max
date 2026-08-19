"use client";

import { testimonials, clinic } from "@/lib/clinic";
import { Star, ArrowRight, MessageCircle, HeartHandshake } from "lucide-react";
import Link from "next/link";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-amber-400" : "text-slate-200"}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsContent() {
  return (
    <div className="bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-1.5 text-xs font-semibold text-blue-200">
            <HeartHandshake className="h-3.5 w-3.5 text-[#00D2FF]" />
            <span>Verified Patient Outcomes</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Real Patient Success Stories
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Read how athletes, post-surgical patients, and Mysuru residents eliminated pain and regained functional freedom at VO2 Max.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 sm:py-28 bg-slate-50/70">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-xs transition-all hover:shadow-xl hover:border-blue-200 hover:-translate-y-1"
              >
                <div>
                  <StarRating rating={t.rating} />
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-[#0052FF]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{t.name}</h3>
                    <span className="text-[11px] font-medium text-slate-500">Verified Patient • Mysuru</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-950 p-10 text-center text-white sm:p-14">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Share Your Recovery Experience
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-xs text-slate-300 sm:text-sm">
              Your feedback inspires others in Mysuru to begin their recovery journey and achieve pain-free health.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={`https://wa.me/${clinic.whatsapp}?text=Hi%20VO2%20Max,%20I'd%20like%20to%20share%20my%20treatment%20feedback`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#0052FF] to-[#0042D1] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Share Feedback on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
