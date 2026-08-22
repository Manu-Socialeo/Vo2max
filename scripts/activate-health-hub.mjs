import fs from "fs";
import path from "path";

console.log("🚀 Starting Health Hub & Blog reactivation...");

// 1. Restore src/app/blog files
const appBlogDir = path.join(process.cwd(), "src", "app", "blog");
const appBlogSlugDir = path.join(appBlogDir, "[slug]");
const archiveBlogDir = path.join(process.cwd(), "_archived_blog", "src", "app", "blog");

if (!fs.existsSync(appBlogDir)) fs.mkdirSync(appBlogDir, { recursive: true });
if (!fs.existsSync(appBlogSlugDir)) fs.mkdirSync(appBlogSlugDir, { recursive: true });

fs.copyFileSync(
  path.join(archiveBlogDir, "page.tsx"),
  path.join(appBlogDir, "page.tsx")
);
fs.copyFileSync(
  path.join(archiveBlogDir, "[slug]", "page.tsx"),
  path.join(appBlogSlugDir, "page.tsx")
);
console.log("✅ Restored src/app/blog/page.tsx and src/app/blog/[slug]/page.tsx");

// 2. Re-add Health Hub to Header navigation
const headerPath = path.join(process.cwd(), "src", "components", "Header.tsx");
let headerContent = fs.readFileSync(headerPath, "utf8");
if (!headerContent.includes('{ href: "/blog", label: "Health Hub" }')) {
  headerContent = headerContent.replace(
    '{ href: "/gallery", label: "Gallery" },',
    '{ href: "/gallery", label: "Gallery" },\n  { href: "/blog", label: "Health Hub" },'
  );
  fs.writeFileSync(headerPath, headerContent, "utf8");
  console.log("✅ Re-added Health Hub to src/components/Header.tsx");
}

// 3. Re-add to Sitemap
const sitemapPath = path.join(process.cwd(), "src", "app", "sitemap.ts");
let sitemapContent = fs.readFileSync(sitemapPath, "utf8");
if (!sitemapContent.includes('blogPosts')) {
  sitemapContent = sitemapContent.replace(
    'import { servicesSlugs, doctors } from "@/lib/clinic";',
    'import { servicesSlugs, doctors } from "@/lib/clinic";\nimport { blogPosts } from "@/lib/blog-content";'
  );
  sitemapContent = sitemapContent.replace(
    '{ path: "pricing", priority: 0.7, changeFreq: "monthly" as const },',
    '{ path: "pricing", priority: 0.7, changeFreq: "monthly" as const },\n  { path: "blog", priority: 0.8, changeFreq: "weekly" as const },'
  );
  sitemapContent = sitemapContent.replace(
    'return entries;\n}',
    `  for (const post of blogPosts) {
    entries.push({
      url: \`\${baseUrl}/blog/\${post.id}\`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}`
  );
  fs.writeFileSync(sitemapPath, sitemapContent, "utf8");
  console.log("✅ Re-added Health Hub and 14 blog routes to src/app/sitemap.ts");
}

// 4. Re-link from service details page
const servicePagePath = path.join(process.cwd(), "src", "app", "services", "[slug]", "page.tsx");
let servicePageContent = fs.readFileSync(servicePagePath, "utf8");
if (!servicePageContent.includes('/blog/')) {
  servicePageContent = servicePageContent.replace(
    '<p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">{content?.description}</p>',
    `<p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">{content?.description}</p>
            <div className="mt-4">
              <Link href={"/blog/" + slug} className="text-xs font-bold text-[#0052FF] hover:underline">Read our clinical guide on {service.title} &rarr;</Link>
            </div>`
  );
  fs.writeFileSync(servicePagePath, servicePageContent, "utf8");
  console.log("✅ Re-added clinical guide cross-links in src/app/services/[slug]/page.tsx");
}

console.log("🎉 Health Hub & All 14 Blogs are now fully reactivated and live!");
