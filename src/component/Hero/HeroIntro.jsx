import React from 'react'
import { motion } from 'framer-motion'

export default function HeroIntro({ variants }) {
  return (
    <motion.p
      className="text-base sm:text-lg text-slate-300 mb-3 sm:mb-4 px-2"
      variants={variants}
    >
      Hi! I'm <span className="text-white font-semibold">Abdalla Mhesen</span>, a Front-End Developer with React 
    </motion.p>
  )
}
