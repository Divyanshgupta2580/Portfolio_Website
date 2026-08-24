import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import {
  UserRound,
  GraduationCap,
  Target,
  Layers,
  TrendingUp,
  Code2,
  Trophy,
  BookOpen,
  Quote,
} from 'lucide-react';

interface AboutProps {
  onContactClick?: () => void;
}

export const About: React.FC<AboutProps> = () => {
  const focusPoints = [
    {
      icon: <GraduationCap size={22} color="var(--accent-cyan)" />,
      accent: 'var(--accent-cyan)',
      subtle: 'var(--accent-cyan-subtle)',
      border: 'var(--accent-cyan-border)',
      glow: 'var(--accent-cyan-glow)',
      title: 'Engineering Student',
      desc: 'Computer Science & Systems Engineering',
    },
    {
      icon: <Target size={22} color="var(--accent-blue)" />,
      accent: 'var(--accent-blue)',
      subtle: 'rgba(59, 130, 246, 0.10)',
      border: 'rgba(59, 130, 246, 0.35)',
      glow: 'rgba(59, 130, 246, 0.20)',
      title: 'Problem Solver',
      desc: 'Love solving complex real-world engineering problems',
    },
    {
      icon: <Layers size={22} color="var(--accent-purple)" />,
      accent: 'var(--accent-purple)',
      subtle: 'var(--accent-purple-subtle)',
      border: 'var(--accent-purple-border)',
      glow: 'var(--accent-purple-glow)',
      title: 'Builder',
      desc: 'Enjoy architecting robust, end-to-end applications',
    },
    {
      icon: <TrendingUp size={22} color="var(--accent-emerald)" />,
      accent: 'var(--accent-emerald)',
      subtle: 'var(--accent-emerald-subtle)',
      border: 'var(--accent-emerald-border)',
      glow: 'var(--accent-emerald-glow)',
      title: 'Lifelong Learner',
      desc: 'Always exploring cutting-edge AI and software systems',
    },
  ];

  const statCards = [
    {
      value: '2+',
      label: 'Major Projects',
      sub: 'Built & Deployed',
      color: 'var(--accent-cyan)',
      subtle: 'var(--accent-cyan-subtle)',
      border: 'var(--accent-cyan-border)',
      glow: 'var(--accent-cyan-glow)',
      icon: <Code2 size={18} color="var(--accent-cyan)" />,
    },
    {
      value: '10+',
      label: 'Technologies',
      sub: 'Worked With',
      color: 'var(--accent-blue)',
      subtle: 'rgba(59, 130, 246, 0.10)',
      border: 'rgba(59, 130, 246, 0.35)',
      glow: 'rgba(59, 130, 246, 0.20)',
      icon: <Layers size={18} color="var(--accent-blue)" />,
    },
    {
      value: '5+',
      label: 'Hackathon',
      sub: 'Participations',
      color: 'var(--accent-purple)',
      subtle: 'var(--accent-purple-subtle)',
      border: 'var(--accent-purple-border)',
      glow: 'var(--accent-purple-glow)',
      icon: <Trophy size={18} color="var(--accent-purple)" />,
    },
    {
      value: '∞',
      label: 'Learning',
      sub: 'Everyday',
      color: 'var(--accent-emerald)',
      subtle: 'var(--accent-emerald-subtle)',
      border: 'var(--accent-emerald-border)',
      glow: 'var(--accent-emerald-glow)',
      icon: <BookOpen size={18} color="var(--accent-emerald)" />,
    },
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-primary)', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
        {/* ================= SECTION HEADER ================= */}
        <ScrollReveal direction="heading" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              color: 'var(--accent-cyan)',
              fontSize: '0.88rem',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.05em',
              marginBottom: '0.85rem',
            }}
          >
            <UserRound size={15} color="var(--accent-cyan)" />
            <span>About Me</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.3rem, 5vw, 3.3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              lineHeight: 1.15,
            }}
          >
            <span style={{ color: 'var(--text-primary)' }}>Driven by Code, </span>
            <span className="text-gradient">Focused on Engineering</span>
          </h2>

          <p
            style={{
              fontSize: '1.02rem',
              color: 'var(--text-secondary)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            I am Divyansh Gupta, an engineering student and developer focused on building dependable software systems, intelligent algorithms, and practical software solutions.
          </p>
        </ScrollReveal>

        {/* ================= TWO-COLUMN MAIN CONTENT ================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'stretch',
          }}
          className="about-two-col-grid"
        >
          {/* ----- LEFT SIDE: 4 FOCUS ITEMS ----- */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            {focusPoints.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 60}>
                <div
                  className="about-focus-card"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-card)',
                    borderRadius: '14px',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    transition: 'all 0.25s ease',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: item.subtle,
                    border: `1px solid ${item.border}`,
                    boxShadow: `0 0 16px ${item.glow}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '1.08rem',
                      color: 'var(--text-primary)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.45,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            ))}
          </div>

          {/* ----- RIGHT SIDE: 2x2 STATISTICS GRID ----- */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.25rem',
            }}
            className="about-stats-grid"
          >
            {statCards.map((stat, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 60 + 40}>
                <div
                  className="about-stat-box"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-card)',
                    borderRadius: '16px',
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.25s ease',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  {/* Top Row: Big Number & Decorative Upper-Right Icon */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2.75rem',
                        fontWeight: 800,
                        color: stat.color,
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </span>

                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        background: stat.subtle,
                        border: `1px solid ${stat.border}`,
                        boxShadow: `0 0 14px ${stat.glow}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {stat.icon}
                    </div>
                  </div>

                  {/* Bottom Labels */}
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        color: 'var(--text-primary)',
                        marginBottom: '0.2rem',
                      }}
                    >
                      {stat.label}
                    </div>
                    <div
                      style={{
                        fontSize: '0.84rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {stat.sub}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM QUOTE STRIP ================= */}
        <ScrollReveal
          direction="up"
          delay={150}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: '14px',
            padding: '1.4rem 2rem',
            marginTop: '3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            boxShadow: 'var(--shadow-card)',
          }}
          className="about-quote-strip"
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'var(--accent-cyan-subtle)',
              border: '1px solid var(--accent-cyan-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Quote size={22} color="var(--accent-cyan)" />
          </div>

          <div style={{ fontSize: '0.96rem', lineHeight: 1.6 }}>
            <span style={{ color: 'var(--text-primary)' }}>
              I build with purpose, solve with curiosity, and learn with consistency.
            </span>
            <br />
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>
              Engineering is not just what I study — it's what I live every day.
            </span>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .about-focus-card:hover {
          transform: translateY(-2px);
          border-color: var(--accent-cyan-border) !important;
          box-shadow: var(--shadow-card-hover) !important;
        }
        .about-stat-box:hover {
          transform: translateY(-3px);
          border-color: var(--accent-cyan-border) !important;
          box-shadow: var(--shadow-card-hover) !important;
        }

        @media (min-width: 968px) {
          .about-two-col-grid {
            grid-template-columns: 1fr 1.05fr !important;
            gap: 2.5rem !important;
          }
        }

        @media (max-width: 600px) {
          .about-stats-grid {
            grid-template-columns: 1fr !important;
          }
          .about-quote-strip {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};
