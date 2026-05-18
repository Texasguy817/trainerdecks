import type { MetadataRoute } from 'next';
const base = 'https://trainerdecks.com';
const routes = ['', '/decks', '/cards', '/guides', '/tools', '/meta', '/about', '/privacy', '/contact'];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: 'weekly', priority: route === '' ? 1 : 0.7 }));
}
