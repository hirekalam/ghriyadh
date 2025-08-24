import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Droplets, Leaf, Sun, Phone, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "زراعة عشب طبيعي الرياض | تركيب نجيل طبيعي | نجيلة طبيعية للحدائق",
  description:
    "زراعة عشب طبيعي عالي الجودة في الرياض. تركيب نجيل طبيعي قريب مني، نجيلة طبيعية للحدائق الرياض، خدمات زراعة متخصصة.",
  keywords: "زراعة عشب طبيعي الرياض, تركيب نجيل طبيعي, نجيلة طبيعية للحدائق, زراعة نجيل طبيعي, عشب طبيعي الرياض",
  openGraph: {
    title: "زراعة عشب طبيعي الرياض | البيت الأخضر",
    description: "عشب طبيعي أخضر جميل مع نظام ري متطور",
    type: "website",
  },
}

export default function NaturalGrassPage() {
  const benefits = [
    {
      icon: Leaf,
      title: "طبيعي 100%",
      description: "عشب حقيقي يوفر بيئة طبيعية صحية ومنعشة",
    },
    {
      icon: Droplets,
      title: "نظام ري متطور",
      description: "أنظمة ري بالتنقيط توفر المياه وتضمن النمو الصحي",
    },
    {
      icon: Sun,
      title: "مقاوم للمناخ",
      description: "أصناف مختارة تتحمل الحرارة العالية والمناخ الصحراوي",
    },
  ]

  const grassTypes = [
    {
      name: "نجيل برمودا",
      description: "مقاوم للحرارة والجفاف، مثالي للمناخ السعودي",
      features: ["مقاوم للدوس", "نمو سريع", "لون أخضر داكن"],
      image: "/natural-grass-lawn-installation-saudi-arabia.png",
    },
    {
      name: "نجيل زويسيا",
      description: "عشب كثيف وناعم، يتحمل الظل الجزئي",
      features: ["كثافة عالية", "ملمس ناعم", "مقاوم للأمراض"],
      image: "/placeholder.svg?height=200&width=300&text=نجيل+زويسيا",
    },
    {
      name: "نجيل سانت أوغسطين",
      description: "مثالي للمناطق الساحلية، يتحمل الملوحة",
      features: ["مقاوم للملوحة", "أوراق عريضة", "نمو كثيف"],
      image: "/placeholder.svg?height=200&width=300&text=نجيل+سانت+أوغسطين",
    },
  ]

  const services = [
    "تحضير وتسوية التربة",
    "اختبار جودة التربة والحموضة",
    "تركيب نظام الري بالتنقيط",
    "زراعة البذور أو الشتلات",
    "التسميد والتغذية المتوازنة",
    "خدمة القص والتشذيب",
    "مكافحة الآفات والأمراض",
    "صيانة دورية شاملة",
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/natural-grass-lawn-installation-saudi-arabia.png"
              alt="زراعة عشب طبيعي الرياض"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
                زراعة عشب طبيعي الرياض
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                استمتع بجمال الطبيعة الحقيقية مع تركيب نجيل طبيعي عالي الجودة ونجيلة طبيعية للحدائق
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold px-8 py-4 text-lg rounded-full"
                  asChild
                >
                  <a href="https://whatsform.com/rt2jpf" target="_blank" rel="noopener noreferrer">
                    احصل على عرض سعر
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 text-lg rounded-full bg-transparent"
                  asChild
                >
                  <a href="tel:+966502394828">
                    <Phone className="w-5 h-5 ml-2" />
                    اتصل الآن
                  </a>
                </Button>
              </div>
              <div className="text-center">
                <span className="bg-accent text-white px-4 py-2 rounded-full text-lg font-semibold">
                  يبدأ من 25 ريال/متر مربع
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">مميزات العشب الطبيعي</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                اكتشف جمال الطبيعة الحقيقية مع العشب الطبيعي الذي يوفر بيئة صحية ومنعشة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0 flex items-center">
                    <CheckCircle className="w-6 h-6 text-primary ml-3 flex-shrink-0" />
                    <p className="text-foreground font-medium text-sm">{service}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Grass Types Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">أنواع العشب الطبيعي</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                نختار أفضل أنواع العشب المناسبة للمناخ السعودي
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {grassTypes.map((grass, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={grass.image || "/placeholder.svg"} alt={grass.name} className="w-full h-48 object-cover" />
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">{grass.name}</h3>
                    <p className="text-muted-foreground mb-4">{grass.description}</p>
                    <div className="space-y-2">
                      {grass.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-primary ml-2" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                خطوات زراعة العشب الطبيعي
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm ml-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2">تحضير التربة</h3>
                      <p className="text-muted-foreground">تسوية وتحضير التربة وإضافة المواد العضوية اللازمة</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm ml-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2">تركيب نظام الري</h3>
                      <p className="text-muted-foreground">تركيب نظام ري بالتنقيط لضمان توزيع المياه بكفاءة</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm ml-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2">الزراعة</h3>
                      <p className="text-muted-foreground">زراعة البذور أو الشتلات حسب نوع العشب المختار</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm ml-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2">الرعاية والصيانة</h3>
                      <p className="text-muted-foreground">متابعة النمو وتقديم الرعاية اللازمة حتى اكتمال النمو</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img
                    src="/natural-grass-lawn-installation-saudi-arabia.png"
                    alt="خطوات زراعة العشب"
                    className="w-full max-w-md rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">احصل على حديقة طبيعية خضراء</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              تواصل معنا اليوم واحصل على استشارة مجانية لزراعة العشب الطبيعي
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
                <a href="https://wa.me/966502394828" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  واتساب
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
