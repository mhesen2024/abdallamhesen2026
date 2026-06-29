import React from "react";
import { motion } from "framer-motion";
import ImgProfile from "../../assets/Abdalla Mhesen.png";
export default function HeroImage() {
  return (
    <div className="scale-[0.7] sm:scale-100 origin-center relative z-10">
    <motion.div
      className="relative pt-15 mb-30 flex items-center justify-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100,   }}
    >
      <motion.div
        className=" absolute mt-45 h-80 w-80 z-10 mb-8 backdrop-blur-sm bg-cyan-400/25 rounded-full border-4 border-indigo-500 shadow-[0_0_15px_rgba(34,211,238,0.6),0_0_40px_rgba(34,211,238,0.3)]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: false, ease: "easeInOut" }}
      >
      </motion.div>
      <motion.div
        className="absolute z-10 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-80 w-80 "
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
      >
        <img
          src={ImgProfile}
          alt="Abdalla Mhesen"
          className="object-contain z-20 "
          />
          </motion.div>
    </motion.div>
    </div>
  );
}
