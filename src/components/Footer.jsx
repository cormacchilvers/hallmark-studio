import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(201,168,76,0.1)', backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div
              className="font-black text-cream"
              style={{ fontSize: 28, letterSpacing: '-0.03em', marginBottom: 10 }}
            >
              HS<span className="text-gold">.</span>
            </div>
            <p className="font-serif-italic text-gold" style={{ fontSize: 15, marginBottom: 12 }}>
              "Stand Out. Stay Ahead."
            </p>
            <p className="text-cream/30 text-xs tracking-wide">
              Chelmsford, Essex · Est. 2026
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-cream/30 text-xs tracking-widest uppercase font-semibold mb-5">
              Pages
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-cream/55 hover:text-cream text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-cream/30 text-xs tracking-widest uppercase font-semibold mb-5">
              Get In Touch
            </p>
            <a
              href="mailto:hello@hallmarkstudio.com"
              className="text-gold hover:text-gold/70 text-sm block mb-2 transition-colors"
            >
              hello@hallmarkstudio.com
            </a>
            <p className="text-cream/35 text-sm">Chelmsford, Essex</p>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(232,232,228,0.06)', paddingTop: 24 }}
        >
          <p className="text-cream/25 text-xs">
            © 2026 Hallmark Studio. All rights reserved.
          </p>
          <p className="text-cream/15 text-xs tracking-widest uppercase">
            Premium Web Design · Chelmsford, Essex
          </p>
        </div>

      </div>
    </footer>
  )
}
