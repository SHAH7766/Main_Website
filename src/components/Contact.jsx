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
          <p className="section-kicker">Automation audit</p>
          <h2 className="section-title">Tell us what you want AI to handle first</h2>
          <p className="section-copy">We will map the fastest automation opportunity across your calls, forms, inbox, CRM, booking flow, reminders, and follow-up sequence.</p>
          <div className="contact-promises">
            <span>Workflow audit and automation priority map</span>
            <span>AI reply, CRM trigger, and booking recommendations</span>
            <span>Built around response speed and saved admin time</span>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="field" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email address" type="email" required className="field" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Example: missed calls, lead follow-up, booking reminders, reviews..." rows="5" required className="field resize-none"></textarea>
          <div className="flex justify-end">
            <button className="primary-button" type="submit">Request automation audit</button>
          </div>
        </form>
      </div>
    </section>
  )
}
