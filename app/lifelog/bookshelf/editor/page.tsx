'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BookEditorPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('book');
  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState<string[]>([]);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [quoteText, setQuoteText] = useState('');
  const [quoteSource, setQuoteSource] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [readDates, setReadDates] = useState('');
  const [keyTakeaways, setKeyTakeaways] = useState('');
  const [fullReview, setFullReview] = useState('');
  const [readingNotes, setReadingNotes] = useState('');

  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setCoverPreview(e.target.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Enter' || e.key === ',') && e.currentTarget.value.trim()) {
      e.preventDefault();
      const newTag = e.currentTarget.value.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
        e.currentTarget.value = '';
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleRatingClick = (value: number) => {
    setRating(value);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // In the future, this will save to the database
    console.log({
      title,
      author,
      tags,
      readDates,
      rating,
      keyTakeaways,
      fullReview,
      readingNotes,
      quote: { text: quoteText, source: quoteSource }
    });
    alert('Book review saved successfully!');
    router.push('/lifelog/bookshelf');
  };

  return (
    <div>
      <div className="bg-[var(--accent-color)] text-white p-4">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <Link href="/lifelog/bookshelf" className="text-white no-underline flex items-center gap-2 hover:text-white hover:underline focus:text-white focus:underline active:text-white">
            ← Back to Bookshelf
          </Link>
          <span>Vishnu Arun</span>
        </div>
      </div>
      <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6">
        <div className="mb-8">
          <select 
            className="w-full p-3 bg-white border border-[var(--border-color)] rounded-md font-mono mb-6"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            <option value="book">Book Review</option>
            <option value="blog">Blog Post</option>
            <option value="recipe">Recipe</option>
            <option value="thought">Thought/Note</option>
          </select>
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
            <aside className="bg-[var(--journal-bg)] rounded-lg p-6 shadow-md self-start sticky top-8">
              <div className="mb-8">
                <h3 className="mb-4 pb-2 border-b border-[var(--border-color)] text-[var(--accent-color)]">Book Details</h3>
                <div className="mb-4">
                  <label className="block mb-2 font-bold">Book Title</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-[var(--border-color)] rounded-md bg-white font-mono"
                    placeholder="Enter book title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-bold">Author</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-[var(--border-color)] rounded-md bg-white font-mono"
                    placeholder="Enter author name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-bold">Read Dates</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-[var(--border-color)] rounded-md bg-white font-mono"
                    placeholder="E.g., Jan 5-28, 2025"
                    value={readDates}
                    onChange={(e) => setReadDates(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-bold">Rating</label>
                  <div className="text-2xl text-[#ccc]">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <span
                        key={value}
                        className={`cursor-pointer ${value <= rating ? 'text-[var(--highlight-color)]' : ''}`}
                        onClick={() => handleRatingClick(value)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-bold">Book Cover</label>
                  <div>
                    {coverPreview && (
                      <Image
                        src={coverPreview}
                        alt="Book cover preview"
                        width={200}
                        height={300}
                        className="max-w-full h-auto max-h-[200px] object-contain mb-4"
                      />
                    )}
                    <label className="inline-block bg-[var(--accent-color)] text-white px-4 py-2 rounded-md cursor-pointer transition-colors hover:bg-[color-mix(in_oklch,var(--accent-color)_85%,white)] hover:text-white">
                      Upload Cover Image
                      <input type="file" className="hidden" accept="image/*" onChange={handleCoverUpload} />
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-4 pb-2 border-b border-[var(--border-color)] text-[var(--accent-color)]">Tags</h3>
                <div className="flex flex-wrap gap-2 p-2 min-h-[40px] bg-white border border-[var(--border-color)] rounded-md mb-2">
                  {tags.map((tag, index) => (
                    <div key={index} className="bg-[var(--accent-color)] text-white px-2 py-1 rounded text-sm flex items-center gap-2">
                      <span>{tag}</span>
                      <span className="cursor-pointer font-bold" onClick={() => removeTag(tag)}>×</span>
                    </div>
                  ))}
                  <input
                    type="text"
                    className="flex-1 min-w-[80px] outline-none border-none bg-transparent font-mono"
                    placeholder="Add a tag..."
                    onKeyDown={handleTagInput}
                  />
                </div>
              </div>
            </aside>
            <main>
              <div className="bg-[var(--journal-bg)] p-4 rounded-lg shadow-md mb-6 flex flex-wrap gap-2">
                <button className="bg-[var(--accent-color)] text-white border-none rounded p-2 text-sm cursor-pointer flex items-center gap-1 hover:bg-[var(--button-hover)]">
                  <strong>B</strong>
                </button>
                <button className="bg-[var(--accent-color)] text-white border-none rounded p-2 text-sm cursor-pointer flex items-center gap-1 hover:bg-[var(--button-hover)]">
                  <em>I</em>
                </button>
                <button className="bg-[var(--accent-color)] text-white border-none rounded p-2 text-sm cursor-pointer flex items-center gap-1 hover:bg-[var(--button-hover)]">
                  <u>U</u>
                </button>
                <div className="w-[1px] h-6 bg-[var(--border-color)] mx-2"></div>
                <select className="p-2 border border-[var(--border-color)] rounded font-mono">
                  <option value="">Heading</option>
                  <option value="h2">Heading 2</option>
                  <option value="h3">Heading 3</option>
                  <option value="h4">Heading 4</option>
                </select>
                <button className="bg-[var(--accent-color)] text-white border-none rounded p-2 text-sm cursor-pointer hover:bg-[var(--button-hover)]">
                  Quote
                </button>
                <div className="w-[1px] h-6 bg-[var(--border-color)] mx-2"></div>
                <button className="bg-[var(--accent-color)] text-white border-none rounded p-2 text-sm cursor-pointer hover:bg-[var(--button-hover)]">
                  • List
                </button>
                <button className="bg-[var(--accent-color)] text-white border-none rounded p-2 text-sm cursor-pointer hover:bg-[var(--button-hover)]">
                  1. Ordered
                </button>
              </div>
              <form onSubmit={handleSave}>
                <div className="bg-[var(--journal-bg)] p-6 rounded-lg shadow-md mb-6">
                  <h3 className="mb-4 pb-2 border-b border-[var(--border-color)] text-[var(--accent-color)]">Key Takeaways</h3>
                  <textarea
                    className="w-full min-h-[200px] p-4 border border-[var(--border-color)] rounded-md font-mono resize-vertical"
                    placeholder="Write your key points and summary here..."
                    value={keyTakeaways}
                    onChange={(e) => setKeyTakeaways(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-6">
                  <h3 className="mb-4 text-[var(--accent-color)]">Featured Quote</h3>
                  <textarea
                    className="w-full min-h-[80px] p-4 border border-[var(--border-color)] rounded-md font-mono mb-2"
                    placeholder="Enter a memorable quote from the book..."
                    value={quoteText}
                    onChange={(e) => setQuoteText(e.target.value)}
                  ></textarea>
                  <input
                    type="text"
                    className="w-full p-3 border border-[var(--border-color)] rounded-md font-mono mb-4"
                    placeholder="Source of the quote (e.g., character, chapter)"
                    value={quoteSource}
                    onChange={(e) => setQuoteSource(e.target.value)}
                  />
                  <div className="bg-[var(--quote-bg)] border-l-4 border-[var(--highlight-color)] p-4 my-4 italic">
                    <p>{quoteText || 'Your quote will appear here...'}</p>
                    {quoteSource && <span className="block text-right not-italic text-sm mt-2 text-gray-600">{quoteSource}</span>}
                  </div>
                </div>
                <div className="bg-[var(--journal-bg)] p-6 rounded-lg shadow-md mb-6">
                  <h3 className="mb-4 pb-2 border-b border-[var(--border-color)] text-[var(--accent-color)]">Full Review</h3>
                  <textarea
                    className="w-full min-h-[200px] p-4 border border-[var(--border-color)] rounded-md font-mono resize-vertical"
                    placeholder="Write your detailed review here..."
                    value={fullReview}
                    onChange={(e) => setFullReview(e.target.value)}
                  ></textarea>
                </div>
                <div className="bg-[var(--journal-bg)] p-6 rounded-lg shadow-md mb-6">
                  <h3 className="mb-4 pb-2 border-b border-[var(--border-color)] text-[var(--accent-color)]">Reading Notes</h3>
                  <textarea
                    className="w-full min-h-[200px] p-4 border border-[var(--border-color)] rounded-md font-mono resize-vertical"
                    placeholder="Add your reading notes, observations, and highlights..."
                    value={readingNotes}
                    onChange={(e) => setReadingNotes(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    className="px-6 py-3 border border-[var(--accent-color)] text-[var(--accent-color)] rounded font-mono hover:bg-[var(--accent-color)] hover:text-white transition-colors"
                    onClick={() => setShowPreview(!showPreview)}
                  >
                    {showPreview ? 'Hide Preview' : 'Preview'}
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[var(--accent-color)] text-white border-none rounded font-mono hover:bg-[var(--button-hover)]"
                  >
                    Save Review
                  </button>
                </div>
              </form>
              {showPreview && (
                <div className="bg-[var(--journal-bg)] p-8 rounded-lg shadow-md mt-8">
                  <h1 className="text-4xl font-bold mb-2">{title || 'Book Title'}</h1>
                  <div className="mb-6">
                    <div className="mb-2"><strong>Author:</strong> {author || 'Author Name'}</div>
                    <div className="mb-2">
                      <strong>Genre:</strong> {tags.map((tag, i) => (
                        <span key={i} className="inline-block bg-[var(--accent-color)] text-white px-2 py-1 rounded text-xs mr-2">{tag}</span>
                      ))}
                    </div>
                    <div className="mb-2"><strong>Read:</strong> {readDates}</div>
                    <div className="text-[var(--highlight-color)] text-xl tracking-wider">
                      {Array(5).fill(0).map((_, i) => (
                        <span key={i}>{i < rating ? '★' : '☆'}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-8">
                    <h2 className="text-2xl text-[var(--accent-color)] mb-4 pb-2 border-b-2 border-[var(--border-color)]">Key Takeaways</h2>
                    <p>{keyTakeaways}</p>
                    {quoteText && (
                      <div className="bg-[var(--quote-bg)] border-l-4 border-[var(--highlight-color)] p-4 my-6 italic">
                        {quoteText}
                        {quoteSource && <span className="block text-right not-italic text-sm mt-2 text-gray-600">{quoteSource}</span>}
                      </div>
                    )}
                  </div>
                  <div className="mb-8">
                    <h2 className="text-2xl text-[var(--accent-color)] mb-4 pb-2 border-b-2 border-[var(--border-color)]">Full Review</h2>
                    {fullReview.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-6">{paragraph}</p>
                    ))}
                  </div>
                  <div className="mb-8">
                    <h2 className="text-2xl text-[var(--accent-color)] mb-4 pb-2 border-b-2 border-[var(--border-color)]">Reading Notes</h2>
                    <div>
                      {readingNotes.split('\n').map((note, i) => (
                        <p key={i} className="mb-2">{note}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
