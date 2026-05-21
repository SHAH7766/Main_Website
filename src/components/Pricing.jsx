import React from 'react'

const packages = [
  {
    name: 'Starter Bot',
    price: '$1,200',
    desc: 'For teams that need instant reply and missed-call recovery first.',
    features: ['Missed-call text-back', 'Lead intake script', 'Basic CRM routing', 'Launch in 7 to 10 days']
  },
  {
    name: 'Automation Engine',
    price: '$2,950',
    desc: 'For businesses ready to automate the full lead-to-booking journey.',
    features: ['AI lead qualification', 'Booking and reminder flows', 'Pipeline triggers', 'Team alerts and reporting'],
    featured: true
  },
  {
    name: 'AI Operations',
    price: 'Custom',
    desc: 'For operators who want deeper integrations and ongoing automation optimization.',
    features: ['Multi-channel AI agents', 'Advanced CRM logic', 'Custom integrations', 'Monthly workflow improvements']
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="section-heading-center">
          <p className="section-kicker">AI automation packages</p>
          <h2 className="section-title">Start with the workflow that saves the most time</h2>
          <p className="section-copy">Each package is focused on one thing: fewer missed leads, faster follow-up, and cleaner operational handoffs.</p>
        </div>
        <div className="pricing-grid">
          {packages.map((item) => (
            <article className={`pricing-card ${item.featured ? 'pricing-card-featured' : ''}`} key={item.name}>
              {item.featured && <span className="pricing-ribbon">Most popular</span>}
              <h3>{item.name}</h3>
              <strong>{item.price}</strong>
              <p>{item.desc}</p>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className={item.featured ? 'primary-button' : 'secondary-button'}>Audit this workflow</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
