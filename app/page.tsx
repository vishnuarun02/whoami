'use client'
import { useState, useEffect, useCallback } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { getPageColor, initializeColor } from "@/lib/colorUtils"

export default function Home() {
  const { theme } = useTheme()
  const [bgColor, setBgColor] = useState<string>("")
  const [food, setFood] = useState<string>("")

  const getRandomFood = useCallback(() => {
    const foods = [
      { name: "Ramen!", emoji: " 🍜" },
      { name: "Udon!", emoji: " 🥢" },
      { name: "Soba!", emoji: " 🍲" },
      { name: "Shabu-Shabu!", emoji: " 🫕" },
      { name: "Sukiyaki!", emoji: " 🥩" },
      { name: "Enchanted Eyeball Soup!", emoji: " 🔮" },
      { name: "Dragon's Nostril Honey!", emoji: " 🍯" },
      { name: "Ogre's Earwax Pudding!", emoji: " 🍮" },
      { name: "Goblin's Sock Stew!", emoji: " 🥬" },
      { name: "Swamp Slug Slime Smoothie!", emoji: " 🥤" },
    ]
    const randomFood = foods[Math.floor(Math.random() * foods.length)]
    return `${randomFood.emoji} ${randomFood.name}`
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize color on mount
      initializeColor()
      setBgColor(getPageColor())

      // Set initial food
      setFood(getRandomFood())

      // Function to handle color updates
      const updateColor = () => {
        setBgColor(getPageColor())
      }

      // Listen for storage changes
      const handleStorageChange = (e: StorageEvent) => {
        if (e.key === 'currentColorIndex') {
          updateColor()
        }
      }

      // Listen for custom color change event
      const handleColorChange = () => {
        updateColor()
      }

      // Add event listeners
      window.addEventListener('storage', handleStorageChange)
      window.addEventListener('colorChange', handleColorChange)

      return () => {
        // Cleanup event listeners
        window.removeEventListener('storage', handleStorageChange)
        window.removeEventListener('colorChange', handleColorChange)
      }
    }
  }, [getRandomFood])

  return (
    <div className="font-body h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-heading mb-2">Welcome, Internet Traveler</h1>

      <div
        className={`p-6 rounded-lg mb-4 text-xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}
        style={{ backgroundColor: bgColor }}
      >
        <p className="mb-4">
          You're entering the digital realm of a Magical Swordsman. Make yourself comfortable while Grandpa Gnome
          chefs up a steaming hot bowl of
          <span className="font-bold">{food}</span>
        </p>
        <p>
          Be like the winds, explore every nook & corner of this cyber-space. Each page is a window into my world of
          technology, art, & writings.
        </p>
      </div>

      <div className="w-full max-w-screen-lg flex justify-center items-center">
        <Image
          src="/Welcome-page-pic.png"
          alt="Welcome Page Image"
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg shadow-lg object-contain"
        />
      </div>
    </div>
  )
}