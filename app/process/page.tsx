import Image from "next/image";
import { ClipboardList, Hammer, PenTool, Ruler, Sparkles, Box } from "lucide-react";
import CtaSection from "@/components/cta-section";
import ProcessTimeline from "@/components/process-timeline";
import PageHero from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "آلية عمل تنسيق الحدائق بالرياض | البيت الأخضر",
  description:
    "تعرف على آلية عمل البيت الأخضر في تنسيق الحدائق بالرياض: من الاستشارة والمعاينة إلى التصميم والتنفيذ واللمسات النهائية بخطوات واضحة ومنظمة.",
  path: "/process",
});

const detailSteps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "الاستشارة",
    desc: "نبدأ بالاستماع. نفهم احتياجك ونمط استخدامك المتوقع للمساحة، وأولوياتك من حيث الشكل والصيانة والميزانية. نطرح عليك الأسئلة الصحيحة لنبني تصوراً دقيقاً من اليوم الأول.",
    points: [
      "نستمع لاحتياجك ونمط استخدامك للمساحة",
      "نحدد أولوياتك من الشكل والصيانة والميزانية",
      "نجيب على أسئلتك ونوضح الخيارات المتاحة",
    ],
  },
  {
    num: "02",
    icon: Ruler,
    title: "المعاينة",
    desc: "نزور الموقع ونقيس المساحة بدقة، وندرس التربة واتجاهات الشمس والتصريف والمساحات المحيطة. هذه الخطوة تمنع المفاجآت لاحقاً وتمكننا من تقديم عرض واقعي.",
    points: [
      "قياس دقيق للمساحة ونطاق العمل",
      "دراسة التربة والشمس والتصريف",
      "تقديم عرض واضح بالتكلفة والمدة",
    ],
  },
  {
    num: "03",
    icon: PenTool,
    title: "التصميم",
    desc: "نضع تصوراً يوزع المساحة بين الخضرة والجلسات والممرات والعناصر المائية، متوازناً بين الجمال والوظيفة ومراعياً كفاءة الري في أجواء الرياض.",
    points: [
      "مخطط يوزع المساحة بشكل متوازن",
      "مراعاة الظل وكفاءة المياه",
      "مشاركة التصميم معك لاعتماد أي تعديلات",
    ],
  },
  {
    num: "04",
    icon: Box,
    title: "اختيار العناصر",
    desc: "نختار معك النباتات المناسبة للمناخ، والخامات التي تتحمل الحرارة، والإنارة التي تصنع أجواء الأمسية. كل خيار له بديل واضح يناسب ميزانيتك.",
    points: [
      "نباتات مناسبة لمناخ الرياض الحار",
      "خامات تتحمل الشمس والحرارة",
      "بدائل واضحة للخيارات حسب الميزانية",
    ],
  },
  {
    num: "05",
    icon: Hammer,
    title: "التنفيذ",
    desc: "ننفذ المشروع بمراحل مرتبة: تجهيز الأرض، أنظمة الري، الزراعة، ثم التركيبات النهائية. نلتزم بجدول زمني واضح ونتواصل معك بانتظام أثناء التنفيذ.",
    points: [
      "تجهيز الأرض قبل أي زراعة",
      "تركيب شبكة الري قبل الزراعة",
      "التزام بجدول زمني وتواصل مستمر",
    ],
  },
  {
    num: "06",
    icon: Sparkles,
    title: "اللمسات النهائية",
    desc: "نراجع كل التفاصيل، نعالج أي ملاحظة، ونلم الأطراف قبل التسليم. تستلم مساحتك جاهزة للاستخدام مع توصيات بسيطة للعناية بها.",
    points: [
      "مراجعة تفصيلية لكل عناصر الحديقة",
      "معالجة أي ملاحظة قبل التسليم",
      "تسليم مع إرشادات للعناية اليومية",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={breadcrumbJsonLd([{ name: "آلية العمل", url: "/process" }])} />

      <PageHero
        eyebrow="آلية العمل"
        title="من الفكرة إلى الحديقة الجاهزة"
        titleEn="Our Process"
        description="خطوات منظمة وواضحة تجعل مشروع تنسيق حديقتك تجربة مريحة من البداية إلى التسليم."
        crumbs={[{ label: "آلية العمل" }]}
      />

      <section className="section-pad">
        <div className="container-site">
          <div className="space-y-16">
            {detailSteps.map((step, i) => {
              const Icon = step.icon;
              const reversed = i % 2 === 1;
              return (
                <div
                  key={step.num}
                  className="grid items-center gap-10 lg:grid-cols-2"
                >
                  <div className={reversed ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4">
                      <span className="font-latin text-5xl font-bold text-forest/10">
                        {step.num}
                      </span>
                      <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-tint text-brand">
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </span>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">
                      {step.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted">{step.desc}</p>
                    <ul className="mt-5 space-y-2">
                      {step.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-muted">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-lime" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`overflow-hidden shape-media ${reversed ? "lg:order-1" : ""}`}
                  >
                    <Image
                      src={`https://images.unsplash.com/photo-${
                        i % 2 === 0
                          ? "1600585154340-be6161a56a0c"
                          : "1620121692029-d088224ddc74"
                      }?auto=format&fit=crop&w=1200&q=80`}
                      alt={`خطوة ${step.title} في عملية تنسيق الحدائق`}
                      width={1200}
                      height={900}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-tint/40">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">نظرة سريعة على الخطوات</h2>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow-ar">المدة الزمنية</span>
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              كم يستغرق تنفيذ مشروع تنسيق الحدائق؟
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              مدة المشروع تختلف حسب حجم المساحة وطبيعة الأعمال وعدد العناصر،
              ولا يمكن تحديد رقم دقيق قبل المعاينة. هذه فكرة تقريبية عن أثر كل
              مرحلة على الجدول الزمني.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                {
                  t: "الاستشارة والمعاينة",
                  d: "أسرع مرحلة، وتُنجز بعد أول تواصل بوقت قصير وتشمل العرض التفصيلي.",
                },
                {
                  t: "التصميم والاعتماد",
                  d: "نقدم التصور بعد المعاينة، ومدته تعتمد على سرعة اعتمادك للتعديلات.",
                },
                {
                  t: "التنفيذ",
                  d: "المرحلة الأطول، وتبدأ فعلياً بعد الاتفاق، ونلتزم فيها بجدول واضح قبل البدء.",
                },
                {
                  t: "التسليم",
                  d: "مراجعة نهائية وضبط اللمسات الأخيرة، ونحدد معك موعد الاستلام بوقت كافٍ.",
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
          <div className="overflow-hidden shape-media">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="مراحل تنفيذ تنسيق حديقة في الرياض من التجهيز إلى الزراعة"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-tint/40">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow-ar inline-flex">أسئلة عن آلية العمل</span>
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              أسئلة شائعة عن آلية العمل معنا
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {[
              {
                q: "هل المعاينة والاستشارة الأولى بتكلفة؟",
                a: "نحرص على أن تكون الخطوة الأولى سهلة لك؛ تواصل معنا لمعرفة تفاصيل بدء العمل وتحديد موعد مناسب للمعاينة.",
              },
              {
                q: "هل يمكن تنفيذ المشروع على مراحل؟",
                a: "نعم، نناقش معك تقسيم العمل على مراحل حسب الميزانية، مع بقاء التصميم العام موحداً حتى لا تتعارض المراحل مستقبلاً.",
              },
              {
                q: "هل أستطيع تعديل التصميم قبل التنفيذ؟",
                a: "بالتأكيد، نشاركك التصميم أولاً ونستمع لملاحظاتك ونعدّل قبل أي بدء في التنفيذ.",
              },
              {
                q: "ماذا لو ظهرت ملاحظات بعد التسليم؟",
                a: "نناقش أي ملاحظة تظهر في الفترة الأولى بعد التسليم، ونعمل على معالجتها ضمن نطاق الاتفاق المبدئي.",
              },
            ].map((item) => (
              <details key={item.q} className="card-surface group rounded-3xl p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                  {item.q}
                  <span className="shrink-0 text-brand transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
