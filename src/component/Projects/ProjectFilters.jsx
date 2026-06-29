const FILTERS = [
  { id: "all", label: "All" },
  { id: "project", label: "Projects" },
  { id: "training", label: "Training" },
];

export default function ProjectFilters({ filter, onChange }) {
  return (
    <div className="flex ">
      {FILTERS.map((f, i) => (
        <button
          key={f.id}
          onClick={() => onChange(f.id)}
          className={`px-5 py-2 text-sm font-medium border border-cyan-400/30 transition-all duration-300 cursor-pointer ${
            i === 0 ? "rounded-tl-2xl" : ""
          } ${i === FILTERS.length - 1 ? "rounded-tr-2xl" : ""} ${
            filter === f.id
              ? "bg-cyan-400/15 text-cyan-300"
              : "bg-white/[0.03] text-gray-300 hover:bg-white/[0.06]"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
