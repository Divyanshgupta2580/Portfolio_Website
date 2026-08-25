import React, { useEffect } from "react";
import { ABOUT_MODAL_DATA, PORTFOLIO_DATA } from "../data/portfolioData";
import type { Project } from "../data/portfolioData";
import {
  X,
  Code2,
  Layers,
  Trophy,
  BookOpen,
  ArrowUpRight,
  Terminal,
  Cpu,
  Database,
  GitBranch,
  Globe,
} from "lucide-react";

export type AboutModalType = "projects" | "tech" | "hackathons" | "learning";

interface AboutModalProps {
  type: AboutModalType | null;
  onClose: () => void;
  onSelectProject?: (project: Project) => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  type,
  onClose,
  onSelectProject,
}) => {
  useEffect(() => {
    if (!type) return;

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
  }, [type, onClose]);

  if (!type) return null;

  const handleProjectClick = (projectId: string) => {
    const foundProject = PORTFOLIO_DATA.projects.find((p) => p.id === projectId);
    if (foundProject && onSelectProject) {
      onClose();
      onSelectProject(foundProject);
    }
  };

  const handleSkillsNav = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById("skills");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const getTechIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes("c++") || lower.includes("python") || lower.includes("script")) {
      return <Terminal size={14} color="var(--accent-cyan)" />;
    }
    if (lower.includes("react") || lower.includes("node") || lower.includes("express") || lower.includes("vercel")) {
      return <Globe size={14} color="var(--accent-blue)" />;
    }
    if (lower.includes("db") || lower.includes("sql") || lower.includes("neo4j") || lower.includes("firebase") || lower.includes("mongo")) {
      return <Database size={14} color="var(--accent-purple)" />;
    }
    if (lower.includes("git") || lower.includes("docker")) {
      return <GitBranch size={14} color="var(--accent-emerald)" />;
    }
    return <Cpu size={14} color="var(--accent-cyan)" />;
  };

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
      aria-labelledby="about-modal-title"
    >
      <div
        style={{
          background: "var(--bg-modal)",
          border: "1px solid var(--border-cyan)",
          borderRadius: "20px",
          width: "min(680px, 100%)",
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
            padding: "1.25rem 1.75rem 0.85rem 1.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "var(--bg-modal)",
            borderBottom: "1px solid var(--border-subtle)",
            zIndex: 10,
          }}
        >
          {type === "projects" && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "var(--accent-cyan-subtle)",
                  border: "1px solid var(--accent-cyan-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Code2 size={16} color="var(--accent-cyan)" />
              </div>
              <div>
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent-cyan)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  PROJECTS · 02 MAJOR SYSTEMS
                </span>
              </div>
            </div>
          )}

          {type === "hackathons" && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "var(--accent-purple-subtle)",
                  border: "1px solid var(--accent-purple-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Trophy size={16} color="var(--accent-purple)" />
              </div>
              <div>
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent-purple)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  HACKATHONS · 4 COMPLETED + 1 UPCOMING
                </span>
              </div>
            </div>
          )}

          {type === "tech" && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "rgba(59, 130, 246, 0.10)",
                  border: "1px solid rgba(59, 130, 246, 0.30)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Layers size={16} color="var(--accent-blue)" />
              </div>
              <div>
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent-blue)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  TECHNOLOGIES · 13 CORE TOOLS
                </span>
              </div>
            </div>
          )}

          {type === "learning" && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "var(--accent-emerald-subtle)",
                  border: "1px solid var(--accent-emerald-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BookOpen size={16} color="var(--accent-emerald)" />
              </div>
              <div>
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent-emerald)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  ENGINEERING PHILOSOPHY
                </span>
              </div>
            </div>
          )}

          <button
            onClick={onClose}
            aria-label="Close Modal"
            style={{
              width: "34px",
              height: "34px",
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
            <X size={17} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            minHeight: 0,
            padding: "1.5rem 1.75rem 2rem 1.75rem",
            overscrollBehavior: "contain",
          }}
        >
          {/* ================================================== */}
          {/* 1. MAJOR PROJECTS VIEW                             */}
          {/* ================================================== */}
          {type === "projects" && (
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                <h3
                  id="about-modal-title"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.45rem",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    lineHeight: 1.2,
                  }}
                >
                  Major Projects
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", marginTop: "0.3rem" }}>
                  Selected flagship platforms engineered and showcased in my portfolio. Click any project to open full technical specifications.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                {ABOUT_MODAL_DATA.projects.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => handleProjectClick(proj.id)}
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-card)",
                      borderRadius: "14px",
                      padding: "1.35rem 1.5rem",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      position: "relative",
                    }}
                    className="about-modal-card-item"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleProjectClick(proj.id);
                      }
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap", marginBottom: "0.35rem" }}>
                          <span
                            style={{
                              fontFamily: "var(--font-heading)",
                              fontSize: "1.2rem",
                              fontWeight: 800,
                              color: "var(--text-primary)",
                            }}
                          >
                            {proj.title}
                          </span>
                          <span
                            style={{
                              fontSize: "0.74rem",
                              padding: "0.2rem 0.55rem",
                              borderRadius: "4px",
                              background: "var(--accent-cyan-subtle)",
                              border: "1px solid var(--accent-cyan-border)",
                              color: "var(--accent-cyan)",
                              fontWeight: 600,
                              fontFamily: "var(--font-mono)",
                            }}
                          >
                            {proj.badge}
                          </span>
                        </div>

                        <div style={{ fontSize: "0.92rem", color: "var(--accent-cyan)", fontWeight: 600, marginBottom: "0.45rem" }}>
                          {proj.tagline}
                        </div>

                        <div style={{ fontSize: "0.86rem", color: "var(--text-secondary)", marginBottom: "0.65rem", lineHeight: 1.45 }}>
                          <strong style={{ color: "var(--text-primary)" }}>Contribution:</strong> {proj.contribution}
                        </div>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.5rem" }}>
                          {proj.technologies.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              style={{
                                fontSize: "0.76rem",
                                padding: "0.2rem 0.55rem",
                                borderRadius: "4px",
                                background: "var(--bg-secondary)",
                                border: "1px solid var(--border-subtle)",
                                color: "var(--text-secondary)",
                                fontFamily: "var(--font-mono)",
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          background: "var(--bg-secondary)",
                          border: "1px solid var(--border-card)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--accent-cyan)",
                          flexShrink: 0,
                          marginTop: "0.2rem",
                        }}
                        className="modal-arrow-box"
                      >
                        <ArrowUpRight size={17} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================================================== */}
          {/* 2. HACKATHONS VIEW                                 */}
          {/* ================================================== */}
          {type === "hackathons" && (
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                <h3
                  id="about-modal-title"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.45rem",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    lineHeight: 1.2,
                  }}
                >
                  Hackathons &amp; Competitions
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", marginTop: "0.3rem" }}>
                  Engineering hackathons and verified contributions built under competitive timeframes.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {ABOUT_MODAL_DATA.hackathons.map((h) => (
                  <div
                    key={h.id}
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-card)",
                      borderRadius: "14px",
                      padding: "1.15rem 1.35rem",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1.1rem",
                      transition: "all 0.2s ease",
                    }}
                    className="about-modal-card-item"
                  >
                    {/* Number / Calendar Badge */}
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: h.isUpcoming ? "var(--accent-amber)" : "var(--accent-purple)",
                        background: h.isUpcoming ? "var(--accent-amber-subtle)" : "var(--accent-purple-subtle)",
                        border: `1px solid ${h.isUpcoming ? "var(--accent-amber-border)" : "var(--accent-purple-border)"}`,
                        padding: "0.3rem 0.55rem",
                        borderRadius: "6px",
                        flexShrink: 0,
                        marginTop: "0.15rem",
                      }}
                    >
                      {h.num}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1.08rem",
                            fontWeight: 750,
                            color: "var(--text-primary)",
                          }}
                        >
                          {h.name}
                        </span>

                        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                          {h.project && (
                            <span
                              style={{
                                fontSize: "0.74rem",
                                fontFamily: "var(--font-mono)",
                                fontWeight: 600,
                                color: "var(--accent-cyan)",
                                background: "var(--accent-cyan-subtle)",
                                border: "1px solid var(--accent-cyan-border)",
                                padding: "0.18rem 0.5rem",
                                borderRadius: "4px",
                              }}
                            >
                              Project: {h.project}
                            </span>
                          )}
                          <span
                            style={{
                              fontSize: "0.72rem",
                              fontFamily: "var(--font-mono)",
                              fontWeight: 700,
                              color: h.isUpcoming ? "var(--accent-amber)" : "var(--accent-emerald)",
                              background: h.isUpcoming ? "var(--accent-amber-subtle)" : "var(--accent-emerald-subtle)",
                              border: `1px solid ${h.isUpcoming ? "var(--accent-amber-border)" : "var(--accent-emerald-border)"}`,
                              padding: "0.18rem 0.5rem",
                              borderRadius: "4px",
                              textTransform: "uppercase",
                            }}
                          >
                            {h.badge}
                          </span>
                        </div>
                      </div>

                      <div style={{ fontSize: "0.86rem", color: "var(--accent-purple)", fontWeight: 600, marginBottom: "0.3rem" }}>
                        {h.focus}
                      </div>

                      <div style={{ fontSize: "0.84rem", color: "var(--text-secondary)", marginBottom: "0.3rem", lineHeight: 1.45 }}>
                        <strong style={{ color: "var(--text-primary)" }}>Contribution:</strong> {h.contribution}
                      </div>

                      {h.description && (
                        <p style={{ fontSize: "0.84rem", color: "var(--text-secondary)", lineHeight: 1.45, margin: 0 }}>
                          {h.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================================================== */}
          {/* 3. TECHNOLOGIES VIEW                               */}
          {/* ================================================== */}
          {type === "tech" && (
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                <h3
                  id="about-modal-title"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.45rem",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    lineHeight: 1.2,
                  }}
                >
                  Core Technologies
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", marginTop: "0.3rem" }}>
                  Verified languages, frameworks, databases, and infrastructure tools in my engineering stack.
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(135px, 1fr))",
                  gap: "0.75rem",
                }}
              >
                {ABOUT_MODAL_DATA.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-card)",
                      borderRadius: "10px",
                      padding: "0.85rem 1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.65rem",
                      transition: "all 0.2s ease",
                    }}
                    className="about-modal-card-item"
                  >
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "6px",
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {getTechIcon(tech)}
                    </div>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 650,
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================================================== */}
          {/* 4. ALWAYS LEARNING & BUILDING VIEW                 */}
          {/* ================================================== */}
          {type === "learning" && (
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                <h3
                  id="about-modal-title"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.45rem",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    lineHeight: 1.2,
                  }}
                >
                  {ABOUT_MODAL_DATA.learning.title}
                </h3>
                <p style={{ color: "var(--accent-emerald)", fontSize: "0.92rem", marginTop: "0.3rem", fontWeight: 600 }}>
                  {ABOUT_MODAL_DATA.learning.tagline}
                </p>
              </div>

              {/* Main Statement Box */}
              <div
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--accent-emerald-border)",
                  borderRadius: "14px",
                  padding: "1.35rem 1.5rem",
                  marginBottom: "1.5rem",
                  boxShadow: "0 0 16px var(--accent-emerald-glow)",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-primary)",
                    lineHeight: 1.65,
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  "{ABOUT_MODAL_DATA.learning.description}"
                </p>
              </div>

              {/* Focus Pillars */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.75rem" }}>
                {ABOUT_MODAL_DATA.learning.pillars.map((pil, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-card)",
                      borderRadius: "10px",
                      padding: "0.85rem 1.15rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--accent-emerald)",
                        boxShadow: "0 0 8px var(--accent-emerald)",
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <span style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.9rem" }}>
                        {pil.label}:
                      </span>{" "}
                      <span style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>
                        {pil.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* View Skills Action Button (without trailing arrows) */}
              <button
                type="button"
                onClick={handleSkillsNav}
                style={{
                  width: "100%",
                  minHeight: "46px",
                  padding: "0 1.5rem",
                  background: "var(--accent-emerald-subtle)",
                  border: "1px solid var(--accent-emerald)",
                  borderRadius: "10px",
                  color: "var(--accent-emerald)",
                  fontFamily: "var(--font-main)",
                  fontSize: "0.95rem",
                  fontWeight: 750,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: "0 0 16px var(--accent-emerald-glow)",
                }}
                className="about-modal-action-btn"
              >
                <span>{ABOUT_MODAL_DATA.learning.ctaLabel}</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .about-modal-card-item:hover {
          transform: translateY(-2px);
          border-color: var(--accent-cyan-border) !important;
          box-shadow: var(--shadow-card-hover) !important;
        }
        .about-modal-card-item:hover .modal-arrow-box {
          background: var(--accent-cyan) !important;
          color: var(--text-on-accent) !important;
          transform: scale(1.05);
        }
        .about-modal-action-btn:hover {
          background: var(--accent-emerald) !important;
          color: var(--text-on-accent) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};
