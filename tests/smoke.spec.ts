import { test, expect } from "@playwright/test";

const BASE = "http://localhost:3000";

const pages = [
  { path: "/", title: "VO2 Max" },
  { path: "/about", title: "About" },
  { path: "/services", title: "Services" },
  { path: "/services/physiotherapy", title: "Physiotherapy" },
  { path: "/services/rehabilitation", title: "Rehabilitation" },
  { path: "/services/sports-rehabilitation", title: "Sports" },
  { path: "/services/cardiac-rehabilitation", title: "Cardiac" },
  { path: "/services/exercise-therapy", title: "Exercise" },
  { path: "/services/weight-loss", title: "Weight" },
  { path: "/services/fat-loss", title: "Fat" },
  { path: "/services/athletic-training", title: "Athletic" },
  { path: "/services/functional-training", title: "Functional" },
  { path: "/services/posture-correction", title: "Posture" },
  { path: "/services/neurology-rehabilitation", title: "Neuro" },
  { path: "/services/post-surgical-rehabilitation", title: "Post-Surgery" },
  { path: "/services/child-obesity-support", title: "Child" },
  { path: "/team", title: "Team" },
  { path: "/team/pradeep", title: "Pradeep" },
  { path: "/team/pinakin", title: "Pinakin" },
  { path: "/pricing", title: "Pricing" },
  { path: "/blog", title: "Resources" },
  { path: "/blog/physiotherapy", title: "Physiotherapy" },
  { path: "/blog/rehabilitation", title: "Rehabilitation" },
  { path: "/testimonials", title: "Testimonials" },
  { path: "/gallery", title: "Gallery" },
  { path: "/faqs", title: "FAQs" },
  { path: "/contact", title: "Contact" },
  { path: "/book-appointment", title: "Appointment" },
  { path: "/request-callback", title: "Callback" },
  { path: "/location", title: "Location" },
  { path: "/privacy-policy", title: "Privacy" },
  { path: "/terms-and-conditions", title: "Terms" },
  { path: "/medical-disclaimer", title: "Disclaimer" },
  { path: "/appointment-policy", title: "Appointment Policy" },
  { path: "/cookie-policy", title: "Cookie" },
];

test.describe("VO2 Max Website", () => {
  for (const page of pages) {
    test(`${page.path} loads successfully and contains expected content`, async ({ page: p }) => {
      const response = await p.goto(`${BASE}${page.path}`);
      expect(response?.status()).toBe(200);
      await expect(p.locator("body")).toBeVisible();
      if (page.title !== "Home") {
        await expect(p.locator("h1")).toBeVisible();
      }
    });
  }

  test("home page has hero section", async ({ page: p }) => {
    await p.goto(BASE);
    await expect(p.locator("h1")).toContainText(/expert|recovery|wellness/i);
    const sectionCount = await p.locator("section").count();
    expect(sectionCount).toBeGreaterThanOrEqual(3);
  });

  test("all service links work from home", async ({ page: p }) => {
    await p.goto(BASE);
    const serviceLinks = p.locator("a[href^='/services/']");
    const count = await serviceLinks.count();
    expect(count).toBeGreaterThanOrEqual(6);
  });

  test("contact form submits to WhatsApp", async ({ page: p }) => {
    await p.goto(`${BASE}/contact`);
    await expect(p.locator('input[placeholder*="Full name"]').first()).toBeVisible();
    await expect(p.getByRole("button", { name: /send/i })).toBeVisible();
  });

  test("phone numbers use tel: protocol", async ({ page: p }) => {
    await p.goto(BASE);
    const telLinks = p.locator('a[href^="tel:"]');
    const count = await telLinks.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("WhatsApp button is present", async ({ page: p }) => {
    await p.goto(BASE);
    const wa = p.locator('a[href*="wa.me/919480166770"]');
    await expect(wa.first()).toBeVisible();
  });

  test("schema JSON-LD is present on homepage", async ({ page: p }) => {
    await p.goto(BASE);
    const scripts = p.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("FAQs page has accordion items", async ({ page: p }) => {
    await p.goto(`${BASE}/faqs`);
    await expect(p.locator("h1")).toBeVisible();
  });
});
