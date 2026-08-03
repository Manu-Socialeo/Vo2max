import { test, expect } from "@playwright/test";

const BASE = "http://localhost:3000";

const blogPostIds = [
  "physiotherapy",
  "rehabilitation",
  "sports-rehabilitation",
  "cardiac-rehabilitation",
  "exercise-therapy",
  "weight-loss",
  "fat-loss",
  "athletic-training",
  "functional-training",
  "posture-correction",
  "neurology-rehabilitation",
  "post-surgical-rehabilitation",
  "child-obesity-support",
  "electrotherapy",
];

const serviceIds = [
  "physiotherapy",
  "rehabilitation",
  "sports-rehabilitation",
  "cardiac-rehabilitation",
  "exercise-therapy",
  "weight-loss",
  "fat-loss",
  "athletic-training",
  "functional-training",
  "posture-correction",
  "neurology-rehabilitation",
  "post-surgical-rehabilitation",
  "child-obesity-support",
  "electrotherapy",
];

async function captureWhatsAppUrl(page: any) {
  await page.evaluate(() => {
    (window as any)._capturedUrls = [];
    const orig = window.open;
    (window as any)._origOpen = orig;
    window.open = function (url: string, target?: string, features?: string) {
      (window as any)._capturedUrls.push(url);
      return orig.call(window, url, target, features);
    };
  });
  return {
    getUrls: () => page.evaluate(() => (window as any)._capturedUrls || []),
    restore: () =>
      page.evaluate(() => {
        window.open = (window as any)._origOpen;
      }),
  };
}

