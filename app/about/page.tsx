import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Shield, ArrowLeft, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "من نحن - البيت الأخضر | شركة تنسيق حدائق الرياض",
  description:
    "تعرف على شركة البيت الأخضر، الشركة الناشئة المتخصصة في تنسيق الحدائق والمناظر الطبيعية في الرياض والمملكة العربية السعودية",
  keywords: "عن البيت الأخضر, شركة تنسيق حدائق, شركة ناشئة, تنسيق حدائق الرياض",
}

const values = [
  {
    icon: Award,
    title: "الجودة العالية",
    description: "نستخدم أفضل المواد والتقنيات الحديثة في جميع مشاريعنا",
  },
  {
    icon: Users,
    title: "فريق محترف",
    description: "فريق من المهندسين والفنيين المتخصصين ذوي الخبرة الواسعة",
  },
  {
    icon: Clock,
    title: "الالتزام بالمواعيد",
    description: "نلتزم بتسليم المشاريع في الوقت المحدد دون تأخير",
  },
  {
    icon: Shield,
    title: "ضمان الجودة",
    description: "نقدم ضمان شامل على جميع أعمالنا وخدمات ما بعد البيع",
  },
]

const achievements = [
  "شركة ناشئة متخصصة في تنسيق الحدائق",
  "رؤية مبتكرة لتحويل المساحات الخضراء",
  "التزام بأحدث التقنيات والمعايير العالمية",
  "شراكات مع أفضل الموردين المحليين والعالميين",
  "فريق شاب ومتحمس للإبداع",
  "خدمة عملاء متميزة ومتاحة على مدار الساعة",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">من نحن</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                شركة البيت الأخضر، شركة ناشئة متخصصة في تنسيق الحدائق والمناظر الطبيعية في المملكة العربية السعودية
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">قصتنا</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      البيت الأخضر هي شركة ناشئة تأسست برؤية واضحة: إحداث نقلة نوعية في مجال تنسيق الحدائق والمناظر
                      الطبيعية في المملكة العربية السعودية من خلال الجمع بين الإبداع والتقنيات الحديثة.
                    </p>
                    <p>
                      نحن نؤمن بأن كل مساحة خضراء لها إمكانيات لا محدودة، ونسعى لتحويل هذه الإمكانيات إلى واقع جميل يعكس
                      شخصية أصحابها ويوفر بيئة مريحة ومنعشة للعائلات السعودية.
                    </p>
                    <p>
                      كشركة ناشئة، نتميز بالمرونة والسرعة في التنفيذ، ونحرص على تقديم حلول مبتكرة ومخصصة تناسب احتياجات
                      كل عميل، مع الالتزام بأعلى معايير الجودة والاحترافية.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/about-company-story.png"
                    alt="قصة شركة البيت الأخضر"
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">قيمنا ومبادئنا</h2>
                <p className="text-lg text-muted-foreground">المبادئ التي نؤمن بها وتوجه عملنا اليومي</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">رؤيتنا</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    أن نكون الشركة الرائدة في مجال تنسيق الحدائق والمناظر الطبيعية في المملكة العربية السعودية، ونساهم
                    في تحويل المساحات الخضراء إلى واحات جميلة تعكس جمال الطبيعة وتوفر بيئة صحية ومستدامة.
                  </p>
                </Card>
                <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">مهمتنا</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    تقديم خدمات تنسيق الحدائق والمناظر الطبيعية بأعلى معايير الجودة والاحترافية، مع الاستفادة من أحدث
                    التقنيات والممارسات المستدامة لتحقيق رضا عملائنا وتجاوز توقعاتهم.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">ما يميزنا</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 text-right">
                    <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                    <span className="text-lg">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">ابدأ رحلتك معنا اليوم</h2>
              <p className="text-lg text-muted-foreground mb-8">دعنا نحول حديقتك إلى مساحة خضراء جميلة تفخر بها</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary font-bold px-8 py-4 text-lg rounded-full"
                  asChild
                >
                  <a
                    href="https://wa.me/966502394828?text=مرحبا، أريد عرض سعر مجاني لخدمات تنسيق الحدائق"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    احصل على استشارة مجانية
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-bold px-8 py-4 text-lg rounded-full bg-transparent"
                  asChild
                >
                  <a href="tel:+966502394828">اتصل بنا: 966502394828+</a>
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
