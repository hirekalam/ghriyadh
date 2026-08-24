import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

interface ArticleSummary {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const articles: ArticleSummary[] = [
  {
    id: 1,
    slug: 'garden-design-riyadh',
    title: 'تنسيق الحدائق في الرياض: دليلك الشامل للواحات المستدامة',
    excerpt: 'تعرف على الممارسات الهندسية الصحيحة لتنسيق حديقتك في مناخ الرياض الصحراوي الحار، وكيفية انتقاء النباتات الملائمة التي توفر استهلاك المياه.',
    image: '/images/blog-garden-design.jpg',
    date: '2026-08-10',
    readTime: '8 دقائق',
    category: 'حدائق الرياض'
  },
  {
    id: 2,
    slug: 'artificial-grass-guide',
    title: 'الثيل الطبيعي أم الصناعي؟ دليل المقارنة والاختيار للفلل بالرياض',
    excerpt: 'مقارنة فنية ومالية شاملة بين تركيب العشب الطبيعي والعشب الصناعي في الحوش والروف، لمعرفة الفروقات الحقيقية وتكاليف الصيانة وتوفير المياه.',
    image: '/images/service-artificial-grass.jpg',
    date: '2026-08-05',
    readTime: '6 دقائق',
    category: 'الثيل الصناعي'
  },
  {
    id: 3,
    slug: 'home-garden-design',
    title: 'أفكار وتصاميم جلسات خارجية مودرن للفلل السعودية',
    excerpt: 'أفكار وتصاميم مبتكرة لتأسيس مجالس خارجية وبرجولات خشبية ومعدنية ملهمة تتناسب مع الخصوصية العائلية وتستغل المساحات والارتدادات الجانبية.',
    image: '/images/project-1.jpg',
    date: '2026-07-28',
    readTime: '10 دقائق',
    category: 'الجلسات الخارجية'
  },
  {
    id: 4,
    slug: 'irrigation-systems',
    title: 'أهمية شبكات الري الأوتوماتيكية في ترشيد فواتير المياه بالرياض',
    excerpt: 'كيف تعمل أنظمة الري بالتنقيط والرشاشات المدفونة مع المؤقت الإلكتروني الذكي Hunter لتغذية النباتات بكفاءة وتقليص الفاتورة الشهرية للماء.',
    image: '/images/blog-irrigation.jpg',
    date: '2026-07-15',
    readTime: '7 دقائق',
    category: 'الري الذكي'
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">
      
      {/* Page Header */}
      <section className="relative bg-primary-deep text-warm-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blog-garden-design.jpg"
            alt="مدونة البيت الأخضر"
            className="w-full h-full object-cover opacity-20 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-4">
          <nav className="text-xs text-warm-white/80 flex items-center gap-2 font-bold mb-4">
            <Link href="/" className="hover:text-white">الرئيسية</Link>
            <span>/</span>
            <span className="text-white">المدونة</span>
          </nav>
          <span className="text-xs font-bold text-fresh-green tracking-widest uppercase block border-r-2 border-botanical pr-3">
            المعرفة الزراعية والتصميم
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white">مدونة لاندسكيب وتنسيق الحدائق</h1>
          <p className="text-sm md:text-base text-warm-white/70 max-w-2xl leading-relaxed">
            مقالات ودراسات فنية كتبها مهندسو البيت الأخضر لإرشادك في العناية بالنباتات وتصميم مساحة معيشتك الخارجية بالرياض.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="group bg-warm-white border border-charcoal/5 rounded-3xl overflow-hidden hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col h-full"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6 text-right">
                  <div className="space-y-3">
                    
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-grey font-bold">
                      <span className="text-botanical">{article.category}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{new Date(article.date).toLocaleDateString('ar-SA')}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-base md:text-lg font-black text-primary-deep leading-tight group-hover:text-botanical transition-colors">
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>
                    
                    <p className="text-xs text-muted-grey leading-relaxed text-justify">
                      {article.excerpt}
                    </p>

                  </div>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary-deep hover:text-botanical transition-colors pt-2"
                  >
                    <span>اقرأ المقال بالكامل</span>
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  </Link>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
