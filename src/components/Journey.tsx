import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Trophy, Cpu, Bot, Code2, CheckCircle2 } from 'lucide-react';

export const Journey: React.FC = () => {
  const getItemDetails = (idx: number) => {
    switch (idx) {
      case 0: // BenefitOS
        return {
          icon: <Trophy size={18} color="#A855F7" />,
          accentColor: '#A855F7',
          glowShadow: '0 0 16px rgba(168, 85, 247, 0.35)',
          nodeBorder: '1px solid rgba(168, 85, 247, 0.5)',
          badgeBg: 'rgba(168, 85, 247, 0.08)',
          badgeBorder: '1px solid rgba(168, 85, 247, 0.35)',
          badgeColor: '#C084FC',
          renderTitle: () => (
            <>
              <span>Benefit</span>
              <span style={{ color: '#22D3EE' }}>OS</span>
              <span> — AI Citizen Welfare Discovery Platform</span>
            </>
          ),
        };
      case 1: // JanSetu
        return {
          icon: <Cpu size={18} color="#10B981" />,
          accentColor: '#10B981',
          glowShadow: '0 0 16px rgba(16, 185, 129, 0.35)',
          nodeBorder: '1px solid rgba(16, 185, 129, 0.5)',
          badgeBg: 'rgba(16, 185, 129, 0.08)',
          badgeBorder: '1px solid rgba(16, 185, 129, 0.35)',
          badgeColor: '#34D399',
          renderTitle: () => (
            <>
              <span>Jan</span>
              <span style={{ color: '#10B981' }}>Setu</span>
              <span> — Autonomous Streetlight Failure System</span>
            </>
          ),
        };
      case 2: // TRON
        return {
          icon: <Bot size={18} color="#38BDF8" />,
          accentColor: '#38BDF8',
          glowShadow: '0 0 16px rgba(56, 189, 248, 0.35)',
          nodeBorder: '1px solid rgba(56, 189, 248, 0.5)',
          badgeBg: 'rgba(56, 189, 248, 0.08)',
          badgeBorder: '1px solid rgba(56, 189, 248, 0.35)',
          badgeColor: '#38BDF8',
          renderTitle: () => (
            <>
              <span>TR</span>
              <span style={{ color: '#38BDF8' }}>ON</span>
              <span> — Autonomous AI Agent</span>
            </>
          ),
        };
      default: // Ongoing
        return {
          icon: <Code2 size={18} color="#3B82F6" />,
          accentColor: '#3B82F6',
          glowShadow: '0 0 16px rgba(59, 130, 246, 0.35)',
          nodeBorder: '1px solid rgba(59, 130, 246, 0.5)',
          badgeBg: 'rgba(59, 130, 246, 0.08)',
          badgeBorder: '1px solid rgba(59, 130, 246, 0.35)',
          badgeColor: '#60A5FA',
          renderTitle: () => <span>Building &amp; Technical Collaboration</span>,
        };
    }
  };

  return (
    <section id="journey" className="section" style={{ background: '#080B12', padding: '6rem 0' }}>
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
              background: 'linear-gradient(180deg, #A855F7 0%, #10B981 35%, #38BDF8 70%, #3B82F6 100%)',
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
                      background: '#0B121C',
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
                            color: '#9CA3AF',
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
                        background: '#0B121C',
                        border: '1px solid rgba(148, 163, 184, 0.18)',
                        borderRadius: '16px',
                        padding: '2.25rem 2.5rem',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
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
                          color: '#F5F7FA',
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
                          color: '#9CA3AF',
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
                              color: '#F5F7FA',
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
          border-color: rgba(148, 163, 184, 0.35) !important;
          transform: translateY(-2px);
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.45) !important;
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
