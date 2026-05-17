import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

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
      {/* CSS grid: logo | centred links | right CTA — columns never collide */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          height: '60px',
          padding: '0 44px',
        }}
      >
        {/* Logo — left column */}
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

        {/* Nav links — centre column, always visible */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <Link to="/" style={linkStyle('/')}>Home</Link>
          <Link to="/work" style={linkStyle('/work')}>Work</Link>
          <Link to="/pricing" style={linkStyle('/pricing')}>Pricing</Link>
          <Link to="/contact" style={linkStyle('/contact')}>Contact</Link>
        </div>

        {/* CTA — right column, right-aligned */}
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
    </nav>
  )
}
