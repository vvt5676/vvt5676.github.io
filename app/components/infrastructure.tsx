import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const facilities = [
  {
    title: "State-of-the-art Manufacturing",
    description: "Modern injection molding machines and equipment",
    image: "/placeholder.svg?height=300&width=400&text=Manufacturing",
  },
  {
    title: "Quality Control",
    description: "Advanced testing and inspection facilities",
    image: "/placeholder.svg?height=300&width=400&text=Quality+Control",
  },
  {
    title: "Research & Development",
    description: "Dedicated R&D facility for innovation",
    image: "/placeholder.svg?height=300&width=400&text=R%26D",
  },
]

export default function Infrastructure() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">Infrastructure</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <Card key={facility.title} className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{facility.title}</h3>
                  <p className="text-slate-600">{facility.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

