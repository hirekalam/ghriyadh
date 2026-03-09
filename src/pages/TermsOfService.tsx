import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TermsOfService = () => {
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
              شروط الاستخدام
            </h1>
            <p className="text-[#F4F7F5]/70">
              آخر تحديث: مارس 2026
            </p>
          </div>

          <div className="bg-[#F4F7F5]/5 rounded-3xl p-8 lg:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                باستخدامك لموقع شركة البيت الأخضر (Green House) وخدماتنا، فإنك توافق على هذه الشروط والأحكام. يرجى قراءتها بعناية.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">1. قبول الشروط</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                باستخدام موقعنا أو طلب خدماتنا، فإنك تقر بأنك قرأت وفهمت ووافقت على الالتزام بهذه الشروط. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام موقعنا أو خدماتنا.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">2. الخدمات</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-4">
                نقدم خدمات تنسيق الحدائق والمساحات الخضراء تشمل:
              </p>
              <ul className="list-disc list-inside text-[#F4F7F5]/70 space-y-2 mb-6">
                <li>تصميم وتنسيق الحدائق</li>
                <li>تركيب العشب الصناعي والطبيعي</li>
                <li>تركيب المظلات والسواتر</li>
                <li>أنظمة الري والنوافير</li>
                <li>الصيانة الدورية</li>
              </ul>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">3. عروض الأسعار والعقود</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                جميع عروض الأسعار صالحة لمدة 30 يوماً ما لم يُذكر خلاف ذلك. يعتبر القبول الكتابي لعرض السعر عقداً ملزماً للطرفين. نحتفظ بالحق في تعديل الأسعار في حال تغير نطاق العمل.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">4. الدفع</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-4">
                شروط الدفع كالتالي:
              </p>
              <ul className="list-disc list-inside text-[#F4F7F5]/70 space-y-2 mb-6">
                <li>دفعة أولى: 50% عند توقيع العقد</li>
                <li>الدفعة النهائية: 50% عند استلام العمل</li>
                <li>للمشاريع الكبيرة، يمكن تقسيم الدفع على مراحل</li>
                <li>نقبل الدفع نقداً أو بالتحويل البنكي</li>
              </ul>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">5. الضمان</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-4">
                نقدم الضمانات التالية:
              </p>
              <ul className="list-disc list-inside text-[#F4F7F5]/70 space-y-2 mb-6">
                <li>العشب الصناعي: ضمان يصل إلى 10 سنوات حسب النوع</li>
                <li>أعمال التركيب: ضمان سنة</li>
                <li>النباتات المزروعة: ضمان 3 أشهر</li>
                <li>أنظمة الري: ضمان سنة</li>
              </ul>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                لا يشمل الضمان الأضرار الناتجة عن الإهمال أو الاستخدام غير السليم أو الظروف الجوية القصوى.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">6. إلغاء الطلب</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                يمكن للعميل إلغاء الطلب قبل بدء العمل مع استرداد كامل المبلغ. إذا تم بدء العمل، يتم خصب تكاليف الأعمال المنجزة والمواد المشتراة.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">7. الملكية الفكرية</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                جميع المحتويات على الموقع (الصور، النصوص، الشعارات) هي ملك لشركة البيت الأخضر ومحمية بموجب قوانين حقوق النشر. لا يجوز استخدامها دون إذن كتابي مسبق.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">8. التعويض</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                نحن غير مسؤولين عن أي أضرار غير مباشرة أو تبعية تنشأ عن استخدام خدماتنا. مسؤوليتنا محدودة بقيمة العقد.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">9. تعديل الشروط</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر التغييرات على هذه الصفحة وسيعتبر استمرارك في استخدام الموقع قبولاً للشروط المعدلة.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">10. القانون الساري</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                تخضع هذه الشروط لقوانين المملكة العربية السعودية، وتختص المحاكم السعودية بالنظر في أي نزاع ينشأ عنها.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">11. التواصل</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed">
                لأي استفسارات حول هذه الشروط، يرجى التواصل معنا على:
                <br />
                البريد الإلكتروني: riyadhgreenhouse@gmail.com
                <br />
                الهاتف: +966 50 239 4828
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
