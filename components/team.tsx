import { Linkedin, Twitter, Mail } from "lucide-react"

const team = [
  {
    name: "Bichitra Bikram Hazarika",
    role: "CEO",
    bio: "Visionary leader driving Wheelz's mission to transform campus mobility.",
    initials: "BB"
  },
  {
    name: "Bidisha Kalita",
    role: "CTO",
    bio: "Tech innovator building the smart systems that power Wheelz.",
    initials: "BK"
  },
  {
    name: "Barbee Biswas",
    role: "CMO",
    bio: "Creative strategist spreading the word about eco-friendly rides.",
    initials: "BB"
  },
  {
    name: "Ananya Goswami",
    role: "COO",
    bio: "Operations expert ensuring smooth rides for every student.",
    initials: "AG"
  },
  {
    name: "Mayuree Khanikar",
    role: "CFO",
    bio: "Financial strategist keeping Wheelz sustainable and affordable.",
    initials: "MK"
  }
]

export function Team() {
  return (
    <section id="team" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Team
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Built by students, for students
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Meet the passionate team behind Wheelz, dedicated to solving campus transportation challenges.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((member) => (
            <div 
              key={member.name} 
              className="group relative flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div className="relative">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground transition-transform group-hover:scale-105">
                  {member.initials}
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {member.role}
                </div>
              </div>
              
              <h3 className="mt-6 text-base font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="mt-4 flex gap-3">
                <a 
                  href={`https://linkedin.com/in/${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a 
                  href={`https://twitter.com/${member.name.split(' ')[0].toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a 
                  href={`mailto:${member.name.split(' ')[0].toLowerCase()}@wheelz.app`}
                  className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
