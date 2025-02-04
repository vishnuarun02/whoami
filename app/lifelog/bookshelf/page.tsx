export default function Bookshelf() {
  return (
    <div className="font-body">
      <h1 className="text-4xl font-heading mb-6">Bookshelf</h1>

      <p className="mb-6">Here are some books I've recently read and recommend:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BookCard
          title="Dune"
          author="Frank Herbert"
          genre="Science Fiction"
          review="A masterpiece of world-building and political intrigue set in a fascinating far-future universe."
        />
        <BookCard
          title="Thinking, Fast and Slow"
          author="Daniel Kahneman"
          genre="Psychology"
          review="An insightful exploration of the two systems that drive the way we think and make decisions."
        />
        <BookCard
          title="The Pragmatic Programmer"
          author="Andrew Hunt and David Thomas"
          genre="Technology"
          review="A collection of practical advice for improving the art and science of software development."
        />
        <BookCard
          title="Sapiens: A Brief History of Humankind"
          author="Yuval Noah Harari"
          genre="History"
          review="A thought-provoking journey through the history of our species, challenging many of our preconceptions."
        />
      </div>
    </div>
  )
}

function BookCard({ title, author, genre, review }: { title: string; author: string; genre: string; review: string }) {
  return (
    <div className="border border-text/10 p-6 rounded-lg">
      <h2 className="text-2xl font-heading mb-2">{title}</h2>
      <p className="mb-2">by {author}</p>
      <p className="mb-4">
        <span className="bg-primary text-text px-2 py-1 rounded-full text-sm">{genre}</span>
      </p>
      <p>{review}</p>
    </div>
  )
}

