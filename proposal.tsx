"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"

export default function ProposalPage() {
  const [showProposal, setShowProposal] = useState(false)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [accepted, setAccepted] = useState(false)
  const [loveMessage, setLoveMessage] = useState("")

  const loveMessages = [
    "You're the missing piece to my puzzle.",
    "Every day with you is a wonderful addition to my life's journey.",
    "You make my heart skip a beat every time I see you.",
    "I fall in love with you more and more each day.",
    "You're my soulmate, my best friend, my everything.",
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProposal(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const moveNoButton = () => {
    const newX = Math.random() * (window.innerWidth - 100)
    const newY = Math.random() * (window.innerHeight - 50)
    setNoButtonPosition({ x: newX, y: newY })
  }

  const handleYesClick = () => {
    setAccepted(true)
    setLoveMessage(loveMessages[Math.floor(Math.random() * loveMessages.length)])
    // Simulate sending an email notification
    console.log("Proposal accepted! Email sent to npacipunique1000@gmail.com")
  }

  if (!showProposal) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
        <div className="text-4xl font-bold text-white animate-pulse">Loading our love story...</div>
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
      <div className="z-10 p-8 bg-white rounded-lg shadow-xl">
        {!accepted ? (
          <>
            <h1 className="mb-4 text-3xl font-bold text-center text-pink-600">Will you marry me?</h1>
            <div className="flex justify-center space-x-4">
              <button
                className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600"
                onClick={handleYesClick}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
                style={{
                  position: "absolute",
                  left: `${noButtonPosition.x}px`,
                  top: `${noButtonPosition.y}px`,
                  transition: "all 0.2s ease-in-out",
                }}
                onMouseEnter={moveNoButton}
              >
                No
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold text-pink-600">You've made me the happiest person alive!</h2>
            <p className="mb-4 text-lg text-gray-700">{loveMessage}</p>
            <Heart className="mx-auto text-red-500 animate-pulse" size={48} />
          </div>
        )}
      </div>
      <div className="mt-4 text-sm text-white">© {new Date().getFullYear()} Love Proposal. All rights reserved.</div>
    </div>
  )
}

