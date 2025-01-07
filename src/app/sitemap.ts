import {MetadataRoute} from 'next'
import {BASE_URL} from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  // Liste des routes statiques
  return [
    '', // Page d'accueil uniquement
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }))
} 