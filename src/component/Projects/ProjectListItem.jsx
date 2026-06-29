import { FolderGit2 } from "lucide-react";

export default function ProjectListItem({ project, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-3 text-left rounded-xl p-3 border transition-all duration-300 cursor-pointer w-full max-w-xs md:max-w-none ${
        active
          ? "border-cyan-400/60 bg-cyan-400/10"
          : "border-white/10 bg-white/[0.02] hover:border-cyan-400/30 hover:bg-white/[0.05]"
      }`}
    >
      <span
        className={`flex items-center justify-center w-10 h-10 rounded-lg shrink-0 transition-colors h-[50px] w-[100px] ${
          active
            ? "bg-cyan-400/20 text-cyan-300"
            : "bg-white/5 text-gray-400 group-hover:text-cyan-300"
        }`}
      >
        <img src={project.icon} alt={project.title} alt="" className="w-full h-full object-contain" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-white truncate">
          {project.title}
        </span>
        <span className="block text-xs text-gray-400 capitalize">
          {project.type}
        </span>
      </span>
    </button>
  );
}
