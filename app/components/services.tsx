import { Card, CardContent } from "@/components/ui/card"
import { Cog, Microscope, Truck } from "lucide-react"

const services = [
  {
    title: "Precision Manufacturing",
    description: "High-quality plastic products with tight tolerances",
    icon: Cog,
  },
  {
    title: "Quality Control",
    description: "Rigorous testing and inspection processes",
    icon: Microscope,
  },
  {
    title: "Timely Delivery",
    description: "Efficient production and logistics management",
    icon: Truck,
  },
]

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-white">
              <CardContent className="p-6 text-center">
                <service.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

