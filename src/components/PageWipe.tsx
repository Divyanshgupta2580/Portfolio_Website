import React, { useEffect, useState } from 'react';

export const PageWipe: React.FC = () => {
  const [mounted, setMounted] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setMounted(false);
      return;
    }

    // Sequence timing: Play intro animation, then trigger fade-out wipe, then unmount
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 750);

    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 1150);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="dg-page-wipe"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100dvh',
        background: 'var(--bg-primary)',
        backgroundColor: 'var(--bg-primary)',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: fading ? 'none' : 'auto',
        opacity: fading ? 0 : 1,
        transform: fading ? 'scale(1.02)' : 'scale(1)',
        transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div style={{ textAlign: 'center', userSelect: 'none' }}>
        {/* Main DG. Text */}
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.75rem, 7vw, 4.25rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
            textShadow: '0 0 30px var(--accent-cyan-glow)',
          }}
        >
          DG<span style={{ color: 'var(--accent-cyan)' }}>.</span>
        </div>

        {/* Minimal Engineering Loading Indicator Track */}
        <div
          style={{
            width: '130px',
            height: '2px',
            background: 'var(--border-subtle)',
            borderRadius: '2px',
            overflow: 'hidden',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              height: '100%',
              background: 'var(--accent-cyan)',
              width: '0',
              animation: 'dgLoadBar 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              boxShadow: '0 0 10px var(--accent-cyan-glow)',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes dgLoadBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};
