'use client'
import { useState, useEffect, useCallback } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { getPageColor, initializeColor } from "@/lib/colorUtils"

export default function Home() {
  const { theme } = useTheme()
  const [bgColor, setBgColor] = useState<string>("")
  const [food, setFood] = useState<string>("")
  const [currentSeason, setCurrentSeason] = useState<string>("")
  const [seasonalImage, setSeasonalImage] = useState<string>("/Welcome page pic.png")

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

  const determineSeason = useCallback(() => {
    const month = new Date().getMonth();
    // 0-11: Jan is 0, Dec is 11

    if (month >= 2 && month <= 4) {
      return "spring"; // March, April, May
    } else if (month >= 5 && month <= 7) {
      return "summer"; // June, July, August
    } else if (month >= 8 && month <= 10) {
      return "autumn"; // September, October, November
    } else {
      return "winter"; // December, January, February
    }
  }, []);
  // Function to get seasonal image path
  const getSeasonalImage = useCallback((season: string) => {
    const seasonalImages = {
      spring: "/images/seasonal/spring-welcome.png",
      summer: "/images/seasonal/summer-welcome.png",
      autumn: "/images/seasonal/autumn-welcome.png",
      winter: "/images/seasonal/winter-welcome.png"
    };

    return seasonalImages[season as keyof typeof seasonalImages] || "/Welcome page pic.png";
  }, []); // Remove [getCurrentSeason] as it's not defined

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize color on mount
      initializeColor();
      setBgColor(getPageColor());

      // Set initial food
      setFood(getRandomFood());

      // Determine season and set image
      const season = determineSeason();
      setCurrentSeason(season);
      setSeasonalImage(getSeasonalImage(season)); // Pass season as parameter

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
  }, [getRandomFood, determineSeason, getSeasonalImage])

  return (
    <div className="font-body h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-heading mb-2">Welcome, Internet Traveler</h1>

      <div
        className={`p-6 rounded-lg mb-4 text-xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}
        style={{ backgroundColor: bgColor }}
      >
        <p className="mb-4">
          You're entering the digital realm of a magical swordsman. Make yourself comfortable while grandpa gnome
          cooks a steaming hot bowl of
          <span className="font-bold">{food}</span>
        </p>
        <p>
          Be like the winds, explore every nook & corner of this cyber-space. Each page is a window into my world of
          technology, art, & writings.
        </p>
      </div>

      <div className="w-full max-w-screen-lg flex justify-center items-center">
        <Image
          src={seasonalImage}
          alt={`Welcome Page Image (${currentSeason})`}
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg shadow-lg object-contain"
        />
      </div>
    </div>
  )
}
