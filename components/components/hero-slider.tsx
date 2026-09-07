"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GradientText } from "./signature";
import { whatsappLink, defaultWhatsappMsg } from "@/lib/site";

const SLIDE_MS = 7000;

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=2000&q=80",
    alt: "حديقة فيلا منسقة بالرياض بمسطح عشبي أخضر ونخيل وإضاءة دافئة",
    eyebrow: "حلول مدروسة للمساحات الخارجية في الرياض",
    pre: "تصميم المساحات الخارجية",
    gradient: "التي تستحقها",
    sub: "حلول متكاملة لتنسيق الحدائق والمسطحات الخارجية في الرياض، تجمع بين الجمال والوظيفة وتراعي طبيعة المناخ السعودي.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2000&q=80",
    alt: "جلسة خارجية عصرية مع إضاءة دافئة في المساء",
    eyebrow: "تنسيق حدائق الفلل والمسطحات",
    pre: "حديقة تعيش معك",
    gradient: "طوال العام",
    sub: "من التصميم إلى التنفيذ، نراعي تفاصيل مناخك واحتياجك اليومي لنقدم مساحة خضراء تدوم بأقل عناية.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80",
    alt: "فيلا عصرية بحديقة وإضاءة خارجية دافئة في المساء",
    eyebrow: "جلسات خارجية وعناصر مائية",
    pre: "مساحات تُعاش",
    gradient: "لا تُرى فقط",
    sub: "برجولات وظلال وشلالات ونوافير مصممة بعناية لتمنحك أمسيات جميلة في الهواء الطلق.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
    alt: "منزل حديث بمساحات خارجية خضراء منسقة",
    eyebrow: "ري ذكي ونباتات متأقلمة",
    pre: "جمال يدوم",
    gradient: "بعناية ذكية",
    sub: "شبكات ري موفرة للمياه ونباتات مناسبة لمناخ الرياض لتبقى حديقتك خضراء وجميلة طوال العام.",
  },
];

const trustPoints = ["تصميم مخصص", "تنفيذ متكامل", "حلول موفرة للمياه"];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }
    mq.addListener(onChange);
    return () => mq.removeListener(onChange);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      SLIDE_MS
    );
    return () => window.clearInterval(id);
  }, [paused, reduced, index]);

  const goTo = useCallback((i: number) => {
    setIndex(((i % slides.length) + slides.length) % slides.length);
  }, []);

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(delta) > 48) {
      if (delta < 0) next();
      else prev();
    }
  };

  const slide = slides[index];

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="معرض أعمالنا"
    >
      {slides.map((s, i) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            loading="eager"
            className={`object-cover ${
              i === index && !reduced ? "animate-hero-zoom" : ""
            }`}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-forest/85 via-forest/20 to-forest/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,43,18,0.5))]" />
      <div className="bg-gold-glow absolute inset-0" />

      <div className="container-site relative z-10 pb-32 pt-32">
        <div key={index} className="max-w-2xl">
          <span
            className="animate-fade-up inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-1.5 w-1.5 rotate-45 rounded-[1px] bg-gold-gradient" />
            {slide.eyebrow}
          </span>
          <h1
            className="animate-fade-up mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            {slide.pre} <GradientText gold>{slide.gradient}</GradientText>
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-white/85"
            style={{ animationDelay: "200ms" }}
          >
            {slide.sub}
          </p>
          <div
            className="animate-fade-up mt-9 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <Link href="/contact" className="btn-primary text-lg">
              اطلب تصميمك الآن
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <a
              href={whatsappLink(defaultWhatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg"
            >
              تواصل معنا عبر واتساب
            </a>
          </div>
          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-white/60"
            style={{ animationDelay: "400ms" }}
          >
            {trustPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gold-light" />
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-9 z-10 flex items-center justify-center gap-5 px-6">
        <button
          type="button"
          onClick={prev}
          aria-label="الشريحة السابقة"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:border-lime-leaf/70 hover:bg-lime-leaf/20"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2" aria-label="اختيار الشريحة">
          {slides.map((s, i) => (
            <button
              key={s.image}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`الشريحة ${i + 1} من ${slides.length}`}
              aria-current={i === index}
              className="h-1.5 overflow-hidden rounded-full bg-white/25 transition-all duration-500 hover:bg-white/50"
              style={{ width: i === index ? "2.5rem" : "1.25rem" }}
            >
              {i === index && (
                <span
                  className="block h-full w-full origin-right rounded-full bg-gradient-to-l from-gold-deep via-gold to-gold-light animate-hero-progress"
                  style={{ animationDuration: `${SLIDE_MS}ms` }}
                />
              )}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="الشريحة التالية"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:border-lime-leaf/70 hover:bg-lime-leaf/20"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <span className="font-latin mr-3 hidden text-sm font-medium tracking-widest text-white/60 md:block">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
