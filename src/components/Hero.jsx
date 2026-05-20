import React from 'react'

export default function Hero() {
  return (
    <header className="hero min-h-[92vh] pt-24">
      <div className="hero-bg absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(165,190,0,0.16),transparent_34%),linear-gradient(180deg,rgba(1,21,29,0.72),rgba(1,21,29,0.96))]" />
      <div className="hero-grid" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 sm:py-28 text-center">
        <h1 className="hero-title">Design, automate, and grow with a brand presence that converts.</h1>
        <p className="hero-copy">We build beautiful websites, digital marketing campaigns, and AI-powered automation that turns visitors into customers.</p>
        <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-300">
          <a className="primary-button" href="#contact">Book Your Strategy Call</a>
          <a className="secondary-button" href="#services">Explore Services</a>
        </div>
        <div className="hero-stats" aria-label="Business outcomes">
          <div><strong>Fast</strong><span>launch cycles</span></div>
          <div><strong>Smart</strong><span>automation</span></div>
          <div><strong>Clear</strong><span>growth tracking</span></div>
        </div>
        <div className="hero-preview animate-fade-in-up animation-delay-500" aria-hidden="true">
          <div className="preview-toolbar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="preview-body">
            <div className="preview-chart">
              <i style={{height: '44%'}}></i>
              <i style={{height: '64%'}}></i>
              <i style={{height: '52%'}}></i>
              <i style={{height: '82%'}}></i>
              <i style={{height: '72%'}}></i>
            </div>
            <div className="preview-copy">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
