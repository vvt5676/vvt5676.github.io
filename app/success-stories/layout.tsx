import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

const tabs = [
  { name: "Our Clients", href: "/success-stories/clients" },
  { name: "Awards & Recognitions", href: "/success-stories/awards" },
  { name: "End Users", href: "/success-stories/end-users" },
]

export default function SuccessStoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="md:flex">
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

