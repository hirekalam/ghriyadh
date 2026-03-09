import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: 'الرئيسية', href: '/' },
    { label: 'الخدمات', href: '/services' },
    { label: 'المشاريع', href: '/projects' },
    { label: 'من نحن', href: '/about' },
    { label: 'المدونة', href: '/blog' },
    { label: 'اتصل بنا', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0B3A2E]/95 backdrop-blur-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D4A03A] flex items-center justify-center">
              <span className="text-[#0B3A2E] font-bold text-lg">G</span>
            </div>
            <span className="text-[#F4F7F5] font-bold text-xl hidden sm:block">
              Green House
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`transition-colors duration-300 font-medium ${
                  isActive(item.href)
                    ? 'text-[#D4A03A]'
                    : 'text-[#F4F7F5]/80 hover:text-[#D4A03A]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              to="/special-offer"
              className="hidden sm:flex items-center gap-2 bg-[#D4A03A] text-[#0B3A2E] px-5 py-2.5 rounded-full font-bold hover:scale-105 transition-transform duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>احصل على عرض سعر</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#F4F7F5] p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[999] bg-[#0B3A2E]/98 backdrop-blur-lg transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-2xl font-bold transition-colors ${
                isActive(item.href) ? 'text-[#D4A03A]' : 'text-[#F4F7F5] hover:text-[#D4A03A]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/special-offer"
            className="flex items-center gap-2 bg-[#D4A03A] text-[#0B3A2E] px-8 py-4 rounded-full font-bold mt-4"
          >
            <Phone className="w-5 h-5" />
            <span>احصل على عرض سعر</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
