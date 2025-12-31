"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/welcome-2026/hero-section"
import ReflectionSection from "@/components/welcome-2026/reflection-section"
import GoalsSection from "@/components/welcome-2026/goals-section"
import MessageSection from "@/components/welcome-2026/message-section"
import FaithSection from "@/components/welcome-2026/faith-section"
import Footer from "@/components/welcome-2026/footer"

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="w-full overflow-hidden bg-gradient-to-b from-[#0B0F1A] to-[#0B0F1A]">
      <HeroSection />
      <ReflectionSection />
      <GoalsSection />
      <MessageSection />
      <FaithSection />
      <Footer />
    </main>
  )
}
