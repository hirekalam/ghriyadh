import Link from 'next/link';
import { ShieldAlert, Droplets, Grid, Wrench, Sprout, LayoutDashboard } from 'lucide-react';

export default function WhyUs() {
  const points = [
    {
      icon: Grid,
      title: 'تصاميم مخصصة وتناغم معماري',
      description: 'لا نعتمد على قوالب جاهزة؛ فكل تصميم حدائق نصوغه يبدأ بفهم طراز فيلتك المعماري ومساحتها الجغرافية ليعكس هويتها الخاصة.'
    },
    {
      icon: Droplets,
      title: 'ري أوتوماتيكي ذكي واقتصادي',
      description: 'نؤسس شبكات ري مخفية تعمل بمؤقتات ذكية تضمن ري النباتات في الأوقات الباردة لمنع التبخر وتقليص فواتير المياه حتى 40%.'
    },
    {
      icon: Sprout,
      title: 'اختيار نباتات صديقة للرياض',
      description: 'نتفادى زراعة نباتات حساسة تذبل في الصيف. نركز على أصناف صحراوية ومحلية فاخرة تعيش طويلاً وتمنح الحديقة رونقاً أخضر مستداماً.'
    },
    {
      icon: ShieldAlert,
      title: 'عزل أسطح الفلل ضد تسريب المياه',
      description: 'عند تنسيق الأسطح بالنرجس أو أي حي، نهتم بوضع طبقات عزل مائي وحراري عالية الكفاءة مع قنوات لتصريف المياه لحماية البنية الأساسية.'
    },
    {
      icon: Wrench,
      title: 'تنفيذ تحت إشراف هندسي',
      description: 'فريق العمل يضم مهندسي لاندسكيب يتابعون دقة ميلان الأرضيات ومواصفات الخرسانة المطبوعة والشلالات والبرجولات خطوة بخطوة.'
    },
    {
      icon: LayoutDashboard,
      title: 'وضوح جداول الكميات والتكلفة',
      description: 'نلتزم بالشفافية الكاملة ونزود العميل بعرض سعر مفصل يحتوي على أسعار النباتات وتجهيز التربة وشبكة الري والمظلات بدقة متناهية.'
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">
      
      {/* Page Header */}
      <section className="relative bg-primary-deep text-warm-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/statement-choose.jpg"
            alt="لماذا البيت الأخضر"
            className="w-full h-full object-cover opacity-20 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-4">
          <nav className="text-xs text-warm-white/60 flex items-center gap-2 font-bold mb-4">
            <Link href="/" className="hover:text-white">الرئيسية</Link>
            <span>/</span>
            <span className="text-white">لماذا البيت الأخضر</span>
          </nav>
          <span className="text-xs font-bold text-fresh-green tracking-widest uppercase block border-r-2 border-botanical pr-3">
            تميزنا الحقيقي
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white">لماذا البيت الأخضر؟</h1>
          <p className="text-sm md:text-base text-warm-white/70 max-w-2xl leading-relaxed">
            لأننا نطبق المعايير الهندسية والحلول الذكية لتوفير حديقة فيلا فاخرة ومستدامة تلائم طبيعة الرياض.
          </p>
        </div>
      </section>

      {/* Philosophy Details */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl md:text-4xl font-black text-primary-deep leading-tight">
              نهتم بالتفاصيل الهندسية والزراعية معاً
            </h2>
            <p className="text-sm text-muted-grey">
              تنسيق حدائق الفلل والأسطح هو مزيج من الفن والعلم. نحن لا نترك شيئاً للصدفة، ونقدم حلولاً مدروسة تماماً.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-right">
            {points.map((p, idx) => (
              <div
                key={idx}
                className="bg-warm-white border border-charcoal/5 p-8 rounded-3xl space-y-4 hover:bg-white hover:shadow-card transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-botanical/15 flex items-center justify-center text-botanical">
                  <p.icon className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-base font-black text-primary-deep">{p.title}</h3>
                <p className="text-xs text-muted-grey leading-relaxed text-justify">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison or Quality block */}
      <section className="bg-warm-white py-20 border-t border-charcoal/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-right">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-primary-deep leading-tight">
              التزام كامل بمعايير الجودة والمواد الخام
            </h3>
            <p className="text-xs md:text-sm text-muted-grey leading-relaxed text-justify">
              تستعين شركة البيت الأخضر بمصادر موثوقة لتوريد عشب صناعي حاصل على اعتمادات ضد التآكل والأشعة البنفسجية ليبقى لونه زاهياً. كما نضمن مطابقة الثيل الطبيعي للدرجات المناسبة للرياض وتوفير مواد السباكة ونظم الري من علامات تجارية عالمية لضمان عدم حدوث انسداد بالأنابيب الأرضية.
            </p>
            <p className="text-xs md:text-sm text-muted-grey leading-relaxed text-justify">
              مهندسو اللاندسكيب لدينا يصممون الممرات الجانبية والجداريات المائية والشلالات والبرجولات والظلال بتوافق يعزز الخصوصية داخل حديقتك ويحجب الرؤية الخارجية، لتوفر حيزاً مريحاً لعائلتك.
            </p>
          </div>

          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-charcoal/5">
            <img
              src="/images/statement-design.jpg"
              alt="معايير الجودة والتفاصيل"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Contact Section Trigger */}
      <section className="bg-primary-deep text-warm-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-white">هل تبحث عن حلول عملية ومستدامة لحديقتك؟</h2>
          <p className="text-sm text-warm-white/70 max-w-xl mx-auto">
            مهندسونا مستعدون لتزويدك بالخيارات والتفاصيل الدقيقة لفيليتك ومقاساتها.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-white text-primary-deep font-bold px-8 py-4 rounded-full text-sm inline-block hover:scale-[1.02] transition-transform"
            >
              ابدأ بالاستشارة والتصميم
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
