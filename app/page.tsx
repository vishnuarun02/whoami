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

    { name: "Ketchup-Soaked Cereal! (ClickMe)", emoji: "🥣 ", description: "Breakfast for those who never give up!" },
    { name: "Screaming Cheese! (ClickMe)", emoji: "🧀 ", description: "A delicacy that yells terror when bitten. Delicious, but emotionally exhausting." },
    { name: "Dragon's Mystery Honey! (ClickMe)", emoji: "🍯 ", description: "Harvested fresh & warm everyday" },
    { name: "Saitama Espresso! (ClickMe)", emoji: "☕ ", description: "So strong it punches YOU awake." },
    { name: "Durian Candy! (ClickMe)", emoji: "🍬 ", description: "Smells like used socks - but weirdly addictive." },
    { name: "Mermaid's Eyeball Stew! (ClickMe)", emoji: "🥣 ", description: "Ethically sourced — lovingly stares while you sip." },
    { name: "Dragon Egg Omelet! (ClickMe)", emoji: "🥚 ", description: "Rare, illegal, & totally worth the bounty on your head." },
    { name: "Goblin Jerky! (ClickMe)", emoji: "🥩 ", description: "Suspiciously chewy. Don’t ask what meat it is." },
    { name: "Top Ramen! (ClickMe)", emoji: "🍲 ", description: "Just regular Japanese noodles, honestly" },
    { name: "Fish Jelly On Toast! (ClickMe)", emoji: "🧠 ", description: "Overthinkers breakfast—one bite & you’ll be stoned with wisdom!" },
    { name: "Unicorn Horn Salad! (ClickMe)", emoji: "🦄 ", description: "A salad that tastes like a rainbow. Literally." },
    { name: "Chocolate-Covered Snails! (ClickMe)", emoji: "🐌 ", description: "A delicacy that’s crunchy, sweet & slimey" },
    { name: "Mystery Meatloaf! (ClickMe)", emoji: "🍖 ", description: "Made with whatever was in the fridge. Good luck!" },
    { name: "Moldy Mushroom Muffins! (ClickMe)", emoji: "🍄 ", description: "Expired for maximum taste — Penicillin optional" },
    { name: "Chocolaty Brussels Sprouts! (ClickMe)", emoji: "🍬 ", description: "A betrayal so deep, your taste buds might need therapy" },
    { name: "Goblin Energy Drink! (ClickMe)", emoji: "⚡ ", description: "Tastes like battery acid. Feels like unlimited power." },
    { name: "Minion’s Mystery Stew! (ClickMe)", emoji: "🍲 ", description: "Made with something. Tastes like something. No further questions." },
    { name: "Mermaid Sushi! (ClickMe)", emoji: "🍣 ", description: "Technically fish. Morally…questionable." },
    { name: "Wasabi Ice Cream! (ClickMe)", emoji: "🍦 ", description: "Looks innocent until it clears your sinuses and makes you question life choices." },
    { name: "Pickle Milkshake! (ClickMe)", emoji: "🥒 ", description: "Doctors swear by it, everyone else swears at it." },
    { name: "Kale Donuts! (ClickMe)", emoji: "🍩 ", description: "Healthy enough to eat six - at least that's what we tell ourselves." },
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
    const audio = new Audio('/sounds/sfx_sounds_powerup15.wav')
    audio.play()
  }

  return (
    <div className="font-body min-h-screen flex flex-col justify-start items-center pt-8">
      <h1 className="text-4xl font-heading mb-4 mt-6">Welcome, Internet Traveler</h1>

      <div
        className={`p-6 rounded-lg mb-6 text-xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}
        style={{ backgroundColor: bgColor }}
      >
        <p className="mb-4">
          You've discovered the kingdom of an Magical Swordsman; only the luckiest dream-walkers make it this far.
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
          Once rested, explore the Enchanted Woodlands. The pixel creatures sense your presence standing tall & proud, eager to catch glimpses of the legendary Internet Traveler's arrival.
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