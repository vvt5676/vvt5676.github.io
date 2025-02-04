"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"
import { useTypewriter } from "../../hooks/useTypewriter"

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
  const typewriterText = useTypewriter("Our Certifications", 50)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[250px] bg-gradient-to-r from-blue-900 to-blue-600">
        <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2]" />
        <div className="relative h-full flex items-center justify-start">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <Award className="w-16 h-16 mb-4" />
              <h1 className="text-4xl font-bold mb-4">{typewriterText}</h1>
              <p className="text-xl max-w-2xl">Industry standards and quality certifications</p>
            </div>
          </div>
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

