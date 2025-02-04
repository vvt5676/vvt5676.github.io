"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface SidebarNavProps {
  items: {
    name: string
    href: string
  }[]
}

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className="-mx-6">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center py-2 text-sm font-medium transition-colors relative w-full",
            "hover:bg-blue-50/80 hover:text-blue-600",
            "focus:outline-none",
            pathname === item.href
              ? "bg-blue-50/80 text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
              : "text-blue-900 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-blue-600",
          )}
        >
          <span className="px-6">{item.name}</span>
        </Link>
      ))}
    </nav>
  )
}

