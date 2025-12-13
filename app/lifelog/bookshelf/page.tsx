import Link from "next/link";
import BookCard from "@/components/cards/BookCard";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeader } from "@/components/domain/SectionHeader";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";
import type { Book } from "@/lib/types";

// Mock data - will be replaced with database calls later
const books: Book[] = [
  {
    id: "1",
    title: "Dune",
    author: "Frank Herbert",
    genre: ["Science Fiction", "Political"],
    quote:
      "A masterpiece of world-building and political intrigue set in a fascinating far-future universe.",
    description:
      "Frank Herbert's epic sci-fi masterpiece pulled me into its complex world of feuding noble houses, desert planets, and the valuable spice that powers interstellar travel. The political machinations and ecological themes remain surprisingly relevant.",
    rating: 4,
    readDates: "Feb 3-15",
    month: "March 2025",
    coverImage: "/images/books/dune.jpeg",
  },
  {
    id: "4",
    title: "Atomic Habits",
    author: "James Clear",
    genre: ["Self-Help", "Productivity"],
    quote: "Tiny changes, remarkable results.",
    description:
      "James Clear provides a framework for improving every day. Atomic Habits will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits.",
    rating: 5,
    readDates: "Mar 1-12",
    month: "March 2025",
    coverImage: "/images/books/placeholder.png",
  },
  {
    id: "5",
    title: "Deep Work",
    author: "Cal Newport",
    genre: ["Productivity", "Nonfiction"],
    quote:
      "The ability to perform deep work is becoming increasingly rare and valuable.",
    description:
      "Deep Work is an indispensable guide to anyone seeking focused success in a distracted world. Newport makes the case for cultivating deep work habits and provides actionable advice for doing so.",
    rating: 4,
    readDates: "Dec 5-20",
    month: "December 2024",
    coverImage: "/images/books/placeholder.png",
  },
  {
    id: "2",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: ["Psychology"],
    quote:
      "An insightful exploration of the two systems that drive the way we think and make decisions.",
    description:
      "Kahneman's exploration of our two cognitive systems—the fast, intuitive System 1 and the slow, deliberate System 2—has fundamentally changed how I understand my own decision-making process. The numerous cognitive biases he describes have made me more aware of my mental shortcuts.",
    rating: 5,
    readDates: "Jan 5-28",
    month: "January 2025",
    coverImage: "/api/placeholder/200/300",
  },
  {
    id: "3",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt and David Thomas",
    genre: ["Technology"],
    quote:
      "A collection of practical advice for improving the art and science of software development.",
    description:
      "This book provides timeless wisdom for writing better, more maintainable code. The authors' approach to software craftsmanship focuses on practical techniques and philosophies that have improved my daily coding practices significantly.",
    rating: 4,
    readDates: "Jan 1-10",
    month: "January 2025",
    coverImage: "/api/placeholder/200/300",
  },
];

/**
 * Group books by month for display
 */
function groupBooksByMonth(books: Book[]): Record<string, Book[]> {
  return books.reduce<Record<string, Book[]>>((acc, book) => {
    if (!acc[book.month]) acc[book.month] = [];
    acc[book.month].push(book);
    return acc;
  }, {});
}

const booksByMonth = groupBooksByMonth(books);

export default function BookshelfPage() {
  return (
    <PageShell width="wide">
      <SectionHeader
        title="Bookshelf"
        action={
          <Link href={ROUTES.lifelog.bookshelfEditor}>
            <Button>Add New Book</Button>
          </Link>
        }
      />
      <div className="flex flex-col gap-8">
        {Object.keys(booksByMonth).sort((a, b) => new Date(b).getTime() - new Date(a).getTime()).map(month => (
          <div className="flex flex-col gap-4" key={month}>
            <div className="flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-heading font-bold rounded-lg">
              <span>📖</span>
              <span>{month}</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {booksByMonth[month].map(book => (
                <BookCard
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  genre={book.genre}
                  description={book.description}
                  rating={book.rating}
                  coverImage={book.coverImage}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
