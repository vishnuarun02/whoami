import { Chip } from "@/components/ui/Chip"
import { PageShell } from "@/components/layout/PageShell"
import { SectionHeader } from "@/components/domain/SectionHeader"
import { Section } from "@/components/layout/Section"
import type { SkillChip } from "@/lib/types"

const focusAreas: SkillChip[] = [
  { label: "Machine Learning", tone: 0 },
  { label: "Analytics", tone: 2 },
  { label: "Writing", tone: 3 },
  { label: "Data Science", tone: 1 },
  { label: "Technology", tone: 7 },
  { label: "Creativity", tone: 4 },
  { label: "Innovation", tone: 5 },
]

export default function Now() {
  return (
    <PageShell>
      <SectionHeader
        title="Now"
        description="Here's what I'm currently focused on:"
      />
      <Section>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Getting a masters in data science, enables me to tell math-backed stories!</li>
          <li>Assistant Manager @ GW Lerner's</li>
          <li>Building DocFlix with the most amazing teammates!</li>
          <li>Searching for a Full Time Job!</li>
        </ul>
        <p className="mb-6 text-muted-foreground text-sm">Last updated: Feb 8, 2025</p>
        <div className="flex flex-wrap gap-2">
          {focusAreas.map(({ label, tone }) => (
            <Chip key={label} tone={tone}>
              {label}
            </Chip>
          ))}
        </div>
      </Section>
    </PageShell>
  )
}
