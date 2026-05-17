import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const screenshots = [
  { src: '/cornerstone.png', label: 'Cornerstone Builders' },
  { src: '/blade.png', label: 'Blade & Co' },
  { src: '/ember.png', label: 'Ember & Oak' },
]

export default function DeviceMockups() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative flex items-center justify-center"
      style={{ minHeight: 680 }}
    >
      {/* Gold atmospheric glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 900,
          height: 700,
          background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* MacBook mockup */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'relative',
          zIndex: 2,
          transform: 'rotate(-3deg)',
        }}
      >
        {/* Screen lid */}
        <div
          style={{
            width: 655,
            height: 425,
            background: '#2a2a2a',
            borderRadius: '14px 14px 0 0',
            border: '2px solid #444',
            overflow: 'hidden',
            boxShadow: '0 36px 100px rgba(0,0,0,0.75), 0 16px 50px rgba(201,168,76,0.07)',
            position: 'relative',
          }}
        >
          {/* Webcam dot */}
          <div style={{
            position: 'absolute',
            top: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 10,
            height: 10,
            background: '#555',
            borderRadius: '50%',
            zIndex: 10,
          }} />
          {/* Screen bezel */}
          <div style={{
            margin: '33px 20px 10px',
            height: 365,
            background: '#0a0a0a',
            borderRadius: 6,
            overflow: 'hidden',
            position: 'relative',
          }}>
            {screenshots.map((screen, i) => (
              <div
                key={screen.src}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: i === current ? 1 : 0,
                  transition: 'opacity 0.8s ease',
                }}
              >
                <img
                  src={screen.src}
                  alt={screen.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Base / hinge */}
        <div
          style={{
            width: 708,
            height: 13,
            background: 'linear-gradient(to bottom, #3a3a3a, #2a2a2a)',
            borderRadius: '0 0 4px 4px',
            marginLeft: -26,
            boxShadow: '0 6px 24px rgba(0,0,0,0.5)',
          }}
        />
        {/* Keyboard base */}
        <div
          style={{
            width: 731,
            height: 10,
            background: '#252525',
            borderRadius: '0 0 10px 10px',
            marginLeft: -38,
          }}
        />
        {/* Ground shadow + ambient gold glow */}
        <div
          style={{
            position: 'absolute',
            bottom: -22,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 700,
            height: 48,
            background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.16) 0%, rgba(0,0,0,0.45) 45%, transparent 70%)',
            filter: 'blur(10px)',
            pointerEvents: 'none',
          }}
        />
      </motion.div>
    </motion.div>
  )
}
