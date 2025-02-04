export default function Projects() {
  return (
    <div className="font-body">
      <h1 className="text-4xl font-heading mb-6">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="AI-powered Personal Assistant"
          description="Developed a voice-activated personal assistant using natural language processing and machine learning algorithms."
          tags={["Python", "TensorFlow", "NLP"]}
        />
        <ProjectCard
          title="Blockchain-based Voting System"
          description="Created a secure and transparent voting system using blockchain technology to ensure the integrity of election results."
          tags={["Solidity", "Ethereum", "Web3.js"]}
        />
        <ProjectCard
          title="Augmented Reality Navigation App"
          description="Built a mobile app that uses AR to provide real-time navigation and information about surroundings."
          tags={["Unity", "ARKit", "C#"]}
        />
        <ProjectCard
          title="Sustainable Energy Monitoring Platform"
          description="Developed a web-based platform to monitor and optimize energy consumption in smart buildings."
          tags={["React", "Node.js", "IoT"]}
        />
      </div>
    </div>
  )
}

function ProjectCard({ title, description, tags }: { title: string; description: string; tags: string[] }) {
  return (
    <div className="border border-text/10 p-6 rounded-lg">
      <h2 className="text-2xl font-heading mb-4">{title}</h2>
      <p className="mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-2 py-1 rounded-full text-sm ${index % 3 === 0 ? "bg-primary" : index % 3 === 1 ? "bg-secondary" : "bg-purple text-background"}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

