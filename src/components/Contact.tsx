import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { submitContactForm } from '../services/contactService';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Mail, Send, FileText, CheckCircle2, AlertCircle, Sparkles, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const p = PORTFOLIO_DATA.personal;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    opportunityType: 'Internship',
    message: '',
  });

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

    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus('success');
      setFeedbackMessage(result.message);
      setFormData({
        name: '',
        email: '',
        subject: '',
        opportunityType: 'Internship',
        message: '',
      });
    } else {
      setStatus('error');
      setFeedbackMessage(result.message);
    }
  };

  const handleDirectEmail = () => {
    const subjectText = encodeURIComponent(formData.subject || `Inquiry: ${formData.opportunityType} - ${formData.name || 'Visitor'}`);
    const bodyText = encodeURIComponent(`Hi Divyansh,\n\n${formData.message || 'I would like to connect with you.'}\n\nFrom: ${formData.name}\nEmail: ${formData.email}\nOpportunity: ${formData.opportunityType}`);
    window.location.href = `mailto:${p.email}?subject=${subjectText}&body=${bodyText}`;
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-dark-secondary)' }}>
      <div className="container">
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {/* Header */}
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-badge" style={{ margin: '0 auto 1rem auto' }}>
              <Sparkles size={14} />
              <span>Let's Connect</span>
            </div>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}>
              Let's Build Something Real
            </h2>
            <p className="section-subtitle" style={{ margin: '0.75rem auto 0 auto' }}>
              I am open to engineering internships, freelance technical challenges, AI/ML collaborations, and full-time software developer opportunities.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem',
              alignItems: 'start',
              marginTop: '2.5rem',
            }}
            className="contact-grid"
          >
            {/* Left: Contact Info & Direct Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div className="card" style={{ padding: '2rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    color: 'var(--text-main)',
                  }}
                >
                  Direct Communication
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Have an open role, project inquiry, or technical proposal? Reach out directly via email or social channels.
                </p>

                {/* Contact Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a
                    href={`mailto:${p.email}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      textDecoration: 'none',
                      transition: 'var(--transition-fast)',
                    }}
                    className="tech-badge"
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--accent-cyan-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Personal Email</div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{p.email}</div>
                    </div>
                  </a>

                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      textDecoration: 'none',
                      transition: 'var(--transition-fast)',
                    }}
                    className="tech-badge"
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)' }}>
                      <GithubIcon size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>GitHub Profile</div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>github.com/Divyanshgupta2580</div>
                    </div>
                  </a>

                  <a
                    href={p.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      textDecoration: 'none',
                      transition: 'var(--transition-fast)',
                    }}
                    className="tech-badge"
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa' }}>
                      <LinkedinIcon size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>LinkedIn Profile</div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>linkedin.com/in/divyansh-gupta</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Download Resume Card */}
              <div className="card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-main)' }}>Looking for my resume?</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Get a copy of my latest technical resume.</div>
                </div>
                <a href={p.resumePath} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                  <FileText size={16} />
                  <span>Resume</span>
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="card" style={{ padding: '2.25rem', border: '1px solid var(--border-cyan)' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                  color: 'var(--text-main)',
                }}
              >
                Send a Message
              </h3>

              {status === 'success' ? (
                <div
                  style={{
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    padding: '2rem',
                    textAlign: 'center',
                  }}
                  className="animate-fade-in"
                >
                  <CheckCircle2 size={42} color="#10b981" style={{ margin: '0 auto 1rem auto' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    Message Delivered!
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    {feedbackMessage || 'Thank you for reaching out. Divyansh will get back to you shortly!'}
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn btn-secondary btn-sm">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {status === 'error' && (
                    <div style={{ padding: '0.75rem 1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 'var(--radius-sm)', color: '#f87171', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <AlertCircle size={16} style={{ flexShrink: 0 }} />
                      <span>{feedbackMessage}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }} className="form-row">
                    <div>
                      <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Rivera"
                        required
                        disabled={status === 'submitting'}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'var(--bg-dark)',
                          border: '1px solid var(--border-card)',
                          color: 'var(--text-main)',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        required
                        disabled={status === 'submitting'}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'var(--bg-dark)',
                          border: '1px solid var(--border-card)',
                          color: 'var(--text-main)',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Opportunity Type & Subject */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }} className="form-row">
                    <div>
                      <label htmlFor="contact-opportunity" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                        Opportunity Type
                      </label>
                      <select
                        id="contact-opportunity"
                        name="opportunityType"
                        value={formData.opportunityType}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'var(--bg-dark)',
                          border: '1px solid var(--border-card)',
                          color: 'var(--text-main)',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      >
                        {PORTFOLIO_DATA.opportunityTypes.map((type, idx) => (
                          <option key={idx} value={type} style={{ background: '#07080d', color: '#fff' }}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Software Engineering Opportunity"
                        disabled={status === 'submitting'}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'var(--bg-dark)',
                          border: '1px solid var(--border-card)',
                          color: 'var(--text-main)',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, team, or opportunity..."
                      required
                      disabled={status === 'submitting'}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-dark)',
                        border: '1px solid var(--border-card)',
                        color: 'var(--text-main)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn btn-primary"
                      style={{ flex: 1, opacity: status === 'submitting' ? 0.7 : 1 }}
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={16} className="animate-float" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                    <button type="button" onClick={handleDirectEmail} className="btn btn-secondary" style={{ flex: 1 }}>
                      <Mail size={16} />
                      <span>Send via Email Client</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 868px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
