import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code2, Layers, Sparkles, Database, Cpu, LayoutGrid } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All', icon: <LayoutGrid size={15} /> },
    { id: 'languages', label: 'Languages', icon: <Code2 size={15} /> },
    { id: 'frameworks', label: 'Frameworks', icon: <Layers size={15} /> },
    { id: 'ai', label: 'AI / ML', icon: <Sparkles size={15} /> },
    { id: 'databases', label: 'Databases', icon: <Database size={15} /> },
    { id: 'hardware', label: 'Hardware', icon: <Cpu size={15} /> },
  ];

  // Map category to tab ID
  const mapCategoryToTab = (title: string) => {
    if (title.includes('Languages')) return 'languages';
    if (title.includes('Software') || title.includes('Mobile')) return 'frameworks';
    if (title.includes('AI') || title.includes('Machine')) return 'ai';
    if (title.includes('Databases')) return 'databases';
    if (title.includes('Hardware')) return 'hardware';
    return 'all';
  };

  const getCategoryTheme = (title: string) => {
    if (title.includes('Languages')) {
      return {
        accent: '#22D3EE',
        accentRgb: '34, 211, 238',
        icon: <Code2 size={20} color="#22D3EE" />,
      };
    }
    if (title.includes('Software') || title.includes('Mobile')) {
      return {
        accent: '#38BDF8',
        accentRgb: '56, 189, 248',
        icon: <Layers size={20} color="#38BDF8" />,
      };
    }
    if (title.includes('AI') || title.includes('Machine')) {
      return {
        accent: '#A855F7',
        accentRgb: '168, 85, 247',
        icon: <Sparkles size={20} color="#A855F7" />,
      };
    }
    if (title.includes('Databases')) {
      return {
        accent: '#22D3EE',
        accentRgb: '34, 211, 238',
        icon: <Database size={20} color="#22D3EE" />,
      };
    }
    if (title.includes('Hardware')) {
      return {
        accent: '#10B981',
        accentRgb: '16, 185, 129',
        icon: <Cpu size={20} color="#10B981" />,
      };
    }
    return {
      accent: '#22D3EE',
      accentRgb: '34, 211, 238',
      icon: <Code2 size={20} color="#22D3EE" />,
    };
  };

  // Primary 3 flagship categories for the top grid
  const displayedCategories =
    activeTab === 'all'
      ? PORTFOLIO_DATA.skills.slice(0, 3)
      : PORTFOLIO_DATA.skills.filter((cat) => mapCategoryToTab(cat.title) === activeTab);

  // Dedicated data for the add-on 2-column sections
  const databaseSkills = [
    { name: 'Neo4j', tag: 'Graph Relationships', level: 'PROFICIENT' },
    { name: 'Git & GitHub', tag: 'Version Control', level: 'PROFICIENT' },
    { name: 'RESTful APIs', tag: 'Integration', level: 'PROFICIENT' },
    { name: 'Docker', tag: 'Containerization', level: 'INTERMEDIATE' },
  ];

  const hardwareSkills = [
    { name: 'Arduino UNO', tag: 'MCU + Linux MPU', level: 'PROFICIENT' },
    { name: 'Embedded C++', tag: 'Microcontroller Logic', level: 'PROFICIENT' },
    { name: 'IoT Sensor Arrays', tag: 'LDR & Telemetry', level: 'PROFICIENT' },
    { name: 'Edge Computing', tag: 'Local Diagnostics', level: 'INTERMEDIATE' },
  ];

  return (
    <section id="skills" className="section" style={{ background: '#080B12', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
        {/* ================= SECTION HEADER ================= */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#22D3EE',
              fontSize: '0.88rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.05em',
              marginBottom: '0.85rem',
            }}
          >
            &lt;/&gt; Tech Stack
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
            <span style={{ color: '#F5F7FA' }}>Skills & </span>
            <span
              style={{
                background: 'linear-gradient(135deg, #22D3EE 0%, #38BDF8 50%, #3B82F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Technologies
            </span>
          </h2>

          <p
            style={{
              fontSize: '1.02rem',
              color: '#9CA3AF',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.65,
              marginBottom: '2.5rem',
            }}
          >
            A curated breakdown of programming languages, frameworks, AI architectures, and embedded hardware systems I work with.
          </p>

          {/* ================= FILTER PILLS ROW ================= */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className="skills-filter-container"
          >
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '0.5rem 1.15rem',
                    borderRadius: '10px',
                    background: isActive ? 'rgba(34, 211, 238, 0.08)' : '#0B121C',
                    border: '1px solid',
                    borderColor: isActive ? '#22D3EE' : 'rgba(148, 163, 184, 0.22)',
                    color: isActive ? '#22D3EE' : '#9CA3AF',
                    fontFamily: 'var(--font-main)',
                    fontSize: '0.86rem',
                    fontWeight: 650,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: isActive ? '0 0 16px rgba(34, 211, 238, 0.2)' : 'none',
                  }}
                  className="skills-tab-pill"
                >
                  <span style={{ color: isActive ? '#22D3EE' : 'inherit', display: 'flex', alignItems: 'center' }}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= PRIMARY SKILLS GRID ================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              displayedCategories.length === 1
                ? 'minmax(320px, 500px)'
                : displayedCategories.length === 2
                ? 'repeat(2, 1fr)'
                : 'repeat(3, 1fr)',
            gap: '1.5rem',
            justifyContent: 'center',
          }}
          className="skills-main-grid"
        >
          {displayedCategories.map((category, idx) => {
            const theme = getCategoryTheme(category.title);
            return (
              <div
                key={idx}
                className="skill-category-box"
                style={{
                  background: '#0B121C',
                  border: '1px solid rgba(148, 163, 184, 0.20)',
                  borderRadius: '16px',
                  padding: '1.6rem 1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.25s ease',
                }}
              >
                <div>
                  {/* Category Header: Icon + Title */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: `rgba(${theme.accentRgb}, 0.08)`,
                        border: `1px solid rgba(${theme.accentRgb}, 0.35)`,
                        boxShadow: `0 0 14px rgba(${theme.accentRgb}, 0.12)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {theme.icon}
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: '#F5F7FA',
                        lineHeight: 1.25,
                      }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Category Description */}
                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: '#9CA3AF',
                      lineHeight: 1.5,
                      marginBottom: '1.5rem',
                      minHeight: '2.6rem',
                    }}
                  >
                    {category.description}
                  </p>

                  {/* 2-Column Internal Grid of Individual Skill Cards */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '0.75rem',
                    }}
                    className="skill-cards-subgrid"
                  >
                    {category.skills.map((skill, sIdx) => {
                      const isIntermediate = skill.level?.toLowerCase() === 'intermediate';
                      const badgeColor = isIntermediate ? '#C084FC' : theme.accent;
                      const badgeBg = isIntermediate
                        ? 'rgba(168, 85, 247, 0.1)'
                        : `rgba(${theme.accentRgb}, 0.1)`;
                      const badgeBorder = isIntermediate
                        ? 'rgba(168, 85, 247, 0.35)'
                        : `rgba(${theme.accentRgb}, 0.35)`;

                      const isLastOdd = category.skills.length % 2 !== 0 && sIdx === category.skills.length - 1;

                      return (
                        <div
                          key={sIdx}
                          className="individual-skill-card"
                          style={{
                            gridColumn: isLastOdd ? 'span 2' : 'auto',
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid rgba(120, 150, 180, 0.18)',
                            borderRadius: '10px',
                            padding: '0.9rem 1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '92px',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <div>
                            <div
                              style={{
                                fontWeight: 700,
                                fontSize: '0.94rem',
                                color: '#F5F7FA',
                                marginBottom: '0.2rem',
                              }}
                            >
                              {skill.name}
                            </div>
                            <div
                              style={{
                                fontSize: '0.76rem',
                                color: '#9CA3AF',
                                lineHeight: 1.35,
                                marginBottom: '0.65rem',
                              }}
                            >
                              {skill.tag}
                            </div>
                          </div>

                          <div>
                            <span
                              style={{
                                fontSize: '0.68rem',
                                fontFamily: 'var(--font-mono)',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.04em',
                                padding: '0.2rem 0.55rem',
                                borderRadius: '4px',
                                color: badgeColor,
                                background: badgeBg,
                                border: `1px solid ${badgeBorder}`,
                                display: 'inline-flex',
                              }}
                            >
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================================================== */}
        {/* NEW SKILLS ADD-ON: DATABASES & HARDWARE 2-COL GRID */}
        {/* ================================================== */}
        {(activeTab === 'all' || activeTab === 'databases' || activeTab === 'hardware') && (
          <div
            style={{
              marginTop: '4rem',
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: activeTab === 'all' ? '1fr 1fr' : '1fr',
              gap: '3rem',
              alignItems: 'start',
            }}
            className="skills-addon-two-col"
          >
            {/* Subtle Vertical Divider between the two columns */}
            {activeTab === 'all' && (
              <div
                style={{
                  position: 'absolute',
                  top: '5%',
                  bottom: '5%',
                  left: '50%',
                  width: '1px',
                  background: 'rgba(120, 150, 180, 0.16)',
                  transform: 'translateX(-50%)',
                }}
                className="skills-addon-divider"
              />
            )}

            {/* ----- COLUMN 1: DATABASES & INFRASTRUCTURE ----- */}
            {(activeTab === 'all' || activeTab === 'databases') && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(34, 211, 238, 0.08)',
                      border: '1px solid rgba(34, 211, 238, 0.35)',
                      boxShadow: '0 0 16px rgba(34, 211, 238, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Database size={22} color="#22D3EE" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#F5F7FA',
                        margin: 0,
                      }}
                    >
                      Databases &amp; Infrastructure
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: '#9CA3AF', lineHeight: 1.5, marginBottom: '1.5rem', marginLeft: '3.9rem' }}>
                  Graph databases, version control, and containerized deployment.
                </p>

                {/* 2 × 2 Skill Cards */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                  }}
                  className="addon-subgrid"
                >
                  {databaseSkills.map((sk, sIdx) => {
                    const isIntermediate = sk.level === 'INTERMEDIATE';
                    return (
                      <div
                        key={sIdx}
                        className="addon-skill-card"
                        style={{
                          background: '#0B121C',
                          border: '1px solid rgba(148, 163, 184, 0.20)',
                          borderRadius: '12px',
                          padding: '1.15rem 1.25rem',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          minHeight: '115px',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '1rem', color: '#F5F7FA', marginBottom: '0.25rem' }}>
                            {sk.name}
                          </div>
                          <div style={{ fontSize: '0.8rem', color: '#9CA3AF', lineHeight: 1.35, marginBottom: '0.75rem' }}>
                            {sk.tag}
                          </div>
                        </div>

                        <div>
                          <span
                            style={{
                              fontSize: '0.7rem',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.04em',
                              padding: '0.22rem 0.6rem',
                              borderRadius: '4px',
                              color: isIntermediate ? '#C084FC' : '#22D3EE',
                              background: isIntermediate ? 'rgba(168, 85, 247, 0.1)' : 'rgba(34, 211, 238, 0.1)',
                              border: `1px solid ${isIntermediate ? 'rgba(168, 85, 247, 0.35)' : 'rgba(34, 211, 238, 0.35)'}`,
                              display: 'inline-flex',
                            }}
                          >
                            {sk.level}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ----- COLUMN 2: HARDWARE & EDGE COMPUTING ----- */}
            {(activeTab === 'all' || activeTab === 'hardware') && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(16, 185, 129, 0.08)',
                      border: '1px solid rgba(16, 185, 129, 0.35)',
                      boxShadow: '0 0 16px rgba(16, 185, 129, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Cpu size={22} color="#10B981" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#F5F7FA',
                        margin: 0,
                      }}
                    >
                      Hardware &amp; Edge Computing
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: '#9CA3AF', lineHeight: 1.5, marginBottom: '1.5rem', marginLeft: '3.9rem' }}>
                  Edge computing, microcontrollers, and sensor integration.
                </p>

                {/* 2 × 2 Skill Cards */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                  }}
                  className="addon-subgrid"
                >
                  {hardwareSkills.map((sk, sIdx) => {
                    const isIntermediate = sk.level === 'INTERMEDIATE';
                    return (
                      <div
                        key={sIdx}
                        className="addon-skill-card"
                        style={{
                          background: '#0B121C',
                          border: '1px solid rgba(148, 163, 184, 0.20)',
                          borderRadius: '12px',
                          padding: '1.15rem 1.25rem',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          minHeight: '115px',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '1rem', color: '#F5F7FA', marginBottom: '0.25rem' }}>
                            {sk.name}
                          </div>
                          <div style={{ fontSize: '0.8rem', color: '#9CA3AF', lineHeight: 1.35, marginBottom: '0.75rem' }}>
                            {sk.tag}
                          </div>
                        </div>

                        <div>
                          <span
                            style={{
                              fontSize: '0.7rem',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.04em',
                              padding: '0.22rem 0.6rem',
                              borderRadius: '4px',
                              color: isIntermediate ? '#C084FC' : '#22D3EE',
                              background: isIntermediate ? 'rgba(168, 85, 247, 0.1)' : 'rgba(34, 211, 238, 0.1)',
                              border: `1px solid ${isIntermediate ? 'rgba(168, 85, 247, 0.35)' : 'rgba(34, 211, 238, 0.35)'}`,
                              display: 'inline-flex',
                            }}
                          >
                            {sk.level}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Styles for hover and responsive behavior */}
      <style>{`
        .skills-tab-pill:hover {
          border-color: #22D3EE !important;
          color: #F5F7FA !important;
          background: rgba(34, 211, 238, 0.05) !important;
        }
        .skill-category-box:hover {
          border-color: rgba(34, 211, 238, 0.35) !important;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.5) !important;
          transform: translateY(-2px);
        }
        .individual-skill-card:hover, .addon-skill-card:hover {
          border-color: rgba(34, 211, 238, 0.4) !important;
          background: rgba(255, 255, 255, 0.04) !important;
          transform: translateY(-2px);
        }

        @media (max-width: 992px) {
          .skills-main-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .skills-addon-two-col {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .skills-addon-divider {
            display: none !important;
          }
        }

        @media (max-width: 680px) {
          .featured-projects-intro-panel {
            flex-direction: column !important;
            padding: 1.5rem !important;
            text-align: center !important;
            gap: 1.25rem !important;
          }
          .intro-trophy-box, .intro-rocket-box {
            display: none !important;
          }
          .addon-subgrid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 540px) {
          .skill-cards-subgrid {
            grid-template-columns: 1fr !important;
          }
          .individual-skill-card {
            grid-column: auto !important;
          }
        }
      `}</style>
    </section>
  );
};
