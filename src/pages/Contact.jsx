import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Helmet } from 'react-helmet-async'

const inputStyles = {
  width: '100%',
  background: '#1a1a1a',
  border: '1px solid rgba(201,168,76,0.2)',
  borderRadius: 10,
  padding: '14px 16px',
  color: '#E8E8E4',
  fontSize: 14,
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  fontFamily: 'Inter, sans-serif',
  boxShadow: 'none',
}

function Field({ label, ...props }) {
  const handleFocus = (e) => {
    e.target.style.borderColor = '#C9A84C'
    e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)'
  }
  const handleBlur = (e) => {
    e.target.style.borderColor = 'rgba(201,168,76,0.2)'
    e.target.style.boxShadow = 'none'
  }

  return (
    <div>
      <label className="block text-cream/50 text-xs tracking-widest uppercase font-semibold mb-2">
        {label}
      </label>
      {props.as === 'textarea' ? (
        <textarea
          {...props}
          as={undefined}
          rows={10}
          style={{ ...inputStyles, resize: 'vertical' }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      ) : props.as === 'select' ? (
        <select
          {...props}
          as={undefined}
          style={{ ...inputStyles, appearance: 'none', cursor: 'pointer' }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {props.children}
        </select>
      ) : (
        <input
          {...props}
          style={inputStyles}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const headingRef = useRef(null)
  const subheadingRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.65 }
    )
    .fromTo(
      subheadingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.65 },
      '-=0.45'
    )
    .fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.35'
    )
    .fromTo(
      infoRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.5'
    )
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      const res = await fetch('https://formspree.io/f/xdabvrzr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          business: form.business,
          message: form.message,
        }),
      })
      if (res.ok) {
        setSent(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="bg-dark pt-24">
      <Helmet>
        <title>Contact Hallmark Studio | Web Design Chelmsford Essex</title>
        <meta name="description" content="Get in touch with Hallmark Studio. Based in Chelmsford Essex, we build custom websites for local businesses starting from £599." />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Hallmark Studio" />
        <meta property="og:type" content="website" />
        <meta name="geo.region" content="GB-ESS" />
        <meta name="geo.placename" content="Chelmsford, Essex" />
        <link rel="canonical" href="https://www.hallmarkstudio.com/contact" />
      </Helmet>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <h1
          ref={headingRef}
          className="text-6xl lg:text-7xl font-black text-cream mb-4"
          style={{ opacity: 0 }}
        >
          Let's build something.
        </h1>
        <p
          ref={subheadingRef}
          className="text-cream/60 text-2xl"
          style={{ opacity: 0 }}
        >
          Get in touch or book a free call.
        </p>
      </div>

      {/* Split layout */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:items-stretch">
          {/* Form */}
          <div
            ref={formRef}
            className="lg:col-span-3"
            style={{ opacity: 0 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-dark rounded-2xl p-12 text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)' }}
                >
                  <span className="text-gold text-2xl">✓</span>
                </div>
                <h2 className="text-3xl font-black text-cream mb-3">Message sent.</h2>
                <p className="text-cream">
                  Thanks for getting in touch. We'll be back with you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="john@business.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="+44 7700 000000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  <Field
                    label="Business Name"
                    name="business"
                    type="text"
                    placeholder="Your Business Ltd"
                    value={form.business}
                    onChange={handleChange}
                  />
                </div>
                <Field
                  label="Message"
                  name="message"
                  as="textarea"
                  placeholder="Tell us about your business and what you're looking for..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-gold w-full text-center"
                  style={{ opacity: sending ? 0.7 : 1, cursor: sending ? 'not-allowed' : 'pointer' }}
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
                {error && (
                  <p style={{ color: '#C9A84C', fontSize: 14, textAlign: 'center' }}>
                    Something went wrong. Please email us directly at{' '}
                    <a href="mailto:hello@hallmarkstudio.com" style={{ textDecoration: 'underline' }}>
                      hello@hallmarkstudio.com
                    </a>
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Right card */}
          <div
            ref={infoRef}
            className="lg:col-span-2 flex flex-col"
            style={{ opacity: 0 }}
          >
            <div className="card-dark rounded-2xl p-8 flex flex-col h-full" style={{ justifyContent: 'space-between' }}>
              <div>
                <p className="text-cream/30 text-xs tracking-widest uppercase font-bold mb-2">
                  Email
                </p>
                <a
                  href="mailto:hello@hallmarkstudio.com"
                  className="text-gold font-semibold hover:text-gold/80 transition-colors"
                >
                  hello@hallmarkstudio.com
                </a>
              </div>

              <div className="border-t border-gold/10 pt-7">
                <p className="text-cream/30 text-xs tracking-widest uppercase font-bold mb-2">
                  Book a Call
                </p>
                <a
                  href="https://calendar.google.com/appointments/schedules/AcZssZ1yY8O7ogmv0Oc_glEIjfqP04BZsNulSex1Ol0JZTUutcUN_7TChdYiSHQrLy7P5rXcjXlEW0Os"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream font-semibold hover:text-gold transition-colors flex items-center gap-2"
                >
                  Book a free 15-min call
                  <span className="text-gold">→</span>
                </a>
                <p className="text-cream/30 text-xs mt-2">No commitment. Just a chat.</p>
              </div>

              <div className="border-t border-gold/10 pt-7">
                <p className="text-cream/30 text-xs tracking-widest uppercase font-bold mb-2">
                  Location
                </p>
                <p className="text-cream font-semibold">Chelmsford, Essex</p>
              </div>

              <div className="border-t border-gold/10 pt-7">
                <div
                  className="rounded-xl p-4 text-center"
                  style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}
                >
                  <p className="text-cream font-bold mb-1">We respond within 24 hours.</p>
                  <p className="text-cream/60 text-sm">Usually much faster.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
