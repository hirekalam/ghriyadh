import { useRef, useLayoutEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const articlesData: Record<string, {
  title: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}> = {
  'garden-design-riyadh': {
    title: 'تنسيق الحدائق في الرياض: دليلك الشامل',
    content: `
      <p>تنسيق الحدائق في الرياض يتطلب فهماً عميقاً للمناخ المحلي واختيار النباتات المناسبة. في هذا المقال، سنقدم لك دليلاً شاملاً يساعدك على إنشاء حديقة جميلة ومستدامة في مناخ الرياض الصحراوي.</p>
      
      <h2>فهم مناخ الرياض</h2>
      <p>تتميز الرياض بمناخ صحراوي حار صيفاً وبارد نسبياً شتاءً. درجات الحرارة في الصيف قد تصل إلى 45 درجة مئوية، بينما تنخفض في الشتاء إلى أقل من 10 درجات. هذا المناخ يتطلب اختيار نباتات مقاومة للجفاف وقادرة على تحمل الحرارة العالية.</p>
      
      <h2>اختيار النباتات المناسبة</h2>
      <p>من أهم النباتات المناسبة لمناخ الرياض:</p>
      <ul>
        <li><strong>النخيل:</strong> من أشهر النباتات في الرياض، يتحمل الحرارة والجفاف.</li>
        <li><strong>الزيتون:</strong> شجرة جميلة ومثمرة تتحمل الظروف الصحراوية.</li>
        <li><strong>السدر:</strong> شجرة محلية مقاومة للجفاف.</li>
        <li><strong>الأكاسيا:</strong> أشجار سريعة النمو تتحمل الحرارة.</li>
        <li><strong>الورود الصحراوية:</strong> نباتات زهرية جميلة تتحمل الجفاف.</li>
      </ul>
      
      <h2>تصميم الحديقة</h2>
      <p>عند تصميم حديقتك في الرياض، ضع في اعتبارك النقاط التالية:</p>
      <ul>
        <li>استخدم الظل الطبيعي من الأشجار الكبيرة لحماية النباتات الحساسة.</li>
        <li>صمم نظام ري فعال يوفر الماء.</li>
        <li>استخدم المواد المحلية في التصميم.</li>
        <li>أنشئ مناطق جلوس في الظل للاستمتاع بالحديقة.</li>
      </ul>
      
      <h2>نظام الري</h2>
      <p>نظام الري هو أحد أهم عناصر نجاح الحديقة في الرياض. أنصح باستخدام:</p>
      <ul>
        <li>نظام ري بالتنقيط لتوفير الماء.</li>
        <li>برمجة الري في أوقات مبكرة من الصباح أو متأخرة من المساء.</li>
        <li>استخدام أجهزة استشعار الرطوبة لتجنب الري الزائد.</li>
      </ul>
      
      <h2>الصيانة الدورية</h2>
      <p>الصيانة المنتظمة ضرورية ل keeping حديقتك في أفضل حالة. تشمل الصيانة:</p>
      <ul>
        <li>قص الأشجار والشجيرات بانتظام.</li>
        <li>التسميد في الأوقات المناسبة.</li>
        <li>مكافحة الآفات والأمراض.</li>
        <li>إزالة الأعشاب الضارة.</li>
      </ul>
      
      <h2>الخاتمة</h2>
      <p>تنسيق الحدائق في الرياض تحدي ممتع يتطلب المعرفة والخبرة. باتباع النصائح في هذا الدليل، يمكنك إنشاء حديقة جميلة ومستدامة تتحمل مناخ الرياض وتضفي جمالاً على منزلك.</p>
    `,
    image: '/images/blog-garden-design.jpg',
    date: '2026-03-01',
    readTime: '8 دقائق',
    category: 'تنسيق حدائق',
    author: 'فريق Green House',
  },
  'artificial-grass-guide': {
    title: 'أفضل أنواع العشب الصناعي وكيفية اختياره',
    content: `
      <p>العشب الصناعي أصبح خياراً شائعاً للعديد من أصحاب المنازل في الرياض. في هذا المقال، سنستعرض أفضل أنواع العشب الصناعي ونقدم نصائح لاختيار النوع المناسب لاحتياجاتك.</p>
      
      <h2>ما هو العشب الصناعي؟</h2>
      <p>العشب الصناعي هو سطح مصنوع من الألياف الاصطناعية يشبه العشب الطبيعي. يستخدم في الحدائق، الملاعب، والمساحات الخارجية. تطورت تقنية العشب الصناعي كثيراً في السنوات الأخيرة ليصبح أكثر واقعية وأماناً.</p>
      
      <h2>أنواع العشب الصناعي</h2>
      <p>هناك عدة أنواع من العشب الصناعي، كل منها له استخداماته المحددة:</p>
      
      <h3>1. العشب المنزلي</h3>
      <p>مصمم للاستخدام في الحدائق المنزلية. يتميز بمظهر طبيعي وناعم الملمس.</p>
      
      <h3>2. العشب الرياضي</h3>
      <p>مصمم لتحمل الاستخدام العالي في الملاعب. أكثر متانة وصلابة.</p>
      
      <h3>3. العشب التجاري</h3>
      <p>مناسب للمساحات التجارية الكبيرة. يوازن بين التكلفة والجودة.</p>
      
      <h2>معايير اختيار العشب الصناعي</h2>
      <p>عند اختيار العشب الصناعي، فكر في:</p>
      <ul>
        <li><strong>الارتفاع:</strong> يتراوح بين 20-50 ملم. الأطول يبدو أكثر طبيعية.</li>
        <li><strong>الكثافة:</strong> الكثافة الأعلى تعطي مظهراً أكثر اكتمالاً.</li>
        <li><strong>اللون:</strong> اختر درجات خضراء متعددة للمظهر الطبيعي.</li>
        <li><strong>الضمان:</strong> ابحث عن ضمان يمتد لـ 8-10 سنوات.</li>
      </ul>
      
      <h2>فوائد العشب الصناعي</h2>
      <ul>
        <li>لا يحتاج إلى ري أو قص.</li>
        <li>يبقى أخضر طوال العام.</li>
        <li>مثالي للمناطق المظللة.</li>
        <li>آمن للأطفال والحيوانات.</li>
        <li>يوفر تكاليف الصيانة على المدى الطويل.</li>
      </ul>
      
      <h2>الخاتمة</h2>
      <p>اختيار العشب الصناعي المناسب يعتمد على احتياجاتك وميزانيتك. استشر متخصصين لمساعدتك في اتخاذ القرار الصحيح.</p>
    `,
    image: '/images/service-artificial-grass.jpg',
    date: '2026-02-25',
    readTime: '6 دقائق',
    category: 'عشب صناعي',
    author: 'فريق Green House',
  },
  'home-garden-design': {
    title: 'تصميم الحدائق المنزلية في السعودية',
    content: `
      <p>تصميم حديقة منزلية في السعودية يتطلب مراعاة عدة عوامل مناخية وثقافية. في هذا المقال، نقدم لك أفكاراً وتصاميم مبتكرة تناسب مختلف المساحات والأذواق.</p>
      
      <h2>تصاميم للمساحات الصغيرة</h2>
      <p>حتى المساحات الصغيرة يمكن أن تتحول إلى واحات خضراء جميلة:</p>
      <ul>
        <li>استخدم النباتات العمودية لتوفير المساحة.</li>
        <li>أضف مرايا لإعطاء إحساس بالاتساع.</li>
        <li>استخدم الأواني المعلقة.</li>
        <li>صمم جداراً نباتياً صغيراً.</li>
      </ul>
      
      <h2>تصاميم للمساحات الكبيرة</h2>
      <p>المساحات الكبيرة تتيح لك إضافة المزيد من العناصر:</p>
      <ul>
        <li>أنشئ مناطق جلوس متعددة.</li>
        <li>أضف نافورة أو شلال صغير.</li>
        <li>صمم ممرات حجرية.</li>
        <li>أنشئ منطقة للشواء.</li>
      </ul>
      
      <h2>العناصر الأساسية</h2>
      <p>كل حديقة ناجحة تحتاج إلى:</p>
      <ul>
        <li><strong>منطقة جلوس:</strong> للاستمتاع بالحديقة.</li>
        <li><strong>الظل:</strong> مهم جداً في مناخ السعودية.</li>
        <li><strong>الإضاءة:</strong> لاستخدام الحديقة ليلاً.</li>
        <li><strong>النباتات:</strong> اختر أنواعاً مناسبة للمناخ.</li>
      </ul>
      
      <h2>الطرازات الشائعة</h2>
      <p>هناك عدة طرازات شائعة في تصميم الحدائق:</p>
      <ul>
        <li><strong>الطراز العربي التقليدي:</strong> يعتمد على الماء والظل.</li>
        <li><strong>الطراز الحديث:</strong> خطوط نظيفة ومواد معاصرة.</li>
        <li><strong>الطراز الطبيعي:</strong> يحاكي الطبيعة البرية.</li>
        <li><strong>الطراز المتوسطي:</strong> يناسب مناخ السعودية.</li>
      </ul>
      
      <h2>الخاتمة</h2>
      <p>تصميم الحديقة المنزلية هو استثمار طويل المدى. خذ وقتك في التخطيط واستشر المتخصصين لتحقيق أفضل النتائج.</p>
    `,
    image: '/images/project-1.jpg',
    date: '2026-02-18',
    readTime: '10 دقائق',
    category: 'تصميم',
    author: 'فريق Green House',
  },
  'irrigation-systems': {
    title: 'أهمية شبكات الري الحديثة',
    content: `
      <p>شبكات الري الحديثة هي استثمار ذكي لأي حديقة، خاصة في المناخ الصحراوي للسعودية. في هذا المقال، نستعرض فوائد هذه الأنظمة وكيفية اختيار النظام المناسب.</p>
      
      <h2>لماذا نحتاج إلى أنظمة ري حديثة؟</h2>
      <p>في مناخ الرياض الحار والجاف، الري الفعال أمر حيوي لصحة النباتات. الأنظمة التقليدية تفقد كميات كبيرة من الماء بالتبخر، بينما الأنظمة الحديثة توفر الماء وتضمن وصوله لجذور النباتات.</p>
      
      <h2>أنواع أنظمة الري</h2>
      
      <h3>1. الري بالتنقيط</h3>
      <p>أكثر الأنظمة كفاءة. يوفر حتى 50% من الماء مقارنة بالري التقليدي. مثالي للأشجار والشجيرات.</p>
      
      <h3>2. الرشاشات الدوارة</h3>
      <p>مناسبة للمساحات العشبية الكبيرة. يمكن برمجتها للعمل في أوقات محددة.</p>
      
      <h3>3. الري بالرذاذ</h3>
      <p>مثالي للبساتين والحدائق الكبيرة. يوفر تغطية متساوية.</p>
      
      <h3>4. الأنظمة الذكية</h3>
      <p>تستخدم أجهزة استشعار لتحديد احتياجات النباتات وتعمل أوتوماتيكياً.</p>
      
      <h2>فوائد أنظمة الري الحديثة</h2>
      <ul>
        <li>توفير كبير في استهلاك الماء (30-50%).</li>
        <li>نمو أفضل للنباتات.</li>
        <li>توفير الوقت والجهد.</li>
        <li>إمكانية البرمجة والتحكم عن بعد.</li>
        <li>تقليل نمو الأعشاب الضارة.</li>
      </ul>
      
      <h2>نصائح للاستخدام الأمثل</h2>
      <ul>
        <li>برمج الري في أوقات مبكرة من الصباح.</li>
        <li>اضبط التوقيت حسب الموسم.</li>
        <li>افحص النظام دورياً للتأكد من عدم الانسداد.</li>
        <li>استخدم أجهزة استشعار الرطوبة.</li>
      </ul>
      
      <h2>الخاتمة</h2>
      <p>استثمار في نظام ري حديث يعود عليك بالفائدة على المدى الطويل من خلال توفير الماء وتحسين صحة نباتاتك.</p>
    `,
    image: '/images/blog-irrigation.jpg',
    date: '2026-02-10',
    readTime: '7 دقائق',
    category: 'أنظمة ري',
    author: 'فريق Green House',
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const contentRef = useRef<HTMLDivElement>(null);

  const article = slug ? articlesData[slug] : null;

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animateItems = contentRef.current?.querySelectorAll('.animate-item');
      if (animateItems && animateItems.length > 0) {
        gsap.fromTo(
          animateItems,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: contentRef.current,
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
      {/* Hero Image */}
      <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B3A2E] via-[#0B3A2E]/50 to-transparent" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="w-full px-6 lg:px-12 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            to="/blog"
            className="animate-item inline-flex items-center gap-2 text-[#F4F7F5]/70 hover:text-[#D4A03A] mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>العودة للمدونة</span>
          </Link>

          {/* Article Card */}
          <div className="animate-item bg-[#F4F7F5]/5 rounded-3xl p-8 lg:p-12">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-[#D4A03A]/20 text-[#D4A03A] px-4 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <div className="flex items-center gap-1 text-[#F4F7F5]/60 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.date).toLocaleDateString('ar-SA')}</span>
              </div>
              <div className="flex items-center gap-1 text-[#F4F7F5]/60 text-sm">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-[#F4F7F5] font-black text-3xl lg:text-4xl mb-6">
              {article.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3 mb-8 pb-8 border-b border-[#F4F7F5]/10">
              <div className="w-12 h-12 rounded-full bg-[#D4A03A] flex items-center justify-center">
                <span className="text-[#0B3A2E] font-bold">G</span>
              </div>
              <div>
                <div className="text-[#F4F7F5] font-medium">{article.author}</div>
                <div className="text-[#F4F7F5]/60 text-sm">فريق Green House</div>
              </div>
            </div>

            {/* Content */}
            <div
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-[#F4F7F5]/10">
              <div className="flex items-center gap-4">
                <span className="text-[#F4F7F5]/60 flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  مشاركة:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#F4F7F5]/10 flex items-center justify-center text-[#F4F7F5] hover:bg-[#D4A03A] hover:text-[#0B3A2E] transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#F4F7F5]/10 flex items-center justify-center text-[#F4F7F5] hover:bg-[#D4A03A] hover:text-[#0B3A2E] transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#F4F7F5]/10 flex items-center justify-center text-[#F4F7F5] hover:bg-[#D4A03A] hover:text-[#0B3A2E] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="animate-item mt-12">
            <h2 className="text-[#F4F7F5] font-bold text-2xl mb-6">مقالات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(articlesData)
                .filter(([key]) => key !== slug)
                .slice(0, 2)
                .map(([key, relatedArticle]) => (
                  <Link
                    key={key}
                    to={`/blog/${key}`}
                    className="group bg-[#F4F7F5]/5 rounded-2xl overflow-hidden hover:bg-[#F4F7F5]/10 transition-colors"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-[#F4F7F5] font-bold group-hover:text-[#D4A03A] transition-colors">
                        {relatedArticle.title}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
