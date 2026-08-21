import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Menu, X, FileText, Send } from 'lucide-react';

interface NavbarProps {
  onOpenHireMe: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHireMe }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'capabilities', 'about', 'skills', 'projects', 'journey', 'opportunities', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'What I Do', href: '#capabilities' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Open To', href: '#opportunities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--bg-navbar-scrolled)' : 'var(--bg-navbar)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '0.85rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo: DG. */}
        <a
          href="#home"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.15rem',
            fontFamily: 'var(--font-heading)',
            fontSize: '1.45rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
          }}
        >
          <span>DG</span>
          <span style={{ color: 'var(--accent-cyan)' }}>.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 650 : 500,
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  padding: '0.35rem 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                className="nav-link-item"
              >
                <span>{link.name}</span>
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'var(--accent-cyan)',
                      boxShadow: '0 0 6px var(--accent-cyan)',
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.85rem' }} className="desktop-nav">
          <a
            href={PORTFOLIO_DATA.personal.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              height: '38px',
              padding: '0 1rem',
              borderRadius: '8px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              color: 'var(--text-primary)',
              fontSize: '0.86rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <FileText size={14} color="var(--text-primary)" />
            <span>Resume</span>
          </a>

          <button
            onClick={onOpenHireMe}
            className="navbar-hireme-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              height: '38px',
              padding: '0 1.15rem',
              borderRadius: '8px',
              background: 'var(--accent-cyan)',
              color: 'var(--text-on-accent)',
              fontSize: '0.86rem',
              fontWeight: 750,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 0 15px var(--accent-cyan-glow)',
            }}
          >
            <Send size={14} color="var(--text-on-accent)" />
            <span>Hire Me</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="mobile-toggle"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            color: 'var(--text-primary)',
            width: '38px',
            height: '38px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Overlay Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--bg-modal)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
          className="mobile-menu-drawer"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)',
                    fontSize: '0.96rem',
                    fontWeight: isActive ? 700 : 500,
                    padding: '0.4rem 0',
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <a
              href={PORTFOLIO_DATA.personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                height: '40px',
                borderRadius: '8px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                color: 'var(--text-primary)',
                fontSize: '0.88rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <FileText size={15} />
              <span>Resume</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHireMe();
              }}
              style={{
                flex: 1,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                height: '40px',
                borderRadius: '8px',
                background: 'var(--accent-cyan)',
                color: 'var(--text-on-accent)',
                fontSize: '0.88rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <Send size={15} />
              <span>Hire Me</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 868px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .mobile-menu-drawer {
            display: none !important;
          }
        }
        .nav-link-item:hover {
          color: var(--accent-cyan) !important;
        }
        .navbar-resume-btn:hover {
          border-color: var(--accent-cyan) !important;
          color: var(--accent-cyan) !important;
          background: var(--accent-cyan-subtle) !important;
        }
        .navbar-hireme-btn:hover {
          background: var(--accent-cyan-hover) !important;
          box-shadow: 0 0 20px var(--accent-cyan-glow) !important;
          transform: translateY(-1px);
        }
      `}</style>
    </header>
  );
};
