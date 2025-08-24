import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, ArrowLeft, Droplets, Clock, Smartphone, Leaf } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "تركيب أنظمة الري الذكية والتلقائية في الرياض | البيت الأخضر",
  description:
    "خدمات تركيب أنظمة الري الذكية والتلقائية في الرياض. ري بالتنقيط، ري تلقائي، وأنظمة ري موفرة للمياه مع ضمان شامل",
  keywords: "أنظمة ري الرياض, ري تلقائي, ري بالتنقيط, أنظمة ري ذكية, تركيب شبكات ري, ري الحدائق الرياض",
}

const features = [
  { icon: Droplets, title: "توفير المياه", description: "أنظمة ري موفرة تقلل استهلاك المياه بنسبة 50%" },
  { icon: Clock, title: "ري تلقائي", description: "برمجة أوقات الري حسب احتياجات النباتات" },
  { icon: Smartphone, title: "تحكم ذكي", description: "تحكم عن بُعد عبر التطبيقات الذكية" },
  { icon: Leaf, title: "نمو أفضل", description: "توزيع مثالي للمياه يضمن نمو صحي للنباتات" },
]

const systems = [
  {
    title: "نظام الري بالتنقيط",
    description: "الأكثر كفاءة في توفير المياه والمناسب لجميع أنواع النباتات",
    features: ["توفير 40-60% من المياه", "توزيع متساوي للمياه", "مناسب لجميع أنواع التربة", "سهولة الصيانة"],
    image: "/drip-irrigation-system-installation.png",
  },
  {
    title: "نظام الري بالرش",
    description: "مثالي للمساحات الكبيرة والعشب الطبيعي",
    features: ["تغطية واسعة", "مناسب للعشب", "رش متساوي", "قابل للبرمجة"],
    image: "/sprinkler-irrigation-system-lawn.png",
  },
  {
    title: "نظام الري الذكي",
    description: "أحدث التقنيات مع أجهزة استشعار الرطوبة والطقس",
    features: ["استشعار الرطوبة", "تحكم عن بُعد", "توفير تلقائي للمياه", "تقارير الاستهلاك"],
    image: "/smart-irrigation-system-sensors.png",
  },
]

const benefits = [
  "توفير الوقت والجهد في ري الحديقة",
  "تقليل استهلاك المياه بشكل كبير",
  "ضمان نمو صحي ومتساوي للنباتات",
  "حماية النباتات من الري الزائد أو الناقص",
  "إمكانية الري أثناء السفر",
  "تقليل تكاليف فواتير المياه",
]

export default function IrrigationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary text-white">تقنيات متطورة</Badge>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                  أنظمة الري الذكية والتلقائية
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  وفر المياه والوقت مع أحدث أنظمة الري الذكية والتلقائية في الرياض. حلول متطورة لري الحدائق بكفاءة عالية
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full"
                    asChild
                  >
                    <a href="https://whatsform.com/rt2jpf" target="_blank" rel="noopener noreferrer">
                      احصل على عرض سعر مجاني
                      <ArrowLeft className="w-5 h-5 mr-2" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="px-8 py-4 rounded-full bg-transparent" asChild>
                    <a href="tel:+966502394828">اتصل الآن: 966502394828+</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/smart-irrigation-system-garden-automation.png"
                  alt="أنظمة الري الذكية والتلقائية"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                مميزات أنظمة الري الذكية
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                تقنيات متطورة لضمان أفضل رعاية لحديقتك مع توفير المياه والطاقة
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Systems Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">أنواع أنظمة الري</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                مجموعة متنوعة من أنظمة الري لتناسب جميع أنواع الحدائق والمساحات
              </p>
            </div>
            <div className="space-y-12">
              {systems.map((system, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">{system.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{system.description}</p>
                    <div className="space-y-3">
                      {system.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <img
                      src={system.image || "/placeholder.svg"}
                      alt={system.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                  فوائد أنظمة الري التلقائية
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/irrigation-benefits-water-saving-garden.png"
                  alt="فوائد أنظمة الري التلقائية"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">خطوات التركيب</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "المسح والتصميم", description: "دراسة الموقع وتصميم النظام المناسب" },
                { step: "02", title: "التخطيط", description: "وضع خطة التركيب وتحديد المواد المطلوبة" },
                { step: "03", title: "التركيب", description: "تركيب الشبكة والمعدات بدقة عالية" },
                { step: "04", title: "البرمجة والتشغيل", description: "برمجة النظام وتدريب العميل" },
              ].map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">آراء عملائنا</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "خالد الدوسري",
                  location: "الرياض - حي الياسمين",
                  rating: 5,
                  comment: "نظام الري التلقائي وفر علي الكثير من الوقت والمياه. حديقتي أصبحت أجمل من قبل",
                },
                {
                  name: "أمل الشهري",
                  location: "الرياض - حي النرجس",
                  rating: 5,
                  comment: "النظام الذكي يتحكم في الري حتى أثناء سفري. راحة بال كاملة",
                },
                {
                  name: "فهد العنزي",
                  location: "الرياض - حي الملقا",
                  rating: 5,
                  comment: "تركيب احترافي وخدمة ممتازة. فاتورة المياه انخفضت بشكل ملحوظ",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.comment}"</p>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">جاهز لتوفير المياه والوقت؟</h2>
              <p className="text-lg mb-8 opacity-90">
                احصل على استشارة مجانية وعرض سعر مخصص لنظام الري الذكي المناسب لحديقتك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-full"
                  asChild
                >
                  <a href="https://whatsform.com/rt2jpf" target="_blank" rel="noopener noreferrer">
                    احجز استشارة مجانية
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 text-lg rounded-full bg-transparent"
                  asChild
                >
                  <a href="tel:+966502394828">اتصل الآن</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
