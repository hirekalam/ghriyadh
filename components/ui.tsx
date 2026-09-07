"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { DiamondMark } from "./signature";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container-site ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-start"
      }`}
    >
      {eyebrow && (
        <span
          className={`mb-4 inline-flex items-center gap-2 rounded-2xl border px-4 py-1.5 text-sm font-semibold ${
            light
              ? "border-gold-light/30 bg-white/5 text-gold-light"
              : "border-gold/25 bg-gradient-to-r from-tint-soft via-white to-gold-soft/60 text-gold-deep"
          }`}
        >
          <DiamondMark className={light ? "" : "opacity-80"} />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`mb-4 inline-flex items-center gap-2 rounded-2xl border px-4 py-1.5 text-sm font-semibold ${
        light
          ? "border-gold-light/30 bg-white/5 text-gold-light"
          : "border-brand/20 bg-gradient-to-r from-tint to-sand text-brand"
      }`}
    >
      <DiamondMark className={light ? "" : "opacity-80"} />
      {children}
    </span>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
