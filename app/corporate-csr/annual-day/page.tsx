"use client"

import { useTypewriter } from "../../hooks/useTypewriter"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export default function AnnualDayPage() {
  const typewriterText = useTypewriter("Annual Day Celebrations", 50)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[250px] bg-gradient-to-r from-blue-900 to-blue-600">
        <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2]" />
        <div className="relative h-full flex items-center justify-start">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <Calendar className="w-16 h-16 mb-4" />
              <h1 className="text-4xl font-bold mb-4">{typewriterText}</h1>
              <p className="text-xl max-w-2xl">Recognizing and celebrating our team's achievements</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Celebrating Our Achievements</h2>
            <p className="text-lg text-gray-700 mb-4">
              Every year, we come together to celebrate our collective achievements and recognize the hard work of our
              employees. Our Annual Day is a testament to our company's growth and the dedication of our team.
            </p>
            <p className="text-lg text-gray-700">
              The event features award ceremonies, cultural performances, and team-building activities, fostering a
              sense of unity and pride among our employees.
            </p>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96">
                <Image
                  src="https://sjc.microlink.io/2vpKxhJigEPyGZfZsIOmG0YInOjeMXnP9yCAdIgQD31EXhjfop0aHhWxi2ysAI9dOS3R7nYNNRoene5Hy86Hug.jpeg"
                  alt="Annual Day Celebration"
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

