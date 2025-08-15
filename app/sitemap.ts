import type { MetadataRoute } from "next"
import { NAV_LINKS } from "@/lib/constants"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

  const staticPages = NAV_LINKS.map((link) => ({
    url: `${siteUrl}${link.href}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const, // Type assertion
    priority: link.href === "/" ? 1 : 0.8,
  }))

  // Example: Add dynamic pages like blog posts or service details if you have them
  // const blogPosts = await fetch('...').then(res => res.json());
  // const dynamicPages = blogPosts.map(post => ({
  //   url: `${siteUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'weekly',
  //   priority: 0.7,
  // }));

  return [
    ...staticPages,
    // ...dynamicPages,
  ]
}
