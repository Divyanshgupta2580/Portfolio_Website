import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ScrollReveal } from './ScrollReveal';
import {
  Award,
  Zap,
  Database,
  Network,
  CheckCircle2,
  ArrowUpRight,
  Server,
  Sparkles,
  Bot,
  BookOpen,
  Layers,
  Users,
  UserCheck,
  Clock,
  ShieldAlert,
} from 'lucide-react';

interface ProjectsProps {
  onRequestCode?: (projectName: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onRequestCode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Active preview tab for BenefitOS
  const [benefitTab, setBenefitTab] = useState<'flow' | 'rag' | 'neo4j'>('flow');
  // Active preview tab for JanSetu
  const [janTab, setJanTab] = useState<'escalation' | 'sla' | 'arch'>('escalation');
  // Active preview tab for Tron
  const [tronTab, setTronTab] = useState<'flow' | 'decision' | 'memory'>('flow');

  const p1 = PORTFOLIO_DATA.projects[0]; // BenefitOS
  const p2 = PORTFOLIO_DATA.projects[1]; // JanSetu
  const p3 = PORTFOLIO_DATA.projects[2]; // Tron

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-primary)', padding: '5rem 0 6rem 0' }}>
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
        {/* ================================================== */}
        {/* PROJECT 01: BENEFITOS (TEXT LEFT / VISUAL RIGHT)   */}
        {/* ================================================== */}
        <ScrollReveal direction="up" delay={0}>
          {/* Metadata Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              marginBottom: '1.75rem',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.92rem',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              <Award size={16} color="var(--accent-cyan)" /> Built for HackHazards'26
            </span>
            <span style={{ color: 'var(--border-subtle)' }}>|</span>
            <span style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1rem' }}>01</span>
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
                background: benefitTab === 'flow' ? 'var(--accent-cyan-subtle)' : 'var(--bg-card)',
                border: '1px solid',
                borderColor: benefitTab === 'flow' ? 'var(--accent-cyan)' : 'var(--border-card)',
                color: benefitTab === 'flow' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontWeight: 650,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: benefitTab === 'flow' ? '0 0 12px var(--accent-cyan-glow)' : 'none',
              }}
            >
              System Flow
            </button>
            <button
              onClick={() => setBenefitTab('rag')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '8px',
                background: benefitTab === 'rag' ? 'var(--accent-purple-subtle)' : 'var(--bg-card)',
                border: '1px solid',
                borderColor: benefitTab === 'rag' ? 'var(--accent-purple)' : 'var(--border-card)',
                color: benefitTab === 'rag' ? 'var(--accent-purple)' : 'var(--text-secondary)',
                fontWeight: 650,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: benefitTab === 'rag' ? '0 0 12px var(--accent-purple-glow)' : 'none',
              }}
            >
              RAG Pipeline
            </button>
            <button
              onClick={() => setBenefitTab('neo4j')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '8px',
                background: benefitTab === 'neo4j' ? 'var(--accent-cyan-subtle)' : 'var(--bg-card)',
                border: '1px solid',
                borderColor: benefitTab === 'neo4j' ? 'var(--accent-cyan)' : 'var(--border-card)',
                color: benefitTab === 'neo4j' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontWeight: 650,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: benefitTab === 'neo4j' ? '0 0 12px var(--accent-cyan-glow)' : 'none',
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
                <span style={{ color: 'var(--text-primary)' }}>Benefit</span>
                <span style={{ color: 'var(--accent-cyan)' }}>OS</span>
              </h3>

              <div
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 650,
                  color: 'var(--text-primary)',
                  marginBottom: '1.25rem',
                }}
              >
                AI-Powered Citizen Welfare Discovery Platform
              </div>

              <p
                style={{
                  fontSize: '0.94rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '1.6rem',
                }}
              >
                A citizen-focused platform designed to help people discover welfare schemes, understand eligibility, prepare required documents, and navigate application workflows.
              </p>

              {/* 4 Capabilities with Checkmarks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                  <span>AI-Powered Welfare Scheme Recommendation Engine</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                  <span>Deterministic &amp; Dynamic Eligibility Discovery</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="var(--accent-purple)" style={{ flexShrink: 0 }} />
                  <span>Document Readiness &amp; Verification Workflow via OCR</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="var(--accent-purple)" style={{ flexShrink: 0 }} />
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
                {['TypeScript', 'Node.js', 'Express', 'Neo4j', 'AI / RAG', 'OCR', 'React'].map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
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
                    background: 'var(--accent-cyan-subtle)',
                    border: '1px solid var(--accent-cyan)',
                    color: 'var(--accent-cyan)',
                    padding: '0.75rem 1.6rem',
                    borderRadius: '8px',
                    fontWeight: 750,
                    fontSize: '0.92rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 0 16px var(--accent-cyan-glow)',
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
                background: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                borderRadius: '16px',
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.85rem',
                boxShadow: 'var(--shadow-card)',
                minHeight: '340px',
              }}
              className="project-visual-benefit"
            >
              {benefitTab === 'flow' && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                  {/* Node 1: Client Application */}
                  <div
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.25rem',
                      background: 'var(--accent-cyan-subtle)',
                      border: '1px solid var(--accent-cyan-border)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: '0 0 14px var(--accent-cyan-glow)',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-primary)', fontWeight: 650, fontSize: '0.94rem' }}>
                      <Layers size={18} color="var(--accent-cyan)" /> Client Application
                    </span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>Client UI</span>
                  </div>

                  {/* Arrow 1 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-secondary)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', padding: '0.15rem 0' }}>
                    <span>↓</span>
                    <span>REST API Gateway</span>
                  </div>

                  {/* Node 2: Express Backend */}
                  <div
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.25rem',
                      background: 'rgba(59, 130, 246, 0.08)',
                      border: '1px solid rgba(59, 130, 246, 0.35)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: '0 0 14px rgba(59, 130, 246, 0.12)',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-primary)', fontWeight: 650, fontSize: '0.94rem' }}>
                      <Zap size={18} color="var(--accent-blue)" /> Express Backend
                    </span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>Node.js Runtime</span>
                  </div>

                  {/* Arrow 2 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--accent-blue)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', padding: '0.15rem 0' }}>
                    <span>↓</span>
                    <span>Graph &amp; AI Inference</span>
                  </div>

                  {/* Bottom Split Nodes */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', width: '100%' }}>
                    {/* Node 3: Neo4j Graph DB */}
                    <div
                      style={{
                        padding: '1.1rem 1rem',
                        background: 'var(--accent-purple-subtle)',
                        border: '1px solid var(--accent-purple-border)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.6rem',
                        color: 'var(--text-primary)',
                        fontWeight: 650,
                        fontSize: '0.9rem',
                        boxShadow: '0 0 14px var(--accent-purple-glow)',
                      }}
                    >
                      <Database size={18} color="var(--accent-purple)" />
                      <span>Neo4j Graph DB</span>
                    </div>

                    {/* Node 4: RAG + OCR Engine */}
                    <div
                      style={{
                        padding: '1.1rem 1rem',
                        background: 'var(--accent-emerald-subtle)',
                        border: '1px solid var(--accent-emerald-border)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.6rem',
                        color: 'var(--accent-emerald)',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        boxShadow: '0 0 14px var(--accent-emerald-glow)',
                      }}
                    >
                      <Network size={18} color="var(--accent-emerald)" />
                      <span>RAG + OCR Engine</span>
                    </div>
                  </div>
                </div>
              )}

              {benefitTab === 'rag' && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-purple)', fontWeight: 700, fontSize: '1rem' }}>
                    <Sparkles size={18} /> OCR Document Extraction &amp; RAG Workflow
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                    1. Citizen uploads identity/income verification document.<br />
                    2. OCR pipeline extracts structured key-value entities and text fields.<br />
                    3. Semantic embeddings match extracted attributes against national welfare database criteria.<br />
                    4. Vector retrieval ranks qualifying citizen benefits with explainable rationale.
                  </p>
                </div>
              )}

              {benefitTab === 'neo4j' && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '1rem' }}>
                    <Database size={18} /> Neo4j Graph Relationship Engine
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                    • <code style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>(:Citizen)-[:ELIGIBLE_FOR]-&gt;(:Scheme)</code><br />
                    • <code style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>(:Scheme)-[:REQUIRES_DOC]-&gt;(:Document)</code><br />
                    • <code style={{ color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}>(:Scheme)-[:ADMINISTERED_BY]-&gt;(:Ministry)</code><br />
                    Traverses multi-hop dependency chains in sub-10ms latency.
                  </p>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* ================================================== */}
        {/* PROJECT 02: JANSETU (VISUAL LEFT / TEXT RIGHT)     */}
        {/* ================================================== */}
        <ScrollReveal
          direction="up"
          delay={0}
          style={{ marginTop: '5.5rem', paddingTop: '3.5rem', borderTop: '1px solid var(--border-subtle)' }}
        >
          {/* Metadata Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              marginBottom: '1.75rem',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.92rem',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
              <Award size={16} color="var(--accent-emerald)" /> Deployed Civic Platform
            </span>
            <span style={{ color: 'var(--border-subtle)' }}>|</span>
            <span style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1rem' }}>02</span>
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
              onClick={() => setJanTab('escalation')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '8px',
                background: janTab === 'escalation' ? 'var(--accent-emerald-subtle)' : 'var(--bg-card)',
                border: '1px solid',
                borderColor: janTab === 'escalation' ? 'var(--accent-emerald)' : 'var(--border-card)',
                color: janTab === 'escalation' ? 'var(--accent-emerald)' : 'var(--text-secondary)',
                fontWeight: 650,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: janTab === 'escalation' ? '0 0 12px var(--accent-emerald-glow)' : 'none',
              }}
            >
              Escalation Flow
            </button>
            <button
              onClick={() => setJanTab('sla')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '8px',
                background: janTab === 'sla' ? 'var(--accent-amber-subtle)' : 'var(--bg-card)',
                border: '1px solid',
                borderColor: janTab === 'sla' ? 'var(--accent-amber)' : 'var(--border-card)',
                color: janTab === 'sla' ? 'var(--accent-amber)' : 'var(--text-secondary)',
                fontWeight: 650,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: janTab === 'sla' ? '0 0 12px var(--accent-amber-glow)' : 'none',
              }}
            >
              48-Hour SLA
            </button>
            <button
              onClick={() => setJanTab('arch')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '8px',
                background: janTab === 'arch' ? 'var(--accent-cyan-subtle)' : 'var(--bg-card)',
                border: '1px solid',
                borderColor: janTab === 'arch' ? 'var(--accent-cyan)' : 'var(--border-card)',
                color: janTab === 'arch' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontWeight: 650,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: janTab === 'arch' ? '0 0 12px var(--accent-cyan-glow)' : 'none',
              }}
            >
              Architecture
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
                background: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                borderRadius: '16px',
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.85rem',
                boxShadow: 'var(--shadow-card)',
                minHeight: '340px',
              }}
              className="project-visual-jansetu"
            >
              {janTab === 'escalation' && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                  {/* Node 1: Citizen Issue Report */}
                  <div
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.25rem',
                      background: 'var(--accent-emerald-subtle)',
                      border: '1px solid var(--accent-emerald-border)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--accent-emerald)', fontWeight: 650, fontSize: '0.92rem' }}>
                      <Users size={18} color="var(--accent-emerald)" /> Citizen Issue Report
                    </span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>Potholes &amp; Streetlights</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--accent-emerald)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                    <span>↓ Ingest &amp; Assign to Local Officer</span>
                  </div>

                  {/* Node 2: Responsible Officer Assigned */}
                  <div
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.25rem',
                      background: 'var(--accent-cyan-subtle)',
                      border: '1px solid var(--accent-cyan-border)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-primary)', fontWeight: 650, fontSize: '0.92rem' }}>
                      <UserCheck size={18} color="var(--accent-cyan)" /> Officer Assigned
                    </span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>48-Hour Resolution SLA</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--accent-amber)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                    <span>↓ If Unresolved within 48 Hours</span>
                  </div>

                  {/* Node 3: Escalation to Higher Officer */}
                  <div
                    style={{
                      width: '100%',
                      padding: '1rem 1rem',
                      background: 'var(--accent-amber-subtle)',
                      border: '1px solid var(--accent-amber-border)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      color: 'var(--accent-amber)',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                    }}
                  >
                    <ShieldAlert size={18} color="var(--accent-amber)" />
                    <span>Automatic Escalation to Higher-Level Officer</span>
                  </div>
                </div>
              )}

              {janTab === 'sla' && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.85rem', padding: '0.25rem 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-amber)', fontWeight: 700, fontSize: '1rem' }}>
                    <Clock size={18} color="var(--accent-amber)" /> 48-Hour Accountability Workflow
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.65 }}>
                    <div style={{ marginBottom: '0.35rem' }}>
                      1. A citizen reports a local civic issue through JanSetu.
                    </div>
                    <div style={{ marginBottom: '0.35rem' }}>
                      2. The issue is recorded and tracked by the system.
                    </div>
                    <div style={{ marginBottom: '0.35rem' }}>
                      3. The reported issue is assigned to the responsible officer.
                    </div>
                    <div style={{ marginBottom: '0.35rem' }}>
                      4. The assigned officer is expected to resolve the issue within 48 hours.
                    </div>
                    <div style={{ marginBottom: '0.35rem' }}>
                      5. The system tracks the resolution status in real-time.
                    </div>
                    <div style={{ marginBottom: '0.35rem' }}>
                      6. If unresolved within 48 hours, the complaint escalates to a higher-level officer.
                    </div>
                    <div>
                      7. This creates an accountability workflow for unresolved civic complaints.
                    </div>
                  </div>
                </div>
              )}

              {janTab === 'arch' && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '1rem' }}>
                    <Server size={18} /> Civic Issue Tracking &amp; Diagnostics Engine
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                    • <strong>Citizen Reporting Pipeline:</strong> Real-time incident intake, geographic tagging, and status verification.<br />
                    • <strong>Automated SLA Engine:</strong> Background daemon tracking 48-hour resolution windows and triggering hierarchical escalation.<br />
                    • <strong>Infrastructure Diagnostics:</strong> Telemetry integration for automated streetlight and infrastructure outage monitoring.
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
                <span style={{ color: 'var(--text-primary)' }}>Jan</span>
                <span style={{ color: 'var(--accent-emerald)' }}>Setu</span>
              </h3>

              <div
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 650,
                  color: 'var(--text-primary)',
                  marginBottom: '1.25rem',
                }}
              >
                Deployed Civic Issue Reporting &amp; Escalation Platform
              </div>

              <p
                style={{
                  fontSize: '0.94rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '1.6rem',
                }}
              >
                A deployed civic issue reporting and tracking platform that enables citizens to report problems in their surrounding neighborhoods with automated 48-hour officer escalation.
              </p>

              {/* 4 Capabilities with Checkmarks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                  <span>Citizen Civic Issue Reporting &amp; Real-Time Tracking</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                  <span>Automated Responsible Officer Assignment &amp; SLA Monitoring</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                  <span>48-Hour Resolution SLA with Automatic Hierarchical Escalation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                  <span>Administrative Accountability for Unresolved Civic Complaints</span>
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
                {['TypeScript', 'Python', 'Node.js', 'C++', 'IoT', 'Edge Computing'].map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--accent-emerald-border)',
                      color: 'var(--accent-emerald)',
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
                    background: 'var(--accent-emerald-subtle)',
                    border: '1px solid var(--accent-emerald)',
                    color: 'var(--accent-emerald)',
                    padding: '0.75rem 1.6rem',
                    borderRadius: '8px',
                    fontWeight: 750,
                    fontSize: '0.92rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 0 16px var(--accent-emerald-glow)',
                  }}
                  className="project-cta-btn-green"
                >
                  <span>View Technical Specs</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ================================================== */}
        {/* PROJECT 03: TRON (TEXT LEFT / VISUAL RIGHT)        */}
        {/* ================================================== */}
        <ScrollReveal
          direction="up"
          delay={0}
          style={{ marginTop: '5.5rem', paddingTop: '3.5rem', borderTop: '1px solid var(--border-subtle)' }}
        >
          {/* Metadata Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              marginBottom: '1.75rem',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.92rem',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-purple)', fontWeight: 600 }}>
              <Award size={16} color="var(--accent-purple)" /> Autonomous AI Project
            </span>
            <span style={{ color: 'var(--border-subtle)' }}>|</span>
            <span style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1rem' }}>03</span>
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
                background: tronTab === 'flow' ? 'var(--accent-purple-subtle)' : 'var(--bg-card)',
                border: '1px solid',
                borderColor: tronTab === 'flow' ? 'var(--accent-purple)' : 'var(--border-card)',
                color: tronTab === 'flow' ? 'var(--accent-purple)' : 'var(--text-secondary)',
                fontWeight: 650,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: tronTab === 'flow' ? '0 0 12px var(--accent-purple-glow)' : 'none',
              }}
            >
              Agent Flow
            </button>
            <button
              onClick={() => setTronTab('decision')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '8px',
                background: tronTab === 'decision' ? 'var(--accent-cyan-subtle)' : 'var(--bg-card)',
                border: '1px solid',
                borderColor: tronTab === 'decision' ? 'var(--accent-cyan)' : 'var(--border-card)',
                color: tronTab === 'decision' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontWeight: 650,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: tronTab === 'decision' ? '0 0 12px var(--accent-cyan-glow)' : 'none',
              }}
            >
              Decision Pipeline
            </button>
            <button
              onClick={() => setTronTab('memory')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '8px',
                background: tronTab === 'memory' ? 'var(--accent-emerald-subtle)' : 'var(--bg-card)',
                border: '1px solid',
                borderColor: tronTab === 'memory' ? 'var(--accent-emerald)' : 'var(--border-card)',
                color: tronTab === 'memory' ? 'var(--accent-emerald)' : 'var(--text-secondary)',
                fontWeight: 650,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: tronTab === 'memory' ? '0 0 12px var(--accent-emerald-glow)' : 'none',
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
                <span style={{ color: 'var(--text-primary)' }}>Tr</span>
                <span style={{ color: 'var(--accent-purple)' }}>on</span>
              </h3>

              <div
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 650,
                  color: 'var(--text-primary)',
                  marginBottom: '1.25rem',
                }}
              >
                Autonomous AI Agent
              </div>

              <p
                style={{
                  fontSize: '0.94rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '1.6rem',
                }}
              >
                An autonomous AI agent that discovers relevant topics, evaluates candidates, makes editorial decisions, generates content, validates sources, maintains persistent memory, and publishes autonomously.
              </p>

              {/* Feature List with Checkmarks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="var(--accent-purple)" style={{ flexShrink: 0 }} />
                  <span>Autonomous Topic Discovery &amp; Candidate Evaluation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="var(--accent-purple)" style={{ flexShrink: 0 }} />
                  <span>Editorial Decision-Making with Rejection Logic</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                  <span>Persistent Memory of Publications &amp; Decisions (SQLite)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                  <span>Autonomous Scheduling &amp; Publishing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                  <span>Structured AI Generation with Schema Validation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 550 }}>
                  <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
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
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--accent-purple-border)',
                      color: 'var(--accent-purple)',
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
                    background: 'var(--accent-purple-subtle)',
                    border: '1px solid var(--accent-purple)',
                    color: 'var(--accent-purple)',
                    padding: '0.75rem 1.6rem',
                    borderRadius: '8px',
                    fontWeight: 750,
                    fontSize: '0.92rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 0 16px var(--accent-purple-glow)',
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
                background: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                borderRadius: '16px',
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.85rem',
                boxShadow: 'var(--shadow-card)',
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
                      background: 'var(--accent-cyan-subtle)',
                      border: '1px solid var(--accent-cyan-border)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-primary)', fontWeight: 650, fontSize: '0.94rem' }}>
                      <Sparkles size={18} color="var(--accent-cyan)" /> Topic Discovery
                    </span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>Candidate Engine</span>
                  </div>

                  {/* Arrow 1 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-secondary)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', padding: '0.1rem 0' }}>
                    <span>↓</span>
                    <span>Editorial Scoring &amp; Rejection Filter</span>
                  </div>

                  {/* Node 2: Primary Generation: Gemini */}
                  <div
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.25rem',
                      background: 'var(--accent-purple-subtle)',
                      border: '1px solid var(--accent-purple-border)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--accent-purple)', fontWeight: 650, fontSize: '0.94rem' }}>
                      <Bot size={18} color="var(--accent-purple)" /> Gemini Generation
                    </span>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        color: 'var(--accent-amber)',
                        background: 'var(--accent-amber-subtle)',
                        border: '1px solid var(--accent-amber-border)',
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--accent-purple)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', padding: '0.1rem 0' }}>
                    <span>↓</span>
                    <span>Source Validation &amp; Memory Check</span>
                  </div>

                  {/* Split Nodes */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', width: '100%' }}>
                    {/* Node 3: arXiv Fallback */}
                    <div
                      style={{
                        padding: '0.9rem 0.8rem',
                        background: 'var(--accent-amber-subtle)',
                        border: '1px solid var(--accent-amber-border)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        color: 'var(--accent-amber)',
                        fontWeight: 650,
                        fontSize: '0.86rem',
                        textAlign: 'center',
                      }}
                    >
                      <BookOpen size={16} color="var(--accent-amber)" />
                      <span>arXiv &amp; Sources</span>
                    </div>

                    {/* Node 4: SQLite Persistence */}
                    <div
                      style={{
                        padding: '0.9rem 0.8rem',
                        background: 'var(--accent-emerald-subtle)',
                        border: '1px solid var(--accent-emerald-border)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        color: 'var(--accent-emerald)',
                        fontWeight: 650,
                        fontSize: '0.86rem',
                        textAlign: 'center',
                      }}
                    >
                      <Database size={16} color="var(--accent-emerald)" />
                      <span>SQLite Memory</span>
                    </div>
                  </div>

                  {/* Arrow 3 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--accent-emerald)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', padding: '0.1rem 0' }}>
                    <span>↓</span>
                    <span>Schema Validation &amp; Scheduling</span>
                  </div>

                  {/* Node 5: Autonomous Publishing */}
                  <div
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.25rem',
                      background: 'var(--accent-emerald-subtle)',
                      border: '1px solid var(--accent-emerald-border)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--accent-emerald)', fontWeight: 650, fontSize: '0.94rem' }}>
                      <CheckCircle2 size={18} color="var(--accent-emerald)" /> Autonomous Publishing
                    </span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>Scheduled Run</span>
                  </div>
                </div>
              )}

              {tronTab === 'decision' && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '1rem' }}>
                    <Bot size={18} /> Editorial Scoring &amp; Multi-Model Fallback
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                    • <strong>Candidate Evaluation:</strong> Discovered topics are filtered via strict threshold scoring.<br />
                    • <strong>Rejection Logic:</strong> Low-relevance or unsupported topics are rejected early.<br />
                    • <strong>Multi-Model Architecture:</strong> Primary generation executes via Gemini Pro/Flash with automatic failover to Groq Llama-3.<br />
                    • <strong>Strict Schema:</strong> Output is validated against predefined Pydantic JSON schemas.
                  </p>
                </div>
              )}

              {tronTab === 'memory' && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-emerald)', fontWeight: 700, fontSize: '1rem' }}>
                    <Database size={18} /> Persistent Memory &amp; Source Integrity
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                    • <strong>SQLite Store:</strong> Tracks historical publication logs, rejected candidates, and semantic topic clusters.<br />
                    • <strong>Duplicate Protection:</strong> Employs fail-closed deduplication hashes before publishing.<br />
                    • <strong>Citation Verification:</strong> Cross-checks factual assertions against primary research citations and arXiv API fallbacks.
                  </p>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Deep Dive Technical Specs Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestCode={onRequestCode}
      />

      {/* Responsive Styles */}
      <style>{`
        .project-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 22px var(--accent-cyan-glow) !important;
        }
        .project-cta-btn-green:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 22px var(--accent-emerald-glow) !important;
        }
        .project-cta-btn-purple:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 22px var(--accent-purple-glow) !important;
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
