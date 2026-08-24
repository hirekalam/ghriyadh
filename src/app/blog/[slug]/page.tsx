import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';

interface ArticleDetail {
  title: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

const articlesData: Record<string, ArticleDetail> = {
  'garden-design-riyadh': {
    title: 'تنسيق الحدائق في الرياض: دليلك الشامل للواحات المستدامة',
    content: `
      <p className="text-justify leading-relaxed mb-6">تنسيق حدائق الفلل بالرياض يتطلب دراسة دقيقة للتربة المحلية وطبيعة الطقس الجاف صيفاً واختيار نوعية النباتات المناسبة. في هذا المقال، سنضع دليلاً فنية متكاملاً يساعدك على تأسيس حديقة جميلة تحافظ على رطوبتها بلا هدر للمياه.</p>
      
      <h2 className="text-lg font-black text-primary-deep mt-8 mb-4">أهمية التخطيط ومراعاة طقس الرياض</h2>
      <p className="text-justify leading-relaxed mb-6">تتسم الرياض بمناخ صحراوي ترتفع فيه الحرارة صيفاً لتتجاوز 45 درجة مئوية، ما يفرز معدلات تبخر سريعة للمياه. لذلك، فإن عشوائية توزيع الشجيرات دون حواجز ظل أو إعطاء أولوية للري الذكي سيتلف النباتات سريعا. يفضل دائماً زرع أشجار واقية ومظللة لتقليل تعرض الزهور الحساسة للشمس العمودية.</p>
      
      <h3 className="text-base font-black text-primary-deep mt-6 mb-3">1. أصناف نباتية صديقة للمناخ السعودي</h3>
      <p className="text-justify leading-relaxed mb-6">يفضل دائماً انتقاء أشجار ونباتات محلية أو برية تتواءم مع قساوة الحرارة والملوحة، ومنها:</p>
      <ul className="list-disc pr-6 mb-6 space-y-2">
        <li><strong>النخيل البلدي ونخيل واشنطونيا:</strong> يتحمل درجات الحرارة العالية والجفاف التام ويعطي امتداداً بصرياً رائعاً.</li>
        <li><strong>الياسمين الهندي (الفل):</strong> شجيرة زهرية تتميز برائحتها العطرة الدافئة ومقاومتها الممتازة للحر المباشر.</li>
        <li><strong>الجهنمية متسلقة الجدران:</strong> تزدهر وتكسو الأسوار باللون الوردي أو البنفسجي، وتزداد تألقاً مع حرارة الصيف الشديدة.</li>
        <li><strong>شجر السدر والأكاسيا:</strong> أشجار برية سريعة النمو توفر ظلالاً وارفة للحديقة وتستهلك مياهاً ضئيلة جداً.</li>
      </ul>
      
      <h2 className="text-lg font-black text-primary-deep mt-8 mb-4">2. تمديد شبكات ري أوتوماتيكية</h2>
      <p className="text-justify leading-relaxed mb-6">شبكة الري الذكية هي صمام أمان حدائق الرياض. نوصي بالتالي:</p>
      <ul className="list-disc pr-6 mb-6 space-y-2">
        <li>استخدام نظام الري بالتنقيط حول جذور الأشجار والأحواض لتقليل كميات المياه المفقودة.</li>
        <li>برمجة موقت التلقائي (Timer) ليعمل في الساعات الباردة (مثل 5:00 ص أو 7:00 م) لمنع نمو الفطريات وضياع المياه بالتبخر صيفاً.</li>
        <li>فصل دوائر ري الثيل الطبيعي (رشاشات مدفونة) عن دوائر ري الأحواض والشجيرات لتنظيم الاستهلاك.</li>
      </ul>
      
      <h2 className="text-lg font-black text-primary-deep mt-8 mb-4">الخلاصة</h2>
      <p className="text-justify leading-relaxed">تنسيق الحديقة بالرياض تحدٍ فني ممتع. باتباع النصائح السابقة واختيار مواد عالية الجودة وتأسيس شبكة ري مدروسة، ستحصل عائلتك على متنفس طبيعي فاخر يضفي بهجة على فيلتك لسنوات طويلة.</p>
    `,
    image: '/images/blog-garden-design.jpg',
    date: '2026-08-10',
    readTime: '8 دقائق',
    category: 'حدائق الرياض',
    author: 'مهندسو البيت الأخضر'
  },
  'artificial-grass-guide': {
    title: 'الثيل الطبيعي أم الصناعي؟ دليل المقارنة والاختيار للفلل بالرياض',
    content: `
      <p className="text-justify leading-relaxed mb-6">يتساءل ملاك الفلل بالرياض كثيراً: أيهما أفضل لحوش منزلي، تركيب عشب صناعي أم زراعة ثيل طبيعي؟ في هذا المقال نضع لك مقارنة فنية متزنة حول التكاليف والجمال والوظيفة العملية لكل نوع.</p>
      
      <h2 className="text-lg font-black text-primary-deep mt-8 mb-4">أولاً: العشب الصناعي ومميزاته</h2>
      <p className="text-justify leading-relaxed mb-6">يمثل الثيل الصناعي خياراً مريحاً وموفراً على المدى البعيد، وتتلخص مزاياه في:</p>
      <ul className="list-disc pr-6 mb-6 space-y-2">
        <li><strong>ترشيد كامل للمياه:</strong> لا يحتاج لعملية ري، ما يزيل عبء فواتير المياه الإضافية بالكامل.</li>
        <li><strong>صيانة شبه منعدمة:</strong> لا يتطلب قساً أو تسميداً أو رشاً للمبيدات لمكافحة الحشرات.</li>
        <li><strong>ملاءمة الأسطح والمظلات:</strong> مثالي جداً لأسطح الفلل، والجلسات المعتمة تحت البرجولات التي لا تصلها شمس كافية لنمو الزرع الطبيعي.</li>
      </ul>
      
      <h2 className="text-lg font-black text-primary-deep mt-8 mb-4">ثانياً: العشب الطبيعي ومميزاته</h2>
      <p className="text-justify leading-relaxed mb-6">رغم حاجته للمتابعة والري، يمتلك الثيل الطبيعي خصائص فريدة منها:</p>
      <ul className="list-disc pr-6 mb-6 space-y-2">
        <li><strong>تلطيف وترطيب حرارة الجو:</strong> يمتص أشعة الشمس ويخفض درجات حرارة الفناء الخارجي للفيلا بشكل كبير.</li>
        <li><strong>منظر وملمس طبيعي رائع:</strong> يعطي إحساساً بالحيوية ونظارة طبيعية ترفع من راحة المكان النفسية.</li>
        <li><strong>صديق للبيئة تماماً:</strong> يساهم في تصفية الهواء وتوليد الأوكسجين النقي حول المنزل.</li>
      </ul>
      
      <h2 className="text-lg font-black text-primary-deep mt-8 mb-4">كيف تختار الأنسب لك؟</h2>
      <p className="text-justify leading-relaxed">
        إذا كنت لا تملك وقتاً للصيانة وتود تزيين السطح أو ارتداد ضيق، فإن العشب الصناعي سماكة 45 أو 50 ملم هو خيارك الأذكى. أما إذا كان لديك فناء واسع ومفتوح للشمس وتملك شبكة ري ذكية وتايمر مبرمج لتقليل الفاقد، فإن الثيل الطبيعي (C2000 الأمريكي) سيمنح فيلتك واحة خضراء وارفة وطبيعية.
      </p>
    `,
    image: '/images/service-artificial-grass.jpg',
    date: '2026-08-05',
    readTime: '6 دقائق',
    category: 'الثيل الصناعي',
    author: 'مهندسو البيت الأخضر'
  },
  'home-garden-design': {
    title: 'أفكار وتصاميم جلسات خارجية مودرن للفلل السعودية',
    content: `
      <p className="text-justify leading-relaxed mb-6">تصميم الجلسات الخارجية بفناء الفيلا بالرياض لم يعد ترفاً، بل أصبح مكاناً أساسياً لتجمع العائلة في فترات المساء. نقدم في هذا المقال أفكاراً معمارية لاستغلال الارتدادات وتأمين الخصوصية.</p>
      
      <h2 className="text-lg font-black text-primary-deep mt-8 mb-4">1. استغلال الارتدادات الخلفية والجانبية للخصوصية</h2>
      <p className="text-justify leading-relaxed mb-6">غالباً ما تكون المساحات الأمامية للفلل مكشوفة، لذا يُعد الارتداد الخلفي هو المكان الأنسب لبناء جلسة عائلية بخصوصية كاملة. يمكن رصف الأرضية ببلاط بورسلان خارجي غير قابل للانزلاق، ووضع مقاعد خرسانية مدمجة مغطاة بوسائد مريحة.</p>
      
      <h2 className="text-lg font-black text-primary-deep mt-8 mb-4">2. إضافة جداريات مائية وشلالات جدارية</h2>
      <p className="text-justify leading-relaxed mb-6">خرير المياه يمتص ضوضاء الخارج ويصنع بيئة هادئة ومريحة. الشلالات الجدارية لا تستهلك مساحة أرضية كبيرة، وتعمل بمضخة داخل خزان مغلق يعيد تدوير المياه، ما يعزز الترطيب والرفاهية للجلسة.</p>
      
      <h2 className="text-lg font-black text-primary-deep mt-8 mb-4">3. المظلات والبرجولات للوقاية من حر النهار</h2>
      <p className="text-justify leading-relaxed">
        البرجولة المعدنية المكسوة بشرائح الخشب المعالج (WPC) أو اللكسان توفر تظليلاً رائعاً للجلسات وموقفا للسيارات. كما نوصي بإدراج فتحات لتمديد مراوح رذاذ مائي لترطيب الجلسة خلال فترات الصيف الحارة بالرياض.
      </p>
    `,
    image: '/images/project-1.jpg',
    date: '2026-07-28',
    readTime: '10 دقائق',
    category: 'الجلسات الخارجية',
    author: 'مهندسو البيت الأخضر'
  },
  'irrigation-systems': {
    title: 'أهمية شبكات الري الأوتوماتيكية في ترشيد فواتير المياه بالرياض',
    content: `
      <p className="text-justify leading-relaxed mb-6">يعتبر شح المياه وارتفاع درجات الحرارة بالرياض من أهم تحديات الحفاظ على حديقة خضراء. هنا يبرز دور شبكة الري الأوتوماتيكية في تقديم حلول هندسية تروي التربة بكفاءة ممتازة ودون هدر مالي.</p>
      
      <h2 className="text-lg font-black text-primary-deep mt-8 mb-4">1. تنظيم كميات الري ومنع التبخر</h2>
      <p className="text-justify leading-relaxed mb-6">الري اليدوي غالباً ما يؤدي إلى هدر كميات هائلة من المياه تتبخر سريعا بفعل شمس الظهيرة، أو يتركز في زاوية واحدة ويحرم زاوية أخرى. تعمل أنظمة الري الآلية عبر رشاشات مدفونة (Pop-up Sprinklers) ترتفع عند التشغيل لتغطية المسطح العشبي بالتساوي، وتهبط تلقائياً بعد انتهاء الوقت المحدد.</p>
      
      <h2 className="text-lg font-black text-primary-deep mt-8 mb-4">2. الري الذكي بالتنقيط للشجيرات والأشجار</h2>
      <p className="text-justify leading-relaxed mb-6">يوصل نظام الري بالتنقيط خيوط المياه مباشرة لجذور الشجيرة أو النخلة، ما يمنع نمو الحشائش الضارة في الفراغات الجافة، ويوفر حتى 50% من المياه مقارنة بالخراطيم اليدوية المكشوفة.</p>
      
      <h2 className="text-lg font-black text-primary-deep mt-8 mb-4">3. دور المؤقت الإلكتروني الذكي (Timer)</h2>
      <p className="text-justify leading-relaxed">
        يُعد المؤقت (مثل هانتر أو رين بيرد الأمريكي) العقل المدبر للنظام؛ حيث يبرمج الري ليعمل تلقائياً في الساعات الباردة الأولى من الصباح، ليمهد للتربة امتصاص رطوبتها بالكامل قبل صعود درجات الحرارة.
      </p>
    `,
    image: '/images/blog-irrigation.jpg',
    date: '2026-07-15',
    readTime: '7 دقائق',
    category: 'الري الذكي',
    author: 'مهندسو البيت الأخضر'
  }
};

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const article = articlesData[slug];

