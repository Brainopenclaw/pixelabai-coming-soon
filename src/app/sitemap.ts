import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const blogUrls = posts.map(post => ({
    url: `https://pixelabai.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  return [
    { url: 'https://pixelabai.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://pixelabai.com/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://pixelabai.com/recursos', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://pixelabai.com/curso', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://pixelabai.com/sobre-mi', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    ...blogUrls,
  ]
}
