import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  description: string
  className?: string
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-700">
        {title}
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        {description}
      </p>
    </div>
  )
}