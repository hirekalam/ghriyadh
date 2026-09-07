import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Plus, User } from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { services, getService } from "@/lib/services";
import Breadcrumbs from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import CtaSection from "@/components/cta-section";
import BlogCard from "@/components/blog-card";
import { blogJsonLd, breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    article: {
      publishedTime: post.date,
      modifiedTime: post.date,
      tags: [post.category],
    },
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const relatedByService = post.relatedServices
    .flatMap((s) => blogPosts.filter((p) => p.relatedServices.includes(s)))
    .filter((p) => p.slug !== slug);
  const serviceRelatedPosts = [...new Map(relatedByService.map((p) => [p.slug, p])).values()].slice(0, 3);
  const relatedServices = post.relatedServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={blogJsonLd({ ...post, category: post.category })} />
      {post.faq.length > 0 && <JsonLd data={faqJsonLd(post.faq)} />}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "المدونة", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ])}
      />

      <article className="bg-sand">
        <div className="container-site max-w-4xl pt-32">
          <Breadcrumbs
            items={[
              { label: "المدونة", href: "/blog" },
              { label: post.category, href: "/blog" },
              { label: post.title },
            ]}
          />
          <header className="mt-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
              <span className="rounded-2xl bg-tint px-3 py-1 font-semibold text-brand">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("ar-SA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4" />
                فريق البيت الأخضر
              </span>
            </div>
            <h1 className="mt-5 text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">{post.excerpt}</p>
          </header>
        </div>

        <div className="container-site max-w-4xl pb-16">
          <div className="overflow-hidden shape-media">
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={1200}
              height={750}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>

        <div className="container-site max-w-4xl pb-20">
          <div className="space-y-10">
            {post.content.map((section, i) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-ink sm:text-3xl">
                  {i + 1}. {section.heading}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{section.body}</p>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-4xl border border-brand/15 bg-tint/60 p-7">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">الخلاصة</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{post.conclusion}</p>
          </section>

          {post.faq.length > 0 && (
            <section className="mt-14">
              <h2 className="text-2xl font-bold text-ink sm:text-3xl">
                الأسئلة الشائعة عن {post.category}
              </h2>
              <div className="mt-6 space-y-4">
                {post.faq.map((item) => (
                  <details
                    key={item.q}
                    className="card-surface group rounded-3xl p-6"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                      {item.q}
                      <span className="shrink-0 text-brand transition-transform group-open:rotate-45">
                        <Plus className="h-5 w-5" />
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-muted">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {relatedServices.length > 0 && (
            <aside className="card-surface mt-14 p-7">
              <h2 className="text-xl font-bold text-ink">خدمات مرتبطة بالموضوع</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2 rounded-2xl border border-brand/20 bg-tint/60 px-4 py-2 text-sm font-semibold text-brand transition-colors hover:bg-tint"
                  >
                    {s.title}
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </aside>
          )}

          <div className="mt-14 border-t border-forest/10 pt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 font-semibold text-brand hover:underline">
              <ArrowLeft className="h-4 w-4" />
              العودة إلى المدونة
            </Link>
          </div>
        </div>
      </article>

      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              {serviceRelatedPosts.length > 0
                ? "مقالات ذات صلة بموضوعك"
                : "مقالات ذات صلة"}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(serviceRelatedPosts.length > 0 ? serviceRelatedPosts : relatedPosts).map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
