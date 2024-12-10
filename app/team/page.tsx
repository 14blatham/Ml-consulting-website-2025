import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { LinkedinIcon, MailIcon } from "lucide-react"

const team = [
  {
    name: "Sarah Johnson",
    role: "Principal Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80",
    bio: "With over 15 years of experience in structural engineering, Sarah leads our technical team.",
    linkedin: "#",
    email: "sarah@structpro.com",
  },
  {
    name: "Michael Chen",
    role: "Senior Structural Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80",
    bio: "Specializing in seismic design and analysis, Michael brings innovative solutions to complex projects.",
    linkedin: "#",
    email: "michael@structpro.com",
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&q=80",
    bio: "Emily ensures smooth project execution and client satisfaction through effective communication.",
    linkedin: "#",
    email: "emily@structpro.com",
  },
]

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Our Team"
        description="Meet the experts behind our structural engineering solutions"
      />
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden group">
                <CardHeader className="p-0">
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-emerald-500 mb-3">{member.role}</p>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex gap-4">
                    <a
                      href={member.linkedin}
                      className="text-muted-foreground hover:text-emerald-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-muted-foreground hover:text-emerald-500"
                    >
                      <MailIcon className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}