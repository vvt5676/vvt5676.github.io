import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

const tabs = [
  { name: "Job Application", href: "/careers" },
  { name: "Current Openings", href: "/careers/openings" },
]

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Header />
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
      <Footer />
    </div>
  )
}

