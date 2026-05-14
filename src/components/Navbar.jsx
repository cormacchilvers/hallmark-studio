import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
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
      <div style={{
        position: 'relative',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
      }}>

        {/* Text logo */}
        <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <span style={{
            color: '#C9A84C',
            fontSize: '16px',
            fontWeight: '600',
            letterSpacing: '0.02em',
            lineHeight: 1,
          }}>
            Hallmark Studio
          </span>
        </Link>

        {/* Nav links — absolutely centred */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
        }}>
          <Link to="/work"    style={{ color: '#E8E8E4', fontSize: '14px', textDecoration: 'none', fontWeight: '400' }}>Work</Link>
          <Link to="/pricing" style={{ color: '#E8E8E4', fontSize: '14px', textDecoration: 'none', fontWeight: '400' }}>Pricing</Link>
          <Link to="/contact" style={{ color: '#E8E8E4', fontSize: '14px', textDecoration: 'none', fontWeight: '400' }}>Contact</Link>
        </div>

        {/* Get a Quote button */}
        <Link to="/contact" style={{
          flexShrink: 0,
          display: 'inline-flex',
          alignItems: 'center',
          backgroundColor: '#C9A84C',
          color: '#111111',
          fontSize: '13px',
          fontWeight: '600',
          padding: '10px 24px',
          borderRadius: '999px',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}>
          Get a Quote
        </Link>

      </div>
    </nav>
  )
}
