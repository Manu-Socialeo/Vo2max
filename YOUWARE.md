# VO2 Max Physiotherapy One-Page Experience

## Project Overview
- **Deliverable**: Mobile-first single-page site for VO2 Max Physiotherapy covering navigation, hero, about, services, gallery, testimonials, and contact.
- **Design Direction**: Luxury black & white foundation with pastel neon blue highlights and soft blue glows, mirroring the provided Dribbble inspiration.
- **Tech Stack**: React 18 + TypeScript + Vite + Tailwind CSS (custom palette, typography, spacing tokens).

## Key Features Implemented
1. **Premium Navigation & Hero**
   - Header now sticks to the top with the logo on the left, name constrained to a single line, a centred Book Appointment CTA, and navigation or the mobile burger on the right.
   - All Book Appointment CTAs open WhatsApp at +91 94801 66770.
   - Hero keeps the specified headline/subhead and updated doctor portrait, now cleaned up by removing the overlaid phone number and badge for a clearer focus.
2. **Content Sections**
   - About paragraph now reads “Dr. Pinakin Ayare” and trims the passing year while keeping credentials in-line.
   - Services consolidated into a single luxe card with icon-backed rows for each required offering.
   - Gallery shifts to a horizontal scroll experience (wheel-enabled) for the five placeholder tiles.
   - Testimonials keep the animated cards while vertical spacing across sections is tightened for smoother flow.
3. **Footer & Social Presence**
   - Footer reflects the new logo asset, centres the icon row on mobile, adds location and Hexa Health shortcuts, and keeps Book/phone/email buttons aligned.
4. **Contact Form**
   - Contact section replaced with a streamlined booking form (name + phone) that mirrors the provided reference and now sends a prefilled WhatsApp message to +91 87221 63256.
5. **Motion**
   - Testimonials section now animates each card upward with a soft fade the first time it scrolls into view, staggered for added rhythm.

## Interaction & Link Wiring
- Book Appointment buttons (`header`, hero, services card CTA, contact, footer) → `https://wa.me/919480166770` in new tab.
- Header logo → scrolls smoothly back to the top of the page.
- Footer logo → `https://maps.app.goo.gl/DUUj521H7uYKw3Ys6` in new tab.
- Phone links → `tel:+919480166770`.
- Email link → Gmail compose to `hello@hexahealth.com`.
- Social icons → Instagram, Facebook, LinkedIn, location map, and Hexa Health profile.

## Styling Notes
- Manrope family (weights 300–700) applied globally.
- Tailwind theme extends semantic colors (`vo-black`, `vo-blue`, `vo-blue-soft`), bespoke radii, shadows, and spacing to mirror the Dribbble aesthetic.
- Mobile-first responsive layout with new menu toggle, services card, and horizontal gallery scroll maintaining luxe spacing.

## Assets
- **Logo**: `src/assets/vo2max-logo-new.png` (latest upload from the client).
- **Doctor Photo**: `src/assets/doctor-photo.png` (latest replacement provided).
- Gallery tiles remain stylized gradients ready for real imagery.

## Validation
- `npm run build` (Vite production build) completed successfully after each round of updates.

## Next Steps / Recommendations
- Replace gallery placeholders with curated clinic photography.
- Fine-tune service icons if you prefer custom pictograms over Lucide defaults.
- Explore subtle motion (e.g., fade-in on services) once core content is finalized.
- Consider optimizing the newly supplied logo asset if you’d like a smaller file size for faster loads.
