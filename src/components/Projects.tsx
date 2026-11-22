import { useState } from 'react'
import { Code2 } from 'lucide-react'
import { PORTFOLIO_DATA } from '../data/portfolioData'
import type { Project } from '../data/portfolioData'
import { ScrollReveal } from './ScrollReveal'
import { Tags } from './Tags'

function ProjectDiagram({ project }: { project: Project }) {
  const [active, setActive] = useState(0)
  const { diagrams } = project.showcase
  const diagram = diagrams[active]
  const panel = project.id + '-diagram'

  return (
    <div className="project-preview">
      <div className="diagram-controls" role="group" aria-label={project.title + ' diagram views'}>
        {diagrams.map(({ label }, index) => (
          <button key={label} type="button" aria-pressed={active === index} aria-controls={panel}
            onClick={() => setActive(index)}>
            {label}
          </button>
        ))}
      </div>
      <div className="diagram-panel" id={panel} aria-label={diagram.label}>
        <div key={diagram.label} className="diagram-view">
          {diagram.title && <h4>{diagram.title}</h4>}
          <ol className={diagram.flow ? 'diagram-flow' : 'diagram-steps'}>
            {diagram.steps.map((step) => {
              const [title, detail] = step.split('\n')
              return (
                <li key={step}>
                  {diagram.flow ? <strong>{title}</strong> : title}
                  {detail && <span>{detail}</span>}
                </li>
              )
            })}
          </ol>
          {diagram.note && <p>{diagram.note}</p>}
        </div>
      </div>
    </div>
  )
}

export function Projects({ onOpenProject }: { onOpenProject: (project: Project) => void }) {
  return (
    <section id="projects" className="section section-alternate" aria-labelledby="projects-title">
      <div className="shell">
        <ScrollReveal className="section-heading">
          <h2 id="projects-title">Projects</h2>
        </ScrollReveal>
        <div className="card-grid project-grid">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            const { showcase } = project
            return (
              <ScrollReveal as="article" className="panel project-card" id={project.id} key={project.id} delay={(index % 2) * 90}>
                <div className="project-main">
                  <div className="project-meta">
                    <span className="status-tag">{project.status}</span>
                    <span>{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{showcase.subtitle}</p>
                  <p>{showcase.description}</p>
                </div>
                {project.thumbnail && <img className="project-thumbnail" src={project.thumbnail} alt={project.title} loading="lazy" />}
                <ProjectDiagram project={project} />
                <div className="project-extra">
                  <details>
                    <summary>Project highlights</summary>
                    <ul className="fact-list">{showcase.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                  </details>
                  <Tags items={showcase.technologies} />
                  <div className="actions">
                    <button type="button" className="button" onClick={() => onOpenProject(project)}>
                      <Code2 size={18} aria-hidden="true" /> View Technical Specs
                    </button>
                    {project.githubUrl && <a className="button" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub Repository</a>}
                    {project.demoUrl && <a className="button" href={project.demoUrl} target="_blank" rel="noreferrer">Live Demonstration</a>}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
