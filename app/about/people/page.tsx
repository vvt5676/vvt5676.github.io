import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const team = [
  {
    name: "Mr. Deepak Agarwal",
    position: "Managing Director",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Mr. Deepak Agarwal is the MD of Sudeep Polymers Pvt. Ltd. He earned his degree from MIT Kothrud in 2007.",
  },
  // Add more team members as needed
]

export default function PeoplePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://sjc.microlink.io/0jI_iL_YMUjLZA0VYJlngXIiW3PITDjsKDHVlLlhKtv1XjbPEe3q-3B5qUZln_7b-F_uDQ_upNgGChIpOE9FmQ.jpeg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">Our People</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:gap-12">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/3 md:w-1/4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={400}
                      className="w-full h-64 sm:h-full object-cover"
                    />
                  </div>
                  <div className="w-full sm:w-2/3 md:w-3/4 p-6">
                    <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">{member.name}</h2>
                    <p className="text-blue-600 text-lg mb-4">{member.position}</p>
                    <p className="text-slate-700 text-sm md:text-base">{member.bio}</p>
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

