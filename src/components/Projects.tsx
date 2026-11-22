import { useState } from 'react'
import { PORTFOLIO_DATA } from '../data/portfolioData'
import type { Project } from '../data/portfolioData'
import { SectionHeading } from './SectionHeading'

const categoryColors = ['#9D4EDD', '#F50057', '#00FF9D', '#FF6B35']

export function ProjectDiagram({ project }: { project: Project }) {
  const [active, setActive] = useState(0)
  const { diagrams } = project.showcase
  const diagram = diagrams[active]
  const id = project.id + '-diagram'

  return (
    <div>
      <div className="project-tech" role="group" aria-label={project.title + ' diagram views'}>
        {diagrams.map(({ label }, index) => (
          <button key={label} type="button" className={active === index ? 'proj-link primary' : 'proj-link'}
            style={{ color: active === index ? '#000' : 'var(--text)' }}
            aria-pressed={active === index} aria-controls={id} onClick={() => setActive(index)} data-hover>
            {label}
          </button>
        ))}
      </div>
      <div id={id} aria-label={diagram.label} style={{ marginTop: 20 }}>
        {diagram.title && <h4 className="exp-role">{diagram.title}</h4>}
        <ol className="exp-bullets">
          {diagram.steps.map((step) => {
            const [title, detail] = step.split('\n')
            return (
              <li key={step}>
                {diagram.flow ? <strong>{title}</strong> : title}
                {detail && <div>{detail}</div>}
              </li>
            )
          })}
        </ol>
        {diagram.note && <p className="project-impact" style={{ marginTop: 20 }}>{diagram.note}</p>}
      </div>
    </div>
  )
}

export function Projects({ onOpenProject }: { onOpenProject: (project: Project) => void }) {
  return (
    <section id="projects">
      <div className="container">
        <SectionHeading number="04" label="Featured Work" title="Things I've" accent="Built." />
        <div className="projects-grid fade-up">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            const { showcase } = project
            const color = categoryColors[index % categoryColors.length]
            return (
              <div className="project-card" key={project.id} id={project.id} data-tilt>
                <div className="project-header">
                  <div className="project-cat" style={{ borderColor: color, color, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontWeight: 'bolder' }}>{project.category}</div>
                  <div className="project-featured">★ {project.status}</div>
                </div>
                <div className="project-body">
                  <div className="project-title">{project.title}</div>
                  <div className="project-tagline" style={{ color }}>{showcase.subtitle}</div>
                  <p className="project-desc">{showcase.description}</p>
                  <div className="project-impact">{showcase.highlights[0]}</div>
                  <div className="project-tech">
                    {showcase.technologies.map((technology) => <span className="tech-badge" key={technology}>{technology}</span>)}
                  </div>
                </div>
                <div className="project-links">
                  {project.githubUrl && <a className="proj-link" href={project.githubUrl} target="_blank" rel="noreferrer" data-hover>GitHub ↗</a>}
                  {project.demoUrl && <a className="proj-link view-btn" href={project.demoUrl} target="_blank" rel="noreferrer" data-hover>View ↗</a>}
                  <button type="button" className="proj-link" style={{ color: 'var(--text)' }}
                    onClick={() => onOpenProject(project)} data-hover>Technical Specs ↗</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
