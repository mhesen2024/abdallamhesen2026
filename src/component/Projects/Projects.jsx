import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { projects } from "./projectsData";
import ProjectFilters from "./ProjectFilters";
import ProjectList from "./ProjectList";
import ProjectDetails from "./ProjectDetails";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [listOpen, setListOpen] = useState(false);

  const filtered = useMemo(
    () =>
      filter === "all" ? projects : projects.filter((p) => p.type === filter),
    [filter],
  );

  const selected = filtered[selectedIndex] ?? filtered[0];

  const handleFilter = (id) => {
    setFilter(id);
    setSelectedIndex(0);
  };

  const handleSelect = (index) => {
    setSelectedIndex(index);
    setListOpen(false);
  };

  return (
    <section
      id="projects"
      className="relative w-full bg-slate-950 py-24 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <SectionHeading title="My" highlight="Projects" />

        <ProjectFilters filter={filter} onChange={handleFilter} />

        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-4 bg-white/[0.03] backdrop-blur-lg p-4 rounded-b-2xl rounded-tr-2xl border border-cyan-400/20">
          {/* Mobile: toggle button + animated collapsible list */}
          <div className="md:hidden">
            <button
              onClick={() => setListOpen((o) => !o)}
              className=" flex mx-auto px-4 py-3 rounded-full bg-cyan-400/10 text-cyan-300 text-sm font-medium border border-cyan-400/30 cursor-pointer"
            >
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  listOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {listOpen && (
                <motion.div
                  key="mobile-list"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ProjectList
                    className="pt-3 items-center"
                    projects={filtered}
                    selectedIndex={selectedIndex}
                    onSelect={handleSelect}
                    animate
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop: always-visible list */}
          <ProjectList
            className="hidden md:flex"
            projects={filtered}
            selectedIndex={selectedIndex}
            onSelect={handleSelect}
          />

          <ProjectDetails project={selected} />
        </div>
      </div>
    </section>
  );
}
