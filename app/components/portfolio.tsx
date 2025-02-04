import Image from "next/image"

const products = [
  {
    name: "Automotive Components",
    image: "/placeholder.svg?height=300&width=400&text=Automotive",
  },
  {
    name: "Industrial Parts",
    image: "/placeholder.svg?height=300&width=400&text=Industrial",
  },
  {
    name: "Custom Solutions",
    image: "/placeholder.svg?height=300&width=400&text=Custom",
  },
]

export default function Portfolio() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">Our Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="group relative overflow-hidden rounded-lg">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

