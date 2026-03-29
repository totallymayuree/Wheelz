import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BikeListings } from "@/components/bike-listings"

export default function BikesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BikeListings />
      <Footer />
    </main>
  )
}
