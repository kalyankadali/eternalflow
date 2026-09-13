import type { MetadataRoute } from "next";
import { absoluteUrl, siteRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return siteRoutes.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "/" || path === "/pricing" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/pricing" || path === "/get-started" ? 0.9 : 0.7,
  }));
}
