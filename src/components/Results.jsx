import React, {useEffect, useRef, useState} from 'react'

const results = [
  {
    value: 6744716,
    suffix: '+',
    title: 'AI voice calls',
    desc: 'Automated conversations handled across lead intake and follow-up.'
  },
  {
    value: 7296353084,
    title: 'Leads generated',
    desc: 'Prospects captured, qualified, routed, and prepared for follow-up.'
  },
  {
    value: 172727305,
    title: 'Appointments booked',
    desc: 'Bookings supported by reminders, confirmations, and no-show recovery.'
  },
  {
    value: 5010615658,
    prefix: '$',
    suffix: '+',
    title: 'Sales facilitated in 2025',
    desc: 'Pipeline value influenced by faster response and automated nurture.'
  }
]

function AnimatedNumber({value, prefix = '', suffix = ''}) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setDisplay(value)
      return undefined
    }

    let frameId
    let started = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return

        started = true
        const duration = 1800
        const start = performance.now()

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(Math.floor(value * eased))

          if (progress < 1) {
            frameId = requestAnimationFrame(tick)
          } else {
            setDisplay(value)
          }
        }

        frameId = requestAnimationFrame(tick)
        observer.disconnect()
      },
      {threshold: 0.35}
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [value])

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString('en-US')}
      {suffix}
    </span>
  )
}

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
              <AnimatedNumber value={item.value} prefix={item.prefix} suffix={item.suffix} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
