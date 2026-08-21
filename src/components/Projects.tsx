import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import {
  Award,
  Smartphone,
  Zap,
  Database,
  Network,
  CheckCircle2,
  ArrowUpRight,
  Cpu,
  Server,
  Activity,
  Sparkles,
  Bot,
  BookOpen,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Active preview tab for BenefitOS
  const [benefitTab, setBenefitTab] = useState<'flow' | 'rag' | 'neo4j'>('flow');
  // Active preview tab for JanSetu
  const [janTab, setJanTab] = useState<'flow' | 'edge' | 'logic'>('logic');
  // Active preview tab for Tron
  const [tronTab, setTronTab] = useState<'flow' | 'decision' | 'memory'>('flow');

  const p1 = PORTFOLIO_DATA.projects[0]; // BenefitOS
  const p2 = PORTFOLIO_DATA.projects[1]; // JanSetu
  const p3 = PORTFOLIO_DATA.projects[2]; // Tron

  return (
    <section id="projects" className="section" style={{ background: '#080B12', padding: '5rem 0 6rem 0' }}>
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
        {/* ================================================== */}
        {/* PROJECT 01: BENEFITOS (TEXT LEFT / VISUAL RIGHT)   */}
        {/* ================================================== */}
        <div>
          {/* Metadata Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              marginBottom: '1.75rem',
              color: '#9CA3AF',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.92rem',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#F5F7FA', fontWeight: 600 }}>
              <Award size={16} color="#22D3EE" /> Built for HackHazards'26
            </span>
            <span style={{ color: 'rgba(120, 150, 180, 0.3)' }}>|</span>
            <span style={{ fontWeight: 800, color: '#F5F7FA', fontSize: '1rem' }}>01</span>
          </div>

          {/* BenefitOS Interactive Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '0.65rem',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => setBenefitTab('flow')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '8px',
                background: benefitTab === 'flow' ? '#0B121C' : 'transparent',
                border: '1px solid',
                borderColor: benefitTab === 'flow' ? '#22D3EE' : 'rgba(120, 150, 180, 0.2)',
                color: benefitTab === 'flow' ? '#F5F7FA' : '#9CA3AF',
                fontWeight: 650,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: benefitTab === 'flow' ? '0 0 12px rgba(34, 211, 238, 0.25)' : 'none',
              }}
            >
              System Flow
            </button>
            <button
              onClick={() => setBenefitTab('rag')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '8px',
                background: benefitTab === 'rag' ? '#0B121C' : 'transparent',
                border: '1px solid',
                borderColor: benefitTab === 'rag' ? '#A855F7' : 'rgba(120, 150, 180, 0.2)',
                color: benefitTab === 'rag' ? '#F5F7FA' : '#9CA3AF',
                fontWeight: 650,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: benefitTab === 'rag' ? '0 0 12px rgba(168, 85, 247, 0.25)' : 'none',
              }}
            >
              RAG Pipeline
            </button>
            <button
              onClick={() => setBenefitTab('neo4j')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '8px',
                background: benefitTab === 'neo4j' ? '#0B121C' : 'transparent',
                border: '1px solid',
                borderColor: benefitTab === 'neo4j' ? '#22D3EE' : 'rgba(120, 150, 180, 0.2)',
                color: benefitTab === 'neo4j' ? '#F5F7FA' : '#9CA3AF',
                fontWeight: 650,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: benefitTab === 'neo4j' ? '0 0 12px rgba(34, 211, 238, 0.25)' : 'none',
              }}
            >
              Neo4j Graph
            </button>
          </div>

          {/* BenefitOS Two-Column Layout: TEXT LEFT / VISUAL RIGHT */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.05fr 0.95fr',
              gap: '3.5rem',
              alignItems: 'center',
            }}
            className="project-grid-benefit"
          >
            {/* ----- LEFT: BENEFITOS TEXT & DETAILS ----- */}
            <div className="project-text-benefit">
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.2rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  marginBottom: '0.35rem',
                }}
              >
                <span style={{ color: '#F5F7FA' }}>Benefit</span>
                <span style={{ color: '#22D3EE' }}>OS</span>
              </h3>

              <div
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 650,
                  color: '#F5F7FA',
                  marginBottom: '1.25rem',
                }}
              >
                AI-Powered Citizen Welfare Discovery Platform
              </div>

              <p
                style={{
                  fontSize: '0.94rem',
                  color: '#9CA3AF',
                  lineHeight: 1.65,
                  marginBottom: '1.6rem',
                }}
              >
                A citizen-focused platform designed to help people discover welfare schemes, understand eligibility, prepare required documents, and navigate application workflows.
              </p>

              {/* 4 Capabilities with Checkmarks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#F5F7FA', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="#22D3EE" style={{ flexShrink: 0 }} />
                  <span>AI-Powered Welfare Scheme Recommendation Engine</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#F5F7FA', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="#22D3EE" style={{ flexShrink: 0 }} />
                  <span>Deterministic &amp; Dynamic Eligibility Discovery</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#F5F7FA', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="#A855F7" style={{ flexShrink: 0 }} />
                  <span>Document Readiness &amp; Verification Workflow via OCR</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#F5F7FA', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="#A855F7" style={{ flexShrink: 0 }} />
                  <span>Conversational AI Assistant for Scheme Guidance</span>
                </div>
              </div>

              {/* Technology Badges */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.75rem',
                }}
              >
                {['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'Neo4j', 'AI / RAG', 'OCR'].map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: '#0B121C',
                      border: '1px solid rgba(120, 150, 180, 0.22)',
                      color: '#F5F7FA',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <button
                  onClick={() => setSelectedProject(p1)}
                  style={{
                    background: 'rgba(34, 211, 238, 0.05)',
                    border: '1px solid #22D3EE',
                    color: '#22D3EE',
                    padding: '0.75rem 1.6rem',
                    borderRadius: '8px',
                    fontWeight: 750,
                    fontSize: '0.92rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 0 16px rgba(34, 211, 238, 0.15)',
                  }}
                  className="project-cta-btn"
                >
                  <span>View Technical Specs</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

            {/* ----- RIGHT: BENEFITOS ARCHITECTURE SYSTEM CARD ----- */}
            <div
              style={{
                background: '#0B121C',
                border: '1px solid rgba(148, 163, 184, 0.20)',
                borderRadius: '16px',
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.85rem',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
                minHeight: '340px',
              }}
              className="project-visual-benefit"
            >
              {benefitTab === 'flow' && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                  {/* Node 1: React Native / Expo App */}
                  <div
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.25rem',
                      background: 'rgba(34, 211, 238, 0.04)',
                      border: '1px solid rgba(34, 211, 238, 0.4)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: '0 0 14px rgba(34, 211, 238, 0.1)',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#F5F7FA', fontWeight: 650, fontSize: '0.94rem' }}>
                      <Smartphone size={18} color="#22D3EE" /> React Native / Expo App
                    </span>
                    <span style={{ color: '#9CA3AF', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>Mobile UI</span>
                  </div>

                  {/* Arrow 1 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#9CA3AF', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', padding: '0.15rem 0' }}>
                    <span>↓</span>
                    <span>REST API Gateway</span>
                  </div>

                  {/* Node 2: Express Backend */}
                  <div
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.25rem',
                      background: 'rgba(56, 189, 248, 0.04)',
                      border: '1px solid rgba(56, 189, 248, 0.4)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: '0 0 14px rgba(56, 189, 248, 0.1)',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#F5F7FA', fontWeight: 650, fontSize: '0.94rem' }}>
                      <Zap size={18} color="#38BDF8" /> Express Backend
                    </span>
                    <span style={{ color: '#9CA3AF', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>Node.js Runtime</span>
                  </div>

                  {/* Arrow 2 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#38BDF8', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', padding: '0.15rem 0' }}>
                    <span>↓</span>
                    <span>Graph &amp; AI Inference</span>
                  </div>

                  {/* Bottom Split Nodes */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', width: '100%' }}>
                    {/* Node 3: Neo4j Graph DB */}
                    <div
                      style={{
                        padding: '1.1rem 1rem',
                        background: 'rgba(168, 85, 247, 0.04)',
                        border: '1px solid rgba(168, 85, 247, 0.4)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.6rem',
                        color: '#F5F7FA',
                        fontWeight: 650,
                        fontSize: '0.9rem',
                        boxShadow: '0 0 14px rgba(168, 85, 247, 0.1)',
                      }}
                    >
                      <Database size={18} color="#A855F7" />
                      <span>Neo4j Graph DB</span>
                    </div>

                    {/* Node 4: RAG + OCR Engine */}
                    <div
                      style={{
                        padding: '1.1rem 1rem',
                        background: 'rgba(16, 185, 129, 0.04)',
                        border: '1px solid rgba(16, 185, 129, 0.4)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.6rem',
                        color: '#34D399',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        boxShadow: '0 0 14px rgba(16, 185, 129, 0.1)',
                      }}
                    >
                      <Network size={18} color="#10B981" />
                      <span>RAG + OCR Engine</span>
                    </div>
                  </div>
                </div>
              )}

              {benefitTab === 'rag' && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#A855F7', fontWeight: 700, fontSize: '1rem' }}>
                    <Sparkles size={18} /> OCR Document Extraction &amp; RAG Workflow
                  </div>
                  <p style={{ color: '#9CA3AF', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                    1. Mobile user uploads identity/income verification document.<br />
                    2. OCR pipeline extracts structured key-value entities and text fields.<br />
                    3. Semantic embeddings match extracted attributes against national welfare database criteria.<br />
                    4. Vector retrieval ranks qualifying citizen benefits with explainable rationale.
                  </p>
                </div>
              )}

              {benefitTab === 'neo4j' && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#22D3EE', fontWeight: 700, fontSize: '1rem' }}>
                    <Database size={18} /> Neo4j Graph Relationship Engine
                  </div>
                  <p style={{ color: '#9CA3AF', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                    • <code style={{ color: '#22D3EE', fontFamily: 'var(--font-mono)' }}>(:Citizen)-[:ELIGIBLE_FOR]-&gt;(:Scheme)</code><br />
                    • <code style={{ color: '#38BDF8', fontFamily: 'var(--font-mono)' }}>(:Scheme)-[:REQUIRES_DOC]-&gt;(:Document)</code><br />
                    • <code style={{ color: '#A855F7', fontFamily: 'var(--font-mono)' }}>(:Scheme)-[:ADMINISTERED_BY]-&gt;(:Ministry)</code><br />
                    Traverses multi-hop dependency chains in sub-10ms latency.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* PROJECT 02: JANSETU (VISUAL LEFT / TEXT RIGHT)     */}
        {/* ================================================== */}
        <div style={{ marginTop: '5.5rem', paddingTop: '3.5rem', borderTop: '1px solid rgba(120, 150, 180, 0.12)' }}>
          {/* Metadata Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              marginBottom: '1.75rem',
              color: '#9CA3AF',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.92rem',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#10B981', fontWeight: 600 }}>
              <Award size={16} color="#10B981" /> Built for Qualcomm
            </span>
            <span style={{ color: 'rgba(120, 150, 180, 0.3)' }}>|</span>
            <span style={{ fontWeight: 800, color: '#F5F7FA', fontSize: '1rem' }}>02</span>
          </div>

          {/* JanSetu Interactive Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '0.65rem',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => setJanTab('flow')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '8px',
                background: janTab === 'flow' ? '#0B121C' : 'transparent',
                border: '1px solid',
                borderColor: janTab === 'flow' ? '#10B981' : 'rgba(120, 150, 180, 0.2)',
                color: janTab === 'flow' ? '#F5F7FA' : '#9CA3AF',
                fontWeight: 650,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: janTab === 'flow' ? '0 0 12px rgba(16, 185, 129, 0.25)' : 'none',
              }}
            >
              Edge Topology
            </button>
            <button
              onClick={() => setJanTab('edge')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '8px',
                background: janTab === 'edge' ? '#0B121C' : 'transparent',
                border: '1px solid',
                borderColor: janTab === 'edge' ? '#38BDF8' : 'rgba(120, 150, 180, 0.2)',
                color: janTab === 'edge' ? '#F5F7FA' : '#9CA3AF',
                fontWeight: 650,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: janTab === 'edge' ? '0 0 12px rgba(56, 189, 248, 0.25)' : 'none',
              }}
            >
              Dual Core Arch
            </button>
            <button
              onClick={() => setJanTab('logic')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '8px',
                background: janTab === 'logic' ? '#0B121C' : 'transparent',
                border: '1px solid',
                borderColor: janTab === 'logic' ? '#FBBF24' : 'rgba(120, 150, 180, 0.2)',
                color: janTab === 'logic' ? '#F5F7FA' : '#9CA3AF',
                fontWeight: 650,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: janTab === 'logic' ? '0 0 12px rgba(251, 191, 36, 0.25)' : 'none',
              }}
            >
              Fault Logic
            </button>
          </div>

          {/* JanSetu Two-Column Layout: VISUAL LEFT / TEXT RIGHT */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '0.95fr 1.05fr',
              gap: '3.5rem',
              alignItems: 'center',
            }}
            className="project-grid-jansetu"
          >
            {/* ----- LEFT: JANSETU TECHNICAL/SYSTEM CARD ----- */}
            <div
              style={{
                background: '#0B121C',
                border: '1px solid rgba(148, 163, 184, 0.20)',
                borderRadius: '16px',
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.85rem',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
                minHeight: '340px',
              }}
              className="project-visual-jansetu"
            >
              {janTab === 'logic' && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '0.5rem 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#FBBF24', fontWeight: 700, fontSize: '1.02rem' }}>
                    <Zap size={19} color="#FBBF24" /> Autonomous Outage &amp; Flicker Diagnostics
                  </div>
                  <div style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.65 }}>
                    <div style={{ marginBottom: '0.75rem' }}>
                      • Compares scheduled grid activation cycles against real-time photometric telemetry.
                    </div>
                    <div>
                      • Differentiates between lamp burnout, low-voltage brownout, and dirty sensor lenses.
                    </div>
                  </div>
                </div>
              )}

              {janTab === 'flow' && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                  {/* Node 1 */}
                  <div
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.25rem',
                      background: 'rgba(16, 185, 129, 0.04)',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#34D399', fontWeight: 650, fontSize: '0.94rem' }}>
                      <Cpu size={18} color="#10B981" /> LDR Sensor Light Array
                    </span>
                    <span style={{ color: '#9CA3AF', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>Analog ADC</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#34D399', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
                    <span>↓ Embedded C++ MCU Loop</span>
                  </div>

                  {/* Node 2 */}
                  <div
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.25rem',
                      background: 'rgba(56, 189, 248, 0.04)',
                      border: '1px solid rgba(56, 189, 248, 0.4)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#F5F7FA', fontWeight: 650, fontSize: '0.94rem' }}>
                      <Server size={18} color="#38BDF8" /> Arduino UNO Q Linux MPU
                    </span>
                    <span style={{ color: '#9CA3AF', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>Python Daemon</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#38BDF8', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
                    <span>↓ Telemetry &amp; Alert Dispatch</span>
                  </div>

                  {/* Node 3 */}
                  <div
                    style={{
                      width: '100%',
                      padding: '1.1rem 1rem',
                      background: 'rgba(251, 191, 36, 0.04)',
                      border: '1px solid rgba(251, 191, 36, 0.4)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      color: '#FBBF24',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                    }}
                  >
                    <Activity size={18} color="#FBBF24" />
                    <span>Municipal Monitoring Dashboard Endpoint</span>
                  </div>
                </div>
              )}

              {janTab === 'edge' && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#34D399', fontWeight: 700, fontSize: '1rem' }}>
                    <Cpu size={18} /> Dual-Core MCU + Linux MPU Architecture
                  </div>
                  <p style={{ color: '#9CA3AF', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                    • <strong>MCU Core (Embedded C++):</strong> High-speed ADC reads and ambient lumen baseline calibration.<br />
                    • <strong>MPU Core (Linux Python):</strong> Asynchronous socket communication, offline telemetry queueing, and failover alerting.
                  </p>
                </div>
              )}
            </div>

            {/* ----- RIGHT: JANSETU TEXT & DETAILS ----- */}
            <div className="project-text-jansetu">
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.2rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  marginBottom: '0.35rem',
                }}
              >
                <span style={{ color: '#F5F7FA' }}>Jan</span>
                <span style={{ color: '#10B981' }}>Setu</span>
              </h3>

              <div
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 650,
                  color: '#F5F7FA',
                  marginBottom: '1.25rem',
                }}
              >
                Autonomous Streetlight Failure Detection System
              </div>

              <p
                style={{
                  fontSize: '0.94rem',
                  color: '#9CA3AF',
                  lineHeight: 1.65,
                  marginBottom: '1.6rem',
                }}
              >
                An autonomous streetlight monitoring and failure-detection system designed around an edge device and sensor-based monitoring.
              </p>

              {/* 4 Capabilities with Checkmarks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#F5F7FA', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0 }} />
                  <span>Real-Time Streetlight Photometric Outage Detection</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#10B981', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0 }} />
                  <span>Dual-Core Microcontroller + Embedded Linux Architecture</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#38BDF8', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="#38BDF8" style={{ flexShrink: 0 }} />
                  <span>Automated Incident Dispatch &amp; Municipal Alerting</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#38BDF8', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="#38BDF8" style={{ flexShrink: 0 }} />
                  <span>Offline Fault Queueing &amp; Edge Telemetry Protocol</span>
                </div>
              </div>

              {/* Technology Badges */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.75rem',
                }}
              >
                {['Arduino UNO Q', 'C++', 'Python', 'IoT', 'Edge Computing', 'Embedded Systems'].map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: '#0B121C',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      color: '#34D399',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <button
                  onClick={() => setSelectedProject(p2)}
                  style={{
                    background: 'rgba(16, 185, 129, 0.05)',
                    border: '1px solid #10B981',
                    color: '#34D399',
                    padding: '0.75rem 1.6rem',
                    borderRadius: '8px',
                    fontWeight: 750,
                    fontSize: '0.92rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 0 16px rgba(16, 185, 129, 0.15)',
                  }}
                  className="project-cta-btn-green"
                >
                  <span>View Technical Specs</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* PROJECT 03: TRON (TEXT LEFT / VISUAL RIGHT)        */}
        {/* ================================================== */}
        <div style={{ marginTop: '5.5rem', paddingTop: '3.5rem', borderTop: '1px solid rgba(120, 150, 180, 0.12)' }}>
          {/* Metadata Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              marginBottom: '1.75rem',
              color: '#9CA3AF',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.92rem',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#C084FC', fontWeight: 600 }}>
              <Award size={16} color="#A855F7" /> Autonomous AI Project
            </span>
            <span style={{ color: 'rgba(120, 150, 180, 0.3)' }}>|</span>
            <span style={{ fontWeight: 800, color: '#F5F7FA', fontSize: '1rem' }}>03</span>
          </div>

          {/* Tron Interactive Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '0.65rem',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => setTronTab('flow')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '8px',
                background: tronTab === 'flow' ? '#0B121C' : 'transparent',
                border: '1px solid',
                borderColor: tronTab === 'flow' ? '#A855F7' : 'rgba(120, 150, 180, 0.2)',
                color: tronTab === 'flow' ? '#F5F7FA' : '#9CA3AF',
                fontWeight: 650,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: tronTab === 'flow' ? '0 0 12px rgba(168, 85, 247, 0.25)' : 'none',
              }}
            >
              Agent Flow
            </button>
            <button
              onClick={() => setTronTab('decision')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '8px',
                background: tronTab === 'decision' ? '#0B121C' : 'transparent',
                border: '1px solid',
                borderColor: tronTab === 'decision' ? '#38BDF8' : 'rgba(120, 150, 180, 0.2)',
                color: tronTab === 'decision' ? '#F5F7FA' : '#9CA3AF',
                fontWeight: 650,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: tronTab === 'decision' ? '0 0 12px rgba(56, 189, 248, 0.25)' : 'none',
              }}
            >
              Decision Pipeline
            </button>
            <button
              onClick={() => setTronTab('memory')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '8px',
                background: tronTab === 'memory' ? '#0B121C' : 'transparent',
                border: '1px solid',
                borderColor: tronTab === 'memory' ? '#10B981' : 'rgba(120, 150, 180, 0.2)',
                color: tronTab === 'memory' ? '#F5F7FA' : '#9CA3AF',
                fontWeight: 650,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: tronTab === 'memory' ? '0 0 12px rgba(16, 185, 129, 0.25)' : 'none',
              }}
            >
              Memory &amp; Publishing
            </button>
          </div>

          {/* Tron Two-Column Layout: TEXT LEFT / VISUAL RIGHT */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.05fr 0.95fr',
              gap: '3.5rem',
              alignItems: 'center',
            }}
            className="project-grid-tron"
          >
            {/* ----- LEFT: TRON TEXT & DETAILS ----- */}
            <div className="project-text-tron">
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.2rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  marginBottom: '0.35rem',
                }}
              >
                <span style={{ color: '#F5F7FA' }}>Tr</span>
                <span style={{ color: '#A855F7' }}>on</span>
              </h3>

              <div
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 650,
                  color: '#F5F7FA',
                  marginBottom: '1.25rem',
                }}
              >
                Autonomous AI Agent
              </div>

              <p
                style={{
                  fontSize: '0.94rem',
                  color: '#9CA3AF',
                  lineHeight: 1.65,
                  marginBottom: '1.6rem',
                }}
              >
                An autonomous AI agent that discovers relevant topics, evaluates candidates, makes editorial decisions, generates content, validates sources, maintains persistent memory, and publishes autonomously.
              </p>

              {/* Feature List with Checkmarks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#F5F7FA', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="#A855F7" style={{ flexShrink: 0 }} />
                  <span>Autonomous Topic Discovery &amp; Candidate Evaluation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#F5F7FA', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="#A855F7" style={{ flexShrink: 0 }} />
                  <span>Editorial Decision-Making with Rejection Logic</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#F5F7FA', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="#38BDF8" style={{ flexShrink: 0 }} />
                  <span>Persistent Memory of Publications &amp; Decisions (SQLite)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#F5F7FA', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="#38BDF8" style={{ flexShrink: 0 }} />
                  <span>Autonomous Scheduling &amp; Publishing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#F5F7FA', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="#34D399" style={{ flexShrink: 0 }} />
                  <span>Structured AI Generation with Schema Validation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#F5F7FA', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="#34D399" style={{ flexShrink: 0 }} />
                  <span>Fail-Closed Duplicate Protection &amp; Source Fallback (Groq / arXiv)</span>
                </div>
              </div>

              {/* Technology Badges */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.75rem',
                }}
              >
                {['Gemini', 'Groq', 'arXiv', 'SQLite', 'Python', 'Autonomous Agents', 'LLMs', 'API'].map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: '#0B121C',
                      border: '1px solid rgba(168, 85, 247, 0.25)',
                      color: '#C084FC',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <button
                  onClick={() => setSelectedProject(p3)}
                  style={{
                    background: 'rgba(168, 85, 247, 0.05)',
                    border: '1px solid #A855F7',
                    color: '#C084FC',
                    padding: '0.75rem 1.6rem',
                    borderRadius: '8px',
                    fontWeight: 750,
                    fontSize: '0.92rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 0 16px rgba(168, 85, 247, 0.15)',
                  }}
                  className="project-cta-btn-purple"
                >
                  <span>View Technical Specs</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

            {/* ----- RIGHT: TRON ARCHITECTURE SYSTEM CARD ----- */}
            <div
              style={{
                background: '#0B121C',
                border: '1px solid rgba(148, 163, 184, 0.20)',
                borderRadius: '16px',
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.85rem',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
                minHeight: '340px',
              }}
              className="project-visual-tron"
            >
              {tronTab === 'flow' && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                  {/* Node 1: Topic Discovery */}
                  <div
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.25rem',
                      background: 'rgba(56, 189, 248, 0.04)',
                      border: '1px solid rgba(56, 189, 248, 0.4)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#F5F7FA', fontWeight: 650, fontSize: '0.94rem' }}>
                      <Sparkles size={18} color="#38BDF8" /> Topic Discovery
                    </span>
                    <span style={{ color: '#9CA3AF', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>Candidate Engine</span>
                  </div>

                  {/* Arrow 1 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#9CA3AF', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', padding: '0.1rem 0' }}>
                    <span>↓</span>
                    <span>Editorial Scoring &amp; Rejection Filter</span>
                  </div>

                  {/* Node 2: Primary Generation: Gemini */}
                  <div
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.25rem',
                      background: 'rgba(168, 85, 247, 0.04)',
                      border: '1px solid rgba(168, 85, 247, 0.4)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#C084FC', fontWeight: 650, fontSize: '0.94rem' }}>
                      <Bot size={18} color="#A855F7" /> Gemini Generation
                    </span>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        color: '#FBBF24',
                        background: 'rgba(251, 191, 36, 0.1)',
                        border: '1px solid rgba(251, 191, 36, 0.3)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                      }}
                    >
                      Groq Fallback
                    </span>
                  </div>

                  {/* Arrow 2 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#A855F7', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', padding: '0.1rem 0' }}>
                    <span>↓</span>
                    <span>Source Validation &amp; Memory Check</span>
                  </div>

                  {/* Split Nodes */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', width: '100%' }}>
                    {/* Node 3: arXiv Fallback */}
                    <div
                      style={{
                        padding: '0.9rem 0.8rem',
                        background: 'rgba(251, 191, 36, 0.04)',
                        border: '1px solid rgba(251, 191, 36, 0.35)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        color: '#FBBF24',
                        fontWeight: 650,
                        fontSize: '0.86rem',
                        textAlign: 'center',
                      }}
                    >
                      <BookOpen size={16} color="#FBBF24" />
                      <span>arXiv &amp; Sources</span>
                    </div>

                    {/* Node 4: SQLite Persistence */}
                    <div
                      style={{
                        padding: '0.9rem 0.8rem',
                        background: 'rgba(16, 185, 129, 0.04)',
                        border: '1px solid rgba(16, 185, 129, 0.35)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        color: '#34D399',
                        fontWeight: 650,
                        fontSize: '0.86rem',
                        textAlign: 'center',
                      }}
                    >
                      <Database size={16} color="#10B981" />
                      <span>SQLite Memory</span>
                    </div>
                  </div>

                  {/* Arrow 3 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#34D399', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', padding: '0.1rem 0' }}>
                    <span>↓</span>
                    <span>Schema Validation &amp; Scheduling</span>
                  </div>

                  {/* Node 5: Autonomous Publishing */}
                  <div
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.25rem',
                      background: 'rgba(16, 185, 129, 0.04)',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#34D399', fontWeight: 650, fontSize: '0.94rem' }}>
                      <CheckCircle2 size={18} color="#10B981" /> Autonomous Publishing
                    </span>
                    <span style={{ color: '#9CA3AF', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>Scheduled Run</span>
                  </div>
                </div>
              )}

              {tronTab === 'decision' && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#38BDF8', fontWeight: 700, fontSize: '1rem' }}>
                    <Bot size={18} /> Editorial Scoring &amp; Multi-Model Fallback
                  </div>
                  <p style={{ color: '#9CA3AF', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                    • <strong>Candidate Evaluation:</strong> Discovered topics are filtered via strict threshold scoring.<br />
                    • <strong>Rejection Logic:</strong> Low-relevance or unsupported topics are rejected early.<br />
                    • <strong>Multi-Model Architecture:</strong> Primary generation executes via Gemini Pro/Flash with automatic failover to Groq Llama-3.<br />
                    • <strong>Strict Schema:</strong> Output is validated against predefined Pydantic JSON schemas.
                  </p>
                </div>
              )}

              {tronTab === 'memory' && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#34D399', fontWeight: 700, fontSize: '1rem' }}>
                    <Database size={18} /> Persistent Memory &amp; Source Integrity
                  </div>
                  <p style={{ color: '#9CA3AF', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                    • <strong>SQLite Store:</strong> Tracks historical publication logs, rejected candidates, and semantic topic clusters.<br />
                    • <strong>Duplicate Protection:</strong> Employs fail-closed deduplication hashes before publishing.<br />
                    • <strong>Citation Verification:</strong> Cross-checks factual assertions against primary research citations and arXiv API fallbacks.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Deep Dive Technical Specs Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Responsive Styles */}
      <style>{`
        .project-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 22px rgba(34, 211, 238, 0.35) !important;
        }
        .project-cta-btn-green:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 22px rgba(16, 185, 129, 0.35) !important;
        }
        .project-cta-btn-purple:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 22px rgba(168, 85, 247, 0.35) !important;
        }

        @media (max-width: 968px) {
          .project-grid-benefit, .project-grid-jansetu, .project-grid-tron {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .project-text-benefit {
            order: 1 !important;
          }
          .project-visual-benefit {
            order: 2 !important;
          }
          .project-visual-jansetu {
            order: 1 !important;
          }
          .project-text-jansetu {
            order: 2 !important;
          }
          .project-text-tron {
            order: 1 !important;
          }
          .project-visual-tron {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
};
