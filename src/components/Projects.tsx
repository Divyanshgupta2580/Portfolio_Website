import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Award, Layers, ArrowUpRight, Cpu, Sparkles, Database, Terminal, Smartphone, Zap, BrainCircuit, Server } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Active preview tab for BenefitOS
  const [benefitTab, setBenefitTab] = useState<'overview' | 'rag' | 'neo4j'>('overview');
  // Active preview tab for JanSetu
  const [janTab, setJanTab] = useState<'overview' | 'edge' | 'sensor'>('overview');

  const p1 = PORTFOLIO_DATA.projects[0]; // BenefitOS
  const p2 = PORTFOLIO_DATA.projects[1]; // JanSetu

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-dark-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} />
            <span>Flagship Engineering</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Two major software and hardware engineering platforms built for competitive hackathons and industry innovation challenges.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {/* ================= PROJECT 01: BENEFITOS ================= */}
          <div
            className="card project-grid-1"
            style={{
              padding: '2.5rem',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2.5rem',
              alignItems: 'center',
              border: '1px solid var(--border-cyan)',
              background: 'linear-gradient(145deg, var(--bg-card) 0%, rgba(15, 18, 30, 0.95) 100%)',
            }}
          >
            {/* Visual Architecture Area (Left Column for Project 1) */}
            <div
              style={{
                background: 'var(--bg-dark)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {/* Interactive Pipeline Tabs */}
              <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.85rem' }}>
                <button
                  onClick={() => setBenefitTab('overview')}
                  style={{
                    background: benefitTab === 'overview' ? 'var(--accent-cyan-subtle)' : 'transparent',
                    border: '1px solid',
                    borderColor: benefitTab === 'overview' ? 'var(--border-cyan)' : 'transparent',
                    color: benefitTab === 'overview' ? 'var(--accent-cyan)' : 'var(--text-muted)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                  }}
                >
                  System Flow
                </button>
                <button
                  onClick={() => setBenefitTab('rag')}
                  style={{
                    background: benefitTab === 'rag' ? 'var(--accent-cyan-subtle)' : 'transparent',
                    border: '1px solid',
                    borderColor: benefitTab === 'rag' ? 'var(--border-cyan)' : 'transparent',
                    color: benefitTab === 'rag' ? 'var(--accent-cyan)' : 'var(--text-muted)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                  }}
                >
                  AI / OCR Pipeline
                </button>
                <button
                  onClick={() => setBenefitTab('neo4j')}
                  style={{
                    background: benefitTab === 'neo4j' ? 'var(--accent-cyan-subtle)' : 'transparent',
                    border: '1px solid',
                    borderColor: benefitTab === 'neo4j' ? 'var(--border-cyan)' : 'transparent',
                    color: benefitTab === 'neo4j' ? 'var(--accent-cyan)' : 'var(--text-muted)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                  }}
                >
                  Neo4j Graph
                </button>
              </div>

              {/* Dynamic Diagram Canvas */}
              <div
                style={{
                  minHeight: '220px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.01)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1.25rem',
                }}
              >
                {benefitTab === 'overview' && (
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', background: 'rgba(0, 242, 254, 0.05)', border: '1px solid var(--border-cyan)', borderRadius: '6px' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-cyan)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Smartphone size={15} /> React Native / Expo App
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Citizen Mobile UI</span>
                    </div>
                    <div style={{ textAlign: 'center', color: 'var(--border-cyan)', fontSize: '0.8rem' }}>↓ REST API Gateway</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '6px' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#60a5fa', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Zap size={15} /> Express Microservice Backend
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Node.js Runtime</span>
                    </div>
                    <div style={{ textAlign: 'center', color: '#60a5fa', fontSize: '0.8rem' }}>↓ Graph & AI Inference</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <div style={{ padding: '0.6rem', background: 'rgba(168, 85, 247, 0.08)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '6px', textAlign: 'center', fontSize: '0.8rem', color: '#c084fc', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                        <Database size={14} /> Neo4j Graph DB
                      </div>
                      <div style={{ padding: '0.6rem', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '6px', textAlign: 'center', fontSize: '0.8rem', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                        <BrainCircuit size={14} /> RAG + OCR Engine
                      </div>
                    </div>
                  </div>
                )}

                {benefitTab === 'rag' && (
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-cyan)' }}>
                      <Sparkles size={16} />
                      <strong>OCR Document Verification Pipeline</strong>
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.5 }}>
                      1. Citizen uploads identity document via mobile camera.<br />
                      2. OCR engine extracts text metadata and verifies authenticity.<br />
                      3. RAG pipeline matches extracted attributes against welfare scheme eligibility criteria.
                    </div>
                  </div>
                )}

                {benefitTab === 'neo4j' && (
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#f59e0b' }}>
                      <Database size={16} />
                      <strong>Neo4j Graph Relationship Engine</strong>
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.5 }}>
                      • <code>(:Citizen)-[:ELIGIBLE_FOR]-&gt;(:WelfareScheme)</code><br />
                      • <code>(:WelfareScheme)-[:REQUIRES_DOC]-&gt;(:DocumentType)</code><br />
                      • Allows instant traversal of prerequisite schemes and missing documents.
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Information & Details (Right Column for Project 1) */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span className="section-badge" style={{ marginBottom: 0 }}>
                  <Award size={14} />
                  {p1.badge}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  Project 01
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  color: 'var(--text-main)',
                  lineHeight: 1.1,
                  marginBottom: '0.5rem',
                }}
              >
                {p1.title}
              </h3>
              <div style={{ fontSize: '1.05rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '1.25rem' }}>
                {p1.subtitle}
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {p1.shortDescription}
              </p>

              {/* Engineering Highlights List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                {p1.highlights.slice(0, 4).map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2rem' }}>
                {p1.technologies.map((t, idx) => (
                  <span key={idx} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => setSelectedProject(p1)} className="btn btn-primary">
                  <span>View Technical Specs</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>


          {/* ================= PROJECT 02: JANSETU ================= */}
          <div
            className="card project-grid-2"
            style={{
              padding: '2.5rem',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2.5rem',
              alignItems: 'center',
              border: '1px solid var(--border-card)',
              background: 'linear-gradient(145deg, var(--bg-card) 0%, rgba(15, 18, 30, 0.95) 100%)',
            }}
          >
            {/* Information & Details (Left Column for Project 2) */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span className="section-badge" style={{ marginBottom: 0, borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10b981', background: 'rgba(16, 185, 129, 0.08)' }}>
                  <Award size={14} />
                  {p2.badge}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  Project 02
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  color: 'var(--text-main)',
                  lineHeight: 1.1,
                  marginBottom: '0.5rem',
                }}
              >
                {p2.title}
              </h3>
              <div style={{ fontSize: '1.05rem', color: '#10b981', fontWeight: 600, marginBottom: '1.25rem' }}>
                {p2.subtitle}
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {p2.shortDescription}
              </p>

              {/* Engineering Highlights List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                {p2.highlights.slice(0, 4).map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2rem' }}>
                {p2.technologies.map((t, idx) => (
                  <span key={idx} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => setSelectedProject(p2)} className="btn btn-secondary" style={{ borderColor: 'rgba(16, 185, 129, 0.4)' }}>
                  <span>View Hardware & Spec Details</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

            {/* Visual Hardware Architecture Area (Right Column for Project 2) */}
            <div
              style={{
                background: 'var(--bg-dark)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {/* Interactive Hardware Tabs */}
              <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.85rem' }}>
                <button
                  onClick={() => setJanTab('overview')}
                  style={{
                    background: janTab === 'overview' ? 'rgba(16, 185, 129, 0.12)' : 'transparent',
                    border: '1px solid',
                    borderColor: janTab === 'overview' ? 'rgba(16, 185, 129, 0.4)' : 'transparent',
                    color: janTab === 'overview' ? '#10b981' : 'var(--text-muted)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                  }}
                >
                  Edge Topology
                </button>
                <button
                  onClick={() => setJanTab('edge')}
                  style={{
                    background: janTab === 'edge' ? 'rgba(16, 185, 129, 0.12)' : 'transparent',
                    border: '1px solid',
                    borderColor: janTab === 'edge' ? 'rgba(16, 185, 129, 0.4)' : 'transparent',
                    color: janTab === 'edge' ? '#10b981' : 'var(--text-muted)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                  }}
                >
                  Dual Core Architecture
                </button>
                <button
                  onClick={() => setJanTab('sensor')}
                  style={{
                    background: janTab === 'sensor' ? 'rgba(16, 185, 129, 0.12)' : 'transparent',
                    border: '1px solid',
                    borderColor: janTab === 'sensor' ? 'rgba(16, 185, 129, 0.4)' : 'transparent',
                    color: janTab === 'sensor' ? '#10b981' : 'var(--text-muted)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                  }}
                >
                  Sensor Diagnostic Loop
                </button>
              </div>

              {/* Dynamic Diagram Canvas */}
              <div
                style={{
                  minHeight: '220px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.01)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1.25rem',
                }}
              >
                {janTab === 'overview' && (
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '6px' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#34d399', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Cpu size={15} /> LDR Sensor & Lighting Circuit
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Analog Voltage</span>
                    </div>
                    <div style={{ textAlign: 'center', color: '#34d399', fontSize: '0.8rem' }}>↓ ADC Sampling</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', background: 'rgba(0, 242, 254, 0.05)', border: '1px solid var(--border-cyan)', borderRadius: '6px' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-cyan)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Cpu size={15} /> Arduino UNO Q (MCU + Linux MPU)
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Embedded C++ / Python</span>
                    </div>
                    <div style={{ textAlign: 'center', color: 'var(--accent-cyan)', fontSize: '0.8rem' }}>↓ Encrypted Incident Alert</div>
                    <div style={{ padding: '0.6rem', background: 'rgba(59, 130, 246, 0.08)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '6px', textAlign: 'center', fontSize: '0.8rem', color: '#60a5fa', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                      <Server size={14} /> Municipal Control Server Dashboard
                    </div>
                  </div>
                )}

                {janTab === 'edge' && (
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#34d399' }}>
                      <Cpu size={16} />
                      <strong>Arduino UNO Q Dual-Core Edge Processing</strong>
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.5 }}>
                      • <strong>MCU Layer (C++)</strong>: Microsecond-level LDR sensor sampling, noise filtering, and threshold validation.<br />
                      • <strong>MPU Layer (Python)</strong>: Linux OS managing MQTT telemetry, cloud sync, and fallback offline logs.
                    </div>
                  </div>
                )}

                {janTab === 'sensor' && (
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-cyan)' }}>
                      <Terminal size={16} />
                      <strong>Autonomous Fault Detection Logic</strong>
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.5 }}>
                      • Continuous sampling eliminates ambient light interference.<br />
                      • Instant fault detection triggers automated location & lamp ID packet to central municipal dispatch.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Specs Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <style>{`
        @media (min-width: 968px) {
          .project-grid-1 {
            grid-template-columns: 1fr 1fr !important;
          }
          .project-grid-2 {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
