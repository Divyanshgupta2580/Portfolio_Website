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
        background: '#080B12',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
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
                  color: '#22D3EE',
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
                  background: 'rgba(34, 211, 238, 0.6)',
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
              <span style={{ color: '#F5F7FA', display: 'block' }}>Divyansh</span>
              <span
                style={{
                  background: 'linear-gradient(135deg, #22D3EE 0%, #38BDF8 50%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'block',
                  marginTop: '0.1rem',
                }}
              >
                Gupta
              </span>
            </h1>

            {/* Bio Statement */}
            <p
              style={{
                fontSize: '1.08rem',
                color: '#9CA3AF',
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
                  background: 'linear-gradient(135deg, #22D3EE 0%, #38BDF8 100%)',
                  color: '#080B12',
                  fontWeight: 750,
                  fontSize: '0.96rem',
                  padding: '0.8rem 1.8rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 0 22px rgba(34, 211, 238, 0.35)',
                }}
              >
                <Send size={15} color="#080B12" />
                <span>Get In Touch</span>
              </button>

              <a
                href="#projects"
                className="hero-secondary-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: '#38BDF8',
                  fontWeight: 650,
                  fontSize: '0.96rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  padding: '0.4rem 0',
                }}
              >
                <span>View Projects</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Social Channels Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hero-social-btn"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: '#101722',
                  border: '1px solid rgba(120, 150, 180, 0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9CA3AF',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={p.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hero-social-btn"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: '#101722',
                  border: '1px solid rgba(120, 150, 180, 0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9CA3AF',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={`mailto:${p.email}`}
                aria-label="Email Divyansh Gupta"
                className="hero-social-btn"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: '#101722',
                  border: '1px solid rgba(120, 150, 180, 0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9CA3AF',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* ----- RIGHT COLUMN: PROFILE VISUAL & FLOATING BADGES ----- */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
            className="hero-visual-col"
          >
            {/* Portrait Framing Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '1/1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Layer 1: Subtle Outer Purple/Cyan Glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, rgba(168, 85, 247, 0.12) 50%, transparent 75%)',
                  filter: 'blur(30px)',
                  pointerEvents: 'none',
                }}
              />

              {/* Layer 2: Outer Purple Accent Ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-22px',
                  borderRadius: '50%',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  pointerEvents: 'none',
                }}
              />

              {/* Layer 3: Middle Cyan/Blue Dashed Technical Ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '50%',
                  border: '1px dashed rgba(56, 189, 248, 0.35)',
                  pointerEvents: 'none',
                }}
              />

              {/* Layer 4: Portrait Circular Frame */}
              <div
                style={{
                  width: '330px',
                  height: '330px',
                  borderRadius: '50%',
                  padding: '4px',
                  background: 'linear-gradient(135deg, #22D3EE 0%, rgba(56, 189, 248, 0.4) 40%, rgba(168, 85, 247, 0.8) 100%)',
                  boxShadow: '0 0 35px rgba(34, 211, 238, 0.25), 0 20px 45px rgba(0, 0, 0, 0.7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  position: 'relative',
                }}
                className="portrait-circle-frame"
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: '#101722',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {!imageError ? (
                    <img
                      src={p.portraitPath}
                      alt="Divyansh Gupta - Engineering Student & Software Developer"
                      onError={() => setImageError(true)}
                      loading="eager"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        filter: 'contrast(1.03) brightness(1.01)',
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#101722',
                        color: '#22D3EE',
                        padding: '1.5rem',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: '72px',
                          height: '72px',
                          borderRadius: '50%',
                          background: 'rgba(34, 211, 238, 0.1)',
                          border: '2px solid #22D3EE',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.8rem',
                          fontWeight: 800,
                          fontFamily: 'var(--font-heading)',
                          marginBottom: '0.4rem',
                        }}
                      >
                        {p.avatarPlaceholderText}
                      </div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: '#F5F7FA' }}>
                        Divyansh Gupta
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ----- 4 FLOATING TECHNICAL BADGES ----- */}
              {/* 1. Upper-Left: C++ */}
              <div
                style={{
                  position: 'absolute',
                  top: '12%',
                  left: '-6%',
                  background: '#0D121B',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  borderRadius: '10px',
                  padding: '0.5rem 0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                  zIndex: 10,
                }}
                className="hero-tech-badge badge-cpp"
              >
                <Code2 size={16} color="#38BDF8" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', fontWeight: 700, color: '#F5F7FA' }}>
                  C++
                </span>
              </div>

              {/* 2. Upper-Right: AI / ML */}
              <div
                style={{
                  position: 'absolute',
                  top: '20%',
                  right: '-8%',
                  background: '#0D121B',
                  border: '1px solid rgba(168, 85, 247, 0.4)',
                  borderRadius: '10px',
                  padding: '0.5rem 0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                  zIndex: 10,
                }}
                className="hero-tech-badge badge-aiml"
              >
                <Sparkles size={16} color="#C084FC" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', fontWeight: 700, color: '#F5F7FA' }}>
                  AI / ML
                </span>
              </div>

              {/* 3. Lower-Left: Python */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '22%',
                  left: '-10%',
                  background: '#0D121B',
                  border: '1px solid rgba(251, 191, 36, 0.35)',
                  borderRadius: '10px',
                  padding: '0.5rem 0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                  zIndex: 10,
                }}
                className="hero-tech-badge badge-python"
              >
                <Terminal size={16} color="#FBBF24" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', fontWeight: 700, color: '#F5F7FA' }}>
                  Python
                </span>
              </div>

              {/* 4. Lower-Right: Arduino UNO Q */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12%',
                  right: '-6%',
                  background: '#0D121B',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  borderRadius: '10px',
                  padding: '0.5rem 0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                  zIndex: 10,
                }}
                className="hero-tech-badge badge-arduino"
              >
                <Cpu size={16} color="#34D399" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', fontWeight: 700, color: '#F5F7FA' }}>
                  Arduino UNO Q
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= LOWER HERO 3 SUMMARY CARDS ================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginTop: '4.5rem',
          }}
          className="hero-summary-grid"
        >
          {/* Card 1: ENGINEERING STUDENT */}
          <div
            style={{
              background: '#101722',
              border: '1px solid rgba(120, 150, 180, 0.20)',
              borderRadius: '12px',
              padding: '1.35rem 1.6rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'all 0.25s ease',
            }}
            className="hero-summary-card"
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'rgba(34, 211, 238, 0.08)',
                border: '1px solid rgba(34, 211, 238, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Briefcase size={18} color="#22D3EE" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.88rem',
                  fontWeight: 750,
                  color: '#22D3EE',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                ENGINEERING STUDENT
              </div>
            </div>
          </div>

          {/* Card 2: AI/ML & SOFTWARE */}
          <div
            style={{
              background: '#101722',
              border: '1px solid rgba(120, 150, 180, 0.20)',
              borderRadius: '12px',
              padding: '1.35rem 1.6rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'all 0.25s ease',
            }}
            className="hero-summary-card"
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'rgba(168, 85, 247, 0.08)',
                border: '1px solid rgba(168, 85, 247, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Sparkles size={18} color="#A855F7" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.88rem',
                  fontWeight: 750,
                  color: '#A855F7',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                AI/ML & SOFTWARE
              </div>
            </div>
          </div>

          {/* Card 3: HACKATHON & EDGE */}
          <div
            style={{
              background: '#101722',
              border: '1px solid rgba(120, 150, 180, 0.20)',
              borderRadius: '12px',
              padding: '1.35rem 1.6rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'all 0.25s ease',
            }}
            className="hero-summary-card"
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Trophy size={18} color="#10B981" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.88rem',
                  fontWeight: 750,
                  color: '#10B981',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                HACKATHON & EDGE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Component Styles for Hover & Responsive Adaptability */}
      <style>{`
        .hero-primary-btn:hover {
          background: linear-gradient(135deg, #38BDF8 0%, #22D3EE 100%) !important;
          box-shadow: 0 0 28px rgba(34, 211, 238, 0.5) !important;
          transform: translateY(-1px);
        }
        .hero-secondary-link:hover {
          color: #22D3EE !important;
          transform: translateX(3px);
        }
        .hero-social-btn:hover {
          border-color: #22D3EE !important;
          color: #22D3EE !important;
          background: #151C27 !important;
          transform: translateY(-2px);
        }
        .hero-summary-card:hover {
          border-color: rgba(34, 211, 238, 0.35) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4) !important;
        }

        @media (min-width: 968px) {
          .hero-main-grid {
            grid-template-columns: 1.12fr 0.88fr !important;
            gap: 3.5rem !important;
          }
        }

        @media (max-width: 967px) {
          .hero-summary-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            margin-top: 3.5rem !important;
          }
          .hero-main-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-visual-col {
            order: 2;
          }
          .hero-text-col {
            order: 1;
          }
        }

        @media (max-width: 520px) {
          .portrait-circle-frame {
            width: 260px !important;
            height: 260px !important;
          }
          .badge-cpp {
            top: 5% !important;
            left: -2% !important;
            padding: 0.35rem 0.65rem !important;
          }
          .badge-aiml {
            top: 15% !important;
            right: -2% !important;
            padding: 0.35rem 0.65rem !important;
          }
          .badge-python {
            bottom: 15% !important;
            left: -2% !important;
            padding: 0.35rem 0.65rem !important;
          }
          .badge-arduino {
            bottom: 5% !important;
            right: -2% !important;
            padding: 0.35rem 0.65rem !important;
          }
        }
      `}</style>
    </section>
  );
};
