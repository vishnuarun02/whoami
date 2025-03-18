'use client'
import { useState, useEffect, useCallback } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { getPageColor, initializeColor } from "@/lib/colorUtils"

export default function Home() {
  const { theme } = useTheme()
  const [bgColor, setBgColor] = useState<string>("")
  const [showDescription, setShowDescription] = useState(false)

  const foods = [
    { name: "Zombie Bone Broth!", emoji: " 🍛", description: "Simmered with freshly dug bones for that rich rotten flavor." },
    { name: "Dragon's Nostril Honey!", emoji: " 🍯", description: "Harvested fresh & warm everyday" },
    { name: "Top Ramen!", emoji: " 🍲", description: "Just regular noodles, honestly" },
    { name: "Fairy God Mother's Brain Jelly on Toast!", emoji: " 🧠", description: "Wobbly, Wibbly, & full of sweet thoughts" },
    { name: "Ogre's Earwax Pudding!", emoji: " 🍮", description: "Golden, gooey, & crunchy at right places" },
    { name: "Tapeworm Tempura!", emoji: " 🪱", description: "Fried golden, served still wiggling for freshness" },
    { name: "Sukiyaki!", emoji: " 🥩", description: "Beef so tender - it cried before we cooked it." },
    { name: "Fairy's Eyeball Stew!", emoji: " 🥣", description: "Freshly plucked — stares lovingly while you sip." },
    { name: "Moldy Mushroom Muffins!", emoji: " 🍄", description: "Expired for maximum taste — Penicillin optional" },
    { name: "Phoenix Feather Salad!", emoji: " 🥗", description: "Lightly charred — refills itself every 5 minutes." },
  ]

  const [randomFood, setRandomFood] = useState(foods[0])
  const [sparklePosition, setSparklePosition] = useState({ left: 0, top: 0 })
  const [showSparkle, setShowSparkle] = useState(false)

  const getRandomFood = useCallback(() => {
    return foods[Math.floor(Math.random() * foods.length)]
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize color on mount
      initializeColor()
      setBgColor(getPageColor())

      // Set initial food
      setRandomFood(getRandomFood())

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

  const handleMouseMove = (e) => {
    // Get position relative to the target element
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setSparklePosition({ left: x, top: y })
    setShowSparkle(true)

    // Hide sparkle after a short delay
    setTimeout(() => setShowSparkle(false), 500)
  }

  const handleClick = () => {
    setRandomFood(getRandomFood())
    // Create multiple sparkles on click (would need more complex implementation)
    setShowSparkle(true)
    setTimeout(() => setShowSparkle(false), 800)
  }

  return (
    <div className="font-body h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-heading mb-2">Welcome, Internet Traveler</h1>

      <div
        className={`p-6 rounded-lg mb-4 text-xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}
        style={{ backgroundColor: bgColor }}
      >
        <p className="mb-4">
          You're entering the digital dungeon of a Magical Swordsman. Make yourself comfortable while Grandpa Gnome
          chefs up a yummy bowl of{" "}
          <span className="food-wrapper">
            <span
              className="font-bold cursor-pointer food-item"
              onClick={handleClick}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setShowDescription(true)}
              onMouseLeave={() => setShowDescription(false)}
            >
              {randomFood.emoji} {randomFood.name}

              {showSparkle && (
                <span
                  className="sparkle"
                  style={{
                    left: `${sparklePosition.left}px`,
                    top: `${sparklePosition.top}px`
                  }}
                >
                  ✨
                </span>
              )}
            </span>

            <span className={`description ${showDescription ? 'visible' : ''}`}>
              {randomFood.description}
            </span>
          </span>
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

      <style jsx>{`
        .food-wrapper {
          position: relative;
          display: inline-flex;
          flex-direction: column;
        }
        
        .food-item {
          position: relative;
          text-decoration: underline;
          text-underline-offset: 3px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .food-item:hover {
          text-shadow: 0 0 10px rgba(255, 255, 150, 0.8);
        }
        
        .sparkle {
          position: absolute;
          pointer-events: none;
          font-size: 1.2rem;
          transform: translate(-50%, -50%);
          z-index: 5;
          animation: sparkleAnim 0.6s forwards;
        }
        
        .description {
          font-size: 0.85rem;
          margin-top: 0.2rem;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          color: rgba(255, 255, 255, 0.9);
          font-style: italic;
          border-left: 2px solid rgba(255, 255, 255, 0.5);
          padding-left: 0;
          opacity: 0;
        }
        
        .description.visible {
          max-height: 60px;
          padding-left: 8px;
          opacity: 1;
        }
        
        @keyframes sparkleAnim {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0.5);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) translate(0, -20px) scale(0.8);
          }
        }
      `}</style>
    </div>
  )
}