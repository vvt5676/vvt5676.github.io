import { Card, CardContent } from "@/components/ui/card"
import { TestTube } from "lucide-react"
import { useTypewriter } from "../../hooks/useTypewriter"

const testingEquipment = [
  { name: "MFI Tester", category: "Testing Equipment" },
  { name: "Density Tester", category: "Testing Equipment" },
  { name: "Muffle Furnace", category: "Testing Equipment" },
  { name: "Moisture Analyser", category: "Testing Equipment" },
  { name: "Digital Vernier", category: "Measurement" },
  { name: "Internal Dial", category: "Measurement" },
]

export default function InspectionTrainingPage() {
  const typewriterText = useTypewriter("Inspection & Training Facility", 50)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[250px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://sjc.microlink.io/yh32sfbGqDcj0qWzP9WVjVHQEwOteAhe14ocbT9eCAONItWaSlGAjsqbT9TvDaL1oS8XjX-TmxOD7YcsvcK4fg.jpeg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80" />
        </div>
        <div className="relative h-full flex items-center justify-start">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <TestTube className="w-16 h-16 mb-4" />
              <h1 className="text-4xl font-bold">{typewriterText}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-slate-700 mb-8">
            At Sudeep Polymers Pvt. Ltd., we have the highest-accuracy monitoring equipments for testing of Raw material
            as well as Products. We have all standard Equipment ranging from Digital vernier, Internal Dial, Height
            Gauge, Internal Micrometer along with video measurement system. Sudeep Polymers has plans to add an internal
            CMM very soon.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">RAW MATERIAL TESTING</h2>
              <div className="space-y-4">
                {testingEquipment
                  .filter((e) => e.category === "Testing Equipment")
                  .map((equipment) => (
                    <Card key={equipment.name}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <TestTube className="w-6 h-6 text-blue-600" />
                          <p className="text-slate-700">{equipment.name}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">MEASUREMENT EQUIPMENT</h2>
              <div className="space-y-4">
                {testingEquipment
                  .filter((e) => e.category === "Measurement")
                  .map((equipment) => (
                    <Card key={equipment.name}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <TestTube className="w-6 h-6 text-blue-600" />
                          <p className="text-slate-700">{equipment.name}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

