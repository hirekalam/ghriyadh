import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ZoomIn } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, image: '/images/project-1.jpg', title: 'حديقة فيلا فاخرة', category: 'تنسيق حدائق', location: 'الرياض' },
  { id: 2, image: '/images/project-2.jpg', title: 'تركيب عشب صناعي', category: 'عشب صناعي', location: 'الرياض' },
  { id: 3, image: '/images/project-3.jpg', title: 'نافورة وشلال', category: 'نوافير', location: 'الرياض' },
  { id: 4, image: '/images/project-4.jpg', title: 'جدارية نباتية', category: 'عشب جداري', location: 'الرياض' },
  { id: 5, image: '/images/project-5.jpg', title: 'مظلة حديقة', category: 'مظلات', location: 'الرياض' },
  { id: 6, image: '/images/project-6.jpg', title: 'نظام ري ذكي', category: 'ري', location: 'الرياض' },
  { id: 7, image: '/images/statement-design.jpg', title: 'تصميم حديقة كلاسيكية', category: 'تنسيق حدائق', location: 'الرياض' },
  { id: 8, image: '/images/statement-build.jpg', title: 'حديقة هندسية', category: 'تنسيق حدائق', location: 'الرياض' },
  { id: 9, image: '/images/statement-deliver.jpg', title: 'حديقة منزلية', category: 'عشب طبيعي', location: 'الرياض' },
];

const categories = ['الكل', 'تنسيق حدائق', 'عشب صناعي', 'عشب طبيعي', 'مظلات', 'نوافير', 'ري'];

const Projects = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredProjects = selectedCategory === 'الكل'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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

      const projectItems = gridRef.current?.querySelectorAll('.project-item');
      if (projectItems && projectItems.length > 0) {
        gsap.fromTo(
          projectItems,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <div className="relative bg-[#0B3A2E] min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <span className="text-[#D4A03A] text-sm font-bold tracking-widest uppercase mb-4 block">
            PORTFOLIO
          </span>
          <h1 className="text-[#F4F7F5] font-black text-4xl lg:text-6xl mb-6">
            أعمالنا
          </h1>
          <p className="text-[#F4F7F5]/70 text-lg max-w-2xl mx-auto">
            نفخر بأعمالنا التي نفذناها لعملائنا في الرياض. استعرض معرض أعمالنا واطلع على جودة خدماتنا.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#D4A03A] text-[#0B3A2E]'
                  : 'bg-[#F4F7F5]/10 text-[#F4F7F5]/70 hover:bg-[#F4F7F5]/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-item group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setLightboxImage(project.image)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3A2E] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-[#D4A03A] flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-[#0B3A2E]" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#D4A03A] text-sm font-medium">{project.category}</span>
                <h3 className="text-[#F4F7F5] font-bold text-xl">{project.title}</h3>
                <p className="text-[#F4F7F5]/60 text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-[#F4F7F5] hover:text-[#D4A03A] transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Project"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
