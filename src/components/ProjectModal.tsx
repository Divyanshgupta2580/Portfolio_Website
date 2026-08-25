import React, { useEffect } from "react";
import type { Project } from "../data/portfolioData";
import { GithubIcon } from "./Icons";
import { X, ExternalLink, CheckCircle2, Server, Award, Code2 } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestCode?: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onRequestCode }) => {
  // Listen for Escape key and lock body scroll
  useEffect(() => {
    if (!project) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 300,
        background: "var(--overlay-bg)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        overflow: "hidden",
        overscrollBehavior: "contain",
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        style={{
          background: "var(--bg-modal)",
          border: "1px solid var(--border-cyan)",
          borderRadius: "20px",
          width: "min(820px, 100%)",
          maxHeight: "min(88vh, calc(100dvh - 48px))",
          boxShadow: "var(--shadow-card-hover)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          margin: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
        className="animate-slide-up"
      >
        {/* Pinned Header */}
        <div
          style={{
            flexShrink: 0,
            padding: "1.25rem 2rem 0.5rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "var(--bg-modal)",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span className="section-badge" style={{ marginBottom: 0 }}>
              <Award size={14} />
              {project.badge}
            </span>
            <span style={{ fontSize: "0.84rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontWeight: 600 }}>
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Project Modal"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-card)",
              color: "var(--text-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "var(--transition-fast)",
              flexShrink: 0,
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            minHeight: 0,
            padding: "0.5rem 2rem 2.25rem 2rem",
            overscrollBehavior: "contain",
          }}
        >
          {/* Modal Title */}
          <div style={{ marginBottom: "1.25rem" }}>
            <h2
              id="modal-project-title"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.75rem, 3vw, 2.2rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.15,
              }}
            >
              {project.title}
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--accent-cyan)", marginTop: "0.35rem", fontWeight: 600 }}>
              {project.subtitle}
            </p>
          </div>

          {/* Contribution Banner */}
          {project.contribution && (
            <div
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--accent-cyan-border)",
                borderRadius: "10px",
                padding: "0.85rem 1.15rem",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
              }}
            >
              <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: "0.1rem" }} />
              <div style={{ fontSize: "0.92rem", color: "var(--text-primary)", lineHeight: 1.45 }}>
                <strong style={{ color: "var(--accent-cyan)", fontFamily: "var(--font-mono)", fontSize: "0.78rem", textTransform: "uppercase", display: "inline-block", marginRight: "0.35rem" }}>
                  My Contribution:
                </strong>
                {project.contribution}
              </div>
            </div>
          )}

          {/* Modal Technical Specs Grid */}
          {project.technicalSpecs && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
                marginBottom: "1.75rem",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-card)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
              }}
            >
              {project.technicalSpecs.map((m, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: "0.78rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: "0.98rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "0.25rem" }}>
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Deep Dive Description / Overview */}
          <div style={{ marginBottom: "1.75rem" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.55rem" }}>
              Technical Overview
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.96rem", margin: 0 }}>
              {project.fullDescription}
            </p>
          </div>

          {/* Key Engineering Implementations / What I Built */}
          <div style={{ marginBottom: "1.75rem" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
              What I Built
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.65rem" }}>
              {project.highlights.slice(0, 6).map((h, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle2 size={17} color="var(--accent-cyan)" style={{ marginTop: "0.15rem", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.94rem", color: "var(--text-primary)", lineHeight: 1.5, fontWeight: 500 }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Overview */}
          <div
            style={{
              marginBottom: "1.75rem",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-cyan)",
              borderRadius: "var(--radius-md)",
              padding: "1.35rem 1.5rem",
            }}
          >
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.55rem",
              }}
            >
              <Server size={17} color="var(--accent-cyan)" />
              Architecture &amp; Data Flow
            </h4>
            <p style={{ fontSize: "0.93rem", color: "var(--text-secondary)", lineHeight: 1.65, margin: 0 }}>
              {project.architectureOverview}
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.75rem", textTransform: "uppercase", fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}>
              Stack
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
              {project.technologies.map((t, idx) => (
                <span key={idx} className="tech-badge" style={{ padding: "0.4rem 0.85rem", fontSize: "0.85rem" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Links & Actions */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              borderTop: "1px solid var(--border-subtle)",
              paddingTop: "1.5rem",
              paddingBottom: "0.75rem",
              flexWrap: "wrap",
            }}
          >
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <GithubIcon size={18} />
                <span>GitHub Repository</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRequestCode?.(project.title);
                }}
                className="btn btn-secondary"
                style={{
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                }}
              >
                <Code2 size={17} color="var(--accent-cyan)" />
                <span>Request Code Access</span>
              </button>
            )}

            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <ExternalLink size={18} />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
