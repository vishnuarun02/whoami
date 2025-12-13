import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { StarRating } from "@/components/ui/StarRating";
import { ROUTES } from "@/lib/constants";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  genre: string[];
  description: string;
  rating: number;
  coverImage?: string;
}

const DESCRIPTION_PREVIEW_LENGTH = 120;

export default function BookCard({
  id,
  title,
  author,
  genre,
  description,
  rating,
}: BookCardProps) {
  const previewText =
    description.length > DESCRIPTION_PREVIEW_LENGTH
      ? `${description.slice(0, DESCRIPTION_PREVIEW_LENGTH)}...`
      : description;

  return (
    <Link href={`${ROUTES.lifelog.bookshelf}/${id}`} className="block">
      <Card className="transition-all hover:-translate-y-1 hover:shadow-lg">
        <CardHeader className="border-b border-dashed">
          <h2 className="text-xl font-heading font-bold m-0">{title}</h2>
          <StarRating rating={rating} className="tracking-wider text-primary" />
        </CardHeader>

        <CardContent className="pt-6">
          <div className="mb-4 italic text-sm pl-4 border-l-4 border-primary text-primary">
            "{description}"
          </div>
          <p className="text-primary">{previewText}</p>
        </CardContent>

        <CardFooter className="flex justify-between text-sm text-muted-foreground border-t border-dotted pt-4">
          <div className="flex items-center gap-1">
            <span>By:</span>
            <strong>{author}</strong>
          </div>
          <div className="flex items-center gap-1">
            <span>Genre:</span>
            <strong>{genre.join(", ")}</strong>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
