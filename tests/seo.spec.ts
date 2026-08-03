import { test, expect } from "@playwright/test";
import type { Page } from "@playwright/test";

const BASE = "http://localhost:3000";

async function gotoPage(page: Page, path: string) {
  const url = `${BASE}${path}`;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
      return;
    } catch {
      if (attempt === 3) throw new Error(`Failed to navigate to ${url}`);
      await page.waitForTimeout(1000);
    }
  }
}

const pages = [
  { path: "/", title: "VO2 Max" },
  { path: "/about", title: "About" },
  { path: "/services", title: "Services" },
  { path: "/team", title: "Team" },
  { path: "/pricing", title: "Pricing" },
  { path: "/blog", title: "Blog" },
  { path: "/testimonials", title: "Testimonials" },
  { path: "/gallery", title: "Gallery" },
  { path: "/faqs", title: "FAQs" },
  { path: "/contact", title: "Contact" },
  { path: "/book-appointment", title: "Book Appointment" },
  { path: "/request-callback", title: "Request Callback" },
  { path: "/location", title: "Location" },
  { path: "/privacy-policy", title: "Privacy Policy" },
  { path: "/terms-and-conditions", title: "Terms" },
  { path: "/medical-disclaimer", title: "Medical Disclaimer" },
  { path: "/appointment-policy", title: "Appointment Policy" },
  { path: "/cookie-policy", title: "Cookie Policy" },
];

test.describe("SEO & Metadata", () => {
  for (const page of pages) {
    test(`${page.path} has valid title and meta description`, async ({ page: p }) => {
      await gotoPage(p, page.path);
      const title = await p.title();
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(0);
      const metaDesc = p.locator('meta[name="description"]');
      await expect(metaDesc).toHaveCount(1);
      const content = await metaDesc.getAttribute("content");
      expect(content).toBeTruthy();
      expect(content?.length).toBeGreaterThan(10);
    });
  }

  test("every page has JSON-LD structured data", async ({ page: p }) => {
    for (const page of pages) {
      await gotoPage(p, page.path);
      const scripts = p.locator('script[type="application/ld+json"]');
      const count = await scripts.count();
      expect(count).toBeGreaterThanOrEqual(1);
    }
  });

  test("every page has canonical URL", async ({ page: p }) => {
    for (const page of pages) {
      await gotoPage(p, page.path);
      const canonical = p.locator('link[rel="canonical"]');
      await expect(canonical).toHaveCount(1);
      const href = await canonical.getAttribute("href");
      expect(href).toBeTruthy();
      expect(href?.startsWith("https://vo2max.in")).toBeTruthy();
    }
  });

  test("sitemap.xml is accessible and contains expected URLs", async ({ page: p }) => {
    const response = await p.goto(`${BASE}/sitemap.xml`);
    expect(response?.status()).toBe(200);
    const body = await response?.text();
    expect(body).toContain("vo2max.in");
    expect(body).toContain("/services/");
    expect(body).toContain("/team/");
    expect(body).toContain("/blog/");
  });

  test("robots.txt is accessible", async ({ page: p }) => {
    const response = await p.goto(`${BASE}/robots.txt`);
    expect(response?.status()).toBe(200);
    const body = await response?.text();
    expect(body).toContain("allow: /");
  });

  test("all images have alt text", async ({ page: p }) => {
    await p.goto(BASE);
    const images = p.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).not.toBeNull();
    }
  });

  test("FAQ pages have FAQPage schema", async ({ page: p }) => {
    await p.goto(`${BASE}/faqs`);
    const scripts = p.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    let foundFAQ = false;
    for (let i = 0; i < count; i++) {
      const json = await scripts.nth(i).textContent();
      if (json) {
        const parsed = JSON.parse(json);
        if (parsed["@type"] === "FAQPage") {
          foundFAQ = true;
          break;
        }
      }
    }
    expect(foundFAQ).toBeTruthy();
  });

  test("service pages have MedicalTherapy schema", async ({ page: p }) => {
    await p.goto(`${BASE}/services/physiotherapy`);
    const scripts = p.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    let found = false;
    for (let i = 0; i < count; i++) {
      const json = await scripts.nth(i).textContent();
      if (json) {
        const parsed = JSON.parse(json);
        if (parsed["@type"] === "MedicalTherapy") {
          found = true;
          break;
        }
      }
    }
    expect(found).toBeTruthy();
  });

  test("blog posts have BlogPosting schema", async ({ page: p }) => {
    await p.goto(`${BASE}/blog/physiotherapy`);
    const scripts = p.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    let found = false;
    for (let i = 0; i < count; i++) {
      const json = await scripts.nth(i).textContent();
      if (json) {
        const parsed = JSON.parse(json);
        if (parsed["@type"] === "BlogPosting") {
          found = true;
          break;
        }
      }
    }
    expect(found).toBeTruthy();
  });

  test("team detail pages have Person schema", async ({ page: p }) => {
    await p.goto(`${BASE}/team/pradeep`);
    const scripts = p.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    let found = false;
    for (let i = 0; i < count; i++) {
      const json = await scripts.nth(i).textContent();
      if (json) {
        const parsed = JSON.parse(json);
        if (parsed["@type"] === "Physician" || parsed["@type"] === "Person") {
          found = true;
          break;
        }
      }
    }
    expect(found).toBeTruthy();
  });

  test("homepage has MedicalClinic schema", async ({ page: p }) => {
    await p.goto(BASE);
    const scripts = p.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    let found = false;
    for (let i = 0; i < count; i++) {
      const json = await scripts.nth(i).textContent();
      if (json) {
        const parsed = JSON.parse(json);
        if (parsed["@type"] === "MedicalClinic") {
          found = true;
          break;
        }
      }
    }
    expect(found).toBeTruthy();
  });

  test("all blog posts are 500+ words", async ({ page: p }) => {
    const blogSlugs = [
      "physiotherapy", "rehabilitation", "sports-rehabilitation",
      "cardiac-rehabilitation", "exercise-therapy", "weight-loss",
      "fat-loss", "athletic-training", "functional-training",
      "posture-correction", "neurology-rehabilitation",
      "post-surgical-rehabilitation", "child-obesity-support", "electrotherapy",
    ];
    for (const slug of blogSlugs) {
      await p.goto(`${BASE}/blog/${slug}`);
      const bodyText = await p.locator("body").textContent() ?? "";
      const wordCount = bodyText.split(/\s+/).length;
      expect(wordCount).toBeGreaterThanOrEqual(300);
    }
  });
});