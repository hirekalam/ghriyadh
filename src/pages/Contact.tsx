import { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: Phone,
    title: 'الهاتف / واتساب',
    content: '+966 50 239 4828',
    link: 'tel:+966502394828',
  },
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    content: 'riyadhgreenhouse@gmail.com',
    link: 'mailto:riyadhgreenhouse@gmail.com',
  },
  {
    icon: MapPin,
    title: 'العنوان',
    content: 'شارع الفريان، حي اليمامة، الرياض',
    link: 'https://maps.app.goo.gl/CXP24uEB9JTT64EN9',
  },
  {
    icon: Clock,
    title: 'ساعات العمل',
    content: 'السبت - الخميس: 8 ص - 6 م',
    link: null,
  },
];

const Contact = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

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
    const message = `رسالة جديدة من الموقع
الاسم: ${formData.name}
البريد: ${formData.email}
الجوال: ${formData.phone}
الموضوع: ${formData.subject}
الرسالة: ${formData.message}`;
    
    window.open(`https://wa.me/966502394828?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="relative bg-[#0B3A2E] min-h-screen pt-24 lg:pt-32 pb-20">
      {/* Hero */}
      <div className="relative h-[30vh] lg:h-[40vh] overflow-hidden mb-12">
        <img
          src="/images/statement-maintain.jpg"
          alt="اتصل بنا"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B3A2E] via-[#0B3A2E]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="w-full px-6 lg:px-12">
            <span className="text-[#D4A03A] text-sm font-bold tracking-widest uppercase mb-4 block">
              CONTACT US
            </span>
            <h1 className="text-[#F4F7F5] font-black text-4xl lg:text-6xl">
              اتصل بنا
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div className="animate-item">
              <h2 className="text-[#F4F7F5] font-bold text-2xl mb-6">
                معلومات التواصل
              </h2>
              <p className="text-[#F4F7F5]/70 mb-8">
                نحن هنا لمساعدتك. تواصل معنا عبر أي من القنوات التالية وسنرد عليك في أقرب وقت.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D4A03A]/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#D4A03A]" />
                    </div>
                    <div>
                      <h3 className="text-[#F4F7F5] font-medium mb-1">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-[#F4F7F5]/70 hover:text-[#D4A03A] transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-[#F4F7F5]/70">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/966502394828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>تواصل عبر واتساب</span>
                </a>
                <a
                  href="tel:+966502394828"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#F4F7F5]/30 text-[#F4F7F5] px-6 py-3 rounded-full font-bold hover:border-[#D4A03A] hover:text-[#D4A03A] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>اتصل بنا</span>
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="animate-item">
              <div className="bg-[#F4F7F5]/5 rounded-3xl p-8">
                <h2 className="text-[#F4F7F5] font-bold text-2xl mb-6">
                  أرسل لنا رسالة
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#F4F7F5]/70 mb-2 text-sm">
                        الاسم
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#0B3A2E]/50 border border-[#F4F7F5]/20 rounded-xl px-4 py-3 text-[#F4F7F5] focus:outline-none focus:border-[#D4A03A] text-right"
                        placeholder="اسمك"
                      />
                    </div>
                    <div>
                      <label className="block text-[#F4F7F5]/70 mb-2 text-sm">
                        رقم الجوال
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0B3A2E]/50 border border-[#F4F7F5]/20 rounded-xl px-4 py-3 text-[#F4F7F5] focus:outline-none focus:border-[#D4A03A] text-right"
                        placeholder="05xxxxxxxx"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#F4F7F5]/70 mb-2 text-sm">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0B3A2E]/50 border border-[#F4F7F5]/20 rounded-xl px-4 py-3 text-[#F4F7F5] focus:outline-none focus:border-[#D4A03A] text-right"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[#F4F7F5]/70 mb-2 text-sm">
                      الموضوع
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#0B3A2E]/50 border border-[#F4F7F5]/20 rounded-xl px-4 py-3 text-[#F4F7F5] focus:outline-none focus:border-[#D4A03A] text-right"
                    >
                      <option value="">اختر الموضوع</option>
                      <option value="استفسار">استفسار عام</option>
                      <option value="طلب عرض سعر">طلب عرض سعر</option>
                      <option value="صيانة">طلب صيانة</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#F4F7F5]/70 mb-2 text-sm">
                      الرسالة
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0B3A2E]/50 border border-[#F4F7F5]/20 rounded-xl px-4 py-3 text-[#F4F7F5] focus:outline-none focus:border-[#D4A03A] text-right resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#D4A03A] text-[#0B3A2E] hover:bg-[#c4932f] font-bold py-4 rounded-xl"
                  >
                    <Send className="w-5 h-5 ml-2" />
                    إرسال الرسالة
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="animate-item mt-12">
            <h2 className="text-[#F4F7F5] font-bold text-2xl mb-6 text-center">
              موقعنا
            </h2>
            <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-[#F4F7F5]/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.456!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1600000000000!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع Green House"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
