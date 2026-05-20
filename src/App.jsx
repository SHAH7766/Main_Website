import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Results from './components/Results'

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <Hero />
      <main>
        <Services />
        <Results />
        <Contact />
      </main>
      <footer className="site-footer">(c) {new Date().getFullYear()} Brick & Pixel - All rights reserved</footer>
    </div>
  )
}
