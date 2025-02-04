import { Card, CardContent } from "@/components/ui/card"
import { Building } from "lucide-react"
import { useTypewriter } from "../../hooks/useTypewriter"

export default function CompanyPage() {
  const typewriterText = useTypewriter("The Company", 50)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[250px] bg-gradient-to-r from-blue-900 to-blue-600">
        <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2]" />
        <div className="relative h-full flex items-center justify-start">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <Building className="w-16 h-16 mb-4" />
              <h1 className="text-4xl font-bold mb-4">{typewriterText}</h1>
              <p className="text-xl max-w-2xl">Learn about our history, vision, and values</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-slate-700 mb-6">
            Sudeep Polymers Pvt. Ltd. (formally a partnership firm) was founded by Late Mr. R.M.Agarwal in 1986 with a
            vision to create a company, manufacturing Precise Auto Ancillary Parts. Mr. Deepak Agarwal joined the
            company in 2009 as Director, Marketing & Development, after completing his Bachelor&apos;s in Mechanical &
            serving in engineering industry for a period of 2 years. Under his Leadership company has expanded its
            facilities & Customer base, there by achieving CAGR of 30%.
          </p>
          <p className="text-slate-700 mb-6">
            Today, we are committed to providing our customers with innovative solutions that are tailored to their
            specific needs. We aim to constantly improve our technologies, processes, and quality control systems to
            ensure that our customers receive the highest quality products.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Our Mission</h3>
                <p className="text-slate-600">
                  To be the leading manufacturer of high-precision plastic products through continuous innovation and
                  customer satisfaction.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Our Vision</h3>
                <p className="text-slate-600">
                  To achieve excellence in plastic manufacturing while maintaining the highest standards of quality and
                  environmental responsibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

