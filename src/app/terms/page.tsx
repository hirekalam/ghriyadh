import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
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
            <span className="text-warm-white/80">الشروط والأحكام</span>
          </nav>
          <h1 className="apple-title text-white">الشروط والأحكام</h1>
          <p className="text-sm text-warm-white/75">
            تاريخ التحديث: أغسطس 2026
          </p>
        </div>
      </section>

      {/* Main Content - Apple-style */}
      <section className="bg-white py-24 md:py-32 text-right text-sm leading-relaxed text-muted-grey">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-4xl mx-auto px-6 space-y-10 text-justify">

          {[
            { title: '1. قبول الشروط', content: 'يخضع استخدامك لهذا الموقع الإلكتروني لشركة البيت الأخضر (البيت الأخضر لتنسيق الحدائق بالرياض) للشروط والأحكام الموضحة هنا. بتصفحك للموقع أو طلب خدمة عبر النماذج المتوفرة، فإنك توافق على الالتزام الكامل بهذه الشروط.' },
            { title: '2. طلب الاستشارات والتقديرات', content: 'يقوم مهندسو البيت الأخضر بتقديم معاينات واستشارات مجانية للفلل بالرياض بناءً على البيانات والمقاسات الأولية التي يشاركها العميل. عروض الأسعار وجداول الكميات المقدمة للعميل تكون صالحة للمدة المحددة في العرض المكتوب فقط، وتخضع للتعديل في حال تغيرت مساحة العمل أو المواصفات المطلوبة لاحقاً.' },
            { title: '3. تنفيذ وتوريد المواد', content: 'نحن نلتزم بتوريد وتركيب مواد تنسيق الحدائق (مثل الثيل الطبيعي أو الصناعي، البرجولات، شبكات الري، المضخات) وفقاً للمواصفات المتفق عليها كتابياً مع العميل في جدول الكميات. وتلتزم الشركة بتقديم الإرشادات الصحيحة للعناية والري بعد انتهاء أعمال التنفيذ.' },
            { title: '4. حدائق الأسطح والمسؤولية', content: 'عند طلب تنسيق أسطح المنازل، يكون العميل مسؤولاً عن التأكد من سلامة الهيكل الخرساني والإنشائي للفيلا وصلاحيته للأحواض الزراعية الإضافية. وتلتزم شركة البيت الأخضر بالقيام بأعمال العزل المائي والصرف وفقاً لأعلى المعايير الهندسية المتفق عليها في العقد لحماية السقف من التسرب.' },
            { title: '5. الملكية الفكرية وحقوق النشر', content: 'جميع المواد المكتوبة والتصاميم والشعارات الخاصة بالبيت الأخضر على هذا الموقع هي ملك حصري لنا. ولا يُسمح بنسخ أو إعادة استخدام المحتوى المكتوب لأغراض تجارية دون موافقة خطية مسبقة من إدارة الشركة.' },
            { title: '6. القوانين الحاكمة', content: 'تخضع هذه الشروط والأحكام وتُفسر وفقاً للأنظمة واللوائح والقوانين المعمول بها في وزارة التجارة والجهات المختصة بالمملكة العربية السعودية.' },
          ].map((section, idx) => (
            <div key={idx} className="space-y-3 p-6 bg-warm-white rounded-3xl border border-charcoal/5 hover:shadow-apple transition-all duration-300">
              <h2 className="text-lg font-black text-primary-deep">{section.title}</h2>
              <p className="text-xs md:text-sm text-muted-grey leading-relaxed">{section.content}</p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}