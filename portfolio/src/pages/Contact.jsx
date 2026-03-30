import { useState } from 'react'

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setValues({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 2500)
  }

  return (
    <section id="contact" className="contact-card">
      <h2 className="section-title">Contact</h2>
      <p className="subheading">Let’s build something great together.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          className="input"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          className="input"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          className="textarea"
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="Your message"
          required
        />
        <button className="btn" type="submit">
          Send Message
        </button>
      </form>

      {submitted && <p style={{ marginTop: '12px', color: 'var(--primary-strong)' }}>Thanks! Your message was sent.</p>}

      <div className="social-links">
        <p style={{ margin: '0', fontWeight: 600 }}>Phone: 9597898711</p>
        <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
          <span style={{ marginRight: '6px', display: 'inline-flex', alignItems: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12C0 17.302 3.438 21.8 8.205 23.385C8.805 23.48 9.025 23.165 9.025 22.895C9.025 22.655 9.015 21.95 9.01 21.03C5.672 21.68 4.968 19.42 4.968 19.42C4.422 18.115 3.633 17.775 3.633 17.775C2.545 17.055 3.715 17.07 3.715 17.07C4.922 17.16 5.553 18.305 5.553 18.305C6.635 20.08 8.365 19.59 9.05 19.33C9.145 18.555 9.445 18.03 9.78 17.72C7.12 17.41 4.344 16.33 4.344 11.6C4.344 10.27 4.8 9.2 5.545 8.34C5.425 8.03 5.03 6.77 5.66 5.08C5.66 5.08 6.67 4.74 8.995 6.3C9.94 6.02 10.955 5.88 11.97 5.875C12.985 5.88 14.005 6.02 14.955 6.3C17.275 4.74 18.28 5.08 18.28 5.08C18.915 6.77 18.52 8.03 18.4 8.34C19.145 9.2 19.6 10.27 19.6 11.6C19.6 16.34 16.82 17.405 14.155 17.715C14.59 18.095 15 18.85 15 20.035C15 21.7 14.985 22.965 14.985 22.895C14.985 23.165 15.205 23.485 15.815 23.385C20.58 21.8 24 17.3 24 12C24 5.37 18.63 0 12 0Z" />
            </svg>
          </span>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noreferrer">
          <span style={{ marginRight: '6px', display: 'inline-flex', alignItems: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6C1.11 6 0 4.88 0 3.5C0 2.12 1.11 1 2.49 1C3.86 1 4.98 2.12 4.98 3.5ZM0.37 8.99H4.6V24H0.37V8.99ZM8.65 8.99H12.75V11.06H12.82C13.44 9.77 15.04 8.38 17.34 8.38C22 8.38 24 11.34 24 16.09V24H19.77V16.97C19.77 14.99 19.71 12.57 16.9 12.57C14.05 12.57 13.63 14.7 13.63 16.8V24H9.39V8.99H8.65Z" />
            </svg>
          </span>
          LinkedIn
        </a>
      </div>
    </section>
  )
}
