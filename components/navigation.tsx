"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
]

const LOGO_PATH = "\\\\MLC-SRVR1\\Folder Redirection\\Oliver.Latham\\Desktop\\boldiz-website-template-pro\\images\\ML logo for website transparent.png"

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex lg:flex-1"
        >
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="relative w-[200px] h-[60px]">
              <Image
                src={LOGO_PATH}
                alt="ML Consulting Structural Engineers"
                fill
                className="object-contain"
                priority
                sizes="200px"
              />
            </div>
          </Link>
        </motion.div>
        
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium leading-6 transition-colors hover:text-emerald-500 relative py-2",
                pathname === item.href ? "text-emerald-500" : "text-foreground"
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"
                  layoutId="underline"
                />
              )}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            Get Started
          </Button>
        </div>
      </nav>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <div className="relative w-[160px] h-[50px]">
                  <Image
                    src={LOGO_PATH}
                    alt="ML Consulting Structural Engineers"
                    fill
                    className="object-contain"
                    priority
                    sizes="160px"
                  />
                </div>
              </Link>
              <Button
                variant="ghost"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent",
                        pathname === item.href ? "text-emerald-500" : "text-foreground"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}