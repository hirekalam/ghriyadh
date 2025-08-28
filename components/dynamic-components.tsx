"use client"

import dynamic from "next/dynamic"

const FirstTimePopup = dynamic(() => import("@/components/first-time-popup"), { ssr: false })
const WhatsAppFloat = dynamic(() => import("@/components/whatsapp-float"), { ssr: false })

export default function DynamicComponents() {
  return (
    <>
      <FirstTimePopup />
      <WhatsAppFloat />
    </>
  )
}