import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedShows } from "@/components/featured-shows"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { InfoSection } from "@/components/info-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedShows />
      <AboutSection />
      <GallerySection />
      <InfoSection />
      <Footer />
    </main>
  )
}