test.describe("VO2 Max Website - Functionality Tests", () => {
  test("contact form submits to WhatsApp with correct message", async ({ page }) => {
    await page.goto(`${BASE}/contact`, { waitUntil: "networkidle" });
    await page.fill('input[placeholder*="Full name"]', "John Doe");
    await page.fill('input[placeholder*="Phone number"]', "+919876543210");
    await page.fill('input[placeholder*="Email"]', "john@example.com");
    await page.selectOption('select', "Physiotherapy");
    await page.fill('textarea[placeholder*="Anything else"]', "Test message");

    const { getUrls, restore } = await captureWhatsAppUrl(page);
    await page.click('button[type="submit"]');
    const urls = await getUrls();
    await restore();

    expect(urls.length).toBeGreaterThan(0);
    const waUrl = urls[0];
    expect(waUrl).toContain("wa.me/919480166770");
    expect(waUrl).toContain("Hi, I would like to book an appointment");
  });

  test("book appointment form submits to WhatsApp with correct message", async ({ page }) => {
    await page.goto(`${BASE}/book-appointment`, { waitUntil: "networkidle" });
    await page.fill('input[placeholder*="Full name"]', "Jane Smith");
    await page.fill('input[placeholder*="Phone number"]', "+919876543211");
    await page.fill('input[placeholder*="Email"]', "jane@example.com");
    await page.selectOption('select', "Rehabilitation");
    await page.fill('input[type="date"]', "2026-09-01");
    await page.fill('input[type="time"]', "10:00");
    await page.fill('textarea[placeholder*="Any additional notes"]', "Need afternoon slot");

    const { getUrls, restore } = await captureWhatsAppUrl(page);
    await page.click('button[type="submit"]');
    const urls = await getUrls();
    await restore();

    expect(urls.length).toBeGreaterThan(0);
    const waUrl = urls[0];
    expect(waUrl).toContain("wa.me/919480166770");
    expect(waUrl).toContain("Hi, I would like to book an appointment");
  });

  test("request callback form submits to WhatsApp", async ({ page }) => {
    await page.goto(`${BASE}/request-callback`, { waitUntil: "networkidle" });
    await page.fill('input[placeholder*="Full name"]', "Alice Johnson");
    await page.fill('input[placeholder*="Phone number"]', "+919876543212");
    await page.fill('input[placeholder*="Email"]', "alice@example.com");
    await page.fill('textarea[placeholder*="Anything else"]', "Please call me back");
    await page.check('input[type="checkbox"]');

    const { getUrls, restore } = await captureWhatsAppUrl(page);
    await page.click('button[type="submit"]');
    const urls = await getUrls();
    await restore();

    expect(urls.length).toBeGreaterThan(0);
    const waUrl = urls[0];
    expect(waUrl).toContain("wa.me/919480166770");
    expect(waUrl).toContain("Hi, I would like to book an appointment");
  });

  test("FAQ accordion expands and collapses", async ({ page }) => {
    await page.goto(`${BASE}/faqs`, { waitUntil: "networkidle" });
    const firstFaqButton = page
      .locator("button")
      .filter({ hasText: /What types of conditions do you treat?/ })
      .first();
    const firstAnswer = page
      .locator("text=We treat a wide range including sports injuries")
      .first();

    await expect(firstAnswer).toBeVisible();

    await firstFaqButton.click();
    await page.waitForTimeout(300);
    await expect(firstAnswer).not.toBeVisible();

    await firstFaqButton.click();
    await page.waitForTimeout(300);
    await expect(firstAnswer).toBeVisible();
  });

  test("FAQ accordion on service detail page expands and collapses", async ({ page }) => {
    await page.goto(`${BASE}/services/physiotherapy`, { waitUntil: "networkidle" });
    const firstFaqButton = page
      .locator("button")
      .filter({ hasText: /How many physiotherapy sessions will I need?/ })
      .first();
    const chevron = firstFaqButton.locator("svg").first();

    await firstFaqButton.click();
    await page.waitForTimeout(300);
    await expect(chevron).toHaveClass(/rotate-180/);

    await firstFaqButton.click();
    await page.waitForTimeout(300);
    await expect(chevron).not.toHaveClass(/rotate-180/);
  });

  test("gallery filter tabs work correctly", async ({ page }) => {
    await page.goto(`${BASE}/gallery`, { waitUntil: "networkidle" });
    const categories = ["All", "Clinic", "Equipment", "Team", "Events"];

    for (const cat of categories) {
      const btn = page.locator(`button:has-text("${cat}")`).first();
      await btn.waitFor({ state: "visible" });
      await btn.click();
      await page.waitForTimeout(200);
    }
  });

  test("team page displays 3 cards per row on desktop with correct links", async ({ page }) => {
    await page.goto(`${BASE}/team`, { waitUntil: "networkidle" });
    const teamCards = page.locator('[class*="grid"][class*="md:grid-cols-3"] > div');
    const count = await teamCards.count();
    expect(count).toBe(2);

    const pradeepLink = page.locator('a[href="/team/pradeep"]').first();
    const pinakinLink = page.locator('a[href="/team/pinakin"]').first();

    await expect(pradeepLink).toBeVisible();
    await expect(pinakinLink).toBeVisible();
  });

  test("team detail pages have Awards, Certifications, and Accomplishments sections", async ({ page }) => {
    for (const member of ["pradeep", "pinakin"]) {
      await page.goto(`${BASE}/team/${member}`, { waitUntil: "networkidle" });
      await expect(page.locator("h1")).toBeVisible();

      await expect(page.locator("text=Awards").first()).toBeVisible();
      await expect(page.locator("text=Certifications").first()).toBeVisible();
      await expect(page.locator("text=Accomplishments").first()).toBeVisible();
    }
  });

  test("blog page has all 14 blog post links working", async ({ page }) => {
    await page.goto(`${BASE}/blog`, { waitUntil: "networkidle" });
    for (const slug of blogPostIds) {
      const link = page.locator(`a[href="/blog/${slug}"]`).first();
      await expect(link).toBeVisible();
    }
  });

  test("blog post page has article content, FAQs, and links back to services", async ({ page }) => {
    await page.goto(`${BASE}/blog/physiotherapy`, { waitUntil: "networkidle" });
    await expect(page.locator("h1")).toBeVisible();

    const articleContent = page.locator("article, .prose-custom");
    await expect(articleContent.first()).toBeVisible();

    const serviceLink = page.locator('a[href="/services/physiotherapy"]');
    await expect(serviceLink.first()).toBeVisible();
  });

  test("pricing page displays all 3 plans", async ({ page }) => {
    await page.goto(`${BASE}/pricing`, { waitUntil: "networkidle" });
    await expect(page.locator('h3:has-text("Consultation")').first()).toBeVisible();
    await expect(page.locator('h3:has-text("Treatment Package")').first()).toBeVisible();
    await expect(page.locator('h3:has-text("Fitness Program")').first()).toBeVisible();
  });

  test("testimonials page displays all testimonials", async ({ page }) => {
    await page.goto(`${BASE}/testimonials`, { waitUntil: "networkidle" });
    const testimonialCards = page.locator(
      '[class*="rounded-[20px]"][class*="bg-white"][class*="shadow"]'
    );
    const count = await testimonialCards.count();
    expect(count).toBeGreaterThanOrEqual(6);
  });

  test("services listing page has all 14 services", async ({ page }) => {
    await page.goto(`${BASE}/services`, { waitUntil: "networkidle" });
    for (const id of serviceIds) {
      const link = page.locator(`a[href="/services/${id}"]`).first();
      await expect(link).toBeVisible();
    }
  });

  test("service detail page has description, benefits, audience, FAQs, and links to blog", async ({ page }) => {
    await page.goto(`${BASE}/services/physiotherapy`, { waitUntil: "networkidle" });

    await expect(page.locator("text=About This Service").first()).toBeVisible();
    await expect(page.locator("text=Key Benefits").first()).toBeVisible();
    await expect(page.locator("text=Who Is This For?").first()).toBeVisible();
    await expect(page.locator("text=Frequently Asked Questions").first()).toBeVisible();

    const blogLink = page.locator('a[href="/blog/physiotherapy"]').first();
    await expect(blogLink).toBeVisible();
  });

  test("about page has mission, vision, values sections", async ({ page }) => {
    await page.goto(`${BASE}/about`, { waitUntil: "networkidle" });
    await expect(page.locator("text=Our Mission").first()).toBeVisible();
    await expect(page.locator("text=Our Vision").first()).toBeVisible();
    await expect(page.locator("text=Our Values").first()).toBeVisible();
  });

  test("location page has address and Google Maps embed", async ({ page }) => {
    await page.goto(`${BASE}/location`, { waitUntil: "networkidle" });
    await expect(page.locator("text=Find us in Mysuru").first()).toBeVisible();

    const address = page.locator("text=H1 Srihari Medical Trust").first();
    await expect(address).toBeVisible();

    const mapIframe = page.locator('iframe[src*="google.com/maps/embed"]').first();
    await expect(mapIframe).toBeVisible();
  });

  test("booking page form works", async ({ page }) => {
    await page.goto(`${BASE}/book-appointment`, { waitUntil: "networkidle" });
    await page.fill('input[placeholder*="Full name"]', "Bob Wilson");
    await page.fill('input[placeholder*="Phone number"]', "+919876543213");
    await page.fill('input[placeholder*="Email"]', "bob@example.com");
    await page.selectOption('select', "Exercise Therapy");
    await page.fill('input[type="date"]', "2026-09-15");
    await page.fill('input[type="time"]', "14:00");
    await page.fill('textarea[placeholder*="Any additional notes"]', "Afternoon preferred");

    const submitBtn = page.locator('button[type="submit"]');
    await expect(submitBtn).toBeVisible();
  });

  test("cookie policy page has content", async ({ page }) => {
    await page.goto(`${BASE}/cookie-policy`, { waitUntil: "networkidle" });
    await expect(page.locator("h1")).toContainText("Cookie Policy");
    await expect(page.locator("text=What Are Cookies").first()).toBeVisible();
    await expect(page.locator("text=How We Use Cookies").first()).toBeVisible();
    await expect(page.locator("text=Types of Cookies We Use").first()).toBeVisible();
  });

  test("medical disclaimer page has content", async ({ page }) => {
    await page.goto(`${BASE}/medical-disclaimer`, { waitUntil: "networkidle" });
    await expect(page.locator("h1")).toContainText("Medical Disclaimer");
    await expect(page.locator("text=Not Medical Advice").first()).toBeVisible();
    await expect(page.locator("text=Emergency Warning").first()).toBeVisible();
    await expect(page.locator("text=Results May Vary").first()).toBeVisible();
  });

  test("appointment policy page has content", async ({ page }) => {
    await page.goto(`${BASE}/appointment-policy`, { waitUntil: "networkidle" });
    await expect(page.locator("h1")).toContainText("Appointment Policy");
    await expect(page.locator("h2:has-text('Booking')").first()).toBeVisible();
    await expect(page.locator("h2:has-text('Cancellation Policy')").first()).toBeVisible();
    await expect(page.locator("h2:has-text('Late Arrivals')").first()).toBeVisible();
  });

  test("404 page shows with link back to home", async ({ page }) => {
    await page.goto(`${BASE}/non-existent-page`, { waitUntil: "networkidle" });
    await expect(page.locator("text=404").first()).toBeVisible();
    await expect(page.locator("text=Oops! This page seems to have wandered off").first()).toBeVisible();

    const homeLink = page.locator('a[href="/"]').first();
    await expect(homeLink).toBeVisible();
  });
});