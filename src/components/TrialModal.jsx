import React, {useEffect, useState} from 'react'

const initialForm = {
  company: '',
  name: '',
  email: '',
  website: '',
  countryCode: '+1',
  phone: '',
  goal: '',
  volume: '',
  timeline: '',
  message: '',
}

export default function TrialModal() {
  const [visible, setVisible] = useState(false)
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('zenthicTrialModalDismissed')
    if (dismissed) return

    const timer = window.setTimeout(() => setVisible(true), 900)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!visible) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [visible])

  function closeModal() {
    sessionStorage.setItem('zenthicTrialModalDismissed', 'true')
    setVisible(false)
    setStep(1)
  }

  function handleChange(event) {
    setForm({...form, [event.target.name]: event.target.value})
  }

  function handleNext(event) {
    event.preventDefault()
    setStep(2)
  }

  function handleSubmit(event) {
    event.preventDefault()
    alert('Thanks! We received your AI automation trial request.')
    sessionStorage.setItem('zenthicTrialModalDismissed', 'true')
    setForm(initialForm)
    setVisible(false)
    setStep(1)
  }

  if (!visible) return null

  return (
    <div className="trial-modal-overlay" role="presentation">
      <div className="trial-modal-backdrop" onClick={closeModal} />
      <section className="trial-modal" role="dialog" aria-modal="true" aria-labelledby="trial-modal-title">
        <button className="trial-modal-close" type="button" onClick={closeModal} aria-label="Close trial form">
          x
        </button>
        <p className="trial-modal-eyebrow">No obligation. Cancel any time.</p>
        <h2 id="trial-modal-title">Start Your 14 Day AI Automation Trial</h2>
        <div className="trial-steps" aria-label="Trial form steps">
          <button type="button" className={step === 1 ? 'active' : ''} onClick={() => setStep(1)}>
            <strong>Step 1</strong>
            <span>Your Business</span>
          </button>
          <button type="button" className={step === 2 ? 'active' : ''} onClick={() => setStep(2)}>
            <strong>Step 2</strong>
            <span>Automation Details</span>
          </button>
        </div>

        {step === 1 ? (
          <form className="trial-form" onSubmit={handleNext}>
            <div className="trial-field-grid">
              <label className="trial-field">
                <span>Company</span>
                <input name="company" value={form.company} onChange={handleChange} placeholder="Company name..." required />
              </label>
              <label className="trial-field">
                <span>Full name</span>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Full name..." required />
              </label>
            </div>
            <label className="trial-field">
              <span>Email address</span>
              <input name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" type="email" required />
            </label>
            <label className="trial-field">
              <span>Website or social page</span>
              <input name="website" value={form.website} onChange={handleChange} placeholder="https://yourwebsite.com" type="url" />
            </label>
            <label className="trial-field">
              <span>Phone number</span>
              <div className="phone-field">
                <select name="countryCode" value={form.countryCode} onChange={handleChange} aria-label="Country code">
                  <option value="+1">US +1</option>
                  <option value="+44">UK +44</option>
                  <option value="+61">AU +61</option>
                  <option value="+92">PK +92</option>
                  <option value="+971">UAE +971</option>
                </select>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number..." type="tel" required />
              </div>
            </label>
            <button type="submit">Go To Step #2</button>
            <p>Receive updates, news, and offers via email and text</p>
          </form>
        ) : (
          <form className="trial-form" onSubmit={handleSubmit}>
            <select name="goal" value={form.goal} onChange={handleChange} required>
              <option value="">What should AI automate first?</option>
              <option value="missed-calls">Missed calls and instant replies</option>
              <option value="lead-follow-up">Lead follow-up and qualification</option>
              <option value="booking">Booking reminders and no-show recovery</option>
              <option value="reviews">Review requests and reactivation</option>
            </select>
            <select name="volume" value={form.volume} onChange={handleChange} required>
              <option value="">How many leads do you get monthly?</option>
              <option value="under-50">Under 50</option>
              <option value="50-150">50 to 150</option>
              <option value="150-500">150 to 500</option>
              <option value="500-plus">500+</option>
            </select>
            <select name="timeline" value={form.timeline} onChange={handleChange} required>
              <option value="">When do you want this live?</option>
              <option value="asap">As soon as possible</option>
              <option value="2-weeks">Within 2 weeks</option>
              <option value="30-days">Within 30 days</option>
              <option value="researching">Just researching</option>
            </select>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us where follow-up is slow or repetitive..."
              rows="4"
            />
            <button type="submit">Start My AI Trial</button>
            <button className="trial-back" type="button" onClick={() => setStep(1)}>Back to Step #1</button>
          </form>
        )}
      </section>
    </div>
  )
}
