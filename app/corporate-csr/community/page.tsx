import { useTypewriter } from "../../hooks/useTypewriter"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"

const initiatives = [
  {
    title: "Education Support",
    description: "Providing resources and support to local schools and educational institutions.",
  },
  {
    title: "Environmental Conservation",
    description: "Participating in and organizing local environmental cleanup and conservation efforts.",
  },
  {
    title: "Skill Development",
    description: "Offering vocational training programs to empower the local community.",
  },
]

export default function CommunityPage() {
  const typewriterText = useTypewriter("Community Initiatives", 50)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600">
          <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2]" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <Users className="w-16 h-16 mb-4" />
              <h1 className="text-4xl font-bold mb-4">{typewriterText}</h1>
              <p className="text-xl max-w-2xl">Making a positive impact in our local community</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Building Stronger Communities</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Sudeep Polymers, we believe in the power of community. Our various initiatives aim to create a positive
              impact on the society we operate in.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              From supporting local education programs to environmental conservation efforts, we are committed to
              sustainable development and social responsibility.
            </p>
            <div className="space-y-4">
              {initiatives.map((initiative, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{initiative.title}</h3>
                    <p className="text-gray-700">{initiative.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96">
                <Image
                  src="https://sjc.microlink.io/2vpKxhJigEPyGZfZsIOmG0YInOjeMXnP9yCAdIgQD31EXhjfop0aHhWxi2ysAI9dOS3R7nYNNRoene5Hy86Hug.jpeg"
                  alt="Community Initiatives"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

