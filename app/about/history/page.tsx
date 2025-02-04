"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"
import { useTypewriter } from "../../hooks/useTypewriter"

const timeline = [
  {
    year: "1986",
    title: "Foundation",
    description:
      "Founded by Late Mr. R.M.Agarwal with a vision to create company manufacturing Precise Auto Ancillary Parts.",
  },
  {
    year: "2009",
    title: "New Leadership",
    description: "Mr. Deepak Agarwal joined as Director, Marketing & Development.",
  },
  // Add more timeline events
]

export default function HistoryPage() {
  const typewriterText = useTypewriter("Our History", 50)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[250px] bg-gradient-to-r from-blue-900 to-blue-600">
        <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2]" />
        <div className="relative h-full flex items-center justify-start">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <Clock className="w-16 h-16 mb-4" />
              <h1 className="text-4xl font-bold mb-4">{typewriterText}</h1>
              <p className="text-xl max-w-2xl">Explore our journey through the years</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {timeline.map((event, index) => (
            <Card key={event.year} className="overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="sm:w-24 flex-shrink-0">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">{event.year}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">{event.title}</h3>
                    <p className="text-slate-700 text-sm sm:text-base">{event.description}</p>
                  </div>
                  <div className="flex-shrink-0 hidden sm:block">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
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

