import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const inputStyles = {
  width: '100%',
  background: '#1a1a1a',
  border: '1px solid rgba(201,168,76,0.2)',
  borderRadius: 10,
  padding: '14px 16px',
  color: '#E8E8E4',
  fontSize: 14,
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: 'Inter, sans-serif',
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-cream/50 text-xs tracking-widest uppercase font-semibold mb-2">
        {label}
      </label>
      {props.as === 'textarea' ? (
        <textarea
          {...props}
          as={undefined}
          rows={5}
          style={{ ...inputStyles, resize: 'vertical' }}
          onFocus={(e) => (e.target.style.borderColor = '#C9A84C')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.2)')}
        />
      ) : props.as === 'select' ? (
        <select
          {...props}
          as={undefined}
          style={{ ...inputStyles, appearance: 'none', cursor: 'pointer' }}
          onFocus={(e) => (e.target.style.borderColor = '#C9A84C')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.2)')}
        >
          {props.children}
        </select>
      ) : (
        <input
          {...props}
          style={inputStyles}
          onFocus={(e) => (e.target.style.borderColor = '#C9A84C')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.2)')}
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
    package: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

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
          package: form.package,
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
    <div className="bg-dark min-h-screen pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-6xl lg:text-7xl font-black text-cream mb-4"
        >
          Let's build something.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-serif-italic text-gold text-2xl"
        >
          Get in touch or book a free call.
        </motion.p>
      </div>

      {/* Split layout */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="lg:col-span-3"
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
                  label="Package Interest"
                  name="package"
                  as="select"
                  value={form.package}
                  onChange={handleChange}
                >
                  <option value="">Select a package...</option>
                  <option value="starter">Starter — £599</option>
                  <option value="growth">Growth — £999</option>
                  <option value="premium">Premium — £1,799</option>
                  <option value="unsure">Not sure yet</option>
                </Field>
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
          </motion.div>

          {/* Right card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="lg:col-span-2"
          >
            <div className="card-dark rounded-2xl p-8 space-y-7 sticky top-28">
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
                  <p className="text-gold font-bold mb-1">We respond within 24 hours.</p>
                  <p className="text-cream/40 text-sm">Usually much faster.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
