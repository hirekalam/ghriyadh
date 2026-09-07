import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { faqs, faqCategories } from "@/lib/faqs";
import { site, whatsappLink, defaultWhatsappMsg } from "@/lib/site";
import FaqAccordion from "@/components/faq-accordion";
import PageHero from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "أسئلة شائعة عن تنسيق حدائق بالرياض",
  description:
    "إجابات عن أكثر الأسئلة شيوعاً حول تنسيق الحدائق في الرياض: التكلفة، الثيل الطبيعي والصناعي، شبكات الري، الشلالات، الجلسات الخارجية والصيانة. اسألنا عبر واتساب.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={breadcrumbJsonLd([{ name: "الأسئلة الشائعة", url: "/faq" }])} />
      <JsonLd data={faqJsonLd(faqs)} />

      <PageHero
        eyebrow="الأسئلة الشائعة"
        title="الأسئلة الشائعة"
        titleEn="FAQ"
        description="جمعنا لك أكثر الأسئلة شيوعاً حول تنسيق الحدائق والمساحات الخارجية في الرياض، مع إجابات مباشرة."
        crumbs={[{ label: "الأسئلة الشائعة" }]}
      />

      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-ink">تصفح حسب الموضوع</h2>
            <p className="mt-3 text-muted">
              اختر الموضوع الذي يهمك للوصول إلى الإجابات المناسبة.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 lg:flex-col">
              {faqCategories.map((cat) => (
                <a
                  key={cat}
                  href={`#${cat}`}
                  className="rounded-2xl border border-forest/15 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand/40 hover:bg-tint hover:text-brand lg:inline-block"
                >
                  {cat}
                </a>
              ))}
            </div>
            <div className="card-surface mt-8 p-6">
              <p className="font-bold text-ink">لم تجد سؤالك؟</p>
              <p className="mt-2 text-sm text-muted">
                تواصل معنا مباشرة وسنجيبك شخصياً على كل استفسار.
              </p>
              <div className="mt-5 space-y-3">
                <a href={`tel:${site.phoneTel}`} className="btn-primary w-full justify-center">
                  <Phone className="h-5 w-5" />
                  {site.phoneDisplay}
                </a>
                <a
                  href={whatsappLink(defaultWhatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                >
                  <MessageCircle className="h-5 w-5" />
                  اسأل عبر واتساب
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-12 lg:col-span-3">
            {faqCategories.map((cat) => {
              const catFaqs = faqs.filter((f) => f.category === cat);
              if (catFaqs.length === 0) return null;
              return (
                <div key={cat} id={cat} className="scroll-mt-28">
                  <h2 className="mb-5 flex items-center gap-3 text-xl font-bold text-ink">
                    <span className="h-5 w-1 rounded-full bg-brand" />
                    {cat}
                  </h2>
                  <FaqAccordion faqs={catFaqs} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-tint/40">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              جاهز لبدء مشروعك؟
            </h2>
            <p className="mt-4 text-lg text-muted">
              ابدأ باستشارة بسيطة وتواصل معنا الآن.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                اطلب استشارتك الآن
              </Link>
              <Link href="/services" className="btn-secondary">
                استكشف خدماتنا
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
