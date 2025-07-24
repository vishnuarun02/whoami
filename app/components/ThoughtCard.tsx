export default function ThoughtCard({ date, content }: { date: string; content: string }) {
  return (
    <div className="border border-text/10 p-6 rounded-lg">
      <p className="text-sm text-link mb-2">{date}</p>
      <p className="text-lg italic">&ldquo;{content}&rdquo;</p>
    </div>
  )
}
