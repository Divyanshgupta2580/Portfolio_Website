import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code2, Network, Layers, Cpu, Server, Cloud } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const getCardTheme = (num: string) => {
    switch (num) {
      case '01':
        return {
          accent: 'var(--accent-cyan)',
          accentRgb: '34, 211, 238',
          tagText: 'var(--accent-cyan)',
          icon: <Code2 size={22} color="var(--accent-cyan)" />,
        };
      case '02':
        return {
          accent: 'var(--accent-purple)',
          accentRgb: '168, 85, 247',
          tagText: 'var(--accent-purple)',
          icon: <Network size={22} color="var(--accent-purple)" />,
        };
      case '03':
        return {
          accent: 'var(--accent-blue)',
          accentRgb: '59, 130, 246',
          tagText: 'var(--accent-blue)',
          icon: <Layers size={22} color="var(--accent-blue)" />,
        };
      case '04':
        return {
          accent: 'var(--accent-emerald)',
          accentRgb: '16, 185, 129',
          tagText: 'var(--accent-emerald)',
          icon: <Cpu size={22} color="var(--accent-emerald)" />,
        };
      case '05':
        return {
          accent: 'var(--accent-cyan)',
          accentRgb: '34, 211, 238',
          tagText: 'var(--accent-cyan)',
          icon: <Server size={22} color="var(--accent-cyan)" />,
        };
      case '06':
        return {
          accent: 'var(--accent-amber)',
          accentRgb: '245, 158, 11',
          tagText: 'var(--accent-amber)',
          icon: <Cloud size={22} color="var(--accent-amber)" />,
        };
      default:
        return {
          accent: 'var(--accent-cyan)',
          accentRgb: '34, 211, 238',
          tagText: 'var(--accent-cyan)',
          icon: <Code2 size={22} color="var(--accent-cyan)" />,
        };
    }
  };

  return (
    <section id="capabilities" className="section" style={{ background: 'var(--bg-primary)', padding: '6rem 0' }}>
      <div className="container">
        {/* ================= SECTION HEADER ================= */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-cyan)',
              fontSize: '0.9rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.05em',
              marginBottom: '0.85rem',
            }}
          >
            &lt;/ What I Do &gt;
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              lineHeight: 1.15,
            }}
          >
            <span style={{ color: 'var(--text-primary)' }}>Engineering </span>
            <span
              style={{
                background: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-cyan-hover) 50%, var(--accent-blue) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Capabilities
            </span>
          </h2>

          <p
            style={{
              fontSize: '1.02rem',
              color: 'var(--text-secondary)',
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Core domains of practical software engineering, artificial intelligence systems, and hardware edge solutions I build with.
          </p>
        </div>

        {/* ================= 3-COLUMN × 2-ROW GRID ================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
          className="capabilities-grid-layout"
        >
          {PORTFOLIO_DATA.capabilities.map((cap) => {
            const theme = getCardTheme(cap.num);
            return (
              <div
                key={cap.id}
                className="cap-feature-card"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: 'center',
                  transition: 'all var(--transition-normal)',
                  boxShadow: 'var(--shadow-card)',
                  ['--card-accent' as any]: theme.accent,
                  ['--card-accent-rgb' as any]: theme.accentRgb,
                }}
              >
                {/* Top-Left Monospace Number */}
                <span
                  style={{
                    position: 'absolute',
                    top: '22px',
                    left: '24px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: theme.accent,
                    letterSpacing: '0.04em',
                  }}
                >
                  {cap.num}
                </span>

                <div>
                  {/* Top-Center Rounded Square Icon Box */}
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px',
                      background: `rgba(${theme.accentRgb}, 0.08)`,
                      border: `1px solid rgba(${theme.accentRgb}, 0.35)`,
                      boxShadow: `0 0 16px rgba(${theme.accentRgb}, 0.12)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0.25rem auto 1.35rem auto',
                      transition: 'all 0.25s ease',
                    }}
                    className="cap-icon-box"
                  >
                    {theme.icon}
                  </div>

                  {/* Centered Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.85rem',
                      lineHeight: 1.3,
                      textAlign: 'center',
                    }}
                  >
                    {cap.title}
                  </h3>

                  {/* Centered Description */}
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.6rem',
                      textAlign: 'center',
                    }}
                  >
                    {cap.description}
                  </p>
                </div>

                {/* Bottom Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                >
                  {cap.tags.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        padding: '0.32rem 0.72rem',
                        borderRadius: '6px',
                        background: 'var(--bg-secondary)',
                        border: `1px solid rgba(${theme.accentRgb}, 0.28)`,
                        color: theme.tagText,
                        transition: 'all 0.2s ease',
                      }}
                      className="cap-tag-item"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .cap-feature-card:hover {
          transform: translateY(-4px);
          border-color: rgba(var(--card-accent-rgb), 0.45) !important;
          box-shadow: var(--shadow-card-hover) !important;
        }
        .cap-feature-card:hover .cap-icon-box {
          border-color: var(--card-accent) !important;
          box-shadow: 0 0 22px rgba(var(--card-accent-rgb), 0.3) !important;
        }

        @media (max-width: 992px) {
          .capabilities-grid-layout {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.35rem !important;
          }
        }

        @media (max-width: 640px) {
          .capabilities-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};
