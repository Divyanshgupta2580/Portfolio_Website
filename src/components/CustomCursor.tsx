import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices with fine cursor and no reduced motion preference
    const hasPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasPointer || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let clickStartTime = 0;
    let isClicking = false;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const updateRingStyle = () => {
      if (!ringRef.current) return;
      if (isHovering) {
        ringRef.current.style.width = '44px';
        ringRef.current.style.height = '44px';
        ringRef.current.style.marginLeft = '-22px';
        ringRef.current.style.marginTop = '-22px';
        ringRef.current.style.backgroundColor = isClicking ? 'rgba(34, 211, 238, 0.22)' : 'rgba(34, 211, 238, 0.08)';
        ringRef.current.style.borderColor = 'var(--accent-cyan)';
      } else {
        ringRef.current.style.width = '26px';
        ringRef.current.style.height = '26px';
        ringRef.current.style.marginLeft = '-13px';
        ringRef.current.style.marginTop = '-13px';
        ringRef.current.style.backgroundColor = isClicking ? 'rgba(34, 211, 238, 0.22)' : 'transparent';
        ringRef.current.style.borderColor = 'var(--accent-cyan)';
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, .card, .btn, .tech-badge, input, textarea, select, [role="button"], [tabindex]')) {
        isHovering = true;
      } else {
        isHovering = false;
      }
      updateRingStyle();
    };

    const handleMouseDown = () => {
      isClicking = true;
      clickStartTime = performance.now();
      updateRingStyle();
    };

    const handleMouseUp = () => {
      isClicking = false;
      updateRingStyle();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });

    // 60/120fps direct render loop: smooth lerping + haptic click vibration centered on cursor
    const renderLoop = (now: number) => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      let vibeX = 0;
      let vibeY = 0;
      let scale = 1;

      if (clickStartTime > 0) {
        const elapsed = now - clickStartTime;
        const duration = 140; // 140ms quick tactile vibration
        if (elapsed < duration) {
          const progress = elapsed / duration;
          const decay = 1 - progress;
          // 3 small oscillations dampened quickly (max 3px)
          vibeX = Math.sin(progress * Math.PI * 6) * 3 * decay;
          vibeY = Math.cos(progress * Math.PI * 6) * 2 * decay;
          scale = 1 - 0.12 * Math.sin(progress * Math.PI);
        }
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX + vibeX}px, ${ringY + vibeY}px, 0) scale(${scale})`;
      }

      animId = requestAnimationFrame(renderLoop);
    };

    animId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Inner fast dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-cyan)',
          marginLeft: '-3px',
          marginTop: '-3px',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
        }}
      />
      {/* Outer smooth lerping ring with zero React re-render transform conflicts */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '26px',
          height: '26px',
          marginLeft: '-13px',
          marginTop: '-13px',
          borderRadius: '50%',
          border: '1.5px solid var(--accent-cyan)',
          backgroundColor: 'transparent',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.2s ease, height 0.2s ease, margin 0.2s ease, background-color 0.15s ease, border-color 0.15s ease',
          willChange: 'transform',
        }}
      />
    </>
  );
};
