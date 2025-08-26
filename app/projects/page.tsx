import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Eye, ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "معرض مشاريعنا - البيت الأخضر | أعمال تنسيق الحدائق في الرياض",
  description:
    "استكشف مجموعة من أفضل مشاريع تنسيق الحدائق التي نفذتها شركة البيت الأخضر في الرياض والمملكة العربية السعودية",
  keywords: "مشاريع تنسيق حدائق, أعمال البيت الأخضر, حدائق الرياض, مشاريع العشب الصناعي, نوافير وشلالات",
}

const projects = [
  {
    id: 1,
    title: "فيلا الأمير - حديقة فاخرة بالعشب الصناعي",
    location: "الرياض - حي الملقا",
    date: "يناير 2024",
    category: "حدائق فاخرة",
    image: "/project-luxury-villa-garden.png",
    images: ["/project-luxury-villa-1.png", "/project-luxury-villa-2.png", "/project-luxury-villa-3.png"],
    description: "تصميم وتنفيذ حديقة فاخرة بمساحة 500 متر مربع تشمل عشب صناعي عالي الجودة، نوافير مائية، ومظلات عصرية",
    features: ["عشب صناعي", "نوافير مائية", "مظلات", "إضاءة LED", "نظام ري"],
  },
  {
    id: 2,
    title: "مجمع سكني - تنسيق المساحات الخضراء",
    location: "الرياض - حي النرجس",
    date: "ديسمبر 2023",
    category: "مشاريع تجارية",
    image: "/project-residential-complex.png",
    images: ["/project-residential-1.png", "/project-residential-2.png", "/project-residential-3.png"],
    description: "تنسيق المساحات الخضراء لمجمع سكني بمساحة 2000 متر مربع مع مناطق لعب للأطفال ومسارات للمشي",
    features: ["عشب طبيعي", "مناطق لعب", "مسارات مشي", "أشجار ظليلة", "مقاعد حدائق"],
  },
  {
    id: 3,
    title: "استراحة العائلة - شلالات ونوافير طبيعية",
    location: "الرياض - طريق الملك عبدالعزيز",
    date: "نوفمبر 2023",
    category: "استراحات",
    image: "/project-family-resort.png",
    images: ["/project-resort-1.png", "/project-resort-2.png", "/project-resort-3.png"],
    description: "إنشاء منطقة ترفيهية مع شلالات طبيعية ونوافير مائية في استراحة عائلية بمساحة 800 متر مربع",
    features: ["شلالات طبيعية", "نوافير", "جلسات خارجية", "إضاءة ملونة", "نباتات استوائية"],
  },
  {
    id: 4,
    title: "مكتب إداري - حديقة عمودية وعشب جداري",
    location: "الرياض - حي العليا",
    date: "أكتوبر 2023",
    category: "مشاريع تجارية",
    image: "/project-office-vertical-garden.png",
    images: ["/project-office-1.png", "/project-office-2.png", "/project-office-3.png"],
    description: "تصميم حديقة عمودية وعشب جداري لمبنى إداري لإضافة لمسة خضراء للمساحات الداخلية والخارجية",
    features: ["حدائق عمودية", "عشب جداري", "نظام ري تلقائي", "نباتات داخلية", "تصميم عصري"],
  },
  {
    id: 5,
    title: "فيلا العائلة - مظلات وسواتر عصرية",
    location: "الرياض - حي الياسمين",
    date: "سبتمبر 2023",
    category: "حدائق منزلية",
    image: "/project-family-villa-shades.png",
    images: ["/project-villa-shades-1.png", "/project-villa-shades-2.png", "/project-villa-shades-3.png"],
    description: "تركيب مظلات وسواتر عصرية مع تنسيق حديقة منزلية بعشب صناعي ونباتات زينة",
    features: ["مظلات عصرية", "سواتر", "عشب صناعي", "نباتات زينة", "جلسات خارجية"],
  },
  {
    id: 6,
    title: "مطعم الحديقة - تصميم مساحات خارجية",
    location: "الرياض - حي الصحافة",
    date: "أغسطس 2023",
    category: "مشاريع تجارية",
    image: "/project-restaurant-outdoor.png",
    images: ["/project-restaurant-1.png", "/project-restaurant-2.png", "/project-restaurant-3.png"],
    description: "تصميم وتنفيذ مساحات خارجية لمطعم مع مظلات، نوافير، وتنسيق نباتات لخلق أجواء مريحة للزبائن",
    features: ["مظلات مطاعم", "نوافير صغيرة", "نباتات زينة", "إضاءة مميزة", "أرضيات حجرية"],
  },
]

const categories = ["الكل", "حدائق فاخرة", "مشاريع تجارية", "استراحات", "حدائق منزلية"]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                معرض مشاريعنا
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                استكشف مجموعة من أفضل مشاريع تنسيق الحدائق والمناظر الطبيعية التي نفذناها بأعلى معايير الجودة والإبداع
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.slice(1).map((category) => (
                  <Badge key={category} variant="secondary" className="px-4 py-2">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">مشروع مكتمل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8</div>
                <div className="text-muted-foreground">سنوات خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">120+</div>
                <div className="text-muted-foreground">عميل سعيد</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">خبير متخصص</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-white">{project.category}</Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Button
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-primary hover:bg-gray-100"
                      >
                        <Eye className="w-4 h-4 ml-2" />
                        عرض التفاصيل
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                    </div>

                    <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {project.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.features.length - 3} المزيد
                        </Badge>
                      )}
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">هل أعجبك ما رأيت؟</h2>
              <p className="text-lg mb-8 opacity-90">دعنا نحول حديقتك إلى تحفة فنية مثل هذه المشاريع الرائعة</p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-full"
                asChild
              >
                <a href="https://wa.me/966502394828?text=مرحبا، أريد عرض سعر مجاني لخدمات تنسيق الحدائق" target="_blank" rel="noopener noreferrer">
                  ابدأ مشروعك الآن
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
