import React from 'react'

const results = [
  {
    value: '< 1 min',
    title: 'Faster first touch',
    desc: 'Automated replies reach new leads quickly, even when your team is busy or closed.'
  },
  {
    value: '24/7',
    title: 'Always-on nurture',
    desc: 'Leads get reminders, answers, and next steps without waiting for a manual follow-up.'
  },
  {
    value: '0 gaps',
    title: 'Cleaner handoffs',
    desc: 'Qualified leads, overdue tasks, and hot opportunities are routed to the right person.'
  }
]

export default function Results() {
  return (
    <section id="results" className="results-section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="results-shell">
          <div>
            <p className="section-kicker">Automation outcomes</p>
            <h2 className="section-title">Built to protect every lead after the first click</h2>
          </div>
          <p className="section-copy">AI automation helps your business respond faster, follow up longer, and surface the moments where a human should step in.</p>
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
