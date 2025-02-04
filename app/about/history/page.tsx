import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"

const timeline = [
  {
    year: "1986",
    title: "Foundation",
    description:
      "Founded by Late Mr. R.M.Agarwal with a vision to create a company manufacturing Precise Auto Ancillary Parts.",
  },
  {
    year: "2009",
    title: "New Leadership",
    description: "Mr. Deepak Agarwal joined as Director, Marketing & Development.",
  },
  // Add more timeline events
]

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">Our History</h1>
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

