import Link from "next/link";
import CtaSection from "@/components/cta-section";
import GalleryGrid from "@/components/gallery-grid";
import PageHero from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "أعمال تنسيق حدائق بالرياض | معرض البيت الأخضر",
  description:
    "معرض أعمال وأفكار تنسيق الحدائق في الرياض: تصاميم لحدائق الفلل، الجلسات الخارجية، الشلالات والنوافير، الثيل الطبيعي والصناعي، والبرجولات. شاهد أعمالنا الآن.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={breadcrumbJsonLd([{ name: "أعمالنا", url: "/gallery" }])} />

      <PageHero
        eyebrow="أعمالنا"
        title="معرض المساحات الخارجية"
        titleEn="Our Work"
        description="اتجاهات تصميم نعمل بها لتنسيق المساحات الخارجية في الرياض. للتفاصيل والدروس المستفادة من مشاريع محددة، تواصل معنا مباشرة."
        crumbs={[{ label: "أعمالنا" }]}
      />

      <section className="section-pad">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow-ar inline-flex">اتجاهات وأفكار</span>
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              أفكار تنسيق مساحات متنوعة تناسب الرياض
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              نستعرض هنا اتجاهات التصميم التي نعمل بها لتنسيق المساحات الخارجية
              في الرياض: حدائق الفلل، الجلسات الخارجية، الشلالات والنوافير،
              الثيل الطبيعي والصناعي، والبرجولات. كل فكرة هنا تظهر كيف نجمع بين
              الجمال والوظيفة مع مراعاة المناخ المحلي.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              سواء كانت مساحتك كبيرة أو صغيرة، تمنحك هذه الأفكار صورة عن
              الإمكانات المتاحة. للانتقال من الفكرة إلى التنفيذ على مساحتك
              الخاصة، تواصل معنا لنبدأ بالاستشارة والمعاينة.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <GalleryGrid />
          <p className="mt-10 text-center text-sm text-muted">
            هذه معرض لأفكار التصميم والاتجاهات التي نعمل بها، وليست بالضرورة
            مشاريع منفذة. لمشاهدة أمثلة على تنفيذنا الفعلي،{" "}
            <Link href="/contact" className="font-semibold text-brand hover:underline">
              تواصل معنا
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
