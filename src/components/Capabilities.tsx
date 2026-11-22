import { PORTFOLIO_DATA } from '../data/portfolioData'
import { BoltMark, CodeMark, ServerMark } from './ReferenceIcons'
import { SectionHeading } from './SectionHeading'

const icons = [BoltMark, ServerMark, CodeMark]

export function Capabilities() {
  return (
    <section id="capabilities">
      <div className="container">
        <SectionHeading number="08" label="What I Do" title="Engineering" accent="Capabilities." />
        <div className="ach-grid fade-up">
          {PORTFOLIO_DATA.capabilities.map((capability, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div className="ach-card" key={capability.id} data-hover>
                <div className="ach-icon"><Icon /></div>
                <h3 className="ach-title">{capability.title}</h3>
                <p className="ach-subtitle">{capability.description}</p>
                <div className="project-tech">
                  {capability.tags.map((tag) => <span className="tech-badge" key={tag}>{tag}</span>)}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
