"use client";

import { useState } from 'react';
import { CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';

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
    <div className="bg-white p-8 md:p-10 rounded-3xl border border-charcoal/5 shadow-card hover:shadow-card-hover transition-all duration-300">
      
      {status === 'success' ? (
        <div className="text-center py-10 flex flex-col items-center justify-center animate-fade-in-up">
          <CheckCircle2 className="w-16 h-16 text-botanical mb-4" />
          <h3 className="text-primary-deep font-black text-2xl mb-2">تم استلام طلبك بنجاح!</h3>
          <p className="text-muted-grey text-base max-w-sm mb-6">
            شكراً لتواصلك مع البيت الأخضر. سيقوم مهندسو التصميم لدينا بالتواصل معك خلال أفضل وقت اخترته لمناقشة تفاصيل مشروعك.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="bg-primary-deep text-warm-white font-bold px-6 py-2.5 rounded-full hover:bg-botanical transition-colors"
          >
            إرسال طلب آخر
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-right border-b border-charcoal/5 pb-4 mb-6">
            <h3 className="text-primary-deep font-black text-xl mb-1">ابدأ بتصميم مساحتك الخارجية</h3>
            <p className="text-xs text-muted-grey">امِلأ النموذج وسيتصل بك أحد مهندسينا لمعاينة الموقع مجاناً.</p>
          </div>

          {status === 'error' && (
            <div className="bg-red-50 text-red-700 p-4 rounded-xl flex items-center gap-3 text-xs">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              <span>حدث خطأ أثناء إرسال طلبك. الرجاء المحاولة مرة أخرى أو الاتصال بنا مباشرة.</span>
            </div>
          )}

          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-bold text-primary-deep">الاسم الكريم *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="مثال: محمد بن عبد العزيز"
              className={`w-full px-5 py-3 rounded-2xl bg-warm-white border ${
                errors.name ? 'border-red-500 focus:ring-red-500' : 'border-charcoal/5 focus:border-botanical'
              } text-charcoal focus:outline-none focus:ring-1 focus:ring-botanical text-sm`}
            />
            {errors.name && <span className="text-xs text-red-500 font-medium">{errors.name}</span>}
          </div>

          {/* Phone Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-xs font-bold text-primary-deep">رقم الجوال *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="مثال: 0557401773"
              className={`w-full px-5 py-3 rounded-2xl bg-warm-white border ${
                errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-charcoal/5 focus:border-botanical'
              } text-charcoal focus:outline-none focus:ring-1 focus:ring-botanical text-sm dir-ltr text-right`}
            />
            {errors.phone && <span className="text-xs text-red-500 font-medium">{errors.phone}</span>}
          </div>

          {/* Service & Neighborhood Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Service Type */}
            <div className="flex flex-col gap-2">
              <label htmlFor="serviceType" className="text-xs font-bold text-primary-deep">نوع الخدمة المطلوبة *</label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className={`w-full px-5 py-3 rounded-2xl bg-warm-white border ${
                  errors.serviceType ? 'border-red-500' : 'border-charcoal/5'
                } text-charcoal focus:outline-none focus:ring-1 focus:ring-botanical text-sm`}
              >
                <option value="">-- اختر الخدمة --</option>
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
              {errors.serviceType && <span className="text-xs text-red-500 font-medium">{errors.serviceType}</span>}
            </div>

            {/* Riyadh Neighborhood */}
            <div className="flex flex-col gap-2">
              <label htmlFor="neighborhood" className="text-xs font-bold text-primary-deep">الحي بالرياض *</label>
              <select
                id="neighborhood"
                name="neighborhood"
                value={formData.neighborhood}
                onChange={handleChange}
                className={`w-full px-5 py-3 rounded-2xl bg-warm-white border ${
                  errors.neighborhood ? 'border-red-500' : 'border-charcoal/5'
                } text-charcoal focus:outline-none focus:ring-1 focus:ring-botanical text-sm`}
              >
                <option value="">-- اختر الحي --</option>
                {neighborhoods.map((hood) => (
                  <option key={hood} value={hood}>
                    {hood}
                  </option>
                ))}
              </select>
              {errors.neighborhood && <span className="text-xs text-red-500 font-medium">{errors.neighborhood}</span>}
            </div>

          </div>

          {/* Best Contact Time & Optional Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Preferred Time */}
            <div className="flex flex-col gap-2">
              <label htmlFor="preferredTime" className="text-xs font-bold text-primary-deep">أفضل وقت للتواصل</label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-2xl bg-warm-white border border-charcoal/5 text-charcoal focus:outline-none focus:ring-1 focus:ring-botanical text-sm"
              >
                <option value="">أي وقت مناسب</option>
                {times.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Photo upload mock */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-primary-deep">رفع صور للمساحة (اختياري)</label>
              <div className="relative w-full px-5 py-3 rounded-2xl bg-warm-white border border-dashed border-charcoal/20 flex items-center justify-center cursor-pointer text-muted-grey hover:bg-charcoal/[0.02]">
                <span className="text-xs font-semibold">اضغط لرفع صور المخطط أو الحديقة</span>
              </div>
            </div>

          </div>

          {/* Project Description */}
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-xs font-bold text-primary-deep">وصف مختصر للمشروع</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              placeholder="مثال: أريد تنسيق حديقة فيلا صغيرة مع عشب صناعي وشلال جداري بطول 2 متر في الارتداد الخلفي."
              className="w-full px-5 py-3 rounded-2xl bg-warm-white border border-charcoal/5 text-charcoal focus:outline-none focus:ring-1 focus:ring-botanical text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center gap-2 bg-primary-deep text-warm-white py-4 rounded-2xl font-bold text-sm shadow-md hover:bg-botanical active:scale-[0.99] transition-all duration-300"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>جاري إرسال طلبك...</span>
              </>
            ) : (
              <span>اطلب استشارتك المجانية الآن</span>
            )}
          </button>

        </form>
      )}
    </div>
  );
};

export default ContactForm;
