import React, { useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { submitContactForm } from '../services/contactService';
import { X, Send, Mail, UserRound, BriefcaseBusiness, FileText, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOpportunity?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialOpportunity = 'Internship',
}) => {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = React.useState('');
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    opportunity: initialOpportunity,
    details: '',
  });

  const firstInputRef = useRef<HTMLInputElement>(null);

  // Sync opportunity type when passed or modal opens
  useEffect(() => {
    if (initialOpportunity) {
      setFormData((prev) => ({ ...prev, opportunity: initialOpportunity }));
    }
  }, [initialOpportunity, isOpen]);

  // Handle Body Scroll Locking, Escape Key, and Auto Focus
  useEffect(() => {
    if (!isOpen) return;

    // Lock page scrolling
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Focus first input on open
    const focusTimer = setTimeout(() => {
      if (firstInputRef.current) {
        firstInputRef.current.focus();
      }
    }, 60);

    // Escape key to close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(focusTimer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setMessage('');

    const result = await submitContactForm({
      name: formData.name,
      email: formData.email,
      opportunityType: formData.opportunity,
      subject: `Inquiry: ${formData.opportunity} from ${formData.name}`,
      message: formData.details || `I am interested in discussing a ${formData.opportunity} with Divyansh Gupta.`,
    });

    if (result.success) {
      setStatus('success');
      setMessage(result.message);
      setFormData({ name: '', email: '', opportunity: 'Internship', details: '' });
    } else {
      setStatus('error');
      setMessage(result.message);
    }
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent(`Inquiry: ${formData.opportunity} - ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(`Hi Divyansh,\n\n${formData.details || 'I would like to discuss an opportunity with you.'}\n\nName: ${formData.name}\nEmail: ${formData.email}\nOpportunity Type: ${formData.opportunity}`);
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="contact-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        background: 'rgba(3, 6, 12, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        overflow: 'hidden',
      }}
    >
      <div
        className="contact-modal-container animate-slide-up"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(740px, 100%)',
          maxHeight: 'calc(100dvh - 32px)',
          background: 'rgba(8, 13, 23, 0.98)',
          border: '1px solid rgba(0, 242, 254, 0.25)',
          borderRadius: '20px',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 242, 254, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
          margin: 'auto',
        }}
      >
        {/* ================= 1. FIXED MODAL HEADER ================= */}
        <div
          className="contact-modal-header"
          style={{
            flexShrink: 0,
            padding: '1.25rem 2rem 0.75rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(8, 13, 23, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            zIndex: 10,
          }}
        >
          {/* Top-Left Category Tag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div
              style={{
                width: '2px',
                height: '14px',
                background: 'var(--accent-cyan)',
                borderRadius: '1px',
                boxShadow: '0 0 8px var(--accent-cyan)',
              }}
            />
            <span
              style={{
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
              }}
            >
              ENGINEERING INQUIRY
            </span>
          </div>

          {/* Top-Right Circular Close Button */}
          <button
            onClick={onClose}
            aria-label="Close contact form"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              flexShrink: 0,
            }}
            className="modal-close-btn"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Container wrapping scrollable content + fixed action footer */}
        <form
          id="contact-modal-form"
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            minHeight: 0,
            overflow: 'hidden',
          }}
        >
          {/* ================= 2. SCROLLABLE CONTENT BODY ================= */}
          <div
            className="contact-modal-scroll-area"
            style={{
              flex: 1,
              minHeight: 0,
              overflowY: 'auto',
              padding: '1.25rem 2rem 1.25rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
            }}
          >
            {/* Main Heading (Center Aligned) */}
            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
              <h2
                id="contact-modal-title"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.15,
                  marginBottom: '0.45rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Work With <span style={{ color: 'var(--accent-cyan)' }}>Divyansh Gupta</span>
              </h2>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.94rem',
                  lineHeight: 1.55,
                  maxWidth: '520px',
                  margin: '0 auto',
                }}
              >
                Submit an inquiry for software engineering internships, AI/ML research collaborations, or technical projects.
              </p>
            </div>

            {status === 'success' ? (
              <div
                style={{
                  padding: '2.5rem 1.5rem',
                  textAlign: 'center',
                  background: 'rgba(16, 185, 129, 0.08)',
                  borderRadius: '14px',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                }}
              >
                <CheckCircle2 size={44} color="#10b981" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                  Inquiry Dispatched Successfully!
                </h3>
                <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
                  {message || 'Thank you for reaching out. Your message has been sent directly to Divyansh Gupta via Resend.'}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn btn-secondary"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <>
                {status === 'error' && (
                  <div
                    style={{
                      padding: '0.75rem 1rem',
                      background: 'rgba(239, 68, 68, 0.15)',
                      border: '1px solid rgba(239, 68, 68, 0.4)',
                      borderRadius: '10px',
                      color: '#fca5a5',
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      fontWeight: 500,
                    }}
                  >
                    <AlertCircle size={17} style={{ flexShrink: 0 }} />
                    <span>{message}</span>
                  </div>
                )}

                {/* Field 1: Name */}
                <div>
                  <label
                    htmlFor="modal-name"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: '#f1f5f9',
                      marginBottom: '0.45rem',
                    }}
                  >
                    <UserRound size={16} color="var(--accent-cyan)" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    ref={firstInputRef}
                    id="modal-name"
                    type="text"
                    required
                    disabled={status === 'submitting'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Recruiter or Lead Engineer"
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 1.15rem',
                      background: 'rgba(12, 18, 29, 0.9)',
                      border: '1px solid rgba(100, 140, 170, 0.3)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '0.94rem',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    className="modal-form-input"
                  />
                </div>

                {/* Field 2: Email */}
                <div>
                  <label
                    htmlFor="modal-email"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: '#f1f5f9',
                      marginBottom: '0.45rem',
                    }}
                  >
                    <Mail size={16} color="var(--accent-cyan)" />
                    <span>Your Email *</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    disabled={status === 'submitting'}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@company.com"
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 1.15rem',
                      background: 'rgba(12, 18, 29, 0.9)',
                      border: '1px solid rgba(100, 140, 170, 0.3)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '0.94rem',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    className="modal-form-input"
                  />
                </div>

                {/* Field 3: Opportunity Type */}
                <div>
                  <label
                    htmlFor="modal-opportunity"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: '#f1f5f9',
                      marginBottom: '0.45rem',
                    }}
                  >
                    <BriefcaseBusiness size={16} color="var(--accent-cyan)" />
                    <span>Opportunity Type *</span>
                  </label>
                  <select
                    id="modal-opportunity"
                    disabled={status === 'submitting'}
                    value={formData.opportunity}
                    onChange={(e) => setFormData({ ...formData, opportunity: e.target.value })}
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 1.15rem',
                      background: 'rgba(12, 18, 29, 0.9)',
                      border: '1px solid rgba(100, 140, 170, 0.3)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '0.94rem',
                      outline: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    className="modal-form-input"
                  >
                    {PORTFOLIO_DATA.opportunityTypes.map((opt, idx) => (
                      <option key={idx} value={opt} style={{ background: '#0a0f19', color: '#ffffff' }}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field 4: Project / Role Details */}
                <div>
                  <label
                    htmlFor="modal-details"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: '#f1f5f9',
                      marginBottom: '0.45rem',
                    }}
                  >
                    <FileText size={16} color="var(--accent-cyan)" />
                    <span>Project / Role Details *</span>
                  </label>
                  <textarea
                    id="modal-details"
                    rows={3}
                    required
                    disabled={status === 'submitting'}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Brief description of the role, project, or collaboration..."
                    style={{
                      width: '100%',
                      minHeight: '110px',
                      maxHeight: '160px',
                      padding: '0.85rem 1.15rem',
                      background: 'rgba(12, 18, 29, 0.9)',
                      border: '1px solid rgba(100, 140, 170, 0.3)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '0.94rem',
                      lineHeight: 1.55,
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'all 0.2s ease',
                    }}
                    className="modal-form-input"
                  />
                </div>
              </>
            )}
          </div>

          {/* ================= 3. FIXED MODAL ACTIONS FOOTER ================= */}
          {status !== 'success' && (
            <div
              className="contact-modal-actions"
              style={{
                flexShrink: 0,
                padding: '0.85rem 2rem 1.25rem 2rem',
                background: 'rgba(8, 13, 23, 0.98)',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                zIndex: 10,
              }}
            >
              {/* Primary Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                style={{
                  flex: '1.4',
                  minHeight: '48px',
                  padding: '0 1.75rem',
                  background: 'linear-gradient(135deg, #00f2fe 0%, #00d2ff 100%)',
                  border: 'none',
                  borderRadius: '10px',
                  color: '#07080d',
                  fontFamily: 'var(--font-main)',
                  fontSize: '0.96rem',
                  fontWeight: 750,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                  boxShadow: '0 4px 20px rgba(0, 242, 254, 0.3)',
                  transition: 'all 0.2s ease',
                }}
                className="modal-submit-btn"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={17} className="animate-float" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>

              {/* Vertical Subtle Separator on Desktop */}
              <div
                style={{
                  width: '1px',
                  height: '30px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'none',
                }}
                className="modal-action-divider"
              />

              {/* Secondary Direct Email Button */}
              <button
                type="button"
                onClick={handleDirectEmail}
                style={{
                  flex: '1',
                  minHeight: '48px',
                  padding: '0 1.25rem',
                  background: 'transparent',
                  border: '1px solid transparent',
                  borderRadius: '10px',
                  color: 'var(--accent-cyan)',
                  fontFamily: 'var(--font-main)',
                  fontSize: '0.95rem',
                  fontWeight: 650,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.55rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                className="modal-direct-email-btn"
              >
                <Mail size={17} color="var(--accent-cyan)" />
                <span>Direct Email</span>
              </button>
            </div>
          )}
        </form>
      </div>

      <style>{`
        /* Scrollbar Styling inside Modal */
        .contact-modal-scroll-area::-webkit-scrollbar {
          width: 6px;
        }
        .contact-modal-scroll-area::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 3px;
        }
        .contact-modal-scroll-area::-webkit-scrollbar-thumb {
          background: rgba(0, 242, 254, 0.25);
          border-radius: 3px;
        }
        .contact-modal-scroll-area::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 242, 254, 0.45);
        }

        .modal-form-input:focus {
          border-color: #00f2fe !important;
          box-shadow: 0 0 0 3px rgba(0, 242, 254, 0.12) !important;
          background: #0d1421 !important;
        }
        .modal-form-input::placeholder {
          color: #8d98a8 !important;
          opacity: 1;
        }
        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.12) !important;
          border-color: rgba(0, 242, 254, 0.4) !important;
          color: #00f2fe !important;
        }
        .modal-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 28px rgba(0, 242, 254, 0.45) !important;
        }
        .modal-direct-email-btn:hover {
          background: rgba(0, 242, 254, 0.08) !important;
          border-color: rgba(0, 242, 254, 0.25) !important;
          color: #33f5ff !important;
        }
        @media (min-width: 640px) {
          .modal-action-divider {
            display: block !important;
          }
        }
        @media (max-width: 639px) {
          .contact-modal-container {
            width: calc(100% - 24px) !important;
            max-height: calc(100dvh - 24px) !important;
            border-radius: 16px !important;
          }
          .contact-modal-header {
            padding: 1rem 1.25rem 0.65rem 1.25rem !important;
          }
          .contact-modal-scroll-area {
            padding: 1rem 1.25rem !important;
          }
          .contact-modal-actions {
            padding: 0.75rem 1.25rem 1.25rem 1.25rem !important;
            flex-direction: column !important;
          }
          .modal-submit-btn, .modal-direct-email-btn {
            width: 100% !important;
            flex: none !important;
          }
        }
      `}</style>
    </div>
  );
};
