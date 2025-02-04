'use client'

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { useState } from "react"
import { Menu, X } from "lucide-react"

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button - Only shows on mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-background border border-border rounded-md"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Menu */}
      <nav className={`
        fixed md:relative // Makes menu fixed on mobile, relative on desktop
        top-0 left-0 
        w-64 h-screen 
        bg-background border-r border-border 
        p-6 font-nav
        transition-transform duration-300
        md:transform-none
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        z-40
      `}>
        <div className="flex items-center justify-between mb-6 pt-8 md:pt-0">
          <Link href="/" className="block">
            <h1 className="text-2xl font-heading hover:text-primary transition-colors">Vishnu Arun</h1>
          </Link>
          <ThemeToggle />
        </div>
        <ul>
          {menuItems.map((item) => (
            <li key={item.title} className="mb-4">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <ul className="pl-4">
                {item.subItems.map((subItem) => (
                  <li key={subItem} className="mb-2">
                    <Link
                      href={`/${item.title.toLowerCase()}/${subItem.toLowerCase().replace(" ", "-")}`}
                      className="text-muted-foreground hover:text-primary transition-colors inline-block relative group"
                      onClick={() => setIsMenuOpen(false)}
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

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}