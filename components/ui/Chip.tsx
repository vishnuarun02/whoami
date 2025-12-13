import { cn } from "@/lib/utils"
import { UI } from "@/lib/constants"
import type { HTMLAttributes } from "react"

/**
 * Generate chip palette from CSS variables
 */
const CHIP_PALETTE = Array.from({ length: UI.chipPaletteLength }, (_, i) => ({
  bg: `var(--chip-${i + 1}-bg)`,
  text: `var(--chip-${i + 1}-text)`,
  border: `var(--chip-${i + 1}-border)`,
})) as const

type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: number
}

/**
 * Colored chip/badge component with multiple tone options
 */
export function Chip({ tone = 0, className, style, children, ...rest }: ChipProps) {
  // Handle negative tones by wrapping around
  const normalizedTone = ((tone % CHIP_PALETTE.length) + CHIP_PALETTE.length) % CHIP_PALETTE.length
  const color = CHIP_PALETTE[normalizedTone]

  return (
    <span
      {...rest}
      style={{
        backgroundColor: color.bg,
        color: color.text,
        borderColor: color.border,
        boxShadow: `0 1px 0 ${color.border}`,
        ...style,
      }}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium border transition-colors duration-200",
        className
      )}
    >
      {children}
    </span>
  )
}

