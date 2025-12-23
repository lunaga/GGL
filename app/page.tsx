import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { BrandsSection } from "@/components/brands-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { GallerySection } from "@/components/gallery-section"
import { PromotionSection } from "@/components/promotion-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PromotionSection />
      <GallerySection />
      <BrandsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
