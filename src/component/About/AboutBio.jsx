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
      specialized in{" "}
      <b className="text-white">React.js, JavaScript, and Tailwind CSS.</b> I
      focus on building responsive, scalable, and high-performance web
      applications with clean UI/UX and reusable components. I have hands-on
      experience with REST APIs, JWT authentication, Context API, and Redux
      Toolkit. I'm seeking a Front-End Developer role in a professional
      development team where I can deliver fast, efficient, and impactful
      solutions.
    </motion.p>
  );
}
