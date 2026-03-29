import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problems } from "@/components/problems"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { Team } from "@/components/team"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <Features />
      <HowItWorks />
      <Pricing />
      <Team />
      <CTA />
      <Footer />
    </main>
  )
}
