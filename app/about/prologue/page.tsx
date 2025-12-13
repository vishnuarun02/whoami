import { PageShell } from "@/components/layout/PageShell"
import { SectionHeader } from "@/components/domain/SectionHeader"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"

export default function Prologue() {
  return (
    <PageShell>
      <SectionHeader 
        title="Prologue" 
        description="Welcome to my digital space. I'm Vishnu Arun, a passionate technologist and creative thinker. This prologue serves as an introduction to my journey and the experiences that have shaped me."
      />
      <Section>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Exploring the intersection of technology and creativity.</li>
          <li>Building innovative projects and expanding my knowledge.</li>
          <li>Writing about my experiences and insights in tech.</li>
          <li>Always eager to learn and grow in this dynamic digital era.</li>
        </ul>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Technology</Badge>
          <Badge variant="secondary">Creativity</Badge>
          <Badge variant="secondary">Innovation</Badge>
        </div>
      </Section>
    </PageShell>
  )
}
