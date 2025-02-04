import Image from "next/image"
import { School } from "lucide-react"
import { useTypewriter } from "../../hooks/useTypewriter"
import { Card, CardContent } from "@/components/ui/card"

const initiatives = [
  {
    title: "Scholarship Programs",
    description: "Providing financial support to deserving students for higher education.",
    image: "/placeholder.svg?height=400&width=600&text=Scholarships",
  },
  {
    title: "School Infrastructure Support",
    description: "Improving facilities and resources in local schools to enhance the learning environment.",
    image: "/placeholder.svg?height=400&width=600&text=School+Infrastructure",
  },
  {
    title: "Skill Development Workshops",
    description: "Conducting workshops to bridge the gap between academia and industry requirements.",
    image: "/placeholder.svg?height=400&width=600&text=Skill+Development",
  },
]

export default function EducationPage() {
  const typewriterText = useTypewriter("Education Support", 50)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-blue-600">
          <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2]" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <School className="w-16 h-16 mb-4" />
              <h1 className="text-4xl font-bold mb-4">{typewriterText}</h1>
              <p className="text-xl max-w-2xl">Initiatives to promote education and skill development</p>
            </div>
          </div>
        </div>
      </div>

      {/* Initiatives Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {initiatives.map((initiative) => (
            <Card key={initiative.title} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2">
                    <div className="relative h-64 md:h-full">
                      <Image
                        src={initiative.image || "/placeholder.svg"}
                        alt={initiative.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-6">
                    <School className="w-8 h-8 text-yellow-600 mb-4" />
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">{initiative.title}</h2>
                    <p className="text-slate-600">{initiative.description}</p>
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

