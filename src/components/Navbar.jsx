import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isActive = (path) => location.pathname === path
  const close = () => setMenuOpen(false)

  const linkStyle = (path) => ({
    color: isActive(path) ? '#C9A84C' : '#E8E8E4',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    whiteSpace: 'nowrap',
  })

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: 'rgba(17,17,17,0.6)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255,255,255,0.035)',
        }}
      >
        {/* ── DESKTOP bar (md+): grid logo | links | CTA ── */}
        <div
          className="hidden md:grid"
          style={{
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            height: '60px',
            padding: '0 44px',
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span
              style={{
                color: '#E8E8E4',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}
            >
              Hallmark<span style={{ color: '#C9A84C', margin: '0 4px' }}>·</span>Studio
            </span>
          </Link>

          {/* Centre links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <Link to="/" style={linkStyle('/')}>Home</Link>
            <Link to="/work" style={linkStyle('/work')}>Work</Link>
            <Link to="/pricing" style={linkStyle('/pricing')}>Pricing</Link>
            <Link to="/contact" style={linkStyle('/contact')}>Contact</Link>
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                color: '#E8E8E4',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              Get a Quote
              <span style={{ color: '#C9A84C' }}>→</span>
            </Link>
          </div>
        </div>

        {/* ── MOBILE bar (<md): logo left | hamburger right ── */}
        <div
          className="flex md:hidden"
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '60px',
            padding: '0 24px',
          }}
        >
          {/* Logo */}
          <Link to="/" onClick={close} style={{ textDecoration: 'none' }}>
            <span
              style={{
                color: '#E8E8E4',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}
            >
              Hallmark<span style={{ color: '#C9A84C', margin: '0 4px' }}>·</span>Studio
            </span>
          </Link>

          {/* Hamburger / close button */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none',
              border: 'none',
              padding: '6px',
              color: '#E8E8E4',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.svg
                  key="close"
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.18 }}
                  width="20" height="20" viewBox="0 0 20 20" fill="none"
                >
                  <line x1="3" y1="3" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="17" y1="3" x2="3" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </motion.svg>
              ) : (
                <motion.svg
                  key="burger"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  width="20" height="20" viewBox="0 0 20 20" fill="none"
                >
                  <line x1="2" y1="5" x2="18" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="2" y1="15" x2="18" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* ── MOBILE full-screen overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="md:hidden"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 49,
              backgroundColor: 'rgba(17,17,17,0.97)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '36px',
            }}
          >
            {[
              { to: '/', label: 'Home' },
              { to: '/work', label: 'Work' },
              { to: '/pricing', label: 'Pricing' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: i * 0.06, ease: 'easeOut' }}
              >
                <Link
                  to={to}
                  onClick={close}
                  style={{
                    color: isActive(to) ? '#C9A84C' : '#E8E8E4',
                    fontSize: '28px',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  {label}
                </Link>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.28, ease: 'easeOut' }}
              style={{ marginTop: 8 }}
            >
              <Link
                to="/contact"
                onClick={close}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#C9A84C',
                  color: '#111111',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '14px 28px',
                  borderRadius: '9999px',
                }}
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
