import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://buntystaxis.com/sitemap.xml",
    host: "https://buntystaxis.com",
  };
}
