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
        accent: 'var(--accent-cyan)',
        accentRgb: '34, 211, 238',
        icon: <Code2 size={20} color="var(--accent-cyan)" />,
      };
    }
    if (title.includes('Software') || title.includes('Mobile')) {
      return {
        accent: 'var(--accent-cyan-hover)',
        accentRgb: '56, 189, 248',
        icon: <Layers size={20} color="var(--accent-cyan-hover)" />,
      };
    }
    if (title.includes('AI') || title.includes('Machine')) {
      return {
        accent: 'var(--accent-purple)',
        accentRgb: '168, 85, 247',
        icon: <Sparkles size={20} color="var(--accent-purple)" />,
      };
    }
    if (title.includes('Databases')) {
      return {
        accent: 'var(--accent-cyan)',
        accentRgb: '34, 211, 238',
        icon: <Database size={20} color="var(--accent-cyan)" />,
      };
    }
    if (title.includes('Hardware')) {
      return {
        accent: 'var(--accent-emerald)',
        accentRgb: '16, 185, 129',
        icon: <Cpu size={20} color="var(--accent-emerald)" />,
      };
    }
    return {
      accent: 'var(--accent-cyan)',
      accentRgb: '34, 211, 238',
      icon: <Code2 size={20} color="var(--accent-cyan)" />,
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
    <section id="skills" className="section" style={{ background: 'var(--bg-primary)', padding: '6rem 0' }}>
      <div className="container">
        {/* ================= SECTION HEADER ================= */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-cyan)',
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
            <span style={{ color: 'var(--text-primary)' }}>Skills &amp; </span>
            <span
              style={{
                background: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-cyan-hover) 50%, var(--accent-blue) 100%)',
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
              color: 'var(--text-secondary)',
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
                    background: isActive ? 'var(--accent-cyan-subtle)' : 'var(--bg-card)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--accent-cyan)' : 'var(--border-card)',
                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-main)',
                    fontSize: '0.86rem',
                    fontWeight: 650,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: isActive ? '0 0 16px var(--accent-cyan-glow)' : 'none',
                  }}
                  className="skills-tab-pill"
                >
                  <span style={{ color: isActive ? 'var(--accent-cyan)' : 'inherit', display: 'flex', alignItems: 'center' }}>
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
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  borderRadius: '16px',
                  padding: '1.6rem 1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'all var(--transition-normal)',
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
                        color: 'var(--text-primary)',
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
                      color: 'var(--text-secondary)',
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
                      const badgeColor = isIntermediate ? 'var(--accent-purple)' : theme.accent;
                      const badgeBg = isIntermediate
                        ? 'var(--accent-purple-subtle)'
                        : `rgba(${theme.accentRgb}, 0.08)`;
                      const badgeBorder = isIntermediate
                        ? 'var(--accent-purple-border)'
                        : `rgba(${theme.accentRgb}, 0.30)`;

                      const isLastOdd = category.skills.length % 2 !== 0 && sIdx === category.skills.length - 1;

                      return (
                        <div
                          key={sIdx}
                          className="individual-skill-card"
                          style={{
                            gridColumn: isLastOdd ? 'span 2' : 'auto',
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--border-subtle)',
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
                                color: 'var(--text-primary)',
                                marginBottom: '0.2rem',
                              }}
                            >
                              {skill.name}
                            </div>
                            <div
                              style={{
                                fontSize: '0.76rem',
                                color: 'var(--text-secondary)',
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
        {/* SKILLS ADD-ON: DATABASES & HARDWARE 2-COL GRID     */}
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
                  background: 'var(--border-subtle)',
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
                      background: 'var(--accent-cyan-subtle)',
                      border: '1px solid var(--accent-cyan-border)',
                      boxShadow: '0 0 16px var(--accent-cyan-glow)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Database size={22} color="var(--accent-cyan)" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        margin: 0,
                      }}
                    >
                      Databases &amp; Infrastructure
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.5rem', marginLeft: '3.9rem' }}>
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
                          background: 'var(--bg-card)',
                          border: '1px solid var(--border-card)',
                          borderRadius: '12px',
                          padding: '1.15rem 1.25rem',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          minHeight: '115px',
                          transition: 'all 0.2s ease',
                          boxShadow: 'var(--shadow-card)',
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                            {sk.name}
                          </div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.35, marginBottom: '0.75rem' }}>
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
                              color: isIntermediate ? 'var(--accent-purple)' : 'var(--accent-cyan)',
                              background: isIntermediate ? 'var(--accent-purple-subtle)' : 'var(--accent-cyan-subtle)',
                              border: `1px solid ${isIntermediate ? 'var(--accent-purple-border)' : 'var(--accent-cyan-border)'}`,
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
                      background: 'var(--accent-emerald-subtle)',
                      border: '1px solid var(--accent-emerald-border)',
                      boxShadow: '0 0 16px var(--accent-emerald-glow)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Cpu size={22} color="var(--accent-emerald)" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        margin: 0,
                      }}
                    >
                      Hardware &amp; Edge Computing
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.5rem', marginLeft: '3.9rem' }}>
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
                          background: 'var(--bg-card)',
                          border: '1px solid var(--border-card)',
                          borderRadius: '12px',
                          padding: '1.15rem 1.25rem',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          minHeight: '115px',
                          transition: 'all 0.2s ease',
                          boxShadow: 'var(--shadow-card)',
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                            {sk.name}
                          </div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.35, marginBottom: '0.75rem' }}>
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
                              color: isIntermediate ? 'var(--accent-purple)' : 'var(--accent-emerald)',
                              background: isIntermediate ? 'var(--accent-purple-subtle)' : 'var(--accent-emerald-subtle)',
                              border: `1px solid ${isIntermediate ? 'var(--accent-purple-border)' : 'var(--accent-emerald-border)'}`,
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
          border-color: var(--accent-cyan) !important;
          color: var(--text-primary) !important;
          background: var(--accent-cyan-subtle) !important;
        }
        .skill-category-box:hover {
          border-color: var(--accent-cyan-border) !important;
          box-shadow: var(--shadow-card-hover) !important;
          transform: translateY(-2px);
        }
        .individual-skill-card:hover, .addon-skill-card:hover {
          border-color: var(--accent-cyan-border) !important;
          background: var(--bg-card-hover) !important;
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
