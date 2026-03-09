import { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Gift, Check, Phone, Percent, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  'خصم 10% على أول خدمة',
  'استشارة مجانية',
  'تصميم مبدئي مجاني',
  'ضمان جودة المنتجات',
  'متابعة بعد التنفيذ',
];

const SpecialOffer = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animateItems = contentRef.current?.querySelectorAll('.animate-item');
      if (animateItems && animateItems.length > 0) {
        gsap.fromTo(
          animateItems,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `طلب جديد من الموقع - عرض خاص 10%
الاسم: ${formData.name}
رقم الجوال: ${formData.phone}
الخدمة المطلوبة: ${formData.service}
أرغب في الحصول على خصم 10% للعملاء الجدد.`;
    
    window.open(`https://wa.me/966502394828?text=${encodeURIComponent(message)}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="relative bg-[#0B3A2E] min-h-screen pt-24 lg:pt-32 pb-20">
      {/* Hero */}
      <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src="/images/cta-background.jpg"
          alt="عرض خاص"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B3A2E] via-[#0B3A2E]/70 to-[#0B3A2E]/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="w-20 h-20 rounded-full bg-[#D4A03A] flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <Gift className="w-10 h-10 text-[#0B3A2E]" />
            </div>
            <span className="text-[#D4A03A] text-sm font-bold tracking-widest uppercase mb-4 block">
              SPECIAL OFFER
            </span>
            <h1 className="text-[#F4F7F5] font-black text-4xl lg:text-6xl mb-4">
              عرض خاص للعملاء الجدد
            </h1>
            <p className="text-[#F4F7F5]/70 text-xl">
              احصل على خصم <span className="text-[#D4A03A] font-bold text-3xl">10%</span> على أول خدمة
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="w-full px-6 lg:px-12 -mt-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Benefits */}
            <div className="animate-item">
              <div className="bg-[#F4F7F5]/5 rounded-3xl p-8 lg:p-10 h-full">
                <h2 className="text-[#F4F7F5] font-bold text-2xl mb-6">
                  ماذا ستحصل علي؟
                </h2>
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#D4A03A] flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-[#0B3A2E]" />
                      </div>
                      <span className="text-[#F4F7F5]/80">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0B3A2E]/50 rounded-2xl p-4 text-center">
                    <Percent className="w-8 h-8 text-[#D4A03A] mx-auto mb-2" />
                    <div className="text-[#F4F7F5] font-bold text-2xl">10%</div>
                    <div className="text-[#F4F7F5]/60 text-sm">خصم</div>
                  </div>
                  <div className="bg-[#0B3A2E]/50 rounded-2xl p-4 text-center">
                    <Clock className="w-8 h-8 text-[#D4A03A] mx-auto mb-2" />
                    <div className="text-[#F4F7F5] font-bold text-2xl">محدو</div>
                    <div className="text-[#F4F7F5]/60 text-sm">الوقت</div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-8 bg-[#D4A03A]/10 rounded-2xl p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#D4A03A] fill-[#D4A03A]" />
                    ))}
                  </div>
                  <p className="text-[#F4F7F5]/80 text-sm mb-4">
                    "استفدت من العرض وتم تنفيذ حديقتي باحترافية عالية. أنصح الجميع بالاستفادة من هذا العرض الرائع!"
                  </p>
                  <div className="text-[#F4F7F5]/60 text-sm">- أحد عملائنا السعداء</div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="animate-item">
              <div className="bg-[#F4F7F5] rounded-3xl p-8 lg:p-10">
                <h2 className="text-[#0B3A2E] font-bold text-2xl mb-2">
                  احصل على العرض الآن
                </h2>
                <p className="text-[#0B3A2E]/60 mb-6">
                  املأ النموذج وسنقوم بالتواصل معك في أقرب وقت
                </p>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-[#D4A03A] flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-[#0B3A2E]" />
                    </div>
                    <h3 className="text-[#0B3A2E] font-bold text-xl mb-2">
                      تم إرسال طلبك بنجاح!
                    </h3>
                    <p className="text-[#0B3A2E]/60">
                      سنتواصل معك قريباً
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[#0B3A2E]/70 mb-2 text-sm font-medium">
                        الاسم
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#F4F7F5] border border-[#0B3A2E]/20 rounded-xl px-4 py-3 text-[#0B3A2E] focus:outline-none focus:border-[#D4A03A] text-right"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label className="block text-[#0B3A2E]/70 mb-2 text-sm font-medium">
                        رقم الجوال
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#F4F7F5] border border-[#0B3A2E]/20 rounded-xl px-4 py-3 text-[#0B3A2E] focus:outline-none focus:border-[#D4A03A] text-right"
                        placeholder="05xxxxxxxx"
                      />
                    </div>
                    <div>
                      <label className="block text-[#0B3A2E]/70 mb-2 text-sm font-medium">
                        الخدمة المطلوبة
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#F4F7F5] border border-[#0B3A2E]/20 rounded-xl px-4 py-3 text-[#0B3A2E] focus:outline-none focus:border-[#D4A03A] text-right"
                      >
                        <option value="">اختر الخدمة</option>
                        <option value="تنسيق الحدائق">تنسيق الحدائق</option>
                        <option value="العشب الصناعي">العشب الصناعي</option>
                        <option value="العشب الطبيعي">العشب الطبيعي</option>
                        <option value="المظلات والسواتر">المظلات والسواتر</option>
                        <option value="الري والنوافير">الري والنوافير</option>
                        <option value="الصيانة الدورية">الصيانة الدورية</option>
                      </select>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#D4A03A] text-[#0B3A2E] hover:bg-[#c4932f] font-bold py-4 rounded-xl text-lg"
                    >
                      <Phone className="w-5 h-5 ml-2" />
                      احصل على العرض الآن
                    </Button>
                    <p className="text-[#0B3A2E]/50 text-xs text-center">
                      بالضغط على الزر، سيتم توجيهك إلى واتساب لإكمال طلبك
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="animate-item mt-12 text-center">
            <p className="text-[#F4F7F5]/50 text-sm">
              * العرض ساري للعملاء الجدد فقط. لا يجمع مع عروض أخرى. يسري العرض لمدة محدودة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
