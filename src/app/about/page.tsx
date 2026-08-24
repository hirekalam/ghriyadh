import Link from 'next/link';
import { Target, Eye, ShieldCheck, Heart, Leaf, Phone, ArrowLeft, Check, Sparkles } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Eye,
      title: 'رؤية معمارية متناسقة',
      description: 'نرى المساحات الخارجية امتداداً طبيعياً لتصميم الفيلا الداخلي لتوفير تكامل بصري راقٍ.',
      gradient: 'from-botanical/40 to-water-blue/20'
    },
    {
      icon: Target,
      title: 'الاستدامة المائية',
      description: 'تصميم شبكات ري ذكية واختيار نباتات صحراوية تتلاءم مع طقس الرياض لترشيد استهلاك المياه.',
      gradient: 'from-water-blue/40 to-botanical/20'
    },
    {
      icon: ShieldCheck,
      title: 'دقة التنفيذ واختيار المواد',
      description: 'الالتزام بمعايير عالية في التأسيس والعزل والصرف واختيار أفضل درجات العشب الطبيعي والصناعي.',
      gradient: 'from-botanical/40 to-water-blue/20'
    },
    {
      icon: Heart,
      title: 'الشفافية الكاملة',
      description: 'تقديم جداول كميات مفصلة وتخطيط واضح دون تكاليف خفية أو بنود غير مفهومة.',
      gradient: 'from-water-blue/40 to-botanical/20'
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">

      {/* Hero Header - Apple-style */}
      <section className="relative bg-primary-deep text-warm-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/statement-design.jpg"
            alt="من نحن - البيت الأخضر"
            className="w-full h-full object-cover opacity-20 object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/90 to-primary-deep/60" />
          {/* Decorative elements */}
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-botanical/10 to-water-blue/10 blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-6">
          <nav className="text-xs text-warm-white/80 flex items-center gap-2 font-semibold mb-2">
            <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <span className="w-1 h-1 rounded-full bg-warm-white/20" />
            <span className="text-warm-white/80">من نحن</span>
          </nav>
          <div className="inline-flex items-center gap-2 text-fresh-green font-bold text-xs uppercase tracking-[0.2em]">
            <span className="w-8 h-px bg-fresh-green/50" />
            <span>تعرف علينا</span>
          </div>
          <h1 className="apple-title text-white">
            من نحن
          </h1>
          <p className="text-base md:text-lg text-warm-white/80 max-w-2xl leading-relaxed">
          </p>
        </div>
      </section>

      {/* Main Philosophy Section - Apple split layout */}
      <section className="bg-white py-24 md:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-botanical font-bold text-xs uppercase tracking-[0.2em]">
                <span className="w-8 h-px bg-botanical/50" />
                <span>قصتنا</span>
              </div>
              <h2 className="apple-heading text-primary-deep">
                البيت الأخضر لتنسيق<br className="hidden md:block" />
                <span className="text-gradient-mixed">الحدائق بالرياض</span>
              </h2>
              <p className="text-muted-grey text-base leading-relaxed text-justify">
                تأسست شركة البيت الأخضر (Green House) لتلبية الطلب المتزايد على لاندسكيب عالي الجودة يناسب النمط المعماري العصري للفلل والقصور السكنية في مدينة الرياض. نحن لا نقدم خدمات بستنة تقليدية؛ بل نخطط الفراغ هندسياً ونحسب كميات الظل ومعدلات التبخر للتربة لنصل للتصميم المثالي.
              </p>
              <p className="text-muted-grey text-base leading-relaxed text-justify">
                ترتكز سمعتنا على التزامنا بتطبيق أدق معايير التأسيس، خاصة عند تركيب العشب الطبيعي أو تمديد شبكات الري الأوتوماتيكية المدفونة، أو تصميم جلسات الحدائق والبرجولات والأسطح المعلقة بالنرجس والياسمين وحطين والملقا.
              </p>
            </div>

            {/* Highlight card */}
            <div className="bg-gradient-to-br from-warm-white to-white p-6 md:p-8 rounded-3xl border border-charcoal/5 shadow-apple flex gap-4 items-start text-right">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-botanical/40 to-water-blue/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Leaf className="w-6 h-6 text-botanical" />
              </div>
              <div>
                <h4 className="text-sm font-black text-primary-deep mb-1">الرعاية الملائمة لبيئة الرياض</h4>
                <p className="text-xs text-muted-grey leading-relaxed">
                  نحن ندرك تماماً تحديات درجات الحرارة المرتفعة وملوحة التربة ومستويات المياه بالرياض، ولذا نصمم حلولاً تضمن نمو النباتات واستمرارها بأقل معدل استهلاك مائي.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-apple-lg border border-charcoal/5 img-container">
              <img
                src="/images/statement-maintain.jpg"
                alt="فلسفتنا في التنسيق"
                className="w-full h-full object-cover img-premium"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-botanical/10 to-water-blue/10 rounded-3xl border border-charcoal/5 -z-10" />
          </div>

        </div>
      </section>

      {/* Values Grid - Apple-style */}
      <section className="bg-warm-white py-24 md:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-16">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-botanical font-bold text-xs uppercase tracking-[0.2em]">
              <span className="w-8 h-px bg-botanical/50" />
              <span>الأسس التي ننطلق منها</span>
            </div>
            <h2 className="apple-heading text-primary-deep">
              القيم والمبادئ<br className="hidden md:block" />
              <span className="text-gradient-mixed">الحاكمة لعملنا</span>
            </h2>
            <p className="text-sm text-muted-grey leading-relaxed max-w-xl mx-auto">
              نلتزم بتقديم مخرجات عمل تعكس مهنيتنا العالية وتمنح عملاءنا حديقة تتحدث عن الجودة والجمال.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-charcoal/5 shadow-apple hover:shadow-apple-lg transition-all duration-500 hover:-translate-y-1 space-y-4 group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <v.icon className="w-6 h-6 text-botanical" />
                </div>
                <h3 className="text-base font-black text-primary-deep">{v.title}</h3>
                <p className="text-xs text-muted-grey leading-relaxed text-justify">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission - Apple-style */}
      <section className="bg-white py-24 md:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-right">

          <div className="bg-warm-white p-8 md:p-10 rounded-3xl border border-charcoal/5 shadow-apple hover:shadow-apple-lg transition-all duration-500 space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-botanical/10 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-botanical/40 to-water-blue/20 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-botanical" />
              </div>
              <h3 className="text-lg font-black text-primary-deep">رؤيتنا</h3>
              <p className="text-sm text-muted-grey leading-relaxed text-justify mt-3">
                أن نكون المرجعية الأولى في الرياض لتصميم وتنسيق الفراغات الخارجية التي تعزز رفاهية العيش اليومي للأسرة السعودية، وتقديم نموذج يُحتذى به في اللاندسكيب المستدام بيئياً والمتميز معمارياً.
              </p>
            </div>
          </div>

          <div className="bg-warm-white p-8 md:p-10 rounded-3xl border border-charcoal/5 shadow-apple hover:shadow-apple-lg transition-all duration-500 space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-water-blue/10 to-transparent rounded-full blur-2xl -translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-water-blue/40 to-botanical/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-water-blue" />
              </div>
              <h3 className="text-lg font-black text-primary-deep">رسالتنا</h3>
              <p className="text-sm text-muted-grey leading-relaxed text-justify mt-3">
                تحويل المساحات الخارجية إلى واحات تجمع جمال الطبيعة مع راحة Outdoor Living، باستخدام مواد عالية الجودة وتمديدات مائية ذكية، مدعومين بخبرتنا الدقيقة بالتربة والمناخ المحلي للرياض.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Direct CTA - Apple-style */}
      <section className="bg-primary-deep text-warm-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-botanical/20 to-water-blue/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-water-blue/10 to-botanical/20 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="apple-title text-white">
              هل ترغب بمعاينة مساحتك الخارجية<br />
              <span className="text-gradient-mixed bg-gradient-to-r from-fresh-green via-water-blue to-soft-blue bg-clip-text text-transparent">
                وتصميمها؟
              </span>
            </h2>
            <p className="text-base text-warm-white/80 max-w-xl mx-auto leading-relaxed">
              تواصل معنا اليوم. سنقوم بإرسال أحد مهندسينا لتفحص الموقع وتقديم أنسب النصائح والحلول المجانية.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="btn-apple bg-gradient-to-r from-botanical to-water-blue text-white shadow-lg hover:shadow-water-glow"
            >
              <span>احجز موعد معاينة مجاني</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <a
              href="tel:0557401773"
              className="inline-flex items-center gap-2 text-warm-white/70 hover:text-white font-bold transition-colors group"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-botanical/40 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4 text-water-blue" />
              </div>
              <span className="dir-ltr text-lg">0557401773</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}