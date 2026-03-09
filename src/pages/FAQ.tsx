import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    category: 'الخدمات',
    questions: [
      {
        q: 'ما هي الخدمات التي تقدمونها؟',
        a: 'نقدم مجموعة شاملة من خدمات تنسيق الحدائق تشمل: تصميم الحدائق، تركيب العشب الصناعي والطبيعي، تركيب المظلات والسواتر، أنظمة الري والنوافير، والصيانة الدورية.',
      },
      {
        q: 'هل تقدمون خدمات الصيانة الدورية؟',
        a: 'نعم، نقدم برامج صيانة دورية شاملة تشمل قص العشب، تقليم الأشجار، التسميد، مكافحة الآفات، والري. يمكن اختيار برنامج أسبوعي، شهري، أو حسب الاحتياج.',
      },
      {
        q: 'كم تستغرق عملية تنفيذ المشروع؟',
        a: 'مدة التنفيذ تعتمد على حجم وطبيعة المشروع. عادةً ما تستغرق المشاريع الصغيرة من 3-7 أيام، بينما المشاريع الكبيرة قد تستغرق 2-4 أسابيع. نقدم جدول زمني واضح قبل بدء العمل.',
      },
    ],
  },
  {
    category: 'الأسعار والعروض',
    questions: [
      {
        q: 'كيف يمكنني الحصول على عرض سعر؟',
        a: 'يمكنك الحصول على عرض سعر مجاني من خلال الاتصال بنا على الرقم +966 50 239 4828، أو إرسال رسالة عبر واتساب، أو ملء نموذج الطلب على موقعنا. سنقوم بزيارة الموقع وتقديم عرض سعر مفصل.',
      },
      {
        q: 'هل هناك عروض خاصة للعملاء الجدد؟',
        a: 'نعم! نقدم خصم 10% للعملاء الجدد على أول خدمة. تفضل بزيارة صفحة العروض الخاصة أو تواصل معنا مباشرة للاستفادة من هذا العرض.',
      },
      {
        q: 'ما هي طرق الدفع المتاحة؟',
        a: 'نقبل الدفع نقداً، بالتحويل البنكي، أو عبر الدفع الإلكتروني. للمشاريع الكبيرة، يمكن تقسيم الدفع على دفعات حسب مراحل التنفيذ.',
      },
    ],
  },
  {
    category: 'الضمان والجودة',
    questions: [
      {
        q: 'هل تقدمون ضمان على أعمالكم؟',
        a: 'نعم، نقدم ضمان على جميع أعمالنا. العشب الصناعي يأتي بضمان يصل إلى 10 سنوات، والتركيبات بضمان سنة. نضمن أيضاً جودة النباتات المزروعة لمدة 3 أشهر.',
      },
      {
        q: 'ما هي مصادر النباتات التي تستخدمونها؟',
        a: 'نستخدم نباتات من مصادر موثوقة ومعتمدة. جميع نباتاتنا مؤهلة للمناخ السعودي ومقاومة للحرارة والجفاف. نختار النباتات بعناية لضمان نجاحها في حديقتك.',
      },
      {
        q: 'ماذا يحدث إذا لم أكن راضياً عن العمل؟',
        a: 'رضا العملاء هو أولويتنا الأولى. إذا لم تكن راضياً عن أي جانب من جوانب العمل، يرجى إبلاغنا فوراً وسنعمل على إصلاح المشكلة في أقرب وقت ممكن.',
      },
    ],
  },
  {
    category: 'التواصل والدعم',
    questions: [
      {
        q: 'ما هي ساعات عملكم؟',
        a: 'نعمل من السبت إلى الخميس من الساعة 8 صباحاً حتى 6 مساءً. يمكنك التواصل معنا عبر واتساب في أي وقت وسنرد عليك في أقرب وقت ممكن خلال ساعات العمل.',
      },
      {
        q: 'هل تغطون مناطق خارج الرياض؟',
        a: 'نعم، نقدم خدماتنا في الرياض والمناطق المحيطة بها. للمشاريع خارج الرياض، يرجى التواصل معنا لمناقشة التفاصيل والتكلفة.',
      },
      {
        q: 'كيف يمكنني متابعة سير عملي؟',
        a: 'نقدم تحديثات دورية لعملائنا حول سير العمل. كما يمكنك التواصل مع مدير المشروع المخصص في أي وقت للاستفسار عن التقدم.',
      },
    ],
  },
];

const FAQ = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

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

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="relative bg-[#0B3A2E] min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="animate-item text-center mb-16">
          <span className="text-[#D4A03A] text-sm font-bold tracking-widest uppercase mb-4 block">
            FAQ
          </span>
          <h1 className="text-[#F4F7F5] font-black text-4xl lg:text-6xl mb-6">
            الأسئلة الشائعة
          </h1>
          <p className="text-[#F4F7F5]/70 text-lg max-w-2xl mx-auto">
            إليك إجابات على الأسئلة الأكثر شيوعاً. إذا لم تجد إجابتك، لا تتردد في التواصل معنا.
          </p>
        </div>

        {/* FAQ Content */}
        <div ref={contentRef} className="max-w-4xl mx-auto">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="animate-item mb-12">
              <h2 className="text-[#D4A03A] font-bold text-xl mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item, qIndex) => {
                  const key = `${catIndex}-${qIndex}`;
                  const isOpen = openItems[key];
                  return (
                    <div
                      key={qIndex}
                      className="bg-[#F4F7F5]/5 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full flex items-center justify-between p-6 text-right"
                      >
                        <span className="text-[#F4F7F5] font-medium text-lg">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#D4A03A] flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="px-6 pb-6 text-[#F4F7F5]/70 leading-relaxed">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="animate-item max-w-2xl mx-auto mt-16 text-center bg-[#F4F7F5]/5 rounded-3xl p-8 lg:p-12">
          <h2 className="text-[#F4F7F5] font-bold text-2xl mb-4">
            لم تجد إجابتك؟
          </h2>
          <p className="text-[#F4F7F5]/70 mb-8">
            فريقنا جاهز للإجابة على جميع استفساراتك. تواصل معنا مباشرة.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#D4A03A] text-[#0B3A2E] px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-5 h-5" />
              <span>تواصل معنا</span>
            </Link>
            <a
              href="https://wa.me/966502394828"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#F4F7F5]/30 text-[#F4F7F5] px-8 py-4 rounded-full font-bold hover:border-[#D4A03A] hover:text-[#D4A03A] transition-colors"
            >
              <span>واتساب</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
