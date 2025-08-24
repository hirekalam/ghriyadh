import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, MessageCircle, Shield, Droplets, Sun } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "تركيب عشب صناعي الرياض | فوائد العشب الاصطناعي | حديقة بدون صيانة",
  description:
    "تركيب عشب صناعي عالي الجودة في الرياض. فوائد العشب الاصطناعي، حديقة بدون صيانة، توفير المياه، مقاوم للعوامل الجوية.",
  keywords: "تركيب عشب صناعي الرياض, فوائد العشب الاصطناعي, حديقة بدون صيانة, عشب صناعي للحدائق, افضل عشب صناعي",
  openGraph: {
    title: "تركيب عشب صناعي الرياض | البيت الأخضر",
    description: "عشب صناعي عالي الجودة بدون صيانة وتوفير في المياه",
    type: "website",
  },
}

export default function ArtificialGrassPage() {
  const benefits = [
    {
      icon: Droplets,
      title: "توفير 70% من المياه",
      description: "لا يحتاج للري المستمر مما يوفر آلاف الريالات سنوياً",
    },
    {
      icon: Sun,
      title: "مقاوم للأشعة فوق البنفسجية",
      description: "يحتفظ بلونه الأخضر الطبيعي تحت أشعة الشمس الحارقة",
    },
    {
      icon: Shield,
      title: "عمر افتراضي 15 سنة",
      description: "ضمان طويل المدى مع الحفاظ على الجودة والمظهر",
    },
  ]

  const features = [
    "مظهر طبيعي 100% يشبه العشب الحقيقي",
    "آمن للأطفال والحيوانات الأليفة",
    "مقاوم للحرائق والبكتيريا",
    "سهولة التنظيف والصيانة",
    "مناسب لجميع الأحوال الجوية",
    "لا يحتاج للقص أو التسميد",
    "صديق للبيئة ومعاد التدوير",
    "تركيب سريع ونتائج فورية",
  ]

  const applications = [
    {
      title: "الحدائق المنزلية",
      description: "مثالي للفلل والمنازل الخاصة",
      image: "/high-quality-artificial-grass-installation.png",
    },
    {
      title: "الملاعب الرياضية",
      description: "ملاعب كرة القدم والتنس",
      image: "/placeholder.svg?height=200&width=300&text=ملاعب+رياضية",
    },
    {
      title: "المدارس والحضانات",
      description: "مناطق لعب آمنة للأطفال",
      image: "/placeholder.svg?height=200&width=300&text=مناطق+لعب",
    },
    {
      title: "المكاتب والشركات",
      description: "مساحات خضراء في بيئة العمل",
      image: "/placeholder.svg?height=200&width=300&text=مكاتب+وشركات",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/high-quality-artificial-grass-installation.png"
              alt="تركيب عشب صناعي الرياض"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
                تركيب عشب صناعي الرياض
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                استمتع بفوائد العشب الاصطناعي مع حديقة بدون صيانة تبقى خضراء طوال العام
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
                  يبدأ من 35 ريال/متر مربع
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
                فوائد العشب الاصطناعي
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                اكتشف لماذا يختار آلاف العملاء العشب الصناعي كبديل ذكي للعشب الطبيعي
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

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0 flex items-center">
                    <CheckCircle className="w-6 h-6 text-primary ml-3 flex-shrink-0" />
                    <p className="text-foreground font-medium text-sm">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                تطبيقات العشب الصناعي
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                يمكن استخدام العشب الصناعي في مختلف المساحات والتطبيقات
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((app, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={app.image || "/placeholder.svg"} alt={app.title} className="w-full h-48 object-cover" />
                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">{app.title}</h3>
                    <p className="text-muted-foreground text-sm">{app.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                العشب الصناعي مقابل العشب الطبيعي
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="font-heading text-2xl font-bold text-primary mb-4 text-center">العشب الصناعي</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                        <span>لا يحتاج للري</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                        <span>بدون صيانة دورية</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                        <span>أخضر طوال العام</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                        <span>مقاوم للحشرات</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                        <span>توفير في التكاليف</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6 opacity-75">
                  <CardContent className="p-0">
                    <h3 className="font-heading text-2xl font-bold text-muted-foreground mb-4 text-center">
                      العشب الطبيعي
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-5 h-5 bg-red-500 rounded-full ml-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">يحتاج ري يومي</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-5 h-5 bg-red-500 rounded-full ml-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">صيانة مستمرة</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-5 h-5 bg-red-500 rounded-full ml-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">يذبل في الصيف</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-5 h-5 bg-red-500 rounded-full ml-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">مشاكل الحشرات</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-5 h-5 bg-red-500 rounded-full ml-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">تكاليف عالية</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">احصل على حديقة خضراء بدون صيانة</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              تواصل معنا اليوم واحصل على عرض سعر مجاني لتركيب العشب الصناعي
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
