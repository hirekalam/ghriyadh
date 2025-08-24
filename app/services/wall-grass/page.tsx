import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, ArrowLeft, Leaf, Shield, Droplets, Zap } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "العشب الجداري والحدائق العمودية في الرياض | البيت الأخضر",
  description:
    "خدمات تركيب العشب الجداري والحدائق العمودية في الرياض. تصاميم عصرية وحلول مبتكرة للمساحات الداخلية والخارجية مع ضمان 5 سنوات",
  keywords: "عشب جداري الرياض, حدائق عمودية, عشب صناعي جداري, تنسيق حدائق عمودية, حائط أخضر, جدران خضراء الرياض",
}

const features = [
  { icon: Leaf, title: "تصاميم عصرية", description: "أحدث التصاميم العالمية للحدائق العمودية" },
  { icon: Shield, title: "مقاوم للعوامل الجوية", description: "يتحمل الحرارة والرطوبة والأتربة" },
  { icon: Droplets, title: "نظام ري متطور", description: "أنظمة ري تلقائية للحدائق الطبيعية" },
  { icon: Zap, title: "سهولة الصيانة", description: "لا يحتاج صيانة مستمرة أو قص" },
]

const benefits = [
  "توفير المساحة وإضافة جمال للجدران",
  "تحسين جودة الهواء في المساحات المغلقة",
  "عزل حراري وصوتي طبيعي",
  "حلول مبتكرة للمساحات الضيقة",
  "تصاميم قابلة للتخصيص حسب المساحة",
  "مقاوم للحشرات والآفات",
]

const applications = [
  "الجدران الداخلية للمنازل والمكاتب",
  "واجهات المباني التجارية",
  "المطاعم والكافيهات",
  "الفنادق والمنتجعات",
  "المراكز التجارية",
  "المستشفيات والعيادات",
]

export default function WallGrassPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary text-white">خدمات متخصصة</Badge>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                  العشب الجداري والحدائق العمودية
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  حول جدرانك إلى لوحات فنية خضراء مع خدمات العشب الجداري والحدائق العمودية المتطورة في الرياض
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
                  src="/modern-vertical-garden-wall-grass-installation.png"
                  alt="العشب الجداري والحدائق العمودية"
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">مميزات العشب الجداري</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                اكتشف المميزات الفريدة التي تجعل العشب الجداري الخيار الأمثل لتجميل المساحات
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

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                  فوائد الحدائق العمودية
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
                  src="/vertical-garden-benefits-showcase.png"
                  alt="فوائد الحدائق العمودية"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">تطبيقات العشب الجداري</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                يمكن استخدام العشب الجداري في مختلف المساحات والتطبيقات
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Leaf className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-bold">{application}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">آراء عملائنا</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "أحمد المالكي",
                  location: "الرياض - حي العليا",
                  rating: 5,
                  comment: "العشب الجداري غير شكل مكتبنا بالكامل. أصبح المكان أكثر حيوية وجمالاً",
                },
                {
                  name: "فاطمة السعد",
                  location: "الرياض - حي النرجس",
                  rating: 5,
                  comment: "الحديقة العمودية في منزلي أصبحت محط إعجاب جميع الضيوف. عمل احترافي ممتاز",
                },
                {
                  name: "محمد العتيبي",
                  location: "الرياض - حي الملقا",
                  rating: 5,
                  comment: "جودة عالية وتركيب احترافي. الفريق متعاون ومتخصص في عمله",
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">جاهز لتحويل جدرانك إلى تحفة فنية؟</h2>
              <p className="text-lg mb-8 opacity-90">
                احصل على استشارة مجانية وعرض سعر مخصص لمشروع العشب الجداري الخاص بك
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
