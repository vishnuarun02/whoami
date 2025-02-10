export default function Now() {
  return (
    <div className="font-body p-4 md:p-6">
      <h1 className="text-4xl font-heading mb-6">Now</h1>
      <p className="mb-4 text-foreground text-base">
        Here's what I'm currently focused on:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground text-base">
        <li>Getting a masters in data science, enables me to tell math-backed stories!</li>
        <li>Assistant Manager @ GW Lerner's</li>
        <li>Building DocFlix with the most amazing teammates!</li>
        <li>Searching for a Full Time Job!</li>
      </ul>
      <p className="mb-6 text-muted-foreground text-base">Last updated: Feb 8, 2025</p>
      <div className="flex flex-wrap gap-2">
        <span 
          style={{ backgroundColor: 'rgb(57, 115, 103)' }}
          className="text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
        >
          Machine Learning
        </span>
        <span 
          style={{ backgroundColor: 'rgb(199, 124, 92)' }}
          className="text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
        >
          Analytics
        </span>
        <span 
          style={{ backgroundColor: 'rgb(120, 81, 169' }}
          className="text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
        >
          Writing
        </span>
        <span 
          style={{ backgroundColor: 'rgb(91, 127, 152)' }}
          className="text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
        >
          Data Science
        </span>
      </div>
    </div>
  )
}
