# VO2 Max Website - Project Brain & Architecture Log

**Repository:** [https://github.com/Manu-Socialeo/Vo2max](https://github.com/Manu-Socialeo/Vo2max)  
**Live Production URL:** [https://vo2maxclinic.vercel.app](https://vo2maxclinic.vercel.app)  
**Local Dev Server:** `http://localhost:3000`  
**Last Updated:** August 22, 2026

---

## 🧠 Core Directive: 2-Word Memory Triggers for Instant Reactivation

This codebase contains **two high-value packages** intentionally archived for client upsells. Any AI assistant or developer can instantly bring them back using the **2-Word Memory Phrases**:

| Feature / Package | 2-Word Trigger Word | Automated Command | Saved Archive Directory |
|---|---|---|---|
| **14 Specialized Service Pages** | **`ACTIVATE SERVICES`** | `npm run activate-services` | [`_archived_services/`](file:///c:/Users/manpr/OneDrive/Documents/Antigravity%20Projects/vo2max/_archived_services) |
| **14 Health Hub Blog Articles** | **`ACTIVATE BLOGS`** *(or `ACTIVATE HEALTH HUB`)* | `npm run activate-health-hub` | [`_archived_blog/`](file:///c:/Users/manpr/OneDrive/Documents/Antigravity%20Projects/vo2max/_archived_blog) |

---

## 1. 📂 Specialized Treatment Pages Archive (`_archived_services/`)

### Current State:
- The main Services overview page **[`/services`](https://vo2maxclinic.vercel.app/services)** is **LIVE and fully functional**.
- Clicking any service card across the site now routes directly to **"Book Consultation" (`/book-appointment`)** instead of opening a deep individual page.
- The 14 deep sub-pages (`/services/[slug]`) are removed from active routes and safely preserved in `_archived_services/`.

### How to Reactivate (Trigger: `ACTIVATE SERVICES`):
Run:
```bash
npm run activate-services
```
*(Executes `scripts/activate-services.mjs` to restore `src/app/services/[slug]/page.tsx`, header dropdown, deep links, and sitemap entries).*

---

## 2. 📚 Health Hub & Blog Articles Archive (`_archived_blog/`)

### Current State:
- All 14 researched clinical articles (14,000+ words), FAQ schemas, and reader templates are stored in `_archived_blog/`.
- Hidden from public navigation, sitemap, and active routing.

### How to Reactivate (Trigger: `ACTIVATE BLOGS`):
Run:
```bash
npm run activate-health-hub
```
*(Executes `scripts/activate-health-hub.mjs` to restore `src/app/blog/`, header navigation link, and `BlogPosting` sitemap entries).*

---

## 3. 🌐 Active Website Architecture (19 Pages Total)

1. **Core Public Pages (9 Pages):**
   - Home (`/`), About (`/about`), Services Directory (`/services`), Specialists (`/team`), Pricing (`/pricing`), Gallery (`/gallery`), Contact (`/contact`), Testimonials (`/testimonials`), FAQs (`/faqs`).
2. **Doctor Profiles (2 Pages):**
   - Dr. Pradeep Kumar M N (`/team/pradeep`), Dr. Pinakin Prakash Ayare (`/team/pinakin`).
3. **Conversion Portals (3 Pages):**
   - Book Appointment (`/book-appointment`), Request Callback (`/request-callback`), Location Maps (`/location`).
4. **Legal Compliance (5 Pages):**
   - Privacy Policy (`/privacy-policy`), Terms (`/terms-and-conditions`), Medical Disclaimer (`/medical-disclaimer`), Appointment Policy (`/appointment-policy`), Cookie Policy (`/cookie-policy`).
