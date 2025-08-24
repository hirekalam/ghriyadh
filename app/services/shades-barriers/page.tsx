import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Sun, Palette, Phone, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "تركيب مظلات خارجية السعودية | برجولات وحواجز | حلول حماية من الشمس",
  description:
    "تركيب مظلات خارجية عالية الجودة في السعودية. برجولات وحواجز عصرية، حلول حماية من الشمس، تصاميم مظلات خشبية للحدائق.",
  keywords: "تركيب مظلات خارجية السعودية, برجولات وحواجز, حلول حماية من الشمس, مظلات خشبية للحدائق, تصاميم مظلات",
  openGraph: {
    title: "تركيب مظلات خارجية السعودية | البيت الأخضر",
    description: "مظلات وسواتر عصرية بأعلى جودة وأفضل الأسعار",
    type: "website",
  },
}

export default function ShadesBarriersPage() {
  const benefits = [
    {
      icon: Sun,
      title: "حماية من الأشعة الضارة",
      description: "توفر حماية تصل إلى 95% من الأشعة فوق البنفسجية",
    },
    {
      icon: Shield,
      title: "مواد عالية الجودة",
      description: "مقاومة للصدأ والتآكل وتتحمل الظروف الجوية القاسية",
    },
    {
      icon: Palette,
      title: "تصاميم متنوعة",
      description: "مجموعة واسعة من التصاميم والألوان لتناسب ديكور حديقتك",
    },
  ]

  const types = [
    {
      name: "مظلات خشبية",
      description: "مظلات من الخشب الطبيعي المعالج ضد الحشرات والرطوبة",
      features: ["خشب طبيعي معالج", "تصميم كلاسيكي", "صديق للبيئة"],
      image: "/modern-garden-shades-pergolas-barriers.png",
      price: "يبدأ من 120 ريال/متر مربع",
    },
    {
      name: "مظلات معدنية",
      description: "مظلات من الحديد المجلفن والألمنيوم المقاوم للصدأ",
      features: ["مقاوم للصدأ", "عمر افتراضي طويل", "صيانة قليلة"],
      image: "/placeholder.svg?height=200&width=300&text=مظلات+معدنية",
      price: "يبدأ من 80 ريال/متر مربع",
    },
    {
      name: "برجولات حديثة",
      description: "برجولات عصرية بتصاميم مبتكرة وإضاءة LED مدمجة",
      features: ["تصميم عصري", "إضاءة LED", "تحكم ذكي"],
      image: "/placeholder.svg?height=200&width=300&text=برجولات+حديثة",
      price: "يبدأ من 200 ريال/متر مربع",
    },
    {
      name: "سواتر خصوصية",
      description: "سواتر توفر الخصوصية والحماية من الرياح والغبار",
      features: ["خصوصية كاملة", "مقاوم للرياح", "تصاميم جذابة"],
      image: "/placeholder.svg?height=200&width=300&text=سواتر+خصوصية",
      price: "يبدأ من 60 ريال/متر مربع",
    },
  ]

  const applications = [
    "الحدائق المنزلية والفلل",
    "المطاعم والمقاهي الخارجية",
    "المدارس والحضانات",
    "النوادي والمنتجعات",
    "مواقف السيارات",
    "المساجد والمراكز الدينية",
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/modern-garden-shades-pergolas-barriers.png"
              alt="تركيب مظلات خارجية السعودية"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
                تركيب مظلات خارجية السعودية
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                برجولات وحواجز عصرية مع حلول حماية من الشمس وتصاميم مظلات خشبية للحدائق
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
                  يبدأ من 80 ريال/متر مربع
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                فوائد المظلات والسواتر
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                استمتع بالراحة والحماية مع مظلاتنا وسواترنا عالية الجودة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>
        </section>

        {/* Types Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                أنواع المظلات والسواتر
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                اختر من مجموعة متنوعة من التصاميم والمواد التي تناسب احتياجاتك
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {types.map((type, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                      <img
                        src={type.image || "/placeholder.svg"}
                        alt={type.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <CardContent className="md:w-1/2 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-foreground mb-3">{type.name}</h3>
                        <p className="text-muted-foreground mb-4">{type.description}</p>
                        <div className="space-y-2 mb-4">
                          {type.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-primary ml-2" />
                              <span className="text-sm text-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-lg font-bold text-primary">{type.price}</div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                تطبيقات المظلات والسواتر
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications.map((app, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                      <p className="text-foreground font-medium">{app}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">احصل على الحماية والراحة</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              تواصل معنا اليوم واحصل على عرض سعر مجاني لتركيب المظلات والسواتر
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-full"
                asChild
              >
                <a href="https://whatsform.com/rt2jpf" target="_blank" rel="noopener noreferrer">
                  احجز معاينة مجانية
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
