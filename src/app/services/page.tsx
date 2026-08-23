import Link from 'next/link';
import { ArrowLeft, Phone, ArrowUpRight } from 'lucide-react';

export default function ServicesPage() {
  const allServices = [
    {
      title: 'تنسيق حدائق بالرياض',
      englishTitle: 'Garden Landscaping',
      desc: 'تصميم وتنسيق حدائق منزلية وفلل بأحدث الأساليب العالمية المبتكرة.',
      image: '/images/service-garden-design.jpg',
      slug: 'garden-landscaping-riyadh',
      gradient: 'from-primary-deep to-botanical'
    },
    {
      title: 'تنسيق الأسطح والمساحات الخارجية بالنرجس',
      englishTitle: 'Rooftop Spaces',
      desc: 'تحويل أسطح منازل النرجس والياسمين إلى جلسات وحدائق معلقة مع عزل تام.',
      image: '/images/statement-design.jpg',
      slug: 'rooftop-landscaping',
      gradient: 'from-botanical to-fresh-green'
    },
    {
      title: 'توريد وتركيب ثيل صناعي',
      englishTitle: 'Artificial Grass',
      desc: 'ثيل صناعي عالي الجودة والكثافة مناسب للظروف المناخية الحارة.',
      image: '/images/service-artificial-grass.jpg',
      slug: 'artificial-grass',
      gradient: 'from-water-blue to-soft-blue'
    },
    {
      title: 'تركيب ثيل طبيعي بلدي وهولندي',
      englishTitle: 'Natural Grass',
      desc: 'توريد وزراعة الثيل الطبيعي مع خيارات الصيانة ومقاومة الحرارة والتملح.',
      image: '/images/service-natural-grass.jpg',
      slug: 'natural-grass',
      gradient: 'from-primary-deep to-botanical'
    },
    {
      title: 'تركيب شلالات ونوافير عصرية',
      englishTitle: 'Waterfalls & Fountains',
      desc: 'شلالات ونوافير بتصاميم جدارية ومستقلة جذابة مزودة بإضاءات LED خافتة.',
      image: '/images/project-3.jpg',
      slug: 'waterfalls-fountains',
      gradient: 'from-water-blue to-soft-blue'
    },
    {
      title: 'تركيب شبكة ري أوتوماتيكية',
      englishTitle: 'Automatic Irrigation',
      desc: 'أنظمة ري آلية تساهم في تنظيم استهلاك المياه وتوزيع الري بكفاءة ذكية.',
      image: '/images/service-irrigation.jpg',
      slug: 'automatic-irrigation',
      gradient: 'from-botanical to-fresh-green'
    },
    {
      title: 'تصميم وتنفيذ جلسات خارجية',
      englishTitle: 'Outdoor Seating',
      desc: 'جلسات خارجية مريحة وراقية تلائم طبيعة الفلل وتوفر أقصى درجات الخصوصية.',
      image: '/images/project-5.jpg',
      slug: 'outdoor-seating',
      gradient: 'from-primary-deep to-botanical'
    },
    {
      title: 'تركيب برجولات ومظلات حدائق',
      englishTitle: 'Pergolas & Shades',
      desc: 'برجولات خشبية ومعدنية ومظلات قماش حديثة للوقاية من الشمس وتقليل الحرارة.',
      image: '/images/service-shade-structures.jpg',
      slug: 'pergolas-shades',
      gradient: 'from-water-blue to-soft-blue'
    },
    {
      title: 'تصميم وتركيب أحواض زراعية',
      englishTitle: 'Planter Boxes',
      desc: 'أحواض زراعية مودرن لتنظيم نمو النباتات وإضفاء لمسة معمارية أنيقة للمحيط.',
      image: '/images/project-1.jpg',
      slug: 'planter-boxes',
      gradient: 'from-botanical to-fresh-green'
    },
    {
      title: 'زراعة الأشجار والنخيل والزهور',
      englishTitle: 'Trees, Palms & Flowers',
      desc: 'زراعة وتنسيق أشجار صحراوية ونخيل عربي وزهور موسمية ودائمة الخضرة.',
      image: '/images/project-6.jpg',
      slug: 'trees-palms-flowers',
      gradient: 'from-primary-deep to-botanical'
    },
    {
      title: 'تنسيق حدائق تحت الدرج الخارجي',
      englishTitle: 'Under-Stair Landscaping',
      desc: 'استغلال المساحات الضيقة أسفل السلالم وتحويلها لواحات حجرية ونباتية مبهرة.',
      image: '/images/project-3.jpg',
      slug: 'under-stair-landscaping',
      gradient: 'from-water-blue to-soft-blue'
    },
    {
      title: 'صيانة وتجميل الحدائق الدورية',
      englishTitle: 'Garden Maintenance',
      desc: 'برامج صيانة دورية للعناية بالثيل الطبيعي وشبكات الري ومكافحة الآفات.',
      image: '/images/service-maintenance.jpg',
      slug: 'garden-maintenance',
      gradient: 'from-botanical to-fresh-green'
    },
    {
      title: 'تصميم وإنشاء ملاعب كرة القدم',
      englishTitle: 'Football Fields',
      desc: 'تصميم وتنفيذ ملاعب خماسية وسكنية باستخدام أفضل أنواع الثيل الرياضي.',
      image: '/images/project-2.jpg',
      slug: 'football-fields',
      gradient: 'from-primary-deep to-botanical'
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">

      {/* Header Banner - Apple-style */}
      <section className="relative bg-primary-deep text-warm-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/service-garden-design.jpg"
            alt="خدمات لاندسكيب بالرياض"
            className="w-full h-full object-cover opacity-20 object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/90 to-primary-deep/60" />
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-botanical/10 to-water-blue/10 blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-6">
          <nav className="text-xs text-warm-white/50 flex items-center gap-2 font-semibold mb-2">
            <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <span className="w-1 h-1 rounded-full bg-warm-white/20" />
            <span className="text-warm-white/80">خدماتنا</span>
          </nav>
          <div className="inline-flex items-center gap-2 text-fresh-green font-bold text-xs uppercase tracking-[0.2em]">
            <span className="w-8 h-px bg-fresh-green/50" />
            <span>دليل الخدمات</span>
          </div>
          <h1 className="apple-title text-white">خدمات تنسيق وتصميم الحدائق</h1>
          <p className="text-base md:text-lg text-warm-white/60 max-w-2xl leading-relaxed">
            استكشف خدمات اللاندسكيب المتكاملة لفلل وقصور مدينة الرياض بتفاصيل هندسية وزراعية دقيقة.
          </p>
        </div>
      </section>

      {/* Services Grid - Apple-style */}
      <section className="bg-white py-24 md:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, idx) => (
              <div
                key={idx}
                className="group bg-warm-white rounded-3xl border border-charcoal/5 overflow-hidden shadow-apple hover:shadow-apple-xl transition-all duration-500 flex flex-col h-full hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right`} />
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6 text-right">
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold tracking-widest block uppercase font-latin">
                      <span className="text-gradient-mixed">{service.englishTitle}</span>
                    </span>
                    <h3 className="text-base font-black text-primary-deep leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-grey leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary-deep group-hover:text-botanical transition-all duration-300"
                  >
                    <span>التفاصيل الفنية والمواصفات</span>
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Services CTA - Apple-style */}
      <section className="bg-primary-deep text-warm-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-botanical/20 to-water-blue/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-water-blue/10 to-botanical/20 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="apple-title text-white">
              هل تحتاج لمعاينة مساحتك<br />
              <span className="text-gradient-mixed bg-gradient-to-r from-fresh-green via-water-blue to-soft-blue bg-clip-text text-transparent">
                أو ترغب بدمج خدمات متعددة؟
              </span>
            </h2>
            <p className="text-base text-warm-white/60 max-w-xl mx-auto leading-relaxed">
              مهندسو اللاندسكيب بالبيت الأخضر مستعدون لتقديم تصور شامل يدمج النباتات والري والشلالات والبرجولات معاً في تصميم واحد.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/contact"
              className="btn-apple bg-gradient-to-r from-botanical to-water-blue text-white shadow-lg hover:shadow-water-glow"
            >
              <span>احصل على معاينة وتصميم مجاني</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}