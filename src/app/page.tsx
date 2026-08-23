"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Phone, MessageCircle, ChevronDown, TreePalm, Droplet, Sun, Compass } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState('الكل');

  const coreServices = [
    {
      title: 'تنسيق حدائق الفلل بالرياض',
      englishTitle: 'Garden Landscaping',
      desc: 'تصميم وتنسيق حدائق منزلية وفلل عصرية بأساليب تحاكي الفخامة المعمارية.',
      image: '/images/service-garden-design.jpg',
      slug: 'garden-landscaping-riyadh'
    },
    {
      title: 'تنسيق أسطح المنازل والروف بالنرجس',
      englishTitle: 'Rooftop Spaces',
      desc: 'تحويل الأسطح إلى حدائق معلقة وجلسات راقية مع مراعاة العزل الكامل للحرارة والرطوبة.',
      image: '/images/statement-design.jpg',
      slug: 'rooftop-landscaping'
    },
    {
      title: 'توريد وتركيب الثيل الصناعي',
      englishTitle: 'Artificial Grass',
      desc: 'ثيل صناعي عالي الكثافة مقاوم للظروف المناخية مع خيوط ناعمة وتصريف مائي ممتاز.',
      image: '/images/service-artificial-grass.jpg',
      slug: 'artificial-grass'
    },
    {
      title: 'تركيب الثيل الطبيعي بلدي وهولندي',
      englishTitle: 'Natural Grass',
      desc: 'زراعة العشب الطبيعي المقاوم للحرارة مع تجهيز مسبق ومثالي للتربة الزراعية.',
      image: '/images/service-natural-grass.jpg',
      slug: 'natural-grass'
    },
    {
      title: 'تركيب شلالات ونوافير منزلية',
      englishTitle: 'Waterfalls & Fountains',
      desc: 'تصاميم شلالات جدارية ونوافير مائية عصرية مع إضاءات LED وتجارب صوتية هادئة.',
      image: '/images/project-3.jpg',
      slug: 'waterfalls-fountains'
    },
    {
      title: 'شبكات ري أوتوماتيكية ذكية',
      englishTitle: 'Automatic Irrigation',
      desc: 'أنظمة ري آلية تحت الأرض تساعد على تنظيم وحساب استهلاك المياه بكفاءة ممتازة.',
      image: '/images/service-irrigation.jpg',
      slug: 'automatic-irrigation'
    }
  ];

  const galleryItems = [
    { title: 'حديقة فيلا سكنية مودرن', category: 'حدائق', image: '/images/project-1.jpg' },
    { title: 'جلسة برجولا خشبية لروف فيلا بالنرجس', category: 'جلسات خارجية', image: '/images/project-5.jpg' },
    { title: 'شلال جداري مع إضاءة ليلية عصرية', category: 'شلالات ونوافير', image: '/images/project-3.jpg' },
    { title: 'عشب صناعي لمدخل فيلا بالياسمين', category: 'ثيل', image: '/images/project-2.jpg' },
    { title: 'ممر حجرى محاط بالنباتات والثيل الطبيعي', category: 'حدائق', image: '/images/project-6.jpg' },
    { title: 'تنسيق سطح فيلا سكنية مع برجولا حديد', category: 'مساحات خارجية', image: '/images/project-4.jpg' }
  ];

  const galleryFilters = ['الكل', 'حدائق', 'جلسات خارجية', 'شلالات ونوافير', 'ثيل', 'مساحات خارجية'];

  const filteredGallery = activeGalleryFilter === 'الكل'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeGalleryFilter);

  const processSteps = [
    { num: '01', title: 'الاستشارة وفهم الاحتياج', desc: 'مناقشة أفكار العميل ومتطلبات المساحة وتحديد الميزانية المناسبة للمواد والتنفيذ.' },
    { num: '02', title: 'معاينة وفحص المساحة', desc: 'يقوم مهندسونا بزيارة الموقع وأخذ القياسات بدقة ودراسة زوايا الشمس والرياح والتربة.' },
    { num: '03', title: 'التصميم الهندسي المبتكر', desc: 'رسم تصور معماري ثلاثي الأبعاد يوضح تقسيم الجلسات ومواقع النباتات والشلال والري.' },
    { num: '04', title: 'اختيار العناصر والمواد', desc: 'اختيار النباتات الصديقة لبيئة الرياض، نوعية الحجر والمظلات والعشب ومستلزمات المياه.' },
    { num: '05', title: 'التنفيذ والتركيب الاحترافي', desc: 'بدء الأعمال الإنشائية والزراعية والري تحت إشراف هندسي وتطبيق المعايير الدقيقة.' },
    { num: '06', title: 'اللمسات النهائية والمتابعة', desc: 'فحص الأنظمة التشغيلية وتسليم المشروع للعميل جاهزاً تماماً مع تقديم إرشادات صيانة.' }
  ];

  const faqs = [
    { q: 'ما هي تكلفة تنسيق حدائق الفلل بالرياض؟', a: 'تعتمد التكلفة الإجمالية بشكل كامل على المساحة الفعلية ونوع المواد المختارة مثل نوع الثيل (طبيعي أم صناعي)، وتواجد عناصر المياه كالشلالات والنوافير والمظلات والبرجولات. نقدم مقايسات شفافة ومفصلة لكل عنصر قبل البدء.' },
    { q: 'هل تقدمون حلولاً للحدائق الموفرة لاستهلاك المياه؟', a: 'نعم، نركز على استدامة المياه في الرياض عبر تركيب شبكات ري أوتوماتيكية ذكية وتفضيل نباتات صحراوية تتلاءم مع درجات الحرارة المرتفعة، بجانب تركيب الثيل الصناعي الفاخر الذي لا يحتاج لعمليات ري مستمرة.' },
    { q: 'ما هي مميزات العشب الصناعي مقارنة بالطبيعي؟', a: 'العشب الصناعي لا يحتاج لقص أو ري دوري وهو خيار ممتاز للممرات والأسطح والمناطق المظللة. بينما يمنح العشب الطبيعي أثراً طبيعياً ورطوبة للمكان ويحتاج لصيانة وشبكة ري دورية مستدامة.' },
    { q: 'كم تستغرق عملية تنسيق حديقة فيلا كاملة؟', a: 'تستغرق الأعمال ما بين 5 إلى 15 يوماً عمل بالمتوسط، اعتماداً على حجم الأعمال الترابية والخرسانية وتمديدات الري وبناء الشلالات وتركيب المظلات.' }
  ];

  const neighborhoods = [
    'النرجس', 'الياسمين', 'الصحافة', 'العارض', 'الملقا', 'حطين', 'القيروان', 'النخيل',
    'الغدير', 'الورود', 'الرحمانية', 'الرائد', 'المحمدية', 'العليا', 'السليمانية', 'المروج'
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-primary-deep text-warm-white overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-garden-path.jpg"
            alt="تنسيق حدائق فاخرة في الرياض"
            className="w-full h-full object-cover opacity-35 object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-8 space-y-6 text-right">
            <div className="inline-flex items-center gap-2 bg-botanical/20 border border-botanical/30 px-4 py-1.5 rounded-full text-xs font-bold text-fresh-green">
              <span>البيت الأخضر - مهندسو الفراغات الخارجية</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight text-white">
              تصميم المساحات الخارجية <br />
              <span className="text-fresh-green">التي تستحقها فيلتك</span>
            </h1>

            <p className="text-lg md:text-xl text-warm-white/80 max-w-2xl leading-relaxed">
              حلول متكاملة لتنسيق الحدائق والمسطحات الخارجية في الرياض. ندمج بين الهندسة المعمارية واللمسة الطبيعية بما يلائم طقس الرياض ويرشّد استهلاك المياه.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="bg-primary-deep hover:bg-botanical border border-botanical/20 text-warm-white font-bold px-8 py-4 rounded-full text-sm hover:scale-[1.02] transition-all duration-300"
              >
                اطلب استشارتك المجانية
              </Link>
              <a
                href="https://wa.me/966557401773"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-sm transition-colors border border-white/15"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>تواصل معنا واتساب</span>
              </a>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-warm-white/60 font-semibold border-t border-white/10 max-w-xl">
              <span>تنسيق حدائق</span>
              <span>•</span>
              <span>حدائق أسطح</span>
              <span>•</span>
              <span>شلالات ونوافير</span>
              <span>•</span>
              <span>شبكات ري ذكية</span>
              <span>•</span>
              <span>ثيل صناعي وطبيعي</span>
            </div>
          </div>
          
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 animate-bounce opacity-80 cursor-pointer">
          <span className="text-xs text-warm-white/60 font-bold">اسحب للأسفل</span>
          <ChevronDown className="w-4 h-4 text-warm-white/60" />
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="bg-white py-20 md:py-28 border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-botanical font-bold text-xs uppercase tracking-widest block border-r-2 border-botanical pr-3">
              رؤية خضراء مستدامة
            </span>
            
            <h2 className="text-3xl md:text-4xl font-black text-primary-deep leading-tight">
              حدائق البيت الأخضر تجمع بين الجمال التصميمي والوظيفة العملية
            </h2>

            <p className="text-muted-grey text-base leading-relaxed text-justify">
              تأسست شركة البيت الأخضر (Green House) في الرياض كاستوديو تصميم وتنفيذ فراغات خارجية يلبي تطلعات مالكي الفلل السكنية الباحثين عن التميز. نؤمن بأن الحديقة ليست مجرد مساحة ترابية فارغة، بل هي متنفس طبيعي يرفع من قيمة منزلك الجمالية والمالية.
            </p>

            <p className="text-muted-grey text-base leading-relaxed text-justify">
              نحن نعمل بتفانٍ تام لتقديم مخططات متزنة هندسياً، مع الاهتمام بالعزل المائي لأسطح الفلل، واختيار أنواع الشلالات الجدارية المناسبة، وتركيب ثيل ممتاز يتحمل درجات حرارة الصيف، وتثبيت شبكات ري أوتوماتيكية توفر الوقت والمياه.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-charcoal/5">
              <img
                src="/images/statement-design.jpg"
                alt="تصميم حدائق فلل الرياض"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-warm-white rounded-3xl border border-charcoal/5 -z-10" />
          </div>

        </div>
      </section>

      {/* 3. CORE SERVICES */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-right">
            <div className="space-y-3">
              <span className="text-botanical font-bold text-xs uppercase tracking-widest block border-r-2 border-botanical pr-3">
                الخدمات الأساسية
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-primary-deep">
                حلول مدروسة لتنسيق مساحتك الخارجية
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary-deep hover:text-botanical font-bold text-sm transition-colors self-start md:self-end"
            >
              <span>استكشف جميع الخدمات (13 خدمة)</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl border border-charcoal/5 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-botanical tracking-widest block uppercase font-latin">
                      {service.englishTitle}
                    </span>
                    <h3 className="text-primary-deep font-black text-lg leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted-grey text-xs leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary-deep group-hover:text-botanical transition-colors"
                  >
                    <span>تفاصيل الخدمة والمواصفات</span>
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. LANDSCAPE VISION */}
      <section className="bg-white py-20 md:py-28 border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-charcoal/5">
              <img
                src="/images/statement-maintain.jpg"
                alt="أعمال اللاندسكيب في الفلل"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-warm-white rounded-3xl border border-charcoal/5 -z-10" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-botanical font-bold text-xs uppercase tracking-widest block border-r-2 border-botanical pr-3">
              رؤيتنا الهندسية
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-primary-deep">
              كيف يساهم تنسيق المساحات الخارجية في تحسين جودة حياتك؟
            </h2>

            <p className="text-muted-grey text-base leading-relaxed text-justify">
              تنسيق الحدائق هو استثمار هندسي طويل الأجل يعيد تشكيل مساحة المعيشة اليومية لعائلتك. نركز في البيت الأخضر على تحقيق التوازن المثالي في 5 جوانب رئيسية:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-botanical/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-botanical" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-primary-deep mb-1">جمال المنزل والقيمة المعمارية</h4>
                  <p className="text-xs text-muted-grey">تناغم الخطوط النباتية مع واجهة الفيلا وتكميل تفاصيلها.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-botanical/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-botanical" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-primary-deep mb-1">الراحة والاسترخاء النفسي</h4>
                  <p className="text-xs text-muted-grey">صوت خرير مياه الشلالات يخلق جواً من الهدوء ويبدد الضوضاء.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-botanical/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-botanical" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-primary-deep mb-1">الاستخدام اليومي الأمثل</h4>
                  <p className="text-xs text-muted-grey">تقسيم ذكي للفراغات يشمل مناطق جلوس وشواء وممرات واسعة.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-botanical/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-botanical" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-primary-deep mb-1">الأجواء والترطيب الصيفي</h4>
                  <p className="text-xs text-muted-grey">تساهم المسطحات الخضراء والري المنظم في خفض حرارة الهواء.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. RIYADH CLIMATE EXPERTISE */}
      <section className="bg-primary-deep text-warm-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-16">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-fresh-green font-bold text-xs uppercase tracking-widest block">
              خبير المناخ في الرياض
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              تنفيذ هندسي يراعي مناخ الرياض الحار
            </h2>
            <p className="text-sm md:text-base text-warm-white/70 leading-relaxed">
              المناخ الصحراوي الجاف للرياض يحتاج إلى ممارسات زراعية وهندسية دقيقة لضمان استدامة حدائق الفلل، وهذا هو محور تميزنا الحقيقي.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
            
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-botanical/30 flex items-center justify-center text-fresh-green">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-white">تحمل شمس الصيف الحارة</h3>
              <p className="text-xs text-warm-white/75 leading-relaxed">
                ننتقي بعناية أصناف النباتات والزهور التي تعشق الشمس وتتحمل جفاف الهواء ودرجات الحرارة التي تتجاوز 45 مئوية.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-botanical/30 flex items-center justify-center text-fresh-green">
                <Droplet className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-white">ترشيد وري ذكي</h3>
              <p className="text-xs text-warm-white/75 leading-relaxed">
                تصميم دوائر الري بالتنقيط والرذاذ والرشاشات المدفونة لتوزيع المياه بكفاءة دون تبخر زائد أو إهدار.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-botanical/30 flex items-center justify-center text-fresh-green">
                <TreePalm className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-white">خيارات التربة المثالية</h3>
              <p className="text-xs text-warm-white/75 leading-relaxed">
                تعديل خواص التربة الرملية بالرياض بخلط البيتموس والأسمدة العضوية المعقمة لضمان تغذية عميقة للجذور.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-botanical/30 flex items-center justify-center text-fresh-green">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-white">متانة المواد المستخدمة</h3>
              <p className="text-xs text-warm-white/75 leading-relaxed">
                مظلات وبرجولات مصنوعة من أخشاب معالجة ومعادن مطلية حرارياً ومقاومة للصدأ والتشقق والتآكل بفعل الشمس.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. PROCESS */}
      <section className="bg-white py-20 md:py-28 border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-16">
          
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-botanical font-bold text-xs uppercase tracking-widest block">
              آلية العمل والخطوات
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary-deep">
              خطوات تنفيذ واضحة واحترافية
            </h2>
            <p className="text-sm text-muted-grey">
              نلتزم بمنهجية عمل منظمة تضمن دقة التفاصيل وجودة المخرجات من اللقاء الأول وحتى تسليم المساحة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-right">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-warm-white border border-charcoal/5 p-8 rounded-3xl flex flex-col gap-4 relative overflow-hidden group hover:bg-white hover:shadow-card transition-all duration-300"
              >
                <span className="text-5xl font-black text-charcoal/10 group-hover:text-botanical/20 transition-colors absolute left-6 top-6">
                  {step.num}
                </span>
                <h3 className="text-lg font-black text-primary-deep mt-4">{step.title}</h3>
                <p className="text-xs text-muted-grey leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. PROJECT GALLERY */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center space-y-4 mb-12">
            <span className="text-botanical font-bold text-xs uppercase tracking-widest block">
              معرض الأعمال والملهمات
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary-deep">
              تصاميم ملهمة للفراغات الخارجية والحدائق
            </h2>
            <p className="text-sm text-muted-grey">
              استكشف جمال وتناسق الأفكار التي نطبقها في حدائق الفلل والأسطح بالرياض.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
              {galleryFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveGalleryFilter(filter)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    activeGalleryFilter === filter
                      ? 'bg-primary-deep text-warm-white shadow-sm'
                      : 'bg-white text-muted-grey border border-charcoal/5 hover:bg-charcoal/5'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-charcoal/5 shadow-sm bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-right" style={{ direction: 'rtl' }}>
                  <span className="text-xs text-fresh-green font-bold mb-1 uppercase tracking-widest">{item.category}</span>
                  <h4 className="text-sm font-black text-white leading-tight">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center bg-white text-primary-deep font-bold px-8 py-4 rounded-full border border-charcoal/5 text-sm hover:bg-charcoal/[0.02] shadow-sm transition-all"
            >
              عرض معرض الصور الكامل
            </Link>
          </div>

        </div>
      </section>

      {/* 8. WHY GREEN HOUSE */}
      <section className="bg-white py-20 md:py-28 border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-botanical font-bold text-xs uppercase tracking-widest block border-r-2 border-botanical pr-3">
              لماذا البيت الأخضر؟
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-primary-deep">
              مواصفات تضمن لك الراحة والجمال المستدام
            </h2>

            <p className="text-muted-grey text-base leading-relaxed text-justify">
              تختلف شركة البيت الأخضر عن غيرها من مشاتل الحدائق العادية؛ فنحن ندمج التفكير الهندسي المعماري مع الخبرة الزراعية لنمنح الفلل تصاميم تعيش لسنوات دون مشاكل.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-botanical/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-botanical" />
                </div>
                <p className="text-sm text-charcoal font-semibold">
                  تصميم وتوزيع هندسي متزن يستغل كل زاوية وارتداد بالفيلا.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-botanical/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-botanical" />
                </div>
                <p className="text-sm text-charcoal font-semibold">
                  استخدام عشب صناعي حاصل على شهادات الجودة ومقاوم لأشعة الشمس فوق البنفسجية.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-botanical/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-botanical" />
                </div>
                <p className="text-sm text-charcoal font-semibold">
                  تجهيز مسبق ودقيق لأسطح الفلل لمنع أي تسرب للمياه بعد الزراعة.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-botanical/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-botanical" />
                </div>
                <p className="text-sm text-charcoal font-semibold">
                  متابعة مستمرة وصيانة دورية لضمان نمو النباتات واستدامة شبكة الري والشلالات.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-charcoal/5">
              <img
                src="/images/statement-choose.jpg"
                alt="لماذا تختار البيت الأخضر"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-warm-white rounded-3xl border border-charcoal/5 -z-10" />
          </div>

        </div>
      </section>

      {/* 9. SERVICE AREAS */}
      <section className="bg-warm-white py-20 md:py-28 border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">
          
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-botanical font-bold text-xs uppercase tracking-widest block">
              أحياء الرياض المغطاة
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary-deep">
              نغطي مختلف أحياء ومناطق الرياض
            </h2>
            <p className="text-sm text-muted-grey leading-relaxed">
              نصل إليكم في أي حي بمدينة الرياض لمعاينة المساحة وتقديم الاستشارة الهندسية والتصميم المناسب.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {neighborhoods.map((hood, idx) => (
              <div
                key={idx}
                className="bg-white border border-charcoal/5 py-4 px-3 rounded-2xl text-center shadow-sm text-xs font-bold text-charcoal/80 hover:border-botanical hover:text-primary-deep transition-all cursor-default"
              >
                حي {hood}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="bg-white py-20 md:py-28 border-b border-charcoal/5">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-botanical font-bold text-xs uppercase tracking-widest block">
              الأسئلة الشائعة
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary-deep">
              إجابات على استفساراتكم حول تنسيق الحدائق بالرياض
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-warm-white p-6 md:p-8 rounded-3xl border border-charcoal/5 text-right space-y-3"
              >
                <h3 className="text-sm md:text-base font-black text-primary-deep flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-botanical mt-2 flex-shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-muted-grey leading-relaxed pl-5 pr-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/faq"
              className="text-sm font-bold text-primary-deep hover:text-botanical transition-colors"
            >
              شاهد جميع الأسئلة الشائعة
            </Link>
          </div>

        </div>
      </section>

      {/* 11. FINAL CTA & CONTACT FORM */}
      <section className="bg-warm-white py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-primary-deep leading-tight">
              حوّل مساحتك الخارجية <br />
              <span className="text-botanical">إلى مكان تحب أن تعيش فيه</span>
            </h2>
            <p className="text-base text-muted-grey leading-relaxed text-justify">
              ابدأ اليوم بمشاركة رؤيتك معنا. مهندسو البيت الأخضر مستعدون للتجاوب وتطوير مخطط متوازن يجمع الرقي والجمال والاستدامة لفيلتك بالرياض.
            </p>
            
            <div className="flex flex-col gap-4 text-charcoal/80">
              <a href="tel:0557401773" className="flex items-center gap-3 hover:text-primary-deep transition-colors w-fit">
                <Phone className="w-5 h-5 text-botanical" />
                <span className="dir-ltr text-lg font-black">0557401773</span>
              </a>
              <a href="https://wa.me/966557401773" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary-deep transition-colors w-fit">
                <MessageCircle className="w-5 h-5 text-botanical" />
                <span className="dir-ltr text-lg font-black">+966557401773</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
