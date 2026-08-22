import type { MetadataRoute } from "next";
import { servicesSlugs, doctors } from "@/lib/clinic";

const baseUrl = "https://vo2max.in";

const staticPages = [
  { path: "", priority: 1.0, changeFreq: "weekly" as const },
  { path: "about", priority: 0.8, changeFreq: "monthly" as const },
  { path: "services", priority: 0.9, changeFreq: "weekly" as const },
  { path: "team", priority: 0.8, changeFreq: "monthly" as const },
  { path: "pricing", priority: 0.7, changeFreq: "monthly" as const },
  { path: "testimonials", priority: 0.6, changeFreq: "monthly" as const },
  { path: "gallery", priority: 0.5, changeFreq: "monthly" as const },
  { path: "faqs", priority: 0.6, changeFreq: "monthly" as const },
  { path: "contact", priority: 0.7, changeFreq: "monthly" as const },
  { path: "book-appointment", priority: 0.8, changeFreq: "monthly" as const },
  { path: "request-callback", priority: 0.7, changeFreq: "monthly" as const },
  { path: "location", priority: 0.5, changeFreq: "monthly" as const },
  { path: "privacy-policy", priority: 0.3, changeFreq: "yearly" as const },
  { path: "terms-and-conditions", priority: 0.3, changeFreq: "yearly" as const },
  { path: "medical-disclaimer", priority: 0.3, changeFreq: "yearly" as const },
  { path: "appointment-policy", priority: 0.3, changeFreq: "yearly" as const },
  { path: "cookie-policy", priority: 0.3, changeFreq: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${baseUrl}/${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.changeFreq,
    priority: p.priority,
  }));

  for (const slug of servicesSlugs) {
    entries.push({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  for (const doctor of doctors) {
    entries.push({
      url: `${baseUrl}/team/${doctor.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
