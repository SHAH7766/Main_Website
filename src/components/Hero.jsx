import React from 'react'

export default function Hero() {
  return (
    <header className="hero min-h-screen pt-24">
      <div className="hero-bg absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_26%,rgba(165,190,0,0.18),transparent_32%),radial-gradient(circle_at_15%_52%,rgba(255,122,89,0.16),transparent_26%),linear-gradient(180deg,rgba(1,21,29,0.66),rgba(1,21,29,0.97))]" />
      <div className="hero-grid" />
      <div className="hero-content relative z-10 max-w-6xl mx-auto px-4 pb-16 pt-20 sm:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="hero-badge">AI automation systems for service businesses</p>
          <h1 className="hero-title">Automate your follow-up before warm leads go cold.</h1>
          <p className="hero-copy">Zenthic builds AI agents, CRM workflows, missed-call text-back, booking reminders, and pipeline alerts that keep every inquiry moving without adding more admin work.</p>
          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-300">
            <a className="primary-button" href="#contact">Get an automation audit</a>
            <a className="secondary-button" href="#services">See what we automate</a>
          </div>
          <div className="hero-proof animate-fade-in-up animation-delay-500" aria-label="Automation benefits">
            <span>No missed-call leaks</span>
            <span>CRM-ready workflows</span>
            <span>Built for service teams</span>
          </div>
        </div>
        <div className="hero-stats" aria-label="Business outcomes">
          <div><strong>60 sec</strong><span>target response time for new inquiries</span></div>
          <div><strong>24/7</strong><span>AI replies, reminders, and missed-call recovery</span></div>
          <div><strong>14 days</strong><span>to launch your first automation stack</span></div>
        </div>
        <div className="hero-preview animate-fade-in-up animation-delay-500" aria-label="Growth dashboard preview">
          <div className="preview-toolbar">
            <span></span>
            <span></span>
            <span></span>
            <p>Live growth command center</p>
          </div>
          <div className="preview-body">
            <div className="preview-pipeline">
              {['Lead in', 'AI qualify', 'Booked', 'Reminder', 'Review'].map((stage, index) => (
                <div key={stage}>
                  <span>{stage}</span>
                  <strong>{[42, 37, 21, 18, 14][index]}</strong>
                </div>
              ))}
            </div>
            <div className="preview-panel">
              <p>Automation queue</p>
              <span>Reply to 7 new leads</span>
              <span>Confirm 4 bookings</span>
              <span>Request 14 reviews</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
