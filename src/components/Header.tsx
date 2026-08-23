"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle, Leaf, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: 'الرئيسية', href: '/' },
    { label: 'الخدمات', href: '/services' },
    { label: 'أعمالنا', href: '/gallery' },
    { label: 'من نحن', href: '/about' },
    { label: 'لماذا البيت الأخضر', href: '/why-us' },
    { label: 'آلية العمل', href: '/process' },
    { label: 'الأسئلة الشائعة', href: '/faq' },
    { label: 'المدونة', href: '/blog' },
    { label: 'تواصل معنا', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
            ? 'glass-header py-3 shadow-apple'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Premium Logo Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary-deep to-botanical flex items-center justify-center shadow-premium-glow transition-all duration-300 group-hover:shadow-water-glow group-hover:scale-105">
              <Leaf className="w-5 h-5 text-warm-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-primary-deep font-black text-base tracking-wide leading-tight transition-colors group-hover:text-botanical">
                Green House
              </span>
              <span className="text-water-blue font-bold text-xs tracking-wider leading-none">
                البيت الأخضر
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Apple-style centered */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold tracking-wide transition-all duration-300 relative px-3 py-2 rounded-xl ${isActive(item.href)
                    ? 'text-primary-deep bg-primary-deep/5'
                    : 'text-muted-grey hover:text-primary-deep hover:bg-charcoal/[0.03]'
                  }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-0.5 right-2 left-2 h-[2.5px] bg-gradient-to-r from-botanical to-water-blue rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-primary-deep to-botanical text-warm-white px-6 py-3 rounded-full text-xs font-bold hover:shadow-premium-glow hover:scale-[1.03] transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>اطلب استشارة مجانية</span>
            </Link>

            <a
              href="https://wa.me/966557401773"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-water-blue to-soft-blue text-white hover:shadow-water-glow transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isMobileMenuOpen
                  ? 'bg-primary-deep text-warm-white'
                  : 'text-primary-deep hover:bg-primary-deep/5'
                }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Premium Apple-Style Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-[99] transition-all duration-500 lg:hidden flex flex-col ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
          }`}
        style={{
          background: 'linear-gradient(180deg, rgba(247, 248, 245, 0.98) 0%, rgba(247, 248, 245, 0.95) 100%)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
        }}
      >
        {/* Decorative gradient circles */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-botanical/10 to-water-blue/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-water-blue/10 to-botanical/10 blur-3xl pointer-events-none" />

        <div className="flex-1 flex flex-col justify-center items-center gap-3 pt-24 px-8 pb-8 overflow-y-auto relative z-10">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-2xl font-black tracking-wide transition-all duration-300 py-2 px-6 rounded-2xl ${isActive(item.href)
                  ? 'text-white bg-gradient-to-r from-primary-deep to-botanical shadow-premium-glow scale-105'
                  : 'text-muted-grey hover:text-primary-deep hover:bg-white/50'
                }`}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isMobileMenuOpen ? `fade-in-up 0.5s ease-out ${index * 0.05}s forwards` : 'none',
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
            >
              {item.label}
            </Link>
          ))}

          <div className="w-full max-w-xs flex flex-col gap-3 mt-8">
            <a
              href="tel:0557401773"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary-deep to-botanical text-warm-white py-4 rounded-full font-bold text-sm shadow-premium-glow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4" />
              <span>اتصال مباشر: 0557401773</span>
            </a>
            <a
              href="https://wa.me/966557401773"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-water-blue to-soft-blue text-white py-4 rounded-full font-bold text-sm shadow-water-glow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>راسلنا على واتساب</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;