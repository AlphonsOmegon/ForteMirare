import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://fortemirare.com',
      lastModified: new Date(),
    },
    {
      url: 'https://fortemirare.com#portfolio',
      lastModified: new Date(),
    },
    {
      url: 'https://fortemirare.com#about',
      lastModified: new Date(),
    },
    {
      url: 'https://fortemirare.com#products',
      lastModified: new Date(),
    },
    {
      url: 'https://fortemirare.com#contact',
      lastModified: new Date(),
    },
  ]
}