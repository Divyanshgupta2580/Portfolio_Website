import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { submitContactForm } from '../services/contactService';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';
import {
  Mail,
  Send,
  Sparkles,
  ArrowRight,
  Clock,
  Users,
  Target,
  FileText,
  UserRound,
  BriefcaseBusiness,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';

interface ContactProps {
  selectedOpportunity?: string | null;
}

export const Contact: React.FC<ContactProps> = ({ selectedOpportunity }) => {
  const p = PORTFOLIO_DATA.personal;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opportunityType: selectedOpportunity || 'Internship',
    message: '',
  });

  useEffect(() => {
    if (selectedOpportunity) {
      setFormData((prev) => ({ ...prev, opportunityType: selectedOpportunity }));
    }
  }, [selectedOpportunity]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setFeedbackMessage('');

    const result = await submitContactForm({
      name: formData.name,
      email: formData.email,
      opportunityType: formData.opportunityType,
      subject: `Inquiry: ${formData.opportunityType} from ${formData.name}`,
      message: formData.message,
    });

    if (result.success) {
      setStatus('success');
      setFeedbackMessage(result.message);
      setFormData({
        name: '',
        email: '',
        opportunityType: 'Internship',
        message: '',
      });
    } else {
      setStatus('error');
      setFeedbackMessage(result.message);
    }
  };

  const handleDirectEmail = () => {
    const subjectText = encodeURIComponent(`Inquiry: ${formData.opportunityType} - ${formData.name || 'Visitor'}`);
    const bodyText = encodeURIComponent(
      `Hi Divyansh,\n\n${formData.message || 'I would like to connect with you regarding an opportunity.'}\n\nFrom: ${formData.name}\nEmail: ${formData.email}\nOpportunity: ${formData.opportunityType}`
    );
    window.location.href = `mailto:${p.email}?subject=${subjectText}&body=${bodyText}`;
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-primary)', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* ================= TOP HEADER ================= */}
        <ScrollReveal direction="heading" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              color: 'var(--accent-cyan)',
              fontSize: '0.85rem',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.05em',
              marginBottom: '0.85rem',
            }}
          >
            <Sparkles size={14} color="var(--accent-cyan)" />
            <span>Let's Connect</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              lineHeight: 1.15,
            }}
          >
            Let's Build Something <span style={{ color: 'var(--accent-cyan)' }}>Real</span>
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            I am open to engineering internships, freelance technical challenges, AI/ML collaborations, and full-time software developer opportunities.
          </p>
        </ScrollReveal>

        {/* ================= MAIN 2-COLUMN CONTACT AREA ================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'stretch',
          }}
          className="contact-main-grid"
        >
          {/* ----- LEFT COLUMN: DIRECT CHANNELS ----- */}
          <ScrollReveal
            direction="up"
            delay={0}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <div>
              <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Direct Channels
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Have an opportunity, project idea, or technical proposal? Reach out directly.
                </p>
              </div>

              {/* 3 EQUAL-SIZED HORIZONTAL CARDS */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                }}
                className="direct-channels-grid"
              >
                {/* 1. EMAIL CARD */}
                <a
                  href={`mailto:${p.email}`}
                  className="contact-card-box"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-card)',
                    borderRadius: '14px',
                    padding: '1.6rem 0.65rem 1.25rem 0.65rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div
                    style={{
                      width: '58px',
                      height: '58px',
                      borderRadius: '50%',
                      background: 'var(--accent-cyan-subtle)',
                      border: '1.5px solid var(--accent-cyan-border)',
                      boxShadow: '0 0 16px var(--accent-cyan-glow)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <Mail size={22} color="var(--accent-cyan)" />
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      color: 'var(--accent-cyan)',
                      letterSpacing: '0.06em',
                      marginBottom: '0.45rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    EMAIL
                  </span>

                  <span
                    style={{
                      fontSize: '0.76rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.35,
                      marginBottom: '1.25rem',
                      minHeight: '2.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      wordBreak: 'break-word',
                    }}
                  >
                    inbox.DivyanshGupta1<br />@protonmail.com
                  </span>

                  <div
                    className="card-arrow-btn"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-card)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <ArrowRight size={13} />
                  </div>
                </a>

                {/* 2. GITHUB CARD */}
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-box"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-card)',
                    borderRadius: '14px',
                    padding: '1.6rem 0.65rem 1.25rem 0.65rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div
                    style={{
                      width: '58px',
                      height: '58px',
                      borderRadius: '50%',
                      background: 'var(--accent-purple-subtle)',
                      border: '1.5px solid var(--accent-purple-border)',
                      boxShadow: '0 0 16px var(--accent-purple-glow)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <GithubIcon size={24} color="var(--accent-purple)" />
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      color: 'var(--accent-purple)',
                      letterSpacing: '0.06em',
                      marginBottom: '0.45rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    GITHUB
                  </span>

                  <span
                    style={{
                      fontSize: '0.76rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.35,
                      marginBottom: '1.25rem',
                      minHeight: '2.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      wordBreak: 'break-word',
                    }}
                  >
                    github.com/<br />Divyanshgupta2580
                  </span>

                  <div
                    className="card-arrow-btn"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-card)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-purple)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <ArrowRight size={13} />
                  </div>
                </a>

                {/* 3. LINKEDIN CARD */}
                <a
                  href={p.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-box"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-card)',
                    borderRadius: '14px',
                    padding: '1.6rem 0.65rem 1.25rem 0.65rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div
                    style={{
                      width: '58px',
                      height: '58px',
                      borderRadius: '50%',
                      background: 'var(--accent-emerald-subtle)',
                      border: '1.5px solid var(--accent-emerald-border)',
                      boxShadow: '0 0 16px var(--accent-emerald-glow)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <LinkedinIcon size={22} color="var(--accent-emerald)" />
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      color: 'var(--accent-emerald)',
                      letterSpacing: '0.06em',
                      marginBottom: '0.45rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    LINKEDIN
                  </span>

                  <span
                    style={{
                      fontSize: '0.76rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.35,
                      marginBottom: '1.25rem',
                      minHeight: '2.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      wordBreak: 'break-word',
                    }}
                  >
                    linkedin.com/in/<br />divyanshgupta2007
                  </span>

                  <div
                    className="card-arrow-btn"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-card)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-emerald)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <ArrowRight size={13} />
                  </div>
                </a>
              </div>
            </div>

            {/* WIDE OUTLINED RESUME BUTTON */}
            <div>
              <a
                href={p.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-download-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.65rem',
                  width: '100%',
                  height: '48px',
                  borderRadius: '10px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <FileText size={17} color="var(--accent-cyan)" />
                <span>Download My Resume</span>
              </a>
            </div>
          </ScrollReveal>

          {/* ----- RIGHT COLUMN: SEND A MESSAGE FORM ----- */}
          <ScrollReveal
            direction="up"
            delay={100}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              borderRadius: '16px',
              padding: '2.25rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-card)',
              height: '100%',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  marginBottom: '0.35rem',
                }}
              >
                <Send size={18} color="var(--accent-cyan)" />
                <span>Send a Message</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                Fill out the form and I'll get back to you as soon as possible.
              </p>
            </div>

            {status === 'success' ? (
              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  borderRadius: '12px',
                  padding: '2.5rem 1.5rem',
                  textAlign: 'center',
                  margin: 'auto 0',
                }}
                className="animate-fade-in"
              >
                <CheckCircle2 size={44} color="#10B981" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
                  Message Delivered!
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  {feedbackMessage || 'Thank you for reaching out. Divyansh will get back to you shortly!'}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn btn-secondary btn-sm"
                  style={{ borderRadius: '8px', padding: '0.5rem 1.25rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                {status === 'error' && (
                  <div
                    style={{
                      padding: '0.75rem 1rem',
                      background: 'rgba(239, 68, 68, 0.15)',
                      border: '1px solid rgba(239, 68, 68, 0.4)',
                      borderRadius: '8px',
                      color: '#fca5a5',
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      fontWeight: 500,
                    }}
                  >
                    <AlertCircle size={17} style={{ flexShrink: 0 }} />
                    <span>{feedbackMessage}</span>
                  </div>
                )}

                {/* ROW 1: NAME AND EMAIL ON SAME ROW */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                  }}
                  className="form-row-2col"
                >
                  {/* Your Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: 'block',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Your Name *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <UserRound
                        size={16}
                        color="var(--accent-cyan)"
                        style={{
                          position: 'absolute',
                          left: '1rem',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          pointerEvents: 'none',
                        }}
                      />
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Recruiter or Lead Engineer"
                        required
                        disabled={status === 'submitting'}
                        className="form-input-field"
                        style={{
                          width: '100%',
                          height: '46px',
                          paddingLeft: '2.75rem',
                          paddingRight: '1rem',
                          background: 'var(--bg-input)',
                          border: '1px solid var(--border-input)',
                          borderRadius: '8px',
                          color: 'var(--text-primary)',
                          fontSize: '0.88rem',
                          outline: 'none',
                          transition: 'all 0.2s ease',
                        }}
                      />
                    </div>
                  </div>

                  {/* Your Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: 'block',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Your Email *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Mail
                        size={16}
                        color="var(--accent-cyan)"
                        style={{
                          position: 'absolute',
                          left: '1rem',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          pointerEvents: 'none',
                        }}
                      />
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@company.com"
                        required
                        disabled={status === 'submitting'}
                        className="form-input-field"
                        style={{
                          width: '100%',
                          height: '46px',
                          paddingLeft: '2.75rem',
                          paddingRight: '1rem',
                          background: 'var(--bg-input)',
                          border: '1px solid var(--border-input)',
                          borderRadius: '8px',
                          color: 'var(--text-primary)',
                          fontSize: '0.88rem',
                          outline: 'none',
                          transition: 'all 0.2s ease',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* ROW 2: OPPORTUNITY TYPE FULL WIDTH */}
                <div>
                  <label
                    htmlFor="contact-opportunity"
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Opportunity Type *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <BriefcaseBusiness
                      size={16}
                      color="var(--accent-cyan)"
                      style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                      }}
                    />
                    <select
                      id="contact-opportunity"
                      name="opportunityType"
                      value={formData.opportunityType}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="form-input-field"
                      style={{
                        width: '100%',
                        height: '46px',
                        paddingLeft: '2.75rem',
                        paddingRight: '2.5rem',
                        background: 'var(--bg-input)',
                        border: '1px solid var(--border-input)',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '0.88rem',
                        outline: 'none',
                        appearance: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {PORTFOLIO_DATA.opportunityTypes.map((type, idx) => (
                        <option key={idx} value={type} style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      color="var(--text-secondary)"
                      style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                </div>

                {/* ROW 3: PROJECT / ROLE DETAILS FULL WIDTH */}
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Project / Role Details *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <FileText
                      size={16}
                      color="var(--accent-cyan)"
                      style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '0.95rem',
                        pointerEvents: 'none',
                      }}
                    />
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Brief description of the role, project, or collaboration..."
                      required
                      disabled={status === 'submitting'}
                      className="form-input-field"
                      style={{
                        width: '100%',
                        minHeight: '120px',
                        padding: '0.85rem 1rem 0.85rem 2.75rem',
                        background: 'var(--bg-input)',
                        border: '1px solid var(--border-input)',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '0.88rem',
                        outline: 'none',
                        resize: 'vertical',
                        lineHeight: 1.5,
                        transition: 'all 0.2s ease',
                      }}
                    />
                  </div>
                </div>

                {/* BOTTOM ACTIONS: SUBMIT INQUIRY + DIRECT EMAIL */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    marginTop: '0.5rem',
                  }}
                  className="form-action-row"
                >
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="submit-inquiry-btn"
                    style={{
                      flex: '1.2',
                      height: '46px',
                      background: 'var(--accent-cyan)',
                      color: 'var(--text-on-accent)',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: 750,
                      fontSize: '0.92rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.55rem',
                      cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 0 15px var(--accent-cyan-glow)',
                    }}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={16} className="animate-float" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>

                  <div className="action-divider" style={{ width: '1px', height: '24px', background: 'var(--border-card)' }} />

                  <button
                    type="button"
                    onClick={handleDirectEmail}
                    className="direct-email-btn"
                    style={{
                      flex: '1',
                      height: '46px',
                      background: 'transparent',
                      color: 'var(--accent-cyan)',
                      border: 'none',
                      fontWeight: 650,
                      fontSize: '0.92rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.55rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <Mail size={16} color="var(--accent-cyan)" />
                    <span>Direct Email</span>
                  </button>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>

        {/* ================= BOTTOM HORIZONTAL INFORMATION STRIP ================= */}
        <ScrollReveal
          direction="up"
          delay={150}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: '14px',
            padding: '1.6rem 2.25rem',
            marginTop: '3.5rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            alignItems: 'center',
            gap: '2rem',
            boxShadow: 'var(--shadow-card)',
          }}
          className="bottom-info-strip"
        >
          {/* Item 1: Quick Response */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.15rem',
            }}
            className="info-strip-item"
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--accent-cyan-subtle)',
                border: '1.5px solid var(--accent-cyan-border)',
                boxShadow: '0 0 14px var(--accent-cyan-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Clock size={20} color="var(--accent-cyan)" />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                Quick Response
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                I typically respond within 24 hours
              </div>
            </div>
          </div>

          {/* Item 2: Open to Opportunities */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.15rem',
            }}
            className="info-strip-item"
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--accent-purple-subtle)',
                border: '1.5px solid var(--accent-purple-border)',
                boxShadow: '0 0 14px var(--accent-purple-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Users size={20} color="var(--accent-purple)" />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                Open to Opportunities
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Internships, projects and collaborations
              </div>
            </div>
          </div>

          {/* Item 3: Let's Create Impact */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.15rem',
            }}
            className="info-strip-item info-strip-item-last"
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--accent-emerald-subtle)',
                border: '1.5px solid var(--accent-emerald-border)',
                boxShadow: '0 0 14px var(--accent-emerald-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Target size={20} color="var(--accent-emerald)" />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                Let's Create Impact
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Building practical solutions that matter
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .contact-card-box:hover {
          transform: translateY(-3px);
          border-color: var(--accent-cyan-border) !important;
          box-shadow: var(--shadow-card-hover) !important;
        }
        .contact-card-box:hover .card-arrow-btn {
          background: var(--accent-cyan-subtle) !important;
          border-color: var(--accent-cyan) !important;
          transform: translateX(2px);
        }
        .resume-download-btn:hover {
          border-color: var(--accent-cyan) !important;
          color: var(--accent-cyan) !important;
          background: var(--accent-cyan-subtle) !important;
          transform: translateY(-2px);
        }
        .form-input-field:focus {
          border-color: var(--accent-cyan) !important;
          box-shadow: 0 0 0 2px var(--accent-cyan-glow) !important;
        }
        .submit-inquiry-btn:hover:not(:disabled) {
          background: var(--accent-cyan-hover) !important;
          box-shadow: 0 0 22px var(--accent-cyan-glow) !important;
          transform: translateY(-1px);
        }
        .direct-email-btn:hover {
          color: var(--accent-cyan-hover) !important;
          transform: translateY(-1px);
        }

        @media (min-width: 968px) {
          .contact-main-grid {
            grid-template-columns: 1fr 1.08fr !important;
            gap: 2.5rem !important;
          }
          .info-strip-item:not(.info-strip-item-last) {
            border-right: 1px solid var(--border-card);
            padding-right: 1.5rem;
          }
        }

        @media (max-width: 967px) {
          .bottom-info-strip {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 1.5rem !important;
          }
        }

        @media (max-width: 600px) {
          .form-row-2col {
            grid-template-columns: 1fr !important;
          }
          .direct-channels-grid {
            grid-template-columns: 1fr !important;
          }
          .form-action-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .action-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
