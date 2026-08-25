import React, { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { AboutModal } from "./AboutModal";
import type { AboutModalType } from "./AboutModal";
import { ProjectModal } from "./ProjectModal";
import type { Project } from "../data/portfolioData";
import {
  UserRound,
  GraduationCap,
  Target,
  Layers,
  TrendingUp,
  Code2,
  Trophy,
  BookOpen,
  Quote,
  ArrowUpRight,
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
      icon: <GraduationCap size={22} color="var(--accent-cyan)" />,
      accent: "var(--accent-cyan)",
      subtle: "var(--accent-cyan-subtle)",
      border: "var(--accent-cyan-border)",
      glow: "var(--accent-cyan-glow)",
      title: "Engineering Student",
      desc: "Computer Science & Systems Engineering",
    },
    {
      icon: <Target size={22} color="var(--accent-blue)" />,
      accent: "var(--accent-blue)",
      subtle: "rgba(59, 130, 246, 0.10)",
      border: "rgba(59, 130, 246, 0.35)",
      glow: "rgba(59, 130, 246, 0.20)",
      title: "Problem Solver",
      desc: "Love solving complex real-world engineering problems",
    },
    {
      icon: <Layers size={22} color="var(--accent-purple)" />,
      accent: "var(--accent-purple)",
      subtle: "var(--accent-purple-subtle)",
      border: "var(--accent-purple-border)",
      glow: "var(--accent-purple-glow)",
      title: "Builder",
      desc: "Enjoy architecting robust, end-to-end applications",
    },
    {
      icon: <TrendingUp size={22} color="var(--accent-emerald)" />,
      accent: "var(--accent-emerald)",
      subtle: "var(--accent-emerald-subtle)",
      border: "var(--accent-emerald-border)",
      glow: "var(--accent-emerald-glow)",
      title: "Lifelong Learner",
      desc: "Always exploring cutting-edge AI and software systems",
    },
  ];

  const statCards = [
    {
      id: "projects" as const,
      value: "2+",
      label: "Major Projects",
      sub: "Built & Deployed",
      color: "var(--accent-cyan)",
      subtle: "var(--accent-cyan-subtle)",
      border: "var(--accent-cyan-border)",
      glow: "var(--accent-cyan-glow)",
      icon: <Code2 size={18} color="var(--accent-cyan)" />,
    },
    {
      id: "tech" as const,
      value: "10+",
      label: "Technologies",
      sub: "Worked With",
      color: "var(--accent-blue)",
      subtle: "rgba(59, 130, 246, 0.08)",
      border: "rgba(59, 130, 246, 0.28)",
      glow: "rgba(59, 130, 246, 0.16)",
      icon: <Layers size={18} color="var(--accent-blue)" />,
    },
    {
      id: "hackathons" as const,
      value: "5+",
      label: "Hackathons",
      sub: "Participations",
      color: "var(--accent-purple)",
      subtle: "var(--accent-purple-subtle)",
      border: "var(--accent-purple-border)",
      glow: "var(--accent-purple-glow)",
      icon: <Trophy size={18} color="var(--accent-purple)" />,
    },
    {
      id: "learning" as const,
      value: "Always",
      label: "Learning & Building",
      sub: "Continuously",
      color: "var(--accent-emerald)",
      subtle: "var(--accent-emerald-subtle)",
      border: "var(--accent-emerald-border)",
      glow: "var(--accent-emerald-glow)",
      icon: <BookOpen size={18} color="var(--accent-emerald)" />,
    },
  ];

  return (
    <section
      id="about"
      className="section"
      style={{
        background: "var(--bg-secondary)",
        padding: "6rem 0",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1200px",
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
              Engineering with Purpose & Precision
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
              A snapshot of who I am, what drives my engineering curiosity, and the core metrics defining my journey.
            </p>
          </ScrollReveal>
        </div>

        {/* ================= MAIN TWO-COLUMN SPLIT ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            alignItems: "stretch",
          }}
          className="about-two-col-grid"
        >
          {/* ----- LEFT SIDE: 4 FOCUS ITEMS ----- */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            {focusPoints.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 60}>
                <div
                  className="about-focus-card"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-card)",
                    borderRadius: "14px",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    transition: "all 0.25s ease",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: item.subtle,
                      border: `1px solid ${item.border}`,
                      boxShadow: `0 0 16px ${item.glow}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "1.08rem",
                        color: "var(--text-primary)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.45,
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ----- RIGHT SIDE: 2x2 STATISTICS GRID (INTERACTIVE) ----- */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.25rem",
            }}
            className="about-stats-grid"
          >
            {statCards.map((stat, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 60 + 40}>
                <div
                  className="about-stat-box"
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
                    borderRadius: "16px",
                    padding: "1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: "var(--shadow-card)",
                    cursor: "pointer",
                    position: "relative",
                    userSelect: "none",
                  }}
                >
                  {/* Top Row: Big Number & Decorative Upper-Right Icon */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: stat.value.length > 3 ? "2.15rem" : "2.75rem",
                        fontWeight: 800,
                        color: stat.color,
                        lineHeight: 1,
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
                        boxShadow: `0 0 14px ${stat.glow}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.2s ease",
                      }}
                      className="about-stat-icon-wrap"
                    >
                      {stat.icon}
                    </div>
                  </div>

                  {/* Bottom Labels */}
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "0.4rem",
                        marginBottom: "0.2rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 700,
                          fontSize: "1.05rem",
                          color: "var(--text-primary)",
                        }}
                      >
                        {stat.label}
                      </span>
                      <ArrowUpRight
                        size={15}
                        style={{
                          color: stat.color,
                          opacity: 0.65,
                          transition: "all 0.2s ease",
                          flexShrink: 0,
                        }}
                        className="about-stat-arrow"
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "0.84rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {stat.sub}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM QUOTE STRIP ================= */}
        <ScrollReveal
          direction="up"
          delay={150}
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-card)",
            borderRadius: "14px",
            padding: "1.4rem 2rem",
            marginTop: "3rem",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            boxShadow: "var(--shadow-card)",
          }}
          className="about-quote-strip"
        >
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
            <Quote size={22} color="var(--accent-cyan)" />
          </div>

          <div style={{ fontSize: "0.96rem", lineHeight: 1.6 }}>
            <span style={{ color: "var(--text-primary)" }}>
              I build with purpose, solve with curiosity, and learn with consistency.
            </span>
            <br />
            <span style={{ color: "var(--accent-cyan)", fontWeight: 600 }}>
              Engineering is not just what I study — it's what I live every day.
            </span>
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
        .about-focus-card:hover {
          transform: translateY(-2px);
          border-color: var(--accent-cyan-border) !important;
          box-shadow: var(--shadow-card-hover) !important;
        }
        .about-stat-box:hover {
          transform: translateY(-4px);
          border-color: var(--accent-cyan-border) !important;
          box-shadow: 0 8px 30px rgba(34, 211, 238, 0.16) !important;
        }
        .about-stat-box:hover .about-stat-arrow {
          opacity: 1 !important;
          transform: translate(2px, -2px);
        }
        .about-stat-box:hover .about-stat-icon-wrap {
          transform: scale(1.06);
        }
        .about-stat-box:focus-visible {
          outline: 2px solid var(--accent-cyan);
          outline-offset: 3px;
        }

        @media (min-width: 968px) {
          .about-two-col-grid {
            grid-template-columns: 1fr 1.05fr !important;
            gap: 2.5rem !important;
          }
        }

        @media (max-width: 600px) {
          .about-stats-grid {
            grid-template-columns: 1fr !important;
          }
          .about-quote-strip {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};
