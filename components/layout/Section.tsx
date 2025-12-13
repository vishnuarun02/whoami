import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  spacing?: "sm" | "md" | "lg"
}

const spacingClasses = {
  sm: "mb-6",
  md: "mb-8",
  lg: "mb-12",
}

export function Section({ 
  children, 
  className,
  spacing = "md" 
}: SectionProps) {
  return (
    <section className={cn(
      spacingClasses[spacing],
      className
    )}>
      {children}
    </section>
  )
}

