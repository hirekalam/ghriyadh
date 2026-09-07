import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/contact-form";
import MapSection from "@/components/map-section";
import PageHero from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/jsonld";
import { site, whatsappLink, defaultWhatsappMsg } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "تواصل معنا لتنسيق حدائق بالرياض | البيت الأخضر",
  description:
    "تواصل مع البيت الأخضر لتنسيق الحدائق في الرياض: هاتف 0557401773، واتساب، أو البريد riyadhgreenhouse@gmail.com. اطلب استشارتك المجانية وابدأ مشروعك الآن.",
  path: "/contact",
});

export default function ContactPage() {
  const contactCards = [
    {
      icon: Phone,
      title: "اتصال",
      value: site.phoneDisplay,
      href: `tel:${site.phoneTel}`,
      label: "اضغط للاتصال",
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      value: "+966557401773",
      href: whatsappLink(defaultWhatsappMsg),
      label: "راسلنا الآن",
      external: true,
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: site.email,
      href: `mailto:${site.email}`,
      label: "أرسل لنا بريداً",
    },
    {
      icon: MapPin,
      title: "الموقع",
      value: "الرياض، المملكة العربية السعودية",
      href: "https://www.google.com/maps/search/?api=1&query=Riyadh%2C+Saudi+Arabia",
      label: "عرض على الخريطة",
      external: true,
    },
  ];

  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={breadcrumbJsonLd([{ name: "تواصل معنا", url: "/contact" }])} />

      <PageHero
        eyebrow="تواصل معنا"
        title="ابدأ مشروعك مع البيت الأخضر"
        titleEn="Contact Us"
        description="أخبرنا عن مساحتك وسنكون سعداء بمساعدتك. راسلنا عبر النموذج أو تواصل معنا مباشرة بأي وسيلة تناسبك."
        crumbs={[{ label: "تواصل معنا" }]}
      />

      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-ink sm:text-3xl">وسائل التواصل</h2>
              <p className="mt-3 leading-relaxed text-muted">
                نرد على استفساراتك بأقرب وقت ممكن خلال أوقات العمل، ويمكنك مراسلتنا
                في أي وقت عبر واتساب.
              </p>
              <div className="mt-7 grid gap-4">
                {contactCards.map((card) => {
                  const Icon = card.icon;
                  const content = (
                    <>
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-muted">
                          {card.title}
                        </span>
                        <span className="mt-0.5 block font-bold text-ink" dir="ltr">
                          {card.value}
                        </span>
                        <span className="mt-0.5 block text-sm font-semibold text-brand">
                          {card.label}
                        </span>
                      </span>
                    </>
                  );
                  const cls =
                    "group card-surface flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift";
                  return card.external ? (
                    <a
                      key={card.title}
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cls}
                    >
                      {content}
                    </a>
                  ) : (
                    <a key={card.title} href={card.href} className={cls}>
                      {content}
                    </a>
                  );
                })}
              </div>
              <div className="card-surface mt-5 flex items-start gap-4 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tint text-brand">
                  <Clock className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-muted">أوقات العمل</p>
                  <p className="mt-0.5 font-bold text-ink">
                    نستقبل استفساراتكم يومياً، وسنوافيكم بمواعيد الرد عند التواصل.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow-ar inline-flex">خطوات بسيطة</span>
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              ماذا يحدث بعد تواصلك معنا؟
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              رحلة مشروعك تبدأ بخطوة تواصل واحدة، وهذه المراحل التي ستجتازها
              معنا بعدها.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "تواصلنا معك",
                desc: "نستقبل استفسارك عبر الهاتف أو واتساب أو النموذج، ونرد عليك بأقرب وقت ممكن.",
              },
              {
                num: "02",
                title: "الاستماع لاحتياجك",
                desc: "نسأل عن مساحتك واستخدامك لها وأولوياتك، لبناء تصور مبدئي صحيح.",
              },
              {
                num: "03",
                title: "معاينة الموقع",
                desc: "نحدد موعداً مناسباً لزيارة المساحة وقياسها ودراسة التربة والشمس والتصريف.",
              },
              {
                num: "04",
                title: "العرض والتنفيذ",
                desc: "نقدم عرضاً واضحاً بالتصميم والتكلفة، وبعد اعتمادك نبدأ التنفيذ بجدول معلن.",
              },
            ].map((step) => (
              <div key={step.num} className="card-surface p-7">
                <span className="font-latin text-4xl font-bold text-forest/10">{step.num}</span>
                <h3 className="mt-3 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl">
            <div className="card-surface p-7 sm:p-9">
              <h3 className="text-xl font-bold text-ink sm:text-2xl">
                ما الذي يفيدنا عند تواصلك؟
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                لتسريع معالجة استفسارك، يمكنك تجهيز هذه المعلومات قبل مراسلتنا:
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "نوع المساحة: فيلا، منزل، سطح، أو ملعب",
                  "مساحة تقريبية للأرض أو مشروع جديد",
                  "نوع الخدمة المطلوبة أو فكرة مبدئية",
                  "صور حالية للمساحة إن وجدت",
                  "الميزانية التقريبية إن حددتها",
                  "جدولك الزمني المفضل لبدء العمل",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-lime" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </>
  );
}
