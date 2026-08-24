import React, { useState, useEffect } from 'react';
import { Home, Code2, User, Layers, Briefcase, Compass, Send, Menu, X } from 'lucide-react';

interface PillNavProps {
  onOpenHireMe: () => void;
}

export const PillNav: React.FC<PillNavProps> = ({ onOpenHireMe }) => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'capabilities', 'about', 'skills', 'projects', 'journey', 'opportunities', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={16} /> },
    { id: 'capabilities', label: 'What I Do', icon: <Code2 size={16} /> },
    { id: 'about', label: 'About', icon: <User size={16} /> },
    { id: 'skills', label: 'Skills', icon: <Layers size={16} /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={16} /> },
    { id: 'journey', label: 'Journey', icon: <Compass size={16} /> },
    { id: 'opportunities', label: 'Open to Work', icon: <Briefcase size={16} /> },
  ];

  return (
    <div className="mobile-pill-nav">
      <div
        style={{
          position: 'fixed',
          bottom: '1.25rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        {/* Expanded Links Drawer */}
        {open && (
          <div
            style={{
              background: 'var(--bg-modal)',
              border: '1px solid var(--border-cyan)',
              borderRadius: 'var(--radius-lg)',
              padding: '1rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0.6rem',
              boxShadow: 'var(--shadow-card-hover)',
              maxWidth: '360px',
              width: 'calc(100vw - 2rem)',
            }}
            className="animate-slide-up"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.3rem',
                    padding: '0.6rem 0.3rem',
                    borderRadius: 'var(--radius-sm)',
                    background: isActive ? 'var(--accent-cyan-subtle)' : 'var(--bg-secondary)',
                    border: `1px solid ${isActive ? 'var(--accent-cyan-border)' : 'var(--border-card)'}`,
                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)',
                  }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={() => {
                setOpen(false);
                onOpenHireMe();
              }}
              style={{
                gridColumn: 'span 4',
                marginTop: '0.4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--accent-cyan)',
                color: 'var(--text-on-accent)',
                fontWeight: 800,
                fontSize: '0.92rem',
                cursor: 'pointer',
                border: 'none',
                boxShadow: '0 4px 14px var(--accent-cyan-glow)',
              }}
            >
              <Send size={16} />
              <span>Let's Connect</span>
            </button>
          </div>
        )}

        {/* Floating Pill Bar */}
        <div
          style={{
            background: 'var(--bg-modal)',
            border: '1px solid var(--border-cyan)',
            borderRadius: 'var(--radius-full)',
            padding: '0.45rem 0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: 'var(--shadow-card-hover)',
          }}
        >
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle mobile menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-card)',
              borderRadius: 'var(--radius-full)',
              padding: '0.45rem 0.85rem',
              color: 'var(--text-primary)',
              fontSize: '0.86rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
            <span>Menu</span>
          </button>

          <button
            onClick={onOpenHireMe}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'var(--accent-cyan)',
              borderRadius: 'var(--radius-full)',
              padding: '0.45rem 0.95rem',
              color: 'var(--text-on-accent)',
              fontSize: '0.86rem',
              fontWeight: 800,
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0 2px 10px var(--accent-cyan-glow)',
            }}
          >
            <Send size={16} />
            <span>Let's Connect</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 868px) {
          .mobile-pill-nav { display: none !important; }
        }
      `}</style>
    </div>
  );
};
