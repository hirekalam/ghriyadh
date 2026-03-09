import { useRef, useLayoutEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Phone, Check, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: string;
  slug: string;
  title: string;
}

interface ServiceDetailProps {
  services: Service[];
}

const servicesData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
}> = {
  'garden-design': {
    title: 'تنسيق الحدائق',
    description: 'تصميم وتنفيذ حدائق فاخرة تناسب ذوقك وميزانيتك',
    longDescription: 'نقدم خدمات تنسيق حدائق شاملة تشمل التصميم والتخطيط والتنفيذ. نبدأ بفهم رؤيتك ومتطلباتك، ثم نقوم بإنشاء تصميم مخصص يجمع بين الجمال والوظيفة. فريقنا من المصممين المحترفين يضمن تحقيق أحلامك في حديقة مثالية.',
    image: '/images/service-garden-design.jpg',
    gallery: ['/images/project-1.jpg', '/images/project-3.jpg', '/images/project-5.jpg'],
    benefits: [
      'تصميم مخصص يناسب ذوقك واحتياجاتك',
      'اختيار النباتات المناسبة لمناخ الرياض',
      'تخطيط أمثل للمساحات الخضراء',
      'إشراف هندسي طوال مراحل التنفيذ',
      'ضمان الجودة على جميع الأعمال',
    ],
    process: [
      { step: 1, title: 'الاستشارة', description: 'نلتقي معك لفهم رؤيتك ومتطلباتك' },
      { step: 2, title: 'التصميم', description: 'نصمم حديقتك باستخدام أحدث التقنيات' },
      { step: 3, title: 'التنفيذ', description: 'فريقنا المتخصص ينفذ التصميم بدقة' },
      { step: 4, title: 'التسليم', description: 'نسلمك حديقة جاهزة للاستمتاع' },
    ],
  },
  'artificial-grass': {
    title: 'العشب الصناعي',
    description: 'تركيب عشب صناعي عالي الجودة يدوم لسنوات',
    longDescription: 'نوفر عشباً صناعياً عالي الجودة يمنح مظهراً طبيعياً دون عناء الصيانة. مثالي للمناطق ذات الاستخدام العالي، المناطق المظللة، أو لمن يريدون حديقة خضراء طوال العام دون مجهود.',
    image: '/images/service-artificial-grass.jpg',
    gallery: ['/images/project-2.jpg', '/images/project-4.jpg', '/images/project-6.jpg'],
    benefits: [
      'جودة عالية تدوم لأكثر من 10 سنوات',
      'لا يحتاج إلى ري أو قص',
      'مقاوم للأشعة فوق البنفسجية',
      'صديق للبيئة وآمن للأطفال',
      'ضمان شامل على التركيب',
    ],
    process: [
      { step: 1, title: 'القياس', description: 'نقوم بقياس المساحة بدقة' },
      { step: 2, title: 'التجهيز', description: 'نحضر السطح ونضع طبقة الأساس' },
      { step: 3, title: 'التركيب', description: 'نركب العشب باحترافية عالية' },
      { step: 4, title: 'الإنهاء', description: 'نضيف اللمسات النهائية للمظهر الطبيعي' },
    ],
  },
  'natural-grass': {
    title: 'العشب الطبيعي',
    description: 'زراعة وتركيب عشب طبيعي صحي وخضراء',
    longDescription: 'نستخدم أفضل أنواع البذور والشتول المناسبة لمناخ الرياض. نقدم حلولاً متكاملة لزراعة العشب الطبيعي تشمل إعداد التربة، الزراعة، ونظام الري.',
    image: '/images/service-natural-grass.jpg',
    gallery: ['/images/project-1.jpg', '/images/project-3.jpg', '/images/project-5.jpg'],
    benefits: [
      'أنواع عشب مقاومة للحرارة',
      'تربة مخصبة ومجهزة بشكل صحيح',
      'نظام ري أوتوماتيكي متكامل',
      'متابعة دورية للعناية بالعشب',
      'مظهر طبيعي وجذاب',
    ],
    process: [
      { step: 1, title: 'تحليل التربة', description: 'نفحص التربة ونحدد احتياجاتها' },
      { step: 2, title: 'إعداد الأرض', description: 'نجهز التربة ونضيف المخصبات' },
      { step: 3, title: 'الزراعة', description: 'نزرع العشب باستخدام أفضل الأنواع' },
      { step: 4, title: 'العناية', description: 'نقدم إرشادات للعناية المستمرة' },
    ],
  },
  'shade-structures': {
    title: 'المظلات والسواتر',
    description: 'تصميم وتركيب مظلات حديثة لحماية من الشمس',
    longDescription: 'نصمم ونركب مظلات وسواتر بمواصفات عالية تشمل المظلات الخشبية، الحديدية، وشراع الظل. جميع منتجاتنا مقاومة للعوامل الجوية وتضفي لمسة جمالية على حديقتك.',
    image: '/images/service-shade-structures.jpg',
    gallery: ['/images/project-2.jpg', '/images/project-4.jpg', '/images/project-6.jpg'],
    benefits: [
      'تصاميم عصرية وأنيقة',
      'مواد عالية الجودة ومقاومة للصدأ',
      'مقاومة للرياح والعوامل الجوية',
      'تركيب احترافي ودقيق',
      'ضمان على المواد والتركيب',
    ],
    process: [
      { step: 1, title: 'التصميم', description: 'نصمم المظلة حسب متطلباتك' },
      { step: 2, title: 'التصنيع', description: 'نصنع المظلة بأعلى معايير الجودة' },
      { step: 3, title: 'التركيب', description: 'فريقنا يركب المظلة باحترافية' },
      { step: 4, title: 'الفحص', description: 'نفحص التركيب ونضمن الجودة' },
    ],
  },
  'irrigation': {
    title: 'الري والنوافير',
    description: 'تركيب شبكات ري ذكية ونوافير مائية',
    longDescription: 'نوفر حلول ري متكاملة تشمل الأنظمة الذكية التي توفر الماء وتضمن نمو صحي للنباتات. كما نصمم ونركب نوافير وشلالات تضفي جواً من الطبيعة والهدوء على حديقتك.',
    image: '/images/service-irrigation.jpg',
    gallery: ['/images/project-1.jpg', '/images/project-3.jpg', '/images/project-5.jpg'],
    benefits: [
      'أنظمة ري ذكية توفر حتى 50% من الماء',
      'نوافير مائية بتصاميم متنوعة',
      'شلالات صناعية طبيعية المظهر',
      'برك زينة بأحجام مختلفة',
      'صيانة دورية لجميع الأنظمة',
    ],
    process: [
      { step: 1, title: 'التخطيط', description: 'نخطط نظام الري حسب احتياجات الحديقة' },
      { step: 2, title: 'التركيب', description: 'نركب الأنابيب والرشاشات' },
      { step: 3, title: 'البرمجة', description: 'نبرمج النظام للعمل أوتوماتيكياً' },
      { step: 4, title: 'الاختبار', description: 'نختبر النظام ونضبط الإعدادات' },
    ],
  },
  'maintenance': {
    title: 'الصيانة الدورية',
    description: 'برامج صيانة دورية للحفاظ على جمال حديقتك',
    longDescription: 'نقدم برامج صيانة دورية شاملة تشمل قص العشب، تقليم الأشجار، التسميد، مكافحة الآفات، والري. فريقنا المتخصص يضمن بقاء حديقتك في أفضل حالة طوال العام.',
    image: '/images/service-maintenance.jpg',
    gallery: ['/images/project-2.jpg', '/images/project-4.jpg', '/images/project-6.jpg'],
    benefits: [
      'زيارات دورية مجدولة',
      'فريق متخصص ومدرب',
      'تقارير منتظمة عن حالة الحديقة',
      'أسعار تنافسية وشفافة',
      'استجابة سريعة للطوارئ',
    ],
    process: [
      { step: 1, title: 'التقييم', description: 'نقيم حالة الحديقة ونحدد الاحتياجات' },
      { step: 2, title: 'الخطة', description: 'نضع خطة صيانة مناسبة' },
      { step: 3, title: 'التنفيذ', description: 'فريقنا ينفذ أعمال الصيانة' },
      { step: 4, title: 'المتابعة', description: 'نتابع ونعدل الخطة حسب الحاجة' },
    ],
  },
};

