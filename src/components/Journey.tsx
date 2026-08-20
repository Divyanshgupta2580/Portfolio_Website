import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Compass, GraduationCap, Trophy, Cpu, Code2, CheckCircle2 } from 'lucide-react';

export const Journey: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Education': return <GraduationCap size={18} color="var(--accent-cyan)" />;
      case 'Hackathon': return <Trophy size={18} color="#f59e0b" />;
      case 'Industry/Hardware': return <Cpu size={18} color="#10b981" />;
      default: return <Code2 size={18} color="#3b82f6" />;
    }
  };

  return (
    <section id="journey" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Compass size={14} />
            <span>Milestones & Growth</span>
          </div>
          <h2 className="section-title">Engineering Journey</h2>
          <p className="section-subtitle">
            A chronological timeline of my academic background, hackathon platform developments, hardware innovations, and engineering focus.
          </p>
        </div>

        <div
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            paddingLeft: '1.5rem',
          }}
          className="journey-container"
        >
          {/* Vertical Timeline Guide Line */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              bottom: '10px',
              left: '7px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-cyan) 0%, rgba(59, 130, 246, 0.4) 50%, rgba(255, 255, 255, 0.05) 100%)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {PORTFOLIO_DATA.journey.map((item, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  paddingLeft: '2rem',
                }}
              >
                {/* Timeline Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-1.55rem',
                    top: '0.2rem',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 15px rgba(0, 242, 254, 0.2)',
                  }}
                >
                  {getIcon(item.type)}
                </div>

                {/* Timeline Card */}
                <div className="card" style={{ padding: '1.75rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--accent-cyan)',
                          fontWeight: 600,
                          marginRight: '0.75rem',
                        }}
                      >
                        {item.year}
                      </span>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-dim)',
                          fontFamily: 'var(--font-mono)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.organization}
                      </span>
                    </div>

                    {item.badge && (
                      <span className="section-badge" style={{ marginBottom: 0, padding: '0.2rem 0.6rem', fontSize: '0.72rem' }}>
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {item.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: '0.88rem', color: 'var(--text-main)' }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
