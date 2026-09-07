import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  Droplets,
  Info,
  Lightbulb,
  MapPin,
  Package,
  Scale,
} from "lucide-react";
import { services, getService } from "@/lib/services";
import { getRelatedPosts } from "@/lib/blog";
import { site, whatsappLink, defaultWhatsappMsg } from "@/lib/site";
import CtaSection from "@/components/cta-section";
import RelatedServices from "@/components/related-services";
import FaqAccordion from "@/components/faq-accordion";
import PageHero from "@/components/page-hero";
import BlogCard from "@/components/blog-card";
import { SectionHeading } from "@/components/ui";
import { JsonLd } from "@/components/json-ld";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
  localBusinessJsonLd,
} from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.seoTitle,
    description: service.metaDescription,
    keywords: service.keywords.join("، "),
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedPosts = getRelatedPosts(service.slug, 3);

  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "الخدمات", url: "/services" },
          { name: service.title, url: `/services/${service.slug}` },
        ])}
      />
      <JsonLd data={faqJsonLd(service.faqs)} />

      <PageHero
        eyebrow="خدمة"
        title={service.title}
        titleEn={service.titleEn}
        description={service.short}
        crumbs={[
          { label: "الخدمات", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* AEO: Quick answer box */}
      <section className="border-b border-forest/10 bg-sand">
        <div className="container-site py-10">
          <div className="mx-auto flex max-w-4xl items-start gap-4 rounded-3xl border border-brand/15 bg-white p-6 shadow-card sm:p-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tint text-brand">
              <Info className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <div>
              <p className="text-sm font-bold text-brand">ما هي {service.title}؟</p>
              <p className="mt-2 text-lg leading-relaxed text-ink">{service.definition}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key facts table */}
      <section className="section-pad">
        <div className="container-site grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="start"
              eyebrow="نظرة سريعة"
              title={`حقائق أساسية عن ${service.title}`}
            />
            <div className="mt-7 overflow-hidden rounded-2xl border border-forest/10">
              <table className="w-full border-collapse bg-white text-sm">
                <tbody>
                  {service.quickFacts.map((fact, i) => (
                    <tr
                      key={fact.label}
                      className={i % 2 === 0 ? "bg-white" : "bg-tint/40"}
                    >
                      <th
                        scope="row"
                        className="w-2/5 border-b border-forest/10 px-5 py-3.5 text-start font-bold text-ink"
                      >
                        {fact.label}
                      </th>
                      <td className="border-b border-forest/10 px-5 py-3.5 text-muted">
                        {fact.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">{service.intro}</p>
          </div>
          <div className="relative">
            <div className="overflow-hidden shape-media">
              <Image
                src={service.image}
                alt={service.imageAlt}
                width={1400}
                height={1000}
                className="aspect-[7/5] w-full object-cover"
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappLink(
                  `السلام عليكم، أرغب بالاستفسار عن خدمة ${service.title}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                اطلب عرضاً لمشروعك
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-secondary">
                تحدث معنا مباشرة
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-tint/40">
        <div className="container-site">
          <SectionHeading
            eyebrow="الفوائد"
            title={`لماذا تختار ${service.title}؟`}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit) => (
              <div
                key={benefit}
                className="card-surface flex items-start gap-4 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tint text-brand">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <p className="pt-1.5 font-medium text-ink">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      {service.comparison && (
        <section className="section-pad">
          <div className="container-site">
            <SectionHeading
              eyebrow="مقارنة"
              title={service.comparison.title}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {service.comparison.items.map((item) => (
                <div key={item.name} className="card-surface p-7">
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-tint text-brand">
                    <Scale className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="text-lg font-bold text-ink">{item.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use cases + climate */}
      <section className={`section-pad ${service.comparison ? "" : ""}`}>
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div className="card-surface p-8">
            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-tint text-brand">
              <MapPin className="h-6 w-6" strokeWidth={1.7} />
            </span>
            <h2 className="text-2xl font-bold text-ink">أين تناسب هذه الخدمة؟</h2>
            <ul className="mt-5 space-y-3.5">
              {service.useCases.map((use) => (
                <li key={use} className="flex items-start gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                  {use}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-surface p-8">
            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-tint text-brand">
              <Droplets className="h-6 w-6" strokeWidth={1.7} />
            </span>
            <h2 className="text-2xl font-bold text-ink">اعتبارات مناخ الرياض</h2>
            <ul className="mt-5 space-y-3.5">
              {service.climate.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process / How-to */}
      <section className="section-pad bg-forest text-white">
        <div className="container-site">
          <SectionHeading light eyebrow="خطوات التنفيذ" title="كيف ننفذ هذه الخدمة؟" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step, i) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <span className="font-latin text-4xl font-bold text-lime/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-lg font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      {service.materials.length > 0 && (
        <section className="section-pad">
          <div className="container-site grid items-start gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionHeading
                align="start"
                eyebrow="الخامات"
                title="خامات نعمل بها"
                description="نختار الخامات بعناية لضمان نتيجة تدوم وتتحمل ظروف المناخ."
              />
            </div>
            <div className="lg:col-span-3">
              <div className="grid gap-4 sm:grid-cols-2">
                {service.materials.map((mat) => (
                  <div key={mat} className="card-surface flex items-center gap-4 p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-tint text-brand">
                      <Package className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span className="font-medium text-ink">{mat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mistakes + Tips */}
      <section className="section-pad bg-sand">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="start"
              eyebrow="احذر"
              title="أخطاء شائعة يجب تجنبها"
              description="تجنب هذه الأخطاء يوفر عليك الوقت والتكلفة ويطيل عمر حديقتك."
            />
            <ul className="mt-7 space-y-3.5">
              {service.mistakes.map((m) => (
                <li key={m} className="flex items-start gap-3 rounded-2xl border border-forest/10 bg-white p-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <AlertTriangle className="h-4 w-4" />
                  </span>
                  <span className="leading-relaxed text-muted">{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              align="start"
              eyebrow="نصائح"
              title="أفضل الممارسات"
              description="نصائح عملية تساعدك على تحقيق أفضل نتيجة والاستمتاع بمساحتك."
            />
            <ul className="mt-7 space-y-3.5">
              {service.tips.map((t) => (
                <li key={t} className="flex items-start gap-3 rounded-2xl border border-brand/15 bg-white p-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tint text-brand">
                    <Lightbulb className="h-4 w-4" />
                  </span>
                  <span className="leading-relaxed text-muted">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading eyebrow="معرض" title="صور توضيحية للخدمة" />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {service.gallery.map((src, i) => (
              <div key={src} className="group overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt={`${service.title} في الرياض — ${service.keywords[0]}`}
                  width={1000}
                  height={750}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-tint/40">
        <div className="container-site grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              align="start"
              eyebrow="الأسئلة الشائعة"
              title={`أسئلة عن ${service.title}`}
              description="إجابات مباشرة عن أكثر ما يسأل عنه العملاء قبل البدء بهذه الخدمة."
            />
            <div className="mt-7 flex items-center gap-4 rounded-2xl border border-forest/10 bg-white p-5">
              <BadgeCheck className="h-6 w-6 shrink-0 text-brand" />
              <p className="text-sm text-muted">
                لديك سؤال آخر؟{" "}
                <a
                  href={whatsappLink(`السلام عليكم، لدي سؤال عن خدمة ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand hover:underline"
                >
                  راسلنا عبر واتساب
                </a>
              </p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <FaqAccordion faqs={service.faqs.map((f) => ({ ...f, category: "الخدمة" }))} />
          </div>
        </div>
      </section>

      {/* Related blog posts */}
      {relatedPosts.length > 0 && (
        <section className="section-pad bg-white">
          <div className="container-site">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-ink sm:text-3xl">مقالات ذات صلة</h2>
                <p className="mt-2 text-muted">
                  اقرأ المزيد عن {service.title} في مدونة البيت الأخضر.
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-semibold text-brand hover:underline"
              >
                جميع المقالات
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Conclusion + CTA */}
      <section className="border-t border-forest/10 bg-sand">
        <div className="container-site py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              خلاصة: {service.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {service.title} في الرياض خطوة عملية نحو مساحة خارجية أجمل وأكثر
              وظيفية، بشرط التخطيط الصحيح واختيار الخامات المناسبة للمناخ. مع
              البيت الأخضر تحصل على تصميم مدروس وتنفيذ منظم يبدأ من فهم
              احتياجك وينتهي بتسليم مساحة جاهزة للاستخدام.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={whatsappLink(
                  `السلام عليكم، أرغب بالاستفسار عن ${service.title} في الرياض.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                اطلب استشارة مجانية
                <ArrowLeft className="h-5 w-5" />
              </a>
              <Link href="/contact" className="btn-primary">
                احصل على تصور لمساحتك
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices current={service.slug} />

      <CtaSection
        title={`ابدأ مشروع ${service.title} معنا`}
        description="تواصل معنا اليوم للحصول على استشارة وتصور واضح لمساحتك، مع عرض تنفيذ مفصّل يناسب احتياجك."
      />
    </>
  );
}
