import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">
      
      {/* Page Header */}
      <section className="relative bg-primary-deep text-warm-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cta-background.jpg"
            alt="اتصل بنا - البيت الأخضر"
            className="w-full h-full object-cover opacity-20 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-4">
          <nav className="text-xs text-warm-white/60 flex items-center gap-2 font-bold mb-4">
            <Link href="/" className="hover:text-white">الرئيسية</Link>
            <span>/</span>
            <span className="text-white">تواصل معنا</span>
          </nav>
          <span className="text-xs font-bold text-fresh-green tracking-widest uppercase block border-r-2 border-botanical pr-3">
            المساعدة المباشرة
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white">تواصل معنا</h1>
          <p className="text-sm md:text-base text-warm-white/70 max-w-2xl leading-relaxed">
            نسعد بتلقي مكالماتكم ورسائلكم والإجابة على كل استفساراتكم حول تنسيق حدائق الفلل والأسطح بالرياض.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact details */}
          <div className="lg:col-span-5 space-y-8 text-right">
            <div className="space-y-3">
              <span className="text-botanical font-bold text-xs uppercase tracking-widest block">خيارات الاتصال</span>
              <h2 className="text-2xl md:text-3xl font-black text-primary-deep">يسعدنا تواصلكم المباشر</h2>
              <p className="text-xs md:text-sm text-muted-grey leading-relaxed text-justify">
                يمكنكم الاتصال بنا هاتفياً أو إرسال تفاصيل المساحة المطلوبة ونوع التنسيق عبر رسالة واتساب، وسيتجاوب مهندسونا معك في الحال.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* Phone item */}
              <div className="flex gap-4 p-5 bg-warm-white rounded-3xl border border-charcoal/5">
                <div className="w-10 h-10 rounded-xl bg-botanical/15 flex items-center justify-center text-botanical flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-muted-grey font-bold mb-1">اتصل هاتفياً</h4>
                  <a href="tel:0557401773" className="text-base font-black text-primary-deep dir-ltr block text-right hover:text-botanical transition-colors">
                    0557401773
                  </a>
                </div>
              </div>

              {/* WhatsApp item */}
              <div className="flex gap-4 p-5 bg-warm-white rounded-3xl border border-charcoal/5">
                <div className="w-10 h-10 rounded-xl bg-botanical/15 flex items-center justify-center text-botanical flex-shrink-0">
                  <MessageCircle className="w-5 h-5 fill-botanical" />
                </div>
                <div>
                  <h4 className="text-xs text-muted-grey font-bold mb-1">راسلنا على واتساب</h4>
                  <a href="https://wa.me/966557401773" target="_blank" rel="noopener noreferrer" className="text-base font-black text-primary-deep dir-ltr block text-right hover:text-botanical transition-colors">
                    +966557401773
                  </a>
                </div>
              </div>

              {/* Email item */}
              <div className="flex gap-4 p-5 bg-warm-white rounded-3xl border border-charcoal/5">
                <div className="w-10 h-10 rounded-xl bg-botanical/15 flex items-center justify-center text-botanical flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-muted-grey font-bold mb-1">البريد الإلكتروني</h4>
                  <a href="mailto:riyadhgreenhouse@gmail.com" className="text-sm font-black text-primary-deep hover:text-botanical transition-colors">
                    riyadhgreenhouse@gmail.com
                  </a>
                </div>
              </div>

              {/* Address item */}
              <div className="flex gap-4 p-5 bg-warm-white rounded-3xl border border-charcoal/5">
                <div className="w-10 h-10 rounded-xl bg-botanical/15 flex items-center justify-center text-botanical flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-muted-grey font-bold mb-1">الموقع والمكتب الرئيسي</h4>
                  <span className="text-sm font-black text-primary-deep">
                    الرياض، المملكة العربية السعودية
                  </span>
                </div>
              </div>

              {/* Timing item */}
              <div className="flex gap-4 p-5 bg-warm-white rounded-3xl border border-charcoal/5">
                <div className="w-10 h-10 rounded-xl bg-botanical/15 flex items-center justify-center text-botanical flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-muted-grey font-bold mb-1">ساعات العمل والمقابلة</h4>
                  <span className="text-sm font-black text-primary-deep leading-relaxed">
                    من السبت إلى الخميس: 8:00 ص - 9:00 م
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Embedded Google Map */}
      <section className="w-full h-96 relative border-t border-charcoal/5 bg-warm-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28987.97151044738!2d46.6752957!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489301%3A0x6034e7cd138e53d7!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="موقع البيت الأخضر في الرياض"
        />
      </section>

    </div>
  );
}
