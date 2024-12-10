"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, MapPin, Building2, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// This would typically come from an API or CMS
const projects = {
  "1": {
    title: "Modern Office Complex",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&q=80",
    description: "A 20-story office building featuring innovative structural solutions and sustainable design principles. The project showcases our expertise in modern commercial construction with a focus on environmental responsibility and workplace efficiency.",
    location: "Downtown Tech City",
    year: "2023",
    client: "TechCorp International",
    duration: "24 months",
    value: "$85M",
    features: [
      "LEED Platinum certification",
      "Seismic-resistant design",
      "Smart building systems integration",
      "Green roof and solar panels",
      "Underground parking facility",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&q=80",
    ],
  },
  // Add other project details here
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link href="/projects">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{project.category}</Badge>
              <Badge variant="outline">{project.year}</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">
              {project.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {project.location}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {project.year}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="h-4 w-4" />
                {project.client}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                {project.duration}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <Card className="col-span-2">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Project Value</h2>
              <p className="text-3xl font-bold text-emerald-500">{project.value}</p>
              <Separator className="my-4" />
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4" />
                Team Size: 45+ professionals
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Gallery */}
        <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={image}
                alt={`Project image ${index + 1}`}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}