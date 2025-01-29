import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"
import { useTypewriter } from "../hooks/useTypewriter"

const tabs = [
  { name: "The Company", href: "/about/company" },
  { name: "Our People", href: "/about/people" },
  { name: "Our History", href: "/about/history" },
  { name: "Certifications", href: "/about/certifications" },
]

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const typewriterText = useTypewriter("About Us", 50)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600">
            <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2]" />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">{typewriterText}</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Learn about our company, our people, our history, and our certifications
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Side Navigation */}
          <div className="w-64 bg-slate-50 p-6 border-r min-h-[calc(100vh-5rem)]">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  href={tab.href}
                  className="block px-4 py-2 rounded-lg text-blue-900 hover:bg-white hover:text-blue-600 transition-colors"
                >
                  {tab.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

