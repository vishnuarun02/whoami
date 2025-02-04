export default function Thoughts() {
  return (
    <div className="font-body">
      <h1 className="text-4xl font-heading mb-6">Thoughts</h1>

      <div className="space-y-8">
        <ThoughtCard
          date="June 10, 2023"
          content="In the realm of AI, ethics must be our guiding star. As we push the boundaries of what's possible, we must always consider the societal impact of our creations."
        />
        <ThoughtCard
          date="May 28, 2023"
          content="The beauty of open-source lies not just in the code shared, but in the community built around it. It's a testament to human collaboration and shared progress."
        />
        <ThoughtCard
          date="May 15, 2023"
          content="Quantum computing feels like standing at the edge of a new frontier. The potential is immense, but so are the challenges. It's an exciting time to be in tech!"
        />
        <ThoughtCard
          date="April 30, 2023"
          content="In our rush to build the next big thing, we often forget the importance of digital privacy. As developers, we have a responsibility to protect user data."
        />
      </div>
    </div>
  )
}

function ThoughtCard({ date, content }: { date: string; content: string }) {
  return (
    <div className="border border-text/10 p-6 rounded-lg">
      <p className="text-sm text-link mb-2">{date}</p>
      <p className="text-lg italic">&ldquo;{content}&rdquo;</p>
    </div>
  )
}

