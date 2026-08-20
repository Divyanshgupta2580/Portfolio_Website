import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { FileText, Send, Terminal, Sparkles, Cpu, Code2, ArrowDown } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [imageError, setImageError] = useState(false);
  const p = PORTFOLIO_DATA.personal;

  return (
    <section id="home" className="section" style={{ paddingTop: '9rem', paddingBottom: '5rem', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Text & CTAs */}
          <div className="animate-slide-up" style={{ zIndex: 2 }}>
            {/* Status Badge */}
            <div className="section-badge">
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent-cyan)',
                  boxShadow: '0 0 10px var(--accent-cyan)',
                  display: 'inline-block',
                }}
              />
              <span>{p.statusBadge}</span>
            </div>

            {/* Main Hero Name */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
                color: 'var(--text-main)',
              }}
            >
              Divyansh <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #00f2fe 60%, #4facfe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Gupta
              </span>
            </h1>

            {/* Short Bio Statement */}
            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-muted)',
                maxWidth: '560px',
                lineHeight: 1.6,
                marginBottom: '2rem',
              }}
            >
              {p.bio}
            </p>

            {/* Hero Highlights / Quick Stats Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '0.85rem',
                marginBottom: '2.5rem',
                maxWidth: '560px',
              }}
            >
              {p.highlights.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.75rem 1rem',
                  }}
                >
                  <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-main)', marginTop: '0.2rem' }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Hero CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
              }}
            >
              <button onClick={onContactClick} className="btn btn-primary">
                <Send size={18} />
                <span>Get In Touch</span>
              </button>

              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <GithubIcon size={18} />
                <span>GitHub Profile</span>
              </a>

              <a
                href={p.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FileText size={18} />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Framed Portrait */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
            className="animate-fade-in"
          >
            {/* Outer Geometric Frame & Tech Ring Container */}
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
              {/* Animated HUD Tech Rings */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-15px',
                  borderRadius: '50%',
                  border: '1px dashed var(--border-cyan)',
                  opacity: 0.5,
                  animation: 'spin 40s linear infinite',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '-30px',
                  borderRadius: '50%',
                  border: '1px solid rgba(0, 242, 254, 0.15)',
                  pointerEvents: 'none',
                }}
              />

              {/* Cyan Glow Layer */}
              <div
                style={{
                  position: 'absolute',
                  inset: '10px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0, 242, 254, 0.25) 0%, rgba(7, 8, 13, 0) 70%)',
                  filter: 'blur(30px)',
                  pointerEvents: 'none',
                }}
              />

              {/* Portrait Container Card */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  padding: '10px',
                  background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.4) 0%, rgba(15, 18, 30, 0.8) 50%, rgba(59, 130, 246, 0.4) 100%)',
                  border: '1px solid var(--border-cyan)',
                  boxShadow: '0 20px 50px rgba(0, 242, 254, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: 'var(--bg-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
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
                        filter: 'contrast(1.05) brightness(1.02)',
                      }}
                    />
                  ) : (
                    /* High-Tech Developer Avatar Graphic Fallback */
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'radial-gradient(circle at center, #111625 0%, #07080d 100%)',
                        color: 'var(--accent-cyan)',
                        padding: '1.5rem',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          background: 'var(--accent-cyan-subtle)',
                          border: '2px solid var(--border-cyan)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '2.2rem',
                          fontWeight: 800,
                          fontFamily: 'var(--font-heading)',
                          marginBottom: '0.75rem',
                          boxShadow: '0 0 25px rgba(0, 242, 254, 0.3)',
                        }}
                      >
                        {p.avatarPlaceholderText}
                      </div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)' }}>
                        Divyansh Gupta
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                        Software & AI Engineer
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating Technology Badges around Portrait */}
              <div
                style={{
                  position: 'absolute',
                  top: '5%',
                  left: '-10%',
                  background: 'var(--bg-card-glass)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-cyan)',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.4rem 0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-main)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                }}
                className="animate-float"
              >
                <Code2 size={14} color="var(--accent-cyan)" />
                <span>C++</span>
              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '60%',
                  left: '-15%',
                  background: 'var(--bg-card-glass)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-card)',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.4rem 0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-main)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                  animationDelay: '1s',
                }}
                className="animate-float"
              >
                <Terminal size={14} color="#38bdf8" />
                <span>Python</span>
              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '15%',
                  right: '-10%',
                  background: 'var(--bg-card-glass)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-card)',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.4rem 0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-main)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                  animationDelay: '2s',
                }}
                className="animate-float"
              >
                <Sparkles size={14} color="#a855f7" />
                <span>AI / ML</span>
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '5%',
                  right: '-5%',
                  background: 'var(--bg-card-glass)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-card)',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.4rem 0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-main)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                  animationDelay: '3s',
                }}
                className="animate-float"
              >
                <Cpu size={14} color="#10b981" />
                <span>Arduino UNO Q</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '4rem',
          }}
        >
          <a
            href="#about"
            style={{
              color: 'var(--text-dim)',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              transition: 'color 0.2s ease',
            }}
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={16} className="animate-float" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (min-width: 968px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
};
