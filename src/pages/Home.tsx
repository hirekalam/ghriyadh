import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpLeft, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: 'تنسيق الحدائق',
    description: 'تصميم وتنفيذ حدائق فاخرة تناسب ذوقك وميزانيتك',
    image: '/images/service-garden-design.jpg',
    slug: 'garden-design',
  },
  {
    id: 2,
    title: 'العشب الصناعي',
    description: 'تركيب عشب صناعي عالي الجودة يدوم لسنوات',
    image: '/images/service-artificial-grass.jpg',
    slug: 'artificial-grass',
  },
  {
    id: 3,
    title: 'العشب الطبيعي',
    description: 'زراعة وتركيب عشب طبيعي صحي وخضراء',
    image: '/images/service-natural-grass.jpg',
    slug: 'natural-grass',
  },
];

const projects = [
  { id: 1, image: '/images/project-1.jpg', title: 'حديقة فيلا فاخرة' },
  { id: 2, image: '/images/project-2.jpg', title: 'تركيب عشب صناعي' },
  { id: 3, image: '/images/project-3.jpg', title: 'نافورة وشلال' },
  { id: 4, image: '/images/project-4.jpg', title: 'جدارية نباتية' },
  { id: 5, image: '/images/project-5.jpg', title: 'مظلة حديقة' },
  { id: 6, image: '/images/project-6.jpg', title: 'نظام ري ذكي' },
];

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imagePanelRef = useRef<HTMLDivElement>(null);
  const textPanelRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Hero entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      gsap.set(imagePanelRef.current, { x: '-60vw', opacity: 0 });
      gsap.set(textPanelRef.current, { x: '40vw', opacity: 0 });

      tl.to(imagePanelRef.current, { x: 0, opacity: 1, duration: 1 }, 0)
        .to(textPanelRef.current, { x: 0, opacity: 1, duration: 1 }, 0.1);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Scroll animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Services section
      const serviceCards = servicesRef.current?.querySelectorAll('.service-card');
      if (serviceCards && serviceCards.length > 0) {
        gsap.fromTo(
          serviceCards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: servicesRef.current,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 0.4,
            },
          }
        );
      }

      // Projects section
      const projectItems = projectsRef.current?.querySelectorAll('.project-item');
      if (projectItems && projectItems.length > 0) {
        gsap.fromTo(
          projectItems,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            scrollTrigger: {
              trigger: projectsRef.current,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 0.4,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen bg-[#0B3A2E] overflow-hidden">
        <div className="vignette absolute inset-0 pointer-events-none z-10" />

        {/* Left Image Panel */}
        <div
          ref={imagePanelRef}
          className="absolute left-0 top-0 w-full lg:w-[56vw] h-full will-change-transform"
        >
          <img
            src="/images/hero-garden-path.jpg"
            alt="تنسيق حدائق فاخرة في الرياض"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B3A2E]/80 lg:to-[#0B3A2E]" />
        </div>

        {/* Right Text Panel */}
        <div
          ref={textPanelRef}
          className="absolute right-0 top-0 w-full lg:w-[44vw] h-full bg-[#0B3A2E] flex flex-col justify-center px-8 lg:px-12 will-change-transform"
        >
          <div className="text-[#F4F7F5] font-black text-[15vw] lg:text-[10vw] leading-[0.9]">
            GREEN
          </div>
          <div className="text-[#F4F7F5] font-black text-[15vw] lg:text-[10vw] leading-[0.9] mt-2">
            HOUSE
          </div>

          <div className="mt-8 lg:mt-12">
            <p className="text-[#F4F7F5]/70 text-lg lg:text-xl max-w-md leading-relaxed">
              تصميم حدائق فاخرة في الرياض
              <br />
              نحول أحلامك إلى واقع أخضر
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/special-offer"
              className="inline-flex items-center justify-center gap-3 bg-[#D4A03A] text-[#0B3A2E] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 group"
            >
              <span>احصل على عرض سعر</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-3 border-2 border-[#F4F7F5]/30 text-[#F4F7F5] px-8 py-4 rounded-full font-bold text-lg hover:border-[#D4A03A] hover:text-[#D4A03A] transition-colors duration-300"
            >
              <span>استكشف خدماتنا</span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[#F4F7F5]/50 text-sm">اسحب للأسفل</span>
          <ChevronDown className="w-5 h-5 text-[#F4F7F5]/50" />
        </div>
      </section>

      {/* Services Preview Section */}
      <section ref={servicesRef} className="relative bg-[#0B3A2E] py-20 lg:py-32">
        <div className="w-full px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12">
            <div>
              <span className="text-[#D4A03A] text-sm font-bold tracking-widest uppercase mb-4 block">
                SERVICES
              </span>
              <h2 className="text-[#F4F7F5] font-black text-4xl lg:text-5xl">
                خدماتنا المتميزة
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-4 lg:mt-0 text-[#D4A03A] font-bold hover:underline flex items-center gap-2"
            >
              <span>عرض جميع الخدمات</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="service-card group relative bg-[#0B3A2E] rounded-3xl overflow-hidden cursor-pointer"
                style={{ boxShadow: '0 18px 40px rgba(0,0,0,0.18)' }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3A2E] via-[#0B3A2E]/30 to-transparent" />
                </div>

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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section ref={projectsRef} className="relative bg-[#F4F7F5] py-20 lg:py-32">
        <div className="w-full px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12">
            <div>
              <span className="text-[#D4A03A] text-sm font-bold tracking-widest uppercase mb-4 block">
                PORTFOLIO
              </span>
              <h2 className="text-[#0B3A2E] font-black text-4xl lg:text-5xl">
                أعمالنا
              </h2>
            </div>
            <Link
              to="/projects"
              className="mt-4 lg:mt-0 text-[#0B3A2E] font-bold hover:underline flex items-center gap-2"
            >
              <span>عرض جميع المشاريع</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-item group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0B3A2E]/0 group-hover:bg-[#0B3A2E]/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#F4F7F5] font-bold text-lg">{project.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#0B3A2E] py-20 lg:py-32">
        <div className="absolute inset-0">
          <img
            src="/images/cta-background.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B3A2E]/75" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[#F4F7F5] font-black text-4xl lg:text-5xl mb-6">
              ابدأ مشروع حديقتك اليوم
            </h2>
            <p className="text-[#F4F7F5]/70 text-lg lg:text-xl mb-10">
              تواصل معنا… نناقش فكرتك ونُحضر عرضاً يناسب ميزانيتك.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary flex items-center gap-2"
              >
                <span>احصل على عرض سعر</span>
              </Link>
              <a
                href="https://wa.me/966502394828"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F4F7F5]/70 hover:text-[#D4A03A] transition-colors"
              >
                <span>أو راسلنا على الواتساب</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
