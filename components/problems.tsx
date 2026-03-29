import { Wallet, Clock, Footprints, TreeDeciduous } from "lucide-react"

const problems = [
  {
    icon: Wallet,
    title: "Lack of Affordable Transport",
    description: "Campus transportation options are often expensive and out of reach for student budgets."
  },
  {
    icon: Clock,
    title: "Unreliable Public Transport",
    description: "Bus schedules don't match class timings, leading to missed lectures and wasted time."
  },
  {
    icon: Footprints,
    title: "Long Walking Distances",
    description: "Large campus layouts mean exhausting walks between classes, especially in hot weather."
  },
  {
    icon: TreeDeciduous,
    title: "Environmental Concerns",
    description: "Gas-powered vehicles contribute to campus pollution and carbon emissions."
  }
]

export function Problems() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              The Problem
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Transportation challenges students face every day
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We empathize with the everyday mobility challenges students face on campus. 
              These problems inspired us to create Wheelz.
            </p>
          </div>

          {/* Right - Problems Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {problems.map((problem) => (
              <div 
                key={problem.title}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                  <problem.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
