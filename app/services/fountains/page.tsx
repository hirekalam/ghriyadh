import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, ArrowLeft, Droplets, Zap, Shield, Heart } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "تصميم وتنفيذ النوافير والشلالات في الرياض | البيت الأخضر",
  description:
    "خدمات تصميم وتنفيذ النوافير والشلالات المائية في الرياض. نوافير حدائق، شلالات صناعية، ونوافير داخلية بأعلى معايير الجودة",
  keywords: "نوافير الرياض, شلالات مائية, نوافير حدائق, شلالات صناعية, تصميم نوافير, نوافير منزلية الرياض",
}

const features = [
  { icon: Droplets, title: "تصاميم مائية متنوعة", description: "نوافير وشلالات بتصاميم عصرية وكلاسيكية" },
  { icon: Zap, title: "أنظمة ضخ متطورة", description: "مضخات عالية الكفاءة وموفرة للطاقة" },
  { icon: Shield, title: "مواد عالية الجودة", description: "خامات مقاومة للتآكل والعوامل الجوية" },
  { icon: Heart, title: "تأثير مهدئ", description: "صوت الماء المتدفق يخلق أجواء هادئة ومريحة" },
]

const types = [
  {
    title: "نوافير الحدائق الخارجية",
    description: "نوافير كبيرة ومتوسطة للحدائق والمساحات الخارجية",
    features: ["مقاومة للعوامل الجوية", "إضاءة LED ملونة", "أحجام متنوعة", "تحكم في قوة التدفق"],
  },
  {
    title: "الشلالات الصناعية",
    description: "شلالات طبيعية المظهر بتصاميم صخرية أو حجرية",
    features: ["تصميم طبيعي", "أحجار طبيعية", "نباتات مائية", "إضاءة خفية"],
  },
  {
    title: "النوافير الداخلية",
    description: "نوافير صغيرة ومتوسطة للمساحات الداخلية",
    features: ["تصاميم أنيقة", "صوت هادئ", "سهولة الصيانة", "توفير الرطوبة"],
  },
  {
    title: "نوافير الجدران",
    description: "نوافير معلقة على الجدران لتوفير المساحة",
    features: ["توفير المساحة", "تصاميم عصرية", "سهولة التركيب", "تأثير بصري مميز"],
  },
]

const benefits = [
  "تحسين جودة الهواء وزيادة الرطوبة",
  "خلق أجواء هادئة ومريحة",
  "إضافة قيمة جمالية للمكان",
  "تقليل الضوضاء الخارجية",
  "توفير بيئة مناسبة للاسترخاء",
  "جذب الطيور والفراشات للحديقة",
]

export default function FountainsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary text-white">خدمات مائية متخصصة</Badge>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                  النوافير والشلالات المائية
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  أضف لمسة من الجمال والهدوء لمساحتك مع تصاميم النوافير والشلالات المائية الفاخرة في الرياض
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full"
                    asChild
                  >
                    <a href="https://whatsform.com/rt2jpf" target="_blank" rel="noopener noreferrer">
                      احصل على تصميم مجاني
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
                  src="/elegant-water-fountain-and-waterfall-in-luxury-gar.png"
                  alt="النوافير والشلالات المائية"
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
                مميزات نوافيرنا وشلالاتنا
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                نقدم أفضل الحلول المائية بأعلى معايير الجودة والتصميم
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

        {/* Types Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                أنواع النوافير والشلالات
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                مجموعة متنوعة من التصاميم المائية لتناسب جميع المساحات والأذواق
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {types.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-primary mb-3">{type.title}</h3>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <div className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
                  فوائد النوافير والشلالات
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
                  src="/fountain-benefits-relaxation-garden.png"
                  alt="فوائد النوافير والشلالات"
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">خطوات التنفيذ</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "الاستشارة والتصميم", description: "زيارة الموقع ووضع التصميم المناسب" },
                { step: "02", title: "اختيار المواد", description: "اختيار أفضل الخامات والمعدات" },
                { step: "03", title: "التنفيذ", description: "تركيب النافورة أو الشلال بدقة عالية" },
                { step: "04", title: "التشغيل والضمان", description: "تشغيل النظام وتقديم الضمان" },
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
                  name: "عبدالله الشمري",
                  location: "الرياض - حي الملقا",
                  rating: 5,
                  comment: "النافورة في حديقتي أصبحت مركز الجذب. صوت الماء مهدئ جداً والتصميم رائع",
                },
                {
                  name: "نورا العتيبي",
                  location: "الرياض - حي النرجس",
                  rating: 5,
                  comment: "الشلال الصناعي في الاستراحة يبدو طبيعي تماماً. عمل احترافي ممتاز",
                },
                {
                  name: "سعد المطيري",
                  location: "الرياض - حي العليا",
                  rating: 5,
                  comment: "النافورة الداخلية في المكتب غيرت الأجواء بالكامل. أنصح بالتعامل معهم",
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">جاهز لإضافة لمسة مائية ساحرة؟</h2>
              <p className="text-lg mb-8 opacity-90">احصل على استشارة مجانية وتصميم مخصص لنافورة أو شلال أحلامك</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-full"
                  asChild
                >
                  <a href="https://whatsform.com/rt2jpf" target="_blank" rel="noopener noreferrer">
                    احجز تصميم مجاني
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
