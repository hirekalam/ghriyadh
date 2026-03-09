import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Send, MessageCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.4,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `طلب جديد من الموقع
الاسم: ${formData.name}
رقم الجوال: ${formData.phone}
الخدمة المطلوبة: ${formData.service}
أرغب في الحصول على عرض سعر.`;
    
    window.open(`https://wa.me/966502394828?text=${encodeURIComponent(message)}`, '_blank');
    setIsDialogOpen(false);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-[#0B3A2E] py-20 lg:py-32 z-[200]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/cta-background.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B3A2E]/75" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 w-full px-6 lg:px-12 will-change-transform"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[#F4F7F5] font-black text-4xl lg:text-6xl mb-6">
            ابدأ مشروع حديقتك اليوم
          </h2>
          <p className="text-[#F4F7F5]/70 text-lg lg:text-xl mb-10">
            تواصل معنا… نناقش فكرتك ونُحضر عرضاً يناسب ميزانيتك.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <button className="btn-primary flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  <span>احصل على عرض سعر</span>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-[#0B3A2E] border-[#D4A03A]/30 text-[#F4F7F5] max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center mb-4">
                    طلب عرض سعر
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-right text-[#F4F7F5]/70 mb-2">الاسم</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0B3A2E]/50 border border-[#D4A03A]/30 rounded-lg px-4 py-3 text-[#F4F7F5] focus:outline-none focus:border-[#D4A03A] text-right"
                      placeholder="أدخل اسمك"
                    />
                  </div>
                  <div>
                    <label className="block text-right text-[#F4F7F5]/70 mb-2">رقم الجوال</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0B3A2E]/50 border border-[#D4A03A]/30 rounded-lg px-4 py-3 text-[#F4F7F5] focus:outline-none focus:border-[#D4A03A] text-right"
                      placeholder="05xxxxxxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-right text-[#F4F7F5]/70 mb-2">نوع الخدمة</label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#0B3A2E]/50 border border-[#D4A03A]/30 rounded-lg px-4 py-3 text-[#F4F7F5] focus:outline-none focus:border-[#D4A03A] text-right"
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
                    className="w-full bg-[#D4A03A] text-[#0B3A2E] hover:bg-[#c4932f] font-bold py-3 rounded-lg"
                  >
                    إرسال الطلب
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            <a
              href="https://wa.me/966502394828"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#F4F7F5]/70 hover:text-[#D4A03A] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>أو راسلنا على الواتساب</span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-[#F4F7F5]/60">
            <a href="tel:+966502394828" className="flex items-center gap-2 hover:text-[#D4A03A] transition-colors">
              <Phone className="w-4 h-4" />
              <span>+966 50 239 4828</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
