import Link from "next/link"
import { ArrowRight, LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="group hover:border-emerald-500 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
      <CardContent className="p-6">
        <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
          <Icon className="h-7 w-7 text-emerald-500" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link
          href="/services"
          className="inline-flex items-center text-emerald-500 hover:text-emerald-600 font-medium"
        >
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}