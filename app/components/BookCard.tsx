import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  genre: string[];
  description: string;
  rating: number;
  coverImage?: string;
}

export default function BookCard({
  id,
  title,
  author,
  genre,
  description,
  rating,
  coverImage
}: BookCardProps) {
  return (
    <div className="bg-[var(--journal-bg)] border border-[var(--border-color)] rounded-lg shadow-sm overflow-hidden transition-transform hover:translate-y-[-5px] hover:shadow-md hover:bg-[color-mix(in_oklch,var(--accent-color)_12%,white)]">
      <Link href={`/lifelog/bookshelf/${id}`}>
        <div className="p-4 border-b border-dashed border-[var(--border-color)]">
          <h2 className="text-xl font-heading font-bold m-0">{title}</h2>
          <div className="tracking-wider" style={{ color: 'var(--accent-color)' }}>{
            Array(5).fill(0).map((_, i) => (
              <span key={i}>{i < rating ? '★' : '☆'}</span>
            ))
          }</div>
        </div>
        
        <div className="p-4">
          <div className="mb-4 italic text-sm pl-4 border-l-4 border-[var(--accent-color)]">
            "{description}"
          </div>
          
          <p className="mb-4">{description.slice(0, 120)}...</p>
          
          <div className="flex justify-between text-sm text-gray-600 mt-4 pt-4 border-t border-dotted border-[var(--border-color)]">
            <div className="flex items-center gap-1">
              <span>By:</span>
              <strong>{author}</strong>
            </div>
            <div className="flex items-center gap-1">
              <span>Genre:</span>
              <strong>{genre.join(', ')}</strong>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
