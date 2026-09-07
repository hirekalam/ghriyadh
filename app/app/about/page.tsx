import Image from "next/image";
import Link from "next/link";
import { Compass, Eye, HeartHandshake, Leaf, Sun, Target } from "lucide-react";
import CtaSection from "@/components/cta-section";
import PageHero from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "من نحن | شركة تنسيق حدائق بالرياض",
  description:
    "تعرف على البيت الأخضر، شركة تنسيق حدائق في الرياض تقدم حلولاً متكاملة للمساحات الخارجية بجودة عالية ومراعاة كاملة للمناخ السعودي. استكشف رؤيتنا وأسلوبنا.",
  path: "/about",
});

const values = [
  {
    icon: Compass,
    title: "رؤيتنا",
    desc: "أن نكون الخيار الأول لتنسيق المساحات الخارجية في الرياض، من خلال جودة التصميم والتنفيذ التي تتحدث عن نفسها.",
  },
  {
    icon: Target,
    title: "فلسفتنا في التصميم",
    desc: "نبدأ من استخدامك اليومي للمساحة، ثم نبني حوله تصميماً يوازن بين الجمال والوظيفة ويراعي المناخ المحلي.",
  },
  {
    icon: HeartHandshake,
    title: "نهجنا مع العميل",
    desc: "نستمع أولاً، نفهم ثانياً، ثم ننفذ. قرارات واضحة وخطوات معلنة تجعلك شريكاً في كل مرحلة من المشروع.",
  },
  {
    icon: Sun,
    title: "وعي المناخ",
    desc: "نصمم بفهم عميق لظروف الرياض الحارة، في كفاءة الري واختيار النباتات ومتانة الخامات.",
  },
  {
    icon: Leaf,
    title: "الجودة في التنفيذ",
    desc: "نلتزم في التنفيذ بمعايير واضحة من تجهيز الأرض إلى اللمسات الأخيرة، ونتابع التفاصيل التي تصنع الفرق.",
  },
  {
    icon: Eye,
    title: "الاهتمام بالتفاصيل",
    desc: "الفارق بين حديقة عادية وحديقة مميزة يكمن في التفاصيل، وهي ما نخصص له اهتمامنا في كل مشروع.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={breadcrumbJsonLd([{ name: "من نحن", url: "/about" }])} />

      <PageHero
        eyebrow="من نحن"
        title="البيت الأخضر — Green House"
        titleEn="About Us"
        description="شركة تنسيق حدائق في الرياض، نعمل على تحويل المساحات الخارجية إلى أماكن تُعاش وتُستفاد منها كل يوم."
        crumbs={[{ label: "من نحن" }]}
      />

      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow-ar">قصتنا</span>
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              بدأنا من سؤال بسيط: لماذا تُترك المساحات الخارجية دون استثمار؟
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              في مدينة تشتهر بفيلاتها الحديثة ومساحاتها الخارجية الواسعة، لاحظنا أن
              كثيراً من الحدائق لا تعكس قيمة المنازل التي تحيط بها. من هنا جاءت فكرة
              البيت الأخضر: تقديم تنسيق حدائق راقٍ يجمع بين التصميم العصري والوظيفة
              العملية والوعي الكامل بالمناخ السعودي.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              نعمل اليوم على تغطية احتياجات أصحاب الفلل والمنازل في مختلف أحياء
              الرياض، من التصميم الأولي حتى التنفيذ المتكامل، بمنهجية واضحة تجعل كل
              مشروع تجربة مريحة وواضحة.
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden shape-media">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
                alt="مساحة خارجية منسقة بعناية في فيلا حديثة"
                width={1400}
                height={1000}
                className="aspect-[7/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-3xl border border-forest/10 bg-white p-6 shadow-lift sm:block">
              <p className="text-xl font-bold text-brand">الرياض</p>
              <p className="font-latin mt-0.5 text-xs uppercase tracking-widest text-muted">
                Riyadh · Saudi Arabia
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-tint/40">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow-ar inline-flex">مبادئنا</span>
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              قيم نلتزم بها في كل مشروع
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="card-surface group p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="mb-5 inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="text-xl font-bold text-ink">{value.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden shape-media">
              <Image
                src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=1400&q=80"
                alt="جلسة خارجية عصرية بمساحة خضراء"
                width={1400}
                height={1000}
                className="aspect-[7/5] w-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow-ar">أسلوبنا</span>
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              حديقتك ليست مجرد نباتات وخامات
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              ننظر إلى المساحة الخارجية كامتداد حقيقي لبيت العائلة: مكان للقاء
              الأهل، لاستقبال الضيوف، ولمساحات يلعب فيها الأطفال ويرتاح فيها
              الكبار. كل قرار في التصميم نبنيه على هذا الأساس، لنقدم لك حديقة تخدم
              نمط حياتك فعلياً.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "تصميم يبدأ من احتياجك اليومي",
                "تنفيذ بمراحل واضحة ومتابعة مستمرة",
                "خيارات نباتات وخامات تناسب المناخ",
                "حلول ري فعّالة وتوفير للمياه",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink">
                  <span className="h-2 w-2 rounded-full bg-lime" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/process" className="btn-primary mt-8">
              تعرف على آلية عملنا
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-tint/40">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow-ar inline-flex">ماذا نقدم</span>
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              خدمات تغطي كل ما تحتاجه مساحتك الخارجية
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              من أول رسمة في التصميم حتى آخر لمسة في التنفيذ، نقدم حلولاً متكاملة
              لتنسيق الحدائق في الرياض. نجمع بين عناصر الخضرة والماء والظل
              والإنارة ضمن رؤية واحدة متماسكة، بدلاً من التعامل مع أجزاء
              متفرقة لا تنسجم مع بعضها.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "التصميم والتخطيط",
                desc: "مخطط شامل يوزع المساحة بين الخضرة والجلسات والممرات بما يناسب استخدامك اليومي.",
              },
              {
                title: "الزراعة والثيل",
                desc: "اختيار نباتات مناسبة للمناخ وتنفيذ المسطحات الطبيعية أو الصناعية بعناية.",
              },
              {
                title: "الري والعناصر المائية",
                desc: "شبكات ري موفرة للمياه، وشلالات ونوافير بأنظمة تدوير عملية.",
              },
              {
                title: "الجلسات والظل",
                desc: "جلسات خارجية وبرجولات وإنارة تصنع أجواءً مريحة نهاراً ومساءً.",
              },
            ].map((item) => (
              <div key={item.title} className="card-surface p-7">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-primary">
              استكشف خدماتنا بالتفصيل
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden shape-media">
              <Image
                src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=1400&q=80"
                alt="جلسة خارجية عصرية بمساحة خضراء"
                width={1400}
                height={1000}
                className="aspect-[7/5] w-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow-ar">التزامنا</span>
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              ماذا تتوقع من العمل معنا؟
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              نعمل بمنهجية تجعل تجربتك واضحة ومريحة، وهذه أبرز ما نلتزم به معك في
              كل مشروع.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                {
                  t: "وضوح قبل التنفيذ",
                  d: "تتفق معنا على التصميم والتكلفة قبل أي عمل، فلا مفاجآت في الفواتير.",
                },
                {
                  t: "متابعة مستمرة",
                  d: "نبقى على تواصل معك خلال كل مرحلة، وتُطلع على تقدم العمل أولاً بأول.",
                },
                {
                  t: "جودة في الخامات",
                  d: "نختار خامات ونباتات تناسب مناخ الرياض وتتحمل عوامل الجو لفترة طويلة.",
                },
                {
                  t: "تسليم منظم",
                  d: "نستلمك حديقة جاهزة للاستخدام مع إرشادات بسيطة للعناية بها.",
                },
              ].map((item) => (
                <li key={item.t} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-lime" />
                  <div>
                    <p className="font-bold text-ink">{item.t}</p>
                    <p className="text-sm leading-relaxed text-muted">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
