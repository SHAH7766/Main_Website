import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Results from './components/Results'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import TrialModal from './components/TrialModal'
import AutomationShowcase from './components/AutomationShowcase'

export default function App() {
  return (
    <div className="app-root">
      <TrialModal />
      <Navbar />
      <Hero />
      <main>
        <AutomationShowcase />
        <Services />
        <Results />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
          <p>(c) {new Date().getFullYear()} Zenthic - AI automation systems for service businesses.</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#use-cases">Use Cases</a>
            <a href="#services">Automations</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Stories</a>
            <a href="#contact">Start</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
