import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&q=80",
    title: "Structural Design",
    description: "Complete structural design services for commercial, residential, and industrial projects.",
    features: ["3D modeling and analysis", "Load calculations", "Foundation design", "Seismic analysis"],
  },
  {
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&q=80",
    title: "Consulting Services",
    description: "Expert consultation for construction projects and structural assessments.",
    features: ["Project evaluation", "Risk assessment", "Technical advice", "Value engineering"],
  },
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&q=80",
    title: "Innovation Solutions",
    description: "Cutting-edge engineering solutions using the latest technologies.",
    features: ["Sustainable design", "Smart materials", "Energy efficiency", "BIM integration"],
  },
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&q=80",
    title: "Structural Analysis",
    description: "Comprehensive analysis of existing and proposed structures.",
    features: ["Strength assessment", "Stability analysis", "Retrofit design", "Performance evaluation"],
  },
  {
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&h=600&q=80",
    title: "Construction Support",
    description: "On-site support and supervision during construction phases.",
    features: ["Site inspections", "Quality control", "Construction monitoring", "Technical support"],
  },
  {
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&q=80",
    title: "Documentation",
    description: "Detailed documentation and reporting services.",
    features: ["Technical drawings", "Specifications", "Compliance reports", "As-built documentation"],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive structural engineering solutions tailored to your needs"
      />
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="group overflow-hidden hover:border-emerald-500 transition-colors">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}