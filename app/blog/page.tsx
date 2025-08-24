import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "مدونة البيت الأخضر - نصائح تنسيق الحدائق والمناظر الطبيعية",
  description:
    "اكتشف أحدث النصائح والأفكار في تنسيق الحدائق، العشب الصناعي، النوافير، والمظلات من خبراء البيت الأخضر في الرياض",
  keywords: "مدونة تنسيق حدائق, نصائح العشب الصناعي, أفكار تصميم حدائق, العناية بالحدائق, مظلات الحدائق",
}

const blogPosts = [
  {
    id: 1,
    title: "دليل شامل لتنسيق الحدائق المنزلية في الرياض",
    slug: "home-garden-design-riyadh-guide",
    excerpt: "تعرف على أفضل الطرق لتصميم وتنسيق حديقة منزلك في الرياض مع مراعاة المناخ الصحراوي والنباتات المناسبة",
    content: "محتوى المقال الكامل...",
    author: "فريق البيت الأخضر",
    date: "2024-01-15",
    category: "تنسيق الحدائق",
    image: "/blog-home-garden-design.png",
    tags: ["تنسيق حدائق", "حدائق منزلية", "الرياض", "تصميم"],
    readTime: "8 دقائق",
  },
  {
    id: 2,
    title: "العشب الصناعي مقابل الطبيعي: أيهما أفضل لحديقتك؟",
    slug: "artificial-vs-natural-grass-comparison",
    excerpt: "مقارنة شاملة بين العشب الصناعي والطبيعي من حيث التكلفة، الصيانة، والمظهر لمساعدتك في اتخاذ القرار الأمثل",
    content: "محتوى المقال الكامل...",
    author: "م. أحمد السعيد",
    date: "2024-01-10",
    category: "العشب",
    image: "/blog-artificial-vs-natural-grass.png",
    tags: ["عشب صناعي", "عشب طبيعي", "مقارنة", "صيانة"],
    readTime: "6 دقائق",
  },
  {
    id: 3,
    title: "أفضل أنواع النوافير والشلالات للحدائق السعودية",
    slug: "best-fountains-waterfalls-saudi-gardens",
    excerpt: "استكشف أجمل تصاميم النوافير والشلالات التي تناسب الحدائق السعودية وتضفي لمسة من الفخامة والهدوء",
    content: "محتوى المقال الكامل...",
    author: "م. فاطمة الزهراني",
    date: "2024-01-05",
    category: "النوافير والشلالات",
    image: "/blog-fountains-waterfalls.png",
    tags: ["نوافير", "شلالات", "تصميم مائي", "فخامة"],
    readTime: "7 دقائق",
  },
  {
    id: 4,
    title: "المظلات والسواتر: دليل الاختيار والتركيب",
    slug: "shades-barriers-selection-installation-guide",
    excerpt: "كل ما تحتاج معرفته عن اختيار وتركيب المظلات والسواتر المناسبة لحديقتك مع أفضل المواد والتصاميم",
    content: "محتوى المقال الكامل...",
    author: "م. خالد العتيبي",
    date: "2023-12-28",
    category: "المظلات والسواتر",
    image: "/blog-shades-barriers.png",
    tags: ["مظلات", "سواتر", "تركيب", "حماية"],
    readTime: "5 دقائق",
  },
  {
    id: 5,
    title: "أنظمة الري الذكية: توفير المياه وضمان نمو النباتات",
    slug: "smart-irrigation-systems-water-saving",
    excerpt: "تعرف على أحدث أنظمة الري الذكية التي توفر المياه وتضمن نمو صحي للنباتات في المناخ الصحراوي",
    content: "محتوى المقال الكامل...",
    author: "م. سارة المطيري",
    date: "2023-12-20",
    category: "أنظمة الري",
    image: "/blog-smart-irrigation.png",
    tags: ["ري ذكي", "توفير مياه", "تقنية", "استدامة"],
    readTime: "9 دقائق",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                مدونة البيت الأخضر
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                اكتشف أحدث النصائح والأفكار في عالم تنسيق الحدائق والمناظر الطبيعية من خبرائنا المتخصصين
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["تنسيق حدائق", "عشب صناعي", "نوافير", "مظلات", "أنظمة ري"].map((tag) => (
                  <Badge key={tag} variant="secondary" className="px-4 py-2">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-white">{post.category}</Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString("ar-SA")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>

                      <Button variant="ghost" size="sm" asChild className="group/btn">
                        <Link href={`/blog/${post.slug}`}>
                          اقرأ المزيد
                          <ArrowRight className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="bg-gradient-to-r from-primary to-accent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">اشترك في نشرتنا الإخبارية</h2>
              <p className="text-lg mb-8 opacity-90">احصل على أحدث النصائح والعروض الخاصة في تنسيق الحدائق</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder:text-gray-500"
                />
                <Button className="bg-white text-primary hover:bg-gray-100 font-bold px-6 py-3">اشترك الآن</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
