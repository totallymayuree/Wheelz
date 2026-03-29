import { Download, Search, QrCode, Bike } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Download,
    title: "Download the App",
    description: "Get the Wheelz app from your app store and create your student account in seconds."
  },
  {
    step: "02",
    icon: Search,
    title: "Find a Bike",
    description: "Use the map to locate available bikes near you. Filter by type and distance."
  },
  {
    step: "03",
    icon: QrCode,
    title: "Scan & Unlock",
    description: "Scan the QR code on the bike to unlock it instantly. The timer starts automatically."
  },
  {
    step: "04",
    icon: Bike,
    title: "Ride & Return",
    description: "Enjoy your ride! When done, park at any designated spot and end your rental in the app."
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Start riding in 4 simple steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Getting around campus has never been easier. Here&apos;s how Wheelz works.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connector line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-border lg:block" />
                )}
                
                <div className="relative flex flex-col items-center text-center">
                  {/* Step Number with Icon */}
                  <div className="relative">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <step.icon className="h-7 w-7" />
                      </div>
                    </div>
                    <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      {step.step}
                    </span>
                  </div>
                  
                  <h3 className="mt-6 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
