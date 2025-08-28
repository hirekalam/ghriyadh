import type React from "react"
import type { Metadata } from "next"
import { Cairo, Poppins, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import DynamicComponents from "@/components/dynamic-components"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Green House | البيت الأخضر - شركة تنسيق حدائق الرياض",
  description:
    "أفضل شركة تنسيق حدائق في الرياض والدمام. خدمات العشب الصناعي والطبيعي، المظلات والسواتر، النوافير والشلالات، وأنظمة الري.",
  generator: "Green House Landscaping",
  keywords: "تنسيق حدائق الرياض, عشب صناعي, عشب طبيعي, مظلات وسواتر, نوافير وشلالات, شبكات الري",
  authors: [{ name: "Green House Landscaping" }],
  openGraph: {
    title: "Green House | البيت الأخضر - شركة تنسيق حدائق الرياض",
    description: "أفضل شركة تنسيق حدائق في الرياض والدمام",
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${spaceGrotesk.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#059669" />
        <link rel="alternate" hrefLang="ar-SA" href="/" />
        <link rel="alternate" hrefLang="en" href="/en" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <LanguageProvider>
          {children}
          <DynamicComponents />
        </LanguageProvider>
      </body>
    </html>
  )
}