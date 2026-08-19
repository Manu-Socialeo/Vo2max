import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, User, MessageCircle, Phone } from "lucide-react";
import { blogPosts } from "@/lib/blog-content";
import { servicesSlugs, clinic } from "@/lib/clinic";
import FaqAccordion from "@/components/FaqAccordion";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);
  if (!post) return {};
  const title = `${post.title} | VO2 Max Physiotherapy`;
  const desc = post.excerpt.includes("Mysuru") ? post.excerpt : `${post.excerpt} Learn more about our services in Mysuru.`;
  return {
    title,
    description: desc,
    alternates: { canonical: `https://vo2max.in/blog/${slug}` },
    openGraph: {
      title,
      description: desc,
      url: `https://vo2max.in/blog/${slug}`,
      images: [{ url: post.image, width: 1920, height: 1080, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [post.image],
    },
  };
}

function extractFaqs(content: string): { question: string; answer: string }[] {
  const faqRegex = /### FAQs[\s\S]*?(?=\n##|$)/;
  const match = content.match(faqRegex);
  if (!match) return [];
  const faqSection = match[0];
  const qaRegex = /\*\*([^*]+)\*\*\s*\n([\s\S]*?)(?=\n\*\*|$)/g;
  const faqs: { question: string; answer: string }[] = [];
  let m;
  while ((m = qaRegex.exec(faqSection)) !== null) {
    faqs.push({ question: m[1].trim(), answer: m[2].trim() });
  }
  return faqs;
}

function formatContent(content: string): string {
  return content
    .replace(/### FAQs[\s\S]*$/, "")
    .replace(/^## (.+)$/gm, '<h2 class="mt-12 text-3xl font-medium lg:text-3xl">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="mt-8 text-xl font-medium">$1</h3>')
    .replace(/^- \*\*(.+?)\*\* — (.+)$/gm, '<li class="flex items-start gap-3"><span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary"></span><span><strong>$1</strong> — $2</span></li>')
    .replace(/^- \*\*(.+?)\*\*[\s\n]*([\s\S]*?)(?=\n-|\n$)/gm, '<li class="flex items-start gap-3"><span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary"></span><span><strong>$1</strong><br/>$2</span></li>')
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-3"><span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary"></span><span>$1</span></li>')
    .replace(/\n\n/g, '</p><p class="mt-4 leading-relaxed text-foreground/70">')
    .replace(/<p class="mt-4 leading-relaxed text-foreground\/70">\s*<\/p>/g, "")
    .replace(/<p class="mt-4 leading-relaxed text-foreground\/70">/, '<p class="mt-4 leading-relaxed text-foreground/70">')
    .replace(/<\/ul>\s*<p class="mt-4 leading-relaxed text-foreground\/70">/g, '</ul><p class="mt-4 leading-relaxed text-foreground/70">');
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);
  if (!post) notFound();

  const faqs = extractFaqs(post.content);
  const formattedContent = formatContent(post.content);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vo2max.in" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://vo2max.in/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://vo2max.in/blog/${slug}` },
    ],
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "MedicalClinic",
      name: "VO2 Max Physiotherapy Rehabilitation & Fitness Center",
      url: "https://vo2max.in",
    },
    url: `https://vo2max.in/blog/${slug}`,
    image: post.image,
  };

  return (
    <div className="bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />

      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Link href="/blog" className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 hover:text-white transition-colors">
              <ArrowRight className="h-3.5 w-3.5 rotate-180" /> Back to All Articles
            </Link>
            <div className="mt-2 flex items-center gap-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
              <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {post.author}</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">{post.title}</h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{post.excerpt}</p>
          </div>
        </div>
      </section>

      <article className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div
              className="aspect-16/9 rounded-3xl mb-12 border border-slate-200 shadow-md bg-cover bg-center"
              style={{ backgroundImage: `url("${post.image}")` }}
              role="img"
              aria-label={post.imageAlt}
            />
            <div className="prose-custom leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: formattedContent }} />
            <div className="mt-10 pt-6 border-t border-slate-100">
              <Link href={"/services/" + slug} className="text-xs font-bold text-[#0052FF] hover:underline">
                Explore our clinical protocol for {slug.replace(/-/g, " ")} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </article>

      {faqs.length > 0 && (
        <section className="py-20 bg-slate-50/70 border-t border-slate-100">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <span className="section-subtitle">FAQ</span>
              <h2 className="mt-4 text-slate-900">Frequently Asked Questions</h2>
              <div className="mt-8">
                <FaqAccordion items={faqs} />
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/40 via-slate-900 to-slate-950" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-4xl">Ready to Take the Next Step?</h2>
          <p className="mx-auto mt-4 max-w-xl text-xs text-slate-300 sm:text-sm">
            Book a clinical consultation with our expert team at VO2 Max Physiotherapy in Vijayanagar II Stage, Mysuru.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${clinic.whatsapp}?text=Hi%20VO2%20Max,%20I'd%20like%20to%20consult%20regarding%20${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md hover:bg-emerald-500/25"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a
              href={`tel:${clinic.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md hover:bg-white/20"
            >
              <Phone className="h-4 w-4 text-[#00D2FF]" /> Call {clinic.phone}
            </a>
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#0052FF] to-[#0042D1] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg"
            >
              Book Assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
