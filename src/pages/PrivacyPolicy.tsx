import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-[#0B3A2E] min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="w-full px-6 lg:px-12">
        <div ref={contentRef} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#D4A03A] text-sm font-bold tracking-widest uppercase mb-4 block">
              LEGAL
            </span>
            <h1 className="text-[#F4F7F5] font-black text-4xl lg:text-5xl mb-6">
              سياسة الخصوصية
            </h1>
            <p className="text-[#F4F7F5]/70">
              آخر تحديث: مارس 2026
            </p>
          </div>

          <div className="bg-[#F4F7F5]/5 rounded-3xl p-8 lg:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                نحن في شركة البيت الأخضر (Green House) نلتزم بحماية خصوصيتك. توضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">1. المعلومات التي نجمعها</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-4">
                قد نقوم بجمع المعلومات التالية:
              </p>
              <ul className="list-disc list-inside text-[#F4F7F5]/70 space-y-2 mb-6">
                <li>الاسم الكامل</li>
                <li>رقم الهاتف</li>
                <li>عنوان البريد الإلكتروني</li>
                <li>عنوان الموقع (للخدمات المنزلية)</li>
                <li>معلومات عن المشروع المطلوب</li>
              </ul>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">2. كيفية استخدام المعلومات</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-4">
                نستخدم معلوماتك للأغراض التالية:
              </p>
              <ul className="list-disc list-inside text-[#F4F7F5]/70 space-y-2 mb-6">
                <li>التواصل معك بخصوص طلباتك</li>
                <li>تقديم عروض الأسعار</li>
                <li>تنفيذ الخدمات المطلوبة</li>
                <li>المتابعة بعد الخدمة</li>
                <li>إرسال العروض والتحديثات (بموافقتك)</li>
              </ul>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">3. حماية المعلومات</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                نتخذ إجراءات أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو التعديل أو الإفصاح. لا نشارك معلوماتك مع أطراف ثالثة إلا عند الضرورة لتقديم الخدمات المطلوبة.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">4. ملفات الكوكيز</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                موقعنا يستخدم ملفات الكوكيز لتحسين تجربة المستخدم. يمكنك ضبط إعدادات المتصفح لرفض الكوكيز، ولكن هذا قد يؤثر على وظائف الموقع.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">5. حقوقك</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-4">
                لديك الحق في:
              </p>
              <ul className="list-disc list-inside text-[#F4F7F5]/70 space-y-2 mb-6">
                <li>الوصول إلى معلوماتك الشخصية</li>
                <li>طلب تصحيح المعلومات غير الدقيقة</li>
                <li>طلب حذف معلوماتك</li>
                <li>الاعتراض على استخدام معلوماتك للتسويق</li>
              </ul>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">6. التواصل معنا</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                إذا كان لديك أي استفسارات حول سياسة الخصوصية، يمكنك التواصل معنا على:
              </p>
              <ul className="list-disc list-inside text-[#F4F7F5]/70 space-y-2 mb-6">
                <li>البريد الإلكتروني: riyadhgreenhouse@gmail.com</li>
                <li>الهاتف: +966 50 239 4828</li>
              </ul>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">7. تحديثات السياسة</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed">
                قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تاريخ التحديث.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
