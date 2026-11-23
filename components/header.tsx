"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import { Phone, X } from "lucide-react";
import { navLinks, site, whatsappLink, defaultWhatsappMsg } from "@/lib/site";
import { trackEvent } from "./analytics";

function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="الرئيسية">
      <span className="flex h-11 w-14 shrink-0 items-center justify-center rounded-2xl bg-white p-1.5 shadow-card ring-1 ring-forest/10 transition-transform duration-300 group-hover:-rotate-6">
        <Image
          src="/green-house-riyadh-logo.webp"
          alt="شعار البيت الأخضر — Green House"
          width={804}
          height={580}
          className="h-full w-full object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-latin text-lg font-bold tracking-tight ${
            onDark ? "text-white" : "text-forest"
          }`}
        >
          Green House
        </span>
        <span
          className={`mt-1 text-sm font-semibold ${
            onDark ? "text-white/70" : "text-muted"
          }`}
        >
          البيت الأخضر
        </span>
      </span>
    </Link>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  const lineStyle: CSSProperties = {
    transformBox: "fill-box",
    transformOrigin: "center",
    transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.2s ease",
  };
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="menu-grad" x1="0" y1="0" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#136217" />
          <stop offset="0.55" stopColor="#367617" />
          <stop offset="1" stopColor="#6AAB1A" />
        </linearGradient>
      </defs>
      <line
        x1="3.5"
        y1="7"
        x2="22.5"
        y2="7"
        stroke="url(#menu-grad)"
        strokeWidth="2.4"
        strokeLinecap="round"
        style={{
          ...lineStyle,
          transform: open ? "translateY(6px) rotate(45deg)" : "none",
        }}
      />
      <line
        x1="3.5"
        y1="13"
        x2="18"
        y2="13"
        stroke="url(#menu-grad)"
        strokeWidth="2.4"
        strokeLinecap="round"
        style={{
          ...lineStyle,
          opacity: open ? 0 : 1,
        }}
      />
      <circle
        cx="21.5"
        cy="13"
        r="2"
        fill="url(#menu-grad)"
        style={{
          transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.2s ease",
          transform: open ? "scale(0)" : "scale(1)",
          transformBox: "fill-box",
          transformOrigin: "center",
          opacity: open ? 0 : 1,
        }}
      />
      <line
        x1="3.5"
        y1="19"
        x2="22.5"
        y2="19"
        stroke="url(#menu-grad)"
        strokeWidth="2.4"
        strokeLinecap="round"
        style={{
          ...lineStyle,
          transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
        }}
      />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [transparent, setTransparent] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (isHome) setTransparent(window.scrollY < 420);
      else setTransparent(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !transparent;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`container-site transition-all duration-300 ease-out ${
            solid ? "py-2.5 sm:py-3" : "py-0"
          }`}
        >
          <div
            className={`flex items-center justify-between gap-4 transition-all duration-300 ease-out ${
              solid
                ? "h-16 rounded-2xl border border-forest/10 bg-white/90 px-4 shadow-lift backdrop-blur-xl sm:h-[72px] sm:rounded-full sm:border-forest/10 sm:px-5"
                : "h-[76px] border-b border-white/10 bg-transparent"
            }`}
          >
            <Logo onDark={!solid} />

            <nav className="hidden items-center gap-1 xl:flex" aria-label="القائمة الرئيسية">
              {navLinks.slice(0, 8).map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative rounded-2xl px-3.5 py-2 text-[15px] font-medium transition-colors ${
                      active
                        ? solid
                          ? "text-brand-gradient font-semibold"
                          : "text-lime-leaf"
                        : solid
                          ? "text-ink/80 hover:text-brand"
                          : "text-white/85 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-gradient" />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => trackEvent("service_cta_click", { label: "header-cta" })}
                className="ms-2 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-[15px] font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold"
              >
                اطلب استشارة
              </Link>
            </nav>

            <div className="flex items-center gap-2 xl:hidden">
              <a
                href={`tel:${site.phoneTel}`}
                onClick={() => trackEvent("phone_click", { label: "header-mobile" })}
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
                  solid
                    ? "border-forest/15 text-forest hover:bg-tint"
                    : "border-white/30 text-white hover:bg-white/10"
                }`}
                aria-label="اتصل بنا"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="فتح القائمة"
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
                  solid
                    ? "border-forest/15 text-forest hover:bg-tint"
                    : "border-white/30 text-white hover:bg-white/10"
                }`}
              >
                <MenuIcon open={open} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] xl:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-forest/50 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute inset-y-0 left-0 flex w-[88%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="قائمة التنقل"
        >
          <div className="flex h-[76px] items-center justify-between border-b border-forest/10 px-5">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="إغلاق القائمة"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-forest/15 text-forest hover:bg-tint"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="قائمة الجوال">
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-lg font-semibold transition-colors ${
                        active
                          ? "bg-tint text-brand"
                          : "text-ink hover:bg-tint/60"
                      }`}
                    >
                      {link.label}
                      {active && (
                        <span className="h-2 w-2 rotate-45 rounded-[2px] bg-gradient-to-br from-lime to-lime-leaf" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="space-y-3 border-t border-forest/10 p-5">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              اطلب استشارة
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${site.phoneTel}`}
                onClick={() => {
                  setOpen(false);
                  trackEvent("phone_click", { label: "drawer" });
                }}
                className="btn-secondary justify-center"
              >
                اتصال
              </a>
              <a
                href={whatsappLink(defaultWhatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setOpen(false);
                  trackEvent("whatsapp_click", { label: "drawer" });
                }}
                className="btn-whatsapp justify-center"
              >
                واتساب
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
