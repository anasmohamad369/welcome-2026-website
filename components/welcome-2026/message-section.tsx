"use client"

import { motion } from "framer-motion"

export default function MessageSection() {
  const messageText = `Dear Me,

Don't rush. Don't compare.
Stay sincere, stay disciplined.

Trust Allah and keep moving.

Every step forward is progress.
Every moment of belief is victory.

See you at the finish line. 🤍`

  return (
    <section className="min-h-screen bg-[#0B0F1A] px-4 py-20 flex items-center">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-light text-[#EAEAEA] mb-4">A Message to Yourself</h2>
          <div className="h-1 w-20 bg-[#F5C542]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute -inset-8 bg-gradient-to-r from-[#F5C542]/10 to-[#4FD1FF]/10 blur-3xl" />

          <div className="relative border border-[#708090] bg-[#0B0F1A]/80 p-12 md:p-16">
            <p className="text-xl md:text-2xl font-light text-[#EAEAEA] leading-relaxed whitespace-pre-line">
              {messageText}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
