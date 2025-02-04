"use client"

import Image from "next/image"
import { Users } from "lucide-react"
import { useTypewriter } from "../../hooks/useTypewriter"
import { Card, CardContent } from "@/components/ui/card"

const endUsers = [
  { name: "TVS", logo: "/placeholder.svg?height=200&width=200&text=TVS" },
  { name: "Yamaha", logo: "/placeholder.svg?height=200&width=200&text=Yamaha" },
  { name: "Sonalika", logo: "/placeholder.svg?height=200&width=200&text=Sonalika" },
  { name: "Tata", logo: "/placeholder.svg?height=200&width=200&text=Tata" },
  { name: "Renault", logo: "/placeholder.svg?height=200&width=200&text=Renault" },
  { name: "Maruti Suzuki", logo: "/placeholder.svg?height=200&width=200&text=Maruti+Suzuki" },
  { name: "Mahindra", logo: "/placeholder.svg?height=200&width=200&text=Mahindra" },
  { name: "John Deere", logo: "/placeholder.svg?height=200&width=200&text=John+Deere" },
]

export default function EndUsersPage() {
  const typewriterText = useTypewriter("Our End Users", 50)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[250px] bg-gradient-to-r from-blue-900 to-blue-600">
        <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2]" />
        <div className="relative h-full flex items-center justify-start">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <Users className="w-16 h-16 mb-4" />
              <h1 className="text-4xl font-bold mb-4">{typewriterText}</h1>
              <p className="text-xl max-w-2xl">Serving leading automotive and industrial manufacturers worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* End Users Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {endUsers.map((user) => (
            <Card key={user.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-square relative">
                  <Image src={user.logo || "/placeholder.svg"} alt={user.name} fill className="object-contain p-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

