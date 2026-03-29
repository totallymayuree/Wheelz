"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Leaf } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
              <Leaf className="h-4 w-4" />
              Eco-friendly Campus Mobility
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Campus rides made{" "}
              <span className="text-primary">simple</span>
            </h1>
            
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Wheelz is a smart, student-first bicycle rental service built to solve everyday campus mobility problems. 
              Fast, affordable, and eco-friendly — designed to make getting around campus stress-free.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/signup">
                  Start Riding
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Active Riders</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Bikes Available</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Access</p>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative lg:pl-8">
            <div className="relative mx-auto max-w-md">
              {/* Phone mockup with app preview */}
              <div className="relative z-10 rounded-[2.5rem] border-8 border-foreground/10 bg-card p-2 shadow-2xl">
                <div className="overflow-hidden rounded-[2rem] bg-secondary">
                  {/* App Header */}
                  <div className="bg-primary px-6 py-8 text-primary-foreground">
                    <p className="text-sm font-medium opacity-80">Welcome back!</p>
                    <p className="mt-1 text-xl font-bold">Find a bike nearby</p>
                  </div>
                  
                  {/* Fake Map Area */}
                  <div className="relative h-48 bg-secondary">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-4 p-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div 
                            key={i} 
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 animate-float"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          >
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-card p-4">
                    <div className="flex items-center justify-between rounded-xl bg-secondary p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                          <Clock className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Quick Rent</p>
                          <p className="text-xs text-muted-foreground">Tap to rent nearby bike</p>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -left-8 top-1/4 rounded-2xl bg-card p-4 shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Eco Savings</p>
                    <p className="text-xs text-muted-foreground">120kg CO2 saved</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 rounded-2xl bg-card p-4 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Time Saved</p>
                    <p className="text-xs text-muted-foreground">15 min avg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
