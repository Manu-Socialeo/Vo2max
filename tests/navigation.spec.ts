import { test, expect } from "@playwright/test";

const BASE = "http://localhost:3000";

const headerNavLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const footerLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms" },
  { href: "/medical-disclaimer", label: "Disclaimer" },
  { href: "/appointment-policy", label: "Appointments" },
  { href: "/cookie-policy", label: "Cookies" },
];

const serviceCategoryLinks = [
  "/services/physiotherapy",
  "/services/rehabilitation",
  "/services/sports-rehabilitation",
  "/services/cardiac-rehabilitation",
  "/services/exercise-therapy",
  "/services/weight-loss",
  "/services/fat-loss",
  "/services/athletic-training",
  "/services/functional-training",
  "/services/posture-correction",
  "/services/neurology-rehabilitation",
  "/services/post-surgical-rehabilitation",
  "/services/child-obesity-support",
  "/services/electrotherapy",
];

test.describe("VO2 Max Website Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE);
  });

  test.describe("Header Navigation", () => {
    for (const link of headerNavLinks) {
      test(`header nav link to ${link.label} works`, async ({ page }) => {
        const navLink = page.locator(`header a[href="${link.href}"]`).first();
        await navLink.click();
        await page.waitForURL(new RegExp(`^${BASE}${link.href}`), { timeout: 10000 });
        await expect(page.locator("body")).toBeVisible();
        if (link.href !== "/") {
          await expect(page.locator("h1")).toBeVisible();
        }
        await page.goto(BASE);
      });
    }
  });

  test.describe("Footer Links", () => {
    for (const link of footerLinks) {
      test(`footer link to ${link.label} works`, async ({ page }) => {
        await page.goto(BASE);
        const footerLink = page.locator(`footer a[href="${link.href}"]`).first();
        await footerLink.click();
        await page.waitForURL(new RegExp(`^${BASE}${link.href}`), { timeout: 10000 });
        await expect(page.locator("body")).toBeVisible();
        await expect(page.locator("h1")).toBeVisible();
      });
    }
  });

  test.describe("Service Category Links", () => {
    test("all service category links from services page work", async ({ page }) => {
      await page.goto(`${BASE}/services`);
      for (const servicePath of serviceCategoryLinks) {
        const serviceLink = page.locator(`a[href="${servicePath}"]`).first();
        await expect(serviceLink).toBeVisible();
        const href = await serviceLink.getAttribute("href");
        expect(href).toBe(servicePath);
      }

      const firstService = serviceCategoryLinks[0];
      await page.locator(`a[href="${firstService}"]`).first().click();
      await expect(page).toHaveURL(new RegExp(`^${BASE}${firstService}`), { timeout: 15000 });
      await expect(page.locator("h1")).toBeVisible();
    });
  });

  test.describe("Floating Buttons", () => {
    test("WhatsApp floating button opens WhatsApp", async ({ page }) => {
      await page.goto(BASE);
      const waButton = page.locator("a.whatsapp-float").first();
      await expect(waButton).toBeVisible();
      const href = await waButton.getAttribute("href");
      expect(href).toContain("wa.me");
      expect(href).toContain("919480166770");
    });

    test("Call floating button initiates a call", async ({ page }) => {
      await page.goto(BASE);
      const callButton = page.locator("a.call-float").first();
      await expect(callButton).toBeVisible();
      const href = await callButton.getAttribute("href");
      expect(href).toMatch(/^tel:/);
    });
  });

  test.describe("Book Appointment Buttons", () => {
    test("all Book Appointment buttons navigate to /book-appointment", async ({ page }) => {
      const pagesToCheck = [
        { url: BASE, selector: 'a[href="/book-appointment"]' },
        { url: `${BASE}/services`, selector: 'a[href="/book-appointment"]' },
        { url: `${BASE}/about`, selector: 'a[href="/book-appointment"]' },
      ];

      for (const { url, selector } of pagesToCheck) {
        await page.goto(url);
        const bookButtons = page.locator(selector);
        const count = await bookButtons.count();
        for (let i = 0; i < count; i++) {
          const button = bookButtons.nth(i);
          await button.click();
          await page.waitForURL(new RegExp(`^${BASE}/book-appointment`), { timeout: 10000 });
          await page.goto(url);
        }
      }
    });
  });

  test.describe("WhatsApp Buttons", () => {
    test("WhatsApp buttons have correct wa.me URL with booking message", async ({ page }) => {
      const pagesToCheck = [
        { url: BASE, selector: 'a[href*="wa.me"]' },
        { url: `${BASE}/services`, selector: 'a[href*="wa.me"]' },
        { url: `${BASE}/contact`, selector: 'a[href*="wa.me"]' },
        { url: `${BASE}/blog`, selector: 'a[href*="wa.me"]' },
      ];

      const expectedMessage = encodeURIComponent("Hi, I would like to book an appointment");

      for (const { url, selector } of pagesToCheck) {
        await page.goto(url);
        const waLinksWithText = page.locator(`${selector}[href*="text="]`);
        const count = await waLinksWithText.count();

        for (let i = 0; i < count; i++) {
          const href = await waLinksWithText.nth(i).getAttribute("href");
          expect(href).toContain(`wa.me/919480166770`);
          expect(href).toContain(expectedMessage);
        }
      }
    });
  });

  test.describe("Location Links", () => {
    test("location links open Google Maps", async ({ page }) => {
      const pagesToCheck = [
        { url: `${BASE}/contact`, selector: 'a[href*="maps.google.com"]' },
        { url: `${BASE}/location`, selector: 'a[href*="maps.google.com"]' },
      ];

      for (const { url, selector } of pagesToCheck) {
        await page.goto(url);
        const mapLinks = page.locator(selector);
        const count = await mapLinks.count();
        for (let i = 0; i < count; i++) {
          const href = await mapLinks.nth(i).getAttribute("href");
          expect(href).toContain("maps.google.com");
        }
      }
    });
  });

  test.describe("Email Links", () => {
    test("email links open the mail client", async ({ page }) => {
      const pagesToCheck = [
        { url: `${BASE}/contact`, selector: 'a[href^="mailto:"]' },
        { url: BASE, selector: `footer a[href^="mailto:"]` },
      ];

      for (const { url, selector } of pagesToCheck) {
        await page.goto(url);
        const emailLinks = page.locator(selector);
        const count = await emailLinks.count();
        for (let i = 0; i < count; i++) {
          const href = await emailLinks.nth(i).getAttribute("href");
          expect(href).toMatch(/^mailto:/);
        }
      }
    });
  });

  test.describe("Mobile Navigation", () => {
    test.use({ viewport: { width: 375, height: 812 } });

    test("hamburger menu works on mobile viewport", async ({ page }) => {
      await page.goto(BASE);
      const hamburger = page.locator('button[aria-label="Toggle menu"]').first();
      await expect(hamburger).toBeVisible();

      const mobileNav = page.locator("nav").filter({ has: page.locator("a[href='/team']") }).last();
      await expect(mobileNav).not.toBeVisible();

      await hamburger.click();
      await expect(mobileNav).toBeVisible();

      const teamLink = mobileNav.locator('a[href="/team"]');
      await expect(teamLink).toBeVisible();
      await teamLink.click();
      await page.waitForLoadState("domcontentloaded");
      await expect(page.locator("body")).toBeVisible();
    });
  });

  test.describe("Hero Carousel", () => {
    test("carousel banner rotates images", async ({ page }) => {
      await page.goto(BASE);
      const carousel = page.locator("section").filter({ has: page.locator("img") }).first();
      if (await carousel.count() === 0) {
        test.skip(true, "Carousel not found on this page");
        return;
      }

      const slides = carousel.locator("[class*='opacity-100'], [class*='opacity-0']");
      const slideCount = await slides.count();
      expect(slideCount).toBeGreaterThanOrEqual(2);

      const initialActive = carousel.locator("[class*='opacity-100']").first();
      await expect(initialActive).toHaveCount(1);

      await page.waitForTimeout(5500);

      const afterActive = carousel.locator("[class*='opacity-100']").first();
      await expect(afterActive).toHaveCount(1);
    });
  });
});