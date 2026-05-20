import React, {useState} from 'react'

export default function Contact() {
  const [form, setForm] = useState({name: '', email: '', message: ''})

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    // placeholder client-side submit
    alert('Thanks! We received your message - we will contact you soon.')
    setForm({name: '', email: '', message: ''})
  }

  return (
    <section id="contact" className="section-band section-band-alt">
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="section-kicker">Let's build</p>
          <h2 className="section-title">Start with a sharper growth plan</h2>
          <p className="section-copy">Tell us what you are trying to improve. We will map the best first move across website, marketing, and automation.</p>
          <div className="contact-promises">
            <span>Clear next steps</span>
            <span>No bloated scope</span>
            <span>Built around measurable outcomes</span>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="field" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email address" type="email" required className="field" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Project details" rows="5" required className="field resize-none"></textarea>
          <div className="flex justify-end">
            <button className="primary-button" type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}
