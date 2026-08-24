"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Phone, MessageCircle, ChevronDown, TreePalm, Droplet, Sun, Compass, Leaf, Sparkles, ArrowUpRight, Star, Shield, Zap, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState('الكل');

  const coreServices = [
    {
      title: 'تنسيق حدائق الفلل بالرياض',
      englishTitle: 'Garden Landscaping',
      desc: 'تصميم وتنسيق حدائق منزلية وفلل عصرية بأساليب تحاكي الفخامة المعمارية.',
      image: '/images/service-garden-design.jpg',
      slug: 'garden-landscaping-riyadh',
      gradient: 'from-primary-deep to-botanical'
    },
    {
      title: 'تنسيق أسطح المنازل والروف بالنرجس',
      englishTitle: 'Rooftop Spaces',
      desc: 'تحويل الأسطح إلى حدائق معلقة وجلسات راقية مع مراعاة العزل الكامل للحرارة والرطوبة.',
      image: '/images/statement-design.jpg',
      slug: 'rooftop-landscaping',
      gradient: 'from-botanical to-fresh-green'
    },
    {
      title: 'توريد وتركيب الثيل الصناعي',
      englishTitle: 'Artificial Grass',
      desc: 'ثيل صناعي عالي الكثافة مقاوم للظروف المناخية مع خيوط ناعمة وتصريف مائي ممتاز.',
      image: '/images/service-artificial-grass.jpg',
      slug: 'artificial-grass',
      gradient: 'from-water-blue to-soft-blue'
    },
    {
      title: 'تركيب الثيل الطبيعي بلدي وهولندي',
      englishTitle: 'Natural Grass',
      desc: 'زراعة العشب الطبيعي المقاوم للحرارة مع تجهيز مسبق ومثالي للتربة الزراعية.',
      image: '/images/service-natural-grass.jpg',
      slug: 'natural-grass',
      gradient: 'from-primary-deep to-botanical'
    },
    {
      title: 'تركيب شلالات ونوافير منزلية',
      englishTitle: 'Waterfalls & Fountains',
      desc: 'تصاميم شلالات جدارية ونوافير مائية عصرية مع إضاءات LED وتجارب صوتية هادئة.',
      image: '/images/project-3.jpg',
      slug: 'waterfalls-fountains',
      gradient: 'from-water-blue to-soft-blue'
    },
    {
      title: 'شبكات ري أوتوماتيكية ذكية',
      englishTitle: 'Automatic Irrigation',
      desc: 'أنظمة ري آلية تحت الأرض تساعد على تنظيم وحساب استهلاك المياه بكفاءة ممتازة.',
      image: '/images/service-irrigation.jpg',
      slug: 'automatic-irrigation',
      gradient: 'from-botanical to-fresh-green'
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

  const stats = [
    { number: '+150', label: 'مشروع مكتمل', icon: Star },
    { number: '12+', label: 'سنوات خبرة', icon: Shield },
    { number: '99%', label: 'عملاء راضون', icon: Sparkles },
    { number: '+30', label: 'حي في الرياض', icon: MapPin },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">

      {/* =============================================
          1. HERO SECTION - Apple-style cinematic
      ============================================= */}
<section className="relative min-h-screen flex items-center bg-charcoal text-warm-white overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-charcoal/10 to-charcoal/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-16">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-8 space-y-6 text-right">

              {/* Wellness badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/25 px-5 py-2 rounded-full text-xs font-bold text-leaf animate-fade-in-up">
                <Leaf className="w-3.5 h-3.5" />
                <span>البيت الأخضر - تصاميم خضراء مستدامة</span>
              </div>

              {/* Wellness headline */}
              <h1 className="text-4xl md:text-5xl font-black leading-tight text-white animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                مساحة خارجية<br />
                <span className="bg-gradient-to-r from-leaf via-cream to-ember bg-clip-text text-transparent">
                  تستحق فيلتك
                </span>
              </h1>

              <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                حلول طبيعية وتصاميم مستدامة للحدائق في الرياض. ندمج بين الجمال المعماري والمسؤولية البيئية لترشيد استهلاك المياه ونיצור بيئة صحية لفرحك.
              </p>

              {/* Wellness dual buttons */}
              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-leaf to-cream text-charcoal shadow-sm hover:shadow-leaf-glow"
                >
                  <span>طلب استشارة مجانية</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/966557401773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm text-charcoal border border-white/30 hover:bg-white/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>تواصل واتساب</span>
                </a>
              </div>

              {/* Natural service tags */}
              <div className="pt-6 flex flex-wrap items-center gap-3 gap-y-2 text-xs font-medium text-charcoal/70 border-t border-white/15 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <span>تنسيق حدائق</span>
                <span className="w-1 h-1 rounded-full bg-cream" />
                <span>أسطح خضراء</span>
                <span className="w-1 h-1 rounded-full bg-cream" />
                <span>شلالات مياه</span>
                <span className="w-1 h-1 rounded-full bg-cream" />
                <span>ري ذكي</span>
                <span className="w-1 h-1 rounded-full bg-cream" />
                <span>ثيل طبيعي وصناعي</span>
              </div>
            </div>

            {/* Wellness stats */}
            <div className="lg:col-span-4 lg:grid grid-cols-2 gap-4 lg:gap-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center transition-all duration-300 hover:bg-white/15">
                    <Icon className="w-5 h-5 text-leaf mx-auto mb-2" />
                    <div className="text-2xl font-black text-white number-display">{stat.number}</div>
                    <div className="text-xs text-white/60 font-medium mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Subtle scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">اسحب للأسفل</span>
          <div className="w-4 h-6 rounded-full border border-white/20 flex items-start justify-center pt-1">
            <div className="w-1 h-2 rounded-full bg-white/50" />
          </div>
        </div>
      </section>

      {/* =============================================
           2. INTRODUCTION - Wellness editorial
       ============================================= */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-7 space-y-8">
<div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-leaf font-bold text-xs uppercase tracking-[0.2em]">
                <span className="w-8 h-px bg-leaf/50" />
                <span>رؤية خضراء مستدامة</span>
              </div>

              <h2 className="text-primary-deep">
                حدائق البيت الأخضر تجمع بين<br className="hidden md:block" />
                <span className="bg-gradient-to-r from-leaf via-cream to-ember bg-clip-text text-transparent">
                  الجمال التصميمي والوظيفة العملية
                </span>
              </h2>

              <p className="text-charcoal/70 text-base leading-relaxed text-justify max-w-xl">
                تأسست شركة البيت الأخضر (Green House) في الرياض كاستوديو تصميم وتنفيذ فراغات خارجية يلبي تطلعات مالكي الفلل السكنية الباحثين عن التميز. نؤمن بأن الحديقة ليست مجرد مساحة ترابية فارغة، بل هي متنفس طبيعي يرفع من قيمة منزلك الجمالية والمالية.
              </p>

              <p className="text-charcoal/70 text-base leading-relaxed text-justify max-w-xl">
                نحن نعمل بتفانٍ تام لتقديم مخططات متزنة هندسياً، مع الاهتمام بالعزل المائي لأسطح الفلل، واختيار أنواع الشلالات الجدارية المناسبة، وتركيب ثيل ممتاز يتحمل درجات حرارة الصيف، وتثبيت شبكات ري أوتوماتيكية توفر الوقت والمياه.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-deep hover:text-botanical transition-all duration-300 group"
            >
              <span>تعرف علينا أكثر</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-apple-lg border border-charcoal/5 img-container">
              <img
                src="/images/statement-design.jpg"
                alt="تصميم حدائق فلل الرياض"
                className="w-full h-full object-cover img-premium"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-botanical/10 to-water-blue/10 rounded-3xl border border-charcoal/5 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-tr from-water-blue/10 to-botanical/10 rounded-full -z-10 blur-sm" />
          </div>

        </div>
      </section>

      {/* =============================================
          3. CORE SERVICES - Apple-style grid
      ============================================= */}
      <section className="bg-warm-white py-28 md:py-36 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-right">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-botanical font-bold text-xs uppercase tracking-[0.2em]">
                <span className="w-8 h-px bg-botanical/50" />
                <span>الخدمات الأساسية</span>
              </div>
              <h2 className="apple-heading text-primary-deep">
                حلول مدروسة لتنسيق<br className="hidden md:block" />
                <span className="text-gradient-mixed">مساحتك الخارجية</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary-deep hover:text-botanical font-bold text-sm transition-all duration-300 self-start md:self-end group"
            >
              <span>استكشف جميع الخدمات (13 خدمة)</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl border border-charcoal/5 overflow-hidden shadow-apple hover:shadow-apple-xl transition-all duration-500 flex flex-col h-full hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Gradient accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right`} />
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6">
                  <div className="space-y-3">
                    <span className="text-[11px] font-bold tracking-widest block uppercase font-latin">
                      <span className="text-gradient-mixed">{service.englishTitle}</span>
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
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary-deep group-hover:text-botanical transition-all duration-300"
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

      {/* =============================================
          4. LANDSCAPE VISION - Apple-style split layout
      ============================================= */}
      <section className="bg-white py-28 md:py-36 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-apple-lg border border-charcoal/5 img-container">
              <img
                src="/images/statement-maintain.jpg"
                alt="أعمال اللاندسكيب في الفلل"
                className="w-full h-full object-cover img-premium"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-water-blue/10 to-botanical/10 rounded-3xl border border-charcoal/5 -z-10" />
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-botanical font-bold text-xs uppercase tracking-[0.2em]">
                <span className="w-8 h-px bg-botanical/50" />
                <span>رؤيتنا الهندسية</span>
              </div>

              <h2 className="apple-heading text-primary-deep">
                كيف يساهم تنسيق المساحات الخارجية<br className="hidden md:block" />
                <span className="text-gradient-mixed">في تحسين جودة حياتك؟</span>
              </h2>

              <p className="text-muted-grey text-base leading-relaxed text-justify">
                تنسيق الحدائق هو استثمار هندسي طويل الأجل يعيد تشكيل مساحة المعيشة اليومية لعائلتك. نركز في البيت الأخضر على تحقيق التوازن المثالي في 5 جوانب رئيسية:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { title: 'جمال المنزل والقيمة المعمارية', desc: 'تناغم الخطوط النباتية مع واجهة الفيلا وتكميل تفاصيلها.' },
                { title: 'الراحة والاسترخاء النفسي', desc: 'صوت خرير مياه الشلالات يخلق جواً من الهدوء ويبدد الضوضاء.' },
                { title: 'الاستخدام اليومي الأمثل', desc: 'تقسيم ذكي للفراغات يشمل مناطق جلوس وشواء وممرات واسعة.' },
                { title: 'الأجواء والترطيب الصيفي', desc: 'تساهم المسطحات الخضراء والري المنظم في خفض حرارة الهواء.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 p-4 rounded-2xl bg-warm-white/50 hover:bg-warm-white transition-all duration-300">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-botanical to-water-blue/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-primary-deep mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-grey">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =============================================
          5. RIYADH CLIMATE EXPERTISE - Apple-style dark section
      ============================================= */}
      <section className="bg-primary-deep text-warm-white py-28 md:py-36 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-botanical/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-water-blue/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-16 relative z-10">

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-fresh-green font-bold text-xs uppercase tracking-[0.2em]">
              <span className="w-8 h-px bg-fresh-green/50" />
              <span>خبير المناخ في الرياض</span>
            </div>
            <h2 className="apple-title text-white">
              تنفيذ هندسي يراعي<br />
              <span className="text-gradient-mixed bg-gradient-to-r from-fresh-green via-water-blue to-soft-blue bg-clip-text text-transparent">
                مناخ الرياض الحار
              </span>
            </h2>
            <p className="text-base text-warm-white/60 leading-relaxed max-w-2xl mx-auto">
              المناخ الصحراوي الجاف للرياض يحتاج إلى ممارسات زراعية وهندسية دقيقة لضمان استدامة حدائق الفلل، وهذا هو محور تميزنا الحقيقي.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-right">

            <div className="glass-card-dark p-8 rounded-3xl space-y-4 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-botanical/40 to-water-blue/20 flex items-center justify-center text-fresh-green group-hover:scale-110 transition-transform duration-300">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-white">تحمل شمس الصيف الحارة</h3>
              <p className="text-xs text-warm-white/60 leading-relaxed">
                ننتقي بعناية أصناف النباتات والزهور التي تعشق الشمس وتتحمل جفاف الهواء ودرجات الحرارة التي تتجاوز 45 مئوية.
              </p>
            </div>

            <div className="glass-card-dark p-8 rounded-3xl space-y-4 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-water-blue/40 to-botanical/20 flex items-center justify-center text-water-blue group-hover:scale-110 transition-transform duration-300">
                <Droplet className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-white">ترشيد وري ذكي</h3>
              <p className="text-xs text-warm-white/60 leading-relaxed">
                تصميم دوائر الري بالتنقيط والرذاذ والرشاشات المدفونة لتوزيع المياه بكفاءة دون تبخر زائد أو إهدار.
              </p>
            </div>

            <div className="glass-card-dark p-8 rounded-3xl space-y-4 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-botanical/40 to-water-blue/20 flex items-center justify-center text-fresh-green group-hover:scale-110 transition-transform duration-300">
                <TreePalm className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-white">خيارات التربة المثالية</h3>
              <p className="text-xs text-warm-white/60 leading-relaxed">
                تعديل خواص التربة الرملية بالرياض بخلط البيتموس والأسمدة العضوية المعقمة لضمان تغذية عميقة للجذور.
              </p>
            </div>

            <div className="glass-card-dark p-8 rounded-3xl space-y-4 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-water-blue/40 to-botanical/20 flex items-center justify-center text-water-blue group-hover:scale-110 transition-transform duration-300">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-white">متانة المواد المستخدمة</h3>
              <p className="text-xs text-warm-white/60 leading-relaxed">
                مظلات وبرجولات مصنوعة من أخشاب معالجة ومعادن مطلية حرارياً ومقاومة للصدأ والتشقق والتآكل بفعل الشمس.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =============================================
          6. PROCESS - Apple-style timeline
      ============================================= */}
      <section className="bg-white py-28 md:py-36 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-16">

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-botanical font-bold text-xs uppercase tracking-[0.2em]">
              <span className="w-8 h-px bg-botanical/50" />
              <span>آلية العمل والخطوات</span>
            </div>
            <h2 className="apple-heading text-primary-deep">
              خطوات تنفيذ واضحة<br className="hidden md:block" />
              <span className="text-gradient-mixed">واحترافية</span>
            </h2>
            <p className="text-sm text-muted-grey max-w-xl mx-auto">
              نلتزم بمنهجية عمل منظمة تضمن دقة التفاصيل وجودة المخرجات من اللقاء الأول وحتى تسليم المساحة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-right">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-warm-white border border-charcoal/5 p-8 rounded-3xl flex flex-col gap-4 relative overflow-hidden group hover:bg-white hover:shadow-apple-lg transition-all duration-500 hover:-translate-y-1"
              >
                {/* Number watermark */}
                <span className="text-6xl font-black absolute left-4 top-4 text-charcoal/[0.04] group-hover:text-botanical/10 transition-colors duration-500 number-display">
                  {step.num}
                </span>

                {/* Step indicator */}
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-botanical/20 to-water-blue/10 flex items-center justify-center text-botanical font-black text-sm">
                  {step.num}
                </div>

                <h3 className="text-lg font-black text-primary-deep">{step.title}</h3>
                <p className="text-xs text-muted-grey leading-relaxed">{step.desc}</p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-botanical to-water-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =============================================
          7. PROJECT GALLERY - Apple-style showcase
      ============================================= */}
      <section className="bg-warm-white py-28 md:py-36 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-botanical font-bold text-xs uppercase tracking-[0.2em]">
              <span className="w-8 h-px bg-botanical/50" />
              <span>معرض الأعمال والملهمات</span>
            </div>
            <h2 className="apple-heading text-primary-deep">
              تصاميم ملهمة للفراغات<br className="hidden md:block" />
              <span className="text-gradient-mixed">الخارجية والحدائق</span>
            </h2>
            <p className="text-sm text-muted-grey">
              استكشف جمال وتناسق الأفكار التي نطبقها في حدائق الفلل والأسطح بالرياض.
            </p>

            {/* Apple-style pill filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
              {galleryFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveGalleryFilter(filter)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${activeGalleryFilter === filter
                    ? 'bg-gradient-to-r from-primary-deep to-botanical text-white shadow-premium-glow scale-105'
                    : 'bg-white text-muted-grey border border-charcoal/5 hover:bg-charcoal/5 hover:border-charcoal/10'
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
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-charcoal/5 shadow-apple bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/95 via-primary-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-right" style={{ direction: 'rtl' }}>
                  <span className="text-[10px] text-water-blue font-bold mb-1 uppercase tracking-widest">{item.category}</span>
                  <h4 className="text-sm font-black text-white leading-tight">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="btn-apple bg-white text-primary-deep border border-charcoal/10 shadow-apple hover:shadow-apple-lg hover:bg-warm-white"
            >
              <span>عرض معرض الصور الكامل</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =============================================
          8. WHY GREEN HOUSE - Apple-style features
      ============================================= */}
      <section className="bg-white py-28 md:py-36 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-botanical font-bold text-xs uppercase tracking-[0.2em]">
                <span className="w-8 h-px bg-botanical/50" />
                <span>لماذا البيت الأخضر؟</span>
              </div>

              <h2 className="apple-heading text-primary-deep">
                مواصفات تضمن لك<br className="hidden md:block" />
                <span className="text-gradient-mixed">الراحة والجمال المستدام</span>
              </h2>

              <p className="text-muted-grey text-base leading-relaxed text-justify">
                تختلف شركة البيت الأخضر عن غيرها من مشاتل الحدائق العادية؛ فنحن ندمج التفكير الهندسي المعماري مع الخبرة الزراعية لنمنح الفلل تصاميم تعيش لسنوات دون مشاكل.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'تصميم وتوزيع هندسي متزن يستغل كل زاوية وارتداد بالفيلا.',
                'استخدام عشب صناعي حاصل على شهادات الجودة ومقاوم لأشعة الشمس فوق البنفسجية.',
                'تجهيز مسبق ودقيق لأسطح الفلل لمنع أي تسرب للمياه بعد الزراعة.',
                'متابعة مستمرة وصيانة دورية لضمان نمو النباتات واستدامة شبكة الري والشلالات.',
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-warm-white/50 hover:bg-warm-white transition-all duration-300">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-botanical to-water-blue/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-sm text-charcoal font-semibold">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-apple-lg border border-charcoal/5 img-container">
              <img
                src="/images/statement-choose.jpg"
                alt="لماذا تختار البيت الأخضر"
                className="w-full h-full object-cover img-premium"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-water-blue/10 to-botanical/10 rounded-3xl border border-charcoal/5 -z-10" />
          </div>

        </div>
      </section>

      {/* =============================================
          9. SERVICE AREAS - Apple-style grid
      ============================================= */}
      <section className="bg-warm-white py-28 md:py-36 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-botanical font-bold text-xs uppercase tracking-[0.2em]">
              <span className="w-8 h-px bg-botanical/50" />
              <span>أحياء الرياض المغطاة</span>
            </div>
            <h2 className="apple-heading text-primary-deep">
              نغطي مختلف أحياء<br className="hidden md:block" />
              <span className="text-gradient-mixed">ومناطق الرياض</span>
            </h2>
            <p className="text-sm text-muted-grey leading-relaxed">
              نصل إليكم في أي حي بمدينة الرياض لمعاينة المساحة وتقديم الاستشارة الهندسية والتصميم المناسب.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {neighborhoods.map((hood, idx) => (
              <div
                key={idx}
                className="bg-white border border-charcoal/5 py-5 px-3 rounded-2xl text-center shadow-apple text-xs font-bold text-charcoal/80 hover:border-water-blue hover:text-water-blue hover:shadow-water-glow transition-all duration-300 cursor-default"
              >
                حي {hood}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =============================================
          10. FAQ SECTION - Apple-style accordion
      ============================================= */}
      <section className="bg-white py-28 md:py-36 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-4xl mx-auto px-6 space-y-12">

          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-botanical font-bold text-xs uppercase tracking-[0.2em]">
              <span className="w-8 h-px bg-botanical/50" />
              <span>الأسئلة الشائعة</span>
            </div>
            <h2 className="apple-heading text-primary-deep">
              إجابات على استفساراتكم<br className="hidden md:block" />
              <span className="text-gradient-mixed">حول تنسيق الحدائق بالرياض</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-warm-white p-6 md:p-8 rounded-3xl border border-charcoal/5 text-right space-y-3 hover:bg-white hover:shadow-apple-lg transition-all duration-300"
              >
                <h3 className="text-sm md:text-base font-black text-primary-deep flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-botanical to-water-blue mt-2 flex-shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-muted-grey leading-relaxed pr-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-deep hover:text-botanical transition-all duration-300 group"
            >
              <span>شاهد جميع الأسئلة الشائعة</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* =============================================
          11. FINAL CTA - Apple-style premium
      ============================================= */}
      <section className="bg-primary-deep py-28 md:py-36 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-botanical/20 to-water-blue/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-water-blue/10 to-botanical/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="apple-title text-white">
                حوّل مساحتك الخارجية<br />
                <span className="text-gradient-mixed bg-gradient-to-r from-fresh-green via-water-blue to-soft-blue bg-clip-text text-transparent">
                  إلى مكان تحب أن تعيش فيه
                </span>
              </h2>
              <p className="text-base text-warm-white/60 leading-relaxed text-justify max-w-xl">
                ابدأ اليوم بمشاركة رؤيتك معنا. مهندسو البيت الأخضر مستعدون للتجاوب وتطوير مخطط متوازن يجمع الرقي والجمال والاستدامة لفيلتك بالرياض.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a href="tel:0557401773" className="inline-flex items-center gap-3 text-warm-white/80 hover:text-white transition-all duration-300 group w-fit">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-botanical/40 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-water-blue" />
                </div>
                <span className="dir-ltr text-lg font-black">0557401773</span>
              </a>
              <a href="https://wa.me/966557401773" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-warm-white/80 hover:text-white transition-all duration-300 group w-fit">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-water-blue/40 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 text-water-blue" />
                </div>
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

