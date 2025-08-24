import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, MessageCircle, Clock, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "اتصل بنا | البيت الأخضر - شركة تنسيق حدائق الرياض",
  description:
    "تواصل مع البيت الأخضر لخدمات تنسيق الحدائق في الرياض والدمام. احصل على استشارة مجانية وعرض سعر لمشروعك.",
  keywords: "اتصل بنا, تواصل معنا, شركة تنسيق حدائق الرياض, استشارة مجانية, عرض سعر",
  openGraph: {
    title: "اتصل بنا | البيت الأخضر",
    description: "تواصل معنا للحصول على أفضل خدمات تنسيق الحدائق",
    type: "website",
  },
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      details: ["+966502394828"],
      action: "tel:+966502394828",
    },
    {
      icon: Mail,
      title: "راسلنا",
      details: ["riyadhgreenhouse@gmail.com"],
      action: "mailto:riyadhgreenhouse@gmail.com",
    },
    {
      icon: MapPin,
      title: "زورنا",
      details: ["شارع الفريان، حي اليمامة", "الرياض، المملكة العربية السعودية", "ص.ب 12675"],
      action: "https://maps.app.goo.gl/CXP24uEB9JTT64EN9",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: ["السبت - الخميس: 8:00 ص - 6:00 م", "الجمعة: مغلق"],
      action: null,
    },
  ]

  const services = [
    "تنسيق الحدائق",
    "العشب الصناعي",
    "العشب الطبيعي",
    "المظلات والسواتر",
    "العشب الجداري",
    "النوافير والشلالات",
    "شبكات الري",
    "أخرى",
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">تواصل معنا</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                نحن هنا لمساعدتك في تحويل حديقتك إلى جنة خضراء. تواصل معنا للحصول على استشارة مجانية
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-xl transition-shadow">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-4">{info.title}</h3>
                      <div className="space-y-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                      {info.action && (
                        <Button variant="outline" className="mt-4 bg-transparent" asChild>
                          <a href={info.action} target={info.action.startsWith("http") ? "_blank" : undefined}>
                            {info.title === "زورنا" ? "عرض على الخريطة" : info.title}
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="p-8">
                  <CardContent className="p-0">
                    <h2 className="font-heading text-3xl font-bold text-foreground mb-6">احصل على عرض سعر مجاني</h2>
                    <p className="text-muted-foreground mb-8">
                      املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة لتقديم عرض سعر مخصص لمشروعك
                    </p>

                    {/* WhatsForm Integration */}
                    <form action="https://whatsform.com/rt2jpf" method="POST" target="_blank" className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            الاسم *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="أدخل اسمك"
                            className="bg-background"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            رقم الاتصال *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="05xxxxxxxx"
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                          الخدمات *
                        </label>
                        <Select name="service" required>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="اختر الخدمة" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          تفاصيل المشروع *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          placeholder="اكتب تفاصيل مشروعك، المساحة المطلوبة، والميزانية المتوقعة..."
                          rows={5}
                          className="bg-background"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold py-4 text-lg rounded-full"
                      >
                        إرسال الطلب عبر واتساب
                      </Button>
                    </form>

                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <p className="text-sm text-muted-foreground text-center">
                        بإرسال هذا النموذج، فإنك توافق على{" "}
                        <a href="/privacy" className="text-primary hover:underline">
                          سياسة الخصوصية
                        </a>{" "}
                        و{" "}
                        <a href="/terms" className="text-primary hover:underline">
                          شروط الخدمة
                        </a>
                        . يمكنك إلغاء الاشتراك في أي وقت.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                {/* Google Maps Embed */}
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-64 bg-gray-200 flex items-center justify-center">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1234567890123!2d46.7749!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDYnMjkuNiJF!5e0!3m2!1sen!2ssa!4v1234567890123"
                        width="100%"
                        height="256"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="موقع البيت الأخضر"
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-4">موقعنا</h3>
                      <p className="text-muted-foreground mb-4">
                        شارع الفريان، حي اليمامة، الرياض، المملكة العربية السعودية
                      </p>
                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <a href="https://maps.app.goo.gl/CXP24uEB9JTT64EN9" target="_blank" rel="noopener noreferrer">
                          <MapPin className="w-4 h-4 ml-2" />
                          فتح في خرائط جوجل
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card className="bg-gradient-to-r from-primary to-accent text-white">
                  <CardContent className="p-8">
                    <h3 className="font-heading text-2xl font-bold mb-4">تحتاج مساعدة فورية؟</h3>
                    <p className="mb-6 opacity-90">تواصل معنا مباشرة عبر الهاتف أو واتساب</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        variant="secondary"
                        className="bg-white text-primary hover:bg-gray-100 font-bold flex-1"
                        asChild
                      >
                        <a href="tel:+966502394828">
                          <Phone className="w-4 h-4 ml-2" />
                          اتصل الآن
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold flex-1 bg-transparent"
                        asChild
                      >
                        <a href="https://wa.me/966502394828" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-4 h-4 ml-2" />
                          واتساب
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-4">لماذا تختارنا؟</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-primary ml-3" />
                        <span className="text-foreground">فريق متخصص ومحترف</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-primary ml-3" />
                        <span className="text-foreground">استجابة سريعة خلال 24 ساعة</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-5 h-5 text-primary ml-3" />
                        <span className="text-foreground">استشارة مجانية</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">الأسئلة الشائعة</h2>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">كم تستغرق مدة تنفيذ المشروع؟</h3>
                  <p className="text-muted-foreground">
                    تختلف المدة حسب نوع وحجم المشروع، عادة من 3-14 يوم حسب الخدمة المطلوبة.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">هل تقدمون ضمان على الأعمال؟</h3>
                  <p className="text-muted-foreground">
                    نعم، نقدم ضمان شامل على جميع أعمالنا يتراوح من سنة إلى 15 سنة حسب نوع الخدمة.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">هل الاستشارة مجانية؟</h3>
                  <p className="text-muted-foreground">
                    نعم، نقدم استشارة مجانية ومعاينة الموقع لجميع العملاء دون أي التزام.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">ما هي مناطق الخدمة؟</h3>
                  <p className="text-muted-foreground">
                    نخدم الرياض والدمام والمناطق المحيطة بها في المملكة العربية السعودية.
                  </p>
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
