export default function SkillCard({ tech }) {
  return (
    <div
      className="group cursor-pointer relative text-center rounded-xl h-24 flex items-end justify-center bg-white/[0.03] backdrop-blur-lg p-4 transition-all duration-300 hover:-translate-y-2"
      style={{
        border: `1px solid ${tech.neon}`,
        boxShadow: `0 0 10px ${tech.neon}40, 0 0 30px ${tech.neon}20, inset 0 0 15px ${tech.neon}10`,
      }}
    >
      <span
        className={`z-10 absolute -top-10 left-1/2 -translate-x-1/2 text-white w-[72px] h-[72px] rounded-full flex items-center justify-center scale-110 transition-transform duration-300 group-hover:scale-125 ${tech.bgColor}`}
        style={{
          boxShadow: `0 0 12px ${tech.neon}80, 0 0 30px ${tech.neon}40`,
        }}
      >
        {tech.node}
      </span>
<p className={`text-sm font-medium transition-colors duration-300 ${tech.bgColor} text-transparent bg-clip-text  group-hover:${tech.neon}`}>
  {tech.title}
</p>
    </div>
  );
}