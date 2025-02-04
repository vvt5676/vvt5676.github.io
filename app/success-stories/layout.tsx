import { SidebarNav } from "@/components/ui/sidebar"
import Header from "../components/header"
import Footer from "../components/footer"
import type React from "react"

const sidebarNavItems = [
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
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex">
        {/* Side Navigation */}
        <div className="w-64 min-h-[calc(100vh-5rem)] bg-white border-r">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Success Stories</h2>
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

