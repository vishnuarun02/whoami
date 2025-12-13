import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default function PhotoCard({ src, alt, caption, width, height }: { src: string; alt: string; caption: string; width: number; height: number }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-0">
        <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className="w-full h-48 object-cover" />
      </CardContent>
      <CardFooter className="p-4">
        <p className="text-sm text-muted-foreground">{caption}</p>
      </CardFooter>
    </Card>
  )
}
