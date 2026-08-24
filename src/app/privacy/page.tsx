import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">

      {/* Header Banner - Apple-style */}
      <section className="relative bg-primary-deep text-warm-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary-deep/80 to-primary-deep" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-botanical/10 to-water-blue/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-6">
          <nav className="text-xs text-warm-white/80 flex items-center gap-2 font-semibold mb-2">
            <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <span className="w-1 h-1 rounded-full bg-warm-white/20" />
            <span className="text-warm-white/80">سياسة الخصوصية</span>
          </nav>
          <h1 className="apple-title text-white">سياسة الخصوصية</h1>
          <p className="text-sm text-warm-white/75">
            تاريخ التحديث: أغسطس 2026
          </p>
        </div>
      </section>

      {/* Main Content - Apple-style */}
      <section className="bg-white py-24 md:py-32 text-right text-sm leading-relaxed text-muted-grey">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-4xl mx-auto px-6 space-y-10 text-justify">

          <div className="space-y-3 p-6 bg-warm-white rounded-3xl border border-charcoal/5 hover:shadow-apple transition-all duration-300">
            <h2 className="text-lg font-black text-primary-deep">مقدمة</h2>
            <p className="text-xs md:text-sm text-muted-grey leading-relaxed">
              نهتم في شركة البيت الأخضر (البيت الأخضر لتنسيق الحدائق بالرياض) بخصوصية زائري موقعنا الإلكتروني. توضح هذه السياسة كيف نقوم بتجميع واستخدام وحماية البيانات التي تزودنا بها عند تعبئة نموذج الاستشارة أو الاتصال بنا.
            </p>
          </div>

          {[
            {
              title: '1. البيانات التي نقوم بتجميعها',
              items: [
                'الاسم الكريم لتمكين مهندسينا من توجيه الخطاب إليك بشكل صحيح.',
                'رقم جوالك للتمكن من الاتصال بك ومناقشة تفاصيل المعاينة والتصميم.',
                'اسم الحي السكني في الرياض لتنظيم مهام المعاينة الميدانية.',
                'نوع الخدمة المطلوبة ووصف تفاصيل مساحتك الخارجية.',
                'ملفات تعريف الارتباط (Cookies) لتحسين أداء وتجربة تصفح الموقع الإلكتروني.',
              ]
            },
            {
              title: '2. كيف نستخدم بياناتك',
              items: [
                'التواصل معك للإجابة على استفساراتك وتحديد مواعيد المعاينة المجانية.',
                'تخصيص تصاميم الحدائق والبرجولات والشلالات وفقاً لاحتياج فيلتك الخاص.',
                'تحسين جودة الخدمات وتسهيل عملية التصفح لزائري موقعنا بالرياض.',
              ]
            }
          ].map((section, idx) => (
            <div key={idx} className="space-y-3 p-6 bg-warm-white rounded-3xl border border-charcoal/5 hover:shadow-apple transition-all duration-300">
              <h2 className="text-lg font-black text-primary-deep">{section.title}</h2>
              <ul className="space-y-2 pr-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-muted-grey leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-botanical to-water-blue mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {[
            { title: '3. حماية ومشاركة البيانات', content: 'نحن نلتزم بحماية بياناتك الشخصية ولا نقوم ببيعها أو مشاركتها أو تأجيرها لأي طرف ثالث، باستثناء ما تفرضه القوانين المعمول بها في المملكة العربية السعودية. يتم حفظ البيانات في خوادم آمنة للبيت الأخضر لضمان منع الوصول غير المصرح به.' },
            { title: '4. ملفات تعريف الارتباط (Cookies)', content: 'يستخدم هذا الموقع ملفات تعريف الارتباط الصغيرة لحفظ التفضيلات وتحليل حركة التصفح عبر تحليلات جوجل (Google Analytics) لتحسين الأداء. يمكنك تعديل إعدادات متصفحك لرفض الكوكيز إذا كنت تفضل ذلك، إلا أن ذلك قد يؤثر على تصفحك لبعض صفحات الموقع.' },
            { title: '5. التعديل على سياسة الخصوصية', content: 'يمتلك البيت الأخضر الحق في تحديث أو تعديل سياسة الخصوصية هذه في أي وقت لمواكبة التغيرات التقنية أو التنظيمية. وننصحك بمراجعة هذه الصفحة دورياً للاطلاع على أي تحديثات جديدة.' },
          ].map((section, idx) => (
            <div key={idx} className="space-y-3 p-6 bg-warm-white rounded-3xl border border-charcoal/5 hover:shadow-apple transition-all duration-300">
              <h2 className="text-lg font-black text-primary-deep">{section.title}</h2>
              <p className="text-xs md:text-sm text-muted-grey leading-relaxed">{section.content}</p>
            </div>
          ))}

          <div className="space-y-3 p-6 bg-warm-white rounded-3xl border border-charcoal/5 hover:shadow-apple transition-all duration-300">
            <h2 className="text-lg font-black text-primary-deep">اتصل بنا</h2>
            <p className="text-xs md:text-sm text-muted-grey leading-relaxed">
              إذا كان لديك أي استفسار حول سياسة الخصوصية الخاصة بنا، يمكنك التواصل معنا مباشرة على البريد الإلكتروني: <a href="mailto:riyadhgreenhouse@gmail.com" className="text-water-blue hover:underline font-bold">riyadhgreenhouse@gmail.com</a>.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}