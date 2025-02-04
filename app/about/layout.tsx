import { SidebarNav } from "@/components/ui/sidebar"
import Header from "../components/header"
import Footer from "../components/footer"
import type { ReactNode } from "react"


const sidebarNavItems = [
  { name: "The Company", href: "/about/company" },
  { name: "Our People", href: "/about/people" },
  { name: "Our History", href: "/about/history" },
  { name: "Certifications", href: "/about/certifications" },
]

export default function AboutLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex">
        {/* Side Navigation */}
        <div className="w-64 min-h-[calc(100vh-5rem)] bg-white border-r">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">About Us</h2>
            <SidebarNav items={sidebarNavItems} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

