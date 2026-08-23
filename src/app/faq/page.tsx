import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

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
      
      {/* Page Header */}
      <section className="relative bg-primary-deep text-warm-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-garden-path.jpg"
            alt="الأسئلة الشائعة - البيت الأخضر"
            className="w-full h-full object-cover opacity-20 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-4">
          <nav className="text-xs text-warm-white/60 flex items-center gap-2 font-bold mb-4">
            <Link href="/" className="hover:text-white">الرئيسية</Link>
            <span>/</span>
            <span className="text-white">الأسئلة الشائعة</span>
          </nav>
          <span className="text-xs font-bold text-fresh-green tracking-widest uppercase block border-r-2 border-botanical pr-3">
            مركز المعلومات
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white">الأسئلة الشائعة</h1>
          <p className="text-sm md:text-base text-warm-white/70 max-w-2xl leading-relaxed">
            إجابات شافية ومفصلة حول تكاليف وخطوات ومواصفات تنسيق وتصميم حدائق الفلل والأسطح بالرياض.
          </p>
        </div>
      </section>

      {/* FAQs Accordion layout */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          
          <div className="text-center max-w-xl mx-auto space-y-3 mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-primary-deep">أهم الاستفسارات حول خدماتنا</h2>
            <p className="text-xs text-muted-grey">
              إذا كان لديك سؤال آخر لا تتردد في الاتصال المباشر بنا أو مراسلتنا عبر الواتساب.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-warm-white p-6 md:p-8 rounded-3xl border border-charcoal/5 text-right space-y-3 hover:shadow-card hover:bg-white transition-all duration-300"
              >
                <h3 className="text-base font-black text-primary-deep flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-botanical mt-2 flex-shrink-0" />
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

      {/* FAQ CTA Trigger */}
      <section className="bg-primary-deep text-warm-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-white">لديك مشروع خاص تود مناقشته؟</h2>
          <p className="text-sm text-warm-white/70 max-w-xl mx-auto">
            تواصل معنا مباشرة عبر القنوات الرسمية وسيسعد مهندسونا بالرد الفوري على كل تفاصيل التكلفة والتنسيق.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="tel:0557401773"
              className="bg-white text-primary-deep font-bold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <Phone className="w-4 h-4 fill-primary-deep" />
              <span>اتصال مباشر</span>
            </a>
            <a
              href="https://wa.me/966557401773"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-botanical text-warm-white font-bold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <MessageCircle className="w-4 h-4 fill-warm-white" />
              <span>واتساب المهندس</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
