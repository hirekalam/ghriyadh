import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { label: 'تنسيق حدائق منزلية', href: '/services/garden-landscaping-riyadh' },
    { label: 'تنسيق أسطح الفلل بالنرجس', href: '/services/rooftop-landscaping' },
    { label: 'تركيب ثيل صناعي فاخر', href: '/services/artificial-grass' },
    { label: 'زراعة عشب طبيعي هولندي', href: '/services/natural-grass' },
    { label: 'تركيب شلالات ونوافير', href: '/services/waterfalls-fountains' },
    { label: 'شبكات ري أوتوماتيكية ذكية', href: '/services/automatic-irrigation' },
    { label: 'جلسات خارجية وبرجولات', href: '/services/pergolas-shades' },
  ];

  const quickLinks = [
    { label: 'من نحن', href: '/about' },
    { label: 'لماذا البيت الأخضر', href: '/why-us' },
    { label: 'آلية العمل والخطوات', href: '/process' },
    { label: 'المعرض وأعمالنا', href: '/gallery' },
    { label: 'الأسئلة الشائعة', href: '/faq' },
    { label: 'مدونة تنسيق الحدائق', href: '/blog' },
    { label: 'تواصل معنا مباشرة', href: '/contact' },
    { label: 'خريطة الموقع', href: '/sitemap' },
  ];

  const neighborhoods = [
    'النرجس', 'الياسمين', 'الصحافة', 'العارض', 'الملقا', 'حطين', 'القيروان', 'النخيل',
    'الغدير', 'الورود', 'الرحمانية', 'الرائد', 'المحمدية', 'العليا', 'السليمانية', 'المروج',
    'التعاون', 'قرطبة', 'الندى', 'الروضة', 'الشهداء', 'غرناطة', 'الرمال', 'اشبيلية',
    'المونسية', 'اليرموك', 'الخليج', 'النهضة', 'ظهرة لبن', 'عرقة', 'أم الحمام', 'لبن'
  ];

  return (
    <footer className="bg-white border-t border-charcoal/5 pt-16 pb-24 lg:pb-12 text-sm text-muted-grey">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Information */}
        <div className="flex flex-col gap-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-deep flex items-center justify-center">
              <span className="text-warm-white font-black text-lg">G</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary-deep font-black text-base leading-tight">
                Green House
              </span>
              <span className="text-botanical font-bold text-xs leading-none">
                البيت الأخضر
              </span>
            </div>
          </Link>
          
          <p className="text-charcoal/80 leading-relaxed text-justify">
            نقدم حلولاً هندسية مبتكرة لتصميم وتنسيق المساحات الخارجية في الرياض. نسعى لتطوير حدائق الفلل، الأسطح، والجلسات الخارجية بروح عصرية توافق البيئة السعودية وترشّد استهلاك المياه.
          </p>

          <div className="flex flex-col gap-3 mt-2 text-charcoal/90">
            <a href="tel:0557401773" className="flex items-center gap-3 hover:text-primary-deep transition-colors">
              <Phone className="w-4 h-4 text-botanical" />
              <span className="dir-ltr font-bold">0557401773</span>
            </a>
            <a href="https://wa.me/966557401773" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary-deep transition-colors">
              <MessageCircle className="w-4 h-4 text-botanical" />
              <span className="dir-ltr font-bold">+966557401773</span>
            </a>
            <a href="mailto:riyadhgreenhouse@gmail.com" className="flex items-center gap-3 hover:text-primary-deep transition-colors">
              <Mail className="w-4 h-4 text-botanical" />
              <span className="font-semibold">riyadhgreenhouse@gmail.com</span>
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-botanical mt-0.5" />
              <span>الرياض، المملكة العربية السعودية</span>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-deep font-black text-base border-r-2 border-botanical pr-3">
            خدماتنا الرئيسية
          </h3>
          <ul className="flex flex-col gap-2.5">
            {servicesLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary-deep hover:translate-x-[-4px] transition-all inline-block font-semibold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-deep font-black text-base border-r-2 border-botanical pr-3">
            روابط سريعة
          </h3>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary-deep hover:translate-x-[-4px] transition-all inline-block font-semibold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Riyadh Local SEO Areas */}
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-deep font-black text-base border-r-2 border-botanical pr-3">
            مناطق الخدمة في الرياض
          </h3>
          <p className="text-xs text-muted-grey leading-relaxed text-justify mb-2">
            نقدم خدماتنا الاحترافية في تصميم وتنسيق الحدائق وتركيب الثيل الطبيعي والصناعي في كافة أحياء شمال وشرق وغرب وجنوب الرياض، ونستقبل طلبات الفلل والقصور والمساحات الخارجية في المناطق التالية:
          </p>
          <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
            {neighborhoods.map((area, idx) => (
              <span key={idx} className="text-[11px] bg-warm-white text-charcoal/80 px-2 py-0.5 rounded border border-charcoal/5">
                حي {area}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Local SEO Footer Paragraph */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-charcoal/5">
        <p className="text-xs text-muted-grey/80 leading-relaxed text-justify">
          بصفتنا شركة تنسيق حدائق بالرياض (البيت الأخضر)، نلتزم بتقديم تصاميم مخصصة تراعي طبيعة التربة والطقس ودرجات الحرارة المرتفعة في المملكة العربية السعودية. تمتد مشاريعنا لتركيب العشب الصناعي عالي الجودة المقاوم للأشعة فوق البنفسجية، وزراعة المسطحات الخضراء، وتشييد الشلالات الجدارية الجذابة والنوافير المنزلية، بالإضافة لتصميم البرجولات الخشبية والمعدنية الأنيقة في أحياء شمال الرياض كالياسمين والنرجس والملقا وحطين والصحافة والعارض والرمال، لنجعل من مساحتك الخارجية واحة متكاملة تجمع الجمال والاستدامة.
        </p>
      </div>

      {/* Copyrights and Privacy */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-6 border-t border-charcoal/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <p className="font-semibold text-charcoal/70 text-center md:text-right">
          &copy; {currentYear} البيت الأخضر (Green House). جميع الحقوق محفوظة.
        </p>
        <div className="flex items-center gap-5">
          <Link href="/privacy" className="hover:text-primary-deep font-semibold">
            سياسة الخصوصية
          </Link>
          <Link href="/terms" className="hover:text-primary-deep font-semibold">
            الشروط والأحكام
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
