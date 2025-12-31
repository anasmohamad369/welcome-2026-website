"use client"

import { motion } from "framer-motion"

const goals = [
  { emoji: "📚", title: "Learn React Native", description: "Deeply master React Native development" },
  { emoji: "💪", title: "Gym Consistency", description: "Build discipline and strength" },
  { emoji: "🧠", title: "Soft Skills", description: "Improve communication and leadership" },
  { emoji: "🕌", title: "Spiritual Growth", description: "Stronger connection with Allah" },
  { emoji: "🚀", title: "Career Goals", description: "Reach new heights professionally" },
]

export default function GoalsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const goalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
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
          <h2 className="text-5xl md:text-6xl font-light text-[#EAEAEA] mb-4">Goals for 2026 🌱</h2>
          <div className="h-1 w-20 bg-[#4FD1FF]" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {goals.map((goal, idx) => (
            <motion.div
              key={idx}
              variants={goalVariants}
              whileHover={{ y: -8, borderColor: "#F5C542" }}
              className="border border-[#708090] bg-[#0B0F1A]/50 p-6 transition-colors duration-300 cursor-pointer"
            >
              <div className="text-3xl mb-3">{goal.emoji}</div>
              <h3 className="text-xl font-light text-[#EAEAEA] mb-2">{goal.title}</h3>
              <p className="text-[#708090] font-light text-sm leading-relaxed">{goal.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
