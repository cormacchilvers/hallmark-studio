import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Marquee from '../components/Marquee'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const showcases = [
  {
    name: 'Ember & Oak',
    tier: 'Signature',
    img: '/ember.png',
    url: 'https://restaurant-demo-site-sable.vercel.app',
    desc: 'A modern British restaurant required a cinematic online presence. We delivered a fire video hero, multi-page experience, and immersive animations that match the drama of their kitchen.',
    tags: ['Restaurant', 'Cinematic', 'Multi-page', 'Animations'],
    accent: '#d4a060',
  },
  {
    name: 'Blade & Co',
    tier: 'Studio',
    img: '/blade.png',
    url: 'https://blade-co-demo.vercel.app',
    desc: 'A modern barbershop needed a sharp digital presence that drove footfall and online bookings. We built a sleek, mobile-first website with their bold brand at its core.',
    tags: ['Barbershop', 'Booking', 'Brand', 'Mobile-first'],
    accent: '#7c6fe0',
  },
  {
    name: 'Cornerstone Builders',
    tier: 'Essential',
    img: '/cornerstone.png',
    url: 'https://cornerstone-builders-demo.vercel.app',
    desc: 'A local building contractor needed a trustworthy, lead-generating website on a tight budget. We delivered a clean, professional 5-page site that positions them as the go-to choice in their area.',
    tags: ['Trade', 'Lead Gen', 'Local SEO', 'Essential'],
    accent: '#4CAF50',
  },
]

const additionalWork = [
  {
    name: 'SparkSafe Electrical',
    sector: 'Trade · Electrical',
    url: 'https://sparksafe-electrical.vercel.app',
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80',
  },
  {
    name: 'Peak Roofing Co',
    sector: 'Trade · Roofing',
    url: 'https://peak-roofing-demo.vercel.app',
    img: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=400&q=80',
  },
  {
    name: 'Fine Line Decorators',
    sector: 'Trade · Decorating',
    url: 'https://fine-line-decorators-demo.vercel.app',
    img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&q=80',
  },
  {
    name: 'Meridian Property',
    sector: 'Property · Estate Agency',
    url: 'https://meridian-property-three.vercel.app',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80',
  },
  {
    name: 'Lumière Beauty',
    sector: 'Beauty · Wellness',
    url: 'https://lumiere-beauty-two.vercel.app',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80',
  },
]

export default function Work() {
  return (
    <div className="bg-dark min-h-screen pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-6xl lg:text-8xl font-black text-cream mb-4"
        >
          The Work<span className="text-gold">.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-serif-italic text-gold text-2xl"
        >
          Every project tells a story.
        </motion.p>
      </div>

      <Marquee />

      {/* Main showcases — alternating layout */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-28">
        {showcases.map((item, i) => (
          <motion.div
            key={item.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={i}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              i % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''
            }`}
          >
            {/* Screen preview */}
            <div
              className="rounded-2xl overflow-hidden group"
              style={{
                height: 320,
                border: `1px solid ${item.accent}30`,
                boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${item.accent}15`,
                position: 'relative',
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

            {/* Copy */}
            <div>
              <span
                className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full inline-block mb-5"
                style={{ background: `${item.accent}20`, color: item.accent }}
              >
                {item.tier}
              </span>
              <h2 className="text-4xl font-black text-cream mb-4">{item.name}</h2>
              <p className="text-cream/60 leading-relaxed mb-6">{item.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-gold/20 text-cream/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-block"
              >
                View Live Site
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional showcase grid */}
      <section className="py-20 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-black text-cream mb-3"
          >
            Additional Showcase
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-cream/40 text-sm mb-12"
          >
            More work from across our portfolio.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {additionalWork.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-dark rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 group block"
                style={i === additionalWork.length - 1 ? { gridColumn: 'span 2' } : {}}
              >
                {/* Grayscale image thumbnail */}
                <div style={{ height: 140, overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(100%)',
                      transition: 'transform 0.4s ease',
                    }}
                    className="group-hover:scale-105"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0,0,0,0.2)',
                      transition: 'background 0.3s ease',
                    }}
                    className="group-hover:!bg-black/40"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-cream font-bold text-base mb-1 group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-cream/40 text-sm">{item.sector}</p>
                  <p className="text-gold/50 text-xs mt-3 font-medium">View live site →</p>
                </div>
              </motion.a>
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
            Want results like these?
          </h2>
          <p className="font-serif-italic text-gold text-xl mb-8">
            Let's talk about your project.
          </p>
          <Link to="/contact" className="btn-gold">
            Get a Quote
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
