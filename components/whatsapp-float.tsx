"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <Button
        size="lg"
        className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-2xl animate-float group relative overflow-hidden"
        asChild
      >
        <a href="https://wa.me/966502394828" target="_blank" rel="noopener noreferrer" aria-label="تواصل عبر واتساب">
          <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 animation-delay-1000"></div>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            تواصل معنا عبر واتساب
            <div className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-full border-4 border-transparent border-r-gray-900"></div>
          </div>
        </a>
      </Button>
    </div>
  )
}
