'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function Home() {
  const { theme } = useTheme()
  const [bgColor, setBgColor] = useState("")

  // Use useEffect to set the color when component mounts
  useEffect(() => {
    setBgColor(getNextColor())
  }, [])

  return (
    <div className="font-body h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-heading mb-2">Welcome, Internet Traveler</h1>

      <div
        className={`p-6 rounded-lg mb-4 text-xl ${theme === 'dark' ? 'text-white' : 'text-white'
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

      {/* Full-width responsive image, ensuring it fits without scrolling */}
      <div className="w-full max-w-screen-lg flex justify-center items-center">
        <Image
          src="/Welcome page pic.png"
          alt="Welcome Page Image"
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg shadow-lg object-contain"
        />
      </div>
    </div>
  )
}

// Properly cycles through colors in order
function getNextColor() {
  const colors = [
    "rgb(57, 115, 103)",  // Green
    "rgb(32, 138, 174)",  // Blue
    "rgb(139, 99, 92)",   // Brown
  ]

  if (typeof window !== "undefined") {
    let index = parseInt(localStorage.getItem("colorIndex") || "0", 10)
    index = (index + 1) % colors.length // Increment and loop back
    localStorage.setItem("colorIndex", index.toString())
    return colors[index]
  }

  return colors[0] // Default color if localStorage is unavailable
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
  ]

  const randomFood = foods[Math.floor(Math.random() * foods.length)]
  return `${randomFood.emoji} ${randomFood.name}`
}
