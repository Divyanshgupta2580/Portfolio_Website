import type { Project } from '../data/portfolioData'
import { Dialog } from './Dialog'
import { ProjectDiagram } from './Projects'

export function ProjectModal({ project, onClose, onRequestCode }: {
  project: Project
  onClose: () => void
  onRequestCode: (projectName: string) => void
}) {
  return (
    <Dialog title={project.title} label={project.status + ' · ' + project.category} onClose={onClose}>
      <div className="about-bio">
        <p><strong>{project.subtitle}</strong></p>
        <p><strong>My Contribution</strong> {project.contribution}</p>
        {project.technicalSpecs && (
          <ul className="exp-bullets" style={{ marginBlock: 24 }}>
            {project.technicalSpecs.map(({ label, value }) => <li key={label}><strong>{label}</strong> {value}</li>)}
          </ul>
        )}
        <h3 className="exp-role">Technical Overview</h3>
        <p>{project.fullDescription}</p>
        <h3 className="exp-role">What I Built</h3>
        <ul className="exp-bullets" style={{ marginBlock: 24 }}>
          {[...new Set([...project.showcase.highlights, ...project.highlights])].map((highlight) =>
            <li key={highlight}>{highlight}</li>)}
        </ul>
        <h3 className="exp-role">Architecture &amp; Data Flow</h3>
        <p>{project.architectureOverview}</p>
        <ProjectDiagram project={project} />
        <h3 className="exp-role" style={{ marginTop: 24 }}>Stack</h3>
        <div className="project-tech">
          {project.technologies.map((technology) => <span className="tech-badge" key={technology}>{technology}</span>)}
        </div>
      </div>
      <div className="project-links" style={{ marginTop: 24 }}>
        {project.githubUrl
          ? <a className="proj-link" href={project.githubUrl} target="_blank" rel="noreferrer" data-hover>GitHub ↗</a>
          : <button type="button" className="proj-link" style={{ color: 'var(--text)' }}
              onClick={() => onRequestCode(project.title)} data-hover>Request Code Access ↗</button>}
        {project.demoUrl && <a className="proj-link" href={project.demoUrl} target="_blank" rel="noreferrer" data-hover>View ↗</a>}
      </div>
    </Dialog>
  )
}
