import { NAVIGATION, PORTFOLIO_DATA } from '../data/portfolioData'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  const { personal, projects } = PORTFOLIO_DATA
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-intro">
            <a className="wordmark" href="#home">{personal.name}<span>.</span></a>
            <p>{personal.footer.description}</p>
            <SocialLinks />
          </div>
          <nav aria-label="Footer navigation" className="footer-links">
            <p className="eyebrow">Navigation</p>
            {NAVIGATION.map(({ id, label }) => <a key={id} href={'#' + id}>{label}</a>)}
          </nav>
          <div className="footer-links">
            <p className="eyebrow">Projects</p>
            {projects.map((project) => <a key={project.id} href={'#' + project.id}>{project.title}</a>)}
          </div>
          <div className="footer-links">
            <p className="eyebrow">Resources</p>
            <a href={personal.resumePath} target="_blank" rel="noreferrer">Resume</a>
            <a href={personal.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
            <a href={personal.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={'mailto:' + personal.email}>Email</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p>{personal.footer.focus}</p>
        </div>
      </div>
    </footer>
  )
}
