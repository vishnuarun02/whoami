export default function Prologue() {
  return (
    <div className="font-body p-4 md:p-6">
      <h1 className="text-4xl font-heading mb-6">Prologue</h1>
      <p className="mb-4 text-foreground text-base">
        Welcome to my digital space. I'm Vishnu Arun, a passionate technologist and creative thinker. This prologue
        serves as an introduction to my journey and the experiences that have shaped me.
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground text-base">
        <li>Exploring the intersection of technology and creativity.</li>
        <li>Building innovative projects and expanding my knowledge.</li>
        <li>Writing about my experiences and insights in tech.</li>
        <li>Always eager to learn and grow in this dynamic digital era.</li>
      </ul>
      <div className="flex flex-wrap gap-2">
        <span
          style={{ backgroundColor: 'rgb(78, 42, 42)' }}
          className="text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
        >
          Technology
        </span>
        <span
          style={{ backgroundColor: 'rgb(107, 112, 92)' }}
          className="text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
        >
          Creativity
        </span>
        <span
          style={{ backgroundColor: 'rgb(199, 124, 92)' }}
          className="text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
        >
          Innovation
        </span>
      </div>
    </div>
  )
}
