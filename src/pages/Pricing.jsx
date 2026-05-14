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

const packages = [
  {
    name: 'Essential',
    usualPrice: '£799',
    launchPrice: 'From £599',
    desc: 'A fully custom single-page site built to win local business. Fast, mobile-first, and ready to launch.',
  },
  {
    name: 'Studio',
    popular: true,
    usualPrice: '£1,199',
    launchPrice: 'From £999',
    desc: 'Multi-page, animated, and built to grow with your business. Everything you need to stand out online.',
  },
  {
    name: 'Signature',
    usualPrice: '£1,999',
    launchPrice: 'From £1,799',
    desc: 'Our flagship build. Cinematic, immersive, and unlike anything your competitors have. For businesses that refuse to blend in.',
  },
]

const retainers = [
  {
    name: 'Basic',
    price: '£99/month',
    desc: 'We keep your site running, updated, and looking sharp. Up to 2 changes per month included.',
  },
  {
    name: 'Active',
    price: '£199/month',
    desc: 'Ongoing growth support. SEO, content updates, new sections, and monthly reporting. For businesses that want to keep moving.',
  },
]

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
            We're taking on our first local clients at a special rate. Save £200 on any
            package — for a limited number of businesses only.
          </p>
          <p className="font-serif-italic text-gold/70 text-sm">
            Standard rates return once our launch period closes.
          </p>
        </motion.div>
      </div>

      {/* Package cards */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 220,
                damping: 22,
                delay: i * 0.13,
              }}
              style={{
                position: 'relative',
                border: pkg.popular
                  ? '1.5px solid #C9A84C'
                  : '1px solid rgba(201,168,76,0.2)',
                background: pkg.popular ? 'rgba(201,168,76,0.04)' : '#1a1a1a',
                borderRadius: 20,
                padding: 32,
                boxShadow: pkg.popular
                  ? '0 0 60px rgba(201,168,76,0.12)'
                  : '0 4px 30px rgba(0,0,0,0.3)',
              }}
            >
              {pkg.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: -14,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#C9A84C',
                    color: '#111',
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    padding: '4px 16px',
                    borderRadius: 99,
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* SAVE £200 badge — subtle gold pill, top-right */}
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: 'rgba(201,168,76,0.15)',
                  border: '1px solid rgba(201,168,76,0.4)',
                  color: '#C9A84C',
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  padding: '3px 10px',
                  borderRadius: 99,
                }}
              >
                SAVE £200
              </div>

              <p className="text-cream/40 text-xs tracking-widest uppercase font-bold mb-4">
                {pkg.name}
              </p>

              {/* Pricing */}
              <div className="mb-5">
                <p className="text-cream/30 text-xs line-through mb-1">Usually {pkg.usualPrice}</p>
                <p className="text-cream text-2xl font-black">{pkg.launchPrice}</p>
              </div>

              <p className="text-cream/70 text-sm leading-relaxed mb-8">{pkg.desc}</p>

              <Link
                to="/contact"
                state={{ package: pkg.name }}
                className={
                  pkg.popular
                    ? 'btn-gold w-full text-center block mb-3'
                    : 'btn-outline w-full text-center block mb-3'
                }
              >
                Get a Quote
              </Link>
              <p className="text-cream/25 text-xs text-center">Full details on request.</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Retainer section */}
      <section className="py-20 border-t border-gold/10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-black text-cream mb-3">Keep it growing.</h2>
            <p className="text-cream/50 max-w-xl mx-auto">
              Once your site is live, we can keep it fast, secure, and evolving with our
              ongoing retainer plans.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {retainers.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="card-dark rounded-2xl p-8"
              >
                <p className="text-cream/40 text-xs tracking-widest uppercase font-bold mb-2">
                  {r.name}
                </p>
                <p className="text-3xl font-black text-gold mb-4">{r.price}</p>
                <p className="text-cream/60 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO add-on */}
      <section className="py-12 border-t border-gold/10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="card-dark rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <p className="text-cream text-lg font-semibold text-center sm:text-left">
              Get found on Google from day one.{' '}
              <span className="text-gold">SEO setup from £149.</span>
            </p>
            <Link to="/contact" className="btn-gold flex-shrink-0">
              Find Out More
            </Link>
          </motion.div>
        </div>
      </section>

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
