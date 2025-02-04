import { Card, CardContent } from "@/components/ui/card"
import { Building, Users, Clock, Award } from "lucide-react"
import Link from "next/link"
import { useTypewriter } from "../hooks/useTypewriter"

const sections = [
  {
    title: "The Company",
    description: "Learn about our history, vision, and values",
    icon: Building,
    href: "/about/company",
  },
  {
    title: "Our People",
    description: "Meet the team behind our success",
    icon: Users,
    href: "/about/people",
  },
  {
    title: "Our History",
    description: "Explore our journey through the years",
    icon: Clock,
    href: "/about/history",
  },
  {
    title: "Certifications",
    description: "View our quality and industry certifications",
    icon: Award,
    href: "/about/certifications",
  },
]

export default function AboutPage() {
  const typewriterText = useTypewriter("About Us", 50)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[250px] bg-gradient-to-r from-blue-900 to-blue-600">
        <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2]" />
        <div className="relative h-full flex items-center justify-start">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">{typewriterText}</h1>
              <p className="text-xl max-w-2xl">
                Learn about our company, our people, our history, and our certifications
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
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

