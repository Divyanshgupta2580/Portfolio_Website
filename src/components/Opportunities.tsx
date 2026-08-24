import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { Sparkles, CheckCircle2, ArrowRight, Code2, Briefcase, Server } from 'lucide-react';

interface OpportunitiesProps {
  onSelectOpportunity: (opportunityType: string) => void;
}

export const Opportunities: React.FC<OpportunitiesProps> = ({ onSelectOpportunity }) => {
  const getCardTheme = (type: string) => {
    switch (type) {
      case 'Internship':
        return {
          icon: <Code2 size={22} color="var(--accent-cyan)" />,
          accentColor: 'var(--accent-cyan)',
          badgeColor: 'var(--accent-cyan)',
          badgeBg: 'var(--accent-cyan-subtle)',
          badgeBorder: '1px solid var(--accent-cyan-border)',
          iconBg: 'var(--accent-cyan-subtle)',
          iconBorder: '1px solid var(--accent-cyan-border)',
          iconGlow: '0 0 16px var(--accent-cyan-glow)',
          btnBorder: '1px solid var(--accent-cyan)',
          btnColor: 'var(--accent-cyan)',
          btnBg: 'var(--accent-cyan-subtle)',
          btnHoverGlow: '0 0 20px var(--accent-cyan-glow)',
          className: 'btn-talk-cyan',
        };
      case 'Collaboration':
        return {
          icon: <Sparkles size={22} color="var(--accent-purple)" />,
          accentColor: 'var(--accent-purple)',
          badgeColor: 'var(--accent-purple)',
          badgeBg: 'var(--accent-purple-subtle)',
          badgeBorder: '1px solid var(--accent-purple-border)',
          iconBg: 'var(--accent-purple-subtle)',
          iconBorder: '1px solid var(--accent-purple-border)',
          iconGlow: '0 0 16px var(--accent-purple-glow)',
          btnBorder: '1px solid var(--accent-purple)',
          btnColor: 'var(--accent-purple)',
          btnBg: 'var(--accent-purple-subtle)',
          btnHoverGlow: '0 0 20px var(--accent-purple-glow)',
          className: 'btn-talk-purple',
        };
      case 'Freelance / Project':
        return {
          icon: <Server size={22} color="var(--accent-emerald)" />,
          accentColor: 'var(--accent-emerald)',
          badgeColor: 'var(--accent-emerald)',
          badgeBg: 'var(--accent-emerald-subtle)',
          badgeBorder: '1px solid var(--accent-emerald-border)',
          iconBg: 'var(--accent-emerald-subtle)',
          iconBorder: '1px solid var(--accent-emerald-border)',
          iconGlow: '0 0 16px var(--accent-emerald-glow)',
          btnBorder: '1px solid var(--accent-emerald)',
          btnColor: 'var(--accent-emerald)',
          btnBg: 'var(--accent-emerald-subtle)',
          btnHoverGlow: '0 0 20px var(--accent-emerald-glow)',
          className: 'btn-talk-green',
        };
      default:
        return {
          icon: <Code2 size={22} color="var(--accent-cyan)" />,
          accentColor: 'var(--accent-cyan)',
          badgeColor: 'var(--accent-cyan)',
          badgeBg: 'var(--accent-cyan-subtle)',
          badgeBorder: '1px solid var(--accent-cyan-border)',
          iconBg: 'var(--accent-cyan-subtle)',
          iconBorder: '1px solid var(--accent-cyan-border)',
          iconGlow: '0 0 16px var(--accent-cyan-glow)',
          btnBorder: '1px solid var(--accent-cyan)',
          btnColor: 'var(--accent-cyan)',
          btnBg: 'var(--accent-cyan-subtle)',
          btnHoverGlow: '0 0 20px var(--accent-cyan-glow)',
          className: 'btn-talk-cyan',
        };
    }
  };

  return (
    <section id="opportunities" className="section" style={{ background: 'var(--bg-primary)', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
        {/* ================================================== */}
        {/* SECTION HEADER                                      */}
        {/* ================================================== */}
        <ScrollReveal direction="heading" style={{ textAlign: 'center', marginBottom: '3.75rem' }}>
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              color: 'var(--accent-cyan)',
              fontSize: '0.86rem',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
              marginBottom: '0.45rem',
              letterSpacing: '0.05em',
            }}
          >
            <Briefcase size={14} color="var(--accent-cyan)" />
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
            <span style={{ color: 'var(--text-primary)' }}>What I'm </span>
            <span className="text-gradient">Open To</span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '0.98rem',
              color: 'var(--text-secondary)',
              maxWidth: '640px',
              margin: '0.65rem auto 0 auto',
              lineHeight: 1.6,
            }}
          >
            I am actively seeking opportunities to collaborate, learn, and build impactful engineering solutions.
          </p>
        </ScrollReveal>

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
          {PORTFOLIO_DATA.opportunities.map((opp, oppIdx) => {
            const theme = getCardTheme(opp.opportunityType);

            return (
              <ScrollReveal
                key={opp.id}
                direction="up"
                delay={oppIdx * 100}
                style={{ height: '100%' }}
              >
                <div
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-card)',
                    borderRadius: '16px',
                    padding: '2.25rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-card)',
                    transition: 'all 0.25s ease',
                    height: '100%',
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
                      color: 'var(--text-primary)',
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
                      color: 'var(--text-secondary)',
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
                      background: 'var(--border-subtle)',
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
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5, fontWeight: 550 }}>
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
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        .opportunity-card-modern:hover {
          transform: translateY(-4px);
          border-color: var(--accent-cyan-border) !important;
          box-shadow: var(--shadow-card-hover) !important;
        }

        .btn-talk-action:hover {
          transform: translateY(-2px);
        }
        .btn-talk-cyan:hover {
          box-shadow: 0 0 20px var(--accent-cyan-glow) !important;
          background: var(--accent-cyan-subtle) !important;
        }
        .btn-talk-purple:hover {
          box-shadow: 0 0 20px var(--accent-purple-glow) !important;
          background: var(--accent-purple-subtle) !important;
        }
        .btn-talk-green:hover {
          box-shadow: 0 0 20px var(--accent-emerald-glow) !important;
          background: var(--accent-emerald-subtle) !important;
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
