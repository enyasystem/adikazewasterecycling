import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // disallow: '/private/', // Example: if you have private pages
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    // host: siteUrl, // Optional: Deprecated by Google but some crawlers might use it
  }
}
