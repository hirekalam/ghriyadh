import type { Metadata, Viewport } from "next";
import { Tajawal, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import StickyBar from "@/components/sticky-bar";
import Preloader from "@/components/preloader";
import ScrollProgress from "@/components/scroll-progress";
import BackToTop from "@/components/back-to-top";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";
import { websiteJsonLd } from "@/lib/jsonld";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#052B12",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: `${site.name} | ${site.nameAr}`,
  title: "تنسيق حدائق بالرياض | البيت الأخضر Green House",
  description:
    "تصميم وتنسيق الحدائق والمساحات الخارجية في الرياض. خدمات متكاملة تشمل تنسيق الحدائق والجلسات الخارجية والشلالات والنوافير وشبكات الري وتركيب الثيل.",
  keywords: [
    "تنسيق حدائق بالرياض",
    "تصميم حدائق بالرياض",
    "شركة تنسيق حدائق بالرياض",
    "تنسيق حدائق فلل",
    "تركيب ثيل صناعي بالرياض",
  ],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: site.url,
    siteName: `${site.name} | ${site.nameAr}`,
    title: "البيت الأخضر | Green House — تنسيق حدائق بالرياض",
    description:
      "حلول مدروسة للمساحات الخارجية في الرياض. تصميم وتنسيق يجمع بين الجمال والوظيفة ويناسب المناخ السعودي.",
  },
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${manrope.variable}`}>
      <body className="font-sans text-ink antialiased">
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <JsonLd data={websiteJsonLd()} />
        <Preloader />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyBar />
        <BackToTop />
      </body>
    </html>
  );
}
