'use client'
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

const menuItems = [
  {
    title: "About",
    subItems: ["prologue", "now", "resume", "projects"],
  },
  {
    title: "LifeLog",
    subItems: ["bookshelf", "bucketlist", "blogs", "photo album", "recipes", "thoughts"],
  },
]

export default function LeftMenu() {
  return (
    <nav className="w-64 h-screen bg-background border-r border-border p-6">
      <div className="flex items-center justify-between mb-12">
        <Link href="/" className="block">
          <h1 className="text-2xl font-heading hover:text-primary transition-colors whitespace-nowrap">
            Vishnu Arun
          </h1>
        </Link>
        <div className="scale-125">
          <ThemeToggle />
        </div>
      </div>
      <ul className="space-y-6">
        {menuItems.map((item) => (
          <li key={item.title}>
            <h2 className="text-2xl font-heading mb-3">{item.title}</h2>
            <ul className="pl-4">
              {item.subItems.map((subItem) => (
                <li key={subItem} className="mb-1">
                  <Link
                    href={`/${item.title.toLowerCase()}/${subItem.toLowerCase().replace(" ", "-")}`}
                    className="text-lg font-mono text-muted-foreground hover:text-primary transition-colors inline-block relative group"
                  >
                    {subItem === "bucketlist" ? `${subItem} 🔒` : subItem}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}