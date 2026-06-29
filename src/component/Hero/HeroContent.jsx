import React from 'react'
import { motion } from 'framer-motion'
import HeroTagline from './HeroTagline'
import HeroHeading from './HeroHeading'
import HeroIntro from './HeroIntro'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function HeroContent() {
  return (
    <motion.div
      className='relative z-20 text-center'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <HeroIntro variants={itemVariants} />
      <HeroHeading variants={itemVariants} />
      <HeroTagline variants={itemVariants} />
    </motion.div>
  )
}
