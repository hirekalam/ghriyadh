import Link from "next/link";
import { ExternalLink, Leaf, Mail, MapPin, Phone } from "lucide-react";
import { footerAreas } from "@/lib/neighborhoods";
import { site, whatsappLink, defaultWhatsappMsg } from "@/lib/site";
import { services } from "@/lib/services";
import LeafPattern from "./leaf-pattern";
import GardenPattern from "./garden-pattern";

const diamond = (
  <span className="h-2 w-2 rotate-45 rounded-[2px] bg-gold-gradient" aria-hidden="true" />
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-forest text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden text-gold-light opacity-[0.05]">
        <GardenPattern />
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden text-white opacity-[0.03]">
        <LeafPattern />
      </div>
      <div className="bg-gold-glow-alt pointer-events-none absolute inset-0" />
      <div className="container-site relative grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white">
              <Leaf className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <div className="leading-none">
              <p className="font-latin text-xl font-bold tracking-tight">Green House</p>
              <p className="mt-1 text-base text-white/70">البيت الأخضر</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm leading-relaxed text-white/70">
            حلول مدروسة للمساحات الخارجية في الرياض، تصميم وتنسيق يجمع بين الجمال
            والوظيفة ويناسب طبيعة المناخ السعودي.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a
              href={`tel:${site.phoneTel}`}
              className="flex items-center gap-3 text-white/80 transition-colors hover:text-lime-leaf"
            >
              <Phone className="h-4 w-4" /> {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 text-white/80 transition-colors hover:text-lime-leaf"
            >
              <Mail className="h-4 w-4" /> {site.email}
            </a>
            <p className="flex items-center gap-3 text-white/80">
              <MapPin className="h-4 w-4" /> {site.address}
            </p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-5 flex items-center gap-2.5 text-lg font-bold">
            {diamond}
            خدماتنا
          </h3>
          <ul className="space-y-3 text-sm">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-white/70 transition-colors hover:text-lime-leaf"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="font-semibold text-lime-leaf hover:underline">
                جميع الخدمات
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="mb-5 flex items-center gap-2.5 text-lg font-bold">
            {diamond}
            روابط مهمة
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/gallery" className="text-white/70 hover:text-lime-leaf">أعمالنا</Link></li>
            <li><Link href="/about" className="text-white/70 hover:text-lime-leaf">من نحن</Link></li>
            <li><Link href="/why-us" className="text-white/70 hover:text-lime-leaf">لماذا البيت الأخضر</Link></li>
            <li><Link href="/process" className="text-white/70 hover:text-lime-leaf">آلية العمل</Link></li>
            <li><Link href="/faq" className="text-white/70 hover:text-lime-leaf">الأسئلة الشائعة</Link></li>
            <li><Link href="/blog" className="text-white/70 hover:text-lime-leaf">المدونة</Link></li>
            <li><Link href="/contact" className="text-white/70 hover:text-lime-leaf">تواصل معنا</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-5 flex items-center gap-2.5 text-lg font-bold">
            {diamond}
            مناطق خدمتنا في الرياض
          </h3>
          <div className="flex flex-wrap gap-2">
            {footerAreas.map((area) => (
              <span
                key={area}
                className="rounded-2xl border border-white/15 px-3 py-1.5 text-xs text-white/70"
              >
                {area}
              </span>
            ))}
          </div>
          <a
            href={whatsappLink(defaultWhatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-6"
          >
            تواصل عبر واتساب
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/60 md:flex-row">
          <p>
            © {year} البيت الأخضر — Green House · الرياض، المملكة العربية السعودية
          </p>
          <a
            href="https://hirekalam.vercel.app/web-design-saudi-arabia"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-2xl border border-gold-light/30 bg-gold-light/10 px-3.5 py-2 text-xs font-semibold text-gold-soft transition-all duration-300 hover:border-gold-light/60 hover:bg-gold-light/15 hover:shadow-gold"
          >
            <span className="h-1.5 w-1.5 rotate-45 rounded-[1px] bg-gold-gradient transition-transform duration-300 group-hover:rotate-[135deg]" />
            شركة تصميم مواقع الكترونية في السعودية
            <ExternalLink className="h-3.5 w-3.5 opacity-70 transition-opacity group-hover:opacity-100" />
          </a>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-lime-leaf">سياسة الخصوصية</Link>
            <Link href="/terms" className="hover:text-lime-leaf">الشروط والأحكام</Link>
            <Link href="/sitemap" className="hover:text-lime-leaf">خريطة الموقع</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
