import {
  Droplets,
  LayoutGrid,
  MapPin,
  MessageCircle,
  PenTool,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import CtaSection from "@/components/cta-section";
import PageHero from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "لماذا البيت الأخضر لتنسيق حدائق بالرياض؟",
  description:
    "لماذا تختار البيت الأخضر لتنسيق حديقتك في الرياض؟ حلول مخصصة للمساحة، تصميم يجمع الجمال والوظيفة، اهتمام بالتفاصيل، وحلول ري فعّالة توفر المياه.",
  path: "/why-us",
});

const differentiators = [
  {
    icon: LayoutGrid,
    title: "حلول مخصصة للمساحة",
    desc: "لا نستخدم قوالب جاهزة. كل حديقة ندرسها على حدة، فتعرف على أبعادها واتجاه شمسها وطبيعة استخدامك لها قبل أن نرسم أي تصور.",
  },
  {
    icon: Sparkles,
    title: "تصميم يجمع الجمال والوظيفة",
    desc: "نؤمن أن الحديقة الجميلة هي التي تُستخدم. نصمم مساحات تتقن الجمال ولا تضحي براحة الاستخدام اليومي.",
  },
  {
    icon: PenTool,
    title: "اهتمام بالتفاصيل",
    desc: "من تقاطع المسارات إلى اختيار الخامات، نلتفت لكل التفاصيل الصغيرة التي تصنع الفارق بين نتيجة متوسطة ونتيجة مميزة.",
  },
  {
    icon: MapPin,
    title: "مراعاة المناخ المحلي",
    desc: "نصمم بفهم عميق لظروف الرياض: الحرارة، وأشعة الشمس، وندرة المياه. نختار ما يناسب البيئة لا ما يبدو جميلاً في الصور فقط.",
  },
  {
    icon: Droplets,
    title: "حلول ري فعّالة",
    desc: "نصمم أنظمة ري توزع المياه بذكاء وبأوقات مناسبة، فتنمو حديقتك وتنخفض فاتورة الاستهلاك معاً.",
  },
  {
    icon: Users,
    title: "خيارات مناسبة للفلل والمنازل",
    desc: "سواء كانت مساحتك فيلا واسعة أو منزلاً صغيراً، نقدم خيارات تناسب حجم المساحة وميزانيتها دون تكلفة زائدة.",
  },
  {
    icon: ShieldCheck,
    title: "خدمات متكاملة للمساحات الخارجية",
    desc: "من التصميم إلى التنفيذ إلى الصيانة، نغطي كل ما تحتاجه مساحتك الخارجية تحت مسؤولية واحدة وواضحة.",
  },
  {
    icon: MessageCircle,
    title: "تواصل مباشر وسهل",
    desc: "نبقى على تواصل مباشر معك في كل مرحلة، وتصل إلينا عبر الهاتف أو واتساب في أي وقت أثناء المشروع.",
  },
];

export default function WhyUsPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={breadcrumbJsonLd([{ name: "لماذا البيت الأخضر", url: "/why-us" }])} />

      <PageHero
        eyebrow="لماذا نحن"
        title="لماذا البيت الأخضر؟"
        titleEn="Why Green House"
        description="أسباب حقيقية تجعل العمل معنا تجربة مختلفة لتنسيق مساحتك الخارجية في الرياض."
        crumbs={[{ label: "لماذا البيت الأخضر" }]}
      />

      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-surface group p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="mb-5 inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow-ar inline-flex">الفارق واضح</span>
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              البيت الأخضر أم الطريقة الاعتيادية؟
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              كثير من الحدائق في الرياض تُنفذ دون تخطيط مسبق، فتظهر النتيجة غير
              متوازنة وتتطلب صيانة متكررة. إليك الفارق بين العمل بطريقة منظمة
              والعمل العشوائي.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-right">
              <thead>
                <tr className="border-b-2 border-forest/15">
                  <th className="p-4 font-bold text-ink">وجه المقارنة</th>
                  <th className="bg-tint p-4 font-bold text-brand">مع البيت الأخضر</th>
                  <th className="p-4 font-bold text-muted">الطريقة الاعتيادية</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {[
                  {
                    k: "بداية العمل",
                    a: "استشارة ومعاينة وتصميم قبل أي تنفيذ",
                    b: "بدء مباشر دون دراسة المساحة أو الاستخدام",
                  },
                  {
                    k: "توزيع المساحة",
                    a: "توازن بين الخضرة والجلسات والممرات والظل",
                    b: "اعتماد على الاجتهاد وقد يهمل توزيع الظل",
                  },
                  {
                    k: "كفاءة المياه",
                    a: "ري موزع حسب المناطق مع تقليل الفاقد",
                    b: "ري موحد قد يهدر المياه في أجواء الرياض",
                  },
                  {
                    k: "اختيار النباتات",
                    a: "أنواع متأقلمة مع مناخ الرياض الحار",
                    b: "أنواع عامة قد تذبل مع أول صيف",
                  },
                  {
                    k: "التنفيذ",
                    a: "مراحل مرتبة وجدول واضح ومتابعة مستمرة",
                    b: "تنفيذ متقطع يصعب معه ضبط الجودة",
                  },
                  {
                    k: "التسليم",
                    a: "مراجعة تفصيلية وإرشادات للعناية",
                    b: "تسليم دون متابعة أو إرشادات",
                  },
                ].map((row) => (
                  <tr key={row.k} className="border-b border-forest/10">
                    <td className="p-4 font-semibold text-ink">{row.k}</td>
                    <td className="bg-tint/60 p-4">{row.a}</td>
                    <td className="p-4">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-pad bg-tint/40">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow-ar inline-flex">تجنبها معنا</span>
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              أخطاء شائعة في تنسيق حدائق الرياض
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              نتجنب في تنفيذنا الأخطاء الأكثر شيوعاً التي تقع بها الحدائق، لأنها
              تكلف أصحابها أموالاً وجهوداً في الصيانة لاحقاً.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
            {[
              {
                t: "الإفراط في المسطحات",
                d: "مسطح أخضر ضخم يحتاج ري مستمر ويتعثر في صيف الرياض، بينما التوزيع المتوازن أوفر وأجمل.",
              },
              {
                t: "إهمال اتجاه الشمس",
                d: "زراعة أو جلوس في مسار الشمس المباشر يجعلهما غير قابلين للاستخدام في النهار.",
              },
              {
                t: "نباتات غير ملائمة",
                d: "زراعة أنواع لا تتحمل الحرارة يعني ذبولاً متكرراً وزيادة في الاستبدال والتكلفة.",
              },
              {
                t: "ري بدون خطة",
                d: "ري يدوي غير منتظم أو شبكة عشوائية تترك بعض المناطق عطشى وأخرى غارقة.",
              },
              {
                t: "تجاهل تجهيز التربة",
                d: "زراعة في تربة غير مجهزة تؤدي لنمو ضعيف رغم الري المنتظم.",
              },
              {
                t: "إنارة غير مدروسة",
                d: "إهمال إنارة المساء يحرمك من الاستفادة من الحديقة في الأوقات اللطيفة.",
              },
            ].map((item) => (
              <div key={item.t} className="card-surface p-6">
                <h3 className="font-bold text-ink">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-forest text-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              حديقة تعكس اهتمامك بالتفاصيل
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              المساحة الخارجية أول ما يطالعه ضيوفك وآخر ما تراه عند مغادرة منزلك.
              نحرص على أن تكون هذه الانطباعات في أفضل صورها.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
