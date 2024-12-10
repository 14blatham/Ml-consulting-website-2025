"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "StructPro's innovative approach to structural engineering helped us realize our vision for a sustainable office complex.",
    author: "David Miller",
    role: "Project Director, Urban Developments",
  },
  {
    quote: "Their attention to detail and commitment to excellence sets them apart in the industry.",
    author: "Jennifer Chen",
    role: "Chief Architect, Modern Spaces",
  },
  {
    quote: "Working with StructPro has been a game-changer for our construction projects.",
    author: "Robert Thompson",
    role: "Construction Manager, BuildTech",
  },
]

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="h-full">
            <CardContent className="pt-6">
              <Quote className="h-8 w-8 text-emerald-500 mb-4" />
              <blockquote className="text-lg mb-6">
                "{testimonial.quote}"
              </blockquote>
              <footer>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </footer>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}