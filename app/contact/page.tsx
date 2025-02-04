"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import { useTypewriter } from "../hooks/useTypewriter"

export default function ContactPage() {
  const typewriterText = useTypewriter("Contact Us", 50)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[250px] bg-gradient-to-r from-blue-900 to-blue-600">
        <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2]" />
        <div className="relative h-full flex items-center justify-start">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <Mail className="w-16 h-16 mb-4" />
              <h1 className="text-4xl font-bold mb-4">{typewriterText}</h1>
              <p className="text-xl max-w-2xl">Get in touch with us for any inquiries or support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Address</h3>
                  <p className="text-slate-600">
                    Plot No. 123, Industrial Area
                    <br />
                    Phase II, City, State - 123456
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Phone</h3>
                  <p className="text-slate-600">+91 1234567890</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Email</h3>
                  <p className="text-slate-600">info@sudeeppolymers.com</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input type="tel" placeholder="Your Phone" />
              <Textarea placeholder="Your Message" className="h-32" />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

