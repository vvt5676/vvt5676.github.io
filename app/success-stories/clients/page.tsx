"use client"

import Image from "next/image"
import { Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useTypewriter } from "../../hooks/useTypewriter"

const clients = [
  { name: "Polybond", logo: "/placeholder.svg?height=200&width=200&text=Polybond" },
  { name: "Kendrion", logo: "/placeholder.svg?height=200&width=200&text=Kendrion" },
  { name: "Lucas-TVS", logo: "/placeholder.svg?height=200&width=200&text=Lucas-TVS" },
  { name: "LS Automotive", logo: "/placeholder.svg?height=200&width=200&text=LS+Automotive" },
  { name: "Valeo", logo: "/placeholder.svg?height=200&width=200&text=Valeo" },
  { name: "Continental", logo: "/placeholder.svg?height=200&width=200&text=Continental" },
  { name: "Duroshox", logo: "/placeholder.svg?height=200&width=200&text=Duroshox" },
  { name: "BorgWarner", logo: "/placeholder.svg?height=200&width=200&text=BorgWarner" },
]

export default function ClientsPage() {
  const typewriterText = useTypewriter("Our Clients", 50)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[250px] bg-gradient-to-r from-blue-900 to-blue-600">
        <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2]" />
        <div className="relative h-full flex items-center justify-start">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <Building className="w-16 h-16 mb-4" />
              <h1 className="text-4xl font-bold mb-4">{typewriterText}</h1>
              <p className="text-xl max-w-2xl">Trusted partnerships that drive innovation and excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client) => (
            <Card key={client.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-square relative">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

