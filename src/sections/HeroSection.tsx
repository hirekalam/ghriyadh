import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagePanelRef = useRef<HTMLDivElement>(null);
  const textPanelRef = useRef<HTMLDivElement>(null);
  const greenTextRef = useRef<HTMLDivElement>(null);
  const houseTextRef = useRef<HTMLDivElement>(null);
  const subheadRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Auto-play entrance animation on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Initial states
      gsap.set(imagePanelRef.current, { x: '-60vw', opacity: 0 });
      gsap.set(textPanelRef.current, { x: '40vw', opacity: 0 });
      gsap.set(greenTextRef.current, { x: '25vw', opacity: 0 });
      gsap.set(houseTextRef.current, { x: '30vw', opacity: 0 });
      gsap.set([subheadRef.current, ctaRef.current], { y: 24, opacity: 0 });

      // Entrance animation
      tl.to(imagePanelRef.current, { x: 0, opacity: 1, duration: 1 }, 0)
        .to(textPanelRef.current, { x: 0, opacity: 1, duration: 1 }, 0.1)
        .to(greenTextRef.current, { x: 0, opacity: 1, duration: 0.8 }, 0.3)
        .to(houseTextRef.current, { x: 0, opacity: 1, duration: 0.8 }, 0.5)
        .to(subheadRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.7)
        .to(ctaRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.9);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven exit animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements when scrolling back to top
            gsap.to([imagePanelRef.current, textPanelRef.current, greenTextRef.current, houseTextRef.current, subheadRef.current, ctaRef.current], {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.3,
            });
          },
        },
      });

      // Phase 1 (0-70%): Hold at settle state
      // Phase 2 (70-100%): Exit animation
      scrollTl
        .fromTo(
          imagePanelRef.current,
          { x: 0, scale: 1, opacity: 1 },
          { x: '-18vw', scale: 1.06, opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          textPanelRef.current,
          { x: 0, opacity: 1 },
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          ctaRef.current,
          { scale: 1, opacity: 1 },
          { scale: 0.96, opacity: 0, ease: 'power2.in' },
          0.8
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="section-pinned bg-[#0B3A2E] z-[100]"
    >
      {/* Vignette overlay */}
      <div className="absolute inset-0 vignette pointer-events-none z-10" />

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
        {/* Oversized Wordmark */}
        <div className="relative">
          <div
            ref={greenTextRef}
            className="text-[#F4F7F5] font-black text-[15vw] lg:text-[10vw] leading-[0.9] will-change-transform"
          >
            GREEN
          </div>
          <div
            ref={houseTextRef}
            className="text-[#F4F7F5] font-black text-[15vw] lg:text-[10vw] leading-[0.9] mt-2 will-change-transform"
          >
            HOUSE
          </div>
        </div>

        {/* Subheadline */}
        <div
          ref={subheadRef}
          className="mt-8 lg:mt-12 will-change-transform"
        >
          <p className="text-[#F4F7F5]/70 text-lg lg:text-xl max-w-md leading-relaxed">
            تصميم حدائق فاخرة في الرياض
            <br />
            نحول أحلامك إلى واقع أخضر
          </p>
        </div>

        {/* CTA Button */}
        <div ref={ctaRef} className="mt-8 will-change-transform">
          <a
            href="https://wa.me/966502394828"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D4A03A] text-[#0B3A2E] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 group"
          >
            <span>احصل على عرض سعر</span>
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#F4F7F5]/50 text-sm">اسحب للأسفل</span>
        <ChevronDown className="w-5 h-5 text-[#F4F7F5]/50" />
      </div>
    </section>
  );
};

export default HeroSection;
