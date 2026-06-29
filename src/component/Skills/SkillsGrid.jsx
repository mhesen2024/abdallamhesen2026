import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import SkillsLogoLoop from "./SkillsLogoLoop";
import { techLogos } from "./skillsData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsGrid() {
  return (
    <div className="space-y-16">
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-14 max-w-5xl mx-auto px-4 mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {techLogos.map((tech, index) => (
          <motion.div key={index} variants={itemVariants}>
            <SkillCard tech={tech} />
          </motion.div>
        ))}
      </motion.div>
      <SkillsLogoLoop />
    </div>
  );
}
