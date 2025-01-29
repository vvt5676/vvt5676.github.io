import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function CompanyPage() {
  return (
    <div className="py-12 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">The Company</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-slate-700 mb-6">
            Sudeep Polymers Pvt. Ltd. (formally a partnership firm) was founded by Late Mr. R.M.Agarwal in 1986 with a
            vision to create a company, manufacturing Precise Auto Ancillary Parts. Mr. Deepak Agarwal joined the
            company in 2009 as Director, Marketing & Development, after completing his Bachelor's in Mechanical &
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

      {/* Values Section */}
      <div className="bg-gray-50 py-12 mt-12 -mx-6 lg:-mx-8">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Quality", description: "Commitment to excellence in every product" },
              { title: "Innovation", description: "Continuously improving our processes and technologies" },
              { title: "Integrity", description: "Honesty and transparency in all our dealings" },
            ].map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