  if (!article) {
    notFound();
  }

  const relatedArticles = Object.entries(articlesData)
    .filter(([key]) => key !== slug)
    .slice(0, 2);

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">
      
      {/* Article Header Banner */}
      <section className="relative bg-primary-deep text-warm-white py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover opacity-20 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full text-right space-y-4">
          <nav className="text-xs text-warm-white/80 flex items-center gap-2 font-bold mb-2">
            <Link href="/" className="hover:text-white">الرئيسية</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white">المدونة</Link>
            <span>/</span>
            <span className="text-white">{article.title}</span>
          </nav>
          <span className="bg-botanical/20 text-fresh-green px-3 py-1 rounded-full text-xs font-bold border border-botanical/20 w-fit block">
            {article.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-white leading-tight">{article.title}</h1>
          
          <div className="flex items-center gap-4 text-xs text-warm-white/80 font-semibold">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{new Date(article.date).toLocaleDateString('ar-SA')}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>وقت القراءة: {article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-white py-16 md:py-20 text-right">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Author info */}
          <div className="flex items-center gap-3 pb-6 border-b border-charcoal/5 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary-deep text-warm-white flex items-center justify-center font-bold">
              G
            </div>
            <div>
              <div className="text-xs font-black text-primary-deep">{article.author}</div>
              <div className="text-[10px] text-muted-grey">مهندسو ومستشارو البيت الأخضر بالرياض</div>
            </div>
          </div>

          {/* HTML Render */}
          <article className="prose prose-slate prose-sm max-w-none text-charcoal/90">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </article>

          {/* Sharing widget placeholder */}
          <div className="mt-12 pt-6 border-t border-charcoal/5 flex items-center justify-between gap-4 text-xs text-muted-grey font-bold">
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-botanical" />
              <span>رابط المقال آمن وموثق</span>
            </div>
            <Link
              href="/blog"
              className="text-primary-deep hover:text-botanical transition-colors"
            >
              العودة لقائمة المقالات
            </Link>
          </div>

        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-warm-white py-16 border-t border-charcoal/5">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-base font-black text-primary-deep text-right border-r-4 border-botanical pr-3">مقالات وتوجيهات أخرى ذات صلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map(([key, rel]) => (
              <div key={key} className="bg-white border border-charcoal/5 rounded-3xl overflow-hidden hover:shadow-card transition-all duration-300 flex flex-col justify-between h-full p-6 text-right">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-botanical tracking-widest block uppercase">{rel.category}</span>
                  <h3 className="text-sm font-black text-primary-deep leading-snug">{rel.title}</h3>
                </div>
                <Link
                  href={`/blog/${key}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary-deep hover:text-botanical pt-4 transition-colors"
                >
                  <span>اقرأ المزيد</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({
    slug: slug,
  }));
}
