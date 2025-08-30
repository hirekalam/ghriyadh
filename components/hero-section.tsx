"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [typewriterText, setTypewriterText] = useState("")
  const [typewriterIndex, setTypewriterIndex] = useState(0)
  const { t } = useLanguage()

  const heroText = t("heroTypewriter")
  const subText = t("heroSubtext")

  const slides = [
    {
      image: "/beautiful-landscaped-garden-with-artificial-grass-.webp",
      title: "slide1Title",
      subtitle: "slide1Subtitle",
    },
    {
      image: "/modern-artificial-grass-installation-with-elegant-.webp",
      title: "slide2Title",
      subtitle: "slide2Subtitle",
    },
    {
      image: "/elegant-water-fountain-and-waterfall-in-luxury-garden.webp.webp",
      title: "slide3Title",
      subtitle: "slide3Subtitle",
    },
    {
      image: "/modern-garden-shades-and-pergolas-with-green-lands.webp",
      title: "slide4Title",
      subtitle: "slide4Subtitle",
    },
  ]

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Auto-slide every 5 seconds

    return () => clearInterval(slideTimer)
  }, [slides.length])

  useEffect(() => {
    if (typewriterIndex < heroText.length) {
      const timer = setTimeout(() => {
        setTypewriterText(heroText.slice(0, typewriterIndex + 1))
        setTypewriterIndex(typewriterIndex + 1)
      }, 80)
      return () => clearTimeout(timer)
    }
  }, [typewriterIndex, heroText])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Main Heading with Typewriter Effect */}
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white mb-2">{t("heroTitle")}</span>
              <span className="block text-accent text-2xl md:text-3xl lg:text-4xl">{t("heroSubtitle")}</span>
            </h1>

            {/* Typewriter Text */}
            <div className="h-16 flex items-center justify-center mb-4">
              <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-semibold">
                <span className="border-r-2 border-accent pr-1 animate-pulse">{typewriterText}</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl mb-2 text-gray-200">{subText}</p>

            {/* Current Slide Info */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-accent mb-2">{t(slides[currentSlide].title)}</h3>
              <p className="text-lg text-gray-300">{t(slides[currentSlide].subtitle)}</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-white font-bold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a
                  href="https://wa.me/966502394828?text=مرحبا، أريد عرض سعر مجاني لخدمات تنسيق الحدائق"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("getQuote")}
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 text-lg rounded-full backdrop-blur-sm bg-white/10"
                asChild
              >
                <a href="#services">{t("exploreServices")}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4 space-x-reverse">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full w-12 h-12 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
            onClick={prevSlide}
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </Button>

          <div className="flex space-x-2 space-x-reverse">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-accent scale-125" : "bg-white/50 hover:bg-white/70"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            className="rounded-full w-12 h-12 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
            onClick={nextSlide}
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </Button>
        </div>
      </div>
    </section>
  )
}
