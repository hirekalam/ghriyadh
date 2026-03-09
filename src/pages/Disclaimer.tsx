import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Disclaimer = () => {
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
              إخلاء المسؤولية
            </h1>
            <p className="text-[#F4F7F5]/70">
              آخر تحديث: مارس 2026
            </p>
          </div>

          <div className="bg-[#F4F7F5]/5 rounded-3xl p-8 lg:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                يرجى قراءة إخلاء المسؤولية هذا بعناية قبل استخدام موقع شركة البيت الأخضر (Green House) أو خدماتنا. باستخدامك للموقع أو خدماتنا، فإنك تقر بأنك قرأت وفهمت هذا الإخلاء.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">1. المعلومات العامة</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                المعلومات الواردة على هذا الموقع هي للأغراض العامة والإعلامية فقط. نسعى جاهدين للحفاظ على دقة وحداثة المعلومات، لكننا لا نقدم أي ضمانات من أي نوع، صريحة أو ضمنية، حول اكتمال أو دقة أو موثوقية أو ملاءمة هذه المعلومات.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">2. عدم تقديم نصائح مهنية</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                المعلومات على هذا الموقع لا تشكل نصائح مهنية في مجال البستنة أو الزراعة أو الهندسة المعمارية. يجب استشارة متخصصين مؤهلين قبل اتخاذ أي قرارات تتعلق بمشاريع الحدائق الكبيرة أو المعقدة.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">3. الصور والتصاميم</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                الصور المعروضة على الموقع هي لأغراض التوضيح فقط. النتائج الفعلية قد تختلف حسب:
              </p>
              <ul className="list-disc list-inside text-[#F4F7F5]/70 space-y-2 mb-6">
                <li>حجم وطبيعة المساحة</li>
                <li>جودة التربة والظروف البيئية</li>
                <li>الظروف الجوية والمناخية</li>
                <li>مستوى العناية والصيانة</li>
                <li>المواد والمنتجات المستخدمة</li>
              </ul>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">4. نجاح النباتات</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                نجاح النباتات يعتمد على عوامل عديدة خارجة عن سيطرتنا، بما في ذلك:
              </p>
              <ul className="list-disc list-inside text-[#F4F7F5]/70 space-y-2 mb-6">
                <li>العناية والري المنتظم</li>
                <li>الظروف الجوية المتطرفة</li>
                <li>الآفات والأمراض</li>
                <li>جودة التربة بعد التركيب</li>
              </ul>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                نقدم إرشادات للعناية بالنباتات، لكننا لا نتحمل المسؤولية عن فشل النباتات بسبب عوامل خارجة عن إرادتنا.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">5. الروابط الخارجية</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                موقعنا قد يحتوي على روابط لمواقع خارجية. هذه الروابط مقدمة للراحة والمعلومات الإضافية. لا نتحمل مسؤولية محتوى هذه المواقع أو ممارسات الخصوصية الخاصة بها.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">6. المسؤولية</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                بحد أقصى ما يسمح به القانون، لا نتحمل المسؤولية عن:
              </p>
              <ul className="list-disc list-inside text-[#F4F7F5]/70 space-y-2 mb-6">
                <li>أي خسائر أو أضرار مباشرة أو غير مباشرة</li>
                <li>فقدان البيانات أو الأرباح</li>
                <li>أضرار ناتجة عن استخدام الموقع أو الخدمات</li>
                <li>أضرار ناتجة عن الاعتماد على المعلومات الواردة</li>
              </ul>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">7. ضمان المنتجات</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                الضمانات المقدمة تخضع للشروط والأحكام المحددة في عقد الخدمة. لا يشمل الضمان:
              </p>
              <ul className="list-disc list-inside text-[#F4F7F5]/70 space-y-2 mb-6">
                <li>الأضرار الناتجة عن الإهمال أو سوء الاستخدام</li>
                <li>الأضرار الناتجة عن الظروف الجوية القصوى</li>
                <li>التلف الطبيعي بمرور الوقت</li>
                <li>التعديلات أو الإصلاحات من قبل أطراف ثالثة</li>
              </ul>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">8. التسعير</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                الأسعار المعروضة على الموقع هي تقديرية وقد تتغير حسب:
              </p>
              <ul className="list-disc list-inside text-[#F4F7F5]/70 space-y-2 mb-6">
                <li>حجم وطبيعة المشروع</li>
                <li>المواد والمنتجات المختارة</li>
                <li>موقع المشروع</li>
                <li>الظروف السوقية</li>
              </ul>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                السعر النهائي يتم تحديده في عرض السعر الرسمي الموقع.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">9. التعديلات</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                نحتفظ بالحق في تعديل هذا الإخلاء في أي وقت. يعتبر استمرارك في استخدام الموقع قبولاً للتعديلات.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">10. القانون الساري</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                يخضع هذا الإخلاء لقوانين المملكة العربية السعودية.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">11. التواصل</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed">
                لأي استفسارات حول هذا الإخلاء، يرجى التواصل معنا:
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

export default Disclaimer;
