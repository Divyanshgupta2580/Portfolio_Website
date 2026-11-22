import { ABOUT_MODAL_DATA, PORTFOLIO_DATA } from '../data/portfolioData'
import type { Project } from '../data/portfolioData'
import { Dialog } from './Dialog'

const titles = {
  projects: 'Major Projects',
  tech: 'Core Technologies',
  hackathons: 'Hackathons & Competitions',
  learning: ABOUT_MODAL_DATA.learning.title,
}

export type AboutModalType = keyof typeof titles

export function AboutModal({ topic, onClose, onOpenProject }: {
  topic: AboutModalType
  onClose: () => void
  onOpenProject: (project: Project) => void
}) {
  const { projects, technologies, hackathons, learning } = ABOUT_MODAL_DATA
  return (
    <Dialog title={titles[topic]} onClose={onClose}>
      {topic === 'projects' && (
        <div className="projects-grid">
          {projects.map((entry) => {
            const project = PORTFOLIO_DATA.projects.find(({ id }) => id === entry.id)
            return (
              <div className="project-card" key={entry.id}>
                <div className="project-header"><div className="project-featured">{entry.badge}</div></div>
                <div className="project-body">
                  <div className="project-title">{entry.title}</div>
                  <p className="project-desc">{entry.tagline}</p>
                  <p className="project-impact">{entry.contribution}</p>
                  <div className="project-tech">
                    {entry.technologies.map((technology) => <span className="tech-badge" key={technology}>{technology}</span>)}
                  </div>
                </div>
                {project && (
                  <div className="project-links">
                    <button className="proj-link" type="button" style={{ color: 'var(--text)' }}
                      onClick={() => onOpenProject(project)} data-hover>Technical Specs ↗</button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
      {topic === 'tech' && (
        <div className="skills-tags">
          {technologies.map((technology) => <span className="skill-tag" key={technology}>{technology}</span>)}
        </div>
      )}
      {topic === 'hackathons' && (
        <div className="exp-list">
          {hackathons.map((entry) => (
            <div className="exp-item" key={entry.id}>
              <div className="exp-left">
                <div className="exp-company">{entry.name}</div>
                <div className="exp-type-badge">{entry.badge}</div>
              </div>
              <div className="exp-right">
                <h3 className="exp-role">{entry.project ?? entry.focus}</h3>
                <ul className="exp-bullets">
                  <li>{entry.description}</li>
                  <li>{entry.contribution}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
      {topic === 'learning' && (
        <div className="about-bio">
          <p><strong>{learning.tagline}</strong> · {learning.description}</p>
          {learning.pillars.map(({ label, desc }) => <p key={label}><strong>{label}</strong> {desc}</p>)}
          <a className="connect-link" href="#skills" onClick={onClose} data-hover>{learning.ctaLabel}</a>
        </div>
      )}
    </Dialog>
  )
}
