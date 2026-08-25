import React from "react";
import { ArrowLeft, Compass } from "lucide-react";

export const NotFound: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "var(--bg-primary)",
        position: "relative",
      }}
    >
      <div className="bg-tech-pattern" />

      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-card)",
          borderRadius: "20px",
          padding: "3rem 2.5rem",
          maxWidth: "520px",
          width: "100%",
          textAlign: "center",
          boxShadow: "var(--shadow-card)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "14px",
            background: "var(--accent-cyan-subtle)",
            border: "1px solid var(--accent-cyan-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem auto",
          }}
        >
          <Compass size={28} color="var(--accent-cyan)" />
        </div>

        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            color: "var(--accent-cyan)",
            fontWeight: 700,
            letterSpacing: "0.08em",
            marginBottom: "0.5rem",
          }}
        >
          ERROR 404
        </div>

        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.85rem",
            fontWeight: 800,
            color: "var(--text-primary)",
            marginBottom: "0.75rem",
            lineHeight: 1.2,
          }}
        >
          404 — This route doesn't exist.
        </h1>

        <p
          style={{
            fontSize: "0.96rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            marginBottom: "2rem",
          }}
        >
          Looks like this page went off the rails. The page you are looking for has been moved or does not exist.
        </p>

        <a
          href="/"
          className="btn btn-primary"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.55rem",
            padding: "0.75rem 1.6rem",
            fontSize: "0.94rem",
            textDecoration: "none",
          }}
        >
          <ArrowLeft size={16} />
          <span>Back Home</span>
        </a>
      </div>
    </div>
  );
};
