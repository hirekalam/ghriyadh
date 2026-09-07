import Breadcrumbs, { type Crumb } from "./breadcrumbs";
import LeafPattern from "./leaf-pattern";

export default function PageHero({
  eyebrow,
  title,
  titleEn,
  description,
  crumbs,
  image,
}: {
  eyebrow?: string;
  title: string;
  titleEn?: string;
  description?: string;
  crumbs: Crumb[];
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest pb-16 pt-36 text-white sm:pb-20">
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,#367617_0,transparent_45%),radial-gradient(circle_at_80%_0%,#084A16_0,transparent_40%),radial-gradient(circle_at_70%_100%,#6AAB1A_0,transparent_45%)]" />
      </div>
      <div className="bg-gold-glow absolute inset-0" />
      <div className="absolute inset-0 text-white opacity-[0.04]">
        <LeafPattern />
      </div>
      <div className="container-site relative">
        <Breadcrumbs items={crumbs} />
        <div className="mt-8 max-w-3xl">
          {eyebrow && (
            <span className="mb-4 inline-flex items-center gap-2 rounded-2xl border border-gold-light/30 bg-white/5 px-4 py-1.5 text-sm font-semibold text-gold-light">
              {eyebrow}
            </span>
          )}
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {titleEn && (
            <p className="font-latin mt-3 text-sm font-semibold uppercase tracking-widest text-gold-gradient">
              {titleEn}
            </p>
          )}
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-white/75">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
