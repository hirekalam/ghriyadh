import Link from "next/link";
import { services } from "@/lib/services";
import { blogPosts } from "@/lib/blog";
import PageHero from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "خريطة الموقع | البيت الأخضر",
  description:
    "خريطة موقع البيت الأخضر — Green House: روابط لجميع صفحات الموقع بما فيها الخدمات والمقالات وصفحات المعلومات في الرياض.",
  path: "/sitemap",
});

export default function SitemapPage() {
  const mainLinks = [
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

  const infoLinks = [
    { href: "/privacy", label: "سياسة الخصوصية" },
    { href: "/terms", label: "الشروط والأحكام" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "خريطة الموقع", url: "/sitemap" }])} />

      <PageHero
        eyebrow="خريطة الموقع"
        title="خريطة الموقع"
        titleEn="Sitemap"
        description="جميع صفحات موقع البيت الأخضر في مكان واحد ليسهل عليك الوصول إلى ما تبحث عنه."
        crumbs={[{ label: "خريطة الموقع" }]}
      />

      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div className="card-surface p-8">
            <h2 className="text-xl font-bold text-ink">الصفحات الرئيسية</h2>
            <ul className="mt-5 space-y-2.5">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted transition-colors hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted transition-colors hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-surface p-8">
            <h2 className="text-xl font-bold text-ink">خدمات تنسيق الحدائق</h2>
            <ul className="mt-5 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-muted transition-colors hover:text-brand"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-surface p-8 lg:col-span-2">
            <h2 className="text-xl font-bold text-ink">مقالات المدونة</h2>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-muted transition-colors hover:text-brand"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
