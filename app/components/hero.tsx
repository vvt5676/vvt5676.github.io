import { Button } from "@/components/ui/button"
import { useTypewriter } from "../hooks/useTypewriter"

export default function Hero() {
  const typewriterText = useTypewriter("Creating Quality Plastic Molds with Precision and Care", 50)

  return (
    <section className="relative py-20 md:py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920&text=Sudeep+Polymers+Facility)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/90" />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 min-h-[3em] flex items-center">
            {typewriterText}
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Transforming ideas into high-quality plastic products for every industry
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            Explore Our Products
          </Button>
        </div>
      </div>
    </section>
  )
}

