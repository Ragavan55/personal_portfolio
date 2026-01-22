'use client'

import HeroNew from './components/HeroNew'
import Summary from './components/Summary'
import TechnicalSkills from './components/TechnicalSkills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import ParticlesBackground from './components/ParticlesBackground'
import ScrollToTop from './components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-gray-900 transition-colors duration-300">
      <Navigation />
      <HeroNew />
      <Summary />
      <TechnicalSkills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <ScrollToTop />
    </main>
  )
}
