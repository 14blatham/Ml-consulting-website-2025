import Link from "next/link"
import Image from "next/image"

const LOGO_PATH = "\\\\MLC-SRVR1\\Folder Redirection\\Oliver.Latham\\Desktop\\boldiz-website-template-pro\\images\\ML logo for website transparent.png"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/services" className="text-foreground hover:text-emerald-500">
            Services
          </Link>
          <Link href="/projects" className="text-foreground hover:text-emerald-500">
            Projects
          </Link>
          <Link href="/team" className="text-foreground hover:text-emerald-500">
            Team
          </Link>
          <Link href="/contact" className="text-foreground hover:text-emerald-500">
            Contact
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <Link href="/" className="flex items-center justify-center gap-2 md:justify-start">
            <div className="relative w-[180px] h-[50px]">
              <Image
                src={LOGO_PATH}
                alt="ML Consulting Structural Engineers"
                fill
                className="object-contain"
                priority
                sizes="180px"
              />
            </div>
          </Link>
          <p className="mt-2 text-center text-xs leading-5 text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} ML Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}