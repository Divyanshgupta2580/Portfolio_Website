import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Sparkles, CheckCircle2, ArrowRight, Code2, Briefcase, Cpu } from 'lucide-react';

interface OpportunitiesProps {
  onSelectOpportunity: (opportunityType: string) => void;
}

export const Opportunities: React.FC<OpportunitiesProps> = ({ onSelectOpportunity }) => {
  const getCardTheme = (type: string) => {
    switch (type) {
      case 'Internship':
        return {
          icon: <Code2 size={22} color="#22D3EE" />,
          accentColor: '#22D3EE',
          badgeColor: '#22D3EE',
          badgeBg: 'rgba(34, 211, 238, 0.08)',
          badgeBorder: '1px solid rgba(34, 211, 238, 0.35)',
          iconBg: 'rgba(34, 211, 238, 0.08)',
          iconBorder: '1px solid rgba(34, 211, 238, 0.35)',
          iconGlow: '0 0 16px rgba(34, 211, 238, 0.15)',
          btnBorder: '1px solid #22D3EE',
          btnColor: '#22D3EE',
          btnBg: 'rgba(34, 211, 238, 0.05)',
          btnHoverGlow: '0 0 20px rgba(34, 211, 238, 0.35)',
          className: 'btn-talk-cyan',
        };
      case 'Collaboration':
        return {
          icon: <Sparkles size={22} color="#A855F7" />,
          accentColor: '#A855F7',
          badgeColor: '#C084FC',
          badgeBg: 'rgba(168, 85, 247, 0.08)',
          badgeBorder: '1px solid rgba(168, 85, 247, 0.35)',
          iconBg: 'rgba(168, 85, 247, 0.08)',
          iconBorder: '1px solid rgba(168, 85, 247, 0.35)',
          iconGlow: '0 0 16px rgba(168, 85, 247, 0.15)',
          btnBorder: '1px solid #A855F7',
          btnColor: '#C084FC',
          btnBg: 'rgba(168, 85, 247, 0.05)',
          btnHoverGlow: '0 0 20px rgba(168, 85, 247, 0.35)',
          className: 'btn-talk-purple',
        };
      case 'Freelance / Project':
        return {
          icon: <Cpu size={22} color="#10B981" />,
          accentColor: '#10B981',
          badgeColor: '#34D399',
          badgeBg: 'rgba(16, 185, 129, 0.08)',
          badgeBorder: '1px solid rgba(16, 185, 129, 0.35)',
          iconBg: 'rgba(16, 185, 129, 0.08)',
          iconBorder: '1px solid rgba(16, 185, 129, 0.35)',
          iconGlow: '0 0 16px rgba(16, 185, 129, 0.15)',
          btnBorder: '1px solid #10B981',
          btnColor: '#34D399',
          btnBg: 'rgba(16, 185, 129, 0.05)',
          btnHoverGlow: '0 0 20px rgba(16, 185, 129, 0.35)',
          className: 'btn-talk-green',
        };
      default:
        return {
          icon: <Code2 size={22} color="#22D3EE" />,
          accentColor: '#22D3EE',
          badgeColor: '#22D3EE',
          badgeBg: 'rgba(34, 211, 238, 0.08)',
          badgeBorder: '1px solid rgba(34, 211, 238, 0.35)',
          iconBg: 'rgba(34, 211, 238, 0.08)',
          iconBorder: '1px solid rgba(34, 211, 238, 0.35)',
          iconGlow: '0 0 16px rgba(34, 211, 238, 0.15)',
          btnBorder: '1px solid #22D3EE',
          btnColor: '#22D3EE',
          btnBg: 'rgba(34, 211, 238, 0.05)',
          btnHoverGlow: '0 0 20px rgba(34, 211, 238, 0.35)',
          className: 'btn-talk-cyan',
        };
    }
  };

  return (
    <section id="opportunities" className="section" style={{ background: '#080B12', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
        {/* ================================================== */}
        {/* SECTION HEADER                                      */}
        {/* ================================================== */}
        <div style={{ textAlign: 'center', marginBottom: '3.75rem' }}>
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              color: '#22D3EE',
              fontSize: '0.86rem',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
              marginBottom: '0.45rem',
              letterSpacing: '0.05em',
            }}
          >
            <Briefcase size={14} color="#22D3EE" />
            <span>Opportunities</span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            <span style={{ color: '#F5F7FA' }}>What I'm </span>
            <span
              style={{
                background: 'linear-gradient(135deg, #22D3EE 0%, #38BDF8 50%, #3B82F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Open To
            </span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '0.98rem',
              color: '#9CA3AF',
              maxWidth: '640px',
              margin: '0.65rem auto 0 auto',
              lineHeight: 1.6,
            }}
          >
            I am actively seeking opportunities to collaborate, learn, and build impactful engineering solutions.
          </p>
        </div>

        {/* ================================================== */}
        {/* THREE OPPORTUNITY CARDS                            */}
        {/* ================================================== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.75rem',
            alignItems: 'stretch',
          }}
          className="opportunities-grid"
        >
          {PORTFOLIO_DATA.opportunities.map((opp) => {
            const theme = getCardTheme(opp.opportunityType);

            return (
              <div
                key={opp.id}
                style={{
                  background: '#0B121C',
                  border: '1px solid rgba(148, 163, 184, 0.18)',
                  borderRadius: '16px',
                  padding: '2.25rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
                  transition: 'all 0.25s ease',
                }}
                className="opportunity-card-modern"
              >
                <div>
                  {/* Top: Icon Box (Left) + Badge (Right) */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {/* Rounded Square Icon Box */}
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: theme.iconBg,
                        border: theme.iconBorder,
                        boxShadow: theme.iconGlow,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {theme.icon}
                    </div>

                    {/* Badge */}
                    {opp.badge && (
                      <span
                        style={{
                          padding: '0.3rem 0.8rem',
                          borderRadius: '6px',
                          background: theme.badgeBg,
                          border: theme.badgeBorder,
                          color: theme.badgeColor,
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 650,
                          letterSpacing: '0.02em',
                        }}
                      >
                        {opp.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.32rem',
                      fontWeight: 750,
                      color: '#F5F7FA',
                      marginBottom: '0.45rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {opp.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: '#9CA3AF',
                      lineHeight: 1.6,
                      marginBottom: '1.4rem',
                      minHeight: '44px',
                    }}
                  >
                    {opp.description}
                  </p>

                  {/* Subtle Horizontal Divider */}
                  <div
                    style={{
                      height: '1px',
                      background: 'rgba(148, 163, 184, 0.14)',
                      marginBottom: '1.4rem',
                    }}
                  />

                  {/* Capabilities List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                    {opp.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <CheckCircle2
                          size={16}
                          color={theme.accentColor}
                          style={{ marginTop: '0.15rem', flexShrink: 0 }}
                        />
                        <span style={{ fontSize: '0.9rem', color: '#F5F7FA', lineHeight: 1.5, fontWeight: 550 }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Full-Width Outlined Action Button */}
                <button
                  onClick={() => onSelectOpportunity(opp.opportunityType)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1.25rem',
                    borderRadius: '8px',
                    background: theme.btnBg,
                    border: theme.btnBorder,
                    color: theme.btnColor,
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.55rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  className={`btn-talk-action ${theme.className}`}
                >
                  <span>Let's Talk</span>
                  <ArrowRight size={16} className="btn-arrow" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        .opportunity-card-modern:hover {
          transform: translateY(-4px);
          border-color: rgba(148, 163, 184, 0.35) !important;
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.5) !important;
        }

        .btn-talk-action:hover {
          transform: translateY(-2px);
        }
        .btn-talk-cyan:hover {
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.4) !important;
          background: rgba(34, 211, 238, 0.12) !important;
        }
        .btn-talk-purple:hover {
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.4) !important;
          background: rgba(168, 85, 247, 0.12) !important;
        }
        .btn-talk-green:hover {
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.4) !important;
          background: rgba(16, 185, 129, 0.12) !important;
        }
        .btn-talk-action:hover .btn-arrow {
          transform: translateX(3px);
        }
        .btn-arrow {
          transition: transform 0.2s ease;
        }

        @media (max-width: 1024px) {
          .opportunities-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 768px) {
          .opportunities-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .opportunity-card-modern {
            padding: 1.85rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
