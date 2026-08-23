import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Leaf, ArrowUpRight } from 'lucide-react';

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
    <footer className="bg-white border-t border-charcoal/5 pt-20 pb-8 text-sm text-muted-grey relative">
      {/* Apple-style subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Brand Column - 3 cols */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary-deep to-botanical flex items-center justify-center shadow-premium-glow transition-all duration-300 group-hover:shadow-water-glow">
                <Leaf className="w-5 h-5 text-warm-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-primary-deep font-black text-base leading-tight">
                  Green House
                </span>
                <span className="text-water-blue font-bold text-xs leading-none">
                  البيت الأخضر
                </span>
              </div>
            </Link>

            <p className="text-charcoal/70 leading-relaxed text-justify text-xs">
              نقدم حلولاً هندسية مبتكرة لتصميم وتنسيق المساحات الخارجية في الرياض. نسعى لتطوير حدائق الفلل، الأسطح، والجلسات الخارجية بروح عصرية توافق البيئة السعودية وترشّد استهلاك المياه.
            </p>

            {/* Contact Cards */}
            <div className="flex flex-col gap-3">
              <a href="tel:0557401773" className="inline-flex items-center gap-3 text-charcoal/80 hover:text-primary-deep transition-all duration-300 group bg-warm-white rounded-2xl p-3 border border-charcoal/5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-botanical/30 to-transparent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-botanical" />
                </div>
                <span className="dir-ltr font-bold text-xs">0557401773</span>
              </a>
              <a href="https://wa.me/966557401773" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-charcoal/80 hover:text-primary-deep transition-all duration-300 group bg-warm-white rounded-2xl p-3 border border-charcoal/5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-water-blue/30 to-transparent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-4 h-4 text-water-blue" />
                </div>
                <span className="dir-ltr font-bold text-xs">+966557401773</span>
              </a>
              <a href="mailto:riyadhgreenhouse@gmail.com" className="inline-flex items-center gap-3 text-charcoal/80 hover:text-primary-deep transition-all duration-300 group bg-warm-white rounded-2xl p-3 border border-charcoal/5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-deep/30 to-transparent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-primary-deep" />
                </div>
                <span className="font-semibold text-xs">riyadhgreenhouse@gmail.com</span>
              </a>
              <div className="inline-flex items-start gap-3 text-charcoal/80 bg-warm-white rounded-2xl p-3 border border-charcoal/5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-soft-blue/30 to-transparent flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-water-blue" />
                </div>
                <span className="text-xs font-semibold">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* Services List - 3 cols */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h3 className="text-primary-deep font-black text-sm relative pr-4 before:absolute before:right-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-botanical before:to-water-blue before:rounded-full">
              خدماتنا الرئيسية
            </h3>
            <ul className="flex flex-col gap-2.5">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal/70 hover:text-primary-deep transition-all duration-300 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - 3 cols */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h3 className="text-primary-deep font-black text-sm relative pr-4 before:absolute before:right-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-botanical before:to-water-blue before:rounded-full">
              روابط سريعة
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal/70 hover:text-primary-deep transition-all duration-300 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Riyadh Areas - 3 cols */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h3 className="text-primary-deep font-black text-sm relative pr-4 before:absolute before:right-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-botanical before:to-water-blue before:rounded-full">
              مناطق الخدمة في الرياض
            </h3>
            <p className="text-xs text-charcoal/60 leading-relaxed text-justify">
              نقدم خدماتنا الاحترافية في تصميم وتنسيق الحدائق وتركيب الثيل الطبيعي والصناعي في كافة أحياء شمال وشرق وغرب وجنوب الرياض.
            </p>
            <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-1 scrollbar-thin">
              {neighborhoods.map((area, idx) => (
                <span key={idx} className="text-[10px] bg-warm-white text-charcoal/60 px-2.5 py-1 rounded-lg border border-charcoal/5 hover:border-water-blue/30 hover:text-water-blue transition-all duration-300">
                  حي {area}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Local SEO Footer Paragraph */}
        <div className="mt-12 pt-8 border-t border-charcoal/5">
          <p className="text-[11px] text-charcoal/50 leading-relaxed text-justify">
            بصفتنا شركة تنسيق حدائق بالرياض (البيت الأخضر)، نلتزم بتقديم تصاميم مخصصة تراعي طبيعة التربة والطقس ودرجات الحرارة المرتفعة في المملكة العربية السعودية. تمتد مشاريعنا لتركيب العشب الصناعي عالي الجودة المقاوم للأشعة فوق البنفسجية، وزراعة المسطحات الخضراء، وتشييد الشلالات الجدارية الجذابة والنوافير المنزلية، بالإضافة لتصميم البرجولات الخشبية والمعدنية الأنيقة في أحياء شمال الرياض كالياسمين والنرجس والملقا وحطين والصحافة والعارض والرمال، لنجعل من مساحتك الخارجية واحة متكاملة تجمع الجمال والاستدامة.
          </p>
        </div>

        {/* Copyrights and Privacy */}
        <div className="mt-8 pt-6 border-t border-charcoal/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="font-semibold text-charcoal/50 text-center md:text-right">
            &copy; {currentYear} البيت الأخضر (Green House). جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-charcoal/50 hover:text-primary-deep font-semibold transition-colors">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="text-charcoal/50 hover:text-primary-deep font-semibold transition-colors">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;