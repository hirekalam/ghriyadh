import { site } from "./site";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${site.url}/#localbusiness`,
    name: `${site.name} - ${site.nameAr}`,
    description:
      "تصميم وتنسيق الحدائق والمساحات الخارجية في الرياض، المملكة العربية السعودية. خدمات متكاملة من التصميم إلى التنفيذ مع مراعاة المناخ المحلي.",
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    logo: `${site.url}/icon.svg`,
    priceRange: "$$",
    image: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "الرياض",
      addressRegion: "الرياض",
      addressCountry: "SA",
    },
    areaServed: {
      "@type": "City",
      name: "الرياض",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneTel,
      contactType: "customer service",
      areaServed: "SA",
      availableLanguage: ["ar", "en"],
    },
    knowsAbout: [
      "تنسيق الحدائق",
      "تصميم المساحات الخارجية",
      "تركيب الثيل الطبيعي والصناعي",
      "الشلالات والنوافير",
      "شبكات الري",
      "الجلسات الخارجية والبرجولات",
    ],
    sameAs: [],
  };
}

export function websiteJsonLd() {
  const brandName = `${site.name} - ${site.nameAr}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: brandName,
        inLanguage: "ar-SA",
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        url: site.url,
        name: brandName,
        logo: `${site.url}/icon.svg`,
        telephone: site.phoneTel,
        email: site.email,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.phoneTel,
          contactType: "customer service",
          areaServed: "SA",
          availableLanguage: ["ar", "en"],
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "الرياض",
          addressRegion: "الرياض",
          addressCountry: "SA",
        },
        sameAs: [],
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.url}`,
    })),
  };
}

export function serviceJsonLd(service: {
  title: string;
  titleEn: string;
  short: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    alternateName: service.titleEn,
    description: service.short,
    url: `${site.url}/services/${service.slug}`,
    serviceType: service.titleEn,
    areaServed: {
      "@type": "City",
      name: "الرياض",
    },
    provider: {
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: `${site.name} - ${site.nameAr}`,
      telephone: site.phoneTel,
      email: site.email,
      url: site.url,
    },
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function blogJsonLd(post: {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  category?: string;
}) {
  const publisherName = `${site.name} - ${site.nameAr}`;
  const canonical = `${site.url}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "ar",
    image: post.image,
    url: canonical,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    ...(post.category ? { articleSection: post.category } : {}),
    author: {
      "@type": "Organization",
      name: publisherName,
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
    },
  };
}
