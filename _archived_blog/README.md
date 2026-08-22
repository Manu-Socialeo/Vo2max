# VO2 Max Health Hub & Blog Archive

This folder preserves all the original files, components, and data for the **Health Hub & Blog** feature so it can be re-enabled at any time.

## Files Archived:
1. `src/lib/blog-content.ts` - All 14 clinical blog articles, metadata, tags, and content.
2. `src/app/blog/page.tsx` - The Health Hub index / listing page with SEO JSON-LD and category cards.
3. `src/app/blog/[slug]/page.tsx` - The dynamic single blog article reader with FAQ parser, TOC, and schema.

## How to Reactivate:
1. **Header Navigation:** In `src/components/Header.tsx`, add `{ href: "/blog", label: "Health Hub" }` back into `navLinks`.
2. **Sitemap:** In `src/app/sitemap.ts`, un-comment `/blog` in `staticPages` and the `blogPosts` loop.
3. **Blog Pages:** In `src/app/blog/page.tsx` and `src/app/blog/[slug]/page.tsx`, restore the active component rendering.
4. **Service Linking:** In `src/app/services/[slug]/page.tsx`, restore the `<Link href={"/blog/" + slug}>` clinical guide button.
