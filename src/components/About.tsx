import React from 'react';
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
      icon: <GraduationCap size={22} color="#22D3EE" />,
      accent: '#22D3EE',
      accentRgb: '34, 211, 238',
      title: 'Engineering Student',
      desc: 'Computer Science & Systems Engineering',
    },
    {
      icon: <Target size={22} color="#38BDF8" />,
      accent: '#38BDF8',
      accentRgb: '56, 189, 248',
      title: 'Problem Solver',
      desc: 'Love solving complex real-world engineering problems',
    },
    {
      icon: <Layers size={22} color="#A855F7" />,
      accent: '#A855F7',
      accentRgb: '168, 85, 247',
      title: 'Builder',
      desc: 'Enjoy architecting robust, end-to-end applications',
    },
    {
      icon: <TrendingUp size={22} color="#10B981" />,
      accent: '#10B981',
      accentRgb: '16, 185, 129',
      title: 'Lifelong Learner',
      desc: 'Always exploring cutting-edge AI and edge technologies',
    },
  ];

  const statCards = [
    {
      value: '2+',
      label: 'Major Projects',
      sub: 'Built & Deployed',
      color: '#22D3EE',
      colorRgb: '34, 211, 238',
      icon: <Code2 size={18} color="#22D3EE" />,
    },
    {
      value: '10+',
      label: 'Technologies',
      sub: 'Worked With',
      color: '#38BDF8',
      colorRgb: '56, 189, 248',
      icon: <Layers size={18} color="#38BDF8" />,
    },
    {
      value: '15+',
      label: 'Hackathon',
      sub: 'Participations',
      color: '#A855F7',
      colorRgb: '168, 85, 247',
      icon: <Trophy size={18} color="#A855F7" />,
    },
    {
      value: '∞',
      label: 'Learning',
      sub: 'Everyday',
      color: '#10B981',
      colorRgb: '16, 185, 129',
      icon: <BookOpen size={18} color="#10B981" />,
    },
  ];

  return (
    <section id="about" className="section" style={{ background: '#080B12', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
        {/* ================= SECTION HEADER ================= */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              color: '#22D3EE',
              fontSize: '0.88rem',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.05em',
              marginBottom: '0.85rem',
            }}
          >
            <UserRound size={15} color="#22D3EE" />
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
            <span style={{ color: '#F5F7FA' }}>Driven by Code, </span>
            <span
              style={{
                background: 'linear-gradient(135deg, #22D3EE 0%, #38BDF8 50%, #3B82F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Focused on Engineering
            </span>
          </h2>

          <p
            style={{
              fontSize: '1.02rem',
              color: '#9CA3AF',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            I am Divyansh Gupta, an engineering student and developer focused on building dependable software systems, intelligent algorithms, and hardware edge solutions.
          </p>
        </div>

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
              <div
                key={idx}
                className="about-focus-card"
                style={{
                  background: '#0B121C',
                  border: '1px solid rgba(148, 163, 184, 0.20)',
                  borderRadius: '14px',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `rgba(${item.accentRgb}, 0.08)`,
                    border: `1px solid rgba(${item.accentRgb}, 0.35)`,
                    boxShadow: `0 0 16px rgba(${item.accentRgb}, 0.12)`,
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
                      color: '#F5F7FA',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: '0.88rem',
                      color: '#9CA3AF',
                      lineHeight: 1.45,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
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
              <div
                key={idx}
                className="about-stat-box"
                style={{
                  background: '#0B121C',
                  border: '1px solid rgba(148, 163, 184, 0.20)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
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
                      background: `rgba(${stat.colorRgb}, 0.08)`,
                      border: `1px solid rgba(${stat.colorRgb}, 0.35)`,
                      boxShadow: `0 0 14px rgba(${stat.colorRgb}, 0.12)`,
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
                      color: '#F5F7FA',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: '0.84rem',
                      color: '#9CA3AF',
                    }}
                  >
                    {stat.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM QUOTE STRIP ================= */}
        <div
          style={{
            background: '#0B121C',
            border: '1px solid rgba(148, 163, 184, 0.20)',
            borderRadius: '14px',
            padding: '1.4rem 2rem',
            marginTop: '3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
          }}
          className="about-quote-strip"
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'rgba(34, 211, 238, 0.08)',
              border: '1px solid rgba(34, 211, 238, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Quote size={22} color="#22D3EE" />
          </div>

          <div style={{ fontSize: '0.96rem', lineHeight: 1.6 }}>
            <span style={{ color: '#F5F7FA' }}>
              I build with purpose, solve with curiosity, and learn with consistency.
            </span>
            <br />
            <span style={{ color: '#22D3EE', fontWeight: 600 }}>
              Engineering is not just what I study — it's what I live every day.
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .about-focus-card:hover {
          transform: translateY(-2px);
          border-color: rgba(34, 211, 238, 0.4) !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45) !important;
        }
        .about-stat-box:hover {
          transform: translateY(-3px);
          border-color: rgba(34, 211, 238, 0.4) !important;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.45) !important;
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
