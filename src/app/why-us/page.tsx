import Link from 'next/link';
import { ShieldAlert, Droplets, Grid, Wrench, Sprout, LayoutDashboard, ArrowLeft, Check } from 'lucide-react';

export default function WhyUs() {
  const points = [
    {
      icon: Grid,
      title: 'تصاميم مخصصة وتناغم معماري',
      description: 'لا نعتمد على قوالب جاهزة؛ فكل تصميم حدائق نصوغه يبدأ بفهم طراز فيلتك المعماري ومساحتها الجغرافية ليعكس هويتها الخاصة.',
      gradient: 'from-botanical/40 to-water-blue/20'
    },
    {
      icon: Droplets,
      title: 'ري أوتوماتيكي ذكي واقتصادي',
      description: 'نؤسس شبكات ري مخفية تعمل بمؤقتات ذكية تضمن ري النباتات في الأوقات الباردة لمنع التبخر وتقليص فواتير المياه حتى 40%.',
      gradient: 'from-water-blue/40 to-botanical/20'
    },
    {
      icon: Sprout,
      title: 'اختيار نباتات صديقة للرياض',
      description: 'نتفادى زراعة نباتات حساسة تذبل في الصيف. نركز على أصناف صحراوية ومحلية فاخرة تعيش طويلاً وتمنح الحديقة رونقاً أخضر مستداماً.',
      gradient: 'from-botanical/40 to-water-blue/20'
    },
    {
      icon: ShieldAlert,
      title: 'عزل أسطح الفلل ضد تسريب المياه',
      description: 'عند تنسيق الأسطح بالنرجس أو أي حي، نهتم بوضع طبقات عزل مائي وحراري عالية الكفاءة مع قنوات لتصريف المياه لحماية البنية الأساسية.',
      gradient: 'from-water-blue/40 to-botanical/20'
    },
    {
      icon: Wrench,
      title: 'تنفيذ تحت إشراف هندسي',
      description: 'فريق العمل يضم مهندسي لاندسكيب يتابعون دقة ميلان الأرضيات ومواصفات الخرسانة المطبوعة والشلالات والبرجولات خطوة بخطوة.',
      gradient: 'from-botanical/40 to-water-blue/20'
    },
    {
      icon: LayoutDashboard,
      title: 'وضوح جداول الكميات والتكلفة',
      description: 'نلتزم بالشفافية الكاملة ونزود العميل بعرض سعر مفصل يحتوي على أسعار النباتات وتجهيز التربة وشبكة الري والمظلات بدقة متناهية.',
      gradient: 'from-water-blue/40 to-botanical/20'
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">

      {/* Page Header - Apple-style */}
      <section className="relative bg-primary-deep text-warm-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/statement-choose.jpg"
            alt="لماذا البيت الأخضر"
            className="w-full h-full object-cover opacity-20 object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/90 to-primary-deep/60" />
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-botanical/10 to-water-blue/10 blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-6">
          <nav className="text-xs text-warm-white/50 flex items-center gap-2 font-semibold mb-2">
            <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <span className="w-1 h-1 rounded-full bg-warm-white/20" />
            <span className="text-warm-white/80">لماذا البيت الأخضر</span>
          </nav>
          <div className="inline-flex items-center gap-2 text-fresh-green font-bold text-xs uppercase tracking-[0.2em]">
            <span className="w-8 h-px bg-fresh-green/50" />
            <span>تميزنا الحقيقي</span>
          </div>
          <h1 className="apple-title text-white">لماذا البيت الأخضر؟</h1>
          <p className="text-base md:text-lg text-warm-white/60 max-w-2xl leading-relaxed">
            لأننا نطبق المعايير الهندسية والحلول الذكية لتوفير حديقة فيلا فاخرة ومستدامة تلائم طبيعة الرياض.
          </p>
        </div>
      </section>

      {/* Philosophy Details - Apple-style */}
      <section className="bg-white py-24 md:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-botanical font-bold text-xs uppercase tracking-[0.2em]">
              <span className="w-8 h-px bg-botanical/50" />
              <span>مميزاتنا</span>
            </div>
            <h2 className="apple-heading text-primary-deep">
              نهتم بالتفاصيل الهندسية<br className="hidden md:block" />
              <span className="text-gradient-mixed">والزراعية معاً</span>
            </h2>
            <p className="text-sm text-muted-grey max-w-lg mx-auto">
              تنسيق حدائق الفلل والأسطح هو مزيج من الفن والعلم. نحن لا نترك شيئاً للصدفة، ونقدم حلولاً مدروسة تماماً.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-right">
            {points.map((p, idx) => (
              <div
                key={idx}
                className="bg-warm-white border border-charcoal/5 p-8 rounded-3xl shadow-apple hover:shadow-apple-lg transition-all duration-500 hover:-translate-y-1 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-botanical/40 to-water-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <p.icon className="w-6 h-6 text-botanical" />
                </div>
                <h3 className="text-base font-black text-primary-deep">{p.title}</h3>
                <p className="text-xs text-muted-grey leading-relaxed text-justify">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality block - Apple-style */}
      <section className="bg-warm-white py-24 md:py-32 relative border-t border-charcoal/5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center text-right">

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-botanical font-bold text-xs uppercase tracking-[0.2em]">
              <span className="w-8 h-px bg-botanical/50" />
              <span>الجودة</span>
            </div>
            <h2 className="apple-heading text-primary-deep">
              التزام كامل بمعايير الجودة<br className="hidden md:block" />
              <span className="text-gradient-mixed">والمواد الخام</span>
            </h2>
            <p className="text-sm text-muted-grey leading-relaxed text-justify">
              تستعين شركة البيت الأخضر بمصادر موثوقة لتوريد عشب صناعي حاصل على اعتمادات ضد التآكل والأشعة البنفسجية ليبقى لونه زاهياً. كما نضمن مطابقة الثيل الطبيعي للدرجات المناسبة للرياض وتوفير مواد السباكة ونظم الري من علامات تجارية عالمية لضمان عدم حدوث انسداد بالأنابيب الأرضية.
            </p>
            <p className="text-sm text-muted-grey leading-relaxed text-justify">
              مهندسو اللاندسكيب لدينا يصممون الممرات الجانبية والجداريات المائية والشلالات والبرجولات والظلال بتوافق يعزز الخصوصية داخل حديقتك ويحجب الرؤية الخارجية، لتوفر حيزاً مريحاً لعائلتك.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-apple-lg border border-charcoal/5 img-container">
              <img
                src="/images/statement-design.jpg"
                alt="معايير الجودة والتفاصيل"
                className="w-full h-full object-cover img-premium"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-water-blue/10 to-botanical/10 rounded-3xl border border-charcoal/5 -z-10" />
          </div>

        </div>
      </section>

      {/* Contact Section Trigger - Apple-style */}
      <section className="bg-primary-deep text-warm-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-botanical/20 to-water-blue/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-water-blue/10 to-botanical/20 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="apple-title text-white">
              هل تبحث عن حلول عملية<br />
              <span className="text-gradient-mixed bg-gradient-to-r from-fresh-green via-water-blue to-soft-blue bg-clip-text text-transparent">
                ومستدامة لحديقتك؟
              </span>
            </h2>
            <p className="text-base text-warm-white/60 max-w-xl mx-auto leading-relaxed">
              مهندسونا مستعدون لتزويدك بالخيارات والتفاصيل الدقيقة لفيليتك ومقاساتها.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/contact"
              className="btn-apple bg-gradient-to-r from-botanical to-water-blue text-white shadow-lg hover:shadow-water-glow"
            >
              <span>ابدأ بالاستشارة والتصميم</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}