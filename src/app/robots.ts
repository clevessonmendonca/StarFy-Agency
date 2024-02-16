import { MetadataRoute } from "next";
import { websiteUrl } from "./sitemap";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${websiteUrl}/sitemap.xml`,
  };
}