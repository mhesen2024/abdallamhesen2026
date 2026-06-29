import React from 'react'
import { motion } from 'framer-motion'

export default function HeroHeading({ variants }) {
  return (
    <motion.h1
      className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 max-w-4xl text-center mx-auto px-2"
      variants={variants}
    >
      Crafting Digital Experiences with{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
        Modern Web Tech
      </span>
    </motion.h1>
  )
}
