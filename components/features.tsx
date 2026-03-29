import { 
  Smartphone, 
  Clock, 
  MapPin, 
  Shield, 
  Leaf, 
  Wallet 
} from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "One-Tap Rentals",
    description: "Rent a bike instantly with just a single tap. No complicated processes, no waiting time."
  },
  {
    icon: Clock,
    title: "Flexible Pricing",
    description: "Choose hourly, daily, or weekly plans based on what works best for your schedule and budget."
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Precise real-time tracking via the app. Always know where your bike is and find available ones nearby."
  },
  {
    icon: Shield,
    title: "Liability Protection",
    description: "Bicycle Liability Waiver protects owners and ensures accountability from renters."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reduce your carbon footprint while getting around campus. Every ride helps the environment."
  },
  {
    icon: Wallet,
    title: "Earn As Owner",
    description: "Own a bike that sits unused? List it on Wheelz and earn money while helping fellow students."
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Features
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Everything you need for campus mobility
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Wheelz combines smart technology with student-focused design to make campus transportation effortless.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="group relative rounded-2xl bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
