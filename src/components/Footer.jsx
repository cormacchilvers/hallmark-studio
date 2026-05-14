import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gold/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src="/hsbg.png.png" alt="Hallmark Studio" style={{ height: 64, width: 'auto', marginBottom: 8 }} />
            <p className="font-serif-italic text-gold text-lg mb-4">
              "Stand Out. Stay Ahead."
            </p>
            <p className="text-cream/40 text-sm">
              Chelmsford, Essex
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-cream/40 text-xs tracking-widest uppercase mb-5 font-semibold">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/work', label: 'Work' },
                { to: '/pricing', label: 'Pricing' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-cream/60 hover:text-cream text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream/40 text-xs tracking-widest uppercase mb-5 font-semibold">
              Get In Touch
            </h4>
            <a
              href="mailto:hello@hallmarkstudio.com"
              className="text-gold hover:text-gold/80 text-sm block mb-3 transition-colors"
            >
              hello@hallmarkstudio.com
            </a>
            <p className="text-cream/40 text-sm mb-5">Chelmsford, Essex</p>
            <Link to="/contact" className="btn-gold text-sm inline-block">
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs">
            © 2025 Hallmark Studio. All rights reserved.
          </p>
          <p className="text-cream/20 text-xs">
            Premium Web Design · Chelmsford, Essex
          </p>
        </div>
      </div>
    </footer>
  )
}
