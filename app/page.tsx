"use client"

import { useState, useEffect } from "react"
import { Heart, Music, Camera, Gift, Sparkles } from "lucide-react"

export default function ProposalPage() {
  const [noButtonStyle, setNoButtonStyle] = useState({})
  const [accepted, setAccepted] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  const loveMessages = [
    "You're the missing piece to my puzzle.",
    "Every day with you is a wonderful addition to my life's journey.",
    "Your smile brightens even my darkest days.",
    "I fall in love with you more and more each day.",
    "You're my soulmate, my best friend, my everything.",
    "Your love is the greatest gift I've ever received.",
    "I cherish every moment we spend together.",
    "You make my heart skip a beat every time I see you.",
    "Our love story is my favorite of all time.",
    "I'm so grateful to have you in my life.",
    "You're the first thing I think about when I wake up.",
    "Your love gives me strength to face any challenge.",
    "I can't imagine spending my life with anyone but you.",
    "You're the reason I believe in true love.",
    "Every love song reminds me of you.",
    "Your love is like a dream I never want to wake up from.",
    "I love you more than words can express.",
    "You're my home, my safe haven, my everything.",
    "Our love is a beautiful adventure I never want to end.",
    "You complete me in ways I never knew I needed.",
  ]

  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
    "text-pink-500",
    "text-indigo-500",
    "text-teal-500",
    "text-orange-500",
    "text-cyan-500",
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (accepted) {
      const interval = setInterval(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % loveMessages.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [accepted])

  const moveButton = () => {
    const newX = Math.random() * (window.innerWidth - 100)
    const newY = Math.random() * (window.innerHeight - 50)
    setNoButtonStyle({ position: "absolute", left: `${newX}px`, top: `${newY}px` })
  }

  const handleYesClick = () => {
    setAccepted(true)
    // Simulate sending an email notification
    console.log("Proposal accepted! Email sent to npacipunique1000@gmail.com")
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
        <Heart className="text-white animate-pulse" size={48} />
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 animate-gradient-x">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-500 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3,
            }}
            size={24 + Math.random() * 24}
          />
        ))}
      </div>
      <div className="z-10 p-8 bg-white rounded-lg shadow-xl w-11/12 max-w-4xl">
        {!accepted ? (
          <>
            <h1 className="mb-4 text-4xl font-bold text-center text-pink-600">Will you marry me Giselle?</h1>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-6 py-3 font-bold text-white bg-green-500 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
                onClick={handleYesClick}
              >
                Yes
              </button>
              <button
                className="px-6 py-3 font-bold text-white bg-red-500 rounded-full hover:bg-red-600 transition-all duration-300"
                style={noButtonStyle}
                onMouseEnter={moveButton}
              >
                No
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-pink-600">
              𝒯𝐻𝒜𝒩𝒦 𝒴𝒪𝒰 𝐹𝒪𝑅 𝒮𝒜𝒴𝐼𝒩𝒢 𝒴𝐸𝒮, 𝐼 𝑅𝐸𝒜𝐿𝐿𝒴 𝐿𝒪𝒱𝐸 𝒴𝒪𝒰 𝒯𝒪𝒪 𝑀𝒴 𝐿𝒪𝒱𝐸 💓💓💕💕











                 𝒞𝑅𝐸𝐴𝒯𝐸𝒟 𝐵𝒴   𝒩_𝒫𝒜𝒸𝒾_𝒫                        
            </h2>
            <p
              className={`mb-4 text-2xl font-semibold ${colors[currentMessageIndex % colors.length]} transition-all duration-500`}
            >
              {loveMessages[currentMessageIndex]}
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <Heart className="text-red-500 animate-pulse" size={48} />
              <Music className="text-blue-500 animate-bounce" size={48} />
              <Camera className="text-green-500 animate-spin" size={48} />
              <Gift className="text-yellow-500 animate-pulse" size={48} />
              <Sparkles className="text-purple-500 animate-ping" size={48} />
            </div>
          </div>
        )}
      </div>
      <div className="mt-8 text-sm text-white absolute bottom-4">
        © {new Date().getFullYear()} 𝒩_𝒫𝒜𝒸𝒾_𝒫. All rights reserved. Made for you with ❤️
      </div>
    </div>
  )
}

