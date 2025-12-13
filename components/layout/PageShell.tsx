import { cn } from "@/lib/utils"

interface PageShellProps {
  children: React.ReactNode
  width?: "default" | "wide" | "full"
  className?: string
}

const widthClasses = {
  default: "max-w-4xl",
  wide: "max-w-6xl",
  full: "w-full",
}

export function PageShell({ 
  children, 
  width = "default",
  className 
}: PageShellProps) {
  return (
    <div className={cn(
      "mx-auto px-4 py-6 md:px-8 md:py-8",
      widthClasses[width],
      className
    )}>
      {children}
    </div>
  )
}

