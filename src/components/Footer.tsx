import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const p = PORTFOLIO_DATA.personal;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'What I Do', href: '#capabilities' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Open to Work', href: '#opportunities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      style={{
        background: 'var(--bg-dark)',
        borderTop: '1px solid var(--border-card)',
        padding: '3.75rem 0 2rem 0',
      }}
    >
      <div className="container">
        <ScrollReveal direction="up" delay={0}>
        {/* Main Footer Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            marginBottom: '3rem',
          }}
          className="footer-grid"
        >
          {/* Brand Info & Socials */}
          <div style={{ maxWidth: '380px' }}>
            <a
              href="#home"
              style={{
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.2rem',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.45rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
                marginBottom: '0.5rem',
              }}
            >
              <span>Divyansh Gupta</span>
              <span style={{ color: 'var(--accent-cyan)' }}>.</span>
            </a>
            <div style={{ color: 'var(--accent-cyan)', fontSize: '0.86rem', fontFamily: 'var(--font-mono)', fontWeight: 600, marginBottom: '0.85rem' }}>
              Engineering Student · AI & Software Engineering
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Building software, AI systems, and engineering solutions that solve practical problems.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                className="social-icon-btn"
              >
                <GithubIcon size={16} />
              </a>

              <a
                href={p.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                className="social-icon-btn"
              >
                <LinkedinIcon size={16} />
              </a>

              <a
                href={`mailto:${p.email}`}
                aria-label="Email"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                className="social-icon-btn"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
            }}
            className="footer-links-grid"
          >
            {/* Navigation Column */}
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', marginBottom: '0.85rem' }}>
                Navigation
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {navLinks.slice(0, 4).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      transition: 'color 0.2s ease',
                    }}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Projects Column */}
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', marginBottom: '0.85rem' }}>
                Projects
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }} className="footer-link">
                  BenefitOS
                </a>
                <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }} className="footer-link">
                  JanSetu
                </a>
                <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }} className="footer-link">
                  Tron
                </a>
                <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }} className="footer-link">
                  RailGuard-AI
                </a>
              </div>
            </div>

            {/* Resources Column */}
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', marginBottom: '0.85rem' }}>
                Resources
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                <a href={p.resumePath} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }} className="footer-link">
                  Resume
                </a>
                <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }} className="footer-link">
                  GitHub
                </a>
                <a href={p.linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }} className="footer-link">
                  LinkedIn
                </a>
                <a href={`mailto:${p.email}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }} className="footer-link">
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Notice */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.84rem',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 500,
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>© {new Date().getFullYear()} Divyansh Gupta. All rights reserved.</div>
          <div>Engineering Student · AI & Software Engineering</div>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to Top"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              color: 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            className="scroll-top-footer-btn"
          >
            <ArrowUp size={16} />
          </button>
        </div>
        </ScrollReveal>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--accent-cyan) !important;
        }
        .scroll-top-footer-btn:hover {
          border-color: var(--accent-cyan) !important;
          background: var(--accent-cyan-subtle) !important;
          transform: translateY(-2px);
        }
        @media (min-width: 900px) {
          .footer-grid {
            grid-template-columns: 1.1fr 1.3fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-links-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
