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
    <nav className="space-y-1">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors",
            pathname === item.href
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "text-blue-900 hover:bg-white hover:text-blue-600",
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

