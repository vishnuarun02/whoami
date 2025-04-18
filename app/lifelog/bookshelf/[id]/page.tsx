'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

// Define the book type for better type safety
interface BookType {
  id: string;
  title: string;
  author: string;
  genre: string[];
  readDates: string;
  rating: number;
  coverImage: string;
  keyTakeaways: string;
  quotes: { text: string; source: string; }[];
  fullReview: string;
  readingNotes: string[];
  prev: string;
  next: string;
}

// Mock data - will be replaced with database queries later
const books: Record<string, BookType> = {
  '1': {
    id: '1',
    title: 'Dune',
    author: 'Frank Herbert',
    genre: ['Science Fiction', 'Political'],
    readDates: 'February 3-15, 2025',
    rating: 4,
    coverImage: '/images/books/dune.jpeg',
    keyTakeaways: "Frank Herbert's Dune is a masterpiece of world-building and political intrigue set in a fascinating far-future universe. The story revolves around Paul Atreides, whose family accepts stewardship of the desert planet Arrakis, the only source of the most valuable substance in the universe - the spice melange.",
    quotes: [
      {
        text: "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me.",
        source: "Bene Gesserit Litany Against Fear"
      },
      {
        text: "The mystery of life isn't a problem to solve, but a reality to experience.",
        source: "Reverend Mother Gaius Helen Mohiam"
      }
    ],
    fullReview: "What struck me most about Dune is the incredible depth of its world-building. Herbert doesn't just create a setting; he creates entire cultures, religions, economies, and ecosystems that interact in complex and believable ways. The planet Arrakis itself becomes a character, with its harsh desert conditions shaping the Fremen people and their customs.\n\nThe political machinations between House Atreides, House Harkonnen, and the Emperor provide a fascinating study in feudal power structures transposed into a futuristic setting. Herbert manages to make these political maneuvers feel both alien and familiar, drawing on historical patterns of empire and rebellion.\n\nI was particularly impressed by Herbert's ecological themes. The Fremen's dream of transforming Arrakis from a desert into a paradise raises questions about humanity's relationship with nature and the unintended consequences of environmental engineering. These themes feel increasingly relevant in our era of climate change and ecological uncertainty.",
    readingNotes: [
      "The Bene Gesserit's breeding program and their manipulation of religious prophecies reminded me of how power structures throughout history have used belief systems to maintain control.",
      "The technology of Dune is fascinating in its selective advancement - the prohibition against \"thinking machines\" has led to the development of human potential in interesting directions.",
      "The spice melange as a resource that extends life, enhances consciousness, and enables space travel serves as an elegant plot device that ties together the economic, political, and mystical elements of the story.",
      "The way Herbert developed the Fremen culture, with their water conservation practices and desert survival techniques, feels meticulously researched and plausible."
    ],
    prev: '3',
    next: '2'
  },
  // Add more mock books as needed
};

export default function BookReviewPage() {
  const params = useParams();
  const id = params.id as string;
  const [book, setBook] = useState<BookType | null>(null);
  
  useEffect(() => {
    // In the future, this will be a database query
    setBook(books[id] || null);
  }, [id]);
  
  if (!book) {
    return <div className="p-8 text-center">Book not found</div>;
  }

  return (
    <div>
      <div className="bg-[var(--accent-color)] text-white p-4">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <Link href="/lifelog/bookshelf" className="text-white no-underline flex items-center gap-2 hover:text-white focus:text-white active:text-white">
            <span className="flex items-center">
              <span>←</span>
              <span className="ml-1 hover:underline focus:underline active:underline">Back to Bookshelf</span>
            </span>
          </Link>
          <span>Vishnu Arun</span>
        </div>
      </div>
      
      <div className="max-w-screen-lg mx-auto p-4 sm:p-8">
        <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="text-[var(--accent-color)] no-underline hover:text-[var(--accent-color)] hover:underline focus:text-[var(--accent-color)] focus:underline active:text-[var(--accent-color)]">Home</Link> &gt; 
          <Link href="/lifelog/bookshelf" className="text-[var(--accent-color)] no-underline hover:text-[var(--accent-color)] hover:underline focus:text-[var(--accent-color)] focus:underline active:text-[var(--accent-color)]">Bookshelf</Link> &gt; {book.title}
        </div>
        
        <div className="flex gap-8 mb-8 flex-col md:flex-row">
          <div className="w-full md:w-[200px] shadow-lg">
            <Image 
              src={book.coverImage || '/api/placeholder/200/300'} 
              alt={`${book.title} book cover`}
              width={200}
              height={300}
              className="w-full"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-color)' }}>{book.title}</h1>
            <div className="mb-6">
              <div className="mb-2"><strong>Author:</strong> {book.author}</div>
              <div className="mb-2">
                <strong>Genre:</strong> {book.genre.map((g: string, i: number) => (
                  <span key={i} className="inline-block bg-[var(--accent-color)] text-white px-2 py-1 rounded text-xs font-mono mr-2">{g}</span>
                ))}
              </div>
              <div className="mb-2"><strong>Read:</strong> {book.readDates}</div>
              <div className="text-[var(--accent-color)] text-xl tracking-wider">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i}>{i < book.rating ? '★' : '☆'}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--accent-color)' }}>Key Takeaways</h2>
          <p>{book.keyTakeaways}</p>
          
          {book.quotes.length > 0 && (
            <div className="bg-[var(--quote-bg)] border-l-4 border-[var(--accent-color)] p-4 my-6 italic">
              {book.quotes[0].text}
              <span className="block text-right not-italic text-sm mt-2 text-gray-600">{book.quotes[0].source}</span>
            </div>
          )}
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--accent-color)' }}>Full Review</h2>
          {book.fullReview.split('\n\n').map((paragraph: string, i: number) => (
            <p key={i} className="mb-6">{paragraph}</p>
          ))}
          
          {book.quotes.length > 1 && (
            <div className="bg-[var(--quote-bg)] border-l-4 border-[var(--accent-color)] p-4 my-6 italic">
              {book.quotes[1].text}
              <span className="block text-right not-italic text-sm mt-2 text-gray-600">{book.quotes[1].source}</span>
            </div>
          )}
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-heading font-bold mb-6" style={{ color: 'var(--accent-color)' }}>Reading Notes</h2>
          <div className="max-w-none">
            {book.readingNotes.map((note: string, i: number) => (
              <p key={i} className="mb-6">{note}</p>
            ))}
          </div>
        </div>
        
        <div className="border-t border-dashed border-[var(--border-color)] mt-12 pt-6 flex justify-between">
          {book.prev ? (
            <div>
              <Link href={`/lifelog/bookshelf/${book.prev}`} className="text-[var(--accent-color)] no-underline hover:text-[var(--accent-color)] focus:text-[var(--accent-color)] active:text-[var(--accent-color)]">
                <span className="flex items-center">
                  <span>←</span>
                  <span className="ml-1 hover:underline focus:underline active:underline">Previous: The Pragmatic Programmer</span>
                </span>
              </Link>
            </div>
          ) : <div></div>}
          
          {book.next ? (
            <div>
              <Link href={`/lifelog/bookshelf/${book.next}`} className="text-[var(--accent-color)] no-underline hover:text-[var(--accent-color)] focus:text-[var(--accent-color)] active:text-[var(--accent-color)]">
                <span className="flex items-center">
                  <span className="hover:underline focus:underline active:underline">Next: Thinking, Fast and Slow</span>
                  <span className="ml-1">→</span>
                </span>
              </Link>
            </div>
          ) : <div></div>}
        </div>
      </div>
    </div>
  );
}
