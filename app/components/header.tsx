"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about/company" },
  { name: "INFRASTRUCTURE", href: "/infrastructure" },
  { name: "SUCCESS STORIES", href: "/success-stories" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "CORPORATE CSR", href: "/corporate-csr" },
  { name: "CONTACT US", href: "/contact" },
  { name: "CAREERS", href: "/careers" },
  { name: "IMAGE GALLERY", href: "/image-gallery" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=60&width=150&text=Sudeep+Polymers"
              alt="Sudeep Polymers Logo"
              width={150}
              height={60}
              className="h-8 w-auto md:h-12"
            />
          </Link>
          <nav className="hidden md:flex items-stretch h-full">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center text-sm font-medium transition-colors relative px-3 group ${
                  pathname === item.href
                    ? "text-blue-600 bg-blue-50/80"
                    : "text-blue-900 hover:text-blue-600 hover:bg-blue-50/80"
                }`}
              >
                {item.name}
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform origin-left transition-transform ${
                    pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-blue-900 hover:text-blue-600 hover:bg-blue-50/80 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

