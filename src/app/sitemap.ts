import { MetadataRoute } from 'next';
import { DOCTORS, SPECIALITIES, ARTICLES } from '@/legacyData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fatehhospital.com';

  // Base static routes
  const routes = [
    '',
    '/about',
    '/doctors',
    '/gallery',
    '/parent-corner',
    '/contact',
    '/appointment',
    '/specialities',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Speciality routes
  const specialityRoutes = SPECIALITIES.map((spec) => ({
    url: `${baseUrl}/speciality/${spec.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Doctor routes
  const doctorRoutes = DOCTORS.map((doc) => ({
    url: `${baseUrl}/doctor/${doc.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Article routes
  const articleRoutes = ARTICLES.map((article) => ({
    url: `${baseUrl}/article/${article.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...specialityRoutes, ...doctorRoutes, ...articleRoutes];
}
