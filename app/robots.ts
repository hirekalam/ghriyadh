import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://greenhouseriyadh.com';

  // Allow crawling only on the production domain.
  if (process.env.VERCEL_ENV === 'production') {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
      },
      sitemap: `${siteUrl}/sitemap.xml`,
    };
  } else {
    // Disallow crawling on all other environments (e.g., preview, development).
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }
}