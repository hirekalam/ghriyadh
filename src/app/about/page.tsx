import Link from 'next/link';
import { Target, Eye, ShieldCheck, Heart, Leaf, Phone } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Eye,
      title: 'رؤية معمارية متناسقة',
      description: 'نرى المساحات الخارجية امتداداً طبيعياً لتصميم الفيلا الداخلي لتوفير تكامل بصري راقٍ.'
    },
    {
      icon: Target,
      title: 'الاستدامة المائية',
      description: 'تصميم شبكات ري ذكية واختيار نباتات صحراوية تتلاءم مع طقس الرياض لترشيد استهلاك المياه.'
    },
    {
      icon: ShieldCheck,
      title: 'دقة التنفيذ واختيار المواد',
      description: 'الالتزام بمعايير عالية في التأسيس والعزل والصرف واختيار أفضل درجات العشب الطبيعي والصناعي.'
    },
    {
      icon: Heart,
      title: 'الشفافية الكاملة',
      description: 'تقديم جداول كميات مفصلة وتخطيط واضح دون تكاليف خفية أو بنود غير مفهومة.'
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">
      
      {/* Hero Header */}
      <section className="relative bg-primary-deep text-warm-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/statement-design.jpg"
            alt="من نحن - البيت الأخضر"
            className="w-full h-full object-cover opacity-20 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-4">
          <nav className="text-xs text-warm-white/60 flex items-center gap-2 font-bold mb-4">
            <Link href="/" className="hover:text-white">الرئيسية</Link>
            <span>/</span>
            <span className="text-white">من نحن</span>
          </nav>
          <span className="text-xs font-bold text-fresh-green tracking-widest uppercase block border-r-2 border-botanical pr-3">
            تعرف علينا
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white">من نحن</h1>
          <p className="text-sm md:text-base text-warm-white/70 max-w-2xl leading-relaxed">
            فريق متكامل من مهندسي الفراغات الخارجية والفنيين الزراعيين الملتزمين بتطوير حدائق مستدامة بالرياض.
          </p>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-primary-deep">
              البيت الأخضر لتنسيق الحدائق بالرياض
            </h2>
            <p className="text-muted-grey text-base leading-relaxed text-justify">
              تأسست شركة البيت الأخضر (Green House) لتلبية الطلب المتزايد على لاندسكيب عالي الجودة يناسب النمط المعماري العصري للفلل والقصور السكنية في مدينة الرياض. نحن لا نقدم خدمات بستنة تقليدية؛ بل نخطط الفراغ هندسياً ونحسب كميات الظل ومعدلات التبخر للتربة لنصل للتصميم المثالي.
            </p>
            <p className="text-muted-grey text-base leading-relaxed text-justify">
              ترتكز سمعتنا على التزامنا بتطبيق أدق معايير التأسيس، خاصة عند تركيب العشب الطبيعي أو تمديد شبكات الري الأوتوماتيكية المدفونة، أو تصميم جلسات الحدائق والبرجولات والأسطح المعلقة بالنرجس والياسمين وحطين والملقا.
            </p>
            <div className="p-6 bg-warm-white rounded-3xl border border-charcoal/5 flex gap-4 items-start text-right">
              <Leaf className="w-8 h-8 text-botanical flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-primary-deep mb-1">الرعاية الملائمة لبيئة الرياض</h4>
                <p className="text-xs text-muted-grey">
                  نحن ندرك تماماً تحديات درجات الحرارة المرتفعة وملوحة التربة ومستويات المياه بالرياض، ولذا نصمم حلولاً تضمن نمو النباتات واستمرارها بأقل معدل استهلاك مائي.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-charcoal/5">
              <img
                src="/images/statement-maintain.jpg"
                alt="فلسفتنا في التنسيق"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-warm-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-16">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-botanical font-bold text-xs uppercase tracking-widest block">
              الأسس التي ننطلق منها
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-primary-deep">
              القيم والمبادئ الحاكمة لعملنا
            </h2>
            <p className="text-xs md:text-sm text-muted-grey leading-relaxed">
              نلتزم بتقديم مخرجات عمل تعكس مهنيتنا العالية وتمنح عملاءنا حديقة تتحدث عن الجودة والجمال.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-charcoal/5 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-botanical/10 flex items-center justify-center text-botanical">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black text-primary-deep">{v.title}</h3>
                <p className="text-xs text-muted-grey leading-relaxed text-justify">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
          
          <div className="bg-warm-white p-8 md:p-10 rounded-3xl border border-charcoal/5 space-y-4">
            <h3 className="text-lg font-black text-primary-deep border-r-4 border-botanical pr-3">رؤيتنا</h3>
            <p className="text-xs md:text-sm text-muted-grey leading-relaxed text-justify">
              أن نكون المرجعية الأولى في الرياض لتصميم وتنسيق الفراغات الخارجية التي تعزز رفاهية العيش اليومي للأسرة السعودية، وتقديم نموذج يُحتذى به في اللاندسكيب المستدام بيئياً والمتميز معمارياً.
            </p>
          </div>

          <div className="bg-warm-white p-8 md:p-10 rounded-3xl border border-charcoal/5 space-y-4">
            <h3 className="text-lg font-black text-primary-deep border-r-4 border-accent pr-3" style={{ borderColor: 'hsl(var(--accent))' }}>رسالتنا</h3>
            <p className="text-xs md:text-sm text-muted-grey leading-relaxed text-justify">
              تحويل المساحات الخارجية إلى واحات تجمع جمال الطبيعة مع راحة Outdoor Living، باستخدام مواد عالية الجودة وتمديدات مائية ذكية، مدعومين بخبرتنا الدقيقة بالتربة والمناخ المحلي للرياض.
            </p>
          </div>

        </div>
      </section>

      {/* Direct CTA */}
      <section className="bg-primary-deep text-warm-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl md:text-4xl font-black text-white">هل ترغب بمعاينة مساحتك الخارجية وتصميمها؟</h2>
          <p className="text-sm text-warm-white/70 max-w-xl mx-auto">
            تواصل معنا اليوم. سنقوم بإرسال أحد مهندسينا لتفحص الموقع وتقديم أنسب النصائح والحلول المجانية.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="bg-white text-primary-deep font-bold px-8 py-4 rounded-full text-sm hover:scale-[1.02] transition-transform"
            >
              احجز موعد معاينة مجاني
            </Link>
            <a
              href="tel:0557401773"
              className="flex items-center gap-2 text-warm-white/80 hover:text-white font-bold"
            >
              <Phone className="w-5 h-5 text-fresh-green" />
              <span className="dir-ltr">0557401773</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
