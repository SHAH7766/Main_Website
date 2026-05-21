import React from 'react'
import dashboardImage from '../assets/hero-dashboard.svg'

export default function Hero() {
  return (
    <header className="hero min-h-screen pt-24">
      <div className="hero-bg absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,15,26,0.86)_0%,rgba(4,45,75,0.86)_58%,rgba(55,192,246,0.88)_100%)]" />
      <div className="hero-grid" />
      <div className="hero-split relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 px-4 pb-16 pt-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8 lg:pt-8">
        <div className="hero-copy-column">
          <p className="hero-badge"><span className="badge-bolt">AI</span> Power up your business with AI</p>
          <h1 className="hero-title">The AI-powered business operating system</h1>
          <p className="hero-copy">All the tools you need to capture, nurture and close new leads into bookings, sales, reviews and repeat customers.</p>
          <div className="hero-actions animate-fade-in-up animation-delay-300">
            <a className="hero-trial-button" href="#contact">
              <span>Start 14 Day Free Trial</span>
              <b aria-hidden="true">&gt;</b>
            </a>
          </div>
          <div className="hero-trust-row animate-fade-in-up animation-delay-500" aria-label="AI automation highlights">
            <span>Instant AI replies</span>
            <span>Missed-call text back</span>
            <span>Booking automation</span>
          </div>
        </div>

        <div className="hero-image-wrap animate-fade-in-up animation-delay-200">
          <div className="hero-float-card hero-float-card-top">
            <span>AI lead reply</span>
            <strong>12 sec</strong>
          </div>
          <div className="hero-float-card hero-float-card-bottom">
            <span>Booked this week</span>
            <strong>+38%</strong>
          </div>
          <div className="hero-play-pulse" aria-hidden="true"></div>
          <img src={dashboardImage} alt="AI business operating system dashboard" className="hero-dashboard-image" />
        </div>
      </div>
    </header>
  )
}
