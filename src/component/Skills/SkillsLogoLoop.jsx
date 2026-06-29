import { motion } from "framer-motion";
import LogoLoop from "../LogoLoop";
import { techLogos2 } from "./skillsData";

export default function SkillsLogoLoop() {
  return (
    <motion.div
      className="bg-white/[0.04] backdrop-blur-xl border-y border-white/5 py-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col gap-4 justify-between items-center h-[200px] relative">
        <LogoLoop
          logos={techLogos2}
          speed={100}
          direction="left"
          logoHeight={70}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          ariaLabel="Technology partners"
        />
        <LogoLoop
          logos={techLogos2}
          speed={100}
          direction="right"
          logoHeight={70}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          ariaLabel="Technology partners"
        />
      </div>
    </motion.div>
  );
}
