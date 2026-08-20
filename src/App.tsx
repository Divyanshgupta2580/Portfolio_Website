import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { X, Send, Briefcase, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { PORTFOLIO_DATA } from './data/portfolioData';
import { submitContactForm } from './services/contactService';

export const App: React.FC = () => {
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [hireStatus, setHireStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [hireMessage, setHireMessage] = useState('');
  const [hireData, setHireData] = useState({
    name: '',
    email: '',
    opportunity: 'Software Developer Opportunity',
    details: '',
  });

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHireSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hireStatus === 'submitting') return;

    setHireStatus('submitting');
    setHireMessage('');

    const result = await submitContactForm({
      name: hireData.name,
      email: hireData.email,
      opportunityType: hireData.opportunity,
      subject: `Hire Inquiry: ${hireData.opportunity} from ${hireData.name}`,
      message: hireData.details || `I am interested in discussing a ${hireData.opportunity} with Divyansh Gupta.`,
    });

    if (result.success) {
      setHireStatus('success');
      setHireMessage(result.message);
      setHireData({ name: '', email: '', opportunity: 'Software Developer Opportunity', details: '' });
    } else {
      setHireStatus('error');
      setHireMessage(result.message);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Background Technical Grid & Ambient Glows */}
      <div className="bg-tech-pattern" />

      {/* Navigation */}
      <Navbar onOpenHireMe={() => { setHireStatus('idle'); setHireModalOpen(true); }} />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        <Hero onContactClick={scrollToContact} />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Hire Me Fast Modal */}
      {hireModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            background: 'rgba(7, 8, 13, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setHireModalOpen(false)}
        >
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-cyan)',
              borderRadius: 'var(--radius-lg)',
              width: '100%',
              maxWidth: '520px',
              padding: '2rem',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0, 242, 254, 0.25)',
            }}
            onClick={(e) => e.stopPropagation()}
            className="animate-slide-up"
          >
            <button
              onClick={() => setHireModalOpen(false)}
              aria-label="Close Hire Modal"
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={16} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <Briefcase size={20} color="var(--accent-cyan)" />
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                Engineering Collaboration
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              Work With Divyansh Gupta
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
              Select an opportunity type or reach out directly to discuss projects, internships, or technical roles.
            </p>

            {hireStatus === 'success' ? (
              <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(16, 185, 129, 0.08)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                <CheckCircle2 size={40} color="#10b981" style={{ margin: '0 auto 0.75rem auto' }} />
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>Message Delivered!</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{hireMessage || 'Divyansh will respond to your inquiry shortly.'}</div>
                <button onClick={() => setHireStatus('idle')} className="btn btn-secondary btn-sm" style={{ marginTop: '1.25rem' }}>
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleHireSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {hireStatus === 'error' && (
                  <div style={{ padding: '0.65rem 0.85rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 'var(--radius-sm)', color: '#f87171', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AlertCircle size={16} style={{ flexShrink: 0 }} />
                    <span>{hireMessage}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="hire-name" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)' }}>Your Name *</label>
                  <input
                    id="hire-name"
                    type="text"
                    required
                    disabled={hireStatus === 'submitting'}
                    value={hireData.name}
                    onChange={(e) => setHireData({ ...hireData, name: e.target.value })}
                    placeholder="Recruiter or Engineering Lead"
                    style={{ width: '100%', padding: '0.7rem 0.9rem', background: 'var(--bg-dark)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-sm)', color: '#fff', outline: 'none' }}
                  />
                </div>

                <div>
                  <label htmlFor="hire-email" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)' }}>Your Email *</label>
                  <input
                    id="hire-email"
                    type="email"
                    required
                    disabled={hireStatus === 'submitting'}
                    value={hireData.email}
                    onChange={(e) => setHireData({ ...hireData, email: e.target.value })}
                    placeholder="email@company.com"
                    style={{ width: '100%', padding: '0.7rem 0.9rem', background: 'var(--bg-dark)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-sm)', color: '#fff', outline: 'none' }}
                  />
                </div>

                <div>
                  <label htmlFor="hire-opportunity" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)' }}>Opportunity Type</label>
                  <select
                    id="hire-opportunity"
                    disabled={hireStatus === 'submitting'}
                    value={hireData.opportunity}
                    onChange={(e) => setHireData({ ...hireData, opportunity: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', background: 'var(--bg-dark)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-sm)', color: '#fff', outline: 'none' }}
                  >
                    {PORTFOLIO_DATA.opportunityTypes.map((opt, idx) => (
                      <option key={idx} value={opt} style={{ background: '#07080d' }}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="hire-details" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)' }}>Project / Role Details *</label>
                  <textarea
                    id="hire-details"
                    rows={3}
                    required
                    disabled={hireStatus === 'submitting'}
                    value={hireData.details}
                    onChange={(e) => setHireData({ ...hireData, details: e.target.value })}
                    placeholder="Brief description of the opportunity..."
                    style={{ width: '100%', padding: '0.7rem 0.9rem', background: 'var(--bg-dark)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-sm)', color: '#fff', outline: 'none', resize: 'none' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <button type="submit" disabled={hireStatus === 'submitting'} className="btn btn-primary" style={{ flex: 1, opacity: hireStatus === 'submitting' ? 0.7 : 1 }}>
                    {hireStatus === 'submitting' ? (
                      <>
                        <Loader2 size={15} className="animate-float" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                  <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="btn btn-secondary" style={{ flex: 1, textDecoration: 'none' }}>
                    <Mail size={15} />
                    <span>Direct Email</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
