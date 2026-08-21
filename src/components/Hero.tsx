import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Send, Terminal, Sparkles, Cpu, Code2, Mail, Briefcase, Trophy, ArrowRight } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [imageError, setImageError] = useState(false);
  const p = PORTFOLIO_DATA.personal;

  return (
    <section
      id="home"
      style={{
        paddingTop: '7.5rem',
        paddingBottom: '4rem',
        minHeight: '94vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        {/* ================= HERO TWO-COLUMN GRID ================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-main-grid"
        >
          {/* ----- LEFT COLUMN: HERO CONTENT ----- */}
          <div className="hero-text-col" style={{ zIndex: 2 }}>
            {/* Eyebrow / Status Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  color: 'var(--accent-cyan)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                ENGINEERING STUDENT · OPEN TO OPPORTUNITIES
              </span>
              <span
                style={{
                  width: '36px',
                  height: '1.5px',
                  background: 'var(--accent-cyan-border)',
                  display: 'inline-block',
                }}
              />
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(3.4rem, 6.8vw, 5.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.03,
                marginBottom: '1.25rem',
              }}
            >
              <span style={{ color: 'var(--text-primary)', display: 'block' }}>Divyansh</span>
              <span className="text-gradient" style={{ display: 'inline-block', marginTop: '0.1rem' }}>
                Gupta
              </span>
            </h1>

            {/* Bio Statement */}
            <p
              style={{
                fontSize: '1.08rem',
                color: 'var(--text-secondary)',
                maxWidth: '490px',
                lineHeight: 1.65,
                marginBottom: '2rem',
                fontWeight: 400,
              }}
            >
              Building practical software, AI systems, and hardware edge engineering projects that solve real problems.
            </p>

            {/* Hero Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.25rem',
                marginBottom: '2rem',
              }}
              className="hero-buttons-row"
            >
              <button
                onClick={onContactClick}
                className="hero-primary-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  background: 'var(--accent-cyan)',
                  color: 'var(--text-on-accent)',
                  fontWeight: 750,
                  fontSize: '0.96rem',
                  padding: '0.8rem 1.8rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 0 22px var(--accent-cyan-glow)',
                }}
              >
                <Send size={15} color="var(--text-on-accent)" />
                <span>Get In Touch</span>
              </button>

              <a
                href="#projects"
                className="hero-secondary-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: 'var(--accent-cyan)',
                  fontWeight: 650,
                  fontSize: '0.94rem',
                  textDecoration: 'none',
                  padding: '0.8rem 0.5rem',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>View Projects</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Social Links Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                style={{
                  width: '38px',
                  height: '38px',
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
                className="hero-social-btn"
              >
                <GithubIcon size={17} />
              </a>

              <a
                href={p.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  width: '38px',
                  height: '38px',
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
                className="hero-social-btn"
              >
                <LinkedinIcon size={17} />
              </a>

              <a
                href={`mailto:${p.email}`}
                aria-label="Email Divyansh Gupta"
                style={{
                  width: '38px',
                  height: '38px',
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
                className="hero-social-btn"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* ----- RIGHT COLUMN: PORTRAIT WITH TECHNICAL RINGS & FLOATING BADGES ----- */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem 1rem',
            }}
            className="hero-avatar-col"
          >
            {/* Concentric Decorative Technical Rings */}
            <div
              style={{
                position: 'absolute',
                width: '420px',
                height: '420px',
                borderRadius: '50%',
                border: '1px solid var(--border-subtle)',
                pointerEvents: 'none',
              }}
              className="hero-outer-ring"
            />
            <div
              style={{
                position: 'absolute',
                width: '340px',
                height: '340px',
                borderRadius: '50%',
                border: '1px dashed var(--border-subtle)',
                pointerEvents: 'none',
              }}
              className="hero-mid-ring"
            />

            {/* Central Circular Avatar Frame */}
            <div
              style={{
                position: 'relative',
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '2.5px solid var(--accent-cyan)',
                boxShadow: '0 0 40px var(--accent-cyan-glow)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
              }}
              className="hero-avatar-frame"
            >
              {!imageError ? (
                <img
                  src={p.portraitPath}
                  alt={p.name}
                  onError={() => setImageError(true)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
              ) : (
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '4.5rem',
                    fontWeight: 800,
                    color: 'var(--accent-cyan)',
                  }}
                >
                  DG
                </div>
              )}
            </div>

            {/* FLOATING BADGE 1: C++ (Top-Left) */}
            <div
              className="floating-tech-badge badge-top-left"
              style={{
                position: 'absolute',
                top: '15px',
                left: '20px',
                zIndex: 3,
                background: 'var(--bg-card-glass)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid var(--border-card)',
                borderRadius: '10px',
                padding: '0.5rem 0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <Code2 size={16} color="var(--accent-cyan)" />
              <span style={{ fontSize: '0.84rem', fontWeight: 650, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                C++
              </span>
            </div>

            {/* FLOATING BADGE 2: AI / ML (Top-Right) */}
            <div
              className="floating-tech-badge badge-top-right"
              style={{
                position: 'absolute',
                top: '25px',
                right: '15px',
                zIndex: 3,
                background: 'var(--bg-card-glass)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid var(--border-card)',
                borderRadius: '10px',
                padding: '0.5rem 0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <Sparkles size={16} color="var(--accent-purple)" />
              <span style={{ fontSize: '0.84rem', fontWeight: 650, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                AI / ML
              </span>
            </div>

            {/* FLOATING BADGE 3: Python (Bottom-Left) */}
            <div
              className="floating-tech-badge badge-bottom-left"
              style={{
                position: 'absolute',
                bottom: '30px',
                left: '15px',
                zIndex: 3,
                background: 'var(--bg-card-glass)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid var(--border-card)',
                borderRadius: '10px',
                padding: '0.5rem 0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <Terminal size={16} color="var(--accent-amber)" />
              <span style={{ fontSize: '0.84rem', fontWeight: 650, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                Python
              </span>
            </div>

            {/* FLOATING BADGE 4: Arduino UNO Q (Bottom-Right) */}
            <div
              className="floating-tech-badge badge-bottom-right"
              style={{
                position: 'absolute',
                bottom: '15px',
                right: '10px',
                zIndex: 3,
                background: 'var(--bg-card-glass)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid var(--border-card)',
                borderRadius: '10px',
                padding: '0.5rem 0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <Cpu size={16} color="var(--accent-emerald)" />
              <span style={{ fontSize: '0.84rem', fontWeight: 650, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                Arduino UNO Q
              </span>
            </div>
          </div>
        </div>

        {/* ================= 3 EQUAL LOWER SUMMARY CARDS ================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginTop: '4.5rem',
          }}
          className="hero-bottom-cards-grid"
        >
          {/* Summary Card 1: Engineering Student */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              borderRadius: '14px',
              padding: '1.6rem 1.4rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              boxShadow: 'var(--shadow-card)',
              transition: 'all 0.25s ease',
            }}
            className="hero-summary-card"
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'var(--accent-cyan-subtle)',
                border: '1px solid var(--accent-cyan-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Briefcase size={18} color="var(--accent-cyan)" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--accent-cyan)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem',
                }}
              >
                ROLE
              </div>
              <div style={{ fontWeight: 750, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                Engineering Student
              </div>
            </div>
          </div>

          {/* Summary Card 2: AI/ML & Software Dev */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              borderRadius: '14px',
              padding: '1.6rem 1.4rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              boxShadow: 'var(--shadow-card)',
              transition: 'all 0.25s ease',
            }}
            className="hero-summary-card"
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'var(--accent-purple-subtle)',
                border: '1px solid var(--accent-purple-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Sparkles size={18} color="var(--accent-purple)" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--accent-purple)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem',
                }}
              >
                DOMAINS
              </div>
              <div style={{ fontWeight: 750, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                AI/ML & Software Dev
              </div>
            </div>
          </div>

          {/* Summary Card 3: Hackathon & Edge Systems */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              borderRadius: '14px',
              padding: '1.6rem 1.4rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              boxShadow: 'var(--shadow-card)',
              transition: 'all 0.25s ease',
            }}
            className="hero-summary-card"
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'var(--accent-emerald-subtle)',
                border: '1px solid var(--accent-emerald-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Trophy size={18} color="var(--accent-emerald)" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--accent-emerald)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem',
                }}
              >
                FOCUS
              </div>
              <div style={{ fontWeight: 750, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                Hackathon & Edge Systems
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-social-btn:hover {
          border-color: var(--accent-cyan) !important;
          color: var(--accent-cyan) !important;
          background: var(--accent-cyan-subtle) !important;
          transform: translateY(-2px);
        }
        .hero-primary-btn:hover {
          background: var(--accent-cyan-hover) !important;
          box-shadow: 0 0 28px var(--accent-cyan-glow) !important;
          transform: translateY(-2px);
        }
        .hero-secondary-link:hover {
          color: var(--accent-cyan-hover) !important;
          transform: translateX(3px);
        }
        .hero-summary-card:hover {
          border-color: var(--accent-cyan-border) !important;
          transform: translateY(-3px);
          box-shadow: var(--shadow-card-hover) !important;
        }

        @media (min-width: 968px) {
          .hero-main-grid {
            grid-template-columns: 1.15fr 0.95fr !important;
          }
        }

        @media (max-width: 967px) {
          .hero-bottom-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            margin-top: 3rem !important;
          }
          .hero-avatar-frame {
            width: 220px !important;
            height: 220px !important;
          }
          .hero-outer-ring {
            width: 320px !important;
            height: 320px !important;
          }
          .hero-mid-ring {
            width: 260px !important;
            height: 260px !important;
          }
        }

        @media (max-width: 580px) {
          .floating-tech-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
