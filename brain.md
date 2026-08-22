# VO2 Max Website - Project Brain & Architecture Log

**Repository:** [https://github.com/Manu-Socialeo/Vo2max](https://github.com/Manu-Socialeo/Vo2max)  
**Live Production URL:** [https://vo2maxclinic.vercel.app](https://vo2maxclinic.vercel.app)  
**Local Dev Server:** `http://localhost:3000`  
**Last Updated:** August 22, 2026

---

## 🧠 Core Directive: 2-Word Memory Triggers for Instant Reactivation

This codebase contains **two high-value packages** intentionally archived for client upsells. Any AI assistant or developer can instantly bring them back using the **2-Word Memory Phrases**:

| Feature / Package | 2-Word Trigger Phrase | Automated NPM Script | Primary Archive Directory |
|---|---|---|---|
| **14 Specialized Service Pages** | **`ACTIVATE SERVICES`** | `npm run activate-services` | [`_archived_services/`](file:///c:/Users/manpr/OneDrive/Documents/Antigravity%20Projects/vo2max/_archived_services) |
| **14 Health Hub Blog Articles** | **`ACTIVATE BLOGS`** *(or `ACTIVATE HEALTH HUB`)* | `npm run activate-health-hub` | [`_archived_blog/`](file:///c:/Users/manpr/OneDrive/Documents/Antigravity%20Projects/vo2max/_archived_blog) |

---

## 🗺️ Master File Map & Archival Registry

### 1. 📂 Archived Service Treatment Pages: `_archived_services/`
| Source File in Archive | Target Destination on Reactivation | Purpose |
|---|---|---|
| `_archived_services/src/app/services/[slug]/page.tsx` | `src/app/services/[slug]/page.tsx` | Next.js template for all 14 clinical treatment pages |
| `_archived_services/README.md` | Internal documentation | Step-by-step restoration instructions |
| `scripts/activate-services.mjs` | Executed via `npm run activate-services` | Automated script that restores pages, header dropdown, and sitemap |

---

### 2. 📚 Archived Health Hub & Blogs: `_archived_blog/`
| Source File in Archive | Target Destination on Reactivation | Purpose |
|---|---|---|
| `_archived_blog/src/lib/blog-content.ts` | `src/lib/blog-content.ts` | All 14 researched clinical articles (14,000+ words), author bios, and SEO metadata |
| `_archived_blog/src/app/blog/page.tsx` | `src/app/blog/page.tsx` | Health Hub directory listing page with category filters & Schema |
| `_archived_blog/src/app/blog/[slug]/page.tsx` | `src/app/blog/[slug]/page.tsx` | Individual article reader template with FAQ accordion & `BlogPosting` Schema |
| `_archived_blog/README.md` | Internal documentation | Reactivation guide |
| `scripts/activate-health-hub.mjs` | Executed via `npm run activate-health-hub` | Automated script that restores routes, navbar button, and sitemap |

---

### 3. 📄 Internal Client Sales Documents: `docs/`
| File Path | Description |
|---|---|
| `docs/CLIENT_SALES_PROPOSAL.md` | Comprehensive proposal with UI/UX breakdown and package tiers |
| `docs/ITEMIZED_COST_BREAKUP.md` | Exact market-rate line-item billing table |

---

## ⚡ Reactivation Instructions

### To Reactivate the 14 Specialized Treatment Pages:
Prompt with: **`ACTIVATE SERVICES`**  
Command:
```bash
npm run activate-services
```

### To Reactivate the 14 Health Hub Blog Articles:
Prompt with: **`ACTIVATE BLOGS`**  
Command:
```bash
npm run activate-health-hub
```

---

## 🌐 Current Active Architecture (19 Pages Total)

1. **Core Public Pages (9 Pages):**
   - Home (`/`), About (`/about`), Services Directory (`/services`), Specialists (`/team`), Pricing (`/pricing`), Gallery (`/gallery`), Contact (`/contact`), Testimonials (`/testimonials`), FAQs (`/faqs`).
2. **Doctor Profiles (2 Pages):**
   - Dr. Pradeep Kumar M N (`/team/pradeep`), Dr. Pinakin Prakash Ayare (`/team/pinakin`).
3. **Conversion Portals (3 Pages):**
   - Book Appointment (`/book-appointment`), Request Callback (`/request-callback`), Location Maps (`/location`).
4. **Legal Compliance (5 Pages):**
   - Privacy Policy (`/privacy-policy`), Terms (`/terms-and-conditions`), Medical Disclaimer (`/medical-disclaimer`), Appointment Policy (`/appointment-policy`), Cookie Policy (`/cookie-policy`).
