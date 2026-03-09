import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: 'تنسيق الحدائق',
    description: 'تصميم وتنفيذ حدائق فاخرة تناسب ذوقك وميزانيتك',
    image: '/images/service-garden-design.jpg',
  },
  {
    id: 2,
    title: 'العشب الصناعي',
    description: 'تركيب عشب صناعي عالي الجودة يدوم لسنوات',
    image: '/images/service-artificial-grass.jpg',
  },
  {
    id: 3,
    title: 'العشب الطبيعي',
    description: 'زراعة وتركيب عشب طبيعي صحي وخضراء',
    image: '/images/service-natural-grass.jpg',
  },
  {
    id: 4,
    title: 'المظلات والسواتر',
    description: 'تصميم وتركيب مظلات حديثة لحماية من الشمس',
    image: '/images/service-shade-structures.jpg',
  },
  {
    id: 5,
    title: 'الري والنوافير',
    description: 'تركيب شبكات ري ذكية ونوافير مائية',
    image: '/images/service-irrigation.jpg',
  },
  {
    id: 6,
    title: 'الصيانة الدورية',
    description: 'برامج صيانة دورية للحفاظ على جمال حديقتك',
    image: '/images/service-maintenance.jpg',
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 0.4,
          },
        }
      );

      // Cards animation with stagger
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 40, scale: 0.98, opacity: 0 },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 0.6,
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 60%',
                scrub: 0.4,
              },
              delay: index * 0.1,
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-[#0B3A2E] py-20 lg:py-32 z-[200]"
    >
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-12 lg:mb-16 will-change-transform">
          <span className="text-[#D4A03A] text-sm font-bold tracking-widest uppercase mb-4 block">
            SERVICES
          </span>
          <h2 className="text-[#F4F7F5] font-black text-4xl lg:text-6xl mb-4">
            خدماتنا
          </h2>
          <p className="text-[#F4F7F5]/70 text-lg max-w-xl">
            تصميم، تركيب، صيانة… وحلول ري متكاملة.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="service-card group relative bg-[#0B3A2E] rounded-3xl overflow-hidden cursor-pointer will-change-transform"
              style={{ boxShadow: '0 18px 40px rgba(0,0,0,0.18)' }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3A2E] via-[#0B3A2E]/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-[#F4F7F5] font-bold text-xl mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#F4F7F5]/60 text-sm line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#D4A03A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpLeft className="w-5 h-5 text-[#0B3A2E]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
