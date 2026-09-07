export const site = {
  name: "Green House",
  nameAr: "البيت الأخضر",
  tagline: "تصميم وتنسيق المساحات الخارجية في الرياض",
  city: "الرياض",
  cityEn: "Riyadh",
  country: "المملكة العربية السعودية",
  address: "الرياض، المملكة العربية السعودية",
  phoneDisplay: "0557401773",
  phoneTel: "+966557401773",
  whatsapp: "966557401773",
  email: "riyadhgreenhouse@gmail.com",
  url: "https://www.greenhouseriyadh.com",
  mapQuery: "Riyadh, Saudi Arabia",
};

export const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "الخدمات" },
  { href: "/gallery", label: "أعمالنا" },
  { href: "/about", label: "من نحن" },
  { href: "/why-us", label: "لماذا البيت الأخضر" },
  { href: "/process", label: "آلية العمل" },
  { href: "/faq", label: "الأسئلة الشائعة" },
  { href: "/blog", label: "المدونة" },
  { href: "/contact", label: "تواصل معنا" },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMsg =
  "السلام عليكم، أرغب في الاستفسار عن خدمات تنسيق الحدائق في الرياض.";

export function mapEmbedUrl() {
  return `https://www.google.com/maps?q=${encodeURIComponent(
    site.mapQuery
  )}&output=embed`;
}
