import { MetadataRoute } from "next";
import { ALL_SOLUTIONS_LIST } from "@/data/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://davatrack.com";

  const staticPages = [
    "",
    "/about",
    "/solutions",
    "/testimonials",
    "/inquiry",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const solutionPages = ALL_SOLUTIONS_LIST.map((solution) => ({
    url: `${baseUrl}/solutions/${solution.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...solutionPages];
}
