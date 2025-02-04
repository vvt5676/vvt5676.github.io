import { Card, CardContent } from "@/components/ui/card"
import { Factory } from "lucide-react"
import { useTypewriter } from "../../hooks/useTypewriter"

const productionCapabilities = [
  "State-of-the-art Manufacturing Facility",
  "Advanced Injection Molding Machines",
  "Automated Production Lines",
  "Quality Control Integration",
  "Efficient Production Planning",
  "Just-in-Time Manufacturing",
]

export default function ProductionPage() {
  const typewriterText = useTypewriter("Production", 50)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600">
          <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2]" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <Factory className="w-16 h-16 mb-4" />
              <h1 className="text-4xl font-bold">{typewriterText}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-slate-700 mb-8">
            Our production facility is equipped with the latest technology and machinery to ensure efficient and
            high-quality manufacturing of plastic products. We maintain strict quality control throughout the production
            process and implement lean manufacturing principles.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-6">Production Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productionCapabilities.map((capability) => (
              <Card key={capability}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Factory className="w-6 h-6 text-blue-600" />
                    <p className="text-slate-700">{capability}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

