import Link from 'next/link';
import { Phone, MessageCircle, ArrowLeft, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: 'كم تكلفة تنسيق حدائق الفلل بالرياض؟',
      a: 'لا يوجد سعر ثابت نظراً لاختلاف مقاسات الفناء والمواد المطلوبة؛ فالميزانية تعتمد على مساحة تركيب الثيل (الطبيعي أم الصناعي)، طول وعرض الشلال الجداري أو النافورة، ونوع خامات البرجولات وجلسات البورسلان. نحن نقدم جداول كميات ومقايسات مفصلة لكل عنصر لضمان الشفافية الكاملة.'
    },
    {
      q: 'ما الفرق بين الثيل الطبيعي والثيل الصناعي؟',
      a: 'الثيل الصناعي لا يحتاج لعمليات قص وتسميد وري مستمر، وهو مثالي للأسطح ولممرات المداخل المعتمة، ويبقى لونه زاهياً. أما الثيل الطبيعي فيعطي رطوبة للمكان ويخفض الحرارة بشكل ملحوظ ويمنح لمسة طبيعية، لكنه يتطلب صيانة مستمرة وزيارة دورية وقص وتمديد شبكة ري لضمان خضرته.'
    },
    {
      q: 'هل يمكن تنسيق حدائق الفلل الصغيرة أو الارتدادات الجانبية؟',
      a: 'نعم، نستغل الممرات الضيقة والارتدادات الجانبية والخلفية لتصميم ممرات حجرية أنيقة وتثبيت شلالات جدارية مضيئة لا تشغل حيزاً أرضياً، مع تزيين الجدران بأحواض نباتية عمودية تعطي اتساعاً وجمالاً للمساحة.'
    },
    {
      q: 'هل تقدمون خدمة تركيب شبكات ري أوتوماتيكية بالرياض؟',
      a: 'نعم، نقوم بتصميم وتمديد شبكات ري آلية تحت الأرض تتكون من رشاشات مدفونة للمسطحات العشبية ونقاط ري بالتنقيط للأشجار والزهور. يتم ربطها بمؤقت ذكي يقوم بالري تلقائياً في الصباح الباكر أو المساء لضمان الترطيب وتقليل الهدر المائي.'
    },
    {
      q: 'هل يمكن تركيب شلال أو نافورة في حوش المنزل؟',
      a: 'بالتأكيد، نصمم وننفذ شلالات منزلية جدارية ومستقلة ونوافير بتصاميم عصرية تناسب زوايا الحوش أو تحت الدرج الخارجي، نستخدم مضخات صامتة وموفرة للكهرباء مع إضاءات LED مخفية تعطي تأثيراً رائعاً بالليل.'
    },
    {
      q: 'هل تنسيق الأسطح مناسب لفلل الرياض؟',
      a: 'تنسيق أسطح المنازل والفلل بالنرجس والياسمين يعد خياراً ممتازاً كمتنفس لعائلتك. ونحن نهتم قبل كل شيء بوضع طبقات العزل المائي والحراري لمنع أي رطوبة وفحص نقاط الصرف وتوزيع الأحواض الزراعية والجلسات بطريقة متزنة هندسياً لا تشكل حملاً زائداً على السقف.'
    },
    {
      q: 'ما هي النباتات والزهور المناسبة لمناخ الرياض؟',
      a: 'نفضل النباتات المحلية والصحراوية التي تتحمل درجات الحرارة والشمس المباشرة، مثل النخيل، السدر، الأكاسيا، الياسمين الهندي، المورينجا، والجهنمية المتسلقة التي تزهر بألوان خلابة طوال العام وتتحمل شح المياه.'
    },
    {
      q: 'هل تقدمون خدمات صيانة وتجميل الحدائق؟',
      a: 'نعم، نقدم برامج صيانة مرنة تشمل قص وتسميد الثيل الطبيعي، تقليم الأشجار والزهور، التأكد من فلاتر مضخات الشلال والنوافير، وبرمجة تايمر شبكات الري، ومكافحة الآفات الزراعية للحفاظ على نضارة حديقتك.'
    },
    {
      q: 'هل يمكن تنسيق حدائق تحت الدرج الخارجي؟',
      a: 'نعم، المساحة أسفل السلم الخارجي هي مكان رائع لإضافة لمسة جمالية هادئة. نصممها بوضع أحواض نباتية صغيرة، أو حصى أبيض وأسود منسق مع إضاءات سبوت لايت موجهة، ونافورة مائية صغيرة لإضفاء روح الطبيعة.'
    },
    {
      q: 'هل يمكن تصميم ملاعب كرة قدم منزلية بالثيل الصناعي؟',
      a: 'نعم، نقوم بإنشاء وتجهيز ملاعب كرة القدم بالفلل والقصور السكنية بالرياض، ونستخدم ثيلاً رياضياً عالي الكثافة والسماكة ومقاوم للاحتكاك، مع تخطيط الأرضية ووضع الشباك والمصدات الحامية.'
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">

      {/* Page Header - Apple-style */}
      <section className="relative bg-primary-deep text-warm-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-garden-path.jpg"
            alt="الأسئلة الشائعة - البيت الأخضر"
            className="w-full h-full object-cover opacity-20 object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/90 to-primary-deep/60" />
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-botanical/10 to-water-blue/10 blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-6">
          <nav className="text-xs text-warm-white/50 flex items-center gap-2 font-semibold mb-2">
            <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <span className="w-1 h-1 rounded-full bg-warm-white/20" />
            <span className="text-warm-white/80">الأسئلة الشائعة</span>
          </nav>
          <div className="inline-flex items-center gap-2 text-fresh-green font-bold text-xs uppercase tracking-[0.2em]">
            <span className="w-8 h-px bg-fresh-green/50" />
            <span>مركز المعلومات</span>
          </div>
          <h1 className="apple-title text-white">الأسئلة الشائعة</h1>
          <p className="text-base md:text-lg text-warm-white/60 max-w-2xl leading-relaxed">
            إجابات شافية ومفصلة حول تكاليف وخطوات ومواصفات تنسيق وتصميم حدائق الفلل والأسطح بالرياض.
          </p>
        </div>
      </section>

      {/* FAQs Accordion layout - Apple-style */}
      <section className="bg-white py-24 md:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-4xl mx-auto px-6 space-y-8">

          <div className="text-center max-w-xl mx-auto space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 text-botanical font-bold text-xs uppercase tracking-[0.2em]">
              <span className="w-8 h-px bg-botanical/50" />
              <span>الاستفسارات</span>
            </div>
            <h2 className="apple-heading text-primary-deep">
              أهم الاستفسارات<br className="hidden md:block" />
              <span className="text-gradient-mixed">حول خدماتنا</span>
            </h2>
            <p className="text-xs text-muted-grey">
              إذا كان لديك سؤال آخر لا تتردد في الاتصال المباشر بنا أو مراسلتنا عبر الواتساب.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-warm-white p-6 md:p-8 rounded-3xl border border-charcoal/5 shadow-apple text-right space-y-3 hover:bg-white hover:shadow-apple-lg transition-all duration-300"
              >
                <h3 className="text-base font-black text-primary-deep flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-botanical to-water-blue mt-2 flex-shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-muted-grey leading-relaxed pr-6 text-justify">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ CTA Trigger - Apple-style */}
      <section className="bg-primary-deep text-warm-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-botanical/20 to-water-blue/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-water-blue/10 to-botanical/20 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="apple-title text-white">
              لديك مشروع خاص<br />
              <span className="text-gradient-mixed bg-gradient-to-r from-fresh-green via-water-blue to-soft-blue bg-clip-text text-transparent">
                تود مناقشته؟
              </span>
            </h2>
            <p className="text-base text-warm-white/60 max-w-xl mx-auto leading-relaxed">
              تواصل معنا مباشرة عبر القنوات الرسمية وسيسعد مهندسونا بالرد الفوري على كل تفاصيل التكلفة والتنسيق.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="tel:0557401773"
              className="btn-apple bg-gradient-to-r from-botanical to-water-blue text-white shadow-lg hover:shadow-water-glow"
            >
              <Phone className="w-4 h-4" />
              <span>اتصال مباشر</span>
            </a>
            <a
              href="https://wa.me/966557401773"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apple bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>واتساب المهندس</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}