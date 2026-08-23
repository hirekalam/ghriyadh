import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, Phone, MessageCircle, AlertCircle, HelpCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

interface ServiceDetail {
  title: string;
  englishTitle: string;
  image: string;
  intro: string;
  benefits: string[];
  useCases: string[];
  materialsOptions: string[];
  riyadhClimate: string;
  process: { step: number; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  gallery: string[];
}

const servicesData: Record<string, ServiceDetail> = {
  'garden-landscaping-riyadh': {
    title: 'تنسيق حدائق بالرياض',
    englishTitle: 'Garden Landscaping',
    image: '/images/service-garden-design.jpg',
    intro: 'نصمم وننفذ حدائق منزلية متكاملة لفلل وقصور مدينة الرياض. عملنا يركز على تحقيق تناغم بصري بديع بين التصميم الداخلي والخارجي ومراعاة الخصوصية الكاملة للعائلة السعودية.',
    benefits: [
      'استغلال هندسي ذكي لارتدادات الفيلا الضيقة والواسعة.',
      'تكامل بصري مع طراز البناء العصري (Modern / Neo-Classic).',
      'توزيع منسق لمناطق الجلوس والممرات والمسطحات الخضراء.',
      'عناصر مائية (شلالات ونوافير) تمنح المكان حيوية وهدوءاً.'
    ],
    useCases: [
      'الفناء الأمامي والخلفي لفلل الرياض الحديثة.',
      'الارتدادات الجانبية الضيقة وتحويلها لممرات خضراء.',
      'مداخل القصور والمجمعات السكنية الراقية.'
    ],
    materialsOptions: [
      'حجر طبيعي (حجر الرياض، عشوائي، ترافنتين خارجي).',
      'أرضيات عشبية مدمجة مع البلاط المودرن.',
      'إضاءات LED دافئة ومقاومة للمياه والحرارة.'
    ],
    riyadhClimate: 'في حدائق الرياض، نركز على اختيار زهور برية وأشجار ظل مثل الياسمين الهندي والجهنمية متسلقة الجدران لتحمل درجات الحرارة العالية صيفاً، مع تجنب تمديد نباتات تتطلب كميات ضخمة من المياه.',
    process: [
      { step: 1, title: 'الاستشارة والقياس', desc: 'نلتقي بالعميل لمعاينة الحوش وأخذ الأبعاد ودراسة الاحتياج.' },
      { step: 2, title: 'التصميم ثنائي وثلاثي الأبعاد', desc: 'إعداد مخططات هندسية توضح مواقع الجلوس والزرع والممرات والشلال.' },
      { step: 3, title: 'التسوية وتمديد التأسيس', desc: 'أعمال تسوية الأرضيات وتمديد شبكات الري والصرف والكهرباء.' },
      { step: 4, title: 'الزراعة والتسليم', desc: 'تنسيق النباتات ورصف الحجر وتشغيل الشلالات والإنهاء.' }
    ],
    faqs: [
      { q: 'ما هي تكلفة تنسيق حديقة فيلا بالرياض؟', a: 'تختلف التكلفة بحسب مقاسات الفناء وعناصر المياه والبرجولات المطلوبة. نحن نقدم مقايسات دقيقة وشفافة لكل بند.' }
    ],
    gallery: ['/images/project-1.jpg', '/images/project-6.jpg', '/images/hero-garden-path.jpg']
  },
  'rooftop-landscaping': {
    title: 'تنسيق الأسطح والمساحات الخارجية بالنرجس',
    englishTitle: 'Rooftop Spaces',
    image: '/images/statement-design.jpg',
    intro: 'نحول أسطح فلل النرجس والياسمين بالرياض إلى حدائق معلقة وجلسات مودرن. نركز بشكل كامل على فحص العزل المائي وتوزيع الأحمال لضمان استدامة وسلامة السقف.',
    benefits: [
      'توفير متنفس خارجي إضافي هادئ وبخصوصية تامة.',
      'حماية الفيلا من أشعة الشمس المباشرة عبر عزل السطح.',
      'تكامل المظلات والبرجولات مع الأحواض الزراعية.',
      'إطلالات مسائية ساحرة لسطح منزلك.'
    ],
    useCases: [
      'أسطح الفلل السكنية الحديثة بالنرجس والياسمين والملقا.',
      'شرفات الشقق الكبيرة (البنتهاوس).',
      'جلسات الروف الخاصة بالمكاتب والشركات.'
    ],
    materialsOptions: [
      'عزل مائي وحراري متعدد الطبقات ممتاز الجودة.',
      'أحواض فيبر جلاس خفيفة الوزن ومخصصة للتصريف.',
      'أرضيات خشبية معالجة (WPC) أو بورسلين خارجي.'
    ],
    riyadhClimate: 'يواجه سطح المنزل حرارة الشمس المباشرة طوال النهار في الرياض، لذلك نركز على زراعة مغطيات تربة صحراوية وأشجار مصغرة تتحمل الجفاف والرياح الشديدة، مع استخدام مظلات مظللة بالكامل.',
    process: [
      { step: 1, title: 'المعاينة وفحص العزل', desc: 'نبدأ بالتأكد من فحص العزل المائي واختبار نقاط صرف المياه الحالية.' },
      { step: 2, title: 'مخطط توزيع الأحمال', desc: 'تصميم الأحواض والجلسات والبرجولة في زوايا تدعم الجدران الحاملة.' },
      { step: 3, title: 'العزل والتركيب', desc: 'وضع عزل إضافي وتثبيت الأرضيات والممرات والأحواض المجهزة.' },
      { step: 4, title: 'تشغيل الري والتشطيب', desc: 'تمديد ري بالتنقيط ذكي وتنسيق الإضاءة وتجهيز الجلسة.' }
    ],
    faqs: [
      { q: 'هل يسبب تنسيق السطح تسريب مياه للفيلا؟', a: 'لا، لأننا نختبر عزل السطح جيداً قبل وضع أي حجر أو تربة، ونستخدم أحواضاً زراعية مستقلة معزولة تماماً لا تلامس أرضية السطح مباشرة.' }
    ],
    gallery: ['/images/project-4.jpg', '/images/project-5.jpg', '/images/statement-design.jpg']
  },
  'artificial-grass': {
    title: 'توريد وتركيب ثيل صناعي بالرياض',
    englishTitle: 'Artificial Grass',
    image: '/images/service-artificial-grass.jpg',
    intro: 'نوفر عشب صناعي عالي الكثافة (سماكة 40 و50 ملم) ومقاوم للأشعة فوق البنفسجية ليبقى لونه زاهياً طوال العام دون الحاجة للري أو التسميد.',
    benefits: [
      'مظهر خضري دائم دون استهلاك فواتير المياه.',
      'خيوط ناعمة وآمنة للأطفال والحيوانات الأليفة.',
      'سهل الصيانة والتنظيف والتصريف المائي.',
      'عمر افتراضي طويل مقاوم لشمس الرياض الحارقة.'
    ],
    useCases: [
      'المسطحات المحيطة بالمسابح والممرات الخارجية.',
      'مساحات لعب الأطفال وارتدادات الفلل السكنية.',
      'تزيين جدران المداخل والمجالس الخارجية.'
    ],
    materialsOptions: [
      'ثيل صناعي كثافة عالية (سماكة 40 ملم - 50 ملم).',
      'غراء تركيب مخصص خارجي مقاوم للحرارة والرطوبة.',
      'طبقة رمل وخرسانة ناعمة للتجهيز والتسوية.'
    ],
    riyadhClimate: 'نستخدم ثيلاً صناعياً تم اختباره لتحمل درجات الحرارة فوق 50 درجة مئوية، ومزود بفتحات تصريف لمنع تجمع المياه خلال موسم الأمطار القليلة والمكثفة بالرياض.',
    process: [
      { step: 1, title: 'إعداد وتسوية الأرض', desc: 'إزالة الصخور والأعشاب، ودك التربة ووضع طبقة بحص ناعم للتسوية.' },
      { step: 2, title: 'وضع الفواصل والغراء', desc: 'فرد لفائف الثيل وتنسيق اتجاه الشعيرات ثم وضع شريط الربط والغراء.' },
      { step: 3, title: 'التثبيت النهائي', desc: 'قص الحواف بدقة بالغة وتثبيت الثيل بالمسامير الطويلة في الزوايا.' },
      { step: 4, title: 'التمشيط وإضافة الرمل', desc: 'تمشيط العشب ورفع الشعيرات لتبدو طبيعية تماماً.' }
    ],
    faqs: [
      { q: 'ما هو عمر الثيل الصناعي بالرياض؟', a: 'يعيش الثيل الصناعي عالي الجودة لدينا لسنوات طويلة مع الحفاظ على لونه ونعومته بفعل حماية الأشعة فوق البنفسجية.' }
    ],
    gallery: ['/images/project-2.jpg', '/images/service-artificial-grass.jpg', '/images/project-4.jpg']
  },
  'natural-grass': {
    title: 'تركيب ثيل طبيعي بلدي وهولندي بالرياض',
    englishTitle: 'Natural Grass',
    image: '/images/service-natural-grass.jpg',
    intro: 'نورّد ونزرع أفضل أنواع الثيل الطبيعي (C2000 الأمريكي، والبلدي، والهولندي) الذي يمنح حديقة فيلتك نضارة ورطوبة طبيعية ويخفض درجات حرارة الحوش بشكل فعال.',
    benefits: [
      'خفض ملموس لدرجات حرارة الهواء المحيط بالفيلا.',
      'ملمس طبيعي منعش ونقاء للأوكسجين في المكان.',
      'منظر طبيعي رائع لا يضاهى يتغير مع المواسم.',
      'قدرة عالية على التجدد والنمو المستمر.'
    ],
    useCases: [
      'الحدائق الرئيسية الكبيرة وأفنية الفلل الواسعة.',
      'مسطحات استراحة المجالس الخارجية بالرياض.',
      'ممرات المداخل المشمسة بالكامل.'
    ],
    materialsOptions: [
      'ثيل طبيعي رولات (C2000 ممتاز).',
      'خلطة تربة زراعية مخصبة (رمل أحمر + بيتموس معقم).',
      'أسمدة عضوية وخافضات ملوحة للتربة.'
    ],
    riyadhClimate: 'يحتاج الثيل الطبيعي بالرياض إلى ري دوري منظم، لذلك نصمم له تمديدات ري رشاشات أوتوماتيكية مخفية لضمان وصول رطوبة متساوية دون هدر للمياه.',
    process: [
      { step: 1, title: 'تجهيز وحرث التربة', desc: 'حرث الأرض وإزالة الأحجار وخلط التربة بالسماد العضوي والبيتموس.' },
      { step: 2, title: 'تسوية المنسوب ودك التربة', desc: 'تسوية الأرضية لمنع تجمع برك المياه ودكها بمكبس خفيف.' },
      { step: 3, title: 'فرد رولات الثيل', desc: 'تركيب رولات الثيل بتداخل هندسي دقيق لمنع الفراغات.' },
      { step: 4, title: 'الري الغزير والدك', desc: 'ري العشب بغزارة ودكه لضمان تماسك الجذور مع التربة الجديدة.' }
    ],
    faqs: [
      { q: 'كم مرة يجب ري الثيل الطبيعي بالرياض؟', a: 'يُفضل ريه مرتين يومياً صيفاً (قبل شروق الشمس وبعد غروبها) ومرة واحدة شتاءً لتقليل استهلاك المياه والحفاظ على خضرته.' }
    ],
    gallery: ['/images/service-natural-grass.jpg', '/images/project-1.jpg', '/images/project-6.jpg']
  },
  'waterfalls-fountains': {
    title: 'تركيب شلالات ونوافير بالرياض',
    englishTitle: 'Waterfalls & Fountains',
    image: '/images/project-3.jpg',
    intro: 'نصمم وننفذ شلالات جدارية ونوافير مائية عصرية تضفي هدوءاً وجواً طبيعياً ساحراً على الفناء. نعتمد على مضخات موفرة للطاقة ومخفية بالكامل مع إضاءات LED جذابة.',
    benefits: [
      'تأثير صوتي مهدئ يقلل من ضوضاء الشوارع بالرياض.',
      'منظر بصري فاخر يبرز فخامة الفراغ الخارجي للفيلا.',
      'ترطيب لطيف لدرجات الحرارة القريبة من الجلسات.',
      'خيارات تصميم وتوزيع مرنة تناسب الممرات الضيقة.'
    ],
    useCases: [
      'الجدار الخلفي أو الارتداد الجانبي للفيلا.',
      'مجالس خارجية واستراحات الفناء الرئيسي.',
      'أسفل السلم الخارجي أو داخل المداخل.'
    ],
    materialsOptions: [
      'حجارة وشلال صخور طبيعية، بورسلان خارجي، أو إسمنت مصبوب.',
      'مضخات غاطسة ممتازة الجودة (إيطالية أو ألمانية صامتة).',
      'أنظمة إضاءة ليلية ملونة مقاومة للمياه وعوامل الرطوبة.'
    ],
    riyadhClimate: 'نظراً لسرعة تبخر المياه في جو الرياض، نصمم الشلالات بنظام خزان مياه مغلق ومفلتر يعيد تدوير المياه تلقائياً لتقليل الهدر والتعبئة المستمرة.',
    process: [
      { step: 1, title: 'تصميم هيكل الشلال', desc: 'رسم جدارية الشلال وتحديد اتجاه سقوط المياه وارتفاع المصب.' },
      { step: 2, title: 'التأسيس والعزل المائي', desc: 'بناء الجدار وتطبيق طبقات العزل لضمان عدم تسريب المياه للفيلا.' },
      { step: 3, title: 'تمديد السباكة والمضخات', desc: 'تثبيت مصب المياه وتوصيل الأنابيب والمضخة وفلتر التنقية.' },
      { step: 4, title: 'التشطيب والإضاءة', desc: 'رصف الحجر وتوزيع كشافات الإضاءة المغمورة وتشغيل المياه.' }
    ],
    faqs: [
      { q: 'هل تحتاج الشلالات المنزلية لصيانة صعبة؟', a: 'لا، فقط تتطلب تنظيف حوض المياه وفحص الفلتر كل بضعة أشهر لضمان عمل المضخة بكفاءة عالية ومنع ترسب الأملاح.' }
    ],
    gallery: ['/images/project-3.jpg', '/images/project-1.jpg', '/images/statement-design.jpg']
  },
  'automatic-irrigation': {
    title: 'تركيب شبكة ري أوتوماتيكية بالرياض',
    englishTitle: 'Automatic Irrigation',
    image: '/images/service-irrigation.jpg',
    intro: 'نصمم شبكات ري ذكية مدفونة تحت الأرض تعتمد على تايمر إلكتروني لبرمجة وتوزيع ري الثيل والنباتات في الأوقات الباردة، مما يوفر الوقت ويمنع إهدار المياه.',
    benefits: [
      'تقليص استهلاك المياه وفاتورة الري حتى 40%.',
      'ري تلقائي ومنظم دون الحاجة لوجود عامل البستنة.',
      'توزيع متساوٍ ومدروس للمياه للمحافظة على صحة الجذور.',
      'أنابيب وتمديدات مدفونة تحافظ على الشكل الجمالي للحوش.'
    ],
    useCases: [
      'حدائق الفلل والقصور السكنية الكبيرة والصغيرة.',
      'مزارع النخيل وممرات الزهور الموزعة بالفيلا.',
      'الحدائق المعلقة على أسطح الفلل بالنرجس.'
    ],
    materialsOptions: [
      'أنابيب بولي إيثيلين خارجي ممتاز التحمل للضغط الحراري.',
      'مؤقت ري ذكي (Hunter / Rain Bird أمريكي).',
      'رشاشات رذاذ مدفونة ونقاط ري بالتنقيط ذاتية التنظيف.'
    ],
    riyadhClimate: 'الري التلقائي هو ركيزة حدائق الرياض الأساسية؛ فبرمجته للعمل قبل شروق الشمس يمنح التربة فرصة امتصاص المياه بالكامل ويمنع تبخرها السريع بفعل شمس الظهيرة الحارقة.',
    process: [
      { step: 1, title: 'تخطيط دوائر الري', desc: 'تقسيم الحديقة إلى زونات (مناطق للثيل ومناطق للأشجار والزهور).' },
      { step: 2, title: 'حفر التمديدات', desc: 'حفر مسارات ضيقة مدفونة لتمرير أنابيب المياه وتجنب إتلاف الممرات.' },
      { step: 3, title: 'توصيل المحابس والتايمر', desc: 'تركيب المحابس المغناطيسية وربطها باللوحة الإلكترونية الرئيسية.' },
      { step: 4, title: 'فحص ضغط وتوزيع الرشاشات', desc: 'تشغيل النظام وضبط زوايا الرشاشات لضمان تغطية كاملة بدون جفاف.' }
    ],
    faqs: [
      { q: 'هل يمكن تشغيل نظام الري من الجوال؟', a: 'نعم، نوفر خيارات تركيب لوحات تحكم ذكية تدعم الربط بشبكة الواي فاي والتحكم الكامل بمواعيد الري من الجوال.' }
    ],
    gallery: ['/images/service-irrigation.jpg', '/images/project-6.jpg', '/images/blog-irrigation.jpg']
  },
  'outdoor-seating': {
    title: 'تصميم وتنفيذ جلسات خارجية بالرياض',
    englishTitle: 'Outdoor Seating',
    image: '/images/project-5.jpg',
    intro: 'نصمم جلسات حدائق خارجية راقية تناسب الفلل السكنية بالرياض، ونستخدم خامات مقاومة للشمس المباشرة وعوامل الأتربة لتوفير زاوية استرخاء عائلية هادئة وبخصوصية كاملة.',
    benefits: [
      'توسيع مساحة المعيشة والاستمتاع بالأجواء الخارجية الهادئة.',
      'تصميم يراعي ستر العائلة والخصوصية عن الجيران بالرياض.',
      'خامات ممتازة مقاومة لتراكم الأتربة والبهتان الحراري.',
      'تكامل رائع مع الإضاءة الليلية والشلالات الجدارية.'
    ],
    useCases: [
      'الارتداد الخلفي للفيلا لتأمين الخصوصية.',
      'المساحات الرئيسية بحوش الفيلا وجانب المسابح.',
      'أسطح الفلل والروف كمنطقة جلوس مسائية.'
    ],
    materialsOptions: [
      'أرضيات خشب معالج مقاوم للتسوس (WPC) أو بورسلين خارجي.',
      'مقاعد مبنية خرسانية مكسوة بالوسائد الخارجية الفاخرة.',
      'طاولات حديدية معالجة وألياف مقاومة للماء والرطوبة.'
    ],
    riyadhClimate: 'في جلسات الرياض الخارجية، نعتمد على تركيب مظلات وبرجولات تمنح ظلاً كاملاً خلال النهار، مع توفير مخارج لتثبيت مراوح رذاذ لترطيب الهواء صيفاً.',
    process: [
      { step: 1, title: 'دراسة زوايا الخصوصية والظل', desc: 'تحديد أفضل ركن للجلوس بعيداً عن كشف النوافذ المجاورة وشمس العصر.' },
      { step: 2, title: 'تأسيس الأرضية والصرف', desc: 'صب الخرسانة التأسيسية ورصف البورسلان الخارجي أو الخشب المعالج.' },
      { step: 3, title: 'تركيب البرجولات والمقاعد', desc: 'تشييد الهيكل العلوي للبرجولة وبناء وتجهيز المقاعد والمساند.' },
      { step: 4, title: 'الديكور والإضاءة الليلية', desc: 'توزيع وسائد الجلوس وتجهيز الإضاءات وفتحات التدفئة للشتاء.' }
    ],
    faqs: [
      { q: 'هل تتلف وسائد الجلسات بسبب أتربة وشمس الرياض؟', a: 'نحن نستخدم أقمشة خارجية فاخرة ومعالجة لمقاومة تراكم الغبار والبهتان بفعل الأشعة فوق البنفسجية، ويسهل فكها وغسلها.' }
    ],
    gallery: ['/images/project-5.jpg', '/images/statement-design.jpg', '/images/project-4.jpg']
  },
  'pergolas-shades': {
    title: 'تركيب برجولات ومظلات حدائق بالرياض',
    englishTitle: 'Pergolas & Shades',
    image: '/images/service-shade-structures.jpg',
    intro: 'نصمم ونشيّد برجولات ومظلات حدائق عصرية (خشبية، معدنية، وقماشية) توفر حماية ممتازة من شمس الرياض المباشرة وتضفي طابعاً هندسياً فخماً للحوش.',
    benefits: [
      'توفير ظلال بنسبة تصل إلى 100% لحماية الجلسات الخارجية.',
      'هياكل معدنية وخشبية معالجة ضد الصدأ والتسوس والتآكل.',
      'تصاميم مودرن مدمجة مع شرائح اللكسان الشفاف أو القماش.',
      'تأطير معماري رائع يرفع من قيمة وتنسيق الفناء.'
    ],
    useCases: [
      'تغطية جلسات الحدائق الرئيسية وروف الأسطح بالرياض.',
      'مظلات مواقف السيارات ومداخل الفلل الخاصة.',
      'برجولات تزيين الممرات الجانبية ومحيط الشلال.'
    ],
    materialsOptions: [
      'أخشاب سويدية معالجة وخشب التك الفاخر.',
      'حديد مدهون حرارياً بمقاومة الصدأ والعوامل الخارجية (WPC).',
      'أقمشة بولي إيثيلين عالية الكثافة (HDPE) أو PVC المقاومة للحرائق.'
    ],
    riyadhClimate: 'نهتم بتركيب مظلات ذات زوايا ميلان خفيفة وتثبيت قوي لمقاومة الرياح والعواصف الترابية ومقاومة درجات الحرارة العالية دون تشقق الأخشاب أو تآكل الدهان.',
    process: [
      { step: 1, title: 'أخذ القياسات والتصميم', desc: 'دراسة مساحة التظليل وتحديد ارتفاع وسماكة أعمدة الدعم.' },
      { step: 2, title: 'تجهيز الهياكل والقص', desc: 'تفصيل الحديد والدهان الحراري أو معالجة الأخشاب بالورش.' },
      { step: 3, title: 'التركيب الميداني ودك القواعد', desc: 'تثبيت قواعد الحديد بالمسامير الجنزيرية واللحام ورفع الأعمدة.' },
      { step: 4, title: 'تركيب التغطية العلوية', desc: 'شد القماش المقاوم للحرارة أو تركيب اللكسان أو شرائح الخشب.' }
    ],
    faqs: [
      { q: 'ما الفرق بين البرجولات الخشبية والمعدنية؟', a: 'البرجولات الخشبية تعطي لمسة طبيعية دافئة وتتطلب صيانة سنوية للدهان، بينما البرجولات الحديدية المدهونة حرارياً تمنح طابعاً مودرن فخماً وتدوم طويلاً بلا صيانة.' }
    ],
    gallery: ['/images/service-shade-structures.jpg', '/images/project-5.jpg', '/images/project-4.jpg']
  },
  'planter-boxes': {
    title: 'تصميم وتركيب أحواض زراعية بالرياض',
    englishTitle: 'Planter Boxes',
    image: '/images/project-1.jpg',
    intro: 'نصمم ونركب أحواضاً زراعية خارجية مودرن لتنظيم نمو الشجيرات والزهور وإبراز التقسيم المعماري للحديقة بطريقة تعزل التربة وتمنع تسرب مياه الري.',
    benefits: [
      'حماية جدران وأرضيات الفيلا من رطوبة التربة الزراعية.',
      'تنظيم زراعة النباتات ومنع انتشار الجذور بشكل عشوائي.',
      'إضفاء بعد معماري وحواف بصرية رائعة للممرات والحدود.',
      'سهولة التحكم في تصريف المياه وتغيير التربة.'
    ],
    useCases: [
      'جدران الارتدادات الجانبية لفلل الرياض.',
      'زوايا أسطح المنازل والروف لتقليل وزن الحمولة الأرضية.',
      'حواف المجالس الخارجية ومناطق الجلوس.'
    ],
    materialsOptions: [
      'أحواض فيبر جلاس خفيفة الوزن ومطلية بمقاومة الشمس.',
      'أحواض أسمنتية مصبوبة مكسوة بالبورسلان أو الحجر الطبيعي.',
      'عزل داخلي بالايبوكسي وفلاتر تصريف المياه الزائدة.'
    ],
    riyadhClimate: 'يساعد حجم التربة داخل الأحواض على حفظ رطوبة الجذور بشكل أفضل في طقس الرياض الصحراوي الجاف مقارنة بالزراعة المكشوفة، مما يقلل من جفاف النباتات السريع.',
    process: [
      { step: 1, title: 'تحديد الأبعاد ومستوى الارتفاع', desc: 'اختيار مقاس الحوض المناسب لحجم جذور الشجيرات والزهور المطلوبة.' },
      { step: 2, title: 'البناء والعزل والتبطين', desc: 'تجهيز هيكل الحوض وتبطينه بمادة عازلة لمنع التسريب الخارجي.' },
      { step: 3, title: 'وضع فتحات ونقاط الصرف', desc: 'تثبيت فتحات سفلية مع فلاتر حصوية للسماح بخروج المياه الزائدة فقط.' },
      { step: 4, title: 'التعبئة بالتربة والتنسيق', desc: 'تعبئة الحوض بالخلطة الزراعية المخصبة وزراعة وتجميل النباتات.' }
    ],
    faqs: [
      { q: 'هل يمكن تحريك أحواض الفيبر جلاس بسهولة؟', a: 'نعم، أحواض الفيبر جلاس ممتازة ومقاومة للحرارة وخفيفة الوزن، مما يسهل نقلها وتغيير موضعها مقارنة بالأحواض الأسمنتية الثابتة.' }
    ],
    gallery: ['/images/project-1.jpg', '/images/service-garden-design.jpg', '/images/project-6.jpg']
  },
  'trees-palms-flowers': {
    title: 'زراعة الأشجار والنخيل والزهور بالرياض',
    englishTitle: 'Trees, Palms & Flowers',
    image: '/images/project-6.jpg',
    intro: 'نختار ونزرع أفضل أنواع الأشجار الظليلة والنخيل العربي الفاخر والزهور الموسمية التي تزدهر وتتحمل طبيعة المياه وملوحة التربة ومناخ الرياض الجاف.',
    benefits: [
      'إنشاء ظلال طبيعية في الحديقة تلطف الهواء الساخن صيفاً.',
      'توفير تنوع بصري رائع يضم النخيل والزهور الدائمة.',
      'نباتات منتقاة بعناية لتعيش لسنوات بلا ذبول سريع.',
      'تحسين جودة الأوكسجين والتنفس في محيط فيلتك بالرياض.'
    ],
    useCases: [
      'محيط أسوار الفيلا والحدائق الخلفية للتغطية البصرية.',
      'مداخل الفلل والقصور الرئيسية بالرياض.',
      'زوايا الجلسات الخارجية لكسر حدة الهياكل الخشبية.'
    ],
    materialsOptions: [
      'نخيل بلدي ونخيل واشنطونيا ممتاز الطول والنظافة.',
      'أشجار ظل فاخرة (السدر، الأكاسيا، البونسيانا، الزيتون).',
      'زهور موسمية ودائمة (الجهنمية، الياسمين الهندي، الورود الصحراوية).'
    ],
    riyadhClimate: 'نتفادى زراعة النباتات الحساسة للكلور وملوحة المياه. ونركز على النباتات التي تتكيف مع الشمس المباشرة وتتطلب رياً معتدلاً يتوافق مع ترشيد الاستهلاك بالرياض.',
    process: [
      { step: 1, title: 'دراسة زوايا الشمس والظل', desc: 'تحديد أماكن زراعة أشجار الظل لحماية الجلسات والزهور الحساسة.' },
      { step: 2, title: 'حفر الجور والتهيئة الزراعية', desc: 'حفر حفر زراعية واسعة وتدعيمها بخليط رمل أحمر وبيتموس وسماد معقم.' },
      { step: 3, title: 'غرس النخيل والأشجار', desc: 'إنزال الأشجار والنخيل وتدعيم القواعد بالأخشاب لضمان الثبات.' },
      { step: 4, title: 'التوصيل بنظام الري', desc: 'تمديد ري بالتنقيط حول جذور الأشجار والنخيل لضمان الترطيب.' }
    ],
    faqs: [
      { q: 'ما هي الزهور التي تعيش طوال العام بالرياض؟', a: 'الجهنمية والياسمين الهندي والورود الصحراوية هي خيارات ممتازة تزدهر وتتحمل درجات الحرارة العالية طوال فصل الصيف.' }
    ],
    gallery: ['/images/project-6.jpg', '/images/service-natural-grass.jpg', '/images/hero-garden-path.jpg']
  },
  'under-stair-landscaping': {
    title: 'تنسيق حدائق تحت الدرج الخارجي بالرياض',
    englishTitle: 'Under-Stair Landscaping',
    image: '/images/project-3.jpg',
    intro: 'نستغل المساحات الفارغة والميتة أسفل السلالم الخارجية للفلل ونحولها لقطع جمالية منسقة تضم النوافير وحصى الديكور والإضاءات الهادئة.',
    benefits: [
      'تحويل مساحة غير مستغلة إلى زاوية جمالية ملفتة.',
      'خيارات تصميم عصرية تضم النوافير الجدارية وحجر الديكور.',
      'إضاءة مخفية مميزة تعزز أبعاد الفيلا والدرج ليلاً.',
      'تكامل رائع مع النباتات الداخلية والصبار المودرن.'
    ],
    useCases: [
      'المساحة أسفل السلم المؤدي لسطح الفيلا أو القبو.',
      'الزوايا الضيقة عند المداخل ومجالس الرجال الخارجية.',
      'الارتدادات الجانبية الميتة بالكامل.'
    ],
    materialsOptions: [
      'حصى طبيعي ناعم وملون (أبيض كربونات، أسود بركاني).',
      'نوافير مائية دائرية أو مصبات جدارية صغيرة صامتة.',
      'أحواض فيبر جلاس مدمجة مع إضاءات سبوت لايت دافئة.'
    ],
    riyadhClimate: 'المناطق أسفل السلالم تكون غالباً مظللة وبعيدة عن شمس الرياض الحارقة، مما يجعلها بيئة ممتازة لنمو نباتات الظل والصبار التي لا تتطلب أشعة شمس مباشرة.',
    process: [
      { step: 1, title: 'تنظيف وتجهيز الزاوية', desc: 'إزالة الغبار والأتربة وتعديل شبكة تصريف المياه أسفل الدرج.' },
      { step: 2, title: 'تأسيس الكهرباء والإضاءة', desc: 'تمديد نقاط الكهرباء لتغذية سبوت لايت ومضخة النافورة.' },
      { step: 3, title: 'رسم وتوزيع الحجر والأحواض', desc: 'وضع عازل للأرضية وفرد الحصى الأبيض والأسود وتنسيق الأحواض.' },
      { step: 4, title: 'التشغيل والتثبيت النهائي', desc: 'تثبيت النباتات والنافورة وفحص زوايا تسليط الإضاءة.' }
    ],
    faqs: [
      { q: 'هل النافورة تحت الدرج تسبب رطوبة؟', a: 'لا، نستخدم نوافير صغيرة مغلقة الدورة لا تسبب رذاذاً متناثراً، مع عزل كامل للأرضية لحماية جدران السلم من الرطوبة.' }
    ],
    gallery: ['/images/project-3.jpg', '/images/service-garden-design.jpg', '/images/project-1.jpg']
  },
  'garden-maintenance': {
    title: 'صيانة حدائق الفلل بالرياض',
    englishTitle: 'Garden Maintenance',
    image: '/images/service-maintenance.jpg',
    intro: 'نقدم برامج صيانة مرنة وشاملة للعناية بالمسطحات الخضراء بالرياض، تشمل التسميد الدوري، تقليم الزهور والنخيل، مكافحة الحشرات، وفحص مضخات الري والشلالات.',
    benefits: [
      'المحافظة على خضرة ونضارة الثيل الطبيعي طوال مواسم العام.',
      'الوقاية الفورية من الآفات والحشرات الضارة بنباتات الرياض.',
      'ضمان عمل شبكات الري الأوتوماتيكية دون انسداد وتلف المواسير.',
      'توفير التكاليف الباهظة لإعادة تنسيق الحديقة التالفة.'
    ],
    useCases: [
      'حدائق الفلل والقصور السكنية بعد التنفيذ الكامل.',
      'مسطحات الأسطح والحدائق المعلقة.',
      'استراحات ومجالس الفناء الخارجي.'
    ],
    materialsOptions: [
      'أسمدة كيماوية وعضوية معالجة خالية من الأعشاب الضارة.',
      'مبيدات زراعية صديقة للبيئة وآمنة للحيوانات.',
      'أدوات قص وتقليم فنية احترافية.'
    ],
    riyadhClimate: 'صيانة الصيف بالرياض تختلف كلياً عن الشتاء؛ فنحن نركز في الصيف على ري المياه في الأوقات الباردة وفحص فلاتر الشلال وتغطية النباتات الحساسة لتقليل أثر الحر الشديد.',
    process: [
      { step: 1, title: 'تقييم الحديقة وجدولتها', desc: 'فحص حالة النباتات والري وتحديد فترات الزيارة المناسبة.' },
      { step: 2, title: 'أعمال القص والتقليم', desc: 'قص الثيل الطبيعي بالتساوي وتنسيق الشجيرات وإزالة الأوراق اليابسة.' },
      { step: 3, title: 'التسميد ومكافحة الآفات', desc: 'تغذية التربة بالمغذيات الملائمة ورش مبيدات وقائية ضد الحشرات.' },
      { step: 4, title: 'فحص شبكات الري ومضخات الشلال', desc: 'التأكد من خروج المياه وسلاسة فلاتر المياه وتنظيف أحواض النوافير.' }
    ],
    faqs: [
      { q: 'ما هي فترات زيارات الصيانة المفضلة بالرياض؟', a: 'يُفضل جدولتها بمعدل زيارتين إلى 4 زيارات شهرياً صيفاً للحفاظ على ترطيب التربة وقص العشب، وزيارة واحدة إلى زيارتين شتاءً.' }
    ],
    gallery: ['/images/service-maintenance.jpg', '/images/project-6.jpg', '/images/project-2.jpg']
  },
  'football-fields': {
    title: 'تصميم وإنشاء ملاعب كرة قدم بالرياض',
    englishTitle: 'Football Fields',
    image: '/images/project-2.jpg',
    intro: 'نصمم وننشئ ملاعب كرة قدم سكنية فاخرة في أفنية القصور والفلل الكبيرة بالرياض، ونركب ثيلاً رياضياً صناعياً عالي الكثافة ومقاوماً للاحتكاك ومصمماً للاستخدام المكثف.',
    benefits: [
      'توفير مساحة لعب وتدريب رياضية آمنة ومجهزة تماماً لأبنائك.',
      'ثيل رياضي ذو سماكة ممتازة حاصل على شهادات الجودة والتحمل.',
      'تخطيط الأرضيات ووضع المصدات والشباك بدقة متكاملة.',
      'صرف مائي سريع وممتاز يمنع تشكل الطين أو برك المياه.'
    ],
    useCases: [
      'أفنية الفلل والقصور السكنية الكبيرة المفتوحة.',
      'الاستراحات الخاصة والمجالس الخارجية الفسيحة بالرياض.',
      'ملاعب المدارس والمجمعات السكنية الخاصة (الكمباوند).'
    ],
    materialsOptions: [
      'عشب صناعي رياضي تخصصي (سماكة 50 ملم ثنائي اللون).',
      'حبيبات المطاط والرمل السيليكا لتجهيز المسطح لامتصاص الصدمات.',
      'أعمدة حديد معالجة وشباك حماية بارتفاعات متعددة.'
    ],
    riyadhClimate: 'يتم تسوية الأرضية بوضع طبقة خرسانية مدكوكة لمنع هبوط التربة بفعل وزن اللاعبين وتغير المنسوب بفعل الأتربة وسرعة الرياح الصحراوية بالرياض.',
    process: [
      { step: 1, title: 'حفر وتسوية دك الأرض', desc: 'حفر المساحة المخصصة وإزالة الطبقة الزراعية ودك التربة جيداً.' },
      { step: 2, title: 'تمديد أنابيب الصرف وقواعد الأعمدة', desc: 'حفر قنوات لتصريف مياه الأمطار وتثبيت القواعد الخرسانية لأعمدة المرمى والشبك.' },
      { step: 3, title: 'فرد العشب وتخطيط الملعب', desc: 'تركيب رولات الثيل الرياضي ووضع الخطوط البيضاء التخطيطية بعناية.' },
      { step: 4, title: 'توزيع رمل السيليكا والمطاط', desc: 'توزيع حبيبات الرمل والمطاط وتمشيط العشب ليكون جاهزاً للعب الآمن.' }
    ],
    faqs: [
      { q: 'هل يتطلب ملعب العشب الصناعي صيانة دورية؟', a: 'يحتاج فقط لتمشيط دوري كل بضعة أشهر لضمان ثبات حبيبات المطاط ورفع شعيرات العشب لتبقى مرنة ومريحة أثناء الجري.' }
    ],
    gallery: ['/images/project-2.jpg', '/images/service-artificial-grass.jpg', '/images/project-6.jpg']
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  // Related Services Filter
  const relatedSlugs = Object.keys(servicesData)
    .filter((k) => k !== slug)
    .slice(0, 3);

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-white">
      
      {/* 1. HERO BANNERS */}
      <section className="relative bg-primary-deep text-warm-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-20 object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-right space-y-4">
          <nav className="text-xs text-warm-white/60 flex items-center gap-2 font-bold mb-4">
            <Link href="/" className="hover:text-white">الرئيسية</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white">الخدمات</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          
          <span className="text-[10px] font-bold text-fresh-green tracking-widest uppercase block font-latin border-r-2 border-botanical pr-3">
            {service.englishTitle}
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white">{service.title}</h1>
          <p className="text-sm md:text-base text-warm-white/70 max-w-2xl leading-relaxed">
            {service.intro}
          </p>
        </div>
      </section>

      {/* 2. OVERVIEW & BENEFITS */}
      <section className="bg-white py-16 md:py-20 border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Block: Form & Contact */}
          <div className="lg:col-span-4 space-y-6 lg:order-last">
            <div className="p-6 bg-warm-white border border-charcoal/5 rounded-3xl space-y-4 text-right">
              <h3 className="text-primary-deep font-black text-base border-r-2 border-botanical pr-3">مواصفات واستشارة</h3>
              <p className="text-xs text-muted-grey leading-relaxed">
                هل ترغب في تطبيق هذه الخدمة بفيليتك بالرياض؟ امِلأ بياناتك وسنرسل مهندساً زراعياً ومصمماً لفحص المساحة وتقديم عرض سعر دقيق مجاناً.
              </p>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-primary-deep text-warm-white py-3 rounded-2xl font-bold text-xs shadow-sm hover:bg-botanical transition-colors"
              >
                <span>طلب معاينة للموقع</span>
              </Link>
            </div>
            
            <div className="p-6 bg-warm-white border border-charcoal/5 rounded-3xl space-y-4 text-right">
              <h3 className="text-primary-deep font-black text-base border-r-2 border-botanical pr-3">اتصال مباشر</h3>
              <div className="flex flex-col gap-2 text-xs font-semibold text-charcoal">
                <a href="tel:0557401773" className="flex items-center gap-2 hover:text-primary-deep">
                  <Phone className="w-4 h-4 text-botanical" />
                  <span className="dir-ltr">0557401773</span>
                </a>
                <a href="https://wa.me/966557401773" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-deep">
                  <MessageCircle className="w-4 h-4 text-botanical" />
                  <span className="dir-ltr">+966557401773</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Block: Content details */}
          <div className="lg:col-span-8 space-y-10 text-right">
            
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-primary-deep">مميزات ومواصفات الخدمة</h2>
              <p className="text-xs md:text-sm text-muted-grey leading-relaxed text-justify">
                نحن ملتزمون بتوفير أفضل خامات اللاندسكيب في الرياض. ندرج تالياً تفاصيل المميزات التي تحصل عليها عند اختيارك للبيت الأخضر لتنفيذ هذا المشروع:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-3 bg-warm-white p-4 rounded-2xl border border-charcoal/5 items-start">
                    <div className="w-5 h-5 rounded-full bg-botanical/10 flex items-center justify-center text-botanical mt-0.5 flex-shrink-0">
                      <Check className="w-3 h-3 text-botanical" />
                    </div>
                    <span className="text-xs text-charcoal/80 font-bold leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitability and Materials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-charcoal/5">
              
              {/* Suitabilities */}
              <div className="space-y-3">
                <h3 className="text-base font-black text-primary-deep">أبرز الاستخدامات</h3>
                <ul className="space-y-2 text-xs text-muted-grey">
                  {service.useCases.map((uc, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-botanical" />
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Options */}
              <div className="space-y-3">
                <h3 className="text-base font-black text-primary-deep">الخامات والخيارات المفضلة</h3>
                <ul className="space-y-2 text-xs text-muted-grey">
                  {service.materialsOptions.map((opt, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" style={{ backgroundColor: 'hsl(var(--accent))' }} />
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Riyadh Climate block */}
            <div className="p-6 bg-primary-deep/5 border border-primary-deep/10 rounded-3xl flex gap-4 items-start border-r-4 border-r-botanical">
              <AlertCircle className="w-6 h-6 text-botanical flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-black text-primary-deep mb-1">الاعتبارات المناخية بالرياض</h3>
                <p className="text-xs text-muted-grey leading-relaxed text-justify">
                  {service.riyadhClimate}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. PROCESS STEPS */}
      <section className="bg-warm-white py-16 md:py-20 border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="text-xl md:text-2xl font-black text-primary-deep">خطوات ومراحل تنفيذ العمل</h2>
            <p className="text-xs text-muted-grey">نسير وفق خطوات فنية واضحة تضمن سلاسة تنفيذ وتجهيز حديقتك بالكامل.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
            {service.process.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-3xl border border-charcoal/5 space-y-3 relative group">
                <span className="text-3xl font-black text-charcoal/10 group-hover:text-botanical/20 transition-colors absolute left-5 top-5">
                  {step.step}
                </span>
                <h3 className="text-sm font-black text-primary-deep mt-4">{step.title}</h3>
                <p className="text-xs text-muted-grey leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WORK GALLERY */}
      <section className="bg-white py-16 md:py-20 border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-10">
          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="text-xl md:text-2xl font-black text-primary-deep">ملهمات وتصاميم بصرية من أعمالنا</h2>
            <p className="text-xs text-muted-grey">أفكار ملموسة وعناصر تصميمية نعتمد عليها في تأسيس هذا المشروع.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {service.gallery.map((img, idx) => (
              <div key={idx} className="aspect-[4/3] rounded-3xl overflow-hidden border border-charcoal/5 shadow-sm bg-warm-white">
                <img
                  src={img}
                  alt={`${service.title} - ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDIVIDUAL FAQ */}
      <section className="bg-warm-white py-16 md:py-20 border-b border-charcoal/5">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-xl md:text-2xl font-black text-primary-deep text-center mb-6">الاستفسارات الشائعة حول الخدمة</h2>
          {service.faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-charcoal/5 text-right space-y-2">
              <h3 className="text-sm font-black text-primary-deep flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-botanical" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-muted-grey leading-relaxed pr-6 text-justify">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. RELATED SERVICES */}
      <section className="bg-white py-16 md:py-20 border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-10">
          <h2 className="text-xl font-black text-primary-deep">شاهد خدمات لاندسكيب أخرى ذات صلة</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {relatedSlugs.map((key) => {
              const rel = servicesData[key];
              return (
                <div key={key} className="bg-warm-white rounded-3xl overflow-hidden border border-charcoal/5 shadow-sm flex flex-col justify-between p-6 text-right">
                  <div className="space-y-2">
                    <span className="text-[9px] font-bold text-botanical tracking-widest block uppercase font-latin">{rel.englishTitle}</span>
                    <h3 className="text-sm font-black text-primary-deep">{rel.title}</h3>
                    <p className="text-xs text-muted-grey line-clamp-2 leading-relaxed">{rel.intro}</p>
                  </div>
                  <Link
                    href={`/services/${key}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary-deep hover:text-botanical transition-colors pt-4"
                  >
                    <span>تفاصيل الخدمة</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CONTACT & CTA SECTION */}
      <section className="bg-warm-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6 text-right">
            <h2 className="text-2xl md:text-3xl font-black text-primary-deep leading-tight">
              ابدأ مشروع {service.title} اليوم
            </h2>
            <p className="text-xs md:text-sm text-muted-grey leading-relaxed text-justify">
              تواصل معنا وسيقوم أحد مستشارينا الفنيين وزوار المواقع بالاتصال بك فوراً لمعاينة موقعك مجاناً وتقديم أنسب التصاميم.
            </p>
            <div className="flex flex-col gap-3 font-bold text-xs text-charcoal">
              <a href="tel:0557401773" className="flex items-center gap-2 hover:text-primary-deep">
                <Phone className="w-4 h-4 text-botanical" />
                <span className="dir-ltr">0557401773</span>
              </a>
              <a href="https://wa.me/966557401773" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-deep">
                <MessageCircle className="w-4 h-4 text-botanical" />
                <span className="dir-ltr">+966557401773</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

    </div>
  );
}

// Generate static params for the 13 services to optimize core web vitals and fast server loading
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}
