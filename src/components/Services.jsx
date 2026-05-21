import React from 'react'
import useInView from '../hooks/useInView'
import aiAutomationImage from '../assets/service-ai-automation.svg'

const serviceList = [
  {
    title: 'Instant Lead Response',
    desc: 'AI replies to form fills, chats, DMs, and missed calls while the prospect is still paying attention.',
    image: aiAutomationImage,
    points: ['Missed-call text-back', 'Chat qualification', 'Speed-to-lead routing']
  },
  {
    title: 'Booking Automation',
    desc: 'Smart reminders, confirmations, reschedules, and no-show recovery keep your calendar cleaner.',
    image: aiAutomationImage,
    points: ['Calendar sync', 'SMS reminders', 'No-show recovery']
  },
  {
    title: 'Pipeline Follow-Up',
    desc: 'Every lead gets a next step, every deal gets a nudge, and your team sees exactly what needs attention.',
    image: aiAutomationImage,
    points: ['CRM triggers', 'Task alerts', 'Reactivation campaigns']
  }
]

const automationFlow = [
  'New lead enters from call, form, chat, ad, or inbox',
  'AI qualifies intent and starts the right conversation',
  'Workflow books, reminds, escalates, or tags the opportunity',
  'Dashboard shows revenue actions your team should handle next'
]

function ServiceCard({service, index}) {
  const [ref, inView] = useInView({threshold: 0.18})

  return (
    <article
      ref={ref}
      className={`service-card ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}
      style={{animationDelay: `${index * 120}ms`}}
    >
      <div className="service-image-wrap">
        <img src={service.image} alt="" className="service-image" loading="lazy" />
      </div>
      <div className="service-index">0{index + 1}</div>
      <h3 className="text-xl font-semibold text-alice_blue">{service.title}</h3>
      <p className="mt-3 text-rich_cerulean-900/80">{service.desc}</p>
      <div className="service-points">
        {service.points.map((point) => (
          <span key={point}>{point}</span>
        ))}
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-band">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <p className="section-kicker">One focused service</p>
          <h2 className="section-title">AI automation that runs the busy work behind your sales process</h2>
          <p className="section-copy">We design the workflows, write the AI conversation logic, connect the CRM, and launch the automations that make follow-up fast, consistent, and trackable.</p>
        </div>
        <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
        <div className="automation-flow" aria-label="AI automation workflow">
          {automationFlow.map((step, index) => (
            <div key={step}>
              <span>0{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
        <div className="service-cta">
          <p>Want to know what should be automated first?</p>
          <a href="#contact">Request an automation audit</a>
        </div>
      </div>
    </section>
  )
}
