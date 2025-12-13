'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import type { CSSProperties } from "react"
import { Menu } from "lucide-react"
import { ThemeToggle } from "../theme/ThemeToggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { getPageColor, cycleColor, initializeColor, DEFAULT_COLOR } from "@/lib/colorUtils"
import { NAVIGATION_MENU, SITE_CONFIG, ROUTES, CSS_VARS, EVENTS, STORAGE_KEYS } from "@/lib/constants"

function MenuLinks({ menuColor, onLinkClick }: { menuColor: string; onLinkClick?: () => void }) {
    return (
        <ul className="space-y-8">
            {NAVIGATION_MENU.map((section) => (
                <li key={section.title}>
                    <h2 className="text-2xl font-heading mb-3">{section.title}</h2>
                    <ul className="pl-4 space-y-1">
                        {section.items.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className="relative group inline-block"
                                    onClick={onLinkClick}
                                >
                                    <span
                                        className="text-lg font-mono text-muted-foreground group-hover:text-[var(--menu-color)] transition-colors"
                                        style={{ [CSS_VARS.menuColor]: menuColor } as CSSProperties}
                                    >
                                        {item.locked ? `${item.label} 🔒` : item.label}
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
    )
}

export default function LeftMenu() {
    const [menuColor, setMenuColor] = useState<string>(() => DEFAULT_COLOR)
    const [drawerOpen, setDrawerOpen] = useState(false)

    useEffect(() => {
        if (typeof window === "undefined") return

        initializeColor()

        const applyColor = (color: string) => {
            setMenuColor(color)
            document.documentElement.style.setProperty(CSS_VARS.accentColor, color)
            document.documentElement.style.setProperty(CSS_VARS.menuColor, color)
        }

        // Apply initial color
        applyColor(getPageColor())

        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === STORAGE_KEYS.colorIndex) {
                applyColor(getPageColor())
            }
        }

        const handleColorChange = () => {
            applyColor(getPageColor())
        }

        const handleTitleClick = () => {
            cycleColor()
            const cycledColor = getPageColor()
            applyColor(cycledColor)
            window.dispatchEvent(new Event(EVENTS.colorChange))
        }

        window.addEventListener('storage', handleStorageChange)
        window.addEventListener(EVENTS.colorChange, handleColorChange)
        const titleElement = document.querySelector('.title-click')
        titleElement?.addEventListener('click', handleTitleClick)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
            window.removeEventListener(EVENTS.colorChange, handleColorChange)
            titleElement?.removeEventListener('click', handleTitleClick)
        }
    }, [])

    const TitleLink = ({ className = "" }: { className?: string }) => (
        <Link href={ROUTES.home} className={`flex items-center ${className}`}>
            <h1
                className="m-0 text-2xl font-heading whitespace-nowrap transition-colors hover:text-[var(--menu-color)] title-click cursor-pointer"
                style={{ [CSS_VARS.menuColor]: menuColor } as CSSProperties}
            >
                {SITE_CONFIG.name}
            </h1>
        </Link>
    )

    return (
        <>
            {/* Mobile header with hamburger */}
            <div className="md:hidden flex flex-row justify-between items-center w-full px-4 py-3 bg-background border-b border-border">
                <div className="flex flex-row items-center">
                    <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
                        <SheetTrigger asChild>
                            <button className="md:hidden p-2 transition-transform duration-150 hover:scale-110 active:scale-95 focus:outline-none">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-64 p-6">
                            <TitleLink className="mb-8" />
                            <MenuLinks menuColor={menuColor} onLinkClick={() => setDrawerOpen(false)} />
                        </SheetContent>
                    </Sheet>
                    <TitleLink className="ml-2 flex-shrink-0" />
                </div>
                <ThemeToggle />
            </div>

            {/* Desktop sidebar */}
            <nav className="hidden md:block w-64 h-screen bg-background border-r border-border p-6 flex-shrink-0">
                <div className="flex flex-row justify-between items-center mb-12 w-full">
                    <TitleLink className="flex-shrink-0" />
                    <div className="flex-shrink-0">
                        <ThemeToggle />
                    </div>
                </div>
                <MenuLinks menuColor={menuColor} />
            </nav>
        </>
    )
}
