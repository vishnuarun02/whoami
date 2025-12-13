import { Card, CardContent } from '@/components/ui/card';

export default function ThoughtCard({ date, content }: { date: string; content: string }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground mb-2">{date}</p>
        <p className="text-lg italic">&ldquo;{content}&rdquo;</p>
      </CardContent>
    </Card>
  )
}
