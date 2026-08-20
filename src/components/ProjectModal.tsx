import React, { useEffect } from 'react';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { X, ExternalLink, CheckCircle2, Server, Award } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is active
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(7, 8, 13, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-cyan)',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(0, 242, 254, 0.2)',
          position: 'relative',
          padding: '2.25rem',
        }}
        onClick={(e) => e.stopPropagation()}
        className="animate-slide-up"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Project Modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-main)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'var(--transition-fast)',
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="section-badge" style={{ marginBottom: 0 }}>
              <Award size={14} />
              {project.badge}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              {project.category}
            </span>
          </div>

          <h2
            id="modal-project-title"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              fontWeight: 800,
              color: 'var(--text-main)',
              lineHeight: 1.1,
            }}
          >
            {project.title}
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', marginTop: '0.25rem', fontWeight: 500 }}>
            {project.subtitle}
          </p>
        </div>

        {/* Modal Technical Specs Grid */}
        {project.technicalSpecs && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
            }}
          >
            {project.technicalSpecs.map((m, idx) => (
              <div key={idx}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                  {m.label}
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', marginTop: '0.2rem' }}>
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Deep Dive Description */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
            Engineering Deep-Dive
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.98rem' }}>
            {project.fullDescription}
          </p>
        </div>

        {/* Architecture Overview */}
        <div
          style={{
            marginBottom: '2rem',
            background: 'var(--bg-dark-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
          }}
        >
          <h4
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.05rem',
              fontWeight: 700,
              color: 'var(--text-main)',
              marginBottom: '0.6rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Server size={18} color="var(--accent-cyan)" />
            System Architecture & Data Flow
          </h4>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            {project.architectureOverview}
          </p>
        </div>

        {/* Key Engineering Highlights */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem' }}>
            Key Technical Implementations
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
            {project.highlights.map((h, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dim)', marginBottom: '0.75rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
            Technologies Used
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((t, idx) => (
              <span key={idx} className="tech-badge" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Links */}
        <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <GithubIcon size={16} />
              <span>GitHub Repository</span>
            </a>
          ) : (
            <span className="btn btn-outline" style={{ opacity: 0.6, cursor: 'not-allowed' }}>
              <GithubIcon size={16} />
              <span>Repository Configured on Request</span>
            </span>
          )}

          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <ExternalLink size={16} />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
