import React from 'react'
import SectionHeading from '../SectionHeading'
import AboutBio from './AboutBio'
import AboutSkills from './AboutSkills'
import MagicRings from '../MagicRings'
import AboutImg from '../../assets/AbdallaMhesen2.jpeg'

export default function About() {
  return (
    <section id="about" className="relative w-full h-full  bg-slate-950 py-12 px-4 sm:py-16 sm:px-6 md:py-24 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <MagicRings
          color="#fc42ff"
          colorTwo="#42fcff"
          ringCount={6}
          speed={0.8}
          attenuation={10}
          lineThickness={2}
          baseRadius={0.35}
          radiusStep={0.1}
          scaleRate={0.1}
          opacity={0.8}
          blur={2}
          noiseAmount={0.1}
          rotation={0}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse
          mouseInfluence={0.2}
          hoverScale={1.2}
          parallax={0.05}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading title="About" highlight="Me" />

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-[minmax(0,320px)_1fr] md:items-start md:gap-12 lg:gap-16">
          {/* Profile image */}
          <div className="group relative mx-auto w-full max-w-xs md:sticky md:top-24">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-500/30 via-fuchsia-500/20 to-cyan-400/30 opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-1.5 shadow-2xl backdrop-blur-sm">
              <img
                src={AboutImg}
                alt="Abdalla Mhesen"
                className="h-80 w-full rounded-[1.25rem] object-cover object-top transition-transform duration-500 group-hover:scale-105 sm:h-96"
              />
            </div>
          </div>

          {/* Text + skills */}
          <div className="flex flex-col">
            <AboutBio />
            <AboutSkills />
          </div>
        </div>
      </div>
    </section>
  )
}
