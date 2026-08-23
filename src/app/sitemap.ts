import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://riyadhgreenhouse.com';

  const mainPages = [
    '',
    '/about',
    '/why-us',
    '/process',
    '/gallery',
    '/faq',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
    '/services',
    '/sitemap',
  ];

  const services = [
    'garden-landscaping-riyadh',
    'rooftop-landscaping',
    'artificial-grass',
    'natural-grass',
    'waterfalls-fountains',
    'automatic-irrigation',
    'outdoor-seating',
    'pergolas-shades',
    'planter-boxes',
    'trees-palms-flowers',
    'under-stair-landscaping',
    'garden-maintenance',
    'football-fields',
  ];

  const articles = [
    'garden-design-riyadh',
    'artificial-grass-guide',
    'home-garden-design',
    'irrigation-systems',
  ];

  const sitemapEntries = [
    ...mainPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
    })),
    ...services.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...articles.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  return sitemapEntries;
}
