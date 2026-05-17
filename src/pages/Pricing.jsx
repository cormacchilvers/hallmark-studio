import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const faqs = [
  {
    q: 'What does the process look like?',
    a: 'We scope your project, take a 50% deposit, build your site, gather your feedback across 2 revision rounds, then launch.',
  },
  {
    q: 'How long does it take?',
    a: 'Starter builds take 5–7 working days. Standard takes 10–14 working days. Premium takes 2–3 weeks.',
  },
  {
    q: 'How many revisions do I get?',
    a: '2 rounds of revisions are included. Additional changes are charged at £50/hour.',
  },
  {
    q: 'How does payment work?',
    a: '50% upfront to begin, 50% on completion.',
  },
  {
    q: 'What happens after the site launches?',
    a: 'You can optionally add a maintenance plan from £20/month. Without one, a handover fee of £150–£200 applies and you take full ownership of the site.',
  },
]

const packages = [
  {
    label: 'Starter',
    description: '1 page + enquiry form',
    price: '£599',
    turnaround: '5–7 working days',
    type: 'one-off',
  },
  {
    label: 'Standard',
    description: 'Up to 5 pages + enquiry form',
    price: '£999',
    turnaround: '10–14 working days',
    type: 'one-off',
  },
  {
    label: 'Premium',
    description: 'Up to 8 pages + booking system + SEO-friendly build',
    price: '£1,499',
    turnaround: '2–3 weeks',
    type: 'one-off',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gold/10">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-cream font-semibold pr-8">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-gold text-2xl flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="text-cream/60 leading-relaxed pb-5 pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Pricing() {
  return (
    <div className="bg-dark min-h-screen pt-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-6xl lg:text-7xl font-black text-cream mb-4"
        >
          Simple pricing.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-cream/60 text-2xl"
        >
          No hidden fees. No surprises.
        </motion.p>
      </div>

      {/* From £599 headline */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-7xl lg:text-9xl font-black text-gold mb-5 leading-none"
        >
          From £599
        </motion.p>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-cream/60 text-base max-w-md mx-auto"
        >
          Every project is scoped and priced individually. Get in touch for a free quote.
        </motion.p>
      </div>

      {/* What's included */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-black text-cream text-center mb-10"
        >
          What's included in every build.
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Fully custom design — no templates ever.',
            'GSAP animations.',
            'SEO-friendly build.',
            'Built from scratch for your business.',
            'Mobile responsive.',
            'Fast load times.',
            'Vercel hosting and deployment.',
            '2 rounds of revisions included.',
          ].map((item, i) => (
            <motion.div
              key={item}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.5}
              className="flex items-start gap-3"
            >
              <span className="text-gold mt-0.5 flex-shrink-0">—</span>
              <span className="text-cream/75 text-sm leading-relaxed">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing packages */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.5}
              className="card-dark rounded-2xl p-7 flex flex-col"
              style={{ borderColor: 'rgba(201,168,76,0.15)' }}
            >
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                  opacity: 0.6,
                  marginBottom: 10,
                }}
              >
                {pkg.label}
              </p>
              <p className="text-3xl font-black text-gold mb-1">
                {pkg.price}
              </p>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                  opacity: 0.45,
                  marginBottom: 14,
                }}
              >
                one-off
              </p>
              <p className="text-cream/70 text-sm leading-relaxed mb-4 flex-1">
                {pkg.description}
              </p>
              <div
                style={{
                  borderTop: '1px solid rgba(201,168,76,0.1)',
                  paddingTop: 14,
                  marginTop: 'auto',
                }}
              >
                <p className="text-cream/40 text-xs mb-1">
                  {pkg.turnaround} turnaround
                </p>
                <p className="text-cream/30 text-xs">
                  50% deposit required to begin
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional Retainer */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card-dark rounded-2xl p-7"
          style={{ borderColor: 'rgba(201,168,76,0.15)' }}
        >
          <p
            style={{
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              opacity: 0.6,
              marginBottom: 16,
            }}
          >
            Optional monthly retainer
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Option A */}
            <div className="flex-1">
              <p className="text-2xl font-black text-gold mb-0.5">
                £20
                <span className="text-sm font-semibold text-cream/40">/month</span>
              </p>
              <p className="text-cream/70 text-sm mt-1">Hosting only</p>
            </div>

            <div
              className="hidden sm:block flex-shrink-0"
              style={{ width: 1, alignSelf: 'stretch', background: 'rgba(201,168,76,0.12)' }}
            />

            {/* Option B */}
            <div className="flex-1">
              <p className="text-2xl font-black text-gold mb-0.5">
                £35
                <span className="text-sm font-semibold text-cream/40">/month</span>
              </p>
              <p className="text-cream/70 text-sm mt-1">Hosting + maintenance</p>
              <p className="text-cream/40 text-xs mt-0.5">2 edits/month included</p>
            </div>
          </div>

          <p className="text-cream/30 text-xs leading-relaxed mt-5 pt-5" style={{ borderTop: '1px solid rgba(201,168,76,0.08)' }}>
            Available to clients who purchase a full build. Domain registration is the client's responsibility.
          </p>
        </motion.div>
      </div>

      {/* Get a Quote CTA */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black text-cream mb-6">Ready to get started?</h2>
          <Link to="/contact" className="btn-gold">Get a Quote</Link>
        </motion.div>
      </div>

      {/* FAQ */}
      <section className="py-20 border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-black text-cream mb-12"
          >
            Frequently asked.
          </motion.h2>
          <div>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black text-cream mb-4">
            Ready to invest in your business?
          </h2>
          <p className="text-cream/60 text-xl mb-8">
            The best time to start was yesterday. The second best is now.
          </p>
          <Link to="/contact" className="btn-gold">
            Get a Quote
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