const ServiceDetail = (_props: ServiceDetailProps) => {
  const { slug } = useParams<{ slug: string }>();
  const contentRef = useRef<HTMLDivElement>(null);

  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animateItems = contentRef.current?.querySelectorAll('.animate-item');
      if (animateItems && animateItems.length > 0) {
        gsap.fromTo(
          animateItems,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-[#0B3A2E] min-h-screen pt-24 lg:pt-32 pb-20">
      {/* Hero Image */}
      <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B3A2E] via-[#0B3A2E]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="w-full px-6 lg:px-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#F4F7F5]/70 hover:text-[#D4A03A] mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>العودة للخدمات</span>
            </Link>
            <h1 className="text-[#F4F7F5] font-black text-4xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="text-[#F4F7F5]/70 text-lg mt-4 max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="w-full px-6 lg:px-12 py-12 lg:py-20">
        {/* Description */}
        <div className="animate-item max-w-4xl mx-auto mb-16">
          <h2 className="text-[#F4F7F5] font-bold text-2xl lg:text-3xl mb-6">
            نظرة عامة
          </h2>
          <p className="text-[#F4F7F5]/70 text-lg leading-relaxed">
            {service.longDescription}
          </p>
        </div>

        {/* Benefits */}
        <div className="animate-item max-w-4xl mx-auto mb-16">
          <h2 className="text-[#F4F7F5] font-bold text-2xl lg:text-3xl mb-6">
            مميزات الخدمة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#F4F7F5]/5 rounded-xl p-4"
              >
                <Check className="w-5 h-5 text-[#D4A03A] flex-shrink-0" />
                <span className="text-[#F4F7F5]/80">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="animate-item max-w-4xl mx-auto mb-16">
          <h2 className="text-[#F4F7F5] font-bold text-2xl lg:text-3xl mb-6">
            خطوات العمل
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="relative bg-[#F4F7F5]/5 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#D4A03A] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#0B3A2E] font-bold">{step.step}</span>
                </div>
                <h3 className="text-[#F4F7F5] font-bold mb-2">{step.title}</h3>
                <p className="text-[#F4F7F5]/60 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="animate-item max-w-4xl mx-auto mb-16">
          <h2 className="text-[#F4F7F5] font-bold text-2xl lg:text-3xl mb-6">
            أعمالنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.gallery.map((image, index) => (
              <div
                key={index}
                className="aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${service.title} - ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="animate-item max-w-2xl mx-auto text-center bg-[#F4F7F5]/5 rounded-3xl p-8 lg:p-12">
          <h2 className="text-[#F4F7F5] font-bold text-2xl lg:text-3xl mb-4">
            هل أنت مستعد لبدء مشروعك؟
          </h2>
          <p className="text-[#F4F7F5]/70 mb-8">
            تواصل معنا الآن واحصل على استشارة مجانية وعرض سعر مخصص
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/966502394828"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4A03A] text-[#0B3A2E] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>تواصل عبر واتساب</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#F4F7F5]/30 text-[#F4F7F5] px-8 py-4 rounded-full font-bold text-lg hover:border-[#D4A03A] hover:text-[#D4A03A] transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>أرسل لنا رسالة</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
