import Link from 'next/link';
import { Phone, CheckCircle, Eye, FileText, ClipboardList, PenTool, Hammer, ArrowLeft, Sparkles } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: Eye,
      title: 'الاستشارة وفهم الاحتياج',
      subtitle: 'الخطوة الأولى: تحديد الملامح العامة',
      description: 'نبدأ بالاستماع لأفكارك وتوقعاتك حول المساحة الخارجية للفيلا. نحدد الأنماط التي تفضلها (مودرن، طبيعي، كلاسيكي) والعناصر التي تريدها مثل الشلالات أو المظلات ونوع الثيل والميزانية الإجمالية المخصصة للمشروع.',
      gradient: 'from-botanical/40 to-water-blue/20'
    },
    {
      num: '02',
      icon: ClipboardList,
      title: 'معاينة وفحص الموقع',
      subtitle: 'الخطوة الثانية: قياسات هندسية دقيقة',
      description: 'يقوم مهندس لاندسكيب بزيارة فيلتك لأخذ الأبعاد والقياسات بدقة، وفحص مستويات تصريف المياه الحالية، وتحديد مسار تمديد شبكات الري، وحساب كمية الضوء المباشر للموقع لاختيار النباتات الصالحة للنمو.',
      gradient: 'from-water-blue/40 to-botanical/20'
    },
    {
      num: '03',
      icon: PenTool,
      title: 'التصميم والتخطيط الفراغي',
      subtitle: 'الخطوة الثالثة: وضع المخططات والرؤية البصرية',
      description: 'يقوم فريق التصميم بإعداد مخطط هندسي وتوزيع متوازن للفراغات ومواقع الأشجار والبرجولات والجلسات ومسارات الحركة. نوفر تصميماً ثلاثي الأبعاد (3D) يمنحك نظرة حقيقية لشكل الحديقة قبل ضربة الفأس الأولى.',
      gradient: 'from-botanical/40 to-water-blue/20'
    },
    {
      num: '04',
      icon: FileText,
      title: 'اختيار النباتات والخامات',
      subtitle: 'الخطوة الرابعة: اختيار الجودة والمواصفات',
      description: 'نقوم بالاتفاق معك على أصناف النباتات والزهور الصديقة لبيئة الرياض، وتحديد خامات الأرضيات (عشب صناعي، عشب طبيعي بلدي أو هولندي، حجر طبيعي، بورسلين خارجي) وتفاصيل إضاءة LED المقاومة للماء والعوامل الجوية.',
      gradient: 'from-water-blue/40 to-botanical/20'
    },
    {
      num: '05',
      icon: Hammer,
      title: 'التنفيذ والتركيب والإنشاء',
      subtitle: 'الخطوة الخامسة: الأعمال الأرضية والزراعية والري',
      description: 'يبدأ الفنيون المتخصصون بأعمال الحفر وتمديد شبكة الري الأوتوماتيكية تحت الأرض وتجهيز التربة بالمخصبات الزراعية وعزل الأسطح (في حال حدائق الأسطح) وتشييد هياكل المظلات والشلالات وتركيب الثيل بدقة متناهية.',
      gradient: 'from-botanical/40 to-water-blue/20'
    },
    {
      num: '06',
      icon: CheckCircle,
      title: 'اللمسات النهائية والمتابعة',
      subtitle: 'الخطوة السادسة: تسليم الحديقة جاهزة ومثالية',
      description: 'نقوم بتشغيل واختبار ضغط شبكة الري وعمل الشلال والمضخات النوافير وتعديل زوايا الإضاءة الليلية. نسلمك الحديقة متكاملة ونقدم لك جدولاً إرشادياً للعناية بالنباتات وكيفية برمجة مؤقت الري التلقائي.',
      gradient: 'from-water-blue/40 to-botanical/20'
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">

      {/* Header Banner - Apple-style */}
      <section className="relative bg-primary-deep text-warm-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-garden-path.jpg"
            alt="خطوات العمل والعملية"
            className="w-full h-full object-cover opacity-20 object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/90 to-primary-deep/60" />
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-botanical/10 to-water-blue/10 blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-6">
          <nav className="text-xs text-warm-white/80 flex items-center gap-2 font-semibold mb-2">
            <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <span className="w-1 h-1 rounded-full bg-warm-white/20" />
            <span className="text-warm-white/80">آلية العمل</span>
          </nav>
          <div className="inline-flex items-center gap-2 text-fresh-green font-bold text-xs uppercase tracking-[0.2em]">
            <span className="w-8 h-px bg-fresh-green/50" />
            <span>منهجية التنفيذ</span>
          </div>
          <h1 className="apple-title text-white">آلية العمل والخطوات</h1>
          <p className="text-base md:text-lg text-warm-white/80 max-w-2xl leading-relaxed">
            نسير وفق منهجية واضحة ومدروسة تضمن مطابقة الحديقة للتصميم الهندسي وتفاصيل العزل والري بكفاءة.
          </p>
        </div>
      </section>

      {/* Visual Timeline Section - Apple-style */}
      <section className="bg-white py-24 md:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-botanical font-bold text-xs uppercase tracking-[0.2em]">
              <span className="w-8 h-px bg-botanical/50" />
              <span>رحلتك معنا</span>
            </div>
            <h2 className="apple-heading text-primary-deep">
              رحلة حديقتك من<br className="hidden md:block" />
              <span className="text-gradient-mixed">الفكرة حتى التسليم</span>
            </h2>
            <p className="text-sm text-muted-grey max-w-lg mx-auto">
              نحن نعمل بشفافية تامة لنجعل من تجربة تنسيق وتصميم مساحتك الخارجية تجربة مريحة ومنظمة.
            </p>
          </div>

          <div className="relative pr-8 md:pr-12 space-y-8">
            {/* Vertical timeline line */}
            <div className="absolute right-4 md:right-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-botanical/30 via-water-blue/30 to-botanical/30 rounded-full" />

            {steps.map((step, idx) => (
              <div key={idx} className="relative text-right space-y-3">
                {/* Timeline node */}
                <div className="absolute right-[-24px] md:right-[-34px] top-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-botanical to-water-blue text-warm-white flex items-center justify-center border-4 border-white shadow-premium-glow z-10">
                  <span className="text-xs font-black number-display">{step.num}</span>
                </div>

                <div className="bg-warm-white border border-charcoal/5 p-6 md:p-8 rounded-3xl shadow-apple hover:shadow-apple-lg transition-all duration-500 space-y-4 mr-4 group">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-5 h-5 text-botanical" />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase font-latin text-muted-grey">
                      {step.subtitle}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-black text-primary-deep">{step.title}</h3>
                  <p className="text-xs md:text-sm text-muted-grey leading-relaxed text-justify">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Final CTAs - Apple-style */}
      <section className="bg-primary-deep text-warm-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-botanical/20 to-water-blue/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-water-blue/10 to-botanical/20 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="apple-title text-white">
              هل أنت جاهز للبدء<br />
              <span className="text-gradient-mixed bg-gradient-to-r from-fresh-green via-water-blue to-soft-blue bg-clip-text text-transparent">
                بالخطوة الأولى معنا؟
              </span>
            </h2>
            <p className="text-base text-warm-white/80 max-w-xl mx-auto leading-relaxed">
              احجز موعداً لاستشارتك ومعاينة الموقع بالرياض وسنتكفل بالباقي.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/contact"
              className="btn-apple bg-gradient-to-r from-botanical to-water-blue text-white shadow-lg hover:shadow-water-glow"
            >
              <span>ابدأ بالاستشارة المجانية</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}