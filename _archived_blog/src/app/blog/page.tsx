import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Calendar, User, BookOpen, MessageCircle } from "lucide-react";
import { blogPosts } from "@/lib/blog-content";
import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Clinical Health Hub & Blog | VO2 Max Physiotherapy Mysuru",
  description: "Expert clinical articles on physiotherapy, rehabilitation, sports medicine, spine care, and recovery protocols from VO2 Max in Mysuru.",
  alternates: { canonical: "https://vo2max.in/blog" },
  openGraph: {
    title: "Clinical Health Hub & Blog | VO2 Max Physiotherapy Mysuru",
    description: "Expert articles on physiotherapy, sports injury rehabilitation, and wellness from VO2 Max in Mysuru.",
    url: "https://vo2max.in/blog",
    images: [{ url: "https://vo2max.in/images/hero-bg.jpg", width: 1920, height: 1080, alt: "VO2 Max Physiotherapy Blog" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vo2max.in" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://vo2max.in/blog" },
  ],
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "VO2 Max Physiotherapy Blog",
  description: "Expert articles on physiotherapy, rehabilitation, and wellness from VO2 Max in Mysuru.",
  url: "https://vo2max.in/blog",
};

export default function BlogPage() {
  return (
    <div className="bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-1.5 text-xs font-semibold text-blue-200">
            <BookOpen className="h-3.5 w-3.5 text-[#00D2FF]" />
            <span>Evidence-Based Health Hub</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Clinical Insights &amp; Articles
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Expert guidance on injury prevention, sports recovery, joint mobility, and rehabilitation from the physiotherapists at VO2 Max Mysuru.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 sm:py-28 bg-slate-50/70">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group block">
                <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-xs transition-all duration-300 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1">
                  <div>
                    <div
                      className="aspect-16/9 w-full rounded-2xl bg-slate-100 bg-cover bg-center border border-slate-100"
                      style={{ backgroundImage: `url("${post.image}")` }}
                    />
                    <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1 font-medium text-slate-500">
                        <Calendar className="h-3.5 w-3.5" /> {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1 font-medium text-slate-500">
                        <User className="h-3.5 w-3.5" /> {post.author}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-bold text-slate-900 group-hover:text-[#0052FF] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#0052FF] pt-4 border-t border-slate-100">
                    <span>Read complete guide</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-950 p-10 text-center text-white sm:p-14">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Have Questions About Your Symptoms?</h2>
            <p className="mx-auto mt-3 max-w-xl text-xs text-slate-300 sm:text-sm">
              Our clinical team in Vijayanagar II Stage, Mysuru is here to provide personalized guidance.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/${clinic.whatsapp}?text=Hi%20VO2%20Max,%20I'd%20like%20to%20consult%20regarding%20a%20health%20condition`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#0052FF] to-[#0042D1] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Consultation
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-xs font-bold text-slate-800 hover:border-[#0052FF] hover:text-[#0052FF]"
              >
                Contact Clinic <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
