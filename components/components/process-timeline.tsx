import { ClipboardList, Ruler, PenTool, Box, Hammer, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "الاستشارة",
    desc: "نستمع إلى احتياجك ونفهم كيف تريد استخدام مساحتك الخارجية وأولوياتك.",
  },
  {
    num: "02",
    icon: Ruler,
    title: "المعاينة",
    desc: "نقيس الموقع وندرس التربة وضوء الشمس والتصريف لنبني تصوراً واقعياً.",
  },
  {
    num: "03",
    icon: PenTool,
    title: "التصميم",
    desc: "نضع تصوراً يوزع المساحة بين الخضرة والجلسات والممرات بما يناسبك.",
  },
  {
    num: "04",
    icon: Box,
    title: "اختيار العناصر",
    desc: "نختار معك النباتات والخامات والإنارة المناسبة للمساحة والميزانية.",
  },
  {
    num: "05",
    icon: Hammer,
    title: "التنفيذ",
    desc: "ننفذ المراحل بترتيب واضح مع مراقبة الجودة في كل خطوة.",
  },
  {
    num: "06",
    icon: Sparkles,
    title: "اللمسات النهائية",
    desc: "نراجع النتيجة ونلّم الأطراف ونسلمك مساحتك جاهزة للاستخدام.",
  },
];

export default function ProcessTimeline() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <div
            key={step.num}
            className="card-surface group relative overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="font-latin absolute -top-2 left-5 text-6xl font-bold text-forest/5 transition-colors group-hover:text-lime/15">
              {step.num}
            </span>
            <span className="relative mb-5 inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-tint text-brand">
              <Icon className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <h3 className="relative text-xl font-bold text-ink">{step.title}</h3>
            <p className="relative mt-2 leading-relaxed text-muted">{step.desc}</p>
            {i < steps.length - 1 && (
              <span className="absolute left-1/2 -bottom-1 h-0.5 w-8 -translate-x-1/2 rounded-full bg-lime/40 md:hidden" />
            )}
          </div>
        );
      })}
    </div>
  );
}
