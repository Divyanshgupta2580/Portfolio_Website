import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, Cpu, Sparkles, Layers, CheckCircle2, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const p = PORTFOLIO_DATA.personal;

  const focusAreas = [
    {
      icon: <Terminal size={22} color="var(--accent-cyan)" />,
      title: "Software & Systems Development",
      description: "Writing maintainable C++, Python, and TypeScript applications with clean modular architecture and robust API design.",
    },
    {
      icon: <Sparkles size={22} color="#a855f7" />,
      title: "Artificial Intelligence & RAG",
      description: "Implementing RAG pipelines, graph database representations (Neo4j), OCR document parsers, and intelligent recommendation systems.",
    },
    {
      icon: <Cpu size={22} color="#10b981" />,
      title: "Hardware & Edge Computing",
      description: "Interfacing microcontrollers (Arduino UNO Q) with Linux MPU network nodes to solve real-world physical monitoring challenges.",
    },
    {
      icon: <Layers size={22} color="#3b82f6" />,
      title: "Full-Stack & Cross-Platform Mobile",
      description: "Developing cross-platform mobile apps with React Native & Expo paired with scalable Node.js/Express backend microservices.",
    },
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-dark-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <ShieldCheck size={14} />
            <span>Engineering Core</span>
          </div>
          <h2 className="section-title">About Divyansh Gupta</h2>
          <p className="section-subtitle">
            An engineering student focused on building dependable software systems, intelligent algorithms, and hardware edge solutions.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left: Bio & Engineering Mindset */}
          <div className="card" style={{ padding: '2.25rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '2px',
                  background: 'var(--accent-cyan)',
                  boxShadow: '0 0 10px var(--accent-cyan)',
                }}
              />
              Practical Engineering Philosophy
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {p.aboutLong}
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1.5rem',
              }}
            >
              {[
                "Engineering Student with strong foundational CS & Systems background",
                "Creator of BenefitOS (HackHazards'26 AI Welfare Platform)",
                "Creator of JanSetu (Qualcomm Streetlight Edge Failure Detection)",
                "Focused on deterministic logic, modular APIs, and practical software solutions"
              ].map((bullet, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Focus Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {area.icon}
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                  }}
                >
                  {area.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                  }}
                >
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 968px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
