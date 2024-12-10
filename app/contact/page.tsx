import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 Engineering Way, Suite 100, Tech City, TC 12345",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@structpro.com",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Monday - Friday: 9:00 AM - 6:00 PM",
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team of experts"
      />
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <Card className="p-6">
                <ContactForm />
              </Card>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="grid gap-6">
                {contactInfo.map((item) => (
                  <Card key={item.title} className="p-6">
                    <div className="flex items-start gap-4">
                      <item.icon className="h-6 w-6 text-emerald-500" />
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.content}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}