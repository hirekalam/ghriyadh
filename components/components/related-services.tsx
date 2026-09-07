import Link from "next/link";
import { services } from "@/lib/services";
import { ServiceCard } from "./service-card";

export default function RelatedServices({ current }: { current: string }) {
  const others = services.filter((s) => s.slug !== current).slice(0, 3);

  return (
    <section className="section-pad bg-tint/40">
      <div className="container-site">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">خدمات ذات صلة</h2>
            <p className="mt-2 text-muted">اكتشف المزيد من خدماتنا المتكاملة للمساحات الخارجية.</p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-semibold text-brand hover:underline"
          >
            جميع الخدمات
            <span aria-hidden="true">←</span>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
