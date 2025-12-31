"use client"

import type React from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, Box, Torus } from "@react-three/drei"
import { useEffect, useMemo, useRef, useState } from "react"
import { motion } from "framer-motion"
import { BufferGeometry, BufferAttribute, Points } from "three"

export default function HeroSection() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const calculateTimeUntil2026 = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      const endOf2025 = new Date(`December 31, ${currentYear} 23:59:59`).getTime()
      const difference = endOf2025 - now.getTime()

      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)))
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24))
        setMinutes(Math.floor((difference / 1000 / 60) % 60))
        setSeconds(Math.floor((difference / 1000) % 60))
      }
    }

    calculateTimeUntil2026()
    const interval = setInterval(calculateTimeUntil2026, 1000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  function Particles({ count = 100 }) {
    const geometry = useMemo(() => {
      const positions = new Float32Array(count * 3)
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20
      }
      const geom = new BufferGeometry()
      geom.setAttribute("position", new BufferAttribute(positions, 3))
      return geom
    }, [count])
  
    const pointsRef = useRef<Points>(null)
  
    useFrame((state) => {
      if (pointsRef.current) {
        pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
      }
    })
  
    return (
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial size={0.05} color="#00eaff" transparent opacity={0.6} sizeAttenuation />
      </points>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-[#0B0F1A]">
      

      <motion.div
        className="relative z-10 text-center max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span className="text-[#F5C542] text-lg font-light tracking-widest">✨ WELCOME</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-7xl md:text-8xl font-light text-[#EAEAEA] mb-4 tracking-tight"
        >
          2026
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-[#EAEAEA] mb-8 font-light leading-relaxed"
        >
          A new year. A new chapter.
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-[#4FD1FF] mb-12 font-light">
          Let's build better, stronger, and closer to Allah.
        </motion.p>

        {/* Countdown */}
        <motion.div variants={itemVariants} className="flex gap-8 justify-center text-center mb-12">
          {[
            { value: days, label: "Days" },
            { value: hours, label: "Hours" },
            { value: minutes, label: "Minutes" },
            { value: seconds, label: "Seconds" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-light text-[#F5C542] mb-2">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-sm text-[#708090] uppercase tracking-wider">{item.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <button className="px-8 py-3 border border-[#F5C542] text-[#F5C542] hover:bg-[#F5C542] hover:text-[#0B0F1A] transition-colors duration-300 uppercase text-sm tracking-widest">
            Scroll to Begin
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
