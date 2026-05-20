import React from 'react'

const results = [
  {
    value: '01',
    title: 'Sharper first impression',
    desc: 'A refined website that quickly explains who you are, what you offer, and why visitors should trust you.'
  },
  {
    value: '02',
    title: 'Better lead flow',
    desc: 'Clear calls to action, cleaner forms, and follow-up systems that keep opportunities from going cold.'
  },
  {
    value: '03',
    title: 'Smarter growth decisions',
    desc: 'Campaign and website signals organized into practical next steps instead of noisy dashboards.'
  }
]

export default function Results() {
  return (
    <section className="results-section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="results-shell">
          <div>
            <p className="section-kicker">Why it works</p>
            <h2 className="section-title">A digital presence with a job to do</h2>
          </div>
          <p className="section-copy">The goal is not just a prettier website. It is a better path from attention to action, supported by automation and measured marketing.</p>
        </div>
        <div className="results-grid">
          {results.map((item) => (
            <article className="result-card" key={item.title}>
              <span>{item.value}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
