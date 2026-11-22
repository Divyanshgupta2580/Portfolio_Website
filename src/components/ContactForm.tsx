import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import { PORTFOLIO_DATA } from '../data/portfolioData'
import { submitContactForm } from '../services/contactService'
import type { SubmissionResult } from '../services/contactService'

const { personal, opportunityTypes } = PORTFOLIO_DATA

export function ContactForm({ opportunity = opportunityTypes[0], details = '' }: {
  opportunity?: string
  details?: string
}) {
  const id = useId()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [type, setType] = useState(opportunity)
  const [message, setMessage] = useState(details)
  const [pending, setPending] = useState(false)
  const [result, setResult] = useState<SubmissionResult | null>(null)
  const options = opportunityTypes.includes(opportunity) ? opportunityTypes : [...opportunityTypes, opportunity]

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (pending) return
    setPending(true)
    setResult(null)
    const response = await submitContactForm({ name, email, opportunityType: type, message })
    setPending(false)
    setResult(response)
    if (!response.success) return
    setName('')
    setEmail('')
    setType(opportunity)
    setMessage('')
  }

  const subject = encodeURIComponent('Inquiry: ' + type + ' - ' + (name || 'Visitor'))
  const body = encodeURIComponent(
    'Hi ' + personal.name.split(' ')[0] + ',\n\n' +
    (message || 'I would like to discuss an opportunity with you.') +
    '\n\nName: ' + name + '\nEmail: ' + email + '\nOpportunity Type: ' + type,
  )

  return (
    <form className="inquiry-form" aria-busy={pending} onSubmit={submit}>
      <div className="form-row">
        <label htmlFor={id + '-name'}>Your Name *
          <input id={id + '-name'} name="name" autoComplete="name" placeholder="Recruiter or Lead Engineer"
            value={name} onChange={(event) => setName(event.target.value)} required />
        </label>
        <label htmlFor={id + '-email'}>Your Email *
          <input id={id + '-email'} name="email" type="email" autoComplete="email" placeholder="email@company.com"
            maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
      </div>
      <label htmlFor={id + '-type'}>What are you looking for? *
        <select id={id + '-type'} name="opportunityType" value={type} onChange={(event) => setType(event.target.value)} required>
          {options.map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>
      <label htmlFor={id + '-details'}>Project / Role Details *
        <textarea id={id + '-details'} name="message" rows={5} minLength={5} maxLength={5000}
          placeholder="Brief description of the role, project, or collaboration..."
          value={message} onChange={(event) => setMessage(event.target.value)} required />
      </label>
      <div className="actions">
        <button type="submit" className="button button-primary" disabled={pending}>
          {pending ? 'Sending…' : 'Submit Inquiry'}
        </button>
        <a className="button" href={'mailto:' + personal.email + '?subject=' + subject + '&body=' + body}>Direct Email</a>
      </div>
      {result && <p className="form-result" role={result.success ? 'status' : 'alert'} data-success={result.success}>{result.message}</p>}
    </form>
  )
}
