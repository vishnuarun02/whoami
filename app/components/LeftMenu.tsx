'use client'
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { useState, useEffect } from "react"
import { getPageColor, cycleColor, initializeColor } from "@/lib/colorUtils"

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
  const [menuColor, setMenuColor] = useState(getPageColor())

  useEffect(() => {
    // Initialize color on first load
    initializeColor()
    
    // Update color immediately
    setMenuColor(getPageColor())

    // Function to handle storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'currentColorIndex') {
        setMenuColor(getPageColor())
      }
    }

    // Function to handle clicks on the title
    const handleTitleClick = () => {
      cycleColor()
      setMenuColor(getPageColor())
      // Dispatch a custom event to notify other components
      window.dispatchEvent(new Event('colorChange'))
    }

    // Add event listeners
    window.addEventListener('storage', handleStorageChange)
    const titleElement = document.querySelector('.title-click')
    titleElement?.addEventListener('click', handleTitleClick)

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      titleElement?.removeEventListener('click', handleTitleClick)
    }
  }, [])

  return (
    <nav className="w-64 h-screen bg-background border-r border-border p-6">
      <div className="flex items-center justify-between mb-12">
        <Link href="/" className="block">
          <h1 
            className="text-2xl font-heading whitespace-nowrap transition-colors hover:text-[var(--menu-color)] title-click cursor-pointer"
            style={{ 
              '--menu-color': menuColor
            } as React.CSSProperties}
          >
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
                    className="relative group inline-block"
                  >
                    <span 
                      className="text-lg font-mono text-muted-foreground group-hover:text-[var(--menu-color)] transition-colors"
                      style={{ '--menu-color': menuColor } as React.CSSProperties}
                    >
                      {subItem === "bucketlist" ? `${subItem} 🔒` : subItem}
                    </span>
                    <span 
                      className="absolute left-0 -bottom-1 w-0 h-0.5 transition-all group-hover:w-full"
                      style={{ backgroundColor: menuColor }}
                    />
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