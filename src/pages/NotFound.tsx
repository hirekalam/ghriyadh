import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="relative bg-[#0B3A2E] min-h-screen flex items-center justify-center pt-20">
      <div className="w-full px-6 lg:px-12 text-center">
        {/* 404 Number */}
        <div className="relative mb-8">
          <span className="text-[20vw] lg:text-[15vw] font-black text-[#F4F7F5]/10 leading-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-[#D4A03A]/20 flex items-center justify-center">
              <Search className="w-16 h-16 lg:w-20 lg:h-20 text-[#D4A03A]" />
            </div>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-[#F4F7F5] font-black text-3xl lg:text-5xl mb-4">
          الصفحة غير موجودة
        </h1>
        <p className="text-[#F4F7F5]/70 text-lg max-w-md mx-auto mb-10">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو قد تم نقلها.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#D4A03A] text-[#0B3A2E] px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
          >
            <Home className="w-5 h-5" />
            <span>العودة للرئيسية</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border-2 border-[#F4F7F5]/30 text-[#F4F7F5] px-8 py-4 rounded-full font-bold hover:border-[#D4A03A] hover:text-[#D4A03A] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>العودة للخلف</span>
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-16">
          <p className="text-[#F4F7F5]/50 mb-6">أو قد تكون مهتماً بـ:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="text-[#F4F7F5]/70 hover:text-[#D4A03A] transition-colors"
            >
              خدماتنا
            </Link>
            <span className="text-[#F4F7F5]/30">|</span>
            <Link
              to="/projects"
              className="text-[#F4F7F5]/70 hover:text-[#D4A03A] transition-colors"
            >
              أعمالنا
            </Link>
            <span className="text-[#F4F7F5]/30">|</span>
            <Link
              to="/contact"
              className="text-[#F4F7F5]/70 hover:text-[#D4A03A] transition-colors"
            >
              اتصل بنا
            </Link>
            <span className="text-[#F4F7F5]/30">|</span>
            <Link
              to="/blog"
              className="text-[#F4F7F5]/70 hover:text-[#D4A03A] transition-colors"
            >
              المدونة
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
