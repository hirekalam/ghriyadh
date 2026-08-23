"use client";

import { useState } from 'react';
import { CheckCircle2, AlertTriangle, Loader2, Leaf, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    neighborhood: '',
    description: '',
    preferredTime: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const services = [
    { label: 'تنسيق حدائق كامل بالرياض', value: 'garden-landscaping' },
    { label: 'تنسيق أسطح الفلل بالنرجس', value: 'rooftop-spaces' },
    { label: 'توريد وتركيب ثيل صناعي', value: 'artificial-grass' },
    { label: 'تركيب ثيل طبيعي بلدي / هولندي', value: 'natural-grass' },
    { label: 'تركيب شلالات ونوافير عصرية', value: 'waterfalls-fountains' },
    { label: 'تركيب شبكة ري أوتوماتيكية ذكية', value: 'automatic-irrigation' },
    { label: 'تصميم وتنفيذ جلسات خارجية', value: 'outdoor-seating' },
    { label: 'تركيب برجولات ومظلات حدائق', value: 'pergolas-shades' },
    { label: 'تصميم وتركيب أحواض زراعية', value: 'planter-boxes' },
    { label: 'زراعة الأشجار والنخيل والزهور', value: 'trees-palms-flowers' },
    { label: 'تنسيق مساحات تحت الدرج', value: 'under-stair-landscaping' },
    { label: 'صيانة وتجميل الحدائق الدورية', value: 'garden-maintenance' },
    { label: 'تصميم وإنشاء ملاعب كرة القدم', value: 'football-fields' },
  ];

  const times = [
    { label: 'الصباح (8:00 ص - 12:00 م)', value: 'morning' },
    { label: 'بعد الظهر (12:00 م - 4:00 م)', value: 'afternoon' },
    { label: 'المساء (4:00 م - 9:00 م)', value: 'evening' },
  ];

  const neighborhoods = [
    'النرجس', 'الياسمين', 'الصحافة', 'العارض', 'الملقا', 'حطين', 'القيروان', 'النخيل',
    'الغدير', 'الورود', 'الرحمانية', 'الرائد', 'المحمدية', 'العليا', 'السليمانية', 'المروج',
    'قرطبة', 'الرمال', 'المونسية', 'اليرموك', 'ظهرة لبن', 'عرقة', 'حي آخر بالرياض'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'الرجاء إدخال الاسم الكريم';
    if (!formData.phone.trim()) {
      newErrors.phone = 'الرجاء إدخال رقم الجوال';
    } else if (!/^05\d{8}$/.test(formData.phone.trim()) && !/^\+9665\d{8}$/.test(formData.phone.trim())) {
      newErrors.phone = 'الرجاء إدخال رقم جوال سعودي صحيح (مثال: 0557401773)';
    }
    if (!formData.serviceType) newErrors.serviceType = 'الرجاء اختيار نوع الخدمة';
    if (!formData.neighborhood) newErrors.neighborhood = 'الرجاء اختيار الحي في الرياض';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    // Simulate API delivery
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        serviceType: '',
        neighborhood: '',
        description: '',
        preferredTime: '',
      });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/10 shadow-apple-lg hover:shadow-apple-xl transition-all duration-300">

      {status === 'success' ? (
        <div className="text-center py-10 flex flex-col items-center justify-center animate-fade-in-up">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-botanical/40 to-water-blue/20 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-water-blue" />
          </div>
          <h3 className="text-white font-black text-2xl mb-2">تم استلام طلبك بنجاح!</h3>
          <p className="text-warm-white/60 text-base max-w-sm mb-8">
            شكراً لتواصلك مع البيت الأخضر. سيقوم مهندسو التصميم لدينا بالتواصل معك خلال أفضل وقت اخترته لمناقشة تفاصيل مشروعك.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="btn-apple bg-gradient-to-r from-botanical to-water-blue text-white shadow-lg hover:shadow-water-glow"
          >
            <Leaf className="w-4 h-4" />
            <span>إرسال طلب آخر</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="text-right border-b border-white/10 pb-5 mb-6">
            <h3 className="text-white font-black text-xl mb-1">ابدأ بتصميم مساحتك الخارجية</h3>
            <p className="text-xs text-warm-white/50">امِلأ النموذج وسيتصل بك أحد مهندسينا لمعاينة الموقع مجاناً.</p>
          </div>

          {status === 'error' && (
            <div className="bg-red-500/10 text-red-300 p-4 rounded-xl flex items-center gap-3 text-xs border border-red-500/20">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              <span>حدث خطأ أثناء إرسال طلبك. الرجاء المحاولة مرة أخرى أو الاتصال بنا مباشرة.</span>
            </div>
          )}

          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-bold text-warm-white/80">الاسم الكريم *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="مثال: محمد بن عبد العزيز"
              className={`w-full px-5 py-3.5 rounded-2xl bg-white/5 backdrop-blur-sm border text-white placeholder:text-white/30 focus:outline-none focus:ring-1 text-sm transition-all duration-300 ${errors.name ? 'border-red-500/50 focus:ring-red-500/50' : 'border-white/10 focus:border-water-blue/50 focus:ring-water-blue/30'
                }`}
            />
            {errors.name && <span className="text-xs text-red-300 font-medium">{errors.name}</span>}
          </div>

          {/* Phone Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-xs font-bold text-warm-white/80">رقم الجوال *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="مثال: 0557401773"
              className={`w-full px-5 py-3.5 rounded-2xl bg-white/5 backdrop-blur-sm border text-white placeholder:text-white/30 focus:outline-none focus:ring-1 text-sm dir-ltr text-right transition-all duration-300 ${errors.phone ? 'border-red-500/50 focus:ring-red-500/50' : 'border-white/10 focus:border-water-blue/50 focus:ring-water-blue/30'
                }`}
            />
            {errors.phone && <span className="text-xs text-red-300 font-medium">{errors.phone}</span>}
          </div>

          {/* Service & Neighborhood Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Service Type */}
            <div className="flex flex-col gap-2">
              <label htmlFor="serviceType" className="text-xs font-bold text-warm-white/80">نوع الخدمة المطلوبة *</label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className={`w-full px-5 py-3.5 rounded-2xl bg-white/5 backdrop-blur-sm border text-white/80 focus:outline-none focus:ring-1 text-sm transition-all duration-300 appearance-none ${errors.serviceType ? 'border-red-500/50' : 'border-white/10 focus:border-water-blue/50 focus:ring-water-blue/30'
                  }`}
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 12 12%27%3E%3Cpath fill=%27%23ffffff%27 opacity=%270.5%27 d=%27M6 8L1 3h10z%27/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'left 12px center', paddingLeft: '2.5rem' }}
              >
                <option value="" className="bg-charcoal text-white/50">-- اختر الخدمة --</option>
                {services.map((service) => (
                  <option key={service.value} value={service.value} className="bg-charcoal text-white">
                    {service.label}
                  </option>
                ))}
              </select>
              {errors.serviceType && <span className="text-xs text-red-300 font-medium">{errors.serviceType}</span>}
            </div>

            {/* Riyadh Neighborhood */}
            <div className="flex flex-col gap-2">
              <label htmlFor="neighborhood" className="text-xs font-bold text-warm-white/80">الحي بالرياض *</label>
              <select
                id="neighborhood"
                name="neighborhood"
                value={formData.neighborhood}
                onChange={handleChange}
                className={`w-full px-5 py-3.5 rounded-2xl bg-white/5 backdrop-blur-sm border text-white/80 focus:outline-none focus:ring-1 text-sm transition-all duration-300 appearance-none ${errors.neighborhood ? 'border-red-500/50' : 'border-white/10 focus:border-water-blue/50 focus:ring-water-blue/30'
                  }`}
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 12 12%27%3E%3Cpath fill=%27%23ffffff%27 opacity=%270.5%27 d=%27M6 8L1 3h10z%27/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'left 12px center', paddingLeft: '2.5rem' }}
              >
                <option value="" className="bg-charcoal text-white/50">-- اختر الحي --</option>
                {neighborhoods.map((hood) => (
                  <option key={hood} value={hood} className="bg-charcoal text-white">
                    {hood}
                  </option>
                ))}
              </select>
              {errors.neighborhood && <span className="text-xs text-red-300 font-medium">{errors.neighborhood}</span>}
            </div>

          </div>

          {/* Best Contact Time & Optional Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Preferred Time */}
            <div className="flex flex-col gap-2">
              <label htmlFor="preferredTime" className="text-xs font-bold text-warm-white/80">أفضل وقت للتواصل</label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 focus:outline-none focus:ring-1 focus:border-water-blue/50 focus:ring-water-blue/30 text-sm appearance-none transition-all duration-300"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 12 12%27%3E%3Cpath fill=%27%23ffffff%27 opacity=%270.5%27 d=%27M6 8L1 3h10z%27/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'left 12px center', paddingLeft: '2.5rem' }}
              >
                <option value="" className="bg-charcoal text-white/50">أي وقت مناسب</option>
                {times.map((t) => (
                  <option key={t.value} value={t.value} className="bg-charcoal text-white">
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Photo upload mock */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-warm-white/80">رفع صور للمساحة (اختياري)</label>
              <div className="relative w-full px-5 py-3.5 rounded-2xl bg-white/5 backdrop-blur-sm border border-dashed border-white/10 flex items-center justify-center cursor-pointer text-white/40 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <span className="text-xs font-semibold">اضغط لرفع صور المخطط أو الحديقة</span>
              </div>
            </div>

          </div>

          {/* Project Description */}
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-xs font-bold text-warm-white/80">وصف مختصر للمشروع</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              placeholder="مثال: أريد تنسيق حديقة فيلا صغيرة مع عشب صناعي وشلال جداري بطول 2 متر في الارتداد الخلفي."
              className="w-full px-5 py-3.5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:border-water-blue/50 focus:ring-water-blue/30 text-sm transition-all duration-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full btn-apple bg-gradient-to-r from-botanical to-water-blue text-white shadow-lg hover:shadow-water-glow"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>جاري إرسال طلبك...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>اطلب استشارتك المجانية الآن</span>
              </>
            )}
          </button>

        </form>
      )}
    </div>
  );
};

export default ContactForm;