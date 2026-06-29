import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeading({ title, highlight }) {
  return (
    <motion.div
      className="text-center mb-8 sm:mb-12 md:mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
        {title} <span className="text-cyan-400">{highlight}</span>
      </h2>
      <motion.div
        className="mx-auto h-1 w-16 rounded-full bg-cyan-400/60"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      />
    </motion.div>
  )
}
