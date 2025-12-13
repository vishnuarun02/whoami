import { Chip } from "@/components/ui/Chip"
import { PageShell } from "@/components/layout/PageShell"
import { SectionHeader } from "@/components/domain/SectionHeader"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { UI } from "@/lib/constants"

export default function Projects() {
  return (
    <PageShell>
      <SectionHeader title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="AI-powered Personal Assistant"
          description="Developed a voice-activated personal assistant using natural language processing and machine learning algorithms."
          tags={["Python", "TensorFlow", "NLP"]}
          toneOffset={0}
        />
        <ProjectCard
          title="Blockchain-based Voting System"
          description="Created a secure and transparent voting system using blockchain technology to ensure the integrity of election results."
          tags={["Solidity", "Ethereum", "Web3.js"]}
          toneOffset={3}
        />
        <ProjectCard
          title="Augmented Reality Navigation App"
          description="Built a mobile app that uses AR to provide real-time navigation and information about surroundings."
          tags={["Unity", "ARKit", "C#"]}
          toneOffset={6}
        />
        <ProjectCard
          title="Sustainable Energy Monitoring Platform"
          description="Developed a web-based platform to monitor and optimize energy consumption in smart buildings."
          tags={["React", "Node.js", "IoT"]}
          toneOffset={1}
        />
      </div>
    </PageShell>
  )
}

function ProjectCard({
  title,
  description,
  tags,
  toneOffset = 0,
}: {
  title: string
  description: string
  tags: string[]
  toneOffset?: number
}) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-heading">{title}</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Chip key={tag} tone={(toneOffset + index) % UI.chipPaletteLength}>
              {tag}
            </Chip>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

