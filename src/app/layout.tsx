import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';

export const metadata: Metadata = {
  title: 'شركة البيت الأخضر | تنسيق حدائق بالرياض وتركيب عشب صناعي طبيعي',
  description: 'تصميم وتنسيق حدائق منزلية وفلل بالرياض. البيت الأخضر يقدم تركيب الثيل الصناعي والطبيعي، شلالات ونوافير، شبكات ري أوتوماتيكية، وتنسيق الأسطح بأحدث التصاميم العصرية.',
  metadataBase: new URL('https://riyadhgreenhouse.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'شركة البيت الأخضر | تصميم وتنسيق حدائق بالرياض',
    description: 'تنسيق حدائق منزلية وفلل في الرياض. تركيب عشب صناعي وطبيعي، تصميم شلالات ونوافير ونظم ري متكاملة وموفرة للمياه.',
    url: 'https://riyadhgreenhouse.com',
    siteName: 'البيت الأخضر',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/images/hero-garden-path.jpg',
        width: 1200,
        height: 630,
        alt: 'تنسيق حدائق البيت الأخضر بالرياض',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'البيت الأخضر | تنسيق حدائق منزلية وفلل بالرياض',
    description: 'تصميم وتنفيذ الحدائق المنزلية وشبكات الري والشلالات بالرياض.',
    images: ['/images/hero-garden-path.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://riyadhgreenhouse.com/#service",
        "name": "البيت الأخضر لتنسيق الحدائق بالرياض",
        "alternateName": "Green House Landscaping",
        "image": "https://riyadhgreenhouse.com/images/hero-garden-path.jpg",
        "url": "https://riyadhgreenhouse.com",
        "telephone": "+966557401773",
        "email": "riyadhgreenhouse@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Riyadh",
          "addressLocality": "Riyadh",
          "addressRegion": "Riyadh Province",
          "addressCountry": "SA"
        },
        "priceRange": "$$",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Riyadh"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://riyadhgreenhouse.com/#business",
        "name": "البيت الأخضر | Green House",
        "image": "https://riyadhgreenhouse.com/images/hero-garden-path.jpg",
        "telephone": "+966557401773",
        "email": "riyadhgreenhouse@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Riyadh",
          "addressLocality": "Riyadh",
          "addressCountry": "SA"
        }
      }
    ]
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {/* Grain overlay for luxury editorial paper textures */}
        <div className="grain-overlay" />
        
        <Header />
        
        <main className="flex-1 pt-20">
          {children}
        </main>
        
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
