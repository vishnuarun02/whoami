export default function PhotoAlbum() {
  return (
    <div className="font-body">
      <h1 className="text-4xl font-heading mb-6">Photo Album</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <PhotoCard
          src="/placeholder.svg?height=300&width=300"
          alt="Hiking in the mountains"
          caption="Exploring the Himalayas"
        />
        <PhotoCard
          src="/placeholder.svg?height=300&width=300"
          alt="Coding setup"
          caption="My workspace during a hackathon"
        />
        <PhotoCard
          src="/placeholder.svg?height=300&width=300"
          alt="Conference presentation"
          caption="Speaking at TechCon 2023"
        />
        <PhotoCard
          src="/placeholder.svg?height=300&width=300"
          alt="Sunset at the beach"
          caption="Relaxing after a long day of coding"
        />
        <PhotoCard
          src="/placeholder.svg?height=300&width=300"
          alt="Robot prototype"
          caption="Working on my latest robotics project"
        />
        <PhotoCard
          src="/placeholder.svg?height=300&width=300"
          alt="Team photo"
          caption="With my amazing development team"
        />
      </div>
    </div>
  )
}

function PhotoCard({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <div className="border border-text/10 rounded-lg overflow-hidden">
      <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-48 object-cover" />
      <p className="p-4 text-sm">{caption}</p>
    </div>
  )
}

