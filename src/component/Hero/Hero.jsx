import React from 'react'
import HeroBackground from './HeroBackground'
import HeroImage from './HeroImage'
import HeroContent from './HeroContent'
import HeroActions from './HeroActions'

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-40 px-4 w-full h-screen flex flex-col items-center justify-center bg-slate-950">
        <div className='absolute w-full h-full top-0 left-0 overflow-hidden'>
      <HeroBackground />
        </div>
        <HeroImage />
        <HeroContent />
        <HeroActions />
    </section>
  )
}
