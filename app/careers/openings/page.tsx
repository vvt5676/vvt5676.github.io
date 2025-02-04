"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase } from "lucide-react"
import Link from "next/link"
import { useTypewriter } from "../../hooks/useTypewriter"

const openings = [
  {
    title: "Software Engineer",
    department: "IT",
    location: "Pune, India",
    type: "Full-time",
    description: "Looking for an experienced software engineer to join our IT team.",
  },
  {
    title: "Quality Control Engineer",
    department: "Quality",
    location: "Pune, India",
    type: "Full-time",
    description: "Seeking a detail-oriented quality control engineer for our manufacturing facility.",
  },
  {
    title: "Production Manager",
    department: "Manufacturing",
    location: "Pune, India",
    type: "Full-time",
    description: "Experienced production manager needed to oversee manufacturing operations.",
  },
]

export default function OpeningsPage() {
  const typewriterText = useTypewriter("Current Openings", 50)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[250px] bg-gradient-to-r from-blue-900 to-blue-600">
        <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2]" />
        <div className="relative h-full flex items-center justify-start">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <Briefcase className="w-16 h-16 mb-4" />
              <h1 className="text-4xl font-bold mb-4">{typewriterText}</h1>
              <p className="text-xl max-w-2xl">Explore opportunities to grow with us</p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid gap-6">
          {openings.map((job) => (
            <Card key={job.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-blue-900">{job.title}</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-slate-600">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {job.department}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          {job.type}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link href="/careers">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">Apply Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

