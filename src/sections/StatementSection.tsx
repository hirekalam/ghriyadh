import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StatementSectionProps {
  id: string;
  headline: string;
  body: string;
  image: string;
  textPosition: 'left' | 'right';
  zIndex: number;
}

const StatementSection = ({
  id,
  headline,
  body,
  image,
  textPosition,
  zIndex,
}: StatementSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const isLeft = textPosition === 'left';
  const entranceX = isLeft ? '-60vw' : '60vw';
  const exitX = isLeft ? '40vw' : '-40vw';

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0-30%)
      scrollTl
        .fromTo(
          headlineRef.current,
          { x: entranceX, opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(
          bodyRef.current,
          { x: isLeft ? '-20vw' : '20vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0.05
        )
        .fromTo(
          imageRef.current,
          { scale: 1.08, opacity: 0.7 },
          { scale: 1, opacity: 1, ease: 'none' },
          0
        );

      // SETTLE (30-70%) - Hold positions

      // EXIT (70-100%)
      scrollTl
        .to(
          headlineRef.current,
          { x: exitX, opacity: 0, ease: 'power2.in' },
          0.7
        )
        .to(
          bodyRef.current,
          { y: 18, opacity: 0, ease: 'power2.in' },
          0.7
        )
        .to(
          imageRef.current,
          { scale: 1.04, opacity: 0.35, ease: 'power2.in' },
          0.7
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [entranceX, exitX, isLeft]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="section-pinned"
      style={{ zIndex }}
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={image}
          alt={headline}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/40"
      />

      {/* Content */}
      <div
        className={`absolute inset-0 flex flex-col justify-center px-8 lg:px-16 ${
          isLeft ? 'items-start' : 'items-end'
        }`}
      >
        <div className={`max-w-xl ${isLeft ? 'text-left' : 'text-right'}`}>
          <h2
            ref={headlineRef}
            className="text-[#F4F7F5] font-black text-6xl lg:text-8xl xl:text-9xl leading-tight will-change-transform text-shadow"
          >
            {headline}
          </h2>
          <p
            ref={bodyRef}
            className="mt-6 text-[#F4F7F5]/70 text-lg lg:text-xl leading-relaxed will-change-transform"
          >
            {body}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatementSection;
