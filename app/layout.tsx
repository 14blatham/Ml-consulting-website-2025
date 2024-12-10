import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ML Consulting - Professional Structural Engineering Services',
  description: 'Leading structural engineering firm specializing in innovative design solutions, sustainable construction, and expert consulting services.',
  keywords: 'structural engineering, construction, engineering services, structural design, building consultation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navigation />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}