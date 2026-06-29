import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Experience from './component/Experience/Experience'
import Skills from './component/Skills/Skills'
import Projects from './component/Projects/Projects'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer'

export default function App() {
  return (
	<div>
	  <Navbar />
	  <Hero/>
	  <About />
	  <Experience />
	  <Skills />
	  <Projects />
	  <Contact />
	  <Footer />
	</div>
  )
}
