import { PageShell } from "@/components/layout/PageShell"
import { SectionHeader } from "@/components/domain/SectionHeader"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export default function Blogs() {
  return (
    <PageShell>
      <SectionHeader title="Blogs" />
      <div className="space-y-8">
        <BlogPost
          title="The Future of AI: Opportunities and Challenges"
          date="June 1, 2023"
          excerpt="As artificial intelligence continues to advance at a rapid pace, we must consider both its potential benefits and the ethical implications it brings..."
        />
        <BlogPost
          title="My Journey into Quantum Computing"
          date="May 15, 2023"
          excerpt="Quantum computing has always fascinated me. In this post, I'll share my experiences diving into this complex but exciting field..."
        />
        <BlogPost
          title="Sustainable Tech: Building a Greener Future"
          date="April 22, 2023"
          excerpt="Technology has a significant environmental impact. Here's how we can work towards more sustainable practices in the tech industry..."
        />
        <BlogPost
          title="The Art of Problem Solving in Software Development"
          date="March 10, 2023"
          excerpt="Problem-solving is at the heart of software development. In this post, I'll discuss strategies to improve your problem-solving skills..."
        />
      </div>
    </PageShell>
  )
}

function BlogPost({ title, date, excerpt }: { title: string; date: string; excerpt: string }) {
  return (
    <div>
      <h2 className="text-2xl font-heading mb-2">{title}</h2>
      <p className="text-sm text-muted-foreground mb-4">{date}</p>
      <p className="mb-4">{excerpt}</p>
      <Button variant="outline" size="sm">
        Read More
      </Button>
      <Separator className="mt-6" />
    </div>
  )
}

