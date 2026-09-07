import { services } from "@/lib/services";
import { faqs } from "@/lib/faqs";
import { ServiceCard } from "@/components/service-card";
import CtaSection from "@/components/cta-section";
import PageHero from "@/components/page-hero";
import FaqAccordion from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "خدمات تنسيق حدائق بالرياض | شركة البيت الأخضر",
  description:
    "خدمات تنسيق الحدائق والمساحات الخارجية في الرياض: تصميم حدائق، تركيب ثيل طبيعي وصناعي، شلالات ونوافير، شبكات ري، جلسات خارجية، برجولات. اطلب استشارتك المجانية الآن.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "الخدمات", url: "/services" }])} />
      <JsonLd
        data={services.map((s) => serviceJsonLd(s))}
      />

      <PageHero
        eyebrow="خدماتنا"
        title="خدمات تنسيق الحدائق بالرياض"
        titleEn="Our Services"
        description="من التصميم إلى التنفيذ، نقدم مجموعة متكاملة من الخدمات لتنسيق المساحات الخارجية في الرياض. اختر الخدمة المناسبة لمساحتك أو اطلب استشارة متكاملة."
        crumbs={[{ label: "الخدمات" }]}
      />

      <section className="section-pad">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow-ar inline-flex">ماذا نقدم</span>
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              خطة متكاملة لمساحتك الخارجية
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              لا نكتفي بخدمة واحدة؛ ننظر إلى مساحتك الخارجية كمنظومة متكاملة
              تبدأ من التصميم وتنتهي بالصيانة. تنسيق الحدائق في الرياض يتطلب
              تكاملاً بين توزيع النباتات، وشبكات الري، والعناصر المائية،
              والجلسات، حتى تكون النتيجة متماسكة وتدوم طويلاً تحت أشعة الشمس
              الشديدة وارتفاع درجات الحرارة.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              لهذا نقدم لك جميع الخدمات تحت مسؤولية واحدة: نصمم أولاً بما يناسب
              نمط حياتك، ثم ننفذ بمراحل مرتبة مع متابعة مستمرة، ونسلّمك حديقة
              جاهزة للاستخدام مع توصيات واضحة للعناية بها.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "تصميم المخطط العام وتوزيع المساحات",
                "تجهيز التربة وتوريد وزراعة النباتات",
                "تركيب شبكات الري الأوتوماتيكية",
                "تنفيذ الثيل الطبيعي والصناعي",
                "بناء الجلسات والبرجولات والمظلات",
                "الشلالات والنوافير بأنظمة التدوير",
                "إنارة المساحات الخارجية",
                "برامج صيانة دورية وزيارات عند الطلب",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-forest/10 bg-white p-5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime/20 text-forest">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2.5" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-medium text-ink">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-tint/40">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow-ar inline-flex">اختر الأفضل</span>
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              كيف تختار الخدمة المناسبة لمساحتك؟
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              أربع خطوات بسيطة تساعدك على تحديد ما تحتاجه قبل التواصل معنا.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "حدد استخدامك للمساحة",
                desc: "هل هي لجلسات العائلة، أم لعب الأطفال، أم مظهر خارجي للواجهة؟ الاستخدام يحدد أولوياتك في التصميم.",
              },
              {
                num: "02",
                title: "ضع ميزانية واقعية",
                desc: "حدد نطاقاً تقريبياً تريده، وسنقدم لك خيارات تناسب كل ميزانية دون المساس بالجودة الأساسية.",
              },
              {
                num: "03",
                title: "اعتمد على المعاينة",
                desc: "لا قرار صحيحاً دون رؤية الموقع؛ المعاينة الميدانية تكشف التربة والشمس والتصريف قبل أي عرض.",
              },
              {
                num: "04",
                title: "وازن بين الفوري والمستقبلي",
                desc: "خطط للمراحل القادمة من التوسع أو الإضافة، فالتصميم الجيد يترك مساحة للنمو دون هدم أو إعادة.",
              },
            ].map((step) => (
              <div key={step.num} className="card-surface p-7">
                <span className="font-latin text-4xl font-bold text-forest/10">{step.num}</span>
                <h3 className="mt-3 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div key={service.slug} style={{ animationDelay: `${i * 50}ms` }} className="animate-fade-up">
                <ServiceCard service={service} trackClick />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-tint/40">
        <div className="container-site grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">أسئلة عن خدماتنا</h2>
            <p className="mt-3 text-muted">
              إجابات على أكثر الأسئلة شيوعاً حول خدمات تنسيق الحدائق في الرياض.
            </p>
          </div>
          <div className="lg:col-span-3">
            <FaqAccordion faqs={faqs.slice(0, 8)} />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
