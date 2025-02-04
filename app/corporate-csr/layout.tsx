import { SidebarNav } from "@/components/ui/sidebar"
import Header from "../components/header"
import Footer from "../components/footer"
import type React from "react"

const sidebarNavItems = [
  { name: "Overview", href: "/corporate-csr" },
  { name: "Annual Day", href: "/corporate-csr/annual-day" },
  { name: "Blood Donation", href: "/corporate-csr/blood-donation" },
  { name: "Community Initiatives", href: "/corporate-csr/community" },
]

export default function CSRLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex">
        {/* Side Navigation */}
        <div className="w-64 min-h-[calc(100vh-5rem)] bg-white border-r">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Corporate CSR</h2>
            <SidebarNav items={sidebarNavItems} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="p-6">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

