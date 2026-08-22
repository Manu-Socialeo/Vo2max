# VO2 Max Website - Session Brain & Architecture Log

**Session Date:** August 22, 2026  
**Repository:** [https://github.com/Manu-Socialeo/Vo2max](https://github.com/Manu-Socialeo/Vo2max)  
**Primary Production URL:** [https://vo2maxclinic.vercel.app](https://vo2maxclinic.vercel.app)  
**Local Development:** `http://localhost:3000`

---

## 1. Executive Summary & Goals

The objective of this session was:
1. **Switch off and completely vanish the Health Hub / Blog feature** across all public interfaces (navigation header, service cross-links, sitemap, direct routes).
2. **Preserve 100% of the blog content, metadata, schema markup, and UI components** in an internal directory (`_archived_blog/`) to sell as a dedicated SEO add-on package to the client later.
3. **Standardize all site URLs, canonical tags, OpenGraph links, schemas, and sitemap entries** to point exclusively to the official live domain: `https://vo2maxclinic.vercel.app`.
4. **Deploy directly to Vercel production** and sync all changes with GitHub.

---

## 2. Archival & Preservation Details (`_archived_blog/`)

All 14 clinical articles, layouts, SEO structured data, and FAQ accordion parsers were preserved in `_archived_blog/`:

### Archived Files:
- `_archived_blog/src/lib/blog-content.ts`: 14 comprehensive clinical articles covering physiotherapy, cardiac rehab, post-surgical recovery, sports injury management, posture correction, and pediatric support.
- `_archived_blog/src/app/blog/page.tsx`: Full Health Hub listing page with search/category cards and Schema.org `Blog` JSON-LD.
- `_archived_blog/src/app/blog/[slug]/page.tsx`: Dynamic article reader page with Schema.org `BlogPosting` JSON-LD, FAQ extraction, and CTA sections.
- `_archived_blog/README.md`: Reactivation roadmap and instructions.

### How to Reactivate for the Client (SEO Add-on):
1. **Restore Route Directory:** Copy `_archived_blog/src/app/blog` back into `src/app/blog`.
2. **Re-add to Header:** In `src/components/Header.tsx`, add `{ href: "/blog", label: "Health Hub" }` back into `navLinks`.
3. **Re-add to Sitemap:** In `src/app/sitemap.ts`, un-comment `/blog` in `staticPages` and loop over `blogPosts` from `@/lib/blog-content`.
4. **Service Page Cross-Linking:** In `src/app/services/[slug]/page.tsx`, restore the `<Link href={"/blog/" + slug}>` clinical guide button.

---

## 3. Changes Made in Current Codebase

### A. Navigation & UI:
- **`src/components/Header.tsx`**: Removed `"Health Hub"` (`/blog`) from `navLinks`. Current active navbar:
  `Home` | `About Us` | `Services ⌵` | `Specialists` | `Pricing` | `Gallery` | `Contact`
- **`src/app/services/[slug]/page.tsx`**: Removed blog article cross-links.

### B. Sitemap & Routes:
- **`src/app/sitemap.ts`**: Removed `/blog` and dynamic blog post URLs.
- **`src/app/blog/`**: Dormant route folder removed from `src/app/` to prevent phantom routes in build.

### C. Domain Standardization to `https://vo2maxclinic.vercel.app`:
Replaced all legacy references across 23 files:
- `src/lib/clinic.ts`
- `src/app/layout.tsx` (metadataBase, canonical)
- `src/app/robots.ts` (sitemap location)
- `src/app/sitemap.ts` (baseUrl)
- `src/app/about/page.tsx`, `contact/`, `services/`, `team/`, `pricing/`, `gallery/`, `testimonials/`, `location/`, `privacy-policy/`, `terms-and-conditions/`, `cookie-policy/`, `request-callback/`, `book-appointment/`.

---

## 4. Git & Deployment Status

- **GitHub Repository:** `Manu-Socialeo/Vo2max` on branch `main`
- **Latest Commits:**
  - `cb5f208` - Update canonical domain to `vo2maxclinic.vercel.app` and remove all inactive blog references
  - `043c168` - Archive and switch off Health Hub and blogs
- **Vercel Production:**
  - Deployment ID: `dpl_9WNucK8yJgrNokEQpz6DDx53c2Rf`
  - Production Alias: `https://vo2maxclinic.vercel.app` (Status: **ACTIVE & READY**)
- **Local Dev Server:**
  - Running on `http://localhost:3000` with clean build cache.
