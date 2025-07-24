import Link from 'next/link';
import BookCard from '@/components/BookCard';

// Mock data - will be replaced with database calls later
const books = [
  {
    id: '1',
    title: 'Dune',
    author: 'Frank Herbert',
    genre: ['Science Fiction', 'Political'],
    quote: 'A masterpiece of world-building and political intrigue set in a fascinating far-future universe.',
    description: "Frank Herbert's epic sci-fi masterpiece pulled me into its complex world of feuding noble houses, desert planets, and the valuable spice that powers interstellar travel. The political machinations and ecological themes remain surprisingly relevant.",
    rating: 4,
    readDates: 'Feb 3-15',
    month: 'March 2025',
    coverImage: '/images/books/dune.jpeg',
  },
  {
    id: '4',
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: ['Self-Help', 'Productivity'],
    quote: 'Tiny changes, remarkable results.',
    description: 'James Clear provides a framework for improving every day. Atomic Habits will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits.',
    rating: 5,
    readDates: 'Mar 1-12',
    month: 'March 2025',
    coverImage: '/images/books/placeholder.png',
  },
  {
    id: '5',
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: ['Productivity', 'Nonfiction'],
    quote: 'The ability to perform deep work is becoming increasingly rare and valuable.',
    description: 'Deep Work is an indispensable guide to anyone seeking focused success in a distracted world. Newport makes the case for cultivating deep work habits and provides actionable advice for doing so.',
    rating: 4,
    readDates: 'Dec 5-20',
    month: 'December 2024',
    coverImage: '/images/books/placeholder.png',
  },
  {
    id: '2',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    genre: ['Psychology'],
    quote: 'An insightful exploration of the two systems that drive the way we think and make decisions.',
    description: "Kahneman's exploration of our two cognitive systems—the fast, intuitive System 1 and the slow, deliberate System 2—has fundamentally changed how I understand my own decision-making process. The numerous cognitive biases he describes have made me more aware of my mental shortcuts.",
    rating: 5,
    readDates: 'Jan 5-28',
    month: 'January 2025',
    coverImage: '/api/placeholder/200/300'
  },
  {
    id: '3',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt and David Thomas',
    genre: ['Technology'],
    quote: 'A collection of practical advice for improving the art and science of software development.',
    description: "This book provides timeless wisdom for writing better, more maintainable code. The authors' approach to software craftsmanship focuses on practical techniques and philosophies that have improved my daily coding practices significantly.",
    rating: 4,
    readDates: 'Jan 1-10',
    month: 'January 2025',
    coverImage: '/api/placeholder/200/300'
  }
];

// Group books by month
const booksByMonth: { [month: string]: typeof books } = {};
books.forEach(book => {
  if (!booksByMonth[book.month]) booksByMonth[book.month] = [];
  booksByMonth[book.month].push(book);
});

function renderStars(rating: number) {
  return (
    <span className="book-rating" style={{ color: 'var(--accent-color)' }}>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>
  );
}

export default function BookshelfPage() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6">
      <h1 className="text-3xl font-heading font-bold mb-6">Bookshelf</h1>
      <div className="mb-8 flex justify-end">
        <Link
          href="/lifelog/bookshelf/editor"
          className="bg-[var(--accent-color)] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[color-mix(in_oklch,var(--accent-color)_85%,white)] hover:text-white"
        >
          Add New Book
        </Link>
      </div>
      <div className="journal-container flex flex-col gap-8">
        {Object.keys(booksByMonth).sort((a, b) => new Date(b).getTime() - new Date(a).getTime()).map(month => (
          <div className="month-section flex flex-col gap-4" key={month}>
            <div className="month-header flex items-center gap-2 px-4 py-2 bg-[var(--accent-color)] text-white font-heading font-bold rounded-t-lg mb-2">
              <span className="inline-block mr-2">📖</span>
              <span>{month}</span>
            </div>
            {booksByMonth[month].map(book => (
              <Link href={`/lifelog/bookshelf/${book.id}`} key={book.id} className="block">
                <div className="book-entry bg-[var(--journal-bg)] dark:bg-[#2a2a2a] border border-[var(--border-color)] rounded-lg shadow-sm overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="book-header flex justify-between items-center p-4 border-b border-dashed border-[var(--border-color)]">
                    <h2 className="book-title text-xl font-heading font-bold m-0 cursor-pointer" style={{ color: 'var(--accent-color)' }}>{book.title}</h2>
                    {renderStars(book.rating)}
                  </div>
                  <div className="book-content p-4">
                    <div className="mb-4 italic text-sm pl-4 border-l-4 border-[var(--accent-color)]" style={{ color: 'var(--accent-color)' }}>
                      "{book.quote}"
                    </div>
                    <p style={{ color: 'var(--accent-color)' }}>{book.description}</p>
                    <div className="book-meta flex flex-wrap justify-between text-xs text-gray-600 dark:text-gray-300 mt-4 pt-4 border-t border-dotted border-[var(--border-color)] gap-2">
                      <div className="book-author flex items-center gap-1">
                        <span>By:</span>
                        <strong>{book.author}</strong>
                      </div>
                      <div className="book-genre flex items-center gap-1">
                        <span>Genre:</span>
                        <strong>{book.genre.join(', ')}</strong>
                      </div>
                      <div className="book-date font-mono bg-[var(--quote-bg)] px-2 py-1 rounded">
                        Read: {book.readDates}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
