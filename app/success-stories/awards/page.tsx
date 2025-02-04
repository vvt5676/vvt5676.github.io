"use client"

import Image from "next/image"
import { Trophy } from "lucide-react"
import { useTypewriter } from "../../hooks/useTypewriter"
import { Card, CardContent } from "@/components/ui/card"

const awards = [
  {
    title: "Customer-Centric Excellence",
    description: "Recognition for outstanding customer service and satisfaction",
    image: "/placeholder.svg?height=400&width=600&text=Award+Image",
  },
  {
    title: "Quality Excellence Award",
    description: "Recognition for maintaining highest quality standards",
    image: "/placeholder.svg?height=400&width=600&text=Award+Image",
  },
  {
    title: "Innovation Award",
    description: "Recognition for innovative solutions in polymer manufacturing",
    image: "/placeholder.svg?height=400&width=600&text=Award+Image",
  },
]

export default function AwardsPage() {
  const typewriterText = useTypewriter("Awards & Recognitions", 50)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[250px] bg-gradient-to-r from-blue-900 to-blue-600">
        <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2]" />
        <div className="relative h-full flex items-center justify-start">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <Trophy className="w-16 h-16 mb-4" />
              <h1 className="text-4xl font-bold mb-4">{typewriterText}</h1>
              <p className="text-xl max-w-2xl">Excellence recognized through prestigious accolades</p>
            </div>
          </div>
        </div>
      </div>

      {/* Awards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {awards.map((award) => (
            <Card key={award.title} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2">
                    <div className="relative h-64 md:h-full">
                      <Image src={award.image || "/placeholder.svg"} alt={award.title} fill className="object-cover" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-6">
                    <Trophy className="w-8 h-8 text-blue-600 mb-4" />
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">{award.title}</h2>
                    <p className="text-slate-600">{award.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

