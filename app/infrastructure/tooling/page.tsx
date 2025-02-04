import { Card, CardContent } from "@/components/ui/card"
import { Cog } from "lucide-react"
import { useTypewriter } from "../../hooks/useTypewriter"

const capabilities = [
  "VMC & CNC EDM Setup",
  "High Precision Automotive Tools",
  "Custom Fixtures Manufacturing",
  "International Standards Compliance",
]

export default function ToolingPage() {
  const typewriterText = useTypewriter("Tooling", 50)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://sjc.microlink.io/bamHQvAAzuEG-30Ff_zeAgVB4mBB8b7TMPnvulP1eACO-S-vEajpYW0MQHrV8qq-d_Tmn_PtBgwOdQSXkBAgNQ.jpeg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <Cog className="w-16 h-16 mb-4" />
              <h1 className="text-4xl font-bold">{typewriterText}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-slate-700 mb-8">
            Sudeep Polymers Pvt Ltd is equiped with state of the art in-house tooling capability. With a team of 20
            professionals including senior designers, tool makers, VMC Programmers led by Tooling Director Mr Vishal
            Patule and having in-house VMC & CNC EDM setup along with all conventional setup, We boast of manufacturing
            high precision automotive tools and fixtures within defined timelines meeting international standards of
            tooling.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-6">Our Tooling Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((capability) => (
              <Card key={capability}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Cog className="w-6 h-6 text-blue-600" />
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

