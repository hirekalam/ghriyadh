import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CookiePolicy = () => {
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
              سياسة الكوكيز
            </h1>
            <p className="text-[#F4F7F5]/70">
              آخر تحديث: مارس 2026
            </p>
          </div>

          <div className="bg-[#F4F7F5]/5 rounded-3xl p-8 lg:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                تستخدم شركة البيت الأخضر (Green House) ملفات الكوكيز والتقنيات المشابهة على موقعنا. توضح هذه السياسة ما هي الكوكيز وكيف نستخدمها وخياراتك بشأنها.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">1. ما هي الكوكيز؟</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                الكوكيز هي ملفات نصية صغيرة يتم تخزينها على جهازك (الكمبيوتر، الجوال، أو الجهاز اللوحي) عند زيارتك لموقعنا. تساعدنا هذه الملفات في تمييز جهازك وتوفير تجربة أفضل.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">2. أنواع الكوكيز التي نستخدمها</h2>
              
              <h3 className="text-[#F4F7F5] font-semibold text-lg mt-6 mb-3">2.1 كوكيز ضرورية</h3>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-4">
                هذه الكوكيز ضرورية لعمل الموقع الأساسي ولا يمكن إيقافها. تشمل:
              </p>
              <ul className="list-disc list-inside text-[#F4F7F5]/70 space-y-2 mb-6">
                <li>تذكر تفضيلاتك (مثل اللغة)</li>
                <li>الحفاظ على أمان جلستك</li>
                <li>تمكين الوظائف الأساسية للموقع</li>
              </ul>

              <h3 className="text-[#F4F7F5] font-semibold text-lg mt-6 mb-3">2.2 كوكيز الأداء</h3>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-4">
                تساعدنا في فهم كيفية تفاعل الزوار مع الموقع:
              </p>
              <ul className="list-disc list-inside text-[#F4F7F5]/70 space-y-2 mb-6">
                <li>عدد الزوار والصفحات المشاهدة</li>
                <li>مصادر الزيارات</li>
                <li>الأخطاء الفنية</li>
              </ul>

              <h3 className="text-[#F4F7F5] font-semibold text-lg mt-6 mb-3">2.3 كوكيز الوظائف</h3>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-4">
                تتيح ميزات إضافية وتحسين التجربة:
              </p>
              <ul className="list-disc list-inside text-[#F4F7F5]/70 space-y-2 mb-6">
                <li>تذكر اختياراتك في النماذج</li>
                <li>تخصيص المحتوى حسب اهتماماتك</li>
                <li>التواصل عبر الدردشة المباشرة</li>
              </ul>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">3. كيفية استخدام الكوكيز</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-4">
                نستخدم الكوكيز للأغراض التالية:
              </p>
              <ul className="list-disc list-inside text-[#F4F7F5]/70 space-y-2 mb-6">
                <li>تحسين تجربة المستخدم على الموقع</li>
                <li>تحليل أداء الموقع واستخدامه</li>
                <li>تخصيص المحتوى والعروض</li>
                <li>ضمان أمان الموقع</li>
                <li>تذكر تفضيلاتك وإعداداتك</li>
              </ul>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">4. كوكيز الطرف الثالث</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                قد نستخدم خدمات طرف ثالث (مثل Google Analytics) التي تستخدم كوكيز خاصة بها. هذه الخدمات تساعدنا في فهم كيفية استخدام الموقع. لا نتحكم في كوكيز هذه الأطراف الثالثة.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">5. إدارة الكوكيز</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-4">
                يمكنك التحكم في الكوكيز بعدة طرق:
              </p>
              <ul className="list-disc list-inside text-[#F4F7F5]/70 space-y-2 mb-6">
                <li><strong>إعدادات المتصفح:</strong> يمكنك ضبط متصفحك لرفض جميع الكوكيز أو تنبيهك عند إرسالها</li>
                <li><strong>الإعدادات عند الزيارة:</strong> يمكنك اختيار قبول أو رفض فئات معينة من الكوكيز</li>
                <li><strong>حذف الكوكيز:</strong> يمكنك حذف الكوكيز المخزنة في أي وقت من إعدادات المتصفح</li>
              </ul>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                ملاحظة: تعطيل بعض الكوكيز قد يؤثر على وظائف الموقع وتجربتك.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">6. مدة تخزين الكوكيز</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                تختلف مدة تخزين الكوكيز:
              </p>
              <ul className="list-disc list-inside text-[#F4F7F5]/70 space-y-2 mb-6">
                <li><strong>كوكيز الجلسة:</strong> تُحذف عند إغلاق المتصفح</li>
                <li><strong>كوكيز دائمة:</strong> تبقى لمدة تتراوح بين أيام وسنوات</li>
              </ul>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">7. تحديثات السياسة</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed mb-6">
                قد نقوم بتحديث هذه السياسة من وقت لآخر لعكس التغييرات في التقنيات أو المتطلبات القانونية. سيتم نشر أي تغييرات على هذه الصفحة.
              </p>

              <h2 className="text-[#F4F7F5] font-bold text-xl mt-8 mb-4">8. التواصل معنا</h2>
              <p className="text-[#F4F7F5]/70 leading-relaxed">
                إذا كان لديك أي استفسارات حول استخدامنا للكوكيز، يرجى التواصل معنا:
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

export default CookiePolicy;
