import Image from 'next/image';
import PhotoCard from '../../components/PhotoCard';

export default function PhotoAlbum() {
  return (
    <div className="font-body">
      <h1 className="text-4xl font-heading mb-6">Photo Album</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <PhotoCard
          src="/placeholder.svg"
          alt="Hiking in the mountains"
          caption="Exploring the Himalayas"
          width={300}
          height={300}
        />
        <PhotoCard
          src="/placeholder.svg"
          alt="Coding setup"
          caption="My workspace during a hackathon"
          width={300}
          height={300}
        />
        <PhotoCard
          src="/placeholder.svg"
          alt="Conference presentation"
          caption="Speaking at TechCon 2023"
          width={300}
          height={300}
        />
        <PhotoCard
          src="/placeholder.svg"
          alt="Sunset at the beach"
          caption="Relaxing after a long day of coding"
          width={300}
          height={300}
        />
        <PhotoCard
          src="/placeholder.svg"
          alt="Robot prototype"
          caption="Working on my latest robotics project"
          width={300}
          height={300}
        />
        <PhotoCard
          src="/placeholder.svg"
          alt="Team photo"
          caption="With my amazing development team"
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}


