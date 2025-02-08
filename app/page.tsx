'use client'
import { useState, useEffect, useCallback } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { getPageColor } from "@/lib/colorUtils"

export default function Home() {
  const { theme } = useTheme()
  const [bgColor, setBgColor] = useState(getPageColor()) // Initialize immediately
  const [food, setFood] = useState("") // Store food separately

  // Get random food only once when component mounts
  const getRandomFood = useCallback(() => {
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
  }, [])

  // Set food only once when component mounts
  useEffect(() => {
    setFood(getRandomFood())
  }, [getRandomFood])

  return (
    <div className="font-body h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-heading mb-2">Welcome, Internet Traveler</h1>

      <div
        className={`p-6 rounded-lg mb-4 text-xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}
        style={{ backgroundColor: bgColor }}
      >
        <p className="mb-4">
          You're entering the digital realm of a magical swordsman. Make yourself comfortable while my gnome
          cooks a steaming hot plate of
          <span className="font-bold">{food}</span>
        </p>
        <p>
          Be like the winds, explore every nook & corner of this cyber-space. Each page is a window into my world of
          technology, art, & writings.
        </p>
      </div>

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