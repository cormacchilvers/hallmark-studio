import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Marquee from '../components/Marquee'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const whyPoints = [
  {
    n: '01',
    title: 'No templates. Ever.',
    body: "Every site is built from scratch, custom coded to your brand. You'll never look like anyone else.",
  },
  {
    n: '02',
    title: 'Priced for real businesses.',
    body: "Premium quality without the agency price tag. We keep our costs lean so you don't overpay.",
  },
  {
    n: '03',
    title: 'Fast turnaround.',
    body: "Most sites delivered in under two weeks. We don't drag projects out.",
  },
  {
    n: '04',
    title: 'Design that converts.',
    body: 'Every layout is built to turn visitors into enquiries, not just look good.',
  },
  {
    n: '05',
    title: 'Direct access, always.',
    body: 'No account managers or middlemen. You deal with us directly, start to finish.',
  },
  {
    n: '06',
    title: 'Built to perform.',
    body: 'Clean code, fast load times, and SEO-friendly foundations baked in from day one.',
  },
]

function FilmGrain() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let frame = 0
    canvas.width = 512
    canvas.height = 512
    const draw = () => {
      const img = ctx.createImageData(512, 512)
      const d = img.data
      for (let i = 0; i < d.length; i += 4) {
        const v = (128 + (Math.random() - 0.5) * 40) | 0
        d[i] = v; d[i + 1] = v; d[i + 2] = v; d[i + 3] = 255
      }
      ctx.putImageData(img, 0, 0)
    }
    draw()
    const loop = () => { if (++frame % 6 === 0) draw(); animId = requestAnimationFrame(loop) }
    animId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.045, zIndex: 15 }}
    />
  )
}

export default function Home() {
  return (
    <div className="bg-dark min-h-screen">

      {/* ── HERO ─────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: 'clamp(60px, 10vh, 130px)',
          paddingBottom: 'clamp(16px, 3vh, 60px)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FilmGrain />

        <motion.div
          animate={{ x: [0, 70, 0], y: [0, -35, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '-15%', left: '-8%', width: 900, height: 750,
            background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 65%)',
            pointerEvents: 'none', zIndex: 0,
          }}
        />
        <motion.div
          animate={{ x: [0, -45, 0], y: [0, 40, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 9 }}
          style={{
            position: 'absolute', bottom: '0%', right: '-8%', width: 750, height: 550,
            background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)',
            pointerEvents: 'none', zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 25%, rgba(0,0,0,0.65) 100%)',
            pointerEvents: 'none', zIndex: 1,
          }}
        />

        <div
          style={{
            position: 'relative', zIndex: 10, width: '100%',
            padding: '0 clamp(28px, 4vw, 48px)',
            display: 'flex', flexDirection: 'column',
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ color: '#C9A84C', fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 20 }}
          >
            Web Design · Chelmsford Essex
          </motion.p>

          <h1
            className="font-black text-cream"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 8.5rem)', lineHeight: 0.97, letterSpacing: '-0.02em', marginBottom: '1.75rem' }}
          >
            <motion.span
              style={{ display: 'block' }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Your competitors have a website.
            </motion.span>
            <motion.span
              style={{ display: 'block' }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              You'll have a{' '}
              <span className="font-serif-italic text-gold">weapon.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.62, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ color: 'rgba(232,232,228,0.5)', fontSize: 15, lineHeight: 1.75, maxWidth: 400, marginBottom: '1.75rem' }}
          >
            Premium custom websites for ambitious local businesses.
            Built to convert. Designed to impress.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.78, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
          >
            <Link to="/work" className="btn-gold">See Our Work</Link>
            <Link to="/contact" className="btn-outline">Get a Quote</Link>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────── */}
      <Marquee />

      {/* ── WHY HALLMARK STUDIO ──────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ marginBottom: 56 }}
          >
            <p style={{ color: '#C9A84C', fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 16 }}>
              Why Us
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-cream">
              Why Hallmark Studio<span className="text-gold">?</span>
            </h2>
          </motion.div>

          <div>
            {whyPoints.map((point, i) => (
              <motion.div
                key={point.n}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                style={{ borderTop: '1px solid rgba(232,232,228,0.07)', paddingTop: 22, paddingBottom: 22 }}
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10">
                  <span style={{ color: 'rgba(201,168,76,0.45)', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', flexShrink: 0 }}>
                    {point.n}
                  </span>
                  <h3
                    className="font-bold text-cream flex-shrink-0"
                    style={{ fontSize: '1rem', minWidth: 240 }}
                  >
                    {point.title}
                  </h3>
                  <p className="text-cream/45 text-sm leading-relaxed">
                    {point.body}
                  </p>
                </div>
              </motion.div>
            ))}
            <div style={{ borderTop: '1px solid rgba(232,232,228,0.07)' }} />
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────── */}
      <section
        className="py-16 md:py-24"
        style={{ borderTop: '1px solid rgba(201,168,76,0.08)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <p style={{ color: '#C9A84C', fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 16 }}>
                Who We Are
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-cream mb-4">
                We are Hallmark Studio.
              </h2>
              <p className="text-cream/60 text-lg mb-4">
                A two-person agency based in Chelmsford, Essex.
              </p>
              <p className="text-cream/45 leading-relaxed">
                We build fast, beautiful, custom websites for local businesses who want to
                stand out. No templates. No shortcuts. Every site is built from scratch.
              </p>
            </div>

            <div>
              <div
                className="card-dark rounded-2xl p-7"
                style={{ boxShadow: '0 0 60px rgba(201,168,76,0.06), 0 0 0 1px rgba(201,168,76,0.12)' }}
              >
                {[
                  { label: 'Est.', value: '2026' },
                  { label: 'Location', value: 'Chelmsford, Essex' },
                  { label: 'Email', value: 'hello@hallmarkstudio.com' },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between items-center"
                    style={{ borderBottom: '1px solid rgba(201,168,76,0.08)', paddingTop: 16, paddingBottom: 16 }}
                  >
                    <span className="text-cream/40 text-xs tracking-widest uppercase font-semibold">{label}</span>
                    <span className="text-cream/75 font-medium text-sm">{value}</span>
                  </div>
                ))}
                <div style={{ paddingTop: 16 }}>
                  <Link to="/contact" className="btn-gold" style={{ display: 'inline-block', fontSize: 14 }}>
                    Start a project →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-black text-cream mb-4"
          >
            Ready to stand out?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="font-serif-italic text-gold text-2xl mb-10"
          >
            Let's build something your competitors will envy.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link to="/contact" className="btn-gold text-lg px-10 py-4">Get a Quote</Link>
            <a
              href="https://calendar.google.com/appointments/schedules/AcZssZ1yY8O7ogmv0Oc_glEIjfqP04BZsNulSex1Ol0JZTUutcUN_7TChdYiSHQrLy7P5rXcjXlEW0Os"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-cream text-sm transition-colors"
            >
              Or book a free 15-minute call →
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
