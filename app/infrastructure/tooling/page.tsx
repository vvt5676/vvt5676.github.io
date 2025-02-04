import { Card, CardContent } from "@/components/ui/card"
import { Cog } from "lucide-react"
import { useTypewriter } from "../../hooks/useTypewriter"
import { ImageSlider } from "../../components/image-slider"

const capabilities = [
  "VMC & CNC EDM Setup",
  "High Precision Automotive Tools",
  "Custom Fixtures Manufacturing",
  "International Standards Compliance",
]

const toolingImages = [
  {
    src: "https://images.unsplash.com/photo-1612690669207-fed642192c40",
    alt: "CNC machine working on metal part",
  },
  {
    src: "https://images.unsplash.com/photo-1617781377265-e8137b7e5bda",
    alt: "Precision measuring tools",
  },
  {
    src: "https://images.unsplash.com/photo-1589792923962-537704632910",
    alt: "CAD design of a mechanical part",
  },
  {
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
    alt: "Industrial factory worker operating machinery",
  },
]

export default function ToolingPage() {
  const typewriterText = useTypewriter("Tooling", 50)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[250px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80" />
        </div>
        <div className="relative h-full flex items-center justify-start">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <Cog className="w-16 h-16 mb-4" />
              <h1 className="text-4xl font-bold">{typewriterText}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-slate-700 mb-8">
            Sudeep Polymers Pvt Ltd is equipped with state-of-the-art in-house tooling capability. With a team of 20
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

        {/* Image Gallery Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Tooling Gallery</h2>
          <div className="w-full">
            <ImageSlider images={toolingImages} width={1280} height={720} />
          </div>
        </div>
      </div>
    </div>
  )
}

