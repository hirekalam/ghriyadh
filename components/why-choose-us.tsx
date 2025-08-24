"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Clock, Shield, Star } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "خبرة واسعة",
      description: "أكثر من 10 سنوات من الخبرة في تنسيق الحدائق والمساحات الخضراء",
    },
    {
      icon: Users,
      title: "فريق متخصص",
      description: "فريق من المهندسين والفنيين المتخصصين في تصميم وتنفيذ الحدائق",
    },
    {
      icon: CheckCircle,
      title: "جودة مضمونة",
      description: "نستخدم أفضل المواد والتقنيات لضمان جودة عالية ونتائج مثالية",
    },
    {
      icon: Clock,
      title: "التزام بالمواعيد",
      description: "نلتزم بتسليم المشاريع في الوقت المحدد دون تأخير",
    },
    {
      icon: Shield,
      title: "ضمان شامل",
      description: "نقدم ضماناً شاملاً على جميع أعمالنا وخدمات ما بعد التنفيذ",
    },
    {
      icon: Star,
      title: "رضا العملاء",
      description: "نسعى دائماً لتحقيق أعلى مستويات رضا العملاء وتجاوز توقعاتهم",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            لماذا تختار البيت الأخضر؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نحن الخيار الأمثل لتنسيق حديقتك بفضل خبرتنا الواسعة وجودة خدماتنا المتميزة
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={feature.title}
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-card border-0 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">مشروع مكتمل</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">سنوات خبرة</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">رضا العملاء</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">دعم فني</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
