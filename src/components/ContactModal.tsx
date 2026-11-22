import { PORTFOLIO_DATA } from '../data/portfolioData'
import { ContactForm } from './ContactForm'
import { Dialog } from './Dialog'

export function ContactModal({ onClose, opportunity, details }: {
  onClose: () => void
  opportunity: string
  details?: string
}) {
  const { personal } = PORTFOLIO_DATA
  return (
    <Dialog title={'Work With ' + personal.name} label="Engineering Inquiry" onClose={onClose}>
      <p className="project-desc">{personal.contact.inquiry}</p>
      <ContactForm opportunity={opportunity} details={details} />
      <a className="connect-link" href={'mailto:' + personal.email} data-hover>Direct Email ↗</a>
    </Dialog>
  )
}
