import { motion } from "framer-motion";
import ProjectListItem from "./ProjectListItem";

export default function ProjectList({
  projects,
  selectedIndex,
  onSelect,
  className = "",
  animate = false,
}) {
  return (
    <div
      className={`flex flex-col gap-2 md:max-h-[520px] md:overflow-y-auto pr-1 ${className}`}
    >
      {projects.map((project, index) =>
        animate ? (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: index * 0.06 }}
          >
            <ProjectListItem
              project={project}
              active={index === selectedIndex}
              onClick={() => onSelect(index)}
            />
          </motion.div>
        ) : (
          <ProjectListItem
            key={project.title}
            project={project}
            active={index === selectedIndex}
            onClick={() => onSelect(index)}
          />
        ),
      )}
    </div>
  );
}
