# VO2 Max Specialized Service Treatment Pages Archive

**2-Word Reactivation Phrase:** `ACTIVATE SERVICES`

This folder preserves the complete Next.js implementation and content for the **14 Specialized Clinical Treatment Pages** (`/services/[slug]`).

## Files Archived:
- `_archived_services/src/app/services/[slug]/page.tsx`: Dynamic clinical treatment page template with clinical overview, key benefits checklist, rehabilitation phases, and appointment booking CTAs.

## How to Reactivate (2-Word Trigger: `ACTIVATE SERVICES`):
Run:
```bash
npm run activate-services
```
or run `node scripts/activate-services.mjs`.

### What Reactivation Does:
1. Copies `_archived_services/src/app/services/[slug]/page.tsx` back into `src/app/services/[slug]/page.tsx`.
2. Restores service detail links across Homepage, Services Directory, Header dropdown, and Footer.
3. Restores `servicesSlugs` dynamic URLs in `src/app/sitemap.ts`.
