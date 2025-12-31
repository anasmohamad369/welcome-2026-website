"use client"

import { motion } from "framer-motion"

export default function FaithSection() {
  return (
    <section className="min-h-screen bg-[#0B0F1A] px-4 py-20 flex items-center">
      <div className="max-w-3xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <p className="text-3xl md:text-4xl font-light text-[#4FD1FF] mb-4">🕌</p>
          </div>

          <p className="text-2xl md:text-3xl font-light text-[#EAEAEA] mb-8 leading-relaxed italic">
            "Indeed, Allah is with those who are patient."
          </p>

          <p className="text-xl text-[#F5C542]">— Qur'an 2:153</p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 w-20 bg-[#F5C542] mx-auto mt-8"
            style={{ transformOrigin: "center" }}
          />
        </motion.div>
      </div>
    </section>
  )
}
