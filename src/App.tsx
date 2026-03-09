import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Import sections
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import StatementSection from './sections/StatementSection';
import ServicesSection from './sections/ServicesSection';
import CTASection from './sections/CTASection';
import Footer from './sections/Footer';
import FloatingCTA from './sections/FloatingCTA';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for all sections to mount before setting up global snap
    const timer = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
            if (!inPinned) return value;

            const target = pinnedRanges.reduce((closest, r) =>
              Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: "power2.out"
        }
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main className="relative">
        {/* Section 1: Hero */}
        <HeroSection />
        
        {/* Section 2: نصمّم (We Design) */}
        <StatementSection
          id="section-design"
          headline="نصمّم"
          body="نبدأ بفهم أرضك… ثم نرسم حديقة تلائم ذوقك."
          image="/images/statement-design.jpg"
          textPosition="right"
          zIndex={101}
        />
        
        {/* Section 3: ننفّذ (We Build) */}
        <StatementSection
          id="section-build"
          headline="ننفّذ"
          body="فريقنا يشرف على كل التفاصيل… من التربة حتى اللمسة الأخيرة."
          image="/images/statement-build.jpg"
          textPosition="left"
          zIndex={102}
        />
        
        {/* Section 4: نسلّم (We Deliver) */}
        <StatementSection
          id="section-deliver"
          headline="نسلّم"
          body="حديقة نظيفة، مكتملة، وجاهزة للاستمتاع من اليوم الأول."
          image="/images/statement-deliver.jpg"
          textPosition="right"
          zIndex={103}
        />
        
        {/* Section 5: نضمن (We Guarantee) */}
        <StatementSection
          id="section-guarantee"
          headline="نضمن"
          body="جودة المواد، دقة التركيب، ومتابعة بعد التسليم."
          image="/images/statement-guarantee.jpg"
          textPosition="left"
          zIndex={104}
        />
        
        {/* Section 6: نختار (We Choose) */}
        <StatementSection
          id="section-choose"
          headline="نختار"
          body="نباتات تتحمل حرارة الرياض… وتزدهر بأقل صيانة."
          image="/images/statement-choose.jpg"
          textPosition="right"
          zIndex={105}
        />
        
        {/* Section 7: نصون (We Maintain) */}
        <StatementSection
          id="section-maintain"
          headline="نصون"
          body="برامج صيانة دورية تحافظ على خضرة الحديقة طوال العام."
          image="/images/statement-maintain.jpg"
          textPosition="left"
          zIndex={106}
        />
        
        {/* Section 8: نُنجز (We Complete) */}
        <StatementSection
          id="section-complete"
          headline="نُنجز"
          body="التزامنا… إنجاز المشروع بالوقت المحدد دون المساس بالجودة."
          image="/images/statement-complete.jpg"
          textPosition="right"
          zIndex={107}
        />
        
        {/* Section 9: Services Grid */}
        <ServicesSection />
        
        {/* Section 10: CTA */}
        <CTASection />
        
        {/* Section 11: Footer */}
        <Footer />
      </main>
      
      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
}

export default App;
