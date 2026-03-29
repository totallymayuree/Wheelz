"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Hourly",
    description: "Perfect for quick trips across campus",
    price: { hourly: "₹15", label: "/hour" },
    features: [
      "Unlock any available bike",
      "GPS navigation",
      "In-app support",
      "Flexible return locations"
    ],
    popular: false
  },
  {
    name: "Daily",
    description: "Best for a full day of campus activities",
    price: { hourly: "₹75", label: "/day" },
    features: [
      "Unlimited rides for 24 hours",
      "GPS navigation",
      "Priority support",
      "Flexible return locations",
      "Pause & resume rides"
    ],
    popular: true
  },
  {
    name: "Weekly",
    description: "Ideal for regular campus commuters",
    price: { hourly: "₹299", label: "/week" },
    features: [
      "Unlimited rides for 7 days",
      "GPS navigation",
      "24/7 priority support",
      "Flexible return locations",
      "Pause & resume rides",
      "Bike reservation"
    ],
    popular: false
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Pricing
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Flexible plans for every rider
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose a plan that fits your campus lifestyle. All plans include access to our full bike network.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl p-8 transition-all",
                plan.popular 
                  ? "bg-primary text-primary-foreground shadow-2xl scale-105" 
                  : "bg-card shadow-sm hover:shadow-lg"
              )}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
                  Most Popular
                </span>
              )}
              
              <div className="text-center">
                <h3 className={cn(
                  "text-lg font-semibold",
                  plan.popular ? "text-primary-foreground" : "text-foreground"
                )}>
                  {plan.name}
                </h3>
                <p className={cn(
                  "mt-2 text-sm",
                  plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                )}>
                  {plan.description}
                </p>
                
                <div className="mt-6">
                  <span className={cn(
                    "text-4xl font-bold",
                    plan.popular ? "text-primary-foreground" : "text-foreground"
                  )}>
                    {plan.price.hourly}
                  </span>
                  <span className={cn(
                    "text-sm",
                    plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                  )}>
                    {plan.price.label}
                  </span>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={cn(
                      "h-5 w-5 shrink-0",
                      plan.popular ? "text-primary-foreground" : "text-primary"
                    )} />
                    <span className={cn(
                      "text-sm",
                      plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"
                    )}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className={cn(
                  "mt-8 w-full",
                  plan.popular 
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" 
                    : ""
                )}
                variant={plan.popular ? "secondary" : "default"}
                asChild
              >
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
