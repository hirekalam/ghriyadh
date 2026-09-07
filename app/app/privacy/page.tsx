import PageHero from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "سياسة الخصوصية | البيت الأخضر",
  description:
    "سياسة الخصوصية لموقع البيت الأخضر — Green House في الرياض: كيف نتعامل مع بياناتك الشخصية عند استخدام موقعنا وخدماتنا.",
  path: "/privacy",
});

const sections = [
  {
    title: "مقدمة",
    body: "نلتزم في البيت الأخضر (Green House) بحماية خصوصية زوار موقعنا وعملائنا. توضح هذه السياسة كيفية جمعنا للبيانات واستخدامها وحمايتها عند زيارتك لموقعنا أو تواصلك معنا.",
  },
  {
    title: "البيانات التي نجمعها",
    body: "قد نجمع البيانات التي تقدمها لنا طوعاً عبر نموذج التواصل أو المكالمات أو واتساب، مثل الاسم ورقم الجوال ونوع الخدمة المطلوبة والحي والوصف الذي ترسله. لا نجمع بيانات من زيارتك للموقع إلا ما تقدمه أنت بنفسك.",
  },
  {
    title: "كيف نستخدم بياناتك",
    body: "نستخدم البيانات التي تقدمها حصرياً للتواصل معك بخصوص طلبك أو استفسارك، ولإعداد العروض والتصورات التي تطلبها. لا نبيع بياناتك أو نشاركها مع أطراف ثالثة لأغراض تسويقية.",
  },
  {
    title: "ملفات تعريف الارتباط",
    body: "قد يستخدم موقعنا ملفات تعريف الارتباط (Cookies) لتحسين تجربة التصفح وفهم كيفية استخدام الزوار للموقع، ولأغراض تحليلات الزيارات. يمكنك ضبط متصفحك لمنع هذه الملفات، لكن قد يؤثر ذلك على بعض مزايا الموقع.",
  },
  {
    title: "أدوات التحليلات",
    body: "نستخدم أدوات تحليل الزيارات مثل Google Analytics لفهم أداء الموقع وتحسين تجربة المستخدم. هذه الأدوات تجمع بيانات إحصائية مجهولة الهوية لا ترتبط مباشرة بهويتك الشخصية.",
  },
  {
    title: "حماية البيانات",
    body: "نتخذ إجراءات معقولة لحماية البيانات التي نتلقاها من إساءة الاستخدام أو الوصول غير المصرح به، ولا نحتفظ بالبيانات إلا للمدة اللازمة لتحقيق الغرض الذي جُمعت من أجله.",
  },
  {
    title: "روابط خارجية",
    body: "قد يحتوي موقعنا على روابط لمواقع خارجية (مثل خرائط جوجل أو واتساب). لسنا مسؤولين عن سياسات الخصوصية لتلك المواقع، وننصحك بمراجعة سياساتها عند زيارتها.",
  },
  {
    title: "حقوقك",
    body: "يحق لك في أي وقت طلب الاطلاع على بياناتك أو تصحيحها أو حذفها بالتواصل معنا عبر البريد الإلكتروني أو الهاتف المذكور في الموقع، وسنتعامل مع طلبك خلال مدة معقولة.",
  },
  {
    title: "تحديثات السياسة",
    body: "قد نقوم بتحديث هذه السياسة من وقت لآخر، وسننشر أي تغييرات على هذه الصفحة. ننصحك بمراجعتها دورياً للاطلاع على آخر التحديثات.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "سياسة الخصوصية", url: "/privacy" }])} />

      <PageHero
        eyebrow="سياسة الخصوصية"
        title="سياسة الخصوصية"
        titleEn="Privacy Policy"
        description="نشرح لك في هذه الصفحة كيفية تعاملنا مع بياناتك الشخصية بكل شفافية."
        crumbs={[{ label: "سياسة الخصوصية" }]}
      />

      <section className="section-pad">
        <div className="container-site max-w-3xl">
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-ink sm:text-2xl">{section.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{section.body}</p>
              </div>
            ))}
          </div>
          <div className="card-surface mt-12 p-6 text-sm text-muted">
            آخر تحديث لهذه السياسة: يوليو 2026. للاستفسارات، راسلنا على{" "}
            <a href="mailto:riyadhgreenhouse@gmail.com" className="font-semibold text-brand hover:underline">
              riyadhgreenhouse@gmail.com
            </a>
            .
          </div>
        </div>
      </section>
    </>
  );
}
