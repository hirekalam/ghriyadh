"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ServicesOverview() {
  const services = [
    {
      title: "تنسيق الحدائق",
      description: "تصميم وتنفيذ حدائق فاخرة تناسب ذوقك وتحقق أحلامك في مساحة خضراء مثالية",
      image: "/professional-landscaping-garden-design-riyadh.png",
      href: "/services/landscaping",
      features: ["تصميم مخصص", "نباتات محلية", "صيانة دورية"],
    },
    {
      title: "العشب الصناعي",
      description: "تركيب عشب صناعي عالي الجودة يوفر جمالاً دائماً بدون الحاجة للري أو الصيانة المستمرة",
      image: "/high-quality-artificial-grass-installation.png",
      href: "/services/artificial-grass",
      features: ["مقاوم للعوامل الجوية", "توفير في المياه", "ضمان طويل المدى"],
    },
    {
      title: "العشب الطبيعي",
      description: "زراعة وتركيب العشب الطبيعي الأخضر الذي يضفي جمالاً طبيعياً وانتعاشاً لحديقتك",
      image: "/natural-grass-lawn-installation-saudi-arabia.png",
      href: "/services/natural-grass",
      features: ["عشب طبيعي 100%", "نظام ري متطور", "خدمة زراعة متخصصة"],
    },
    {
      title: "المظلات والسواتر",
      description: "تركيب مظلات وسواتر عصرية توفر الظل والخصوصية مع تصاميم أنيقة تناسب ديكور حديقتك",
      image: "/modern-garden-shades-pergolas-barriers.png",
      href: "/services/shades-barriers",
      features: ["مواد عالية الجودة", "تصاميم عصرية", "حماية من الشمس"],
    },
    {
      title: "العشب الجداري",
      description: "تركيب حدائق عمودية وعشب جداري يحول الجدران إلى لوحات فنية خضراء مذهلة",
      image: "/vertical-garden-wall-grass-installation.png",
      href: "/services/wall-grass",
      features: ["تصميم عمودي مبتكر", "توفير المساحة", "تنقية الهواء"],
    },
    {
      title: "النوافير والشلالات",
      description: "تصميم وتنفيذ نوافير وشلالات مائية تضفي أجواء من الهدوء والفخامة على حديقتك",
      image: "/luxury-water-fountains-waterfalls-garden.png",
      href: "/services/fountains",
      features: ["تصاميم مخصصة", "أنظمة إضاءة", "صوت مياه مهدئ"],
    },
    {
      title: "شبكات الري",
      description: "تركيب أنظمة ري ذكية وحديثة تضمن وصول المياه لجميع النباتات بكفاءة عالية",
      image: "/smart-irrigation-system-installation.png",
      href: "/services/irrigation",
      features: ["نظام ري ذكي", "توفير في المياه", "تحكم آلي"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">خدماتنا المتميزة</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من خدمات تنسيق الحدائق والمساحات الخضراء بأعلى معايير الجودة والاحترافية في الرياض والدمام
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.href}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-card border-0 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-primary/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  asChild
                >
                  <Link href={service.href}>
                    اعرف المزيد
                    <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">هل تحتاج استشارة مجانية؟</h3>
            <p className="text-xl mb-8 opacity-90">
              تواصل معنا الآن واحصل على استشارة مجانية من خبرائنا في تنسيق الحدائق
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-full"
                asChild
              >
                <a href="https://whatsform.com/rt2jpf" target="_blank" rel="noopener noreferrer">
                  احجز استشارة مجانية
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 text-lg rounded-full bg-transparent"
                asChild
              >
                <Link href="/projects">شاهد أعمالنا</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
