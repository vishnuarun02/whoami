import ThoughtCard from "../../components/ThoughtCard"
import { thoughts } from "../../data/thoughts"

export default function Thoughts() {
  return (
    <div className="font-body">
      <h1 className="text-4xl font-heading mb-6">Thoughts</h1>

      <div className="space-y-8">
        {thoughts.map((thought, index) => (
          <ThoughtCard
            key={index}
            date={thought.date}
            content={thought.content}
          />
        ))}
      </div>
    </div>
  )
}



