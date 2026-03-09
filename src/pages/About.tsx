import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, Users, Leaf, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: '500+', label: 'مشروع منفذ' },
  { number: '10+', label: 'سنوات خبرة' },
  { number: '50+', label: 'فني متخصص' },
  { number: '100%', label: 'رضا العملاء' },
];

const values = [
  {
    icon: Target,
    title: 'الجودة',
    description: 'نلتزم بأعلى معايير الجودة في كل مشروع ننفذه',
  },
  {
    icon: Eye,
    title: 'الشفافية',
    description: 'نوفر لعملائنا تقارير دورية وشفافة عن سير العمل',
  },
  {
    icon: Award,
    title: 'الاحترافية',
    description: 'فريقنا مدرب على أحدث تقنيات تنسيق الحدائق',
  },
  {
    icon: Users,
    title: 'العملاء أولاً',
    description: 'رضا عملائنا هو هدفنا الأول والأخير',
  },
];

const About = () => {
  const contentRef = useRef<HTMLDivElement>(null);

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
      {/* Hero */}
      <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden mb-12">
        <img
          src="/images/statement-design.jpg"
          alt="من نحن"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B3A2E] via-[#0B3A2E]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="w-full px-6 lg:px-12">
            <span className="text-[#D4A03A] text-sm font-bold tracking-widest uppercase mb-4 block">
              ABOUT US
            </span>
            <h1 className="text-[#F4F7F5] font-black text-4xl lg:text-6xl">
              من نحن
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="w-full px-6 lg:px-12">
        {/* Introduction */}
        <div className="animate-item max-w-4xl mx-auto mb-20">
          <h2 className="text-[#F4F7F5] font-bold text-2xl lg:text-3xl mb-6">
            البيت الأخضر في الرياض
          </h2>
          <p className="text-[#F4F7F5]/70 text-lg leading-relaxed mb-6">
            شركة البيت الأخضر هي إحدى الشركات الرائدة في مجال تنسيق الحدائق في الرياض. نقدم خدمات شاملة تشمل تصميم وتنفيذ وصيانة الحدائق والمساحات الخضراء. نفتخر بفريقنا المتخصص الذي يضم مصممين وفنيين ذوي خبرة عالية في هذا المجال.
          </p>
          <p className="text-[#F4F7F5]/70 text-lg leading-relaxed">
            منذ تأسيسنا، عملنا على أكثر من 500 مشروع ناجح في الرياض والمناطق المحيطة بها. نؤمن بأن كل حديقة لها قصة، ونسعى لجعل قصة حديقتك مميزة وفريدة.
          </p>
        </div>

        {/* Stats */}
        <div className="animate-item grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#F4F7F5]/5 rounded-2xl p-6 text-center"
            >
              <div className="text-[#D4A03A] font-black text-4xl lg:text-5xl mb-2">
                {stat.number}
              </div>
              <div className="text-[#F4F7F5]/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="animate-item grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-[#F4F7F5]/5 rounded-3xl p-8 lg:p-10">
            <div className="w-14 h-14 rounded-full bg-[#D4A03A]/20 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-[#D4A03A]" />
            </div>
            <h3 className="text-[#F4F7F5] font-bold text-2xl mb-4">رؤيتنا</h3>
            <p className="text-[#F4F7F5]/70 leading-relaxed">
              أن نكون الشركة الرائدة في مجال تنسيق الحدائق في المملكة العربية السعودية، وأن نكون الخيار الأول لكل من يبحث عن جودة واحترافية في تصميم وتنفيذ الحدائق.
            </p>
          </div>
          <div className="bg-[#F4F7F5]/5 rounded-3xl p-8 lg:p-10">
            <div className="w-14 h-14 rounded-full bg-[#D4A03A]/20 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-[#D4A03A]" />
            </div>
            <h3 className="text-[#F4F7F5] font-bold text-2xl mb-4">رسالتنا</h3>
            <p className="text-[#F4F7F5]/70 leading-relaxed">
              تقديم خدمات تنسيق حدائق متميزة تجمع بين الجمال والوظيفة، باستخدام أفضل المواد وأحدث التقنيات، مع الالتزام بأعلى معايير الجودة والاحترافية.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="animate-item mb-20">
          <h2 className="text-[#F4F7F5] font-bold text-2xl lg:text-3xl mb-8 text-center">
            قيمنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#F4F7F5]/5 rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#D4A03A]/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#D4A03A]" />
                </div>
                <h3 className="text-[#F4F7F5] font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-[#F4F7F5]/60 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="animate-item mb-20">
          <h2 className="text-[#F4F7F5] font-bold text-2xl lg:text-3xl mb-8 text-center">
            لماذا تختارنا؟
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src="/images/statement-maintain.jpg"
                alt="لماذا نحن"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4A03A] flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5 text-[#0B3A2E]" />
                </div>
                <div>
                  <h3 className="text-[#F4F7F5] font-bold text-lg mb-2">خبرة واسعة</h3>
                  <p className="text-[#F4F7F5]/60">أكثر من 10 سنوات في مجال تنسيق الحدائق مع أكثر من 500 مشروع ناجح.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4A03A] flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[#0B3A2E]" />
                </div>
                <div>
                  <h3 className="text-[#F4F7F5] font-bold text-lg mb-2">فريق متخصص</h3>
                  <p className="text-[#F4F7F5]/60">فريق من المصممين والفنيين المدربين على أحدث تقنيات تنسيق الحدائق.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4A03A] flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-[#0B3A2E]" />
                </div>
                <div>
                  <h3 className="text-[#F4F7F5] font-bold text-lg mb-2">جودة مضمونة</h3>
                  <p className="text-[#F4F7F5]/60">نستخدم أفضل المواد ونقدم ضمان على جميع أعمالنا.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="animate-item text-center">
          <h2 className="text-[#F4F7F5] font-bold text-2xl lg:text-3xl mb-6">
            هل أنت مستعد لتحويل حديقتك؟
          </h2>
          <p className="text-[#F4F7F5]/70 mb-8 max-w-xl mx-auto">
            دعنا نساعدك في إنشاء حديقة أحلامك. تواصل معنا اليوم للحصول على استشارة مجانية.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#D4A03A] text-[#0B3A2E] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>تواصل معنا</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-[#F4F7F5]/30 text-[#F4F7F5] px-8 py-4 rounded-full font-bold text-lg hover:border-[#D4A03A] hover:text-[#D4A03A] transition-colors duration-300"
            >
              <span>استكشف خدماتنا</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
