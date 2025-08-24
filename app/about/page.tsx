import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Clock, Shield, ArrowLeft, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "من نحن - البيت الأخضر | شركة تنسيق حدائق الرياض",
  description:
    "تعرف على شركة البيت الأخضر، الرائدة في مجال تنسيق الحدائق والمناظر الطبيعية في الرياض والمملكة العربية السعودية منذ 2016",
  keywords: "عن البيت الأخضر, شركة تنسيق حدائق, خبرة تنسيق حدائق, فريق البيت الأخضر, تاريخ الشركة",
}

const teamMembers = [
  {
    name: "م. أحمد السعيد",
    position: "مدير عام ومهندس تنسيق حدائق",
    experience: "12 سنة خبرة",
    image: "/team-ahmed-saeed.png",
    specialization: "تصميم الحدائق الفاخرة والمناظر الطبيعية",
  },
  {
    name: "م. فاطمة الزهراني",
    position: "مهندسة تصميم مائي",
    experience: "8 سنوات خبرة",
    image: "/team-fatima-zahrani.png",
    specialization: "تصميم النوافير والشلالات والأنظمة المائية",
  },
  {
    name: "أ. خالد العتيبي",
    position: "خبير المظلات والسواتر",
    experience: "10 سنوات خبرة",
    image: "/team-khalid-otaibi.png",
    specialization: "تركيب وتصميم المظلات والسواتر العصرية",
  },
  {
    name: "م. سارة المطيري",
    position: "مهندسة أنظمة الري",
    experience: "6 سنوات خبرة",
    image: "/team-sara-mutairi.png",
    specialization: "تصميم وتركيب أنظمة الري الذكية والمستدامة",
  },
]

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
  "أكثر من 150 مشروع مكتمل بنجاح",
  "8 سنوات من الخبرة في السوق السعودي",
  "أكثر من 120 عميل راضٍ عن خدماتنا",
  "شراكات مع أفضل الموردين المحليين والعالميين",
  "فريق من 15 خبير متخصص",
  "حاصلون على شهادات الجودة والسلامة",
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
                شركة البيت الأخضر، الرائدة في مجال تنسيق الحدائق والمناظر الطبيعية في المملكة العربية السعودية منذ عام
                2016
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
                      بدأت رحلة البيت الأخضر في عام 2016 برؤية واضحة: تحويل المساحات الخارجية إلى واحات خضراء جميلة تعكس
                      جمال الطبيعة وتوفر بيئة مريحة ومنعشة للعائلات السعودية.
                    </p>
                    <p>
                      منذ تأسيسنا، نجحنا في تنفيذ أكثر من 150 مشروع متنوع، من الحدائق المنزلية الصغيرة إلى المشاريع
                      التجارية الكبيرة، مما جعلنا الخيار الأول لعملائنا في الرياض والمناطق المجاورة.
                    </p>
                    <p>
                      نفخر بفريقنا المتخصص من المهندسين والفنيين الذين يجمعون بين الخبرة العملية والإبداع في التصميم،
                      مما يضمن تقديم حلول مبتكرة تناسب احتياجات كل عميل.
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

        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">فريق الخبراء</h2>
                <p className="text-lg text-muted-foreground">تعرف على الخبراء الذين يقفون وراء نجاح مشاريعنا</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="font-heading text-lg font-bold mb-2">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.position}</p>
                      <Badge variant="secondary" className="mb-3">
                        {member.experience}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{member.specialization}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">إنجازاتنا</h2>
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                انضم إلى عائلة عملائنا السعداء
              </h2>
              <p className="text-lg text-muted-foreground mb-8">دعنا نحول حديقتك إلى مساحة خضراء جميلة تفخر بها</p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary font-bold px-8 py-4 text-lg rounded-full"
                asChild
              >
                <a href="https://whatsform.com/rt2jpf" target="_blank" rel="noopener noreferrer">
                  احصل على استشارة مجانية
                  <ArrowLeft className="w-5 h-5 mr-2" />
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
