"use client"

import { motion } from "framer-motion"

const reflectionCards = [
  {
    title: "What I Learned",
    content: "Patience, discipline, and belief in the process.",
    icon: "📚",
  },
  {
    title: "What I Lost",
    content: "Doubt and the need to compare my journey with others.",
    icon: "🌅",
  },
  {
    title: "What Made Me Stronger",
    content: "Every challenge overcame, every goal pursued relentlessly.",
    icon: "💪",
  },
]

export default function ReflectionSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="min-h-screen bg-[#0B0F1A] px-4 py-20 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-[#EAEAEA] mb-4">Reflection of 2025</h2>
          <div className="h-1 w-20 bg-[#F5C542]" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {reflectionCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="border border-[#708090] bg-[#0B0F1A]/50 p-8 hover:border-[#F5C542] transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-light text-[#F5C542] mb-4">{card.title}</h3>
              <p className="text-[#EAEAEA] font-light leading-relaxed text-lg">{card.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
