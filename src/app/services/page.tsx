import Link from 'next/link';
import { ArrowLeft, Phone } from 'lucide-react';

export default function ServicesPage() {
  const allServices = [
    {
      title: 'تنسيق حدائق بالرياض',
      englishTitle: 'Garden Landscaping',
      desc: 'تصميم وتنسيق حدائق منزلية وفلل بأحدث الأساليب العالمية المبتكرة.',
      image: '/images/service-garden-design.jpg',
      slug: 'garden-landscaping-riyadh'
    },
    {
      title: 'تنسيق الأسطح والمساحات الخارجية بالنرجس',
      englishTitle: 'Rooftop Spaces',
      desc: 'تحويل أسطح منازل النرجس والياسمين إلى جلسات وحدائق معلقة مع عزل تام.',
      image: '/images/statement-design.jpg',
      slug: 'rooftop-landscaping'
    },
    {
      title: 'توريد وتركيب ثيل صناعي',
      englishTitle: 'Artificial Grass',
      desc: 'ثيل صناعي عالي الجودة والكثافة مناسب للظروف المناخية الحارة.',
      image: '/images/service-artificial-grass.jpg',
      slug: 'artificial-grass'
    },
    {
      title: 'تركيب ثيل طبيعي بلدي وهولندي',
      englishTitle: 'Natural Grass',
      desc: 'توريد وزراعة الثيل الطبيعي مع خيارات الصيانة ومقاومة الحرارة والتملح.',
      image: '/images/service-natural-grass.jpg',
      slug: 'natural-grass'
    },
    {
      title: 'تركيب شلالات ونوافير عصرية',
      englishTitle: 'Waterfalls & Fountains',
      desc: 'شلالات ونوافير بتصاميم جدارية ومستقلة جذابة مزودة بإضاءات LED خافتة.',
      image: '/images/project-3.jpg',
      slug: 'waterfalls-fountains'
    },
    {
      title: 'تركيب شبكة ري أوتوماتيكية',
      englishTitle: 'Automatic Irrigation',
      desc: 'أنظمة ري آلية تساهم في تنظيم استهلاك المياه وتوزيع الري بكفاءة ذكية.',
      image: '/images/service-irrigation.jpg',
      slug: 'automatic-irrigation'
    },
    {
      title: 'تصميم وتنفيذ جلسات خارجية',
      englishTitle: 'Outdoor Seating',
      desc: 'جلسات خارجية مريحة وراقية تلائم طبيعة الفلل وتوفر أقصى درجات الخصوصية.',
      image: '/images/project-5.jpg',
      slug: 'outdoor-seating'
    },
    {
      title: 'تركيب برجولات ومظلات حدائق',
      englishTitle: 'Pergolas & Shades',
      desc: 'برجولات خشبية ومعدنية ومظلات قماش حديثة للوقاية من الشمس وتقليل الحرارة.',
      image: '/images/service-shade-structures.jpg',
      slug: 'pergolas-shades'
    },
    {
      title: 'تصميم وتركيب أحواض زراعية',
      englishTitle: 'Planter Boxes',
      desc: 'أحواض زراعية مودرن لتنظيم نمو النباتات وإضفاء لمسة معمارية أنيقة للمحيط.',
      image: '/images/project-1.jpg',
      slug: 'planter-boxes'
    },
    {
      title: 'زراعة الأشجار والنخيل والزهور',
      englishTitle: 'Trees, Palms & Flowers',
      desc: 'زراعة وتنسيق أشجار صحراوية ونخيل عربي وزهور موسمية ودائمة الخضرة.',
      image: '/images/project-6.jpg',
      slug: 'trees-palms-flowers'
    },
    {
      title: 'تنسيق حدائق تحت الدرج الخارجي',
      englishTitle: 'Under-Stair Landscaping',
      desc: 'استغلال المساحات الضيقة أسفل السلالم وتحويلها لواحات حجرية ونباتية مبهرة.',
      image: '/images/project-3.jpg',
      slug: 'under-stair-landscaping'
    },
    {
      title: 'صيانة وتجميل الحدائق الدورية',
      englishTitle: 'Garden Maintenance',
      desc: 'برامج صيانة دورية للعناية بالثيل الطبيعي وشبكات الري ومكافحة الآفات.',
      image: '/images/service-maintenance.jpg',
      slug: 'garden-maintenance'
    },
    {
      title: 'تصميم وإنشاء ملاعب كرة القدم',
      englishTitle: 'Football Fields',
      desc: 'تصميم وتنفيذ ملاعب خماسية وسكنية باستخدام أفضل أنواع الثيل الرياضي.',
      image: '/images/project-2.jpg',
      slug: 'football-fields'
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">
      
      {/* Header Banner */}
      <section className="relative bg-primary-deep text-warm-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/service-garden-design.jpg"
            alt="خدمات لاندسكيب بالرياض"
            className="w-full h-full object-cover opacity-20 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-4">
          <nav className="text-xs text-warm-white/60 flex items-center gap-2 font-bold mb-2">
            <Link href="/" className="hover:text-white">الرئيسية</Link>
            <span>/</span>
            <span className="text-white">خدماتنا</span>
          </nav>
          <span className="text-xs font-bold text-fresh-green tracking-widest uppercase block border-r-2 border-botanical pr-3">
            دليل الخدمات
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white">خدمات تنسيق وتصميم الحدائق</h1>
          <p className="text-sm md:text-base text-warm-white/70 max-w-2xl leading-relaxed">
            استكشف خدمات اللاندسكيب المتكاملة لفلل وقصور مدينة الرياض بتفاصيل هندسية وزراعية دقيقة.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, idx) => (
              <div
                key={idx}
                className="group bg-warm-white rounded-3xl border border-charcoal/5 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 to-transparent" />
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6 text-right">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-botanical tracking-widest block uppercase font-latin">
                      {service.englishTitle}
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
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary-deep group-hover:text-botanical transition-colors"
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

      {/* Services CTA */}
      <section className="bg-primary-deep text-warm-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-white">هل تحتاج لمعاينة مساحتك أو ترغب بدمج خدمات متعددة؟</h2>
          <p className="text-sm text-warm-white/70 max-w-xl mx-auto">
            مهندسو اللاندسكيب بالبيت الأخضر مستعدون لتقديم تصور شامل يدمج النباتات والري والشلالات والبرجولات معاً في تصميم واحد.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-white text-primary-deep font-bold px-8 py-4 rounded-full text-sm inline-block hover:scale-[1.02] transition-transform"
            >
              احصل على معاينة وتصميم مجاني
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
