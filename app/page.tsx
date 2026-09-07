import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Droplets,
  Leaf,
  Palette,
  Ruler,
  Sun,
  Trees,
  Wind,
} from "lucide-react";
import { services } from "@/lib/services";
import { faqs } from "@/lib/faqs";
import { blogPosts } from "@/lib/blog";
import { galleryItems } from "@/lib/gallery";
import { neighborhoods } from "@/lib/neighborhoods";
import { ServiceCard } from "@/components/service-card";
import BlogCard from "@/components/blog-card";
import FaqAccordion from "@/components/faq-accordion";
import ProcessTimeline from "@/components/process-timeline";
import CtaSection from "@/components/cta-section";
import LocalAreas from "@/components/local-areas";
import GalleryGrid from "@/components/gallery-grid";
import MapSection from "@/components/map-section";
import HeroSlider from "@/components/hero-slider";
import { SectionHeading, Reveal } from "@/components/ui";
import { JsonLd } from "@/components/json-ld";
import { localBusinessJsonLd, faqJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import LeafPattern from "@/components/leaf-pattern";

export const metadata = buildMetadata({
  title: "تنسيق حدائق بالرياض | البيت الأخضر Green House",
  description:
    "شركة تنسيق حدائق بالرياض: تصميم وتنفيذ حدائق فلل وجلسات خارجية وثيل صناعي وطبيعي وشلالات وشبكات ري. اطلب استشارتك المجانية واحصل على تصور لمساحتك.",
  path: "/",
});

const visionPoints = [
  {
    icon: Trees,
    title: "جمال المنزل",
    desc: "مساحة خارجية منسقة ترفع من جمال منزلك وتجعله مكتملاً من أول نظرة.",
  },
  {
    icon: Wind,
    title: "الراحة",
    desc: "جلسات وظلال ومساحات خضراء تدعوك للاسترخاء بعد يوم طويل.",
  },
  {
    icon: Ruler,
    title: "الاستخدام اليومي",
    desc: "تصميم يبدأ من طريقة استخدامك فعلياً للمساحة، لا من شكلها فقط.",
  },
  {
    icon: Palette,
    title: "القيمة البصرية",
    desc: "توازن بين الخضرة والخامات والإضاءة يمنح الحديقة حضوراً دائماً.",
  },
];

const climatePoints = [
  {
    icon: Sun,
    title: "الحرارة وأشعة الشمس",
    desc: "نخطط للظلال واختيار النباتات المناسبة لدرجات الحرارة المرتفعة.",
  },
  {
    icon: Droplets,
    title: "كفاءة المياه",
    desc: "أنظمة ري ونباتات تقلل الاستهلاك دون التأثير على جمال الحديقة.",
  },
  {
    icon: Trees,
    title: "اختيار النباتات",
    desc: "نعتمد نباتات متأقلمة مع المناخ المحلي تزدهر بأقل عناية.",
  },
  {
    icon: Ruler,
    title: "متانة الخامات",
    desc: "مواد وأحجار تقاوم الشمس والحرارة وتبقى بحالة جيدة لسنوات.",
  },
];

const whyPoints = [
  "تصميم متوافق مع طبيعة الرياض",
  "حلول عملية للمساحات الخارجية",
  "اهتمام بالتفاصيل في كل مرحلة",
  "حلول ري أكثر كفاءة",
  "تنسيق يجمع الجمال والوظيفة",
  "خيارات متعددة للنباتات والخامات",
  "تنفيذ منظم وواضح الخطوات",
];

export default function HomePage() {
  const homeFaqs = faqs.slice(0, 6);

  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={faqJsonLd(homeFaqs)} />

      {/* Section 01 — Hero Slider */}
      <HeroSlider />

      {/* Section 02 — Introduction */}
      <section id="introduction" className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="من نحن"
              title="مساحة خارجية تعكس ذوقك وطبيعة حياتك"
              description="البيت الأخضر شركة تنسيق حدائق في الرياض، نعمل على تحويل المساحات الخارجية إلى أماكن تُعاش لا تُرى فقط. من التصميم إلى التنفيذ، نراعي تفاصيل مناخك واحتياجك اليومي لنقدم نتيجة متكاملة."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { ar: "تصميم حدائق", en: "Landscape Design" },
              { ar: "مساحات خارجية", en: "Outdoor Spaces" },
              { ar: "حدائق فلل", en: "Villa Gardens" },
              { ar: "عناصر مائية", en: "Water Features" },
              { ar: "شبكات ري", en: "Irrigation" },
              { ar: "مساحات خضراء", en: "Green Spaces" },
              { ar: "جلسات خارجية", en: "Outdoor Living" },
              { ar: "برجولات وظلال", en: "Shade Structures" },
            ].map((item) => (
              <div
                key={item.ar}
                className="rounded-2xl border border-forest/10 bg-white p-6 text-center shadow-subtle transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-card"
              >
                <p className="text-lg font-bold text-ink">{item.ar}</p>
                <p className="font-latin mt-1 text-xs uppercase tracking-widest text-muted/70">
                  {item.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Definition / AEO quick answer */}
      <section className="border-y border-forest/10 bg-sand">
        <div className="container-site py-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow-ar">تعريف سريع</span>
              <h2 className="text-2xl font-bold leading-snug text-ink sm:text-3xl">
                ما هو تنسيق الحدائق؟
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                تنسيق الحدائق هو تصميم وتنظيم المساحات الخارجية لتجمع بين الجمال
                والوظيفة، ويشمل توزيع النباتات والمسطحات والممرات والجلسات والعناصر
                المائية بما يناسب طبيعة الموقع. في الرياض، يراعي التنسيق الناجح
                المناخ الحار وكفاءة المياه واختيار نباتات متأقلمة مع البيئة.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/services" className="btn-secondary">
                  استكشف خدمات التنسيق
                  <ArrowLeft className="h-5 w-5" />
                </Link>
                <Link href="/process" className="link-underline inline-flex items-center gap-2 font-semibold text-brand">
                  تعرف على آلية العمل
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { t: "حدائق فلل", href: "/services/garden-landscaping-riyadh" },
                { t: "ثيل صناعي", href: "/services/artificial-grass" },
                { t: "شبكات ري", href: "/services/automatic-irrigation" },
                { t: "جلسات خارجية", href: "/services/outdoor-seating" },
              ].map((item) => (
                <Link
                  key={item.t}
                  href={item.href}
                  className="group rounded-2xl border border-forest/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-card"
                >
                  <p className="font-bold text-ink transition-colors group-hover:text-brand">
                    {item.t}
                  </p>
                  <span className="font-latin mt-1 block text-xs uppercase tracking-widest text-muted/60">
                    Services
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 — Core Services */}
      <section className="section-pad bg-tint/40">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="خدماتنا"
              title="خدمات متكاملة لمساحتك الخارجية"
              description="من التصميم الأولي إلى اللمسات الأخيرة، نغطي كل ما تحتاجه حديقتك تحت سقف واحد."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <ServiceCard service={service} trackClick />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-secondary">
              استكشف جميع خدماتنا
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 04 — Landscape Vision */}
      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="overflow-hidden shape-media">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
                  alt="حديقة منسقة بمسطح أخضر وممرات أنيقة"
                  width={1400}
                  height={1000}
                  className="aspect-[7/5] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 hidden rounded-3xl border border-forest/10 bg-white p-6 shadow-lift sm:block">
                <Leaf className="h-8 w-8 text-brand" strokeWidth={1.6} />
                <p className="mt-2 max-w-[180px] text-sm font-semibold text-ink">
                  تصاميم تجمع بين الجمال والوظيفة
                </p>
              </div>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="start"
              eyebrow="رؤيتنا للمساحات"
              title="لماذا المساحة الخارجية تستحق الاهتمام؟"
              description="الحديقة ليست إضافة لمنزلك، بل جزء أساسي من حياة أسرتك اليومية. مساحة منسقة بعناية تعيد تشكيل علاقتك بالمنزل."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {visionPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tint text-brand">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3 className="font-bold text-ink">{point.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{point.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 06 — Riyadh Climate Expertise */}
      <section className="section-pad bg-sand">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="خبرة بالمناخ المحلي"
              title="تصميم يفهم طبيعة الرياض"
              description="نصمم بوعي كامل لظروف المناخ المحلي، لنقدم حديقة تبقى جميلة وقليلة الصيانة طوال العام."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {climatePoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <Reveal key={point.title} delay={i * 70}>
                  <div className="h-full rounded-3xl border border-forest/10 bg-white p-7 shadow-card">
                    <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-tint text-brand">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <h3 className="text-lg font-bold text-ink">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{point.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 06b — Mistakes to avoid */}
      <section className="section-pad bg-tint/40">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="نصيحة قبل البدء"
              title="أخطاء شائعة في تنسيق الحدائق تجنّبها"
              description="تنجم أغلب مشاكل الحدائق في الرياض عن أخطاء تخطيط يمكن تفاديها منذ البداية."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "زراعة عشوائية قبل التخطيط",
                d: "توزيع النباتات دون مخطط يترك فراغات وازدحاماً، ويصعب معه ضبط الري لاحقاً. التخطيط المسبق يوفر عليك إعادة العمل.",
              },
              {
                t: "إهمال شبكة الري",
                d: "الري اليدوي في مساحات واسعة مضيعة للوقت والمياه. شبكة ري موزعة بشكل صحيح أساس أي حديقة ناجحة في الرياض.",
              },
              {
                t: "اختيار نباتات غير مناسبة",
                d: "نباتات لا تتحمل الحرارة تذبل وتتكرر تكلفة استبدالها. النباتات المتأقلمة مع المناخ تدوم بأقل عناية.",
              },
              {
                t: "نصب الجلسات تحت الشمس المباشرة",
                d: "جلسة بلا ظل لا تُستخدم نهاراً. ضع الجلسات في مواقع ظليلة أو خطط لبرجولة ومظلات.",
              },
              {
                t: "التغاضي عن الإضاءة",
                d: "إضاءة المساء تطيل عمر استخدام الحديقة وتبرز جمالها. تجاهلها يحرمك من أمسيات ممتعة في الجلسة.",
              },
              {
                t: "عدم ترك مساحة للنمو",
                d: "زراعة كثيفة جداً معاً تؤدي لتنافس الجذور وذبول متبادل. التباعد الصحيح يضمن نمواً صحياً على المدى الطويل.",
              },
            ].map((item) => (
              <Reveal key={item.t}>
                <div className="h-full rounded-3xl border border-forest/10 bg-white p-7 shadow-card">
                  <h3 className="text-lg font-bold text-ink">{item.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/process" className="btn-secondary">
              ابدأ بالتخطيط الصحيح
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 07 — Process */}
      <section className="section-pad bg-tint/40">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="آلية العمل"
              title="خطوات واضحة من الفكرة إلى التسليم"
              description="منهجية عمل منظمة تجعل المشروع واضحاً لك في كل مرحلة."
            />
          </Reveal>
          <div className="mt-12">
            <ProcessTimeline />
          </div>
          <div className="mt-10 text-center">
            <Link href="/process" className="btn-secondary">
              تعرف على آلية العمل بالتفصيل
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 08 — Project Gallery */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="أعمالنا"
              title="معرض المساحات الخارجية"
              description="نظرة على اتجاهات التصميم التي نعمل بها. لمعرفة تفاصيل مشاريع محددة، تحدث معنا مباشرة."
            />
          </Reveal>
          <div className="mt-12">
            <GalleryGrid limit={6} />
          </div>
          <div className="mt-10 text-center">
            <Link href="/gallery" className="btn-secondary">
              شاهد المزيد من الأعمال
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 09 — Why Green House */}
      <section className="relative overflow-hidden bg-forest text-white">
        <div className="absolute inset-0 text-white opacity-[0.05]">
          <LeafPattern />
        </div>
        <div className="bg-gold-glow absolute inset-0" />
        <div className="container-site section-pad relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="start"
              light
              eyebrow="لماذا البيت الأخضر"
              title="معايير عمل نتشرف بها"
              description="نلتزم في كل مشروع بأسلوب عمل واضح يضعك في قلب كل قرار."
            />
            <ul className="mt-8 space-y-4">
              {whyPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime/20 text-lime">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2.5" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-lg text-white/90">{point}</span>
                </li>
              ))}
            </ul>
            <Link href="/why-us" className="btn-light mt-9">
              تعرف علينا أكثر
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>
          <div className="relative">
            <div className="overflow-hidden shape-media">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80"
                alt="مساحة خارجية عصرية بإضاءة دافئة في المساء"
                width={1400}
                height={1000}
                className="aspect-[7/5] w-full object-cover"
              />
            </div>
            <div className="absolute -top-5 -right-5 hidden rounded-2xl bg-white px-5 py-4 shadow-lift lg:block">
              <p className="text-2xl font-bold text-brand">Riyadh</p>
              <p className="font-latin text-xs uppercase tracking-widest text-muted">Saudi Arabia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10 — Service Areas */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="مناطق الخدمة"
              title="نصل إليك في كل أحياء الرياض"
              description="من شمال المدينة إلى جنوبها، نقدم خدماتنا في مختلف أحياء الرياض."
            />
          </Reveal>
          <div className="mt-12">
            <LocalAreas />
          </div>
        </div>
      </section>

      {/* Section 11 — FAQ */}
      <section className="section-pad bg-tint/40">
        <div className="container-site grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              align="start"
              eyebrow="الأسئلة الشائعة"
              title="إجابات واضحة لأسئلتك"
              description="جمعنا لك أكثر الأسئلة شيوعاً حول تنسيق الحدائق في الرياض."
            />
            <Link href="/faq" className="btn-secondary mt-7">
              جميع الأسئلة الشائعة
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>
          <div className="lg:col-span-3">
            <FaqAccordion faqs={homeFaqs} />
          </div>
        </div>
      </section>

      {/* Section 12 — Final CTA */}
      <CtaSection />

      {/* Blog preview */}
      <section className="section-pad bg-sand">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="المدونة"
              title="أفكار ودلائل لتنسيق المساحات"
              description="مقالات عملية تساعدك على اتخاذ قرارات أفضل لحديقتك."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/blog" className="btn-secondary">
              تصفح جميع المقالات
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Map section */}
      <MapSection />
    </>
  );
}
