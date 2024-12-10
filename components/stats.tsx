"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "50+", label: "Expert Engineers" },
  { value: "100%", label: "Client Satisfaction" },
]

export function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-emerald-500 mb-2">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}