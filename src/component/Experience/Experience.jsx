import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Languages as LanguagesIcon } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { experience, education, languages } from "./experienceData";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full bg-slate-950 py-12 px-4 sm:py-16 sm:px-6 md:py-24 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading title="Experience &" highlight="Education" />

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Experience */}
          <motion.div
            variants={cardVariants}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:col-span-2"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-400">
                <Briefcase size={22} />
              </span>
              <h3 className="text-lg font-semibold text-white">Experience</h3>
            </div>

            {experience.map((job) => (
              <div key={job.company} className="border-l border-cyan-400/30 pl-5">
                <h4 className="text-base font-semibold text-white">{job.role}</h4>
                <p className="mb-3 text-sm text-cyan-300/80">{job.company}</p>
                <ul className="space-y-1.5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-relaxed text-white/70"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            variants={cardVariants}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-400">
                <GraduationCap size={22} />
              </span>
              <h3 className="text-lg font-semibold text-white">Education</h3>
            </div>

            <div className="space-y-5">
              {education.map((edu) => (
                <div key={edu.school} className="border-l border-cyan-400/30 pl-5">
                  <h4 className="text-base font-semibold text-white">{edu.degree}</h4>
                  <p className="text-sm text-cyan-300/80">{edu.school}</p>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <p className="text-sm text-white/60">{edu.note}</p>
                    {edu.year && (
                      <span className="text-xs text-white/40">{edu.year}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            variants={cardVariants}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-400">
                <LanguagesIcon size={22} />
              </span>
              <h3 className="text-lg font-semibold text-white">Languages</h3>
            </div>

            <ul className="space-y-3">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center justify-between border-l border-cyan-400/30 pl-5"
                >
                  <span className="text-base font-medium text-white">{lang.name}</span>
                  <span className="text-sm text-white/60">{lang.level}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
