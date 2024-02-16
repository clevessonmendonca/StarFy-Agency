import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "StarFy Agency",
    short_name: "StarFy",
    description:
      "StarFy Agency: Elevate your business to new heights. Explore our comprehensive services focused on tangible results. Get in touch to discover how we can boost your success in the USA market.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4a1e84",
    icons: [
      {
        src: "/logotipo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/StarFy-logo-black.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    lang: "en",
    orientation: "portrait",
    categories: ["business", "marketing", "agency", "services"],
    dir: "ltr",
  };
}
