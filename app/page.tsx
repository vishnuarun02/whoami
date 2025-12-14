'use client'
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { getPageColor, initializeColor } from "@/lib/colorUtils"
import { ASSETS, EVENTS, STORAGE_KEYS } from "@/lib/constants"
import { foods } from "@/data/foods"

export default function Home() {
  const [bgColor, setBgColor] = useState<string>("")
  const [showDescription, setShowDescription] = useState(false)
  const [foodIndex, setFoodIndex] = useState(0)
  const updateColor = useCallback(() => {
    setBgColor(getPageColor())
  }, [])

  useEffect(() => {
    initializeColor()
    updateColor()

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEYS.colorIndex) {
        updateColor()
      }
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener(EVENTS.colorChange, updateColor)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener(EVENTS.colorChange, updateColor)
    }
  }, [updateColor])

  const handleFoodClick = () => {
    setFoodIndex((prevIndex) => (prevIndex + 1) % foods.length)
    const audio = new Audio(ASSETS.sounds.click)
    audio.play()
  }

  const currentFood = foods[foodIndex]

  return (
    <div className="font-body flex flex-col items-center gap-3 pt-2 md:pt-3 w-full">
      <h1 className="w-full px-4 md:px-6 text-2xl md:text-3xl font-heading mb-1 mt-1 md:mt-2 text-center">
        Welcome, Internet Traveler
      </h1>

      <div
        className="w-full p-4 md:p-5 rounded-lg mb-2 text-base md:text-lg text-white"
        style={{ backgroundColor: bgColor }}
      >
        <p className="mb-2">
          Only the luckiest dreamers make it this far. Make yourself comfortable while Grandpa Gnome chefs up a yummy bowl of{" "}
          <span className="food-wrapper">
            <span
              className="font-bold cursor-pointer food-item"
              onClick={handleFoodClick}
              onMouseEnter={() => setShowDescription(true)}
              onMouseLeave={() => setShowDescription(false)}
            >
              {currentFood.emoji} {currentFood.name}<span className="sparkles"><span className="sparkle sparkle-1">✨</span><span className="sparkle sparkle-2">✨</span><span className="sparkle sparkle-3">✨</span></span>
            </span>

            <span className={`description ${showDescription ? 'visible' : ''}`}>
              {currentFood.description}
            </span>
          </span>
        </p>
        <p>
          Once rested, explore the Enchanted Woodlands. The pixel creatures sense your presence, eager to catch glimpses of the legendary Internet Traveler's arrival.
        </p>
      </div>

      <div className="w-full flex justify-center items-center">
        <Image
          src={ASSETS.images.welcomePage}
          alt="Welcome Page Image"
          width={1200}
          height={600}
          sizes="100vw"
          className="w-full h-auto object-cover rounded-lg"
          priority
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
        
        .sparkles {
          display: inline-block;
          position: relative;
          width: 0;
          height: 0;
        }
        
        .sparkle {
          position: absolute;
          pointer-events: none;
          font-size: 1rem;
          z-index: 5;
          opacity: 0;
          white-space: nowrap;
        }
        
        .food-item:hover .sparkle {
          opacity: 1;
        }
        
        .sparkle-1 { 
          left: 5px;
          top: -15px;
          animation: sparkleAnim 1.5s infinite; 
        }
        .sparkle-2 { 
          left: 15px;
          top: -5px;
          animation: sparkleAnim 1.5s infinite 0.3s; 
        }
        .sparkle-3 { 
          left: 25px;
          top: -12px;
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

        h1 {
          text-shadow: 0 0 20px rgba(255, 215, 0, 0.7), 0 0 30px rgba(255, 215, 0, 0.4);
        }
      `}</style>
    </div>
  )
}

