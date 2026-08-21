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
        background: scrolled ? 'rgba(8, 11, 18, 0.94)' : 'rgba(8, 11, 18, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(120, 150, 180, 0.15)',
        padding: '0.85rem 0',
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
            color: '#F5F7FA',
            letterSpacing: '-0.03em',
          }}
        >
          <span>DG</span>
          <span style={{ color: '#22D3EE' }}>.</span>
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
                  color: isActive ? '#22D3EE' : '#9CA3AF',
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
                      background: '#22D3EE',
                      boxShadow: '0 0 6px #22D3EE',
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
              background: 'rgba(16, 23, 34, 0.7)',
              border: '1px solid rgba(120, 150, 180, 0.25)',
              color: '#F5F7FA',
              fontSize: '0.86rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <FileText size={14} color="#F5F7FA" />
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
              background: '#22D3EE',
              color: '#080B12',
              fontSize: '0.86rem',
              fontWeight: 750,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 0 15px rgba(34, 211, 238, 0.25)',
            }}
          >
            <Send size={14} color="#080B12" />
            <span>Hire Me</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="mobile-toggle"
          style={{
            background: '#101722',
            border: '1px solid rgba(120, 150, 180, 0.25)',
            color: '#F5F7FA',
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(8, 11, 18, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(34, 211, 238, 0.3)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
          }}
          className="mobile-drawer"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: activeSection === link.href.substring(1) ? '#22D3EE' : '#F5F7FA',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '0.45rem 0',
                borderBottom: '1px solid rgba(120, 150, 180, 0.12)',
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem' }}>
            <a
              href={PORTFOLIO_DATA.personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-resume-btn"
              style={{
                flex: 1,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
                height: '42px',
                borderRadius: '8px',
                background: 'rgba(16, 23, 34, 0.8)',
                border: '1px solid rgba(120, 150, 180, 0.25)',
                color: '#F5F7FA',
                fontSize: '0.9rem',
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
                gap: '0.45rem',
                height: '42px',
                borderRadius: '8px',
                background: '#22D3EE',
                color: '#080B12',
                fontSize: '0.9rem',
                fontWeight: 750,
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

      {/* Responsive Media Query & Hover Styles */}
      <style>{`
        .nav-link-item:hover {
          color: #F5F7FA !important;
        }
        .navbar-resume-btn:hover {
          border-color: #22D3EE !important;
          color: #22D3EE !important;
          background: rgba(34, 211, 238, 0.05) !important;
        }
        .navbar-hireme-btn:hover {
          background: #38BDF8 !important;
          box-shadow: 0 0 22px rgba(34, 211, 238, 0.45) !important;
          transform: translateY(-1px);
        }
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
          .mobile-drawer { display: none !important; }
        }
      `}</style>
    </header>
  );
};
