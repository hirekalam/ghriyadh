"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Service } from "@/lib/services";
import { trackEvent } from "./analytics";

export function ServiceCard({
  service,
  trackClick = false,
}: {
  service: Service;
  trackClick?: boolean;
}) {
  return (
    <article className="group card-surface overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <Link
        href={`/services/${service.slug}`}
        className="block"
        onClick={() =>
          trackClick &&
          trackEvent("service_cta_click", { label: service.slug, location: "service-card" })
        }
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent opacity-60" />
          <span className="absolute inset-x-0 bottom-0 h-1 bg-brand-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-ink transition-colors group-hover:text-brand-gradient">
            {service.title}
          </h3>
          <p className="font-latin mt-1 text-xs font-semibold uppercase tracking-wider text-muted/70">
            {service.titleEn}
          </p>
          <p className="mt-3 leading-relaxed text-muted">{service.short}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors group-hover:text-brand-gradient">
            تعرف على الخدمة
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}
