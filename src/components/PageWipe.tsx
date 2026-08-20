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
        background: 'radial-gradient(circle at center, rgba(0, 242, 254, 0.08), transparent 45%), #050B14',
        backgroundColor: '#050B14',
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
            color: '#F5F7FA',
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
            textShadow: '0 0 30px rgba(0, 242, 254, 0.20)',
          }}
        >
          DG<span style={{ color: '#00F2FE' }}>.</span>
        </div>

        {/* Minimal Engineering Loading Indicator Track */}
        <div
          style={{
            width: '130px',
            height: '2px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2px',
            overflow: 'hidden',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              height: '100%',
              background: '#00F2FE',
              width: '0',
              animation: 'dgLoadBar 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              boxShadow: '0 0 10px #00F2FE',
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
