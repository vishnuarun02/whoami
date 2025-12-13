import { Chip } from "@/components/ui/Chip"
import { PageShell } from "@/components/layout/PageShell"
import { SectionHeader } from "@/components/domain/SectionHeader"
import { Section } from "@/components/layout/Section"
import { Card, CardContent } from "@/components/ui/card"
import type { SkillChip } from "@/lib/types"

const skills: SkillChip[] = [
  { label: "Python", tone: 0 },
  { label: "JavaScript", tone: 2 },
  { label: "Machine Learning", tone: 5 },
  { label: "React", tone: 1 },
  { label: "Node.js", tone: 3 },
  { label: "AWS", tone: 6 },
]

export default function Resume() {
  return (
    <PageShell>
      <SectionHeader title="Resume" />

      <Card className="mb-8 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950/20">
        <CardContent className="pt-6">
          <strong>🚧 Under Construction</strong>
          <p className="mt-2">This resume page is currently being built. The details below are placeholder text and do not represent real information.</p>
        </CardContent>
      </Card>

      <Section>
        <h2 className="text-2xl font-heading mb-4">Education</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Degree Placeholder</h3>
          <p className="text-muted-foreground">University Name, Year-Year</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Another Degree Placeholder</h3>
          <p className="text-muted-foreground">Another University, Year-Year</p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-heading mb-4">Work Experience</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Job Title Placeholder, Company Name</h3>
          <p className="text-muted-foreground mb-2">Year-Year</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Implemented machine learning models for predictive maintenance</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Software Engineer Intern, InnovateAI</h3>
          <p className="text-muted-foreground mb-2">Summer 2019</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Developed natural language processing algorithms</li>
            <li>Contributed to open-source machine learning libraries</li>
          </ul>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-heading mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map(({ label, tone }) => (
            <Chip key={label} tone={tone}>
              {label}
            </Chip>
          ))}
        </div>
      </Section>
    </PageShell>
  )
}

