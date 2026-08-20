import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code2, Layers, Sparkles, Database, Cpu, Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={22} color="var(--accent-cyan)" />;
      case 'Layers': return <Layers size={22} color="#3b82f6" />;
      case 'Sparkles': return <Sparkles size={22} color="#a855f7" />;
      case 'Database': return <Database size={22} color="#f59e0b" />;
      case 'Cpu': return <Cpu size={22} color="#10b981" />;
      default: return <Terminal size={22} color="var(--accent-cyan)" />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Code2 size={14} />
            <span>Technical Stack</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A curated breakdown of programming languages, frameworks, AI architectures, and embedded hardware systems I build with.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {PORTFOLIO_DATA.skills.map((category, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: 'var(--text-main)',
                      }}
                    >
                      {category.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
                      {category.description}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.6rem',
                    marginTop: '1.5rem',
                  }}
                >
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="tech-badge"
                      style={{
                        padding: '0.45rem 0.85rem',
                        fontSize: '0.84rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '0.15rem',
                      }}
                    >
                      <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{skill.name}</span>
                      {skill.tag && (
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
