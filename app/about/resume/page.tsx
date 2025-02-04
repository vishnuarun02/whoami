export default function Resume() {
  return (
    <div className="font-body">
      <h1 className="text-4xl font-heading mb-6">Resume</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-heading mb-4">Education</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Master of Science in Computer Science</h3>
          <p>Stanford University, 2018-2020</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Bachelor of Engineering in Information Technology</h3>
          <p>Indian Institute of Technology, Bombay, 2014-2018</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-heading mb-4">Work Experience</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Senior Software Engineer, TechCorp</h3>
          <p>2020-Present</p>
          <ul className="list-disc pl-6">
            <li>Lead developer for cloud-native applications</li>
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

