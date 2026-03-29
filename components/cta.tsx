import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bike } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20">
            <Bike className="h-8 w-8 text-primary-foreground" />
          </div>
          
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Ready to start riding?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Join hundreds of students already using Wheelz for their daily campus commute. 
            Download the app and take your first ride today.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <Link href="/signup">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/bikes">Browse Bikes</Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/60">
            Available on iOS and Android. Free to download.
          </p>
        </div>
      </div>
    </section>
  )
}
