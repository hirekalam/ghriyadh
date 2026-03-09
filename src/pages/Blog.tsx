import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    id: 1,
    slug: 'garden-design-riyadh',
    title: 'تنسيق الحدائق في الرياض: دليلك الشامل',
    excerpt: 'تعرف على أهم النصائح والإرشادات لتنسيق حديقتك في مناخ الرياض، وكيفية اختيار النباتات المناسبة.',
    image: '/images/blog-garden-design.jpg',
    date: '2026-03-01',
    readTime: '8 دقائق',
    category: 'تنسيق حدائق',
  },
  {
    id: 2,
    slug: 'artificial-grass-guide',
    title: 'أفضل أنواع العشب الصناعي وكيفية اختياره',
    excerpt: 'دليل شامل لاختيار العشب الصناعي المناسب لحديقتك، مع مقارنة بين الأنواع المختلفة والأسعار.',
    image: '/images/service-artificial-grass.jpg',
    date: '2026-02-25',
    readTime: '6 دقائق',
    category: 'عشب صناعي',
  },
  {
    id: 3,
    slug: 'home-garden-design',
    title: 'تصميم الحدائق المنزلية في السعودية',
    excerpt: 'أفكار وتصاميم مبتكرة للحدائق المنزلية تناسب المساحات الصغيرة والكبيرة في السعودية.',
    image: '/images/project-1.jpg',
    date: '2026-02-18',
    readTime: '10 دقائق',
    category: 'تصميم',
  },
  {
    id: 4,
    slug: 'irrigation-systems',
    title: 'أهمية شبكات الري الحديثة',
    excerpt: 'تعرف على فوائد أنظمة الري الحديثة وكيفية توفير الماء والحفاظ على نباتاتك بشكل أمثل.',
    image: '/images/blog-irrigation.jpg',
    date: '2026-02-10',
    readTime: '7 دقائق',
    category: 'أنظمة ري',
  },
];

const Blog = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      );

      const blogCards = cardsRef.current?.querySelectorAll('.blog-card');
      if (blogCards && blogCards.length > 0) {
        gsap.fromTo(
          blogCards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-[#0B3A2E] min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-[#D4A03A] text-sm font-bold tracking-widest uppercase mb-4 block">
            BLOG
          </span>
          <h1 className="text-[#F4F7F5] font-black text-4xl lg:text-6xl mb-6">
            المدونة
          </h1>
          <p className="text-[#F4F7F5]/70 text-lg max-w-2xl mx-auto">
            مقالات ونصائح متخصصة في مجال تنسيق الحدائق والمساحات الخضراء
          </p>
        </div>

        {/* Articles Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className="blog-card group bg-[#F4F7F5]/5 rounded-3xl overflow-hidden hover:bg-[#F4F7F5]/10 transition-colors duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#D4A03A] text-sm font-medium">{article.category}</span>
                  <span className="text-[#F4F7F5]/40">|</span>
                  <div className="flex items-center gap-1 text-[#F4F7F5]/60 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString('ar-SA')}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#F4F7F5]/60 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <h2 className="text-[#F4F7F5] font-bold text-xl lg:text-2xl mb-3 group-hover:text-[#D4A03A] transition-colors">
                  {article.title}
                </h2>
                <p className="text-[#F4F7F5]/60 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[#D4A03A] font-medium">
                  <span>اقرأ المزيد</span>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-[#F4F7F5]/5 rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-[#F4F7F5] font-bold text-2xl lg:text-3xl mb-4">
            اشترك في نشرتنا البريدية
          </h2>
          <p className="text-[#F4F7F5]/70 mb-8 max-w-xl mx-auto">
            احصل على أحدث المقالات والنصائح حول تنسيق الحدائق مباشرة إلى بريدك الإلكتروني
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="flex-1 bg-[#0B3A2E]/50 border border-[#F4F7F5]/20 rounded-full px-6 py-3 text-[#F4F7F5] focus:outline-none focus:border-[#D4A03A] text-center sm:text-right"
            />
            <button
              type="submit"
              className="bg-[#D4A03A] text-[#0B3A2E] px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
            >
              اشترك
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;
