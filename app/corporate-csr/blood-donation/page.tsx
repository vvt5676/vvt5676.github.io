import { useTypewriter } from "../../hooks/useTypewriter"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"

export default function BloodDonationPage() {
  const typewriterText = useTypewriter("Blood Donation Drive", 50)

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
              <Heart className="w-16 h-16 mb-4" />
              <h1 className="text-4xl font-bold mb-4">{typewriterText}</h1>
              <p className="text-xl max-w-2xl">
                Contributing to community health through regular blood donation drives
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96">
                <Image
                  src="https://sjc.microlink.io/2vpKxhJigEPyGZfZsIOmG0YInOjeMXnP9yCAdIgQD31EXhjfop0aHhWxi2ysAI9dOS3R7nYNNRoene5Hy86Hug.jpeg"
                  alt="Blood Donation Drive"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Saving Lives Together</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our regular blood donation drives are a crucial part of our commitment to community health. We believe
              that every drop counts and can make a significant difference in someone's life.
            </p>
            <p className="text-lg text-gray-700">
              We organize these drives in collaboration with local hospitals and blood banks, encouraging our employees
              and community members to participate in this life-saving initiative.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

