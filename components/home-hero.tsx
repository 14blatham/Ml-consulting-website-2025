"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/animated-text"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function HomeHero() {
  return (
    <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <span className="inline-block text-emerald-400 text-lg font-medium mb-4">
          Welcome to StructPro Engineering
        </span>
      </motion.div>
      
      <AnimatedText
        text="Building the Future with Structural Excellence"
        className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
      />
      
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ delay: 0.4 }}
        className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
      >
        We combine innovative engineering solutions with decades of experience to create
        sustainable, safe, and aesthetically pleasing structures that stand the test of time.
      </motion.p>
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link href="/projects">
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 min-w-[200px] h-14 text-lg"
          >
            View Our Projects
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-white text-emerald-950 hover:bg-emerald-50 min-w-[200px] h-14 text-lg"
          >
            Contact Us
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}