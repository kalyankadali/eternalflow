import type { MetadataRoute } from "next";
import { workDemos } from "@/data";
import { absoluteUrl, siteRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    ...siteRoutes,
    ...workDemos.map((demo) => `/work/${demo.slug}` as const),
  ];
  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "/" || path === "/pricing" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/pricing" || path === "/get-started"
          ? 0.9
          : 0.7,
  }));
}
