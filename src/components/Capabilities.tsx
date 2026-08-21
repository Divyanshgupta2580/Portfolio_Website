import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code2, Network, Layers, Cpu, Server, Cloud } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const getCardTheme = (num: string) => {
    switch (num) {
      case '01':
        return {
          accent: '#22D3EE',
          accentRgb: '34, 211, 238',
          tagText: '#38BDF8',
          icon: <Code2 size={22} color="#22D3EE" />,
        };
      case '02':
        return {
          accent: '#A855F7',
          accentRgb: '168, 85, 247',
          tagText: '#C084FC',
          icon: <Network size={22} color="#A855F7" />,
        };
      case '03':
        return {
          accent: '#3B82F6',
          accentRgb: '59, 130, 246',
          tagText: '#60A5FA',
          icon: <Layers size={22} color="#3B82F6" />,
        };
      case '04':
        return {
          accent: '#10B981',
          accentRgb: '16, 185, 129',
          tagText: '#34D399',
          icon: <Cpu size={22} color="#10B981" />,
        };
      case '05':
        return {
          accent: '#22D3EE',
          accentRgb: '34, 211, 238',
          tagText: '#38BDF8',
          icon: <Server size={22} color="#22D3EE" />,
        };
      case '06':
        return {
          accent: '#F59E0B',
          accentRgb: '245, 158, 11',
          tagText: '#FBBF24',
          icon: <Cloud size={22} color="#F59E0B" />,
        };
      default:
        return {
          accent: '#22D3EE',
          accentRgb: '34, 211, 238',
          tagText: '#38BDF8',
          icon: <Code2 size={22} color="#22D3EE" />,
        };
    }
  };

  return (
    <section id="capabilities" className="section" style={{ background: '#080B12', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* ================= SECTION HEADER ================= */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#22D3EE',
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
            <span style={{ color: '#F5F7FA' }}>Engineering </span>
            <span
              style={{
                background: 'linear-gradient(135deg, #22D3EE 0%, #38BDF8 50%, #3B82F6 100%)',
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
              color: '#9CA3AF',
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
                  background: '#0B121C',
                  border: '1px solid rgba(148, 163, 184, 0.22)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: 'center',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
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
                      color: '#F5F7FA',
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
                      color: '#9CA3AF',
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
                        background: 'rgba(255, 255, 255, 0.02)',
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
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.55), 0 0 20px rgba(var(--card-accent-rgb), 0.15) !important;
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
