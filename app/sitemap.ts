import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://agentic-54e8ef23.vercel.app'
  const routes = ['', '/services', '/case-studies', '/about', '/contact']
  const now = new Date().toISOString()
  return routes.map((r) => ({ url: base + r, lastModified: now, changeFrequency: 'weekly', priority: r === '' ? 1 : 0.7 }))
}
