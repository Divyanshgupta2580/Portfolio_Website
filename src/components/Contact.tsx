import { PORTFOLIO_DATA } from '../data/portfolioData'
import { ContactForm } from './ContactForm'
import { SocialLinks } from './SocialLinks'

export function Contact() {
  const { personal } = PORTFOLIO_DATA
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid fade-in">
          <div className="contact-left">
            <div className="section-label" style={{ marginBottom: 12 }}>Let's Connect</div>
            <h2 className="contact-headline">Let's Build<br />Something <span>Real.</span></h2>
            <p className="contact-sub">{personal.contact.availability}</p>
            <div className="contact-socials">
              <SocialLinks contact />
            </div>
          </div>
          <div className="contact-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
