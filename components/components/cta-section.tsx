"use client";

import Image from "next/image";
import { ArrowLeft, Phone } from "lucide-react";
import { site, whatsappLink, defaultWhatsappMsg } from "@/lib/site";
import { trackEvent } from "./analytics";

export default function CtaSection({
  title = "حوّل مساحتك الخارجية إلى مكان تحب أن تعيش فيه",
  description = "نبدأ بالاستماع إلى فكرتك ونتيح لك استشارة توضح فيها اتجاهات التصميم والخيارات المناسبة لمساحتك في الرياض.",
  image = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="relative overflow-hidden shape-media bg-forest">
          <Image
            src={image}
            alt="مساحة خارجية منسقة بإضاءة دافئة"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-forest/40" />
          <div className="bg-gold-glow absolute inset-0" />
          <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              {description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`tel:${site.phoneTel}`}
                onClick={() => trackEvent("phone_click", { label: "cta-section" })}
                className="btn-light w-full sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                اتصال
              </a>
              <a
                href={whatsappLink(defaultWhatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { label: "cta-section" })}
                className="btn-whatsapp w-full sm:w-auto"
              >
                تواصل عبر واتساب
                <ArrowLeft className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-6 text-sm text-white/60">
              أو راسلنا: {site.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
