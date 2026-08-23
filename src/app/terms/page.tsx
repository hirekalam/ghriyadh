import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">
      
      {/* Header Banner */}
      <section className="relative bg-primary-deep text-warm-white py-16 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-4">
          <nav className="text-xs text-warm-white/60 flex items-center gap-2 font-bold mb-2">
            <Link href="/" className="hover:text-white">الرئيسية</Link>
            <span>/</span>
            <span className="text-white">الشروط والأحكام</span>
          </nav>
          <h1 className="text-3xl font-black text-white">الشروط والأحكام</h1>
          <p className="text-xs text-warm-white/70">
            تاريخ التحديث: أغسطس 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 md:py-20 text-right text-sm leading-relaxed text-muted-grey">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-justify">
          
          <div className="space-y-3">
            <h2 className="text-lg font-black text-primary-deep">1. قبول الشروط</h2>
            <p>
              يخضع استخدامك لهذا الموقع الإلكتروني لشركة البيت الأخضر (البيت الأخضر لتنسيق الحدائق بالرياض) للشروط والأحكام الموضحة هنا. بتصفحك للموقع أو طلب خدمة عبر النماذج المتوفرة، فإنك توافق على الالتزام الكامل بهذه الشروط.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-black text-primary-deep">2. طلب الاستشارات والتقديرات</h2>
            <p>
              يقوم مهندسو البيت الأخضر بتقديم معاينات واستشارات مجانية للفلل بالرياض بناءً على البيانات والمقاسات الأولية التي يشاركها العميل. عروض الأسعار وجداول الكميات المقدمة للعميل تكون صالحة للمدة المحددة في العرض المكتوب فقط، وتخضع للتعديل في حال تغيرت مساحة العمل أو المواصفات المطلوبة لاحقاً.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-black text-primary-deep">3. تنفيذ وتوريد المواد</h2>
            <p>
              نحن نلتزم بتوريد وتركيب مواد تنسيق الحدائق (مثل الثيل الطبيعي أو الصناعي، البرجولات، شبكات الري، المضخات) وفقاً للمواصفات المتفق عليها كتابياً مع العميل في جدول الكميات. وتلتزم الشركة بتقديم الإرشادات الصحيحة للعناية والري بعد انتهاء أعمال التنفيذ.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-black text-primary-deep">4. حدائق الأسطح والمسؤولية</h2>
            <p>
              عند طلب تنسيق أسطح المنازل، يكون العميل مسؤولاً عن التأكد من سلامة الهيكل الخرساني والإنشائي للفيلا وصلاحيته للأحواض الزراعية الإضافية. وتلتزم شركة البيت الأخضر بالقيام بأعمال العزل المائي والصرف وفقاً لأعلى المعايير الهندسية المتفق عليها في العقد لحماية السقف من التسرب.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-black text-primary-deep">5. الملكية الفكرية وحقوق النشر</h2>
            <p>
              جميع المواد المكتوبة والتصاميم والشعارات الخاصة بالبيت الأخضر على هذا الموقع هي ملك حصري لنا. ولا يُسمح بنسخ أو إعادة استخدام المحتوى المكتوب لأغراض تجارية دون موافقة خطية مسبقة من إدارة الشركة.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-black text-primary-deep">6. القوانين الحاكمة</h2>
            <p>
              تخضع هذه الشروط والأحكام وتُفسر وفقاً للأنظمة واللوائح والقوانين المعمول بها في وزارة التجارة والجهات المختصة بالمملكة العربية السعودية.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
