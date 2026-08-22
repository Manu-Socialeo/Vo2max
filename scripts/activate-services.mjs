import fs from "fs";
import path from "path";

console.log("🚀 Reactivating Specialized Clinical Treatment Pages (14 Pages)...");

// 1. Restore src/app/services/[slug]/page.tsx
const appServicesSlugDir = path.join(process.cwd(), "src", "app", "services", "[slug]");
const archiveServicesSlugDir = path.join(process.cwd(), "_archived_services", "src", "app", "services", "[slug]");

if (!fs.existsSync(appServicesSlugDir)) {
  fs.mkdirSync(appServicesSlugDir, { recursive: true });
}

fs.copyFileSync(
  path.join(archiveServicesSlugDir, "page.tsx"),
  path.join(appServicesSlugDir, "page.tsx")
);
console.log("✅ Restored src/app/services/[slug]/page.tsx");

// 2. Restore links on src/app/services/page.tsx
const servicesPagePath = path.join(process.cwd(), "src", "app", "services", "page.tsx");
let servicesPageContent = fs.readFileSync(servicesPagePath, "utf8");
servicesPageContent = servicesPageContent.replace(
  'url: `https://vo2maxclinic.vercel.app/services`,',
  'url: `https://vo2maxclinic.vercel.app/services/${s.id}`,'
);
servicesPageContent = servicesPageContent.replace(
  `<div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href="/book-appointment"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052FF] transition-colors hover:text-[#0042D1]"
                    >
                      <span>Book Consultation</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>`,
  `<div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#0052FF] pt-4 border-t border-slate-100">
                      <Link href={\`/services/\${service.id}\`} className="inline-flex items-center gap-1.5 hover:underline">
                        <span>View clinical protocol</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>`
);
fs.writeFileSync(servicesPagePath, servicesPageContent, "utf8");
console.log("✅ Restored deep links on /services directory page");

// 3. Restore Header dropdown
const headerPath = path.join(process.cwd(), "src", "components", "Header.tsx");
let headerContent = fs.readFileSync(headerPath, "utf8");
if (!headerContent.includes('dropdown:')) {
  headerContent = headerContent.replace(
    '{ href: "/services", label: "Services" },',
    `{
    href: "/services",
    label: "Services",
    dropdown: [
      { href: "/services/physiotherapy", label: "Manual Physiotherapy" },
      { href: "/services/sports-rehabilitation", label: "Sports Rehabilitation" },
      { href: "/services/post-surgical-rehabilitation", label: "Post-Surgical Care" },
      { href: "/services/cardiac-rehabilitation", label: "Cardiac Rehabilitation" },
      { href: "/services/neurology-rehabilitation", label: "Neuro Rehabilitation" },
      { href: "/services/exercise-therapy", label: "Exercise & Functional Therapy" },
    ],
  },`
  );
  fs.writeFileSync(headerPath, headerContent, "utf8");
  console.log("✅ Restored Services dropdown in Header");
}

// 4. Restore Sitemap
const sitemapPath = path.join(process.cwd(), "src", "app", "sitemap.ts");
let sitemapContent = fs.readFileSync(sitemapPath, "utf8");
if (!sitemapContent.includes('servicesSlugs')) {
  sitemapContent = sitemapContent.replace(
    'import { doctors } from "@/lib/clinic";',
    'import { servicesSlugs, doctors } from "@/lib/clinic";'
  );
  sitemapContent = sitemapContent.replace(
    'for (const doctor of doctors) {',
    `for (const slug of servicesSlugs) {
    entries.push({
      url: \`\${baseUrl}/services/\${slug}\`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  for (const doctor of doctors) {`
  );
  fs.writeFileSync(sitemapPath, sitemapContent, "utf8");
  console.log("✅ Restored servicesSlugs in sitemap.ts");
}

console.log("🎉 All 14 Specialized Treatment Pages are now reactivated and live!");
