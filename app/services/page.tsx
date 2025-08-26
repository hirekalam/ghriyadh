import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "خدمات تنسيق الحدائق في الرياض | البيت الأخضر",
  description:
    "خدمات شاملة لتنسيق الحدائق في الرياض والدمام. عشب صناعي وطبيعي، مظلات وسواتر، نوافير وشلالات، وأنظمة الري الذكية.",
  keywords: "تنسيق حدائق الرياض, خدمات الحدائق, عشب صناعي, عشب طبيعي, مظلات وسواتر, نوافير وشلالات, شبكات الري",
  openGraph: {
    title: "خدمات تنسيق الحدائق في الرياض | البيت الأخضر",
    description: "خدمات شاملة لتنسيق الحدائق في الرياض والدمام",
    type: "website",
  },
}

export default function ServicesPage() {
  const services = [
    {
      title: "تنسيق الحدائق",
      description: "تصميم وتنفيذ حدائق فاخرة بأحدث التقنيات والتصاميم العصرية التي تناسب المناخ السعودي",
      image: "/professional-landscaping-garden-design-riyadh.png",
      href: "/services/landscaping",
      features: ["تصميم مخصص حسب المساحة", "نباتات محلية مقاومة للحرارة", "خدمة صيانة دورية", "ضمان سنة كاملة"],
      price: "يبدأ من 50 ريال/متر مربع",
      duration: "7-14 يوم",
    },
    {
      title: "العشب الصناعي",
      description: "تركيب عشب صناعي عالي الجودة مقاوم للعوامل الجوية ويوفر مظهراً طبيعياً دون الحاجة للصيانة",
      image: "/high-quality-artificial-grass-installation.png",
      href: "/services/artificial-grass",
      features: [
        "مقاوم للأشعة فوق البنفسجية",
        "توفير 70% من استهلاك المياه",
        "عمر افتراضي 15 سنة",
        "آمن للأطفال والحيوانات",
      ],
      price: "يبدأ من 35 ريال/متر مربع",
      duration: "3-5 أيام",
    },
    {
      title: "العشب الطبيعي",
      description: "زراعة وتركيب العشب الطبيعي الأخضر مع نظام ري متطور يضمن نمواً صحياً ومظهراً جميلاً",
      image: "/natural-grass-lawn-installation-saudi-arabia.png",
      href: "/services/natural-grass",
      features: ["أصناف مقاومة للحرارة", "نظام ري بالتنقيط", "تسميد وتغذية متوازنة", "خدمة قص وتشذيب"],
      price: "يبدأ من 25 ريال/متر مربع",
      duration: "5-10 أيام",
    },
    {
      title: "المظلات والسواتر",
      description: "تركيب مظلات وسواتر عصرية بمواد عالية الجودة توفر الحماية من الشمس والخصوصية المطلوبة",
      image: "/modern-garden-shades-pergolas-barriers.png",
      href: "/services/shades-barriers",
      features: [
        "مواد مقاومة للصدأ والتآكل",
        "تصاميم عصرية ومتنوعة",
        "حماية من الأشعة الضارة",
        "سهولة التركيب والصيانة",
      ],
      price: "يبدأ من 80 ريال/متر مربع",
      duration: "2-4 أيام",
    },
    {
      title: "العشب الجداري",
      description: "تصميم وتنفيذ حدائق عمودية وعشب جداري يحول الجدران إلى مساحات خضراء مذهلة وعملية",
      image: "/vertical-garden-wall-grass-installation.png",
      href: "/services/wall-grass",
      features: ["تصميم عمودي مبتكر", "نظام ري مدمج", "تنقية الهواء طبيعياً", "توفير المساحة الأفقية"],
      price: "يبدأ من 120 ريال/متر مربع",
      duration: "3-7 أيام",
    },
    {
      title: "النوافير والشلالات",
      description: "تصميم وتنفيذ نوافير وشلالات مائية فاخرة تضفي أجواء من الهدوء والجمال على حديقتك",
      image: "/luxury-water-fountains-waterfalls-garden.png",
      href: "/services/fountains",
      features: ["تصاميم مخصصة وفريدة", "أنظمة إضاءة LED ملونة", "مضخات صامتة وموفرة", "مواد طبيعية فاخرة"],
      price: "يبدأ من 1500 ريال",
      duration: "5-10 أيام",
    },
    {
      title: "شبكات الري",
      description: "تركيب أنظمة ري ذكية وحديثة تضمن توزيع المياه بكفاءة عالية وتوفير في الاستهلاك",
      image: "/smart-irrigation-system-installation.png",
      href: "/services/irrigation",
      features: ["نظام تحكم ذكي", "رشاشات عالية الكفاءة", "حساسات رطوبة التربة", "توفير 40% من المياه"],
      price: "يبدأ من 15 ريال/متر مربع",
      duration: "2-5 أيام",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/beautiful-landscaped-garden-with-artificial-grass-.png"
              alt="خدمات تنسيق الحدائق"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
                خدمات تنسيق الحدائق في الرياض
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                نقدم مجموعة شاملة من خدمات تنسيق الحدائق والمساحات الخضراء بأعلى معايير الجودة والاحترافية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold px-8 py-4 text-lg rounded-full"
                  asChild
                >
                  <a href="https://wa.me/966502394828?text=مرحبا، أريد عرض سعر مجاني لخدمات تنسيق الحدائق" target="_blank" rel="noopener noreferrer">
                    احصل على عرض سعر مجاني
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 text-lg rounded-full bg-transparent"
                  asChild
                >
                  <a href="tel:+966502394828">اتصل بنا الآن</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={service.href}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-card border-0 overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 relative overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {service.duration}
                      </div>
                    </div>

                    <CardContent className="md:w-1/2 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>

                        <div className="mb-4">
                          <h4 className="font-semibold text-foreground mb-2">المميزات:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-center text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary ml-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="text-lg font-bold text-primary mb-4">{service.price}</div>
                      </div>

                      <Button
                        className="w-full justify-between group-hover:bg-primary group-hover:text-white transition-all duration-300 bg-transparent"
                        variant="outline"
                        asChild
                      >
                        <Link href={service.href}>
                          اعرف المزيد
                          <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">جاهز لتحويل حديقتك إلى جنة خضراء؟</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              تواصل معنا اليوم واحصل على استشارة مجانية من خبرائنا في تنسيق الحدائق
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-full"
                asChild
              >
                <a href="https://wa.me/966502394828?text=مرحبا، أريد عرض سعر مجاني لخدمات تنسيق الحدائق" target="_blank" rel="noopener noreferrer">
                  احجز استشارة مجانية
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 text-lg rounded-full bg-transparent"
                asChild
              >
                <Link href="/projects">شاهد أعمالنا السابقة</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
