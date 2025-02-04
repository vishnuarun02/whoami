'use client'
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [bgColor] = useState(getRandomColor())

  return (
    <div className="font-body">
      <h1 className="text-4xl font-heading mb-6">Welcome, Internet Traveler</h1>

      <div
        className={`text-background p-6 rounded-lg mb-8 transition-colors duration-500 ease-in-out`}
        style={{ backgroundColor: bgColor }}
      >
        <p className="text-lg mb-4">
          You've stumbled upon the digital realm of Vishnu Arun. Make yourself comfortable while my AI assistant
          prepares you a virtual plate of...
          <span className="font-bold">{getRandomFood()}</span>
        </p>
        <p>
          Feel free to explore the various corners of this cyber-space. Each section is a window into my world of
          technology, creativity, and random musings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionPreview
          title="About"
          description="Dive into my background, current endeavors, and professional journey."
          links={[
            { name: "Prologue", href: "/about/prologue" },
            { name: "Now", href: "/about/now" },
            { name: "Resume", href: "/about/resume" },
            { name: "Projects", href: "/about/projects" },
          ]}
        />
        <SectionPreview
          title="LifeLog"
          description="Explore my personal experiences, thoughts, and creative pursuits."
          links={[
            { name: "Bookshelf", href: "/lifelog/bookshelf" },
            { name: "Blogs", href: "/lifelog/blogs" },
            { name: "Photo Album", href: "/lifelog/photo-album" },
            { name: "Thoughts", href: "/lifelog/thoughts" },
          ]}
        />
      </div>
    </div>
  )
}

function SectionPreview({
  title,
  description,
  links,
}: { title: string; description: string; links: { name: string; href: string }[] }) {
  return (
    <div className="border border-border p-6 rounded-lg">
      <h2 className="text-2xl font-heading mb-4">{title}</h2>
      <p className="mb-4">{description}</p>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors inline-block relative group"
            >
              → {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function getRandomFood() {
  const foods = [
    { name: "Takoyaki", emoji: "🐙" },
    { name: "Okonomiyaki", emoji: "🥞" },
    { name: "Tamagoyaki", emoji: "🍳" },
    { name: "Mochi Ice Cream", emoji: "🍡" },
    { name: "Matcha Kit Kat", emoji: "🍵" },
    { name: "Dorayaki", emoji: "🥮" },
    { name: "Daifuku", emoji: "🍡" },
    { name: "Taiyaki", emoji: "🐟" },
    { name: "Butter Chicken", emoji: "🍗" },
    { name: "Palak Paneer", emoji: "🧀" },
    { name: "Biryani", emoji: "🍚" },
    { name: "Samosa", emoji: "🥟" },
    { name: "Dosa", emoji: "🥞" },
    { name: "Gulab Jamun", emoji: "🍯" },
  ]
  const food = foods[Math.floor(Math.random() * foods.length)]
  return `${food.name} ${food.emoji}`
}

function getRandomColor() {
  const colors = [
    "#2A4858", // Deep blue-gray
    "#445D48", // Forest green
    "#4F4557", // Deep purple-gray
    "#5C3D2E", // Rich brown
    "#2D4356", // Navy blue
    "#394867", // Slate blue
    "#3F2E3E", // Deep burgundy
    "#4C3A51", // Plum
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

