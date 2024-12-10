import Image from "next/image"
import { ArrowRight, Building2, Users, Lightbulb, Award, Shield, Clock } from "lucide-react"
import { HomeHero } from "@/components/home-hero"
import { SectionHeader } from "@/components/section-header"
import { ServiceCard } from "@/components/service-card"
import { FeatureCard } from "@/components/feature-card"
import { Testimonials } from "@/components/testimonials"
import { Stats } from "@/components/stats"
import { AnimatedSection } from "@/components/animated-section"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070"
            alt="Modern architectural structure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40" />
        </div>
        <HomeHero />
      </section>

      {/* Stats Section */}
      <AnimatedSection className="py-16 px-6 bg-accent/50">
        <div className="max-w-7xl mx-auto">
          <Stats />
        </div>
      </AnimatedSection>

      {/* About Us Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200"
                  alt="Engineering team collaborating"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At StructPro Engineering, we are a team of passionate structural engineers dedicated to pushing the boundaries of what's possible in construction. With over two decades of experience, we've established ourselves as industry leaders in innovative structural solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our commitment to excellence, sustainable practices, and cutting-edge technology allows us to deliver exceptional results that exceed client expectations. From commercial skyscrapers to residential complexes, we approach each project with the same level of dedication and expertise.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-accent/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              title="Our Services"
              description="Comprehensive structural engineering solutions tailored to your needs"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index + 2}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              title="Why Choose StructPro"
              description="We bring together expertise, innovation, and reliability to deliver exceptional results"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection
                key={feature.title}
                delay={index + 2}
                direction={index === 1 ? "up" : index === 2 ? "right" : "left"}
              >
                <FeatureCard {...feature} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-accent/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              title="Client Testimonials"
              description="What our clients say about working with StructPro"
            />
          </AnimatedSection>
          <Testimonials />
        </div>
      </section>
    </>
  )
}

const services = [
  {
    icon: Building2,
    title: "Structural Design",
    description: "Comprehensive structural design services for buildings of all sizes and complexities.",
  },
  {
    icon: Users,
    title: "Consulting Services",
    description: "Expert consultation for construction projects and structural assessments.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Solutions",
    description: "Cutting-edge engineering solutions using the latest technologies and methodologies.",
  },
]

const features = [
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Over 20 years of experience in structural engineering and construction.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control processes to ensure the highest standards.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Committed to delivering projects on schedule without compromising quality.",
  },
]