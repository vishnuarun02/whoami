export default function Resume() {
  return (
    <div className="font-body">
      <h1 className="text-4xl font-heading mb-6">Resume</h1>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8 rounded">
        <strong>🚧 Under Construction</strong>
        <p>This resume page is currently being built. The details below are placeholder text and do not represent real information.</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-heading mb-4">Education</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Degree Placeholder</h3>
          <p>University Name, Year-Year</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Another Degree Placeholder</h3>
          <p>Another University, Year-Year</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-heading mb-4">Work Experience</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Job Title Placeholder, Company Name</h3>
          <p>Year-Year</p>
          <ul className="list-disc pl-6">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Implemented machine learning models for predictive maintenance</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Software Engineer Intern, InnovateAI</h3>
          <p>Summer 2019</p>
          <ul className="list-disc pl-6">
            <li>Developed natural language processing algorithms</li>
            <li>Contributed to open-source machine learning libraries</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-heading mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-primary text-text px-2 py-1 rounded-full text-sm">Python</span>
          <span className="bg-secondary text-text px-2 py-1 rounded-full text-sm">JavaScript</span>
          <span className="bg-purple text-background px-2 py-1 rounded-full text-sm">Machine Learning</span>
          <span className="bg-primary text-text px-2 py-1 rounded-full text-sm">React</span>
          <span className="bg-secondary text-text px-2 py-1 rounded-full text-sm">Node.js</span>
          <span className="bg-purple text-background px-2 py-1 rounded-full text-sm">AWS</span>
        </div>
      </section>
    </div>
  )
}

