"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { 
  MapPin, 
  Star, 
  Clock, 
  Filter, 
  Search,
  Bike,
  Zap,
  Mountain,
  CheckCircle2,
  Loader2
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/auth-context"

const bikes = [
  {
    id: 1,
    name: "Campus Cruiser",
    type: "City Bike",
    icon: Bike,
    location: "Main Library",
    distance: "0.2 km",
    rating: 4.8,
    reviews: 124,
    priceHourly: 15,
    available: true,
    features: ["Basket", "Bell", "Light"]
  },
  {
    id: 2,
    name: "Speed Runner",
    type: "Road Bike",
    icon: Zap,
    location: "Engineering Block",
    distance: "0.5 km",
    rating: 4.9,
    reviews: 89,
    priceHourly: 20,
    available: true,
    features: ["Gears", "Light", "Lock"]
  },
  {
    id: 3,
    name: "Trail Blazer",
    type: "Mountain Bike",
    icon: Mountain,
    location: "Sports Complex",
    distance: "0.8 km",
    rating: 4.7,
    reviews: 56,
    priceHourly: 25,
    available: true,
    features: ["Suspension", "Gears", "Bell"]
  },
  {
    id: 4,
    name: "Eco Glider",
    type: "City Bike",
    icon: Bike,
    location: "Student Center",
    distance: "0.3 km",
    rating: 4.6,
    reviews: 201,
    priceHourly: 12,
    available: false,
    features: ["Basket", "Light"]
  },
  {
    id: 5,
    name: "Swift Rider",
    type: "Road Bike",
    icon: Zap,
    location: "Science Block",
    distance: "0.4 km",
    rating: 4.8,
    reviews: 145,
    priceHourly: 18,
    available: true,
    features: ["Gears", "Lock", "Bell"]
  },
  {
    id: 6,
    name: "Adventure Pro",
    type: "Mountain Bike",
    icon: Mountain,
    location: "Admin Building",
    distance: "0.6 km",
    rating: 4.5,
    reviews: 78,
    priceHourly: 22,
    available: true,
    features: ["Suspension", "Gears", "Light"]
  }
]

const filters = ["All", "City Bike", "Road Bike", "Mountain Bike"]

type Bike = typeof bikes[0]

export function BikeListings() {
  const { user } = useAuth()
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null)
  const [isRenting, setIsRenting] = useState(false)
  const [rentalSuccess, setRentalSuccess] = useState(false)

  const filteredBikes = bikes.filter((bike) => {
    const matchesFilter = activeFilter === "All" || bike.type === activeFilter
    const matchesSearch = bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const handleRentClick = (bike: Bike) => {
    if (!user) {
      router.push("/login")
      return
    }
    setSelectedBike(bike)
  }

  const handleConfirmRental = async () => {
    setIsRenting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsRenting(false)
    setRentalSuccess(true)
  }

  const handleCloseDialog = () => {
    setSelectedBike(null)
    setRentalSuccess(false)
  }

  return (
    <section className="pt-28 pb-20 lg:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Find a Bike
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Browse available bikes near you and start riding in seconds.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search bikes or locations..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Filter className="h-4 w-4 text-muted-foreground" />
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="mt-6 text-sm text-muted-foreground">
          Showing {filteredBikes.length} bikes
        </p>

        {/* Bike Grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBikes.map((bike) => (
            <div
              key={bike.id}
              className={cn(
                "group relative rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg",
                !bike.available && "opacity-60"
              )}
            >
              {/* Availability Badge */}
              <span className={cn(
                "absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-medium",
                bike.available 
                  ? "bg-primary/10 text-primary" 
                  : "bg-destructive/10 text-destructive"
              )}>
                {bike.available ? "Available" : "In Use"}
              </span>

              {/* Bike Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary">
                <bike.icon className="h-8 w-8 text-primary" />
              </div>

              {/* Info */}
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {bike.name}
              </h3>
              <p className="text-sm text-muted-foreground">{bike.type}</p>

              {/* Location */}
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{bike.location}</span>
                <span className="text-primary">&bull; {bike.distance}</span>
              </div>

              {/* Rating */}
              <div className="mt-2 flex items-center gap-2">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="text-sm font-medium text-foreground">{bike.rating}</span>
                <span className="text-sm text-muted-foreground">({bike.reviews} reviews)</span>
              </div>

              {/* Features */}
              <div className="mt-4 flex flex-wrap gap-2">
                {bike.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Price & Action */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-foreground">&#8377;{bike.priceHourly}</span>
                  <span className="text-sm text-muted-foreground">/hour</span>
                </div>
                <Button 
                  size="sm" 
                  disabled={!bike.available}
                  className="gap-2"
                  onClick={() => handleRentClick(bike)}
                >
                  <Clock className="h-4 w-4" />
                  {bike.available ? "Rent Now" : "Unavailable"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBikes.length === 0 && (
          <div className="mt-16 text-center">
            <Bike className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">No bikes found</h3>
            <p className="mt-2 text-muted-foreground">
              Try adjusting your filters or search query.
            </p>
          </div>
        )}
      </div>

      {/* Rental Confirmation Dialog */}
      <Dialog open={selectedBike !== null} onOpenChange={(open) => !open && handleCloseDialog()}>
        <DialogContent className="sm:max-w-md">
          {!rentalSuccess ? (
            <>
              <DialogHeader>
                <DialogTitle>Confirm Rental</DialogTitle>
                <DialogDescription>
                  You are about to rent the following bike:
                </DialogDescription>
              </DialogHeader>
              
              {selectedBike && (
                <div className="rounded-lg border border-border bg-secondary/50 p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <selectedBike.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{selectedBike.name}</h4>
                      <p className="text-sm text-muted-foreground">{selectedBike.type}</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">{selectedBike.location}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Price</p>
                      <p className="font-medium text-foreground">&#8377;{selectedBike.priceHourly}/hour</p>
                    </div>
                  </div>
                </div>
              )}

              <DialogFooter className="gap-2 sm:gap-0">
                <Button variant="outline" onClick={handleCloseDialog} disabled={isRenting}>
                  Cancel
                </Button>
                <Button onClick={handleConfirmRental} disabled={isRenting}>
                  {isRenting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Confirm Rental"
                  )}
                </Button>
              </DialogFooter>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center py-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">Rental Confirmed!</h3>
                <p className="mt-2 text-muted-foreground">
                  Your bike is ready for pickup at {selectedBike?.location}.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Unlock code: <span className="font-mono font-bold text-primary">4829</span>
                </p>
              </div>
              <DialogFooter>
                <Button className="w-full" onClick={handleCloseDialog}>
                  Done
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
