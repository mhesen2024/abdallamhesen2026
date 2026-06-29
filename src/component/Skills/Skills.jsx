import SectionHeading from '../SectionHeading'
import SkillsGrid from './SkillsGrid'

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-24 overflow-hidden">
      <div className="relative z-10 mx-auto">
        <SectionHeading title="My" highlight="Skills" />
        <SkillsGrid />
      </div>
    </section>
  )
}
