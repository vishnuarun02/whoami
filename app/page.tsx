'use client'
import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"

export default function Home() {
  const { theme } = useTheme()
  const [bgColor] = useState(getRandomColor())

  return (
    <div className="font-body">
      <h1 className="text-4xl font-heading mb-6">Welcome, Internet Traveler</h1>

      <div
        className={`p-6 rounded-lg mb-8 text-xl ${theme === 'dark' ? 'text-white' : 'text-white'
          }`}
        style={{ backgroundColor: bgColor }}
      >
        <p className="mb-4">
          You're entering the digital realm of a magical swordsman. Make yourself comfortable while my gnome
          cooks a steaming hot plate of
          <span className="font-bold">{getRandomFood()}</span>
        </p>
        <p>
          Feel free to explore various corners of this cyber-space. Each section is a window into my world of
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
      <h2 className="text-3xl font-heading mb-4">{title}</h2>
      <p className="text-xl mb-4">{description}</p>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-lg text-muted-foreground hover:text-primary transition-colors inline-block relative group"
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
    { name: "Ramen!", emoji: " 🍜" },
    { name: "Udon!", emoji: " 🥢" },
    { name: "Soba!", emoji: " 🍲" },
    { name: "Shabu-Shabu!", emoji: " 🫕" },
    { name: "Sukiyaki!", emoji: " 🥩" },
    { name: "Oden!", emoji: " 🍢" },
    { name: "Tonkotsu Ramen!", emoji: " 🐷" },
    { name: "Yudofu!", emoji: " 🥬" },
    { name: "Nikuman!", emoji: " 🥟" },
  ];

  const randomFood = foods[Math.floor(Math.random() * foods.length)];
  return `${randomFood.emoji} ${randomFood.name}`;
}

function getRandomColor() {
  const colors = [
    //"rgb(66, 133, 140)", 
    "rgb(57, 115, 103)",
    "rgb(32, 138, 174)",
    "rgb(139, 99, 92)",
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}