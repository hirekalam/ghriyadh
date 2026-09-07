"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { galleryCategories, galleryItems, type GalleryItem } from "@/lib/gallery";

export default function GalleryGrid({ limit = 12 }: { limit?: number }) {
  const [active, setActive] = useState("الكل");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const items =
    active === "الكل"
      ? galleryItems.slice(0, limit)
      : galleryItems.filter((i) => i.category === active);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    if (lightbox) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <div
        className="flex flex-wrap justify-center gap-2.5"
        role="tablist"
        aria-label="تصفية الأعمال"
      >
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={`rounded-2xl border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              active === cat
                ? "border-brand bg-brand text-white shadow-card"
                : "border-forest/15 bg-white text-muted hover:border-brand/40 hover:text-brand"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>figure]:mb-5">
        {items.map((item) => (
          <figure key={item.src} className="group relative overflow-hidden rounded-2xl">
            <button
              type="button"
              onClick={() => setLightbox(item)}
              className="block w-full"
              aria-label={`عرض: ${item.label}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={item.tall ? 1100 : 600}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-start text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs font-semibold text-lime-leaf">{item.category}</span>
                <span className="block text-lg font-bold">{item.label}</span>
              </figcaption>
            </button>
          </figure>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-forest/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.label}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-5 left-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="إغلاق"
          >
            <X className="h-6 w-6" />
          </button>
          <figure className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={900}
              className="max-h-[75vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center">
              <span className="text-sm font-semibold text-lime-leaf">{lightbox.category}</span>
              <span className="block text-lg font-bold text-white">{lightbox.label}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
