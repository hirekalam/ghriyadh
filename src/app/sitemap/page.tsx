import Link from 'next/link';

export default function SitemapPage() {
  const mainPages = [
    { label: 'الرئيسية (الصفحة الرئيسية)', href: '/' },
    { label: 'من نحن (فلسفتنا ورؤيتنا)', href: '/about' },
    { label: 'لماذا البيت الأخضر (مميزاتنا)', href: '/why-us' },
    { label: 'آلية العمل (الخطوات والمنهجية)', href: '/process' },
    { label: 'معرض الصور وأعمالنا', href: '/gallery' },
    { label: 'الأسئلة الشائعة (مركز المعرفة)', href: '/faq' },
    { label: 'المدونة (مقالات تنسيق الحدائق)', href: '/blog' },
    { label: 'تواصل معنا (أرقام الجوال والخريطة)', href: '/contact' },
    { label: 'سياسة الخصوصية', href: '/privacy' },
    { label: 'الشروط والأحكام', href: '/terms' },
  ];

  const servicePages = [
    { label: 'تنسيق حدائق بالرياض (الصفحة الرئيسية للخدمة)', href: '/services/garden-landscaping-riyadh' },
    { label: 'تنسيق الأسطح والمساحات الخارجية بالنرجس', href: '/services/rooftop-landscaping' },
    { label: 'توريد وتركيب ثيل صناعي فاخر', href: '/services/artificial-grass' },
    { label: 'تركيب ثيل طبيعي بلدي وهولندي', href: '/services/natural-grass' },
    { label: 'تركيب شلالات ونوافير عصرية', href: '/services/waterfalls-fountains' },
    { label: 'تركيب شبكة ري أوتوماتيكية ذكية', href: '/services/automatic-irrigation' },
    { label: 'تصميم وتنفيذ جلسات خارجية', href: '/services/outdoor-seating' },
    { label: 'تركيب برجولات ومظلات حدائق', href: '/services/pergolas-shades' },
    { label: 'تصميم وتركيب أحواض زراعية حديثة', href: '/services/planter-boxes' },
    { label: 'زراعة الأشجار والنخيل والزهور بالرياض', href: '/services/trees-palms-flowers' },
    { label: 'تنسيق حدائق تحت الدرج الخارجي', href: '/services/under-stair-landscaping' },
    { label: 'صيانة وتجميل حدائق الفلل الدورية', href: '/services/garden-maintenance' },
    { label: 'تصميم وإنشاء ملاعب كرة قدم بالثيل الصناعي', href: '/services/football-fields' },
  ];

  const blogPages = [
    { label: 'أفضل أفكار تنسيق حدائق الفلل في الرياض', href: '/blog/garden-design-riyadh' },
    { label: 'الثيل الطبيعي أم الصناعي؟ دليل مقارنة كامل', href: '/blog/artificial-grass-guide' },
    { label: 'أفكار لتصميم جلسة خارجية للفيلا', href: '/blog/home-garden-design' },
    { label: 'كيف تختار نظام الري المناسب لحديقتك بالرياض؟', href: '/blog/irrigation-systems' },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">
      
      {/* Header Banner */}
      <section className="relative bg-primary-deep text-warm-white py-16 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-4">
          <nav className="text-xs text-warm-white/60 flex items-center gap-2 font-bold mb-2">
            <Link href="/" className="hover:text-white">الرئيسية</Link>
            <span>/</span>
            <span className="text-white">خريطة الموقع</span>
          </nav>
          <h1 className="text-3xl font-black text-white">خريطة الموقع البصرية</h1>
          <p className="text-xs text-warm-white/70 max-w-xl">
            دليل كامل لجميع الصفحات والمقالات والخدمات المتوفرة في موقع شركة البيت الأخضر.
          </p>
        </div>
      </section>

      {/* Main Directory List */}
      <section className="bg-white py-16 md:py-20 text-right text-sm">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Main Pages */}
          <div className="space-y-4">
            <h2 className="text-base font-black text-primary-deep border-r-4 border-botanical pr-3 pb-1">
              الصفحات الأساسية
            </h2>
            <ul className="space-y-2.5 pr-2">
              {mainPages.map((page, idx) => (
                <li key={idx}>
                  <Link href={page.href} className="hover:text-primary-deep font-semibold transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-botanical/50" />
                    <span>{page.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Pages */}
          <div className="space-y-4">
            <h2 className="text-base font-black text-primary-deep border-r-4 border-botanical pr-3 pb-1">
              خدمات تنسيق الحدائق واللاندسكيب
            </h2>
            <ul className="space-y-2.5 pr-2">
              {servicePages.map((service, idx) => (
                <li key={idx}>
                  <Link href={service.href} className="hover:text-primary-deep font-semibold transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-botanical/50" />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Articles */}
          <div className="space-y-4 md:col-span-2">
            <h2 className="text-base font-black text-primary-deep border-r-4 border-botanical pr-3 pb-1">
              مقالات ودراسات الحالة بالمدونة
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pr-2">
              {blogPages.map((art, idx) => (
                <li key={idx}>
                  <Link href={art.href} className="hover:text-primary-deep font-semibold transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-botanical/50" />
                    <span>{art.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}
