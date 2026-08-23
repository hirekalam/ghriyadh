import Link from 'next/link';
import { Phone, CheckCircle, Eye, FileText, ClipboardList, PenTool, Hammer } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: Eye,
      title: 'الاستشارة وفهم الاحتياج',
      subtitle: 'الخطوة الأولى: تحديد الملامح العامة',
      description: 'نبدأ بالاستماع لأفكارك وتوقعاتك حول المساحة الخارجية للفيلا. نحدد الأنماط التي تفضلها (مودرن، طبيعي، كلاسيكي) والعناصر التي تريدها مثل الشلالات أو المظلات ونوع الثيل والميزانية الإجمالية المخصصة للمشروع.'
    },
    {
      num: '02',
      icon: ClipboardList,
      title: 'معاينة وفحص الموقع',
      subtitle: 'الخطوة الثانية: قياسات هندسية دقيقة',
      description: 'يقوم مهندس لاندسكيب بزيارة فيلتك لأخذ الأبعاد والقياسات بدقة، وفحص مستويات تصريف المياه الحالية، وتحديد مسار تمديد شبكات الري، وحساب كمية الضوء المباشر للموقع لاختيار النباتات الصالحة للنمو.'
    },
    {
      num: '03',
      icon: PenTool,
      title: 'التصميم والتخطيط الفراغي',
      subtitle: 'الخطوة الثالثة: وضع المخططات والرؤية البصرية',
      description: 'يقوم فريق التصميم بإعداد مخطط هندسي وتوزيع متوازن للفراغات ومواقع الأشجار والبرجولات والجلسات ومسارات الحركة. نوفر تصميماً ثلاثي الأبعاد (3D) يمنحك نظرة حقيقية لشكل الحديقة قبل ضربة الفأس الأولى.'
    },
    {
      num: '04',
      icon: FileText,
      title: 'اختيار النباتات والخامات',
      subtitle: 'الخطوة الرابعة: اختيار الجودة والمواصفات',
      description: 'نقوم بالاتفاق معك على أصناف النباتات والزهور الصديقة لبيئة الرياض، وتحديد خامات الأرضيات (عشب صناعي، عشب طبيعي بلدي أو هولندي، حجر طبيعي، بورسلين خارجي) وتفاصيل إضاءة LED المقاومة للماء والعوامل الجوية.'
    },
    {
      num: '05',
      icon: Hammer,
      title: 'التنفيذ والتركيب والإنشاء',
      subtitle: 'الخطوة الخامسة: الأعمال الأرضية والزراعية والري',
      description: 'يبدأ الفنيون المتخصصون بأعمال الحفر وتمديد شبكة الري الأوتوماتيكية تحت الأرض وتجهيز التربة بالمخصبات الزراعية وعزل الأسطح (في حال حدائق الأسطح) وتشييد هياكل المظلات والشلالات وتركيب الثيل بدقة متناهية.'
    },
    {
      num: '06',
      icon: CheckCircle,
      title: 'اللمسات النهائية والمتابعة',
      subtitle: 'الخطوة السادسة: تسليم الحديقة جاهزة ومثالية',
      description: 'نقوم بتشغيل واختبار ضغط شبكة الري وعمل الشلال والمضخات النوافير وتعديل زوايا الإضاءة الليلية. نسلمك الحديقة متكاملة ونقدم لك جدولاً إرشادياً للعناية بالنباتات وكيفية برمجة مؤقت الري التلقائي.'
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">
      
      {/* Header Banner */}
      <section className="relative bg-primary-deep text-warm-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-garden-path.jpg"
            alt="خطوات العمل والعملية"
            className="w-full h-full object-cover opacity-20 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-4">
          <nav className="text-xs text-warm-white/60 flex items-center gap-2 font-bold mb-4">
            <Link href="/" className="hover:text-white">الرئيسية</Link>
            <span>/</span>
            <span className="text-white">آلية العمل</span>
          </nav>
          <span className="text-xs font-bold text-fresh-green tracking-widest uppercase block border-r-2 border-botanical pr-3">
            منهجية التنفيذ
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white">آلية العمل والخطوات</h1>
          <p className="text-sm md:text-base text-warm-white/70 max-w-2xl leading-relaxed">
            نسير وفق منهجية واضحة ومدروسة تضمن مطابقة الحديقة للتصميم الهندسي وتفاصيل العزل والري بكفاءة.
          </p>
        </div>
      </section>

      {/* Visual Timeline Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-primary-deep">
              رحلة حديقتك من الفكرة حتى التسليم
            </h2>
            <p className="text-xs md:text-sm text-muted-grey">
              نحن نعمل بشفافية تامة لنجعل من تجربة تنسيق وتصميم مساحتك الخارجية تجربة مريحة ومنظمة.
            </p>
          </div>

          <div className="relative border-r border-botanical/25 pr-6 md:pr-10 space-y-12 mr-2">
            
            {steps.map((step, idx) => (
              <div key={idx} className="relative text-right space-y-3">
                {/* Timeline node */}
                <div className="absolute right-[-31px] md:right-[-47px] top-1.5 w-6 h-6 md:w-9 md:h-9 rounded-full bg-botanical text-warm-white flex items-center justify-center border-4 border-white shadow-sm">
                  <span className="text-[10px] md:text-xs font-black">{step.num}</span>
                </div>

                <div className="bg-warm-white border border-charcoal/5 p-6 md:p-8 rounded-3xl space-y-3 hover:shadow-card hover:bg-white transition-all duration-300">
                  <div className="flex items-center gap-3 text-botanical">
                    <step.icon className="w-5 h-5" />
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

      {/* Final CTAs */}
      <section className="bg-primary-deep text-warm-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-white">هل أنت جاهز للبدء بالخطوة الأولى معنا؟</h2>
          <p className="text-sm text-warm-white/70 max-w-xl mx-auto">
            احجز موعداً لاستشارتك ومعاينة الموقع بالرياض وسنتكفل بالباقي.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-white text-primary-deep font-bold px-8 py-4 rounded-full text-sm inline-block hover:scale-[1.02] transition-transform"
            >
              ابدأ بالاستشارة المجانية
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
