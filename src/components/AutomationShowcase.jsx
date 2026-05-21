import React from 'react'

const industries = ['Med spas', 'Home services', 'Dental clinics', 'Legal firms', 'Consultants']

const automations = [
  {
    title: 'AI receptionist',
    desc: 'Answers common questions, captures intent, and routes high-value leads to your team.'
  },
  {
    title: 'Missed-call recovery',
    desc: 'Sends instant text replies when your team cannot answer the phone.'
  },
  {
    title: 'Appointment engine',
    desc: 'Confirms bookings, sends reminders, handles reschedules, and reduces no-shows.'
  },
  {
    title: 'Review and reactivation',
    desc: 'Requests reviews after successful jobs and re-engages leads that went quiet.'
  }
]

export default function AutomationShowcase() {
  return (
    <section id="use-cases" className="showcase-section">
      <div className="showcase-inner">
        <div className="industry-strip" aria-label="Industries served">
          {industries.map((industry) => (
            <span key={industry}>{industry}</span>
          ))}
        </div>

        <div className="showcase-layout">
          <div>
            <p className="section-kicker">What it feels like</p>
            <h2 className="section-title">A tireless AI assistant that never forgets the next step</h2>
            <p className="section-copy">
              Your automation stack handles the repetitive conversations and operational nudges, while your team focuses on the people ready to buy.
            </p>
            <div className="automation-list">
              {automations.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="ai-console" aria-label="AI automation console preview">
            <div className="console-header">
              <span></span>
              <span></span>
              <span></span>
              <strong>AI assistant online</strong>
            </div>
            <div className="conversation-card incoming">
              <small>New lead</small>
              <p>Hi, do you have any openings this week?</p>
            </div>
            <div className="conversation-card outgoing">
              <small>AI response</small>
              <p>Yes. I can help you find a time. Are mornings or afternoons better?</p>
            </div>
            <div className="console-workflow">
              <div><span></span>Qualified lead</div>
              <div><span></span>Booking link sent</div>
              <div><span></span>Reminder scheduled</div>
            </div>
            <div className="console-score">
              <strong>92%</strong>
              <p>automation coverage for repeatable follow-up tasks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
