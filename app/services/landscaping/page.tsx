import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Star, ArrowLeft, Phone, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "تنسيق حدائق احترافي الرياض | تصميم حدائق المملكة العربية السعودية",
  description:
    "خدمات تنسيق حدائق احترافية في الرياض. تصميم حدائق المملكة العربية السعودية، تحويل المساحات الخارجية بأعلى جودة وأفضل الأسعار.",
  keywords:
    "تنسيق حدائق احترافي الرياض, تصميم حدائق المملكة العربية السعودية, تحويل المساحات الخارجية, تنسيق حدائق الرياض, شركة تنسيق حدائق",
  openGraph: {
    title: "تنسيق حدائق احترافي الرياض | البيت الأخضر",
    description: "خدمات تنسيق حدائق احترافية في الرياض والمملكة العربية السعودية",
    type: "website",
  },
}

export default function LandscapingPage() {
  const features = [
    "تصميم مخصص حسب المساحة والميزانية",
    "استخدام نباتات محلية مقاومة للمناخ الصحراوي",
    "تخطيط مساحات خضراء متوازنة وجميلة",
    "تركيب أنظمة إضاءة حدائق LED",
    "إنشاء ممرات وجلسات خارجية",
    "زراعة أشجار الظل والنباتات العطرية",
    "تصميم أحواض زهور ونباتات زينة",
    "خدمة صيانة دورية شاملة",
  ]

  const process = [
    {
      step: "01",
      title: "الاستشارة والمعاينة",
      description: "زيارة الموقع وفهم احتياجاتك ومتطلباتك",
    },
    {
      step: "02",
      title: "التصميم والتخطيط",
      description: "إعداد تصميم ثلاثي الأبعاد للحديقة",
    },
    {
      step: "03",
      title: "اختيار المواد",
      description: "انتقاء أفضل النباتات والمواد المناسبة",
    },
    {
      step: "04",
      title: "التنفيذ",
      description: "تنفيذ المشروع بأعلى معايير الجودة",
    },
    {
      step: "05",
      title: "التسليم والصيانة",
      description: "تسليم المشروع مع خطة صيانة شاملة",
    },
  ]

  const testimonials = [
    {
      name: "أحمد المالكي",
      location: "الرياض",
      rating: 5,
      comment: "خدمة ممتازة وتصميم رائع. حولوا حديقتي إلى جنة خضراء حقيقية.",
    },
    {
      name: "فاطمة السعد",
      location: "الدمام",
      rating: 5,
      comment: "فريق محترف والتزام بالمواعيد. النتيجة فاقت توقعاتي بكثير.",
    },
    {
      name: "محمد العتيبي",
      location: "الرياض",
      rating: 5,
      comment: "أسعار معقولة وجودة عالية. أنصح بهم بشدة لتنسيق الحدائق.",
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
              src="/professional-landscaping-garden-design-riyadh.png"
              alt="تنسيق حدائق احترافي الرياض"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
                تنسيق حدائق احترافي الرياض
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                نحول أحلامك إلى واقع أخضر جميل مع خدمات تصميم حدائق المملكة العربية السعودية المتخصصة في تحويل المساحات
                الخارجية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold px-8 py-4 text-lg rounded-full"
                  asChild
                >
                  <a href="https://whatsform.com/rt2jpf" target="_blank" rel="noopener noreferrer">
                    احصل على تصميم مجاني
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
                  يبدأ من 50 ريال/متر مربع
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                لماذا تختار خدماتنا في تنسيق الحدائق؟
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                نقدم خدمات تنسيق حدائق شاملة تجمع بين الجمال والوظيفة لتحويل مساحتك الخارجية إلى واحة خضراء
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-foreground font-medium">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Before/After Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="text-center">
                <h3 className="font-heading text-2xl font-bold mb-4">قبل التنسيق</h3>
                <img
                  src="/placeholder.svg?height=300&width=500&text=قبل+التنسيق"
                  alt="قبل تنسيق الحديقة"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="font-heading text-2xl font-bold mb-4">بعد التنسيق</h3>
                <img
                  src="/professional-landscaping-garden-design-riyadh.png"
                  alt="بعد تنسيق الحديقة"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">كيف نعمل؟</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                نتبع منهجية علمية ومدروسة لضمان تحقيق أفضل النتائج في تنسيق حديقتك
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">ماذا يقول عملاؤنا؟</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">ابدأ مشروع حديقتك اليوم</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              احصل على استشارة مجانية وتصميم أولي لحديقتك من خبرائنا المتخصصين
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

        {/* Related Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">خدمات أخرى قد تهمك</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <img
                    src="/high-quality-artificial-grass-installation.png"
                    alt="العشب الصناعي"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-heading text-xl font-bold mb-2">العشب الصناعي</h3>
                  <p className="text-muted-foreground mb-4">عشب صناعي عالي الجودة بدون صيانة</p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/services/artificial-grass">
                      اعرف المزيد
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <img
                    src="/smart-irrigation-system-installation.png"
                    alt="شبكات الري"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-heading text-xl font-bold mb-2">شبكات الري</h3>
                  <p className="text-muted-foreground mb-4">أنظمة ري ذكية وموفرة للمياه</p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/services/irrigation">
                      اعرف المزيد
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <img
                    src="/luxury-water-fountains-waterfalls-garden.png"
                    alt="النوافير والشلالات"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-heading text-xl font-bold mb-2">النوافير والشلالات</h3>
                  <p className="text-muted-foreground mb-4">نوافير وشلالات مائية فاخرة</p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/services/fountains">
                      اعرف المزيد
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
