import React from "react";
import { motion } from "framer-motion";

export default function AboutBio() {
  return (
    <motion.p
      className="max-w-2xl text-left text-white/70 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      Hi! I'm{" "}
      <b className="text-white">Abdalla Mhesen, a Front-End Developer</b>{" "}
      specializing in building modern, responsive web applications using{" "}
      <b className="text-white">React and Next.js.</b> I focus on crafting
      scalable dashboards and user-friendly interfaces with clean design and
      high performance. Passionate about creating seamless digital experiences,
      I aim to deliver fast, efficient, and impactful solutions that help
      businesses grow and stand out in the digital world.
    </motion.p>
  );
}
