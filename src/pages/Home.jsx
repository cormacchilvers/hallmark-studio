import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const portfolio = [
  {
    name: 'Cornerstone Builders',
    tier: 'Essential',
    price: '£599',
    img: '/cornerstone.png',
    url: 'https://cornerstone-builders-demo.vercel.app',
    desc: 'Bold trade website built to win local jobs.',
    accent: '#4CAF50',
  },
  {
    name: 'Blade & Co',
    tier: 'Studio',
    price: '£999',
    img: '/blade.png',
    url: 'https://blade-co-demo.vercel.app',
    desc: 'Sharp barbershop brand with online booking.',
    accent: '#7c6fe0',
  },
  {
    name: 'Ember & Oak',
    tier: 'Signature',
    price: '£1,799',
    img: '/ember.png',
    url: 'https://restaurant-demo-site-sable.vercel.app',
    desc: 'Cinematic restaurant site with fire video hero and immersive animations.',
    accent: '#d4a060',
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

    const loop = () => {
      if (++frame % 6 === 0) draw()
      animId = requestAnimationFrame(loop)
    }
    animId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.045,
        zIndex: 15,
      }}
    />
  )
}

export default function Home() {
  const cardsRef = useRef(null)
  const aboutRef = useRef(null)

  useEffect(() => {
    ScrollTrigger.getAll().forEach(t => t.kill())

    const triggers = []
    const timeout = setTimeout(() => {
      const cards = cardsRef.current?.querySelectorAll('.work-card')
      if (cards?.length) {
        gsap.set(cards, { opacity: 0, y: 40 })
        triggers.push(
          ScrollTrigger.create({
            trigger: cardsRef.current,
            start: 'top 80%',
            once: true,
            onEnter: () => gsap.to(cards, { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out' }),
          })
        )
      }

      const aboutEl = aboutRef.current
      if (aboutEl) {
        gsap.set(aboutEl, { opacity: 0, y: 36 })
        triggers.push(
          ScrollTrigger.create({
            trigger: aboutEl,
            start: 'top 80%',
            once: true,
            onEnter: () => gsap.to(aboutEl, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }),
          })
        )
      }

      ScrollTrigger.refresh()
    }, 350)

    return () => { clearTimeout(timeout); triggers.forEach(t => t.kill()) }
  }, [])

  return (
    <div className="bg-dark min-h-screen">
      {/* ── HERO ─────────────────────────────── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ height: '100vh', minHeight: 640, paddingTop: '8vh' }}
      >
        <FilmGrain />

        {/* Ambient glow — primary, slow drift */}
        <motion.div
          animate={{ x: [0, 70, 0], y: [0, -35, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '-15%',
            left: '-8%',
            width: 900,
            height: 750,
            background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 65%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Ambient glow — secondary, counter-drift */}
        <motion.div
          animate={{ x: [0, -45, 0], y: [0, 40, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 9 }}
          style={{
            position: 'absolute',
            bottom: '0%',
            right: '-8%',
            width: 750,
            height: 550,
            background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Edge vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 25%, rgba(0,0,0,0.7) 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Top label — absolutely positioned, outside flex flow */}
        <div className="absolute left-0 right-0" style={{ top: 88, zIndex: 10 }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-gold text-xs font-bold tracking-[0.35em] uppercase"
            >
              WEB DESIGN · CHELMSFORD ESSEX
            </motion.p>
          </div>
        </div>

        {/* Main content — vertically centred by flex */}
        <div
          className="relative max-w-7xl mx-auto px-6 md:px-12 w-full"
          style={{ zIndex: 10 }}
        >
          {/* Oversized heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-black text-cream mb-8"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 8rem)', lineHeight: 0.95 }}
          >
            Your competitors have a website.<br />
            You'll have a<br />
            <span className="font-serif-italic text-gold" style={{ fontSize: '1.05em' }}>
              weapon.
            </span>
          </motion.h1>

          {/* Subtext + counter row */}
          <div className="flex items-end justify-between gap-8">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-cream/60 text-lg leading-relaxed mb-6 max-w-md"
              >
                Premium custom websites for ambitious local businesses.
                Built to convert. Designed to impress.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/work" className="btn-gold">See Our Work</Link>
                <Link to="/contact" className="btn-outline">Get a Quote</Link>
              </motion.div>
            </div>

            {/* Project counter — desktop only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="hidden md:flex items-center gap-3 flex-shrink-0"
            >
              <div style={{ width: 36, height: 1, background: 'rgba(232,232,228,0.2)' }} />
              <span style={{ color: 'rgba(232,232,228,0.3)', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em' }}>
                01 / 03
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-4"
          >
            <h2 className="text-5xl font-black text-cream">
              The Work<span className="text-gold">.</span>
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="font-serif-italic text-gold text-xl mb-14"
          >
            From concept to live — see what we build.
          </motion.p>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item, i) => (
              <div
                key={item.name}
                className="work-card h-full"
                style={{ opacity: 0 }}
              >
                <div
                  className="card-dark rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                  style={{
                    borderColor: i === 0 ? `${item.accent}45` : `${item.accent}28`,
                    boxShadow: i === 0
                      ? `0 4px 40px rgba(0,0,0,0.4), 0 0 0 1px ${item.accent}20`
                      : `0 4px 30px rgba(0,0,0,0.25)`,
                  }}
                >
                  {/* Screenshot */}
                  <div
                    style={{
                      height: i === 0 ? 220 : 180,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        display: 'block',
                      }}
                      className="group-hover:scale-105"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0)',
                        transition: 'background 0.3s ease',
                      }}
                      className="group-hover:!bg-black/30"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-cream font-bold text-xl mb-2">{item.name}</h3>
                    <p className="text-cream/50 text-sm mb-4 flex-1">{item.desc}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cream/55 hover:text-gold text-sm font-semibold transition-colors duration-200 group/link flex items-center gap-1"
                      >
                        <span className="border-b border-cream/20 group-hover/link:border-gold transition-colors duration-200">View Live</span>
                        <span className="group-hover/link:translate-x-0.5 transition-transform duration-200">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ───────────────────────── */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={aboutRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ opacity: 0 }}>
            <div>
              <h2 className="text-5xl font-black text-cream mb-3">
                We are Hallmark Studio.
              </h2>
              <p className="text-cream/60 text-xl mb-6">
                A two-person agency based in Chelmsford, Essex.
              </p>
              <p className="text-cream/60 leading-relaxed text-lg">
                We build fast, beautiful, custom websites for local businesses who want to
                stand out. No templates. No shortcuts. Every site is built from scratch.
              </p>
            </div>

            <div>
              <div
                className="card-dark rounded-2xl p-8 space-y-5"
                style={{
                  boxShadow: '0 0 50px rgba(201,168,76,0.07), 0 0 0 1px rgba(201,168,76,0.14)',
                }}
              >
                {[
                  { label: 'Est.', value: '2026' },
                  { label: 'Location', value: 'Chelmsford, Essex' },
                  { label: 'Email', value: 'hello@hallmarkstudio.com' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center border-b border-gold/10 pb-5 last:border-0 last:pb-0">
                    <span className="text-cream/55 text-sm tracking-widest uppercase font-semibold">{label}</span>
                    <span className="text-cream font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────── */}
      <section className="py-32 relative overflow-hidden">
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)',
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
