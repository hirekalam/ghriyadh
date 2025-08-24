import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowRight, Share2, ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

// This would typically come from a database or CMS
const blogPosts = {
  "home-garden-design-riyadh-guide": {
    id: 1,
    title: "دليل شامل لتنسيق الحدائق المنزلية في الرياض",
    excerpt: "تعرف على أفضل الطرق لتصميم وتنسيق حديقة منزلك في الرياض مع مراعاة المناخ الصحراوي والنباتات المناسبة",
    author: "فريق البيت الأخضر",
    date: "2024-01-15",
    category: "تنسيق الحدائق",
    image: "/blog-home-garden-design.png",
    tags: ["تنسيق حدائق", "حدائق منزلية", "الرياض", "تصميم"],
    readTime: "8 دقائق",
    content: `
      <h2>مقدمة عن تنسيق الحدائق في الرياض</h2>
      <p>تنسيق الحدائق في الرياض يتطلب فهماً عميقاً للمناخ الصحراوي والظروف البيئية الخاصة بالمنطقة. في هذا الدليل الشامل، سنستكشف أفضل الممارسات لإنشاء حديقة منزلية جميلة ومستدامة.</p>
      
      <h3>اختيار النباتات المناسبة للمناخ الصحراوي</h3>
      <p>عند تصميم حديقة في الرياض، من المهم اختيار النباتات التي تتحمل الحرارة العالية وقلة المياه. النباتات المحلية مثل النخيل والصبار تعتبر خيارات ممتازة.</p>
      
      <h3>تصميم أنظمة الري الفعالة</h3>
      <p>نظام الري بالتنقيط هو الأكثر فعالية في المناخ الصحراوي، حيث يوفر المياه ويضمن وصولها مباشرة إلى جذور النباتات.</p>
      
      <h3>استخدام المواد الطبيعية في التصميم</h3>
      <p>الحجر الطبيعي والرمل المحلي يضفيان طابعاً أصيلاً على الحديقة ويتناسبان مع البيئة المحيطة.</p>
      
      <h3>إنشاء مناطق ظليلة</h3>
      <p>المظلات والبرجولات ضرورية لإنشاء مساحات مريحة يمكن الاستمتاع بها حتى في أوقات الحر الشديد.</p>
      
      <h3>الصيانة والعناية المستمرة</h3>
      <p>الحديقة الناجحة تحتاج إلى صيانة منتظمة، خاصة في فصل الصيف حيث تزداد الحاجة للري والعناية بالنباتات.</p>
    `,
  },
  "artificial-vs-natural-grass-comparison": {
    id: 2,
    title: "العشب الصناعي مقابل الطبيعي: أيهما أفضل لحديقتك؟",
    excerpt: "مقارنة شاملة بين العشب الصناعي والطبيعي من حيث التكلفة، الصيانة، والمظهر لمساعدتك في اتخاذ القرار الأمثل",
    author: "م. أحمد السعيد",
    date: "2024-01-10",
    category: "العشب",
    image: "/blog-artificial-vs-natural-grass.png",
    tags: ["عشب صناعي", "عشب طبيعي", "مقارنة", "صيانة"],
    readTime: "6 دقائق",
    content: `
      <h2>مقدمة حول أنواع العشب</h2>
      <p>اختيار نوع العشب المناسب لحديقتك قرار مهم يؤثر على المظهر العام والتكلفة والصيانة. دعنا نقارن بين الخيارين الرئيسيين.</p>
      
      <h3>العشب الطبيعي: المزايا والعيوب</h3>
      <h4>المزايا:</h4>
      <ul>
        <li>مظهر طبيعي 100%</li>
        <li>يساعد في تنقية الهواء</li>
        <li>يوفر برودة طبيعية</li>
        <li>صديق للبيئة</li>
      </ul>
      
      <h4>العيوب:</h4>
      <ul>
        <li>يحتاج ري مستمر</li>
        <li>صيانة دورية (قص، تسميد)</li>
        <li>قد يتأثر بالآفات</li>
        <li>تكلفة صيانة عالية</li>
      </ul>
      
      <h3>العشب الصناعي: المزايا والعيوب</h3>
      <h4>المزايا:</h4>
      <ul>
        <li>لا يحتاج ري أو قص</li>
        <li>مظهر أخضر دائم</li>
        <li>مقاوم للآفات</li>
        <li>توفير في فواتير المياه</li>
      </ul>
      
      <h4>العيوب:</h4>
      <ul>
        <li>تكلفة تركيب عالية</li>
        <li>قد يسخن في الصيف</li>
        <li>غير صديق للبيئة تماماً</li>
        <li>عمر افتراضي محدود</li>
      </ul>
      
      <h3>أيهما أفضل لمناخ الرياض؟</h3>
      <p>في مناخ الرياض الصحراوي، العشب الصناعي عالي الجودة قد يكون الخيار الأمثل نظراً لتوفير المياه وقلة الصيانة المطلوبة.</p>
    `,
  },
  // Add other blog posts...
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "المقال غير موجود - مدونة البيت الأخضر",
    }
  }

  return {
    title: `${post.title} - مدونة البيت الأخضر`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link href="/" className="hover:text-primary">
                  الرئيسية
                </Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-primary">
                  المدونة
                </Link>
                <span>/</span>
                <span className="text-primary">{post.title}</span>
              </nav>

              {/* Post Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge className="bg-primary text-white">{post.category}</Badge>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString("ar-SA")}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">{post.excerpt}</p>

              {/* Share Buttons */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">شارك المقال:</span>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 ml-2" />
                  مشاركة
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div
                className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-heading prose-p:leading-relaxed prose-ul:leading-relaxed prose-li:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-heading text-lg font-semibold mb-4">الكلمات المفتاحية:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">هل تحتاج مساعدة في تنسيق حديقتك؟</h2>
              <p className="text-lg mb-8 opacity-90">فريقنا من الخبراء جاهز لتحويل حديقتك إلى واحة خضراء جميلة</p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-full"
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

        {/* Back to Blog */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  <ArrowRight className="w-4 h-4 ml-2" />
                  العودة إلى المدونة
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
