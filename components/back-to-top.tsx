"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SIZE = 46;
const STROKE = 3;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function BackToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      const p = total > 0 ? Math.min(1, el.scrollTop / total) : 0;
      setProgress(p);
      setVisible(el.scrollTop > 480);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="العودة إلى الأعلى"
      className={`fixed bottom-24 left-4 z-40 flex items-center justify-center rounded-full bg-white text-brand shadow-lift ring-1 ring-forest/10 transition-all duration-300 hover:-translate-y-1 hover:text-brand-dark md:bottom-8 md:left-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      style={{ width: SIZE, height: SIZE }}
    >
      <svg width={SIZE} height={SIZE} className="absolute inset-0 -rotate-90" viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden="true">
        <defs>
          <linearGradient id="backtop-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#136217" />
            <stop offset="55%" stopColor="#367617" />
            <stop offset="100%" stopColor="#6AAB1A" />
          </linearGradient>
        </defs>
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.15}
          strokeWidth={STROKE}
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="url(#backtop-grad)"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
        />
      </svg>
      <ArrowUp className="h-5 w-5 text-brand" strokeWidth={2.2} />
    </button>
  );
}
