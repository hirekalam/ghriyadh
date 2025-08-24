"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar")
  }

  const navigationItems = [
    { href: "/", label: "home" },
    { href: "/services", label: "services" },
    { href: "/projects", label: "projects" },
    { href: "/about", label: "about" },
    { href: "/blog", label: "blog" },
    { href: "/contact", label: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">GH</span>
            </div>
            <div className="text-right">
              <h1 className="font-heading font-bold text-xl text-primary">Green House</h1>
              <p className="text-sm text-gray-600">البيت الأخضر</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-800 hover:text-primary transition-colors duration-200 font-medium text-base"
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 space-x-reverse bg-white/80 border-gray-300 text-gray-800 hover:bg-gray-50"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "ar" ? "EN" : "العربية"}</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="flex items-center space-x-2 space-x-reverse bg-white/80 border-gray-300 text-gray-800 hover:bg-gray-50"
              asChild
            >
              <a href="tel:+966502394828">
                <Phone className="w-4 h-4" />
                <span>{t("callNow")}</span>
              </a>
            </Button>

            <Button
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300"
              asChild
            >
              <a href="https://whatsform.com/rt2jpf" target="_blank" rel="noopener noreferrer">
                {t("getFreeQuote")}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-gray-800 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-lg">
            <nav className="flex flex-col space-y-4 mt-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-800 hover:text-primary transition-colors duration-200 font-medium py-2 px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.label)}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 px-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLanguage}
                  className="flex items-center justify-center space-x-2 space-x-reverse bg-white border-gray-300 text-gray-800"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === "ar" ? "English" : "العربية"}</span>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center justify-center space-x-2 space-x-reverse bg-white border-gray-300 text-gray-800"
                  asChild
                >
                  <a href="tel:+966502394828">
                    <Phone className="w-4 h-4" />
                    <span>{t("callNow")}</span>
                  </a>
                </Button>

                <Button
                  className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300"
                  asChild
                >
                  <a href="https://whatsform.com/rt2jpf" target="_blank" rel="noopener noreferrer">
                    {t("getFreeQuote")}
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
