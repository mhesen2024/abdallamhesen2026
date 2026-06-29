import React from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Rocket } from 'lucide-react'

const skills = [
  { icon: <Code size={22} />, title: 'Frontend Development', description: 'Building responsive and performant web applications with React, Tailwind CSS, and modern JavaScript.' },
  { icon: <Palette size={22} />, title: 'UI/UX Design', description: 'Crafting clean, intuitive interfaces with a focus on user experience and visual aesthetics.' },
  { icon: <Rocket size={22} />, title: 'Performance', description: 'Optimizing for speed and efficiency to deliver fast, seamless user experiences.' },
]

function SkillCard({ skill }) {
  return (
    <motion.div
      className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 transition-colors duration-300
        hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,255,255,0.08)]"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
    >
      <div className="mb-2.5 inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-400/20">
        {skill.icon}
      </div>
      <h3 className="mb-1 text-sm font-semibold text-white">{skill.title}</h3>
      <p className="text-xs leading-relaxed text-white/60">{skill.description}</p>
    </motion.div>
  )
}

export default function AboutSkills() {
  return (
    <motion.div
      className="grid gap-5 sm:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {skills.map((skill) => (
        <SkillCard key={skill.title} skill={skill} />
      ))}
    </motion.div>
  )
}
