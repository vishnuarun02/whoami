import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

const sizeClasses = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "w-full",
}

export function Container({ 
  children, 
  className,
  size = "md" 
}: ContainerProps) {
  return (
    <div className={cn(
      "mx-auto px-4 sm:px-6",
      sizeClasses[size],
      className
    )}>
      {children}
    </div>
  )
}

