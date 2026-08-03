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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF1E4] via-white to-[#EEF1E4] pb-20 pt-28">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Link href="/blog" className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-[#0046E0]">
              <ArrowRight className="h-3.5 w-3.5 rotate-180" /> Back to Blog
            </Link>
            <div className="mt-4 flex items-center gap-4 text-sm text-foreground/50">
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
              <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
            </div>
            <h1 className="mt-4">{post.title}</h1>
            <p className="mt-4 text-lg text-foreground/70">{post.excerpt}</p>
          </div>
        </div>
      </section>

      <article className="py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div
              className="aspect-[16/9] rounded-[20px] mb-12"
              style={{ backgroundImage: `url("${post.image}")`, backgroundSize: "cover", backgroundPosition: "center" }}
              role="img"
              aria-label={post.imageAlt}
            />
            <div className="prose-custom leading-relaxed text-foreground/70" dangerouslySetInnerHTML={{ __html: formattedContent }} />
            <div className="mt-8">
              <Link href={"/services/" + slug} className="text-primary underline hover:text-[#0046E0]">Learn more about our {slug.replace(/-/g, " ")} service</Link>
            </div>
          </div>
        </div>
      </article>

      {faqs.length > 0 && (
        <section className="bg-[#EEF1E4] py-24">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <span className="section-subtitle">Questions</span>
              <h2 className="mt-4">Frequently Asked Questions</h2>
              <div className="mt-8">
                <FaqAccordion items={faqs} />
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0052FF] via-[#2d3024] to-[#1a1a1a] py-24">
        <div className="mx-auto max-w-[1240px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-white">Ready to Take the Next Step?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Book a consultation with our expert team at VO2 Max Physiotherapy in Vijayanagar II Stage, Mysuru.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={`https://wa.me/${clinic.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment`} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 !bg-[#0052FF] !text-white hover:!bg-[#0046E0]" data-conversion="whatsapp_click" data-conversion-label={`Blog Post ${post.title}`}>
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
            <a href={`tel:${clinic.phone}`} className="btn-primary inline-flex items-center gap-2 !bg-[#0052FF] !text-white hover:!bg-[#0046E0]" data-conversion="call_click" data-conversion-label={`Blog Post ${post.title}`}>
              <Phone className="h-4 w-4" /> Call now
            </a>
            <Link href="/book-appointment" className="btn-outline !border-white/30 !text-white hover:!border-[#0052FF] hover:!bg-[#0052FF] hover:!text-white" data-conversion="appointment_click" data-conversion-label={`Blog Post ${post.title}`}>
              Book appointment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/50">
            <Link href="/services" className="text-white/70 underline hover:text-white">Explore our services</Link> &middot; <Link href="/team/pradeep" className="text-white/70 underline hover:text-white">Meet Dr. Pradeep</Link>
          </p>
        </div>
      </section>
    </>
  );
}
