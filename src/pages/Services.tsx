import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowUpLeft, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: 'تنسيق الحدائق',
    description: 'تصميم وتنفيذ حدائق فاخرة تناسب ذوقك وميزانيتك. نبدأ بفهم رؤيتك ثم نحولها إلى تصميم واقعي يجمع بين الجمال والوظيفة.',
    image: '/images/service-garden-design.jpg',
    slug: 'garden-design',
    features: ['تصميم مخصص', 'اختيار النباتات', 'تخطيط المساحات', 'إشراف هندسي'],
  },
  {
    id: 2,
    title: 'العشب الصناعي',
    description: 'تركيب عشب صناعي عالي الجودة يدوم لسنوات. مثالي للمناطق ذات الاستخدام العالي أو الظل حيث يصعب نمو العشب الطبيعي.',
    image: '/images/service-artificial-grass.jpg',
    slug: 'artificial-grass',
    features: ['جودة عالية', 'ضمان 10 سنوات', 'سهل الصيانة', 'صديق للبيئة'],
  },
  {
    id: 3,
    title: 'العشب الطبيعي',
    description: 'زراعة وتركيب عشب طبيعي صحي وخضراء. نستخدم أفضل أنواع البذور والشتول المناسبة لمناخ الرياض.',
    image: '/images/service-natural-grass.jpg',
    slug: 'natural-grass',
    features: ['أنواع مقاومة للحرارة', 'تربة مخصبة', 'ري أوتوماتيكي', 'متابعة دورية'],
  },
  {
    id: 4,
    title: 'المظلات والسواتر',
    description: 'تصميم وتركيب مظلات حديثة لحماية من الشمس. تشمل المظلات الخشبية، الحديدية، وشراع الظل.',
    image: '/images/service-shade-structures.jpg',
    slug: 'shade-structures',
    features: ['تصاميم عصرية', 'مواد عالية الجودة', 'مقاومة للعوامل الجوية', 'تركيب احترافي'],
  },
  {
    id: 5,
    title: 'الري والنوافير',
    description: 'تركيب شبكات ري ذكية ونوافير مائية. نوفر حلول ري متكاملة توفر الماء وتضمن نمو صحي للنباتات.',
    image: '/images/service-irrigation.jpg',
    slug: 'irrigation',
    features: ['أنظمة ري ذكية', 'نوافير مائية', 'شلالات صناعية', 'برك زينة'],
  },
  {
    id: 6,
    title: 'الصيانة الدورية',
    description: 'برامج صيانة دورية للحفاظ على جمال حديقتك. تشمل القص، التسميد، مكافحة الآفات، والري.',
    image: '/images/service-maintenance.jpg',
    slug: 'maintenance',
    features: ['زيارات دورية', 'فريق متخصص', 'تقارير منتظمة', 'أسعار تنافسية'],
  },
];

const Services = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      );

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-[#0B3A2E] min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-[#D4A03A] text-sm font-bold tracking-widest uppercase mb-4 block">
            OUR SERVICES
          </span>
          <h1 className="text-[#F4F7F5] font-black text-4xl lg:text-6xl mb-6">
            خدماتنا المتميزة
          </h1>
          <p className="text-[#F4F7F5]/70 text-lg max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات تنسيق الحدائق والمساحات الخضراء بأعلى معايير الجودة في الرياض
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group bg-[#0B3A2E]/50 border border-[#F4F7F5]/10 rounded-3xl overflow-hidden hover:border-[#D4A03A]/30 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[#F4F7F5] font-bold text-2xl mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#F4F7F5]/60 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-[#F4F7F5]/70 text-sm">
                          <Check className="w-4 h-4 text-[#D4A03A]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-[#D4A03A] font-bold hover:underline"
                  >
                    <span>اعرف المزيد</span>
                    <ArrowUpLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#F4F7F5]/70 mb-6">
            هل لديك مشروع في بالك؟ دعنا نناقش تفاصيله
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#D4A03A] text-[#0B3A2E] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
          >
            <span>اطلب استشارة مجانية</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
