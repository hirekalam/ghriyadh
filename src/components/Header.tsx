"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

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
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? 'glass-header py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary-deep flex items-center justify-center shadow-premium-glow transition-transform duration-300 group-hover:scale-105">
              <span className="text-warm-white font-black text-lg">G</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary-deep font-black text-base tracking-wide leading-tight">
                Green House
              </span>
              <span className="text-botanical font-bold text-xs tracking-wider leading-none">
                البيت الأخضر
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold tracking-wide transition-colors duration-200 relative py-1 ${
                  isActive(item.href)
                    ? 'text-primary-deep'
                    : 'text-muted-grey hover:text-primary-deep'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-botanical rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 bg-primary-deep text-warm-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-botanical hover:scale-[1.02] transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>اطلب استشارة مجانية</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-primary-deep hover:bg-primary-deep/5 p-2 rounded-xl transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Premium Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-[99] bg-warm-white/95 backdrop-blur-xl transition-all duration-500 lg:hidden flex flex-col ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="flex-1 flex flex-col justify-center items-center gap-6 pt-24 px-6 pb-8 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xl font-black tracking-wide transition-colors duration-200 ${
                isActive(item.href) ? 'text-primary-deep scale-105' : 'text-muted-grey hover:text-primary-deep'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="w-full max-w-xs flex flex-col gap-3 mt-6">
            <a
              href="tel:0557401773"
              className="flex items-center justify-center gap-2 bg-primary-deep text-warm-white py-3.5 rounded-full font-bold text-sm shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>اتصال مباشر</span>
            </a>
            <a
              href="https://wa.me/966557401773"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-botanical text-warm-white py-3.5 rounded-full font-bold text-sm shadow-md"
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
