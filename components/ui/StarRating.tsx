import { UI } from "@/lib/constants";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
}

/**
 * Reusable star rating component
 * Displays filled and empty stars based on rating
 */
export function StarRating({
  rating,
  maxRating = UI.maxRating,
  className,
}: StarRatingProps) {
  return (
    <span className={className} style={{ color: "var(--accent-color)" }}>
      {"★".repeat(Math.min(rating, maxRating))}
      {"☆".repeat(Math.max(maxRating - rating, 0))}
    </span>
  );
}
