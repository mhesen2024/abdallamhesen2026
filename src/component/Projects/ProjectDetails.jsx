import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import ProjectGallery from "./ProjectGallery";

export default function ProjectDetails({ project }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 min-h-[420px]">
      <AnimatePresence mode="wait">
        {project && (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col h-full"
          >
            <ProjectGallery images={project.images} title={project.title} />

            <h3 className="text-2xl font-bold text-white mb-1">
              {project.title}
            </h3>
            <span className="text-xs uppercase tracking-wider text-cyan-400 mb-4">
              {project.type}
            </span>

            <p className="text-gray-300 leading-relaxed mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-3">
             {
               project.liveUrl !=='#' ? (
                <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400/15 text-cyan-300 text-sm font-medium border border-cyan-400/30 hover:bg-cyan-400/25 transition-colors"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
              ):(<></>)}
              
              {project.repoUrl !=='#' ? (
                <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-200 text-sm font-medium border border-white/10 hover:bg-white/10 transition-colors"
                >
                <Code size={16} /> Code
              </a>
              ):(<></>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
