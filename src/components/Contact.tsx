import { PORTFOLIO_DATA } from '../data/portfolioData'
import { ContactForm } from './ContactForm'
import { ScrollReveal } from './ScrollReveal'
import { SocialLinks } from './SocialLinks'

export function Contact() {
  const { personal } = PORTFOLIO_DATA
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="shell">
        <ScrollReveal className="contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">Let's Connect</p>
            <h2 id="contact-title">Let's Build Something Real</h2>
            <p>{personal.contact.availability}</p>
            <h3>Direct Channels</h3>
            <p>{personal.contact.directChannels}</p>
            <a href={'mailto:' + personal.email} className="contact-email">{personal.email}</a>
            <div className="actions">
              <SocialLinks />
              <a href={personal.resumePath} className="button" target="_blank" rel="noreferrer">Download My Resume</a>
            </div>
          </div>
          <div className="contact-panel">
            <h3>Send a Message</h3>
            <p>Fill out the form and I'll get back to you as soon as possible.</p>
            <ContactForm />
          </div>
        </ScrollReveal>
        <dl className="contact-notes">
          {personal.contact.notes.map(({ title, description }) => (
            <div key={title}><dt>{title}</dt><dd>{description}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  )
}
