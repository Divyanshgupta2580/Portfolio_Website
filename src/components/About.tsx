import React, { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { AboutModal } from "./AboutModal";
import type { AboutModalType } from "./AboutModal";
import { ProjectModal } from "./ProjectModal";
import type { Project } from "../data/portfolioData";
import {
  UserRound,
  GraduationCap,
  Layers,
  Code2,
  Trophy,
  BookOpen,
  Quote,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface AboutProps {
  onContactClick?: () => void;
  onRequestCode?: (projectName: string) => void;
}

export const About: React.FC<AboutProps> = ({ onRequestCode }) => {
  const [activeModal, setActiveModal] = useState<AboutModalType | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const focusPoints = [
    {
      icon: <GraduationCap size={20} color="var(--accent-cyan)" />,
      accent: "var(--accent-cyan)",
      subtle: "rgba(34, 211, 238, 0.08)",
      border: "rgba(34, 211, 238, 0.28)",
      title: "Academic Background",
      line1: "B.Tech CSE (AI & ML) · Mirai School of Tech, AKTU",
      line2: "Grad 2029 · Sem 1: 9.00 CGPA · Sem 2: 9.43 CGPA",
    },
    {
      icon: <Layers size={20} color="var(--accent-blue)" />,
      accent: "var(--accent-blue)",
      subtle: "rgba(59, 130, 246, 0.08)",
      border: "rgba(59, 130, 246, 0.28)",
      title: "Systems Builder",
      line1: "Architecting backend services, REST APIs,",
      line2: "real-time WebSocket state buses, and hardware communication",
    },
    {
      icon: <Sparkles size={20} color="var(--accent-purple)" />,
      accent: "var(--accent-purple)",
      subtle: "rgba(168, 85, 247, 0.08)",
      border: "rgba(168, 85, 247, 0.28)",
      title: "AI & Data Modeling",
      line1: "Engineering RAG pipelines, graph data structures",
      line2: "in Neo4j, and autonomous multi-model agent workflows",
    },
    {
      icon: <Trophy size={20} color="var(--accent-emerald)" />,
      accent: "var(--accent-emerald)",
      subtle: "rgba(16, 185, 129, 0.08)",
      border: "rgba(16, 185, 129, 0.28)",
      title: "Hackathon Competitor",
      line1: "4+ completed hackathons (HackHazards'26, Qualcomm, FAR AWAY, AB Talks) with working",
      line2: "software systems",
    },
  ];

  const statCards = [
    {
      id: "projects" as const,
      value: "2+",
      label: "Major Projects",
      sub: "BenefitOS & RailGuard-AI",
      color: "var(--accent-cyan)",
      subtle: "rgba(34, 211, 238, 0.08)",
      border: "rgba(34, 211, 238, 0.28)",
      icon: <Code2 size={18} color="var(--accent-cyan)" />,
    },
    {
      id: "tech" as const,
      value: "10+",
      label: "Technologies",
      sub: "Languages, Backend & Data",
      color: "var(--accent-blue)",
      subtle: "rgba(59, 130, 246, 0.08)",
      border: "rgba(59, 130, 246, 0.28)",
      icon: <Layers size={18} color="var(--accent-blue)" />,
    },
    {
      id: "hackathons" as const,
      value: "4+",
      label: "Completed Hackathons",
      sub: "Qualcomm, FAR AWAY, AB Talks, HackHazards",
      color: "var(--accent-purple)",
      subtle: "rgba(168, 85, 247, 0.08)",
      border: "rgba(168, 85, 247, 0.28)",
      icon: <Trophy size={18} color="var(--accent-purple)" />,
    },
    {
      id: "learning" as const,
      value: "Always",
      label: "Learning & Building",
      sub: "Continuous Systems Growth",
      color: "var(--accent-emerald)",
      subtle: "rgba(16, 185, 129, 0.08)",
      border: "rgba(16, 185, 129, 0.28)",
      icon: <BookOpen size={18} color="var(--accent-emerald)" />,
    },
  ];

  return (
    <section
      id="about"
      className="section"
      style={{
        background: "var(--bg-secondary)",
        padding: "5.5rem 0 6rem 0",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 1.5rem",
          width: "100%",
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <ScrollReveal direction="up" delay={0}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.95rem",
                borderRadius: "9999px",
                background: "var(--accent-cyan-subtle)",
                border: "1px solid var(--accent-cyan-border)",
                color: "var(--accent-cyan)",
                fontSize: "0.82rem",
                fontFamily: "var(--font-mono)",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "0.85rem",
              }}
            >
              <UserRound size={14} />
              <span>About Me</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Engineering with Purpose &amp; Precision
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                maxWidth: "680px",
                margin: "0.85rem auto 0 auto",
                lineHeight: 1.6,
              }}
            >
              Computer Science engineering student at Mirai School of Technology (AKTU) focused on building dependable software systems, backend architectures, and AI pipelines.
            </p>
          </ScrollReveal>
        </div>

        {/* ================= MAIN ASYMMETRIC GRID ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: "1.25rem",
            alignItems: "stretch",
          }}
          className="about-main-split-grid"
        >
          {/* ----- LEFT COLUMN: 4 STACKED INFORMATION PANELS ----- */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              height: "100%",
            }}
            className="about-left-stack"
          >
            {focusPoints.map((item, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={idx * 50}
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <div
                  className="about-info-card"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-card)",
                    borderLeft: `3px solid ${item.accent}`,
                    borderRadius: "14px",
                    padding: "1.15rem 1.4rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.15rem",
                    boxShadow: "var(--shadow-card)",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    height: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Subtle Circular Icon Container */}
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "50%",
                      background: item.subtle,
                      border: `1px solid ${item.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Information Hierarchy */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "1.02rem",
                        color: "var(--text-primary)",
                        marginBottom: "0.25rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.83rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.45,
                      }}
                    >
                      <div>{item.line1}</div>
                      <div>{item.line2}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ----- RIGHT SIDE: 2x2 METRIC CARDS (INTERACTIVE) ----- */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridAutoRows: "1fr",
              gap: "1rem",
              height: "100%",
            }}
            className="about-right-metric-grid"
          >
            {statCards.map((stat, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={idx * 60 + 30}
                style={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                <div
                  className="about-metric-card"
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveModal(stat.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveModal(stat.id);
                    }
                  }}
                  aria-label={`${stat.value} ${stat.label} - Click for details`}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-card)",
                    borderRadius: "14px",
                    padding: "1.4rem 1.35rem 1.25rem 1.35rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: "var(--shadow-card)",
                    cursor: "pointer",
                    position: "relative",
                    userSelect: "none",
                    height: "100%",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Top Row: Big Number & Subtle Icon Container */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: "0.85rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: stat.value.length > 3 ? "2.15rem" : "2.65rem",
                        fontWeight: 800,
                        color: stat.color,
                        lineHeight: 1,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {stat.value}
                    </span>

                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "50%",
                        background: stat.subtle,
                        border: `1px solid ${stat.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.2s ease",
                      }}
                      className="about-metric-icon"
                    >
                      {stat.icon}
                    </div>
                  </div>

                  {/* Middle / Bottom Content & Action Indicator */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 700,
                          fontSize: "1.02rem",
                          color: "var(--text-primary)",
                          marginBottom: "0.2rem",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {stat.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.35,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {stat.sub}
                      </div>
                    </div>

                    {/* Bottom-right directional arrow */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        paddingBottom: "0.15rem",
                      }}
                    >
                      <ArrowUpRight
                        size={17}
                        style={{
                          color: stat.color,
                          opacity: 0.75,
                          transition: "all 0.2s ease",
                        }}
                        className="about-metric-arrow"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ================= FULL-WIDTH ACADEMIC SUMMARY CARD ================= */}
        <ScrollReveal
          direction="up"
          delay={120}
          style={{
            marginTop: "1.25rem",
          }}
        >
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              borderRadius: "14px",
              padding: "1.25rem 1.65rem",
              display: "flex",
              alignItems: "center",
              gap: "1.35rem",
              boxShadow: "var(--shadow-card)",
            }}
            className="about-summary-panel"
          >
            {/* Quote Icon Container */}
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "var(--accent-cyan-subtle)",
                border: "1px solid var(--accent-cyan-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Quote size={20} color="var(--accent-cyan)" />
            </div>

            {/* Academic Credential Text */}
            <div style={{ fontSize: "0.93rem", lineHeight: 1.55 }}>
              <div style={{ color: "var(--text-primary)" }}>
                Pursuing B.Tech in Computer Science Engineering (AI &amp; ML) at Mirai School of Technology, AKTU University (Expected 2029).
              </div>
              <div style={{ color: "var(--accent-cyan)", fontWeight: 600, marginTop: "0.2rem" }}>
                Academic Performance: 9.43 CGPA (Semester 2) · 9.00 CGPA (Semester 1)
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Interactive About Stat Detail Modal */}
      <AboutModal
        type={activeModal}
        onClose={() => setActiveModal(null)}
        onSelectProject={(project) => {
          setSelectedProject(project);
        }}
      />

      {/* Reused Project Modal for Direct Deep-Dive */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestCode={onRequestCode}
      />

      <style>{`
        .about-info-card:hover {
          border-color: rgba(255, 255, 255, 0.16) !important;
          transform: translateY(-2px);
          box-shadow: var(--shadow-card-hover) !important;
        }
        .about-metric-card:hover {
          border-color: rgba(255, 255, 255, 0.18) !important;
          transform: translateY(-2px);
          box-shadow: var(--shadow-card-hover) !important;
        }
        .about-metric-card:hover .about-metric-arrow {
          opacity: 1 !important;
          transform: translate(2px, -2px);
        }
        .about-metric-card:focus-visible {
          outline: 2px solid var(--accent-cyan);
          outline-offset: 3px;
        }

        @media (max-width: 968px) {
          .about-main-split-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .about-right-metric-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 600px) {
          .about-right-metric-grid {
            grid-template-columns: 1fr !important;
          }
          .about-summary-panel {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};
