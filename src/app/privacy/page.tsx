import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">
      
      {/* Header Banner */}
      <section className="relative bg-primary-deep text-warm-white py-16 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-4">
          <nav className="text-xs text-warm-white/60 flex items-center gap-2 font-bold mb-2">
            <Link href="/" className="hover:text-white">الرئيسية</Link>
            <span>/</span>
            <span className="text-white">سياسة الخصوصية</span>
          </nav>
          <h1 className="text-3xl font-black text-white">سياسة الخصوصية</h1>
          <p className="text-xs text-warm-white/70">
            تاريخ التحديث: أغسطس 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 md:py-20 text-right text-sm leading-relaxed text-muted-grey">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-justify">
          
          <div className="space-y-3">
            <h2 className="text-lg font-black text-primary-deep">مقدمة</h2>
            <p>
              نهتم في شركة البيت الأخضر (البيت الأخضر لتنسيق الحدائق بالرياض) بخصوصية زائري موقعنا الإلكتروني. توضح هذه السياسة كيف نقوم بتجميع واستخدام وحماية البيانات التي تزودنا بها عند تعبئة نموذج الاستشارة أو الاتصال بنا.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-black text-primary-deep">1. البيانات التي نقوم بتجميعها</h2>
            <p>
              عند استخدامك لنماذج التواصل في الموقع، قد نقوم بجمع البيانات التالية:
            </p>
            <ul className="list-disc pr-6 space-y-1">
              <li>الاسم الكريم لتمكين مهندسينا من توجيه الخطاب إليك بشكل صحيح.</li>
              <li>رقم جوالك للتمكن من الاتصال بك ومناقشة تفاصيل المعاينة والتصميم.</li>
              <li>اسم الحي السكني في الرياض لتنظيم مهام المعاينة الميدانية.</li>
              <li>نوع الخدمة المطلوبة ووصف تفاصيل مساحتك الخارجية.</li>
              <li>ملفات تعريف الارتباط (Cookies) لتحسين أداء وتجربة تصفح الموقع الإلكتروني.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-black text-primary-deep">2. كيف نستخدم بياناتك</h2>
            <p>
              نستخدم البيانات التي تزودنا بها للأغراض التالية فقط:
            </p>
            <ul className="list-disc pr-6 space-y-1">
              <li>التواصل معك للإجابة على استفساراتك وتحديد مواعيد المعاينة المجانية.</li>
              <li>تخصيص تصاميم الحدائق والبرجولات والشلالات وفقاً لاحتياج فيلتك الخاص.</li>
              <li>تحسين جودة الخدمات وتسهيل عملية التصفح لزائري موقعنا بالرياض.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-black text-primary-deep">3. حماية ومشاركة البيانات</h2>
            <p>
              نحن نلتزم بحماية بياناتك الشخصية ولا نقوم ببيعها أو مشاركتها أو تأجيرها لأي طرف ثالث، باستثناء ما تفرضه القوانين المعمول بها في المملكة العربية السعودية. يتم حفظ البيانات في خوادم آمنة للبيت الأخضر لضمان منع الوصول غير المصرح به.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-black text-primary-deep">4. ملفات تعريف الارتباط (Cookies)</h2>
            <p>
              يستخدم هذا الموقع ملفات تعريف الارتباط الصغيرة لحفظ التفضيلات وتحليل حركة التصفح عبر تحليلات جوجل (Google Analytics) لتحسين الأداء. يمكنك تعديل إعدادات متصفحك لرفض الكوكيز إذا كنت تفضل ذلك، إلا أن ذلك قد يؤثر على تصفحك لبعض صفحات الموقع.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-black text-primary-deep">5. التعديل على سياسة الخصوصية</h2>
            <p>
              يمتلك البيت الأخضر الحق في تحديث أو تعديل سياسة الخصوصية هذه في أي وقت لمواكبة التغيرات التقنية أو التنظيمية. وننصحك بمراجعة هذه الصفحة دورياً للاطلاع على أي تحديثات جديدة.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-black text-primary-deep">اتصل بنا</h2>
            <p>
              إذا كان لديك أي استفسار حول سياسة الخصوصية الخاصة بنا، يمكنك التواصل معنا مباشرة على البريد الإلكتروني: <a href="mailto:riyadhgreenhouse@gmail.com" className="text-primary-deep hover:underline font-bold">riyadhgreenhouse@gmail.com</a>.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
