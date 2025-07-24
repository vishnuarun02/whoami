import Image from 'next/image';

export default function PhotoCard({ src, alt, caption, width, height }: { src: string; alt: string; caption: string; width: number; height: number }) {
  return (
    <div className="border border-text/10 rounded-lg overflow-hidden">
      <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className="w-full h-48 object-cover" />
      <p className="p-4 text-sm">{caption}</p>
    </div>
  )
}
