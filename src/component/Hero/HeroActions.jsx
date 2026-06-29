import React from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowDown } from 'lucide-react'

export default function HeroActions() {
  return (
    <motion.div
      className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap relative z-20"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } }
      }}
    >
      <motion.a
        href="/Abdalla%20Mhesen%20-%20Frontend%20dev%20-%20Cv.pdf"
        download="Abdalla Mhesen - Frontend dev - Cv.pdf"
        className="cursor-pointer inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base bg-cyan-500/10 border border-cyan-400 text-cyan-300 hover:text-white font-medium rounded-lg transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.4),0_0_40px_rgba(34,211,238,0.15)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6),0_0_60px_rgba(34,211,238,0.3)] hover:bg-cyan-500/20"
        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download className="size-4 sm:size-[18px]" />
        Download CV
      </motion.a>
      <motion.a
        href="#projects"
        className="cursor-pointer inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base bg-purple-500/10 border border-purple-400 text-purple-300 hover:text-white font-medium rounded-lg transition-all duration-300 shadow-[0_0_10px_rgba(192,132,252,0.4),0_0_40px_rgba(192,132,252,0.15)] hover:shadow-[0_0_20px_rgba(192,132,252,0.6),0_0_60px_rgba(192,132,252,0.3)] hover:bg-purple-500/20"
        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Show My Work
        <ArrowDown className="size-4 sm:size-[18px]" />
      </motion.a>
    </motion.div>
  )
}
