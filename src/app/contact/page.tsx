import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Clock, ArrowLeft } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'اتصل هاتفياً',
      value: '0557401773',
      href: 'tel:0557401773',
      subtitle: 'نحن في انتظارك',
      gradient: 'from-botanical/40 to-water-blue/20'
    },
    {
      icon: MessageCircle,
      title: 'راسلنا على واتساب',
      value: '+966557401773',
      href: 'https://wa.me/966557401773',
      subtitle: 'رد سريع خلال دقائق',
      gradient: 'from-water-blue/40 to-botanical/20'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'riyadhgreenhouse@gmail.com',
      href: 'mailto:riyadhgreenhouse@gmail.com',
      subtitle: 'للاستفسارات التفصيلية',
      gradient: 'from-botanical/40 to-water-blue/20'
    },
    {
      icon: MapPin,
      title: 'الموقع والمكتب الرئيسي',
      value: 'الرياض، المملكة العربية السعودية',
      href: null,
      subtitle: 'زيارة بعد التنسيق',
      gradient: 'from-water-blue/40 to-botanical/20'
    },
    {
      icon: Clock,
      title: 'ساعات العمل والمقابلة',
      value: 'من السبت إلى الخميس: 8:00 ص - 9:00 م',
      href: null,
      subtitle: 'أوقات مرنة لتناسب جدولك',
      gradient: 'from-botanical/40 to-water-blue/20'
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">

      {/* Page Header - Apple-style */}
      <section className="relative bg-primary-deep text-warm-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cta-background.jpg"
            alt="اتصل بنا - البيت الأخضر"
            className="w-full h-full object-cover opacity-20 object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/90 to-primary-deep/60" />
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-botanical/10 to-water-blue/10 blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-6">
          <nav className="text-xs text-warm-white/80 flex items-center gap-2 font-semibold mb-2">
            <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <span className="w-1 h-1 rounded-full bg-warm-white/20" />
            <span className="text-warm-white/80">تواصل معنا</span>
          </nav>
          <div className="inline-flex items-center gap-2 text-fresh-green font-bold text-xs uppercase tracking-[0.2em]">
            <span className="w-8 h-px bg-fresh-green/50" />
            <span>المساعدة المباشرة</span>
          </div>
          <h1 className="apple-title text-white">تواصل معنا</h1>
          <p className="text-base md:text-lg text-warm-white/80 max-w-2xl leading-relaxed">
            نسعد بتلقي مكالماتكم ورسائلكم والإجابة على كل استفساراتكم حول تنسيق حدائق الفلل والأسطح بالرياض.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Form - Apple-style */}
      <section className="bg-white py-24 md:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Contact details */}
          <div className="lg:col-span-5 space-y-8 text-right">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-botanical font-bold text-xs uppercase tracking-[0.2em]">
                <span className="w-8 h-px bg-botanical/50" />
                <span>خيارات الاتصال</span>
              </div>
              <h2 className="apple-heading text-primary-deep">
                يسعدنا تواصلكم<br className="hidden md:block" />
                <span className="text-gradient-mixed">المباشر</span>
              </h2>
              <p className="text-sm text-muted-grey leading-relaxed text-justify">
                يمكنكم الاتصال بنا هاتفياً أو إرسال تفاصيل المساحة المطلوبة ونوع التنسيق عبر رسالة واتساب، وسيتجاوب مهندسونا معك في الحال.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                const content = (
                  <>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-botanical" />
                    </div>
                    <div>
                      <h4 className="text-xs text-muted-grey font-bold mb-1">{method.title}</h4>
                      {method.href ? (
                        <a href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-sm font-black text-primary-deep hover:text-water-blue transition-colors block">
                          {method.value}
                        </a>
                      ) : (
                        <span className="text-sm font-black text-primary-deep">{method.value}</span>
                      )}
                      <span className="text-[10px] text-muted-grey/70">{method.subtitle}</span>
                    </div>
                  </>
                );

                if (method.href && !method.href.startsWith('http') && !method.href.startsWith('tel') && !method.href.startsWith('mailto')) {
                  return (
                    <div key={idx} className="flex gap-4 p-5 bg-warm-white rounded-2xl border border-charcoal/5 shadow-apple hover:shadow-apple-lg transition-all duration-300 group">
                      {content}
                    </div>
                  );
                }

                return (
                  <div key={idx} className="flex gap-4 p-5 bg-warm-white rounded-2xl border border-charcoal/5 shadow-apple hover:shadow-apple-lg transition-all duration-300 group">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Embedded Google Map - Apple-style */}
      <section className="w-full h-[400px] relative border-t border-charcoal/5 bg-primary-deep">
        <div className="absolute inset-0 opacity-30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28987.97151044738!2d46.6752957!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489301%3A0x6034e7cd138e53d7!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1)' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع البيت الأخضر في الرياض"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/30 to-transparent pointer-events-none" />
      </section>

    </div>
  );
}