import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogPosts } from "@/lib/blog-content";
import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Blog | VO2 Max Physiotherapy Mysuru",
    description: "Expert articles on physiotherapy, rehabilitation, sports medicine, cardiac health, weight loss, and wellness from VO2 Max in Mysuru.",
    alternates: { canonical: "https://vo2max.in/blog" },
    openGraph: {
      title: "Blog | VO2 Max Physiotherapy Mysuru",
      description: "Expert articles on physiotherapy, rehabilitation, and wellness from VO2 Max in Mysuru.",
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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF1E4] via-white to-[#EEF1E4] pb-20 pt-28">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-subtitle justify-center">Our Blog</span>
            <h1 className="mt-4">Our Blog</h1>
            <p className="mt-4 text-lg text-foreground/70">
              Expert articles on physiotherapy, rehabilitation, sports medicine, and wellness from the team at VO2 Max Physiotherapy in <strong>Mysuru</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group block">
                <div className="flex h-full flex-col rounded-[20px] bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="aspect-[16/9] rounded-[12px] bg-gradient-to-br" style={{ background: post.image }} aria-hidden="true">
                    <span className="sr-only">{post.imageAlt}</span>
                  </div>
                  <div className="mt-5 flex items-center gap-4 text-xs text-foreground/50">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <User className="h-3 w-3" /> {post.author}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-medium leading-snug group-hover:text-[#0052FF] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/70 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[2px] text-[#0052FF] transition-colors group-hover:text-[#0046E0]">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF1E4] py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-subtitle justify-center">Get Started</span>
            <h2 className="mt-4">Have Questions?</h2>
            <p className="mt-4 text-foreground/70">
              Our team at VO2 Max Physiotherapy in Vijayanagar II Stage, Mysuru is here to help. Reach out for personalized advice.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href={`https://wa.me/${clinic.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment`} target="_blank" rel="noopener noreferrer" className="btn-primary">
                WhatsApp Us <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/contact" className="btn-outline">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
