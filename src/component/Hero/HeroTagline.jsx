import React from 'react'
import { motion } from 'framer-motion'

export default function HeroTagline({ variants }) {
  return (
    <motion.p
      className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-400 mb-6 sm:mb-10 px-2"
      variants={variants}
    >
      First impressions last — so make it count
    </motion.p>
  )
}
