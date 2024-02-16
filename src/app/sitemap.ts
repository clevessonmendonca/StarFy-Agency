import { locales } from "@/navigation";
import { MetadataRoute } from "next";

export const websiteUrl = "https://starfymkt.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pagesWithLocations = locales.map((locale) => [
    {
      url: websiteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${websiteUrl}/${locale}/#about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${websiteUrl}/${locale}/#services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${websiteUrl}/${locale}/#testimonials`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${websiteUrl}/${locale}/contact`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
  ]);

  return pagesWithLocations.flat() as MetadataRoute.Sitemap;
}
