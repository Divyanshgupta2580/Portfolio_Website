import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import type { JourneyItem } from "../data/portfolioData";
import { ScrollReveal } from "./ScrollReveal";
import { Trophy, Shield, Cpu, Bot, CheckCircle2, Calendar } from "lucide-react";

export const Journey: React.FC = () => {
  const getItemDetails = (item: JourneyItem) => {
    const text = (item.title + " " + item.projectTitle).toLowerCase();

    if (text.includes("hackhazards") || text.includes("benefit")) {
      return {
        icon: <Trophy size={18} color="var(--accent-purple)" />,
        accentColor: "var(--accent-purple)",
        glowShadow: "0 0 14px var(--accent-purple-glow)",
        nodeBorder: "1px solid var(--accent-purple-border)",
        badgeBg: "var(--accent-purple-subtle)",
        badgeBorder: "1px solid var(--accent-purple-border)",
        badgeColor: "var(--accent-purple)",
      };
    }

    if (text.includes("qualcomm") || text.includes("jansetu")) {
      return {
        icon: <Cpu size={18} color="var(--accent-emerald)" />,
        accentColor: "var(--accent-emerald)",
        glowShadow: "0 0 14px var(--accent-emerald-glow)",
        nodeBorder: "1px solid var(--accent-emerald-border)",
        badgeBg: "var(--accent-emerald-subtle)",
        badgeBorder: "1px solid var(--accent-emerald-border)",
        badgeColor: "var(--accent-emerald)",
      };
    }

    if (text.includes("ab talks") || text.includes("tron")) {
      return {
        icon: <Bot size={18} color="var(--accent-blue)" />,
        accentColor: "var(--accent-blue)",
        glowShadow: "0 0 14px rgba(59, 130, 246, 0.22)",
        nodeBorder: "1px solid rgba(59, 130, 246, 0.40)",
        badgeBg: "rgba(59, 130, 246, 0.08)",
        badgeBorder: "1px solid rgba(59, 130, 246, 0.30)",
        badgeColor: "var(--accent-blue)",
      };
    }

    if (text.includes("far away") || text.includes("railguard")) {
      return {
        icon: <Shield size={18} color="var(--accent-cyan)" />,
        accentColor: "var(--accent-cyan)",
        glowShadow: "0 0 14px var(--accent-cyan-glow)",
        nodeBorder: "1px solid var(--accent-cyan-border)",
        badgeBg: "var(--accent-cyan-subtle)",
        badgeBorder: "1px solid var(--accent-cyan-border)",
        badgeColor: "var(--accent-cyan)",
      };
    }

    return {
      icon: <Calendar size={18} color="var(--accent-amber)" />,
      accentColor: "var(--accent-amber)",
      glowShadow: "0 0 14px var(--accent-amber-glow)",
      nodeBorder: "1px solid var(--accent-amber-border)",
      badgeBg: "var(--accent-amber-subtle)",
      badgeBorder: "1px solid var(--accent-amber-border)",
      badgeColor: "var(--accent-amber)",
    };
  };

  return (
    <section id="journey" className="section" style={{ background: "var(--bg-primary)", padding: "6rem 0" }}>
      <div className="container" style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 1.5rem", width: "100%" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
              <Trophy size={14} />
              <span>Milestones &amp; Hackathons</span>
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
              Engineering Journey &amp; Competitions
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
              Chronological record of hackathon platforms, engineering contributions, and collaborative systems.
            </p>
          </ScrollReveal>
        </div>

        {/* Continuous Left Timeline Container */}
        <div style={{ position: "relative" }} className="journey-timeline-wrapper">
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: "absolute",
              top: "22px",
              bottom: "40px",
              left: "21px",
              width: "2px",
              background: "linear-gradient(180deg, var(--accent-purple) 0%, var(--accent-emerald) 25%, var(--accent-blue) 50%, var(--accent-cyan) 75%, var(--accent-amber) 100%)",
              zIndex: 1,
            }}
            className="journey-vertical-line"
          />

          {/* Timeline Items - Rendered in direct declared sequence without any sorting */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3.25rem" }}>
            {PORTFOLIO_DATA.journey.map((item, idx) => {
              const details = getItemDetails(item);

              return (
                <ScrollReveal key={idx} direction="up" delay={idx * 70}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "2.25rem",
                      position: "relative",
                    }}
                    className="journey-item-row"
                  >
                    {/* Glowing Circular Timeline Node */}
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: "var(--bg-card)",
                        border: details.nodeBorder,
                        boxShadow: details.glowShadow,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        zIndex: 2,
                        marginTop: "0.25rem",
                      }}
                      className="journey-node-box"
                    >
                      {details.icon}
                    </div>

                    {/* Right Content Area */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      {/* Header Row: Year / Event + Upper Right Badge */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                          gap: "0.75rem",
                          marginBottom: "0.75rem",
                          padding: "0 0.25rem",
                        }}
                        className="journey-meta-row"
                      >
                        {/* Left: Year & Event Name */}
                        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", fontFamily: "var(--font-mono)" }}>
                          <span
                            style={{
                              fontSize: "0.98rem",
                              fontWeight: 750,
                              color: details.accentColor,
                            }}
                          >
                            {item.year}
                          </span>
                          <span
                            style={{
                              fontSize: "0.82rem",
                              fontWeight: 650,
                              color: "var(--text-secondary)",
                              letterSpacing: "0.04em",
                              textTransform: "uppercase",
                            }}
                          >
                            {item.title}
                          </span>
                        </div>

                        {/* Right: Badge */}
                        <span
                          style={{
                            padding: "0.28rem 0.75rem",
                            borderRadius: "6px",
                            background: details.badgeBg,
                            border: details.badgeBorder,
                            color: details.badgeColor,
                            fontSize: "0.76rem",
                            fontFamily: "var(--font-mono)",
                            fontWeight: 700,
                            letterSpacing: "0.03em",
                            textTransform: "uppercase",
                          }}
                        >
                          {item.badge}
                        </span>
                      </div>

                      {/* Timeline Milestone Card */}
                      <div
                        style={{
                          background: "var(--bg-card)",
                          border: "1px solid var(--border-card)",
                          borderRadius: "16px",
                          padding: "1.85rem 2rem",
                          boxShadow: "var(--shadow-card)",
                          transition: "all 0.25s ease",
                        }}
                        className="journey-card"
                      >
                        {/* Project Name & Subtitle */}
                        <div style={{ marginBottom: "0.85rem" }}>
                          <h3
                            style={{
                              fontFamily: "var(--font-heading)",
                              fontSize: "clamp(1.2rem, 2.5vw, 1.4rem)",
                              fontWeight: 750,
                              color: "var(--text-primary)",
                              margin: "0 0 0.25rem 0",
                              lineHeight: 1.25,
                            }}
                          >
                            {item.projectTitle}
                          </h3>
                          <div style={{ fontSize: "0.92rem", color: details.accentColor, fontWeight: 600 }}>
                            {item.projectSubtitle}
                          </div>
                        </div>

                        {/* Contribution Banner */}
                        <div
                          style={{
                            background: "var(--bg-secondary)",
                            border: `1px solid ${details.badgeBorder}`,
                            borderRadius: "8px",
                            padding: "0.65rem 0.95rem",
                            marginBottom: "1rem",
                            fontSize: "0.88rem",
                            color: "var(--text-primary)",
                            lineHeight: 1.45,
                          }}
                        >
                          <strong style={{ color: details.accentColor, fontFamily: "var(--font-mono)", fontSize: "0.78rem", textTransform: "uppercase", display: "inline-block", marginRight: "0.4rem" }}>
                            Contribution:
                          </strong>
                          <span>{item.contribution}</span>
                        </div>

                        {/* Description */}
                        <p
                          style={{
                            fontSize: "0.92rem",
                            color: "var(--text-secondary)",
                            lineHeight: 1.6,
                            margin: "0 0 1.25rem 0",
                          }}
                        >
                          {item.description}
                        </p>

                        {/* Highlights with Checkmarks */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.55rem",
                          }}
                        >
                          {item.highlights.map((h, hIdx) => (
                            <div
                              key={hIdx}
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "0.65rem",
                                color: "var(--text-primary)",
                                fontSize: "0.88rem",
                                lineHeight: 1.45,
                              }}
                            >
                              <CheckCircle2
                                size={16}
                                color={details.accentColor}
                                style={{ flexShrink: 0, marginTop: "0.15rem" }}
                              />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* Responsive Journey Styles */}
      <style>{`
        .journey-card:hover {
          border-color: var(--accent-cyan-border) !important;
          transform: translateY(-2px);
          box-shadow: var(--shadow-card-hover) !important;
        }

        @media (max-width: 768px) {
          .journey-timeline-wrapper {
            padding-left: 0;
          }
          .journey-vertical-line {
            left: 17px !important;
          }
          .journey-node-box {
            width: 36px !important;
            height: 36px !important;
          }
          .journey-item-row {
            gap: 1.15rem !important;
          }
          .journey-card {
            padding: 1.4rem 1.15rem !important;
          }
        }
      `}</style>
    </section>
  );
};
