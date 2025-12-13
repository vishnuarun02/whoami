import ThoughtCard from "@/components/cards/ThoughtCard"
import { thoughts } from "@/data/thoughts"
import { PageShell } from "@/components/layout/PageShell"
import { SectionHeader } from "@/components/domain/SectionHeader"

export default function Thoughts() {
  return (
    <PageShell>
      <SectionHeader title="Thoughts" />
      <div className="space-y-6">
        {thoughts.map((thought, index) => (
          <ThoughtCard
            key={index}
            date={thought.date}
            content={thought.content}
          />
        ))}
      </div>
    </PageShell>
  )
}



