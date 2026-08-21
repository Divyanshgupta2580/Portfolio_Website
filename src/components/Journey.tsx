import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Trophy, Cpu, Bot, Code2, CheckCircle2 } from 'lucide-react';

export const Journey: React.FC = () => {
  const getItemDetails = (idx: number) => {
    switch (idx) {
      case 0: // BenefitOS
        return {
          icon: <Trophy size={18} color="var(--accent-purple)" />,
          accentColor: 'var(--accent-purple)',
          glowShadow: '0 0 16px var(--accent-purple-glow)',
          nodeBorder: '1px solid var(--accent-purple-border)',
          badgeBg: 'var(--accent-purple-subtle)',
          badgeBorder: '1px solid var(--accent-purple-border)',
          badgeColor: 'var(--accent-purple)',
          renderTitle: () => (
            <>
              <span>Benefit</span>
              <span style={{ color: 'var(--accent-cyan)' }}>OS</span>
              <span> — AI Citizen Welfare Discovery Platform</span>
            </>
          ),
        };
      case 1: // JanSetu
        return {
          icon: <Cpu size={18} color="var(--accent-emerald)" />,
          accentColor: 'var(--accent-emerald)',
          glowShadow: '0 0 16px var(--accent-emerald-glow)',
          nodeBorder: '1px solid var(--accent-emerald-border)',
          badgeBg: 'var(--accent-emerald-subtle)',
          badgeBorder: '1px solid var(--accent-emerald-border)',
          badgeColor: 'var(--accent-emerald)',
          renderTitle: () => (
            <>
              <span>Jan</span>
              <span style={{ color: 'var(--accent-emerald)' }}>Setu</span>
              <span> — Autonomous Streetlight Failure System</span>
            </>
          ),
        };
      case 2: // TRON
        return {
          icon: <Bot size={18} color="var(--accent-blue)" />,
          accentColor: 'var(--accent-blue)',
          glowShadow: '0 0 16px rgba(59, 130, 246, 0.25)',
          nodeBorder: '1px solid rgba(59, 130, 246, 0.45)',
          badgeBg: 'rgba(59, 130, 246, 0.08)',
          badgeBorder: '1px solid rgba(59, 130, 246, 0.35)',
          badgeColor: 'var(--accent-blue)',
          renderTitle: () => (
            <>
              <span>TR</span>
              <span style={{ color: 'var(--accent-blue)' }}>ON</span>
              <span> — Autonomous AI Agent</span>
            </>
          ),
        };
      default: // Ongoing
        return {
          icon: <Code2 size={18} color="var(--accent-cyan)" />,
          accentColor: 'var(--accent-cyan)',
          glowShadow: '0 0 16px var(--accent-cyan-glow)',
          nodeBorder: '1px solid var(--accent-cyan-border)',
          badgeBg: 'var(--accent-cyan-subtle)',
          badgeBorder: '1px solid var(--accent-cyan-border)',
          badgeColor: 'var(--accent-cyan)',
          renderTitle: () => <span>Building &amp; Technical Collaboration</span>,
        };
    }
  };

  return (
    <section id="journey" className="section" style={{ background: 'var(--bg-primary)', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
        {/* Continuous Left Timeline Container */}
        <div style={{ position: 'relative' }} className="journey-timeline-wrapper">
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: 'absolute',
              top: '22px',
              bottom: '40px',
              left: '21px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-purple) 0%, var(--accent-emerald) 35%, var(--accent-cyan) 70%, var(--accent-blue) 100%)',
              zIndex: 1,
            }}
            className="journey-vertical-line"
          />

          {/* Timeline Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.75rem' }}>
            {PORTFOLIO_DATA.journey.map((item, idx) => {
              const details = getItemDetails(idx);

              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '2.25rem',
                    position: 'relative',
                  }}
                  className="journey-item-row"
                >
                  {/* Glowing Circular Timeline Node */}
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'var(--bg-card)',
                      border: details.nodeBorder,
                      boxShadow: details.glowShadow,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      zIndex: 2,
                      marginTop: '0.25rem',
                    }}
                    className="journey-node-box"
                  >
                    {details.icon}
                  </div>

                  {/* Right Content Area */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Header Row: Year / Category + Upper Right Badge */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        marginBottom: '0.85rem',
                        padding: '0 0.25rem',
                      }}
                      className="journey-meta-row"
                    >
                      {/* Left: Year & Category */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                        <span
                          style={{
                            fontSize: '1rem',
                            fontWeight: 750,
                            color: details.accentColor,
                          }}
                        >
                          {item.year}
                        </span>
                        <span
                          style={{
                            fontSize: '0.82rem',
                            fontWeight: 650,
                            color: 'var(--text-secondary)',
                            letterSpacing: '0.04em',
                          }}
                        >
                          {item.organization}
                        </span>
                      </div>

                      {/* Right: Badge */}
                      {item.badge && (
                        <span
                          style={{
                            padding: '0.3rem 0.85rem',
                            borderRadius: '6px',
                            background: details.badgeBg,
                            border: details.badgeBorder,
                            color: details.badgeColor,
                            fontSize: '0.78rem',
                            fontFamily: 'var(--font-mono)',
                            fontWeight: 600,
                            letterSpacing: '0.02em',
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Timeline Milestone Card */}
                    <div
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-card)',
                        borderRadius: '16px',
                        padding: '2.25rem 2.5rem',
                        boxShadow: 'var(--shadow-card)',
                        transition: 'all 0.25s ease',
                      }}
                      className="journey-card"
                    >
                      {/* Title (Centered) */}
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)',
                          fontWeight: 750,
                          color: 'var(--text-primary)',
                          textAlign: 'center',
                          margin: '0 0 0.65rem 0',
                          lineHeight: 1.3,
                        }}
                      >
                        {details.renderTitle()}
                      </h3>

                      {/* Description (Centered) */}
                      <p
                        style={{
                          fontSize: '0.94rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.65,
                          textAlign: 'center',
                          maxWidth: '720px',
                          margin: '0 auto 1.6rem auto',
                        }}
                      >
                        {item.description}
                      </p>

                      {/* Highlights with Checkmarks */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.65rem',
                          maxWidth: '680px',
                          margin: '0 auto',
                        }}
                      >
                        {item.highlights.map((h, hIdx) => (
                          <div
                            key={hIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.65rem',
                              color: 'var(--text-primary)',
                              fontSize: '0.92rem',
                              lineHeight: 1.5,
                            }}
                          >
                            <CheckCircle2
                              size={17}
                              color={details.accentColor}
                              style={{ flexShrink: 0, marginTop: '0.15rem' }}
                            />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Responsive Journey Styles */}
      <style>{`
        .journey-card:hover {
          border-color: var(--accent-cyan-border) !important;
          transform: translateY(-2px);
          box-shadow: var(--shadow-card-hover) !important;
        }

        @media (max-width: 768px) {
          .journey-timeline-wrapper {
            padding-left: 0;
          }
          .journey-vertical-line {
            left: 17px !important;
          }
          .journey-node-box {
            width: 36px !important;
            height: 36px !important;
          }
          .journey-item-row {
            gap: 1.25rem !important;
          }
          .journey-card {
            padding: 1.65rem 1.25rem !important;
          }
          .journey-card h3, .journey-card p {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
};
