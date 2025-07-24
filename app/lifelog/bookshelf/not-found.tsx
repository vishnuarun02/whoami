import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold mb-6 text-[var(--accent-color)]">404</h1>
      <h2 className="text-2xl font-bold mb-2">Book Not Found</h2>
      <p className="mb-6 text-lg text-gray-600 max-w-md">
        Oops! The book you are looking for does not exist or has not been added to the bookshelf yet.<br />
        Try browsing the <Link href="/lifelog/bookshelf" className="text-[var(--accent-color)] underline">Bookshelf</Link> or add a new book!
      </p>
      <Link href="/lifelog/bookshelf" className="px-6 py-3 rounded font-mono transition-colors bg-[var(--accent-color)] text-white">Back to Bookshelf</Link>
    </div>
  );
}
