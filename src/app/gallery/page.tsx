"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function Gallery() {
  const categories = [
    'الكل', 'حدائق', 'فلل', 'جلسات خارجية', 'شلالات ونوافير', 'ثيل طبيعي', 'ثيل صناعي', 'برجولات', 'ري', 'مساحات أسطح'
  ];

  const [activeFilter, setActiveFilter] = useState('الكل');

  const galleryItems = [
    { title: 'تصميم حديقة فيلا سكنية مودرن', category: 'حدائق', image: '/images/project-1.jpg' },
    { title: 'تركيب ثيل صناعي لارتداد خلفي في فيلا', category: 'ثيل صناعي', image: '/images/project-2.jpg' },
    { title: 'شلال جداري عصري مع إضاءة دافئة', category: 'شلالات ونوافير', image: '/images/project-3.jpg' },
    { title: 'تنسيق أسطح فلل النرجس مع مظلة حديد', category: 'مساحات أسطح', image: '/images/project-4.jpg' },
    { title: 'جلسة برجولا خشبية لروف فيلا سكنية', category: 'برجولات', image: '/images/project-5.jpg' },
    { title: 'نظام ري أوتوماتيكي ذكي وتوزيع الرشاشات', category: 'ري', image: '/images/project-6.jpg' },
    { title: 'ممر حجرى محاط بالثيل الطبيعي بلدي', category: 'ثيل طبيعي', image: '/images/hero-garden-path.jpg' },
    { title: 'تنسيق حوش فيلا سكنية مع أحواض زراعية', category: 'فلل', image: '/images/service-garden-design.jpg' },
    { title: 'ثيل طبيعي هولندي في فناء فيلا بالياسمين', category: 'ثيل طبيعي', image: '/images/service-natural-grass.jpg' },
    { title: 'شلال منزلي مميز مع ممرات حصى أبيض', category: 'شلالات ونوافير', image: '/images/project-3.jpg' },
    { title: 'تصميم جلسة خارجية متكاملة مع برجولا ومظلات', category: 'جلسات خارجية', image: '/images/project-5.jpg' },
    { title: 'مخطط تمديد ري بالتنقيط في فيلا الصحافة', category: 'ري', image: '/images/service-irrigation.jpg' },
    { title: 'ثيل صناعي ممتاز لملعب أطفال مصغر', category: 'ثيل صناعي', image: '/images/service-artificial-grass.jpg' },
    { title: 'تنسيق سطح وروف لفيلا بالملقا', category: 'مساحات أسطح', image: '/images/statement-design.jpg' }
  ];

  const filteredItems = activeFilter === 'الكل'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">

      {/* Page Header - Apple-style */}
      <section className="relative bg-primary-deep text-warm-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/project-1.jpg"
            alt="معرض أعمال تنسيق الحدائق بالرياض"
            className="w-full h-full object-cover opacity-20 object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/90 to-primary-deep/60" />
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-botanical/10 to-water-blue/10 blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-6">
          <nav className="text-xs text-warm-white/80 flex items-center gap-2 font-semibold mb-2">
            <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <span className="w-1 h-1 rounded-full bg-warm-white/20" />
            <span className="text-warm-white/80">أعمالنا</span>
          </nav>
          <div className="inline-flex items-center gap-2 text-fresh-green font-bold text-xs uppercase tracking-[0.2em]">
            <span className="w-8 h-px bg-fresh-green/50" />
            <span>المعرض البصري</span>
          </div>
          <h1 className="apple-title text-white">معرض أعمالنا وملهمات اللاندسكيب</h1>
          <p className="text-base md:text-lg text-warm-white/80 max-w-2xl leading-relaxed">
            تصاميم عصرية وأفكار ملهمة لفراغات خارجية ومساحات حدائق تناسب طراز الفلل والقصور بالرياض.
          </p>
        </div>
      </section>

      {/* Gallery Section - Apple-style */}
      <section className="bg-white py-24 md:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">

          {/* Apple-style pill filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-8 border-b border-charcoal/5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${activeFilter === category
                    ? 'bg-gradient-to-r from-primary-deep to-botanical text-white shadow-premium-glow scale-105'
                    : 'bg-warm-white text-muted-grey border border-charcoal/5 hover:bg-charcoal/5 hover:border-charcoal/10'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid display - Apple-style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="group bg-warm-white border border-charcoal/5 rounded-3xl overflow-hidden shadow-apple hover:shadow-apple-xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-botanical to-water-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
                </div>
                <div className="p-5 text-right space-y-1">
                  <span className="text-[10px] font-bold tracking-wider block uppercase">
                    <span className="text-gradient-mixed">{item.category}</span>
                  </span>
                  <h3 className="text-sm font-black text-primary-deep leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-muted-grey font-bold">
              لا توجد صور متوفرة في هذا القسم حالياً.
            </div>
          )}

          {/* Honest Disclaimer */}
          <div className="p-6 bg-gradient-to-r from-botanical/5 to-water-blue/5 border border-botanical/10 rounded-2xl max-w-3xl mx-auto text-center text-xs text-muted-grey leading-relaxed">
            <span className="font-bold text-botanical">ملاحظة: </span>
            جميع الصور المعروضة تمثل تصورات معمارية ومشاريع لاندسكيب تلهم العملاء لاختيار العناصر والتخطيط المناسب، دون ادعاء ملكية صور خارجية لجهات أخرى، وذلك التزاماً بمبدأ الصدق والشفافية.
          </div>

        </div>
      </section>

      {/* Gallery Call to Action - Apple-style */}
      <section className="bg-primary-deep text-warm-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-botanical/20 to-water-blue/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-water-blue/10 to-botanical/20 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="apple-title text-white">
              هل أعجبك أحد التصاميم<br />
              <span className="text-gradient-mixed bg-gradient-to-r from-fresh-green via-water-blue to-soft-blue bg-clip-text text-transparent">
                أو العناصر السابقة؟
              </span>
            </h2>
            <p className="text-base text-warm-white/80 max-w-xl mx-auto leading-relaxed">
              تواصل معنا اليوم ودعنا ندمج تلك الأفكار في مخطط ثلاثي الأبعاد مخصص لمساحة منزلك بالكامل.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/contact"
              className="btn-apple bg-gradient-to-r from-botanical to-water-blue text-white shadow-lg hover:shadow-water-glow"
            >
              <span>احصل على تصميمك الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}