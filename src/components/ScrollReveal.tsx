import React, { useEffect, useRef, useState } from 'react';
import type { ElementType } from 'react';

export interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // Delay in milliseconds (stagger)
  duration?: number; // Duration in milliseconds (default 550ms)
  direction?: 'up' | 'fade' | 'heading';
  className?: string;
  style?: React.CSSProperties;
  as?: ElementType;
  threshold?: number;
  rootMargin?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 550,
  direction = 'up',
  className = '',
  style = {},
  as: Component = 'div',
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsRevealed(true);
      return;
    }

    // Respect reduced motion accessibility setting
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsRevealed(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Toggle revealed state whenever the element enters or leaves the viewport
          setIsRevealed(entry.isIntersecting);
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'heading':
        return 'reveal-heading';
      case 'fade':
        return 'reveal-fade';
      case 'up':
      default:
        return 'reveal-up';
    }
  };

  const combinedStyle: React.CSSProperties = {
    ...style,
    transitionDuration: `${duration}ms`,
    transitionDelay: isRevealed ? `${delay}ms` : '0ms',
  };

  return (
    <Component
      ref={ref}
      className={`reveal-init ${getDirectionClass()} ${isRevealed ? 'reveal-visible' : ''} ${className}`.trim()}
      style={combinedStyle}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
