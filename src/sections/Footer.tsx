import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 90%',
            end: 'top 70%',
            scrub: 0.4,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const quickLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'الخدمات', href: '#services' },
    { label: 'المشاريع', href: '#projects' },
    { label: 'اتصل بنا', href: '#contact' },
  ];

  const services = [
    'تنسيق الحدائق',
    'العشب الصناعي',
    'العشب الطبيعي',
    'المظلات والسواتر',
    'الري والنوافير',
    'الصيانة الدورية',
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#F4F7F5] py-16 lg:py-20 z-[200]"
    >
      <div
        ref={contentRef}
        className="w-full px-6 lg:px-12 will-change-transform"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#0B3A2E] flex items-center justify-center">
                <span className="text-[#D4A03A] font-bold text-xl">G</span>
              </div>
              <span className="text-[#0B3A2E] font-bold text-2xl">Green House</span>
            </div>
            <p className="text-[#0B3A2E]/70 mb-6 leading-relaxed">
              حدائق تروي قصة… من الرياض.
              <br />
              نحول أحلامك إلى واقع أخضر.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/greenhouseriyadh7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0B3A2E]/10 flex items-center justify-center text-[#0B3A2E] hover:bg-[#0B3A2E] hover:text-[#F4F7F5] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/greenhouse_riyadh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0B3A2E]/10 flex items-center justify-center text-[#0B3A2E] hover:bg-[#0B3A2E] hover:text-[#F4F7F5] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/greenhouseriyadh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0B3A2E]/10 flex items-center justify-center text-[#0B3A2E] hover:bg-[#0B3A2E] hover:text-[#F4F7F5] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#0B3A2E] font-bold text-lg mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#0B3A2E]/70 hover:text-[#0B3A2E] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#0B3A2E] font-bold text-lg mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-[#0B3A2E]/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#0B3A2E] font-bold text-lg mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+966502394828"
                  className="flex items-center gap-3 text-[#0B3A2E]/70 hover:text-[#0B3A2E] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#D4A03A]" />
                  <span>+966 50 239 4828</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:riyadhgreenhouse@gmail.com"
                  className="flex items-center gap-3 text-[#0B3A2E]/70 hover:text-[#0B3A2E] transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#D4A03A]" />
                  <span>riyadhgreenhouse@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#0B3A2E]/70">
                  <MapPin className="w-5 h-5 text-[#D4A03A] flex-shrink-0 mt-1" />
                  <span>
                    شارع الفريان، حي اليمامة
                    <br />
                    الرياض، المملكة العربية السعودية
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#0B3A2E]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#0B3A2E]/60 text-sm">
              © 2026 Green House. جميع الحقوق محفوظة.
            </p>
            <p className="text-[#0B3A2E]/60 text-sm">
              تصميم وتطوير:
              <a
                href="https://hirekalam.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4A03A] hover:underline mr-1"
              >
                Hire Kalam
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
