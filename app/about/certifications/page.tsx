import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "IATF 16949:2016",
    description: "Automotive Quality Management System",
    image: "/placeholder.svg?height=200&width=200",
  },
  // Add more certifications
]

export default function CertificationsPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">Our Certifications</h1>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert) => (
            <Card key={cert.name} className="overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.name}
                    width={200}
                    height={200}
                    className="w-20 h-20 object-contain"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">{cert.name}</h3>
                    <p className="text-slate-600 text-sm">{cert.description}</p>
                  </div>
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 hidden sm:block" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

