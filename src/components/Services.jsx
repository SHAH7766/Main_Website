import React from 'react'
import useInView from '../hooks/useInView'
import digitalMarketingImage from '../assets/service-digital-marketing.svg'
import aiAutomationImage from '../assets/service-ai-automation.svg'
import webDesignImage from '../assets/service-web-design.svg'

const serviceList = [
  {
    title: 'Digital Marketing',
    desc: 'SEO, paid media, content strategy, and analytics to drive measurable growth.',
    image: digitalMarketingImage,
    points: ['Search visibility', 'Paid campaigns', 'Performance reporting']
  },
  {
    title: 'AI Automation',
    desc: 'Automate repetitive tasks, personalize customer journeys, and unlock efficiency with AI.',
    image: aiAutomationImage,
    points: ['Lead routing', 'CRM workflows', 'AI follow-ups']
  },
  {
    title: 'Web Design & Development',
    desc: 'Modern, responsive websites focused on conversions and performance.',
    image: webDesignImage,
    points: ['Landing pages', 'Responsive UI', 'Conversion paths']
  }
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
          <p className="section-kicker">What we sharpen</p>
          <h2 className="section-title">Services built for momentum</h2>
          <p className="section-copy">End-to-end solutions tailored to your goals, from a cleaner first impression to smarter follow-up after every lead.</p>
        </div>
        <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
        <div className="service-cta">
          <p>Not sure what you need first?</p>
          <a href="#contact">Get a focused recommendation</a>
        </div>
      </div>
    </section>
  )
}
