import type { Project } from '../data/portfolioData'
import { Dialog } from './Dialog'
import { Tags } from './Tags'

export function ProjectModal({ project, onClose, onRequestCode }: {
  project: Project
  onClose: () => void
  onRequestCode: (projectName: string) => void
}) {
  return (
    <Dialog title={project.title} label={project.status + ' · ' + project.category} onClose={onClose}>
      <p className="project-subtitle">{project.subtitle}</p>
      <p><strong>My Contribution</strong> {project.contribution}</p>
      {project.technicalSpecs && (
        <dl className="specs-grid">
          {project.technicalSpecs.map(({ label, value }) => (
            <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
          ))}
        </dl>
      )}
      <h3>Technical Overview</h3>
      <p>{project.fullDescription}</p>
      <h3>What I Built</h3>
      <ul className="fact-list">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
      <h3>Architecture &amp; Data Flow</h3>
      <p>{project.architectureOverview}</p>
      <h3>Stack</h3>
      <Tags items={project.technologies} />
      <div className="actions">
        {project.githubUrl
          ? <a className="button" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub Repository</a>
          : <button type="button" className="button button-primary" onClick={() => onRequestCode(project.title)}>
              Request Code Access
            </button>}
        {project.demoUrl && <a className="button" href={project.demoUrl} target="_blank" rel="noreferrer">Live Demonstration</a>}
      </div>
    </Dialog>
  )
}
