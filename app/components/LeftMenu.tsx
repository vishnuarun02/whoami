'use client'
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { useState, useEffect, useRef } from "react"
import { getPageColor, cycleColor, initializeColor } from "@/lib/colorUtils"

// Hamburger icon SVG
function Hamburger({ onClick }: { onClick: () => void }) {
  return (
    <button
      aria-label="Open menu"
      onClick={onClick}
      className="md:hidden p-2 focus:outline-none"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>
  );
}

const menuItems = [
  {
    title: "About",
    subItems: ["prologue", "now", "resume", "projects"],
  },
  {
    title: "LifeLog",
    subItems: ["bookshelf", "bucketlist", "blogs", "photo album", "recipes", "thoughts"],
  }
];

export default function LeftMenu() {
  const [menuColor, setMenuColor] = useState<string>("")
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      initializeColor()
      setMenuColor(getPageColor())

      const handleStorageChange = (e: StorageEvent) => {
        if (e.key === 'currentColorIndex') {
          setMenuColor(getPageColor())
        }
      }

      const handleTitleClick = () => {
        cycleColor()
        setMenuColor(getPageColor())
        window.dispatchEvent(new Event('colorChange'))
      }

      window.addEventListener('storage', handleStorageChange)
      const titleElement = document.querySelector('.title-click')
      titleElement?.addEventListener('click', handleTitleClick)

      return () => {
        window.removeEventListener('storage', handleStorageChange)
        titleElement?.removeEventListener('click', handleTitleClick)
      }
    }
  }, [])

  return (
    <>
      {/* Hamburger button on mobile */}
      <div className="md:hidden flex flex-row justify-between items-center w-full px-4 py-3 bg-background border-b border-border">
        <div className="flex flex-row items-center">
          <Hamburger onClick={() => setDrawerOpen(true)} />
          <Link href="/" className="ml-2 flex items-center flex-shrink-0">
            <h1
              className="m-0 text-2xl font-heading whitespace-nowrap transition-colors hover:text-[var(--menu-color)] title-click cursor-pointer"
              style={{ '--menu-color': menuColor } as React.CSSProperties}
            >
              Vishnu Arun
            </h1>
          </Link>
        </div>
        <ThemeToggle />
      </div>

      {/* Drawer overlay for mobile */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 flex"
          aria-modal="true"
          role="dialog"
        >
          {/* Overlay background */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 transition-opacity"
            onClick={() => setDrawerOpen(false)}
          />
          {/* Drawer panel */}
          <nav
            className="relative w-64 h-full bg-background border-r border-border p-6 z-50 shadow-xl animate-slide-in-left"
          >
            <div className="flex flex-row justify-between items-center mb-12 w-full">
              <Link href="/" className="flex items-center flex-shrink-0">
                <h1
                  className="m-0 text-2xl font-heading whitespace-nowrap transition-colors hover:text-[var(--menu-color)] title-click cursor-pointer"
                  style={{ '--menu-color': menuColor } as React.CSSProperties}
                >
                  Vishnu Arun
                </h1>
              </Link>
              <button
                aria-label="Close menu"
                className="p-2 ml-2 focus:outline-none"
                onClick={() => setDrawerOpen(false)}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <ul className="space-y-8">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <h2 className="text-2xl font-heading mb-3">{item.title}</h2>
                  <ul className="pl-4 space-y-1">
                    {item.subItems.map((subItem) => (
                      <li key={subItem}>
                        <Link
                          href={`/${item.title.toLowerCase()}/${subItem.toLowerCase().replace(' ', '-')}`}
                          className="relative group inline-block"
                          onClick={() => setDrawerOpen(false)}
                        >
                          <span
                            className="text-lg font-mono text-muted-foreground group-hover:text-[var(--menu-color)] transition-colors"
                            style={{ '--menu-color': menuColor } as React.CSSProperties}
                          >
                            {subItem === 'bucketlist' ? `${subItem} 🔒` : subItem}
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
        </div>
      )}

      {/* Sidebar always visible on desktop */}
      <nav className="hidden md:block w-64 h-screen bg-background border-r border-border p-6 flex-shrink-0">
        <div className="flex flex-row justify-between items-center mb-12 w-full">
          <Link href="/" className="flex items-center flex-shrink-0">
            <h1
              className="m-0 text-2xl font-heading whitespace-nowrap transition-colors hover:text-[var(--menu-color)] title-click cursor-pointer"
              style={{ '--menu-color': menuColor } as React.CSSProperties}
            >
              Vishnu Arun
            </h1>
          </Link>
          <div className="flex-shrink-0">
            <ThemeToggle />
          </div>
        </div>
        <ul className="space-y-8">
          {menuItems.map((item) => (
            <li key={item.title}>
              <h2 className="text-2xl font-heading mb-3">{item.title}</h2>
              <ul className="pl-4 space-y-1">
                {item.subItems.map((subItem) => (
                  <li key={subItem}>
                    <Link
                      href={`/${item.title.toLowerCase()}/${subItem.toLowerCase().replace(' ', '-')}`}
                      className="relative group inline-block"
                    >
                      <span
                        className="text-lg font-mono text-muted-foreground group-hover:text-[var(--menu-color)] transition-colors"
                        style={{ '--menu-color': menuColor } as React.CSSProperties}
                      >
                        {subItem === 'bucketlist' ? `${subItem} 🔒` : subItem}
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
    </>
  )

}
