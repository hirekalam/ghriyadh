import type { Metadata } from "next";
import { site } from "./site";

export type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string;
  type?: "website" | "article";
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    tags?: string[];
  };
  noindex?: boolean;
};

const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80";

export function buildMetadata({
  title,
  description,
  path,
  image,
  keywords,
  type = "website",
  article,
  noindex = false,
}: SeoProps): Metadata {
  const url = `${site.url}${path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noindex,
      follow: true,
      googleBot: {
        index: !noindex,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: `${site.name} | ${site.nameAr}`,
      locale: "ar_SA",
      type,
      ...(type === "article" && article?.publishedTime
        ? { article: { publishedTime: article.publishedTime } }
        : {}),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 800,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
