import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import ServicesOverview from "@/components/services-overview"
import WhyChooseUs from "@/components/why-choose-us"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}
