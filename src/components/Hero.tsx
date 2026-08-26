import React, { useState } from "react";
import { PORTFOLIO_DATA, RESUME_URL } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, ProtonMailIcon } from "./Icons";
import { ScrollReveal } from "./ScrollReveal";
import {
  Code2,
  GraduationCap,
  Trophy,
  FileText,
  ArrowRight,
  Terminal,
  Layers,
} from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick: _onContactClick }) => {
  const [imageError, setImageError] = useState(false);
  const p = PORTFOLIO_DATA.personal;

  return (
    <section
      id="home"
      style={{
        paddingTop: "7.5rem",
        paddingBottom: "4rem",
        minHeight: "94vh",
        display: "flex",
        alignItems: "center",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ width: "100%" }}>
        {/* ================= HERO TWO-COLUMN GRID ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="hero-main-grid"
        >
          {/* ----- LEFT COLUMN: HERO CONTENT ----- */}
          <ScrollReveal direction="up" delay={0} className="hero-text-col" style={{ zIndex: 2 }}>
            {/* Eyebrow / Status Tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.15rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "var(--accent-cyan)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                ENGINEERING STUDENT · OPEN TO OPPORTUNITIES
              </span>
              <span
                style={{
                  width: "32px",
                  height: "1.5px",
                  background: "var(--accent-cyan-border)",
                  display: "inline-block",
                }}
              />
            </div>

            {/* Main Name & Title */}
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(3.2rem, 6.5vw, 5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                marginBottom: "0.85rem",
              }}
            >
              <span style={{ color: "var(--text-primary)", display: "block" }}>Divyansh</span>
              <span className="text-gradient" style={{ display: "inline-block", marginTop: "0.1rem" }}>
                Gupta
              </span>
            </h1>

            {/* Role Title */}
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.25rem, 2.5vw, 1.55rem)",
                fontWeight: 700,
                color: "var(--accent-cyan)",
                marginBottom: "1.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              Software Engineer &amp; AI Systems Developer
            </div>

            {/* Supporting Description */}
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                maxWidth: "520px",
                lineHeight: 1.65,
                marginBottom: "2rem",
                fontWeight: 400,
              }}
            >
              Engineering student building AI-powered systems, backend architectures, real-time applications, and practical software solutions.
            </p>

            {/* Hero CTA & Social Area: Two Dedicated Rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.15rem", marginBottom: "2.25rem" }}>
              {/* ROW 1 — PRIMARY ACTIONS */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
                className="hero-primary-actions-row"
              >
                {/* 1. Primary CTA: View Projects */}
                <a
                  href="#projects"
                  className="btn btn-primary hero-primary-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.55rem",
                    fontWeight: 750,
                    fontSize: "0.95rem",
                    height: "48px",
                    padding: "0 1.65rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>View Projects</span>
                  <ArrowRight size={16} />
                </a>

                {/* 2. Secondary CTA: Download Resume */}
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary hero-secondary-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.55rem",
                    fontSize: "0.95rem",
                    height: "48px",
                    padding: "0 1.45rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  <FileText size={16} color="var(--accent-cyan)" />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* ROW 2 — CONTACT / SOCIAL ACTIONS */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                }}
                className="hero-social-actions-row"
              >
                {/* 1. Proton Mail */}
                <a
                  href={`mailto:${p.email}`}
                  aria-label="Email (Proton Mail)"
                  title="Email (Proton Mail)"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-card)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    textDecoration: "none",
                    flexShrink: 0,
                  }}
                  className="hero-social-btn"
                >
                  <ProtonMailIcon size={23} />
                </a>

                {/* 2. GitHub */}
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-card)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    textDecoration: "none",
                    flexShrink: 0,
                  }}
                  className="hero-social-btn"
                >
                  <GithubIcon size={23} />
                </a>

                {/* 3. LinkedIn */}
                <a
                  href={p.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-card)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    textDecoration: "none",
                    flexShrink: 0,
                  }}
                  className="hero-social-btn"
                >
                  <LinkedinIcon size={23} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* ----- RIGHT COLUMN: PORTRAIT / AVATAR ----- */}
          <ScrollReveal
            direction="up"
            delay={100}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Minimal Background Radial Halo */}
            <div
              style={{
                position: "absolute",
                width: "360px",
                height: "360px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, rgba(13, 18, 27, 0) 70%)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />

            {/* Outer Subtle Geometric Ring */}
            <div
              style={{
                position: "absolute",
                width: "410px",
                height: "410px",
                borderRadius: "50%",
                border: "1px dashed rgba(148, 163, 184, 0.18)",
                zIndex: 0,
                pointerEvents: "none",
              }}
              className="hero-outer-ring"
            />

            {/* Inner Border Ring */}
            <div
              style={{
                position: "absolute",
                width: "356px",
                height: "356px",
                borderRadius: "50%",
                border: "1px solid rgba(34, 211, 238, 0.22)",
                zIndex: 0,
                pointerEvents: "none",
              }}
              className="hero-mid-ring"
            />

            {/* Main Circular Portrait Container */}
            <div
              style={{
                width: "340px",
                height: "340px",
                borderRadius: "50%",
                padding: "8px",
                background: "linear-gradient(135deg, rgba(34, 211, 238, 0.35) 0%, rgba(168, 85, 247, 0.2) 100%)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6)",
                position: "relative",
                zIndex: 1,
              }}
              className="hero-avatar-frame"
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: "var(--bg-card)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {!imageError ? (
                  <img
                    src={p.portraitPath}
                    alt="Divyansh Gupta - Software Engineer & AI Systems Developer"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 15%",
                      transition: "transform 0.4s ease",
                    }}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "4.5rem",
                      fontWeight: 800,
                      color: "var(--accent-cyan)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    DG
                  </div>
                )}
              </div>
            </div>

            {/* Subtle Tech Badges */}
            <div
              className="floating-tech-badge"
              style={{
                position: "absolute",
                top: "12%",
                left: "-12px",
                zIndex: 3,
                background: "var(--bg-card)",
                border: "1px solid var(--border-card)",
                borderRadius: "10px",
                padding: "0.5rem 0.9rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <Terminal size={15} color="var(--accent-cyan)" />
              <span style={{ fontSize: "0.82rem", fontWeight: 650, color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>
                C++ / Python
              </span>
            </div>

            <div
              className="floating-tech-badge"
              style={{
                position: "absolute",
                bottom: "12%",
                right: "-12px",
                zIndex: 3,
                background: "var(--bg-card)",
                border: "1px solid var(--border-card)",
                borderRadius: "10px",
                padding: "0.5rem 0.9rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <Code2 size={15} color="var(--accent-emerald)" />
              <span style={{ fontSize: "0.82rem", fontWeight: 650, color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>
                TypeScript / Node
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* ================= 3 EQUAL LOWER SUMMARY CARDS ================= */}
        <ScrollReveal
          direction="up"
          delay={200}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginTop: "4.5rem",
          }}
          className="hero-bottom-cards-grid"
        >
          {/* Summary Card 1: Academic Excellence */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              borderRadius: "14px",
              padding: "1.5rem 1.4rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              boxShadow: "var(--shadow-card)",
              transition: "all 0.25s ease",
            }}
            className="hero-summary-card"
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                background: "var(--accent-cyan-subtle)",
                border: "1px solid var(--accent-cyan-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <GraduationCap size={18} color="var(--accent-cyan)" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "var(--accent-cyan)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "0.2rem",
                }}
              >
                ACADEMICS · 9.43 CGPA
              </div>
              <div style={{ fontWeight: 750, fontSize: "1.02rem", color: "var(--text-primary)" }}>
                B.Tech CSE (AI &amp; ML)
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>
                Mirai School of Tech · AKTU (2029)
              </div>
            </div>
          </div>

          {/* Summary Card 2: Role & Systems Focus */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              borderRadius: "14px",
              padding: "1.5rem 1.4rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              boxShadow: "var(--shadow-card)",
              transition: "all 0.25s ease",
            }}
            className="hero-summary-card"
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                background: "var(--accent-purple-subtle)",
                border: "1px solid var(--accent-purple-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Layers size={18} color="var(--accent-purple)" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "var(--accent-purple)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "0.2rem",
                }}
              >
                CORE FOCUS
              </div>
              <div style={{ fontWeight: 750, fontSize: "1.02rem", color: "var(--text-primary)" }}>
                Software &amp; AI Systems
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>
                Backend, RAG &amp; Real-Time
              </div>
            </div>
          </div>

          {/* Summary Card 3: Hackathon Experiences */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              borderRadius: "14px",
              padding: "1.5rem 1.4rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              boxShadow: "var(--shadow-card)",
              transition: "all 0.25s ease",
            }}
            className="hero-summary-card"
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                background: "var(--accent-emerald-subtle)",
                border: "1px solid var(--accent-emerald-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Trophy size={18} color="var(--accent-emerald)" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "var(--accent-emerald)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "0.2rem",
                }}
              >
                COMPETITIONS
              </div>
              <div style={{ fontWeight: 750, fontSize: "1.02rem", color: "var(--text-primary)" }}>
                4+ Completed Hackathons
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>
                HackHazards, Qualcomm, FAR AWAY, AB Talks
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .hero-social-btn:hover {
          border-color: var(--accent-cyan-border) !important;
          color: var(--accent-cyan) !important;
          background: var(--accent-cyan-subtle) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(34, 211, 238, 0.16) !important;
        }
        .hero-primary-btn:hover {
          transform: translateY(-2px);
        }
        .hero-secondary-btn:hover {
          border-color: var(--accent-cyan) !important;
          color: var(--accent-cyan) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 480px) {
          .hero-primary-actions-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .hero-primary-btn,
          .hero-secondary-btn {
            width: 100% !important;
          }
        }
        .hero-summary-card:hover {
          border-color: var(--accent-cyan-border) !important;
          transform: translateY(-3px);
          box-shadow: var(--shadow-card-hover) !important;
        }

        @media (min-width: 968px) {
          .hero-main-grid {
            grid-template-columns: 1.15fr 0.95fr !important;
          }
        }

        @media (max-width: 967px) {
          .hero-bottom-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            margin-top: 3rem !important;
          }
          .hero-avatar-frame {
            width: 300px !important;
            height: 300px !important;
          }
          .hero-outer-ring {
            width: 350px !important;
            height: 350px !important;
          }
          .hero-mid-ring {
            width: 300px !important;
            height: 300px !important;
          }
        }

        @media (max-width: 580px) {
          .hero-avatar-frame {
            width: 260px !important;
            height: 260px !important;
          }
          .hero-outer-ring {
            width: 300px !important;
            height: 300px !important;
          }
          .hero-mid-ring {
            width: 260px !important;
            height: 260px !important;
          }
          .floating-tech-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
