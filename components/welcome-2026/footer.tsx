"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-[#0B0F1A] border-t border-[#708090] px-4 py-16">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-light text-[#EAEAEA] mb-6">See you at the end of 2026 🤍</p>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
            <a href="#" className="text-[#4FD1FF] hover:text-[#F5C542] transition-colors font-light">
              Portfolio
            </a>
            <a href="#" className="text-[#4FD1FF] hover:text-[#F5C542] transition-colors font-light">
              LinkedIn
            </a>
            <a href="#" className="text-[#4FD1FF] hover:text-[#F5C542] transition-colors font-light">
              GitHub
            </a>
          </div>

          <p className="text-[#708090] font-light text-sm">© 2026. Built with intention and faith.</p>
        </motion.div>

        {/* Animated footer stars */}
        <div className="mt-12 flex justify-center gap-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-[#F5C542] rounded-full"
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}
