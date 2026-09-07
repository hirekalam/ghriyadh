import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { blogPosts, blogCategories } from "@/lib/blog";
import BlogCard from "@/components/blog-card";
import CtaSection from "@/components/cta-section";
import PageHero from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "مدونة تنسيق حدائق بالرياض | البيت الأخضر",
  description:
    "مقالات ونصائح عملية حول تنسيق الحدائق في الرياض: الثيل الطبيعي والصناعي، الري الموفر للمياه، النباتات المناسبة للمناخ، الجلسات الخارجية والشلالات. اقرأ الآن.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={breadcrumbJsonLd([{ name: "المدونة", url: "/blog" }])} />

      <PageHero
        eyebrow="المدونة"
        title="مدونة البيت الأخضر"
        titleEn="Blog"
        description="أفكار ودلائل عملية لتنسيق المساحات الخارجية في الرياض، تساعدك على اتخاذ قرارات أفضل لحديقتك."
        crumbs={[{ label: "المدونة" }]}
      />

      <section className="section-pad">
        <div className="container-site">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow-ar inline-flex">مقال مختار</span>
              <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
                {blogPosts[0].title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                {blogPosts[0].excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted">
                <span className="rounded-2xl bg-tint px-3 py-1 font-semibold text-brand">
                  {blogPosts[0].category}
                </span>
                <span>{blogPosts[0].readTime}</span>
                <span>{new Date(blogPosts[0].date).toLocaleDateString("ar-SA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}</span>
              </div>
              <Link href={`/blog/${blogPosts[0].slug}`} className="btn-primary mt-8">
                اقرأ المقال كاملاً
              </Link>
            </div>
            <Link href={`/blog/${blogPosts[0].slug}`} className="group overflow-hidden shape-media">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].imageAlt}
                width={1200}
                height={750}
                className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-tint/40">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow-ar inline-flex">دلائل عملية</span>
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              مواضيع مهمة تساعدك قبل بدء مشروعك
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              اختر الموضوع الذي يهمك واقرأ الدليل العملي المرتبط به.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "الثيل الطبيعي أم الصناعي", h: "/services/natural-grass" },
              { t: "توفير مياه الري", h: "/services/automatic-irrigation" },
              { t: "نباتات مناسبة للمناخ", h: "/services/trees-palms-flowers" },
              { t: "أفكار الجلسات الخارجية", h: "/services/outdoor-seating" },
            ].map((item) => (
              <Link
                key={item.t}
                href={item.h}
                className="card-surface group p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-brand">
                  {item.t}
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  تعرف أكثر
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <div className="mb-10 flex flex-wrap gap-2.5">
            {blogCategories.map((cat) => {
              const count = blogPosts.filter((p) => p.category === cat).length;
              return (
                <span
                  key={cat}
                  className="rounded-2xl border border-forest/15 px-4 py-2 text-sm font-medium text-muted"
                >
                  {cat}
                  {count > 0 && <span className="ms-1 text-brand">({count})</span>}
                </span>
              );
            })}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
