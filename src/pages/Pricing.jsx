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
    a: "We start with a quick discovery call to understand your business. Then we produce a design concept, get your feedback, refine it, and build the site. You'll be involved at every stage without it taking up all your time.",
  },
  {
    q: 'How long does it take?',
    a: 'Essential sites are typically delivered within 48 hours of design sign-off. Studio and Signature projects take 5–14 days depending on scope and revision rounds.',
  },
  {
    q: 'How many revisions do I get?',
    a: 'Essential includes 2 revision rounds. Studio includes unlimited revisions. Signature has unlimited revisions with dedicated turnaround.',
  },
  {
    q: 'How does payment work?',
    a: 'We take a 50% deposit to begin work, with the remaining 50% due on project completion. We accept bank transfer and card payments.',
  },
  {
    q: 'What happens after the site launches?',
    a: 'All sites come with a 7-day post-launch bug-fix guarantee. After that, you can self-manage or move onto one of our retainer packages to keep things running smoothly.',
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
          className="font-serif-italic text-gold text-2xl"
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
      <div className="max-w-4xl mx-auto px-6 mb-10">
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
            'Mobile responsive.',
            'GSAP animations.',
            'Fast load times.',
            'SEO foundation.',
            'Vercel hosting and deployment.',
            'Built from scratch for your business.',
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

      {/* Retainer — paired immediately below the build cost */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card-dark rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center gap-6"
          style={{ borderColor: 'rgba(201,168,76,0.15)' }}
        >
          <div className="flex-1">
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
              Optional monthly retainer
            </p>
            <p className="text-3xl font-black text-gold mb-2">
              From £99
              <span className="text-base font-semibold text-cream/40">/month</span>
            </p>
            <p className="text-cream/55 text-sm leading-relaxed">
              Keep your site fast, secure, and up to date once it's live. Highly recommended for
              businesses that want to stay sharp online without the hassle.
            </p>
          </div>
          <div
            className="flex-shrink-0 hidden sm:block"
            style={{ width: 1, alignSelf: 'stretch', background: 'rgba(201,168,76,0.12)' }}
          />
          <div className="flex-shrink-0 sm:text-right">
            <p className="text-cream/30 text-xs leading-relaxed max-w-[160px] sm:ml-auto">
              Hosting, updates, security monitoring, and ongoing support.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Launch offer banner */}
      <div className="max-w-3xl mx-auto px-6 mb-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            border: '1px solid rgba(201,168,76,0.35)',
            background: 'rgba(201,168,76,0.04)',
            borderRadius: 16,
            padding: '28px 32px',
          }}
        >
          <p
            style={{
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: 10,
            }}
          >
            LAUNCH OFFER
          </p>
          <h3 className="text-cream text-2xl font-black mb-3">
            Launching in Chelmsford.
          </h3>
          <p className="text-cream/55 text-sm leading-relaxed mb-3">
            We're offering discounted rates to our first clients in Chelmsford and Essex. If
            you're ready to get started, now is the best time to reach out.
          </p>
          <p className="font-serif-italic text-gold/70 text-sm">
            Reach out before our launch period closes.
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
          <p className="font-serif-italic text-gold text-xl mb-8">
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
