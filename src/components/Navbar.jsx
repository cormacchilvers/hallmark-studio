import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  const linkStyle = (path) => ({
    color: isActive(path) ? '#C9A84C' : '#E8E8E4',
    fontSize: '14px',
    textDecoration: 'none',
    fontWeight: isActive(path) ? '500' : '400',
    borderBottom: isActive(path) ? '1px solid rgba(201,168,76,0.6)' : '1px solid transparent',
    paddingBottom: '2px',
    transition: 'color 0.2s, border-color 0.2s',
  })

  const mobileLinkStyle = (path) => ({
    color: isActive(path) ? '#C9A84C' : '#E8E8E4',
    fontSize: '26px',
    textDecoration: 'none',
    fontWeight: '600',
  })

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(17,17,17,0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div className="px-6 md:px-12" style={{
          position: 'relative',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
        }}>

          {/* Text logo */}
          <Link to="/" onClick={close} style={{ textDecoration: 'none', flexShrink: 0, display: 'inline-flex', alignItems: 'center' }}>
            <span style={{
              color: '#C9A84C',
              fontSize: '16px',
              fontWeight: '600',
              letterSpacing: '0.02em',
              lineHeight: 1,
              margin: 0,
              padding: 0,
            }}>
              Hallmark Studio
            </span>
          </Link>

          {/* Nav links — absolutely centred — desktop only */}
          <div className="hidden md:flex" style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            alignItems: 'center',
            gap: '40px',
          }}>
            <Link to="/work"    style={linkStyle('/work')}>Work</Link>
            <Link to="/pricing" style={linkStyle('/pricing')}>Pricing</Link>
            <Link to="/contact" style={linkStyle('/contact')}>Contact</Link>
          </div>

          {/* Get a Quote button — desktop only */}
          <Link to="/contact" className="hidden md:inline-flex" style={{
            flexShrink: 0,
            alignItems: 'center',
            backgroundColor: '#C9A84C',
            color: '#111111',
            fontSize: '13px',
            fontWeight: '600',
            padding: '8px 20px',
            borderRadius: '999px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}>
            Get a Quote
          </Link>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', color: '#E8E8E4', alignItems: 'center' }}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>

        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden"
            style={{
              position: 'fixed',
              top: 64,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 49,
              backgroundColor: 'rgba(17,17,17,0.97)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '40px',
            }}
          >
            <Link to="/work"    onClick={close} style={mobileLinkStyle('/work')}>Work</Link>
            <Link to="/pricing" onClick={close} style={mobileLinkStyle('/pricing')}>Pricing</Link>
            <Link to="/contact" onClick={close} style={mobileLinkStyle('/contact')}>Contact</Link>
            <Link to="/contact" onClick={close} style={{
              marginTop: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#C9A84C',
              color: '#111111',
              fontSize: '15px',
              fontWeight: '600',
              padding: '12px 32px',
              borderRadius: '999px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}>
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
