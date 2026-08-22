import { notFound } from "next/navigation";

// Health Hub / Blog articles are currently switched off (disabled).
// Full implementation and content are safely preserved in `_archived_blog/src/app/blog/[slug]/page.tsx`
// and `_archived_blog/src/lib/blog-content.ts`.

export async function generateStaticParams() {
  return [];
}

export default async function BlogPostPage() {
  notFound();
}
