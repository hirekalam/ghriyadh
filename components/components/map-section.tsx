"use client";

"use client";

import { MapPin } from "lucide-react";
import { mapEmbedUrl } from "@/lib/site";
import { trackEvent } from "./analytics";

export default function MapSection() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="card-surface overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <span className="eyebrow-ar">
                <MapPin className="h-4 w-4" />
                موقعنا
              </span>
              <h2 className="text-2xl font-bold text-ink sm:text-3xl">
                نخدم الرياض وجميع أحيائها
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                نتطلع لمعاينة مساحتك أينما كنت في الرياض. تواصل معنا لتحديد موعد
                المعاينة وسنصل إليك في أي حي تسكنه.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <p className="flex items-center gap-3 text-ink">
                  <MapPin className="h-4 w-4 text-brand" />
                  الرياض، المملكة العربية السعودية
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Riyadh%2C+Saudi+Arabia"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("map_interaction", { label: "open-maps" })}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-brand hover:underline"
              >
                فتح الموقع على خرائط جوجل
              </a>
            </div>
            <div className="relative min-h-[320px]">
              <iframe
                src={mapEmbedUrl()}
                title="خريطة الرياض"
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
