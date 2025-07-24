'use client'
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative inline-flex items-center justify-center rounded-md w-9 h-9"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:hidden" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all hidden dark:block" />
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
