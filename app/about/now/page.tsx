export default function Now() {
  return (
    <div className="font-body">
      <h1 className="text-4xl font-heading mb-6">Now</h1>
      <p className="mb-4">Here's what I'm currently focused on:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Developing a new machine learning model for predictive analytics</li>
        <li>Learning Rust programming language</li>
        <li>Writing a book on the future of technology and its impact on society</li>
        <li>Training for a half-marathon</li>
      </ul>
      <p>Last updated: June 15, 2023</p>
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="bg-primary text-text px-2 py-1 rounded-full text-sm">Machine Learning</span>
        <span className="bg-secondary text-text px-2 py-1 rounded-full text-sm">Rust</span>
        <span className="bg-purple text-background px-2 py-1 rounded-full text-sm">Writing</span>
      </div>
    </div>
  )
}

