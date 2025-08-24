"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "ar" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  ar: {
    // Navigation
    home: "الرئيسية",
    services: "الخدمات",
    projects: "المشاريع",
    about: "من نحن",
    blog: "المدونة",
    contact: "اتصل بنا",

    // Hero Section
    heroTitle: "Green House",
    heroSubtitle: "البيت الأخضر",
    heroTypewriter: "شركة تنسيق حدائق الرياض، المملكة العربية السعودية",
    heroSubtext: "أفضل مقاولي المناظر الطبيعية في الرياض، المملكة العربية السعودية",
    getQuote: "احصل على عرض مجاني الآن",
    exploreServices: "استكشف خدماتنا",

    // Slides
    slide1Title: "تنسيق حدائق فاخرة",
    slide1Subtitle: "نحول أحلامك إلى واقع أخضر",
    slide2Title: "عشب صناعي عالي الجودة",
    slide2Subtitle: "جمال دائم بدون صيانة",
    slide3Title: "نوافير وشلالات مذهلة",
    slide3Subtitle: "لمسة من الفخامة لحديقتك",
    slide4Title: "مظلات وسواتر عصرية",
    slide4Subtitle: "راحة وأناقة في مساحتك الخارجية",

    // Header
    callNow: "اتصل الآن",
    getFreeQuote: "احصل على عرض مجاني",

    // Services Overview
    servicesTitle: "خدماتنا المتميزة",
    servicesSubtitle: "نقدم مجموعة شاملة من خدمات تنسيق الحدائق والمناظر الطبيعية",
    landscapingTitle: "تنسيق الحدائق",
    landscapingDesc: "تصميم وتنفيذ حدائق فاخرة تناسب ذوقك",
    artificialGrassTitle: "العشب الصناعي",
    artificialGrassDesc: "تركيب عشب صناعي عالي الجودة",
    naturalGrassTitle: "العشب الطبيعي",
    naturalGrassDesc: "زراعة وصيانة العشب الطبيعي",
    shadesTitle: "المظلات والسواتر",
    shadesDesc: "تركيب مظلات وسواتر عصرية",
    wallGrassTitle: "العشب الجداري",
    wallGrassDesc: "حدائق عمودية وعشب جداري",
    fountainsTitle: "النوافير والشلالات",
    fountainsDesc: "تصميم وتنفيذ نوافير مذهلة",
    irrigationTitle: "أنظمة الري",
    irrigationDesc: "تركيب أنظمة ري حديثة",
    learnMore: "اعرف المزيد",

    // Why Choose Us
    whyChooseTitle: "لماذا تختار البيت الأخضر؟",
    whyChooseSubtitle: "نحن الخيار الأول لتنسيق الحدائق في الرياض",
    projectsCompleted: "مشروع مكتمل",
    yearsExperience: "سنة خبرة",
    happyClients: "عميل سعيد",
    teamMembers: "عضو فريق",
    qualityWork: "جودة عالية",
    qualityWorkDesc: "نستخدم أفضل المواد والتقنيات",
    professionalTeam: "فريق محترف",
    professionalTeamDesc: "خبراء متخصصون في تنسيق الحدائق",
    fastService: "خدمة سريعة",
    fastServiceDesc: "تنفيذ المشاريع في الوقت المحدد",
    competitivePrices: "أسعار تنافسية",
    competitivePricesDesc: "أفضل الأسعار في السوق",
  },
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    projects: "Projects",
    about: "About",
    blog: "Blog",
    contact: "Contact",

    // Hero Section
    heroTitle: "Green House",
    heroSubtitle: "البيت الأخضر",
    heroTypewriter: "Landscaping Company in Riyadh, Saudi Arabia",
    heroSubtext: "Top Landscape Contractors in Riyadh, Saudi Arabia",
    getQuote: "Get Free Quote Now",
    exploreServices: "Explore Our Services",

    // Slides
    slide1Title: "Luxury Landscaping",
    slide1Subtitle: "Turning your dreams into green reality",
    slide2Title: "High Quality Artificial Grass",
    slide2Subtitle: "Permanent beauty without maintenance",
    slide3Title: "Stunning Fountains & Waterfalls",
    slide3Subtitle: "A touch of luxury for your garden",
    slide4Title: "Modern Shades & Barriers",
    slide4Subtitle: "Comfort and elegance in your outdoor space",

    // Header
    callNow: "Call Now",
    getFreeQuote: "Get Free Quote",

    // Services Overview
    servicesTitle: "Our Distinguished Services",
    servicesSubtitle: "We provide a comprehensive range of landscaping and garden design services",
    landscapingTitle: "Landscaping",
    landscapingDesc: "Design and implementation of luxury gardens that suit your taste",
    artificialGrassTitle: "Artificial Grass",
    artificialGrassDesc: "Installation of high-quality artificial grass",
    naturalGrassTitle: "Natural Grass",
    naturalGrassDesc: "Planting and maintenance of natural grass",
    shadesTitle: "Shades & Barriers",
    shadesDesc: "Installation of modern shades and barriers",
    wallGrassTitle: "Wall Grass",
    wallGrassDesc: "Vertical gardens and wall grass",
    fountainsTitle: "Fountains & Waterfalls",
    fountainsDesc: "Design and implementation of stunning fountains",
    irrigationTitle: "Irrigation Systems",
    irrigationDesc: "Installation of modern irrigation systems",
    learnMore: "Learn More",

    // Why Choose Us
    whyChooseTitle: "Why Choose Green House?",
    whyChooseSubtitle: "We are the first choice for landscaping in Riyadh",
    projectsCompleted: "Projects Completed",
    yearsExperience: "Years Experience",
    happyClients: "Happy Clients",
    teamMembers: "Team Members",
    qualityWork: "High Quality",
    qualityWorkDesc: "We use the best materials and techniques",
    professionalTeam: "Professional Team",
    professionalTeamDesc: "Experts specialized in landscaping",
    fastService: "Fast Service",
    fastServiceDesc: "Project execution on time",
    competitivePrices: "Competitive Prices",
    competitivePricesDesc: "Best prices in the market",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar")

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ar] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
