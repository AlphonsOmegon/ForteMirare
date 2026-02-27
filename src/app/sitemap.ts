import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://fortemirare.com',
      lastModified: new Date(),
      priority: 1,
    },
  ]
}