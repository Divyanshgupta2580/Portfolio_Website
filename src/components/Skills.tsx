import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { ScrollReveal } from "./ScrollReveal";
import {
  Code2,
  Globe,
  Layers,
  Database,
  Terminal,
} from "lucide-react";

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "languages":
        return <Code2 size={20} color="var(--accent-cyan)" />;
      case "frontend":
        return <Globe size={20} color="var(--accent-blue)" />;
      case "backend":
        return <Layers size={20} color="var(--accent-purple)" />;
      case "databases & data":
        return <Database size={20} color="var(--accent-emerald)" />;
      default:
        return <Terminal size={20} color="var(--accent-amber)" />;
    }
  };

  const getCategoryAccent = (title: string) => {
    switch (title.toLowerCase()) {
      case "languages":
        return {
          accent: "var(--accent-cyan)",
          subtle: "var(--accent-cyan-subtle)",
          border: "var(--accent-cyan-border)",
        };
      case "frontend":
        return {
          accent: "var(--accent-blue)",
          subtle: "rgba(59, 130, 246, 0.08)",
          border: "rgba(59, 130, 246, 0.28)",
        };
      case "backend":
        return {
          accent: "var(--accent-purple)",
          subtle: "var(--accent-purple-subtle)",
          border: "var(--accent-purple-border)",
        };
      case "databases & data":
        return {
          accent: "var(--accent-emerald)",
          subtle: "var(--accent-emerald-subtle)",
          border: "var(--accent-emerald-border)",
        };
      default:
        return {
          accent: "var(--accent-amber)",
          subtle: "var(--accent-amber-subtle)",
          border: "var(--accent-amber-border)",
        };
    }
  };

  return (
    <section id="skills" className="section" style={{ background: "var(--bg-secondary)", padding: "6rem 0" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", width: "100%" }}>
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
              <Code2 size={14} />
              <span>TECHNICAL TOOLKIT</span>
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
              Tools I Build With
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
              Languages, frameworks, databases, and infrastructure used across my projects and engineering work.
            </p>
          </ScrollReveal>
        </div>

        {/* 5-Category Responsive Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
          className="skills-main-grid"
        >
          {PORTFOLIO_DATA.skills.map((category, idx) => {
            const theme = getCategoryAccent(category.title);
            const hasCapabilities = category.capabilities && category.capabilities.length > 0;

            return (
              <ScrollReveal key={category.title} direction="up" delay={idx * 60}>
                <div
                  className="skill-category-box"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-card)",
                    borderRadius: "16px",
                    padding: "1.5rem 1.4rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "var(--shadow-card)",
                    transition: "all 0.25s ease",
                    height: "100%",
                  }}
                >
                  <div>
                    {/* Header */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginBottom: "0.65rem",
                      }}
                    >
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "10px",
                          background: theme.subtle,
                          border: `1px solid ${theme.border}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {getCategoryIcon(category.title)}
                      </div>

                      <div>
                        <h3
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1.12rem",
                            fontWeight: 750,
                            color: "var(--text-primary)",
                            lineHeight: 1.2,
                          }}
                        >
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: "0.86rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.45,
                        marginBottom: "1.25rem",
                      }}
                    >
                      {category.description}
                    </p>

                    {/* If category has separate capabilities (like Frontend) */}
                    {hasCapabilities ? (
                      <div>
                        {/* Subheader: Technology */}
                        <div
                          style={{
                            fontSize: "0.72rem",
                            fontFamily: "var(--font-mono)",
                            color: theme.accent,
                            fontWeight: 700,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            marginBottom: "0.45rem",
                          }}
                        >
                          Technology
                        </div>

                        {/* Technology Cards */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem", marginBottom: "1rem" }}>
                          {category.skills.map((skill, sIdx) => (
                            <div
                              key={sIdx}
                              className="individual-skill-card"
                              style={{
                                background: "var(--bg-secondary)",
                                border: "1px solid var(--border-subtle)",
                                borderRadius: "8px",
                                padding: "0.65rem 0.85rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "0.5rem",
                                transition: "all 0.2s ease",
                              }}
                            >
                              <span
                                style={{
                                  fontWeight: 700,
                                  fontSize: "0.92rem",
                                  color: "var(--text-primary)",
                                  fontFamily: "var(--font-mono)",
                                }}
                              >
                                {skill.name}
                              </span>
                              <span
                                style={{
                                  fontSize: "0.78rem",
                                  color: "var(--text-secondary)",
                                  fontFamily: "var(--font-main)",
                                  textAlign: "right",
                                }}
                              >
                                {skill.tag}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Subheader: Engineering Capabilities */}
                        <div
                          style={{
                            fontSize: "0.72rem",
                            fontFamily: "var(--font-mono)",
                            color: "var(--text-secondary)",
                            fontWeight: 700,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            marginBottom: "0.45rem",
                          }}
                        >
                          Engineering Capabilities
                        </div>

                        {/* Capabilities List */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.4rem",
                          }}
                        >
                          {category.capabilities?.map((cap, cIdx) => (
                            <div
                              key={cIdx}
                              style={{
                                background: "rgba(13, 18, 27, 0.6)",
                                border: "1px solid var(--border-subtle)",
                                borderRadius: "6px",
                                padding: "0.42rem 0.75rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.55rem",
                              }}
                            >
                              <div
                                style={{
                                  width: "5px",
                                  height: "5px",
                                  borderRadius: "50%",
                                  background: theme.accent,
                                  flexShrink: 0,
                                }}
                              />
                              <span
                                style={{
                                  fontSize: "0.82rem",
                                  color: "var(--text-secondary)",
                                  fontFamily: "var(--font-main)",
                                  fontWeight: 500,
                                }}
                              >
                                {cap}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* Standard Category Skills List */
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.55rem",
                        }}
                      >
                        {category.skills.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            className="individual-skill-card"
                            style={{
                              background: "var(--bg-secondary)",
                              border: "1px solid var(--border-subtle)",
                              borderRadius: "8px",
                              padding: "0.65rem 0.85rem",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "0.5rem",
                              transition: "all 0.2s ease",
                            }}
                          >
                            <span
                              style={{
                                fontWeight: 700,
                                fontSize: "0.92rem",
                                color: "var(--text-primary)",
                                fontFamily: "var(--font-mono)",
                              }}
                            >
                              {skill.name}
                            </span>
                            <span
                              style={{
                                fontSize: "0.78rem",
                                color: "var(--text-secondary)",
                                fontFamily: "var(--font-main)",
                                textAlign: "right",
                              }}
                            >
                              {skill.tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <style>{`
        .skill-category-box:hover {
          border-color: var(--accent-cyan-border) !important;
          box-shadow: var(--shadow-card-hover) !important;
          transform: translateY(-2px);
        }
        .individual-skill-card:hover {
          border-color: var(--accent-cyan-border) !important;
          background: var(--bg-card-hover) !important;
        }

        @media (max-width: 640px) {
          .skills-main-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
