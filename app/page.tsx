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
    { name: "Mermaid's Eyeball Stew!", emoji: " 🥣", description: "Freshly plucked — stares lovingly while you sip." },
    { name: "Moldy Mushroom Muffins!", emoji: " 🍄", description: "Expired for maximum taste — Penicillin optional" },
    { name: "Phoenix Feather Salad!", emoji: " 🥗", description: "Lightly charred — refills itself every 5 minutes." },
  ]

  const [foodIndex, setFoodIndex] = useState(0)
  const [sparklePosition, setSparklePosition] = useState({ left: 0, top: 0 })

  useEffect(() => {
    if (typeof window !== "undefined") {
      initializeColor()
      setBgColor(getPageColor())

      const updateColor = () => {
        setBgColor(getPageColor())
      }

      const handleStorageChange = (e: StorageEvent) => {
        if (e.key === 'currentColorIndex') {
          updateColor()
        }
      }

      const handleColorChange = () => {
        updateColor()
      }

      window.addEventListener('storage', handleStorageChange)
      window.addEventListener('colorChange', handleColorChange)

      return () => {
        window.removeEventListener('storage', handleStorageChange)
        window.removeEventListener('colorChange', handleColorChange)
      }
    }
  }, [])

  const handleSparklePosition = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = rect.width / 2
    const y = rect.height / 2
    setSparklePosition({ left: x, top: y })
  }

  const handleClick = () => {
    setFoodIndex((prevIndex) => (prevIndex + 1) % foods.length)
    const audio = new Audio('/sounds/retro_game.mp3')
    audio.play()
  }

  return (
    <div className="font-body h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-heading mb-2">Welcome, Internet Traveler</h1>

      <div
        className={`p-6 rounded-lg mb-4 text-xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}
        style={{ backgroundColor: bgColor }}
      >
        <p className="mb-4">
          You've discovered the kingdom of an elusive Magical Swordsman; only the luckiest dream-walkers make it this far.
          Make yourself comfortable while Grandpa Gnome
          chefs up a yummy bowl of{" "}
          <span className="food-wrapper">
            <span
              className="font-bold cursor-pointer food-item"
              onClick={handleClick}
              onMouseEnter={(e) => {
                setShowDescription(true)
                handleSparklePosition(e)
              }}
              onMouseLeave={() => setShowDescription(false)}
            >
              {foods[foodIndex].emoji} {foods[foodIndex].name}

              <span
                className="sparkle sparkle-1"
                style={{
                  left: `${sparklePosition.left}px`,
                  top: `${sparklePosition.top}px`
                }}
              >
                ✨
              </span>
              <span
                className="sparkle sparkle-2"
                style={{
                  left: `${sparklePosition.left + 20}px`,
                  top: `${sparklePosition.top - 10}px`
                }}
              >
                ✨
              </span>
              <span
                className="sparkle sparkle-3"
                style={{
                  left: `${sparklePosition.left - 20}px`,
                  top: `${sparklePosition.top + 10}px`
                }}
              >
                ✨
              </span>
            </span>

            <span className={`description ${showDescription ? 'visible' : ''}`}>
              {foods[foodIndex].description}
            </span>
          </span>
        </p>
        <p>
          Once rested, explore the Enchanted Woodlands. The pixel creatures sense your presence standing tall and proud, eager to catch glimpses of the legendary Internet Traveler's arrival.
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
          transition: all 0.3s ease;
          animation: fadeIn 0.5s ease-in-out;
        }
        
        .food-item:hover {
          color: #FFD700;
          text-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
        }
        
        .food-item:active {
          transform: scale(0.95);
          transition: transform 0.1s ease;
        }
        
        .sparkle {
          position: absolute;
          pointer-events: none;
          font-size: 1.2rem;
          transform: translate(-50%, -50%);
          z-index: 5;
        }
        
        .sparkle-1 {
          animation: sparkleAnim 1.5s infinite;
        }
        .sparkle-2 {
          animation: sparkleAnim 1.5s infinite 0.3s;
        }
        .sparkle-3 {
          animation: sparkleAnim 1.5s infinite 0.6s;
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
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}