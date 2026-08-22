# VO2 Max Website - Project Brain & Architecture Log

**Repository:** [https://github.com/Manu-Socialeo/Vo2max](https://github.com/Manu-Socialeo/Vo2max)  
**Live Production URL:** [https://vo2maxclinic.vercel.app](https://vo2maxclinic.vercel.app)  
**Local Dev Environment:** `http://localhost:3000`  
**Last Updated:** August 22, 2026

---

## 🧠 Core Directive: Health Hub & Blog State Awareness

> [!IMPORTANT]
> **Current State:** The **Health Hub & Blog feature is intentionally switched off and hidden** from the public website, navbar, sitemap, and active routing.
> **Business Purpose:** Preserved as a high-value clinical SEO package to be unlocked and sold to the client as an add-on service.
> **Preservation State:** 100% of the content, metadata, FAQ schemas, images, and page templates are **safely stored in `_archived_blog/`**.

Whenever the user prompts:
- *"Turn on Health Hub"*
- *"Bring back the blogs / articles"*
- *"Activate SEO package"*
- *"Restore blog page"*

👉 **Follow the [Instant Reactivation Protocol](#-how-to-instantly-bring-health-hub-back-to-life) below.**

---

## 📚 Complete Catalog of Archived Articles (14 Clinical Guides)

All article contents and metadata are located in [`_archived_blog/src/lib/blog-content.ts`](file:///c:/Users/manpr/OneDrive/Documents/Antigravity%20Projects/vo2max/_archived_blog/src/lib/blog-content.ts):

| # | Slug (`id`) | Article Title | Lead Author | Primary Topics & Focus |
|---|---|---|---|---|
| 1 | `physiotherapy` | **Comprehensive Physiotherapy: Restoring Movement and Quality of Life** | Dr. Pradeep Kumar M N | Manual therapy, mobility, musculoskeletal rehab, chronic pain relief |
| 2 | `rehabilitation` | **Rehabilitation Therapy: Rebuilding Strength After Injury or Surgery** | Dr. Pradeep Kumar M N | Post-trauma rehab, phased recovery milestones, strength rebuilding |
| 3 | `sports-rehabilitation` | **Sports Rehabilitation: Get Back in the Game Stronger** | Dr. Pradeep Kumar M N | ACL, rotator cuff, runner's knee, athletic return-to-play protocols |
| 4 | `cardiac-rehabilitation` | **Cardiac Rehabilitation: Strengthening Your Heart Through Science** | Dr. Pinakin Prakash Ayare | Monitored cardio conditioning, post-infarction care, endurance |
| 5 | `exercise-therapy` | **Exercise Therapy: Movement as Medicine for Recovery and Wellness** | Dr. Pradeep Kumar M N | Biomechanics, functional movement, active stabilization |
| 6 | `weight-loss` | **Medical Weight Loss: Science-Based Programs for Sustainable Results** | Dr. Pinakin Prakash Ayare | Medically supervised weight reduction, metabolic wellness |
| 7 | `fat-loss` | **Targeted Fat Loss: Effective Strategies to Reduce Body Fat** | Dr. Pinakin Prakash Ayare | Body composition, lean mass preservation, metabolic health |
| 8 | `athletic-training` | **Athletic Training: Performance Enhancement for Every Athlete** | Dr. Pradeep Kumar M N | Periodization, agility, power, injury prevention for runners & athletes |
| 9 | `functional-training` | **Functional Training: Movement Training for Real-World Performance** | Dr. Pradeep Kumar M N | Core stability, balance, fall prevention, everyday functional strength |
| 10 | `posture-correction` | **Posture Correction: Fix Your Posture, Transform Your Health** | Dr. Pradeep Kumar M N | Ergonomics, spinal alignment, desk worker posture, kyphosis correction |
| 11 | `neurology-rehabilitation` | **Neuro Rehabilitation: Hope and Recovery for Neurological Conditions** | Dr. Pinakin Prakash Ayare | Stroke recovery, Parkinson's rehab, neuroplasticity, gait training |
| 12 | `post-surgical-rehabilitation` | **Post-Surgical Rehabilitation: Your Roadmap to Full Recovery** | Dr. Pradeep Kumar M N | Total knee/hip replacement, spine surgery, joint arthroscopy protocols |
| 13 | `child-obesity-support` | **Child Obesity Support: Building Healthy Habits for Life** | Dr. Pinakin Prakash Ayare | Pediatric wellness, movement habits, family lifestyle guidance |
| 14 | `electrotherapy` | **Electrotherapy for Pain Relief: Modern Techniques** | Dr. Pradeep Kumar M N | TENS, IFT, ultrasound therapy, modern electro-modalities for acute pain |

---

## ⚡ How to Instantly Bring Health Hub Back to Life

To reactivate the entire Health Hub, all 14 blogs, navigation links, and sitemap entries in 1 step:

### Method 1: Automated Script (Recommended)
Run the pre-configured script from terminal:
```bash
npm run activate-health-hub
```
*(Or `node scripts/activate-health-hub.mjs`)*

### Method 2: Manual Step-by-Step Restoration
If making manual changes:
1. **Restore Pages:** Copy files from `_archived_blog/src/app/blog/` into `src/app/blog/`.
2. **Restore Header Link:** In `src/components/Header.tsx`, add `{ href: "/blog", label: "Health Hub" }` to `navLinks`.
3. **Restore Sitemap:** In `src/app/sitemap.ts`, import `blogPosts` from `@/lib/blog-content`, add `"blog"` to `staticPages`, and restore the `for (const post of blogPosts)` loop.
4. **Restore Service Cross-Links:** In `src/app/services/[slug]/page.tsx`, restore the `<Link href={"/blog/" + slug}>` clinical guide button.
5. **Deploy:** Commit and push to `origin/main` or run `npx vercel --prod --token <TOKEN> --yes`.

---

## 🌐 Current Active Architecture & Live Status

- **Live URL:** `https://vo2maxclinic.vercel.app`
- **Active Navigation Items:**
  1. `Home` (`/`)
  2. `About Us` (`/about`)
  3. `Services ⌵` (`/services` + 6 direct dropdown treatments)
  4. `Specialists` (`/team`)
  5. `Pricing` (`/pricing`)
  6. `Gallery` (`/gallery`)
  7. `Contact` (`/contact`)
- **Action CTAs:** Direct phone dialer (`+91 94801 66770`) & "Book Visit" (`/book-appointment`).
- **Canonical & SEO Domain:** Standardized to `https://vo2maxclinic.vercel.app` across all 23 routes and schemas.
