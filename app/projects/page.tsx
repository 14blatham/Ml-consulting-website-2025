import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: "1",
    title: "Modern Office Complex",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&q=80",
    description: "A 20-story office building featuring innovative structural solutions and sustainable design.",
    location: "Downtown Tech City",
    year: "2023",
  },
  {
    id: "2",
    title: "Residential Tower",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&q=80",
    description: "Luxury residential high-rise with state-of-the-art seismic protection systems.",
    location: "Harbor District",
    year: "2022",
  },
  {
    id: "3",
    title: "Sports Stadium",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&h=600&q=80",
    description: "50,000-seat stadium with innovative roof structure and spectator facilities.",
    location: "Sports City",
    year: "2023",
  },
]

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        description="Explore our portfolio of successful engineering projects"
      />
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{project.category}</Badge>
                    <Badge variant="outline">{project.year}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">{project.location}</p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-emerald-500 hover:text-emerald-600"
                  >
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}