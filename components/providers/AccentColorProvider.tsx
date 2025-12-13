"use client"

import { useEffect, useCallback } from "react"
import { DEFAULT_COLOR, getPageColor, initializeColor } from "@/lib/colorUtils"
import { CSS_VARS, EVENTS } from "@/lib/constants"

export default function AccentColorProvider({ children }: { children: React.ReactNode }) {
  const applyAccentColor = useCallback(() => {
    const color = getPageColor() ?? DEFAULT_COLOR
    document.documentElement.style.setProperty(CSS_VARS.accentColor, color)
    document.documentElement.style.setProperty(CSS_VARS.menuColor, color)
    document.documentElement.style.setProperty(CSS_VARS.primaryRgb, color)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    initializeColor()
    applyAccentColor()

    window.addEventListener("storage", applyAccentColor)
    window.addEventListener(EVENTS.colorChange, applyAccentColor)

    return () => {
      window.removeEventListener("storage", applyAccentColor)
      window.removeEventListener(EVENTS.colorChange, applyAccentColor)
    }
  }, [applyAccentColor])

  return <>{children}</>
}
