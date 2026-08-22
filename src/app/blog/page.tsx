import { notFound } from "next/navigation";

// Health Hub / Blog is currently switched off (disabled).
// Full implementation and content are safely preserved in `_archived_blog/src/app/blog/page.tsx`
// and `_archived_blog/src/lib/blog-content.ts`.

export default function BlogPage() {
  notFound();
}
