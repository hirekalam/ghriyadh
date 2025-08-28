"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024)
  const [typewriterText, setTypewriterText] = useState("")
  const fullText = "تصميم المواقع والتسويق بواسطة Hire Kalam"

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())

    // Typewriter effect
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const services = [
    { name: "تنسيق الحدائق", href: "/services/landscaping" },
    { name: "العشب الصناعي", href: "/services/artificial-grass" },
    { name: "العشب الطبيعي", href: "/services/natural-grass" },
    { name: "المظلات والسواتر", href: "/services/shades-barriers" },
    { name: "العشب الجداري", href: "/services/wall-grass" },
    { name: "النوافير والشلالات", href: "/services/fountains" },
    { name: "شبكات الري", href: "/services/irrigation" },
  ]

  const quickLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "المشاريع", href: "/projects" },
    { name: "المدونة", href: "/blog" },
    { name: "الأسئلة الشائعة", href: "/faq" },
    { name: "سياسة الخصوصية", href: "/privacy" },
    { name: "شروط الخدمة", href: "/terms" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-primary/5 to-primary/10 overflow-hidden">
      {/* Wave Design */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 fill-background">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Link href="/">
                <div className="w-12 h-12 relative">
                  <img src="/green house riyadh logo.webp" alt="Green House Riyadh Logo" />
                </div>
              </Link>
              <div className="text-right">
                <h3 className="font-heading font-bold text-xl text-primary">Green House</h3>
                <p className="text-sm text-muted-foreground">البيت الأخضر</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              شركة رائدة في تنسيق الحدائق وتصميم المساحات الخضراء في الرياض والدمام. نقدم خدمات متميزة في العشب الصناعي
              والطبيعي والمظلات والنوافير.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.facebook.com/greenhouseriyadh7/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.instagram.com/greenhouse_riyadh/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.linkedin.com/company/greenhouseriyadh/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.tiktok.com/greenhouseriyadh7/" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-foreground">خدماتنا</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-foreground">روابط سريعة</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-foreground">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+966502394828" className="text-muted-foreground hover:text-primary transition-colors">
                  0502394828
                </a>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:riyadhgreenhouse@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  riyadhgreenhouse@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-muted-foreground">
                  <p>شارع الفريان، حي اليمامة</p>
                  <p>الرياض، المملكة العربية السعودية</p>
                  <p>ص.ب 12675</p>
                </div>
              </div>
            </div>

            {/* Google Maps Link */}
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <a href="https://maps.app.goo.gl/CXP24uEB9JTT64EN9" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-4 h-4 ml-2" />
                عرض على الخريطة
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-right">
              <p className="text-muted-foreground">© {currentYear} Green House | البيت الأخضر. جميع الحقوق محفوظة.</p>
            </div>

            {/* Hire Kalam Credit with Typewriter Effect */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">
                Website Design & Marketing by{" "}
                <a
                  href="https://hirekalam.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors font-medium"
                >
                  Hire Kalam
                </a>
              </p>
              <div className="h-6 flex items-center justify-center">
                <a
                  href="https://hirekalam.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors font-medium"
                >
                  <span className="typewriter">{typewriterText}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          size="lg"
          className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg animate-float"
          asChild
        >
          <a href="https://wa.me/966502394828" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-8 h-8" />
          </a>
        </Button>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="outline"
          size="sm"
          className="rounded-full w-12 h-12 bg-white/90 backdrop-blur-sm"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </Button>
      </div>
    </footer>
  )
}