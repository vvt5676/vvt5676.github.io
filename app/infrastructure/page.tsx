import { Card, CardContent } from "@/components/ui/card"
import { Cog, TestTube, Factory } from "lucide-react"
import Link from "next/link"
import { useTypewriter } from "../hooks/useTypewriter"

const sections = [
  {
    title: "Tooling",
    description: "State-of-the-art in-house tooling capability with VMC & CNC EDM setup",
    icon: Cog,
    href: "/infrastructure/tooling",
  },
  {
    title: "Inspection & Training",
    description: "High-accuracy monitoring equipment for raw material and product testing",
    icon: TestTube,
    href: "/infrastructure/inspection-training",
  },
  {
    title: "Production",
    description: "Advanced manufacturing facilities with modern machinery and equipment",
    icon: Factory,
    href: "/infrastructure/production",
  },
]

export default function InfrastructurePage() {
  const typewriterText = useTypewriter("Our Infrastructure", 50)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[250px] bg-gradient-to-r from-blue-900 to-blue-600">
        <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2]" />
        <div className="relative h-full flex items-center justify-start">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">{typewriterText}</h1>
              <p className="text-xl max-w-2xl">Discover our state-of-the-art facilities and capabilities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <Link key={section.title} href={section.href}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <section.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">{section.title}</h2>
                  <p className="text-slate-600">{section.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

