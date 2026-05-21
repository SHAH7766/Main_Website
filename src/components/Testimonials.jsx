import React from 'react'

const stories = [
  {
    quote: 'Zenthic helped us stop losing leads after hours. The missed-call and AI reply flow made our booking process feel immediate.',
    name: 'Maya R.',
    role: 'Med spa owner'
  },
  {
    quote: 'The best part is visibility. We can see which automations fired, which leads booked, and what still needs a human touch.',
    name: 'Chris L.',
    role: 'Home services operator'
  },
  {
    quote: 'We used to chase reminders manually. Now the system confirms appointments, nudges old leads, and asks for reviews automatically.',
    name: 'Nadia S.',
    role: 'Consulting founder'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonial-section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="testimonial-lead">
          <p className="section-kicker">Automation wins</p>
          <h2 className="section-title">Built for teams tired of repeating the same follow-up tasks</h2>
          <p className="section-copy">The goal is simple: let AI handle the repeatable steps so your team can focus on the conversations that matter.</p>
        </div>
        <div className="testimonial-grid">
          {stories.map((story) => (
            <article className="testimonial-card" key={story.name}>
              <p>"{story.quote}"</p>
              <div>
                <strong>{story.name}</strong>
                <span>{story.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
