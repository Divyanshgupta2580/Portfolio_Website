import { ABOUT_MODAL_DATA, PORTFOLIO_DATA } from '../data/portfolioData'
import type { Project } from '../data/portfolioData'
import { Dialog } from './Dialog'
import { Tags } from './Tags'

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
        <>
          <p>Selected flagship platforms engineered and showcased in my portfolio. Click any project to open full technical specifications.</p>
          <div className="dialog-list">
            {projects.map((entry) => {
              const project = PORTFOLIO_DATA.projects.find(({ id }) => id === entry.id)
              return (
                <article key={entry.id}>
                  <p className="eyebrow">{entry.badge}</p>
                  <h3>{entry.title}</h3>
                  <p className="project-subtitle">{entry.tagline}</p>
                  <p>{entry.contribution}</p>
                  <Tags items={entry.technologies} />
                  {project && <button className="button" type="button" onClick={() => onOpenProject(project)}>
                    View Technical Specs
                  </button>}
                </article>
              )
            })}
          </div>
        </>
      )}
      {topic === 'tech' && (
        <>
          <p>Verified languages, frameworks, databases, and infrastructure tools in my engineering stack.</p>
          <Tags items={technologies} />
        </>
      )}
      {topic === 'hackathons' && (
        <>
          <p>Engineering hackathons and verified contributions built under competitive timeframes.</p>
          <div className="dialog-list">
            {hackathons.map((entry) => (
              <article key={entry.id}>
                <p className="eyebrow">{entry.badge}</p>
                <h3>{entry.name}</h3>
                <p className="project-subtitle">{[entry.project, entry.focus].filter(Boolean).join(' · ')}</p>
                <p>{entry.description}</p>
                <p><strong>Contribution</strong> {entry.contribution}</p>
              </article>
            ))}
          </div>
        </>
      )}
      {topic === 'learning' && (
        <>
          <p className="project-subtitle">{learning.tagline}</p>
          <p>{learning.description}</p>
          <dl className="skill-list">
            {learning.pillars.map(({ label, desc }) => (
              <div key={label}><dt>{label}</dt><dd>{desc}</dd></div>
            ))}
          </dl>
          <a className="button" href="#skills" onClick={onClose}>{learning.ctaLabel}</a>
        </>
      )}
    </Dialog>
  )
}
