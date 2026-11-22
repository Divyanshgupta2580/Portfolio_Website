import { useEffect, useId, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { PORTFOLIO_DATA } from '../data/portfolioData'
import { submitContactForm } from '../services/contactService'
import type { SubmissionResult } from '../services/contactService'

const defaultOpportunity = PORTFOLIO_DATA.opportunityTypes[0]

export function ContactForm({ opportunity = defaultOpportunity, details = '' }: {
  opportunity?: string
  details?: string
}) {
  const id = useId()
  const formRef = useRef<HTMLFormElement>(null)
  const [pending, setPending] = useState(false)
  const [result, setResult] = useState<SubmissionResult | null>(null)
  const sent = result?.success === true

  useEffect(() => {
    if (!sent) return
    const reset = window.setTimeout(() => {
      formRef.current?.reset()
      setResult(null)
    }, 5000)
    return () => window.clearTimeout(reset)
  }, [sent])

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (pending || sent) return
    const fields = new FormData(event.currentTarget)
    setResult(null)
    setPending(true)
    const response = await submitContactForm({
      name: String(fields.get('name') ?? ''),
      email: String(fields.get('email') ?? ''),
      subject: String(fields.get('subject') ?? ''),
      message: String(fields.get('message') ?? ''),
      opportunityType: opportunity,
    })
    setPending(false)
    setResult(response)
  }

  return (
    <form className="contact-form" ref={formRef} aria-busy={pending} onSubmit={submit}>
      <div className="form-group">
        <label className="info-label" htmlFor={id + '-name'}>Name</label>
        <input type="text" name="name" id={id + '-name'} className="form-input" placeholder="Your Name"
          autoComplete="name" required />
      </div>
      <div className="form-group">
        <label className="info-label" htmlFor={id + '-email'}>Email</label>
        <input type="email" name="email" id={id + '-email'} className="form-input" placeholder="your@email.com"
          autoComplete="email" maxLength={254} required />
      </div>
      <div className="form-group">
        <label className="info-label" htmlFor={id + '-subject'}>Subject</label>
        <input type="text" name="subject" id={id + '-subject'} className="form-input" placeholder="What's this about?"
          defaultValue={opportunity === defaultOpportunity ? undefined : opportunity} />
      </div>
      <div className="form-group">
        <label className="info-label" htmlFor={id + '-message'}>Message</label>
        <textarea name="message" id={id + '-message'} className="form-input" rows={4}
          placeholder="Feel free to share your thoughts..." defaultValue={details} minLength={5} maxLength={5000} required />
      </div>
      {!sent && (
        <button type="submit" className="contact-email-btn" disabled={pending}
          style={{ width: '100%', justifyContent: 'center', cursor: 'pointer', border: '2px solid #000' }} data-hover>
          {pending ? 'SENDING…' : 'SEND MESSAGE'}
        </button>
      )}
      {result && (
        <div role={sent ? 'status' : 'alert'}
          style={{ color: sent ? 'var(--text)' : 'var(--red)', fontFamily: "'Space Mono', monospace", marginTop: 15, textAlign: 'center', fontWeight: 'bold' }}>
          {sent ? '✓ MESSAGE SENT SUCCESSFULLY!' : result.message}
        </div>
      )}
    </form>
  )
}
