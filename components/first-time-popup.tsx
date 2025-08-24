"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { X, Gift } from "lucide-react"

export default function FirstTimePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    // Check if user has seen popup before
    const hasSeenPopup = localStorage.getItem("greenhouse-popup-seen")

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 10000) // Show after 10 seconds

      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (name && phone) {
      // Create WhatsApp message
      const message = `مرحباً، أريد الاستفادة من العرض الخاص (خصم 10%)%0A%0Aالاسم: ${name}%0Aرقم الهاتف: ${phone}`
      const whatsappUrl = `https://wa.me/966502394828?text=${message}`

      // Open WhatsApp
      window.open(whatsappUrl, "_blank")

      // Mark popup as seen and close
      localStorage.setItem("greenhouse-popup-seen", "true")
      setIsVisible(false)
    }
  }

  const handleClose = () => {
    localStorage.setItem("greenhouse-popup-seen", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto animate-in zoom-in-95 duration-300">
        <CardContent className="p-0">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent text-white p-6 rounded-t-lg relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 left-2 text-white hover:bg-white/20"
              onClick={handleClose}
            >
              <X className="w-4 h-4" />
            </Button>
            <div className="text-center">
              <Gift className="w-12 h-12 mx-auto mb-3" />
              <h2 className="font-heading text-2xl font-bold mb-2">عرض خاص!!!</h2>
              <p className="text-lg opacity-90">خصم حتى 10% على الطلب الأول!</p>
            </div>
          </div>

          {/* Form */}
          <div className="p-6">
            <p className="text-center text-muted-foreground mb-6">
              أدخل رقم هاتفك واحصل على خصم حتى 10% على طلبك الأول!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="الاسم *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="رقم الهاتف *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="bg-background"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold py-3 text-lg rounded-full"
              >
                احصل على الخصم الآن
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              بالتسجيل فإنك توافق على{" "}
              <a href="/privacy" className="text-primary hover:underline">
                سياسة الخصوصية
              </a>{" "}
              و{" "}
              <a href="/terms" className="text-primary hover:underline">
                شروط الخدمة
              </a>
              . يمكنك إلغاء الاشتراك في أي وقت.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
