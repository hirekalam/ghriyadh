import { useState, useEffect } from 'react';
import { Gift } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `طلب جديد من الموقع - عرض خاص 10%
الاسم: ${formData.name}
رقم الجوال: ${formData.phone}
الخدمة المطلوبة: ${formData.service}
أرغب في الحصول على خصم 10% للعملاء الجدد.`;
    
    window.open(`https://wa.me/966502394828?text=${encodeURIComponent(message)}`, '_blank');
    setIsDialogOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsDialogOpen(true)}
        className={`fixed bottom-6 right-6 z-[1001] transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <div className="relative group">
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#0B3A2E] text-[#F4F7F5] px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            عرض خاص للعملاء الجدد
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#0B3A2E]" />
          </div>

          {/* Button */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2D5A3D] to-[#0B3A2E] flex items-center justify-center shadow-lg animate-pulse-glow transition-transform duration-300 group-hover:scale-110">
            <Gift className="w-7 h-7 text-[#D4A03A]" />
          </div>

          {/* Sparkle effects */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#D4A03A] rounded-full animate-ping" />
        </div>
      </button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-[#0B3A2E] border-[#D4A03A]/30 text-[#F4F7F5] max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-2">
              عرض خاص للعملاء الجدد
            </DialogTitle>
            <p className="text-[#D4A03A] text-center text-lg font-bold">
              احصل على خصم 10% على أول خدمة
            </p>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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
              <label className="block text-right text-[#F4F7F5]/70 mb-2">الخدمة المطلوبة</label>
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
              احصل على العرض الآن
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingCTA;
