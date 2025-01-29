import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Building } from "lucide-react"
import Link from "next/link"
import { useTypewriter } from "../hooks/useTypewriter"

const sections = [
  {
    title: "Our Clients",
    description: "Discover our trusted partnerships with industry leaders",
    icon: Building,
    href: "/success-stories/clients",
  },
  {
    title: "Awards & Recognitions",
    description: "Excellence recognized through prestigious accolades",
    icon: Trophy,
    href: "/success-stories/awards",
  },
  {
    title: "End Users",
    description: "Leading manufacturers who trust our products",
    icon: Users,
    href: "/success-stories/end-users",
  },
]

export default function SuccessStoriesPage() {
  const typewriterText = useTypewriter("Success Stories", 50)

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
              <h1 className="text-4xl font-bold mb-4">{typewriterText}</h1>
              <p className="text-xl max-w-2xl">
                Explore our journey of success through our clients, awards, and end users
              </p>
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

